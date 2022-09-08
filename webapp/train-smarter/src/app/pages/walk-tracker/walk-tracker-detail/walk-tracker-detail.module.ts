import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkTrackerDetailPageRoutingModule } from './walk-tracker-detail-routing.module';

import { WalkTrackerDetailPage } from './walk-tracker-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkTrackerDetailPageRoutingModule
  ],
  declarations: [WalkTrackerDetailPage]
})
export class WalkTrackerDetailPageModule {}
