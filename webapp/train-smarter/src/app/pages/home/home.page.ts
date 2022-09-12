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

  constructor(private dataService: DatabaseService,
              private loadingCtr: LoadingController,
              private authService: AuthenticationService,
              private calendarService: CalendarService,
              private platform: Platform,
              private router: Router) {

  }

  ngOnInit() {
    console.log(this.platform.width());
    console.log(this.platform.height());
    this.getTrainingPlans();
    this.dataService.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
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
    this.dataService.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    await loading.dismiss();
  }

  startTraining() {
    console.log(this.nextEvents[0]);
    if(this.nextEvents[0]) {
      this.dataService.getTrainingsPlanByName(this.nextEvents[0].title).subscribe((result) => {
        this.router.navigateByUrl('/live-training/' + result.trainingPlanId);
      });
    } else {
      this.router.navigateByUrl('/live-training/');
    }
  }
}

