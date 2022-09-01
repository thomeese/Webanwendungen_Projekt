import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrainingPageRoutingModule } from './live-training-routing.module';

import { LiveTrainingPage } from './live-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTrainingPageRoutingModule
  ],
  declarations: [LiveTrainingPage]
})
export class LiveTrainingPageModule {}
