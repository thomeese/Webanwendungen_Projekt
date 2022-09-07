import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LiveTrainingLoggingPageRoutingModule } from './live-training-logging-routing.module';

import { LiveTrainingLoggingPage } from './live-training-logging.page';
import {ExerciseDetailPageModule} from '../../exercise/exercise-detail/exercise-detail.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        LiveTrainingLoggingPageRoutingModule,
        ExerciseDetailPageModule
    ],
  declarations: [LiveTrainingLoggingPage]
})
export class LiveTrainingLoggingPageModule {}
