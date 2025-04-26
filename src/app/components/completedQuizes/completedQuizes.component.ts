import { Component } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { Section } from '../../models/models';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';
import { TestKnowledgeComponent } from '../test-knowledge/test-knowledge.component';
@Component({
  selector: 'app-completedQuizes',
  templateUrl: './completedQuizes.component.html',
  styleUrls: ['./completedQuizes.component.css'],
  imports: [SectionComponent, CommonModule, TestKnowledgeComponent],
})
export class CompletedQuizesComponent {
  sections: Section[] = [
    {
      id: 1,
      title: 'JS',
      icon: 'fa-brands fa-js',
    },
    {
      id: 2,
      title: 'Python',
      icon: 'fa-brands fa-python',
    },
    {
      id: 3,
      title: 'Angular',
      icon: 'fa-brands fa-angular',
    },
  ];

  constructor(public quizService: QuizService) {}
}
