import { Routes } from '@angular/router';
import { CompletedQuizesComponent } from './components/completedQuizes/completedQuizes.component';
import { AllQuizesComponent } from './components/all-quizes/all-quizes.component';
export const routes: Routes = [
  { path: 'completed-quizes', component: CompletedQuizesComponent },
  { path: 'all-quizes', component: AllQuizesComponent },
  { path: '**', redirectTo: '/completed-quizes', pathMatch: 'full' },
];
