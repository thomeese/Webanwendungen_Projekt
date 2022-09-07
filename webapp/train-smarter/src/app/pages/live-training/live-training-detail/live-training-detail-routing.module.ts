import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingDetailPage } from './live-training-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingDetailPageRoutingModule {}
