import { Component} from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-user-stats',
  templateUrl: './user-stats.component.html',
  styleUrls: ['./user-stats.component.css'],
})
export class UserStatsComponent {
  Math: any;
  constructor(public quizService: QuizService, public pointsService: PointsService) {}

  getCompletedQuizPercentage(): number {
    return Math.round(
      (this.quizService.getCompletedQuizLength() /
        this.quizService.getQuizesLength()) *
        100
    );
  }
}
