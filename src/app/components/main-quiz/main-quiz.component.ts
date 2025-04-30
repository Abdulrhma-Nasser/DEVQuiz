import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from '../../models/models';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-main-quiz',
  templateUrl: './main-quiz.component.html',
  styleUrls: ['./main-quiz.component.css'],
  imports: [JsonPipe],
})
export class MainQuizComponent implements OnInit {
  quizId: number | null = null;
  quiz: Quiz = {} as Quiz;
  constructor(
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.quizId = Number(this.route.snapshot.paramMap.get('id'));
    this.quiz = this.quizService.getQuizById(this.quizId);
  }
}
