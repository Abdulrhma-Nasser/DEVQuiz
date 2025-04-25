import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/models';

@Component({
  selector: 'app-completedQuizes',
  templateUrl: './completedQuizes.component.html',
  styleUrls: ['./completedQuizes.component.css'],
})
export class CompletedQuizesComponent implements OnInit {
  sections: string[] = ['JS', 'TS', 'Angular'];
  completedQuizes: Quiz[] = [];
  @Input() category: string = '';

  constructor(private quizService: QuizService) {}

  ngOnInit() {
    this.completedQuizes = this.quizService.getCompletedQuizes(this.category);
  }
}
