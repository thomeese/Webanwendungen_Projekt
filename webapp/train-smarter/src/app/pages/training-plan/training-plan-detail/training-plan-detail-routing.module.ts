import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPlanDetailPage } from './training-plan-detail.page';
import {ExerciseLoggingPage} from '../../exercise-logging/exercise-logging.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlanDetailPage
  },
  {
    path: ':id',
    component: ExerciseLoggingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPlanDetailPageRoutingModule {}
