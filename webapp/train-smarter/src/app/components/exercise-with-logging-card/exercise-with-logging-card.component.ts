import {Component, Input, OnInit} from '@angular/core';
import {ExerciseDetailPage} from '../../pages/exercise/exercise-detail/exercise-detail.page';
import {Router} from '@angular/router';
import {AlertController, ModalController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-exercise-with-logging-card',
  templateUrl: './exercise-with-logging-card.component.html',
  styleUrls: ['./exercise-with-logging-card.component.scss'],
})
export class ExerciseWithLoggingCardComponent implements OnInit {

  @Input() exercise;
  @Input() trainingPlan;

  constructor(private router: Router,
              private modalCtrl: ModalController,
              private alertController: AlertController,
              private databaseService: DatabaseService) { }

  ngOnInit() {
    console.log("Card");
    console.log(this.exercise);
  }

  async editExercise() {
    const modal = await this.modalCtrl.create({
      component: ExerciseDetailPage,
      componentProps: {id: this.exercise.exerciseId, trainingPlanId: this.trainingPlan.id, edit: true, setArray: this.exercise.sets},
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
