import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css'],
})
export class UserStatsComponent {
  constructor(public quizService: QuizService) {}

  getCompletedQuizPercentage(): number {
    return (
      (this.quizService.getCompletedQuizLength() /
        this.quizService.getQuizesLength()) *
      100
    );
  }
}
