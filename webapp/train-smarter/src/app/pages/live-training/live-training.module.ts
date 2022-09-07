import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LiveTrainingPageRoutingModule} from './live-training-routing.module';

import {LiveTrainingPage} from './live-training.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    IonicModule,
    LiveTrainingPageRoutingModule
  ],
  declarations: [LiveTrainingPage]
})
export class LiveTrainingPageModule {
}
