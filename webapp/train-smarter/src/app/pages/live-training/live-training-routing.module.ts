import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingPage } from './live-training.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingPageRoutingModule {}
