import {Component, Input, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute, Router} from '@angular/router';
import {trigger, transition, animate, style, state} from '@angular/animations';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Location} from '@angular/common';
import {DatabaseService} from '../../../services/database.service';
import {waitForAsync} from '@angular/core/testing';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
//getExercise momentan nicht eingebunden
export class ExerciseDetailPage implements OnInit {

  @Input() id; //exerciseId
  exercise;
  trainingPlanId;
  trainingPlan;
  setArray;
  displayForm;

  constructor(private exerciseDBService: ExerciseDBService,
              private loadingController: LoadingController,
              private location: Location,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavController,
              private formbuilder: FormBuilder,
              private modalController: ModalController) {
    this.setArray = [];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        console.log('Navigation on');
        console.log(this.router.getCurrentNavigation());
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
        }
      }
    });
  }

  ngOnInit() {
    try {
      const idTmp = this.route.snapshot.paramMap.get('id');
      if (idTmp !== 'undefined' && idTmp !== null) {
        this.id = idTmp; //exerciseId setzten
      }
      console.log('trainingsPlanId: ' + this.trainingPlanId);
      //Falls ein Trainingsplan uebergeben wurde, diesen holen
      if (this.trainingPlanId) {
        this.database.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
          this.trainingPlan = res;
          console.log(this.trainingPlan);
        });
      }
    } catch (error) {
      console.log(error);
    }
    this.getExercise();
  }

  async updateExerciseinTrainingPlan() {
    const array = this.trainingPlan.exercises;
    array.forEach(item =>{
      //Exercise im Array finden
      if(item.exerciseId === this.exercise.exerciseId){
        //Bearbeitete Sets setzen
        item.sets = this.setArray;
      }
    });
    //Attribute im Plan setzten
    const updatePlan = {
      id: this.trainingPlan.trainingPlanId,
      name: this.trainingPlan.name,
      description: this.trainingPlan.description,
      period: this.trainingPlan.period,
      uid: this.trainingPlan.uid,
      exercises: array
    };
    //Plan in der Datenbank updaten
    await this.database.updateTrainingPlan(updatePlan);
    //Modal schliessen
    await this.modalController.dismiss();
  }

  async addToTrainingPlan() {
    console.log('Vorher');
    let array;
    array = this.trainingPlan.exercises;
    if (!array) {
      array = [];
    }
    //Exercise dem Exercise-Array hinzufuegen
    array.push({
      exerciseId: this.id,
      name: this.exercise.name,
      sets: this.setArray
    });
    //Attribute im Plan setzten
    const updatePlan = {
      id: this.trainingPlan.trainingPlanId,
      name: this.trainingPlan.name,
      description: this.trainingPlan.description,
      period: this.trainingPlan.period,
      uid: this.trainingPlan.uid,
      exercises: array
    };
    //Plan in der Datenbank updaten
    await this.database.updateTrainingPlan(updatePlan);
    //Modal schliessen
    await this.modalController.dismiss();
  }


  async getExercise() {
    //exercise-Daten laden
    await this.database.getExerciseByNumericId(this.id).subscribe(result => {
      this.exercise = result[0];
      console.log(this.exercise);
    });
  }

  updateSetArray(newSetArray: string) {
    //Formdaten setzen
    this.setArray = JSON.parse(newSetArray);
  }
}
