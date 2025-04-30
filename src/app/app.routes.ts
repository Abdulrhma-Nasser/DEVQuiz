import { Routes } from '@angular/router';
import { CompletedQuizesComponent } from './components/completedQuizes/completedQuizes.component';
import { AllQuizesComponent } from './components/all-quizes/all-quizes.component';
import { MainQuizComponent } from './components/main-quiz/main-quiz.component';
import { MainComponent } from './components/main/main.component';
export const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    children: [
      { path: 'completed-quizes', component: CompletedQuizesComponent },
      { path: 'all-quizzes', component: AllQuizesComponent },
      { path: '**', redirectTo: 'completed-quizes', pathMatch: 'full' },
    ],
  },
  { path: 'main-quiz/:id', component: MainQuizComponent },
  { path: '**', redirectTo: 'main/completed-quizes', pathMatch: 'full' },
];
