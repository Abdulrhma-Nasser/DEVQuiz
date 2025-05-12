import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-final-result',
  templateUrl: './final-result.component.html',
  styleUrls: ['./final-result.component.css'],
  imports: [RouterLink],
})
export class FinalResultComponent implements OnInit {
  @Input({ required: true }) quizPoints: number = 0;
  @Input({ required: true }) quizScore: number = 0;
  @Input({ required: true }) correctAnswers: number = 0;
  @Input({ required: true }) wrongAnswers: number = 0;
  @Input({ required: true }) quizTitle: string = '';
  @Input({ required: true }) resultIcon: string = '';
  @Input({ required: true }) grade: string = '';
  @Input({ required: true }) id: number = 0;
  @Input({ required: true }) category: string = '';
  @Output() restart = new EventEmitter<void>();

  constructor(public pointsService: PointsService) {}

  ngOnInit() {}

  restartQuiz() {
    this.restart.emit();
  }
}
