import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalkTrackerPageRoutingModule } from './walk-tracker-routing.module';

import { WalkTrackerPage } from './walk-tracker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalkTrackerPageRoutingModule,
  ],
  declarations: [WalkTrackerPage]
})
export class WalkTrackerPageModule {}
