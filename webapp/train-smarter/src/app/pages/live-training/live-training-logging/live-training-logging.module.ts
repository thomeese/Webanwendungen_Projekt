import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrainingLoggingPageRoutingModule } from './live-training-logging-routing.module';

import { LiveTrainingLoggingPage } from './live-training-logging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveTrainingLoggingPageRoutingModule
  ],
  declarations: [LiveTrainingLoggingPage]
})
export class LiveTrainingLoggingPageModule {}
