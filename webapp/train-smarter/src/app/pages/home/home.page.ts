import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {DatabaseService} from '../../services/database.service';
import {LoadingController, Platform} from '@ionic/angular';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import {AuthenticationService} from '../../services/authentication.service';
import {Calendar} from '@awesome-cordova-plugins/calendar/ngx';
import {CalendarService} from '../../services/calendar.service';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      dynamicBullets: true,
      clickable: true
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    effect: 'coverflow',
    //navigation: true,
  };
  trainingPlanList = [];
  user;
  calendars;
  nextEvents;

  constructor(private dataServise: DatabaseService,
              private loadingCtr: LoadingController,
              private authService: AuthenticationService,
              private calendarService: CalendarService,
              private paltform: Platform) {

  }

  ngOnInit() {
    console.log(this.paltform.width());
    console.log(this.paltform.height());
    this.getTrainingPlans();
    this.dataServise.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
      this.user = res[0];
    });
    this.calendarService.getNextEvents().then((r) => {
      if(r !== 'error') {
        this.nextEvents = r;
      }

    });
  }

  async getTrainingPlans() {
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.dataServise.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    await loading.dismiss();
  }

}

