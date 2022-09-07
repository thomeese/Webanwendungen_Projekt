import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {DatabaseService, SetLogging} from '../../services/database.service';
import {NavigationExtras, Router} from '@angular/router';
import {LocalstorageService} from '../../services/localstorage.service';
import {LiveTrainingLoggingPage} from './live-training-logging/live-training-logging.page';
import {DatePipe} from '@angular/common';

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
  exercisesState = [];

  constructor(private loadingCtr: LoadingController,
              private dataService: DatabaseService,
              private router: Router,
              private localStorageCtrl: LocalstorageService,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.trainingPlanId = this.localStorageCtrl.getData('live-training-trainingPlanId');
    if (this.trainingPlanId) {
      //this.exercises = JSON.parse(this.localStorageCtrl.getData('live-training-trainingPlanId'));
      console.log(this.exercises);
      if (this.exercises === 'undefined' || !this.exercises) {
        this.getExercises();
      }
    } else {
      this.getTrainingPlans();
    }
    console.log(this.exercises);
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
      this.exercisesState = [];
      for(const exercise of this.exercises) {
        this.exercisesState.push(false);
      }
      console.log(this.exercisesState);
    });
    await loading.dismiss();
  }

  async logTraining(_exerciseId) {
    const modal = await this.modalCtrl.create({
      component: LiveTrainingLoggingPage,
      componentProps: {
        trainingPlanId: this.trainingPlanId,
        exerciseId: _exerciseId
      },
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8
    });
    modal.present();
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

  async commitSetLog(_exerciseId) {
    const dateTmp = new DatePipe('de-DE').transform(new Date(),'dd.MM.yyyy');
    const set: SetLogging = {
      date: dateTmp,
      excerciseId: _exerciseId,
      sets: JSON.parse(this.localStorageCtrl.getData('set-log-data-'+ _exerciseId)),
      trainingPlanId: this.trainingPlanId,
      userId: this.trainingPlan.userId
    };
    await this.dataService.addSetLogging(set);
    this.localStorageCtrl.removeData('set-log-data-'+ _exerciseId);
  }

  setChecked(i: number, exerciseId) {
    this.exercisesState[i] = !this.exercisesState[i];
    this.commitSetLog(exerciseId);
  }
}
