import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
  }, {
    path: 'analytics',
    loadChildren: () => import('./pages/analytics/analytics.module').then(m => m.AnalyticsPageModule),
    canActivate: [AuthenticationService]
  }, {
    path: 'training-plan',
    loadChildren: () => import('./pages/training-plan/training-plan.module').then(m => m.TrainingPlanPageModule),
    canActivate: [AuthenticationService]
  }, {
    path: 'exercise',
    loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExercisePageModule),
    canActivate: [AuthenticationService]
  }, {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthenticationService]
  }, {
    path: 'live-training',
    loadChildren: () => import('./pages/live-training/live-training.module').then(m => m.LiveTrainingPageModule),
    canActivate: [AuthenticationService]
  },
  {
    path: 'training-plan-detail',
    loadChildren: () => import('./pages/training-plan/training-plan-detail/training-plan-detail.module').then(m => m.TrainingPlanDetailPageModule)
  },
  {
    path: 'exercise/:id',
    loadChildren: () => import('./pages/exercise/exercise-detail/exercise-detail.module').then(m => m.ExerciseDetailPageModule)
  },
  {
    path: 'exercise-logging',
    loadChildren: () => import('./pages/exercise-logging/exercise-logging.module').then( m => m.ExerciseLoggingPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})


export class AppRoutingModule {
}
