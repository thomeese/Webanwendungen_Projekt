import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingLoggingPage } from './live-training-logging.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingLoggingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingLoggingPageRoutingModule {}
