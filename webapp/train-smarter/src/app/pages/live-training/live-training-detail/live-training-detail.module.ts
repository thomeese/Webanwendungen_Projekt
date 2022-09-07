import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrainingDetailPageRoutingModule } from './live-training-detail-routing.module';

import { LiveTrainingDetailPage } from './live-training-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTrainingDetailPageRoutingModule
  ],
  declarations: [LiveTrainingDetailPage]
})
export class LiveTrainingDetailPageModule {}
