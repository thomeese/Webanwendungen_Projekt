import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPlanPageRoutingModule } from './training-plan-routing.module';

import { TrainingPlanPage } from './training-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPlanPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TrainingPlanPage]
})
export class TrainingPlanPageModule {}
