import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Question, Quiz } from '../../models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.css'],
  imports: [CommonModule],
})
export class MainQuizComponent implements OnInit {
  quizId: number | null = null;
  quiz: Quiz = {} as Quiz; //Type assertion to avoid type error
  questionNumber: number = 0;
  optionId: number = 0;
  popUp: boolean = false;
  selected: boolean = false;
  constructor(public quizService: QuizService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.getQuizById(this.quizId);
  }

  getAlphabeticalIndex(index: number): string {
    return String.fromCharCode(97 + index); // 97 is ASCII for 'a'
  }

  toggling(id: number) {
    this.selected = true;
    this.optionId = id;
  }

  resetQuestionNumber() {
    this.questionNumber = 0;
  }

  onSubmit(question: Question) {
    if (
      this.questionNumber < this.quiz.questions.length - 1 &&
      this.selected === true
    ) {
      question.isCompeleted = true;
      this.questionNumber++;
      this.popUp = false;
    } else if (this.selected === false) {
      this.popUp = true;
    } else {
      question.isCompeleted = true;
    }
    this.optionId = 0;
    this.selected = false;
  }
}
