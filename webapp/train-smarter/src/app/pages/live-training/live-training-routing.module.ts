import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveTrainingPage } from './live-training.page';

const routes: Routes = [
  {
    path: '',
    component: LiveTrainingPage
  },  {
    path: 'live-training-detail',
    loadChildren: () => import('./live-training-detail/live-training-detail.module').then( m => m.LiveTrainingDetailPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveTrainingPageRoutingModule {}
