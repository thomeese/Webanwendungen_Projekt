import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.page.html',
  styleUrls: ['./live-training.page.scss'],
})
export class LiveTrainingPage implements OnInit {
  trainingPlanList;

  constructor(private loadingCtr: LoadingController,
              private dataService: DatabaseService,
              private router: Router) {
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
    this.dataService.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    await loading.dismiss();
  }

  addPlanView(trainingPlanId) {
    this.router.navigateByUrl('/live-training/' + trainingPlanId);
  }
}
