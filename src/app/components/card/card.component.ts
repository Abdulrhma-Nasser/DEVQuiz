import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../models/models';
import { QuizService } from '../../services/quiz.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  imports: [RouterLink, RouterOutlet],
})
export class CardComponent implements OnInit {

  @Input({ required: true }) quiz: Quiz = {} as Quiz;
  constructor(public quizService: QuizService) {}

  ngOnInit() {
  }
}
