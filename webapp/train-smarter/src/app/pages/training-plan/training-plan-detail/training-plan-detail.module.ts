import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPlanDetailPageRoutingModule } from './training-plan-detail-routing.module';

import { TrainingPlanDetailPage } from './training-plan-detail.page';
import {
  ExerciseWithLoggingCardComponent
} from "../../../components/exercise-with-logging-card/exercise-with-logging-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPlanDetailPageRoutingModule
  ],
  declarations: [TrainingPlanDetailPage, ExerciseWithLoggingCardComponent]
})
export class TrainingPlanDetailPageModule {}
