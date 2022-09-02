import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrainingPlanDetailPage } from './training-plan-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TrainingPlanDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrainingPlanDetailPageRoutingModule {}
