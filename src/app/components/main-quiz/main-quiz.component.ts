import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question, Quiz } from '../../models/models';
import { CommonModule } from '@angular/common';
import { FinalResultComponent } from '../final-result/final-result.component';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.css'],
  imports: [CommonModule, FinalResultComponent],
})
export class MainQuizComponent implements OnInit, OnDestroy, AfterViewInit {
  quizId: number | null = null;
  quizCategory: string | null = null;
  quiz: Quiz = {} as Quiz; //Type assertion to avoid type error
  questionNumber: number = 0;
  optionId: number | undefined = undefined;
  popUp: boolean = false;
  selected: boolean = false;
  correct: number = 0;
  wrong: number = 0;
  points: number = 0;
  score: number = 0;
  grade: string = '';
  icon: string = '';
  modalComponent: boolean = false;
  private timeOutID: any;
  constructor(
    public quizService: QuizService,
    private route: ActivatedRoute,
    private router: Router,
    private pointsService: PointsService
  ) {}

  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.quizCategory = String(this.route.snapshot.paramMap.get('category'));
    this.quiz = this.quizService.getQuiz(this.quizId, this.quizCategory);
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.timeOutID) {
      clearTimeout(this.timeOutID);
    }
  }

  getAlphabeticalIndex(index: number): string {
    return String.fromCharCode(97 + index); // 97 is ASCII for 'a'
  }

  toggling(id: number) {
    this.selected = true;
    this.optionId = id - 1;
  }

  resetQuestionNumber() {
    this.questionNumber = 0;
  }

  isCorrect(): boolean {
    return this.quiz.questions[this.questionNumber].options[this.optionId!]
      .isCorrect;
  }

  setgrade(score: number): void {
    switch (true) {
      case score >= 0 && score < 50:
        this.grade = 'Needs Improvements!';
        this.icon = 'fa-solid fa-thumbs-down';
        break;
      case score >= 50 && score < 80:
        this.grade = 'Good!';
        this.icon = 'fa-solid fa-medal';
        break;
      default:
        this.grade = 'Very Good!';
        this.icon = 'fa-solid fa-medal';
    }
  }

  onRestartQuiz(): void {
    this.wrong = 0;
    this.correct = 0;
    this.points = 0;
    this.score = 0;
    this.modalComponent = false;
    this.quizService.toUnCompletedQuizes(this.quizId!, this.quizCategory!);
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  onSubmit(question: Question) {
    if (this.selected) {
      question.isCompeleted = true;
      if (this.isCorrect()) {
        this.correct++;
        this.points += 10;
        this.score = Math.round(
          (this.correct / this.quiz.questions.length) * 100
        );
      } else {
        this.wrong++;
      }
      if (this.questionNumber < this.quiz.questions.length - 1) {
        this.questionNumber++;
      }
    } else {
      this.popUp = true;
      setTimeout(() => (this.popUp = false), 1500);
    }

    if (this.quiz.questions[this.quiz.questions.length - 1].isCompeleted) {
      this.setgrade(this.score);
      this.modalComponent = true;
      this.quiz.completed = true;
      this.quiz.score = this.score;
      this.pointsService.addCorrectAns(this.correct);
      this.pointsService.addWrongAns(this.wrong);
    } else {
      this.optionId = undefined;
      this.selected = false;
    }
  }
}
