import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WalkTrackerPage } from './walk-tracker.page';

const routes: Routes = [
  {
    path: '',
    component: WalkTrackerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkTrackerPageRoutingModule {}
