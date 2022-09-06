import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercisePageRoutingModule } from './exercise-routing.module';

import { ExercisePage } from './exercise.page';
import {ExerciseCardComponent} from '../../components/exercise-card/exercise-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercisePageRoutingModule,
    ReactiveFormsModule
  ],
    declarations: [ExercisePage, ExerciseCardComponent]
})
export class ExercisePageModule {}
