import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  private points = signal<number>(0);
  points$ = this.points.asReadonly();

  addPoints(points: number): void {
    this.points.update((current) => current + points);
  }
}
