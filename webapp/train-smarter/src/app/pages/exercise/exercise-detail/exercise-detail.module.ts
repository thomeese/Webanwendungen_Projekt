import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExerciseDetailPageRoutingModule } from './exercise-detail-routing.module';

import { ExerciseDetailPage } from './exercise-detail.page';
import {SetCardComponent} from "../../../components/set-card/set-card.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExerciseDetailPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [ExerciseDetailPage, SetCardComponent]
})
export class ExerciseDetailPageModule {}
