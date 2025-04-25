import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './components/card/card.component';
import { Quiz } from './models/models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ButtonModule, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'DEVQuiz';
  quiz: Quiz = {
    id: 1,
    title: 'JavaScript Basics',
    category: 'JS',
    difficulty: 'Easy',
    score: 0,
    completed: false,
    icon: 'fa-brands fa-js',
    questions: [],
  };
}
