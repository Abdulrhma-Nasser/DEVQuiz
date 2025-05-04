import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css'],
})
export class FinalResultComponent implements OnInit {
  @Input({ required: true }) quizPoints: number = 0;
  @Input({ required: true }) quizScore: number = 0;
  @Input({ required: true }) correctAnswers: number = 0;
  @Input({ required: true }) wrongAnswers: number = 0;
  @Input({ required: true }) quizTitle: string = '';
  @Input({ required: true }) resultIcon: string = '';
  @Input({ required: true }) grade: string = '';

  constructor() {}

  ngOnInit() {}


}
