import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {ExerciseDetailPage} from '../../pages/exercise/exercise-detail/exercise-detail.page';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise;
  @Input() sets;
  @Input() maxWeight;
  @Input() trainingPlan;
  @Input() showGif = false;
  @Input() addToPlan = false;

  constructor(private router: Router,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private databaseService: DatabaseService) {}

  async openDetails() {
    let modal;
    if(this.exercise.numericId) {
      modal = await this.modalCtrl.create({
        component: ExerciseDetailPage,
        componentProps: {id: this.exercise.numericId, trainingPlan: this.trainingPlan, addToPlan: this.addToPlan},
        breakpoints: [0, 0.5 ,0.8, 1],
        initialBreakpoint: 0.5
      });
    } else {
      modal = await this.modalCtrl.create({
        component: ExerciseDetailPage,
        componentProps: {id: this.exercise.exerciseId, trainingPlan: this.trainingPlan, addToPlan: this.addToPlan},
        breakpoints: [0, 0.5 ,0.8, 1],
        initialBreakpoint: 0.5
      });
    }

    console.log(this.exercise);
    modal.present();
  }

  ngOnInit() {
    console.log('Card');
    console.log(this.exercise);
  }

  async editExercise() {
    const modal = await this.modalCtrl.create({
      component: ExerciseDetailPage,
      componentProps: {id: this.exercise.exerciseId, trainingPlan: this.trainingPlan, edit: true, setArray: this.sets},
      breakpoints: [0,0.8, 1],
      initialBreakpoint: 0.8
    });
    console.log(this.exercise.exerciseId);
    modal.present();
  }

  async deleteExerciseView() {
    const alert = await this.alertController.create({
      message: 'Möchten Sie diese Übung wirklich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      },
        {
          text: 'Löschen',
          handler: () => {
            this.deleteExercise(this.exercise.exerciseId);
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  async deleteExercise(exerciseId) {
    this.trainingPlan.exercises =  this.trainingPlan.exercises.filter(item => item.exerciseId !== exerciseId);
    await this.databaseService.updateTrainingPlan(this.trainingPlan);
  }
}
