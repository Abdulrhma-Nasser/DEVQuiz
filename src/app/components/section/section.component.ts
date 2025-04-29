import { Component, Input} from '@angular/core';
import { Quiz, Section } from '../../models/models';
import { QuizService } from '../../services/quiz.service';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css'],
  imports: [CardComponent, CommonModule],
})
export class SectionComponent {
  @Input({required:true}) section: Section = {} as Section;
  @Input({required:true}) quizzes: Quiz[] = [];

  constructor(public quizService: QuizService) {}
}
