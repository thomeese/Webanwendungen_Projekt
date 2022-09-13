import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {DatabaseService} from '../../services/database.service';
import {LoadingController, Platform} from '@ionic/angular';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';
import {AuthenticationService} from '../../services/authentication.service';
import {Calendar} from '@awesome-cordova-plugins/calendar/ngx';
import {CalendarService} from '../../services/calendar.service';
import {LocalstorageService} from "../../services/localstorage.service";
import {Router} from "@angular/router";

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

  constructor(private dataService: DatabaseService,
              private loadingCtr: LoadingController,
              private authService: AuthenticationService,
              private calendarService: CalendarService,
              private platform: Platform,
              private router: Router,
              private localStorageCtrl: LocalstorageService) {

  }

  ngOnInit() {
    console.log(this.platform.width());
    console.log(this.platform.height());
    this.getTrainingPlans();
    this.dataService.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
      this.user = res[0];
    });
    this.calendarService.getNextEvents().then((r) => {
      this.nextEvents = [];
      if (r !== 'error') {
        for (const event of r) {
          if (event.calendar === 'Train-Smarter') {
            this.nextEvents.push(event);
          }
        }
      }

    });
  }

  async getTrainingPlans() {
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.dataService.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    await loading.dismiss();
  }

  startTraining() {
    if (this.nextEvents) {
      for (const trainingPlan of this.trainingPlanList) {
        if (trainingPlan.name === this.nextEvents[0].title) {
          this.localStorageCtrl.saveData('live-training-trainingPlanId', trainingPlan.trainingPlanId);
          this.router.navigateByUrl('/live-training');
        }
      }
    } else {
      this.router.navigateByUrl('/live-training');
    }
  }
}

