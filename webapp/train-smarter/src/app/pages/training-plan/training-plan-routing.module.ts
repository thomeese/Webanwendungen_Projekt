import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPlanPage } from './training-plan.page';
import {TrainingPlanDetailPage} from './training-plan-detail/training-plan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlanPage
  },
  {
    path: ':id',
    component: TrainingPlanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPlanPageRoutingModule {}
