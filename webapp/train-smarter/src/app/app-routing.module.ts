import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const redirectUnauthorizedToLogin = (path) => redirectUnauthorizedToLogin(['']);
const redirectLoggedInToHome = (path) => redirectLoggedInToHome(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },{
    path: 'analytics',
    loadChildren: () => import('./pages/analytics/analytics.module').then(m => m.AnalyticsPageModule)
  }, {
    path: 'training-plan',
    loadChildren: () => import('./pages/training-plan/training-plan.module').then(m => m.TrainingPlanPageModule)
  }, {
    path: 'exercise',
    loadChildren: () => import('./pages/exercise/exercise.module').then(m => m.ExercisePageModule)
  }, {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  }, {
    path: 'live-training',
    loadChildren: () => import('./pages/live-training/live-training.module').then(m => m.LiveTrainingPageModule)
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
