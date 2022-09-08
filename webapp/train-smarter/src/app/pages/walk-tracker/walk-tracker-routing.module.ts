import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkTrackerPage } from './walk-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: WalkTrackerPage
  },{
    path: ':walkId',
    loadChildren: () => import('./walk-tracker-detail/walk-tracker-detail.module').then( m => m.WalkTrackerDetailPageModule)
  },
  {
    path: 'walk-tracker-detail',
    loadChildren: () => import('./walk-tracker-detail/walk-tracker-detail.module').then( m => m.WalkTrackerDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkTrackerPageRoutingModule {}
