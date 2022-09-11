import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPlanDetailPageRoutingModule } from './training-plan-detail-routing.module';

import { TrainingPlanDetailPage } from './training-plan-detail.page';
import {ExercisePageModule} from '../../exercise/exercise.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TrainingPlanDetailPageRoutingModule,
        ExercisePageModule,
        ReactiveFormsModule,
    ],
  declarations: [TrainingPlanDetailPage]
})
export class TrainingPlanDetailPageModule {}
