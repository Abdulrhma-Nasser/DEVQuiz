import { Injectable } from '@angular/core';
import { Quiz } from '../models/models';
import { quizzes } from '../data/mock';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private quizzes: Quiz[] = quizzes;

  getQuizes(difficulty: string, category: string): Quiz[] {
    return this.quizzes.filter(
      (quiz) => quiz.difficulty === difficulty && quiz.category === category
    );
  }

  getCompletedQuizes(category: string): Quiz[] {
    return this.quizzes.filter(
      (quiz) => quiz.category === category && quiz.completed
    );
  }
}
