import {Component, Input, OnInit} from '@angular/core';
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

//getExercise momentan nicht eingebunden
export class ExerciseDetailPage implements OnInit {

  @Input() id;
  exercise;
  trainingPlanId;
  trainingPlan;
  constructor(private exerciseDBService: ExerciseDBService,
              private loadingController: LoadingController,
              private location: Location,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
      this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation() !== null) {
          console.log("Navigation on");
          console.log(this.router.getCurrentNavigation());
          if(this.router.getCurrentNavigation().extras.state){
            this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
            console.log(this.trainingPlanId);
          }
        }
      });
  }
  ngOnInit() {

    try {
      let idTmp = this.route.snapshot.paramMap.get('id');
      if (idTmp !== 'undefined' && idTmp !== null) {
        this.id = idTmp;
      }
    } catch (error) {
      console.log(error);
    }
    this.getExercise();
  }

  addToTrainingPlan() {
    console.log("Vorher");
    this.trainingPlan = this.getTrainingPlan();
    console.log("Danach");

    let array;
    array = this.trainingPlan .exercises;
    if(!array) {
      array = [];
    }
    console.log("Mitten drin");
    array.push({exerciseId: this.id});
    const updatePlan = {
      id: this.trainingPlanId,
      name: this.trainingPlan .name,
      description: this.trainingPlan .description,
      period: this.trainingPlan .period,
      uid: this.trainingPlan .uid,
      exercises: array
    };
    this.database.updateTrainingPlan(updatePlan);
    console.log("Button hinzufuegen zum Trainingsplan");
  }
  async getTrainingPlan(){
    this.database.getTrainingsPlanById(this.trainingPlanId).subscribe(res =>{
      return res;
    });
  }

  async getExercise(){
    await this.database.getExerciseByNumericId(this.id).subscribe(result => {
      this.exercise = result[0];
      console.log(this.exercise);
    });
  }

  myBackButton(){
    this.location.back();
  }
}
