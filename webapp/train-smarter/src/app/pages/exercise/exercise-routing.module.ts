import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercisePage } from './exercise.page';
import {ExerciseDetailPage} from './exercise-detail/exercise-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ExercisePage
  }, {
    path: ':id',
    component: ExerciseDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercisePageRoutingModule {}
