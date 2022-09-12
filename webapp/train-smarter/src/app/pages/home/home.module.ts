import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { SwiperModule} from 'swiper/angular';
import {TrainingPlanPageModule} from '../training-plan/training-plan.module';
import {CalendarEventCardComponent} from '../../components/calendar-event-card/calendar-event-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SwiperModule,
    TrainingPlanPageModule
  ],
  declarations: [HomePage, CalendarEventCardComponent]
})
export class HomePageModule {}
