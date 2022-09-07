import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingPage } from './live-training.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingPage
  },
  {
    path: 'live-training-logging',
    loadChildren: () => import('./live-training-logging/live-training-logging.module').then( m => m.LiveTrainingLoggingPageModule)
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingPageRoutingModule {}
