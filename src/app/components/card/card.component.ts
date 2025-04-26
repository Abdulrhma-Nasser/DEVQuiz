import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../models/models';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input({ required: true }) quiz: Quiz = {} as Quiz;
  constructor(public quizService: QuizService) {}

  ngOnInit() {
  }
}
