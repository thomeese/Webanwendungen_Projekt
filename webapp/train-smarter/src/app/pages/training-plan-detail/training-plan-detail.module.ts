import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrainingPlanDetailPageRoutingModule } from './training-plan-detail-routing.module';

import { TrainingPlanDetailPage } from './training-plan-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrainingPlanDetailPageRoutingModule
  ],
  declarations: [TrainingPlanDetailPage]
})
export class TrainingPlanDetailPageModule {}
