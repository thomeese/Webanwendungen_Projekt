import {Component, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute, Router} from '@angular/router';
import {trigger, transition, animate, style, state} from '@angular/animations';
import {LoadingController} from '@ionic/angular';
import { Location } from '@angular/common';
import {DatabaseService} from '../../../services/database.service';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  id;
  exercise;
  trainingPlanId;
  constructor(private exerciseDBService: ExerciseDBService,
              private loadingController: LoadingController,
              private location: Location,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
        console.log(this.trainingPlanId);
      }
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getExercise();
  }

  async getExercise(){
    await this.database.getExerciseById(this.id).subscribe(result => {
      this.exercise = result;
      console.log(this.exercise);
    });
  }

  myBackButton(){
    this.location.back();
  }
}
