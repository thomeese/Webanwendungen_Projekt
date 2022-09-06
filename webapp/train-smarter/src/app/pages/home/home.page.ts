import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';
import {DatabaseService} from '../../services/database.service';
import {LoadingController} from '@ionic/angular';
import SwiperCore, {Navigation, Pagination, EffectCoverflow} from 'swiper';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomePage implements OnInit {

  config: SwiperOptions = {
    slidesPerView: 2,
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

  constructor(private dataServise: DatabaseService, private loadingCtr: LoadingController) {
  }

  ngOnInit() {
    this.getTrainingPlans();
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
