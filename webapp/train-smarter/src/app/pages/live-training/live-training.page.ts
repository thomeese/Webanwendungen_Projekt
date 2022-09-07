import {Component, OnInit} from '@angular/core';
import {LoadingController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import {NavigationExtras, Router} from '@angular/router';
import {LocalstorageService} from '../../services/localstorage.service';

@Component({
  selector: 'app-live-training',
  templateUrl: './live-training.page.html',
  styleUrls: ['./live-training.page.scss'],
})
export class LiveTrainingPage implements OnInit {

  trainingPlanList;
  trainingPlanId;
  trainingPlan;
  exercises;

  constructor(private loadingCtr: LoadingController,
              private dataService: DatabaseService,
              private router: Router,
              private localStorageCtrl: LocalstorageService) {
  }

  ngOnInit() {
    this.trainingPlanId = this.localStorageCtrl.getData('live-training-trainingPlanId');
    if(this.trainingPlanId){
      //this.exercises = JSON.parse(this.localStorageCtrl.getData('live-training-trainingPlanId'));
      console.log(this.exercises);
      if(!this.exercises) {
        this.getExercises();
      }
    } else {
      this.getTrainingPlans();
    }
  }

  async getExercises() {
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    this.dataService.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
      this.trainingPlan = res;
      this.exercises = res.exercises;
      console.log(this.trainingPlan);
      this.localStorageCtrl.saveData('live-training-exercises', JSON.stringify(this.exercises));
    });
    await loading.dismiss();
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

  startLiveTraining(trainingPlanId) {
    this.trainingPlanId = trainingPlanId;
    this.localStorageCtrl.saveData('live-training-trainingPlanId', trainingPlanId);
    this.getExercises();
  }
}
