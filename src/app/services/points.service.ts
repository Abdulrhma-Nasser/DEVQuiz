import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  private points = signal<number>(0);
  points$ = this.points.asReadonly();
  private correctAnswers = signal<number>(0);
  correctAnswers$ = this.correctAnswers.asReadonly();
  private wrongAnswers = signal<number>(0);
  wrongAnswers$ = this.wrongAnswers.asReadonly();

  addPoints(points: number): void {
    this.points.update((current) => current + points);
  }

  addCorrectAns(correctAns: number): void {
    this.correctAnswers.update((current) => current + correctAns);
  }

  addWrongAns(wrongAns: number): void {
    this.wrongAnswers.update((current) => current + wrongAns);
  }
}
