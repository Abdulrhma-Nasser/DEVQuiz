import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DEVQuiz';
}
