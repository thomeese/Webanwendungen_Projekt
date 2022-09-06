import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseDetailPageRoutingModule } from './exercise-detail-routing.module';

import { ExerciseDetailPage } from './exercise-detail.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExerciseDetailPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ExerciseDetailPage]
})
export class ExerciseDetailPageModule {}
