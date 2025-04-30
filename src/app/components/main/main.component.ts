import { Component, OnInit } from '@angular/core';
import { UserStatsComponent } from "../user-stats/user-stats.component";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { QuizService } from '../../services/quiz.service';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [UserStatsComponent, RouterOutlet, HeaderComponent, RouterLink, RouterLinkActive]
})
export class MainComponent implements OnInit {

  constructor(public quizService: QuizService) { }

  ngOnInit() {
  }

}
