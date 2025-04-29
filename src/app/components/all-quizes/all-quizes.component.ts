import { Component, OnInit } from '@angular/core';
import { NgClass, CommonModule } from '@angular/common';
import { Section } from '../../models/models';
import { QuizService } from '../../services/quiz.service';
import { SectionComponent } from '../section/section.component';
@Component({
  selector: 'app-all-quizes',
  templateUrl: './all-quizes.component.html',
  styleUrls: ['./all-quizes.component.css'],
  imports: [NgClass, CommonModule, SectionComponent],
})
export class AllQuizesComponent implements OnInit {
  activeQuiz = 'JS';
  difficulties: string[] = ['Beginner', 'Intermediate', 'Advanced'];
  sections: Section[] = [
    {
      id: 1,
      description:
        'Test your JavaScript skills with our interactive quizzes. Challenge yourself on topics ranging from basic syntax to advanced concepts like closures and asynchronous programming.',
      title: 'JS',
      icon: 'fa-brands fa-js',
    },
    {
      id: 2,
      description:
        'Test your Python skills. Quizzes cover basic syntax, data structures, OOP, functional programming, and libraries like NumPy and Pandas.',
      title: 'Python',
      icon: 'fa-brands fa-python',
    },
    {
      id: 3,
      description:
        'Test your Angular skills with our interactive quizzes. Challenge yourself on topics ranging from core concepts like components and directives to advanced techniques like reactive forms, dependency injection, and state management.',
      title: 'Angular',
      icon: 'fa-brands fa-angular',
    },
  ];

  constructor(public quizService: QuizService) {}

  ngOnInit() {}

  toggleActive(quiz: string) {
    this.activeQuiz = quiz;
  }

  getDescription(quiz: string) {
    return this.sections.find((section) => section.title === quiz)?.description;
  }
  getSection(activeQuiz: string): Section {
    return this.sections.find((section) => section.title === activeQuiz) as Section;
  }
}
