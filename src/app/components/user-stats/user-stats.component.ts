import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css'],
})
export class UserStatsComponent {
  Math: any;
  constructor(public quizService: QuizService) {}

  getCompletedQuizPercentage(): number {
    return Math.round(
      (this.quizService.getCompletedQuizLength() /
        this.quizService.getQuizesLength()) *
        100
    );
  }
}
