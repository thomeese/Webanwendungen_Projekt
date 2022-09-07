import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-training-plan-detail',
  templateUrl: './training-plan-detail.page.html',
  styleUrls: ['./training-plan-detail.page.scss'],
})
export class TrainingPlanDetailPage implements OnInit {
  id;
  name;
  description;
  period;
  uid;
  exercises = [];

  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPlan();
  }

  addExerciseView() {
    const navigationExtras: NavigationExtras = {
      state: {
        trainingPlanId: this.id
      }
    };
    this.router.navigate(['exercise'], navigationExtras);
  }

  getPlan() {
    this.databaseService.getTrainingsPlanById(this.id).subscribe(res => {
      this.name = res.name;
      this.description = res.description;
      this.period = res.period;
      this.uid = res.uid;
      this.exercises = res.exercises;
    });
  }

  editExercise(exercise) {
    return null;
  }

  async deleteExerciseView(exerciseId) {
    const alert = await this.alertController.create({
      message: 'Möchten Sie diese Übung wirklich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      },
        {
          text: 'Löschen',
          handler: () => {
            this.deleteExercise(exerciseId);
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }

  async deleteExercise(exerciseId) {
   this.exercises =  this.exercises.filter(item => item.exerciseId !== exerciseId);
    const updatePlan = {
      id: this.id,
      name: this.name,
      description: this.description,
      period: this.period,
      uid: this.uid,
      exercises: this.exercises
    };
    await this.databaseService.updateTrainingPlan(updatePlan);
  }
}
