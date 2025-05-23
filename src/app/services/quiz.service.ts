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

  getQuiz(id: number, category: string): Quiz {
    return this.quizzes.find(
      (quiz) => quiz.id === id && quiz.category === category
    )!;
  }

  getQuizById(id: number): Quiz {
    return this.quizzes.find((quiz) => quiz.id === id)!;
  }

  getQuizesLength(): number {
    return this.quizzes.length;
  }

  getCompletedQuizesByCategory(category: string): Quiz[] {
    return this.quizzes.filter(
      (quiz) => quiz.category === category && quiz.completed
    );
  }

  getCompletedQuizLength(): number {
    return this.quizzes.filter((quiz) => quiz.completed).length;
  }

  getCompletedQuizPercentage(): number {
    return Math.round(
      (this.getCompletedQuizLength() / this.getQuizesLength()) * 100
    );
  }

  toUnCompletedQuizes(id: number, category: string): void {
    const quiz = this.quizzes.find(
      (quiz) => quiz.id === id && quiz.category === category
    );
    if (quiz) {
      quiz.completed = false;
      quiz.score = 0;
      quiz.questions.forEach((quiz) => {
        quiz.isCompeleted = false;
      });
    }
  }

  getCompeletedQuestionPer(questionNumber: number, id: number): number {
    return Math.round(
      (questionNumber / this.getQuizById(id).questions.length) * 100
    );
  }
}
