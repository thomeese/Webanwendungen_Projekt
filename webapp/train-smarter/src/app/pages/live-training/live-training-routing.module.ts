import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingPage } from './live-training.page';
import {LiveTrainingDetailPage} from './live-training-detail/live-training-detail.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingPage
  },
  {
    path: ':id',
    component: LiveTrainingDetailPage
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingPageRoutingModule {}
