import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../../models/models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input({ required: true }) quiz: Quiz = {} as Quiz;
  buttonText: string = '';

  ngOnInit() {
    this.buttonText = this.quiz.completed ? 'Replay' : 'Start Quiz';
  }
}
