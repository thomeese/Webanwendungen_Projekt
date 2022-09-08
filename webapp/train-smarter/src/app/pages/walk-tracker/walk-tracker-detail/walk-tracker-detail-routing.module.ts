import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkTrackerDetailPage } from './walk-tracker-detail.page';

const routes: Routes = [
  {
    path: '',
    component: WalkTrackerDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkTrackerDetailPageRoutingModule {}
