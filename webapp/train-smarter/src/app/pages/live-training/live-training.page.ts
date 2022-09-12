import {Component, OnInit} from '@angular/core';
import {LoadingController, ModalController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import {NavigationExtras, Router} from '@angular/router';
import {LocalstorageService} from '../../services/localstorage.service';
import {LiveTrainingLoggingPage} from './live-training-logging/live-training-logging.page';
import {DatePipe, registerLocaleData} from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import {SetLogging} from '../../interfaces/setLogging';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

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

  // Zeigt, ob die Übung schon erledigt ist
  exercisesState = [];

  constructor(private loadingCtr: LoadingController,
              private dataService: DatabaseService,
              private router: Router,
              private localStorageCtrl: LocalstorageService,
              private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.trainingPlanId = this.localStorageCtrl.getData('live-training-trainingPlanId');
    this.exercisesState = JSON.parse(this.localStorageCtrl.getData('training-exercise-state'));
    if (!this.exercisesState) {
      this.exercisesState = [];
    }
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
      if (!res) {
        this.finishTraining(); // Reset da TrainingPlan nicht gefunden wurde
      } else {
        this.trainingPlan = res;
        if (!res.exercises) {
          this.exercises = [];
        } else {
          this.exercises = res.exercises;
        }
        console.log(this.trainingPlan);
        this.localStorageCtrl.saveData('live-training-exercises', JSON.stringify(this.exercises));
        if (this.exercisesState.length === 0) {
          for (const exercise of this.exercises) {
            this.exercisesState.push(false);
          }
        }
        console.log(this.exercisesState);
      }
    });

    await loading.dismiss();
  }

  async logTraining(_exerciseId) {
    const modal = await this.modalCtrl.create({
      component: LiveTrainingLoggingPage,
      componentProps: {
        trainingPlan: this.trainingPlan,
        exerciseId: _exerciseId
      },
      breakpoints: [0, 0.8, 1],
      initialBreakpoint: 0.8
    });
    await modal.present();
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

  setChecked(i: number, exerciseId) {
    this.exercisesState[i] = !this.exercisesState[i];
    this.commitSetLog(exerciseId);
  }

  async commitSetLog(_exerciseId) {
    console.log(this.trainingPlan);
    const set: SetLogging = {
      date: new DatePipe('de-DE').transform(new Date(), 'dd.MM.yyyy'),
      time: new DatePipe('de-DE').transform(new Date(), 'HH:mm'),
      excerciseId: _exerciseId,
      sets: JSON.parse(this.localStorageCtrl.getData('set-log-data-' + _exerciseId)),
      trainingPlanId: this.trainingPlanId,
      uid: this.trainingPlan.uid
    };
    await this.dataService.addSetLogging(set);
    this.localStorageCtrl.removeData('set-log-data-' + _exerciseId);
    this.localStorageCtrl.saveData('training-exercise-state', JSON.stringify(this.exercisesState));
  }

  finishTraining() {
    this.localStorageCtrl.clearData();
    this.router.navigateByUrl('home', {replaceUrl: true});
  }
}
