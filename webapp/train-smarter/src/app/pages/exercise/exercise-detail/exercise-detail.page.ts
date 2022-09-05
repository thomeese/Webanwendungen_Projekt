import {Component, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute} from '@angular/router';
import { trigger, transition, animate, style } from '@angular/animations';
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-exercise-detail',
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ],
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  id;
  exercise;
  constructor(private exerciseDBService: ExerciseDBService, private route: ActivatedRoute,
              private loadingController: LoadingController) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getExercise();
  }

  async getExercise(){
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 5000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    await loading.present();
    await this.exerciseDBService.getExerciseByID(this.id).subscribe((result) => {
      this.exercise = result;
      console.log(this.exercise);
    });
    await loading.dismiss();
  }
}
