import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { QuizService } from './services/quiz.service';
import { UserStatsComponent } from './components/user-stats/user-stats.component';
@Component({
  selector: 'app-root',
  imports: [
    RouterLink,
    RouterOutlet,
    HeaderComponent,
    UserStatsComponent,
    RouterLinkActive,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DEVQuiz';
  constructor(public quizService: QuizService) {}
}
