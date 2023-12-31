import {Component, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoadingController, ModalController, NavController} from '@ionic/angular';
import {Location} from '@angular/common';
import {DatabaseService} from '../../../services/database.service';
import {FormBuilder} from '@angular/forms';
import {TrainingPlan} from '../../../interfaces/trainingPlan';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})

export class ExerciseDetailPage implements OnInit {

  id; //exerciseId
  exercise;
  trainingPlan;
  setArray;
  showSetForm;
  edit = false;
  addToPlan = false;

  constructor(private exerciseDBService: ExerciseDBService,
              private loadingController: LoadingController,
              private location: Location,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private nav: NavController,
              private formbuilder: FormBuilder,
              private modalController: ModalController) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        console.log('Navigation on');
        console.log(this.router.getCurrentNavigation());
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlan = this.router.getCurrentNavigation().extras.state.trainingPlan;
        }
      }
    });
  }

  ngOnInit() {
    try {
      if (this.id === 'undefined' || this.id === null) {
        this.id = this.route.snapshot.paramMap.get('id'); //exerciseId setzten
      }
      this.getExercise();
    } catch
      (error) {
      console.log(error);
    }
    if (this.addToPlan) {
      this.setArray = [];
    }
  }

  async updateExerciseinTrainingPlan() {
    const array = this.trainingPlan.exercises;
    array.forEach(item => {
      //Exercise im Array finden
      if (item.exerciseId === this.exercise.exerciseId) {
        //Bearbeitete Sets setzen
        item.sets = this.setArray;
      }
    });
    //Attribute im Plan setzten
    const updatePlan = {
      name: this.trainingPlan.name,
      description: this.trainingPlan.description,
      period: this.trainingPlan.period,
      periodInterval: this.trainingPlan.periodInterval,
      uid: this.trainingPlan.uid,
      exercises: array
    };
    //Plan in der Datenbank updaten
    await this.database.updateTrainingPlan(this.trainingPlan.trainingPlanId, updatePlan);
    //Modal schliessen
    await this.modalController.dismiss();
  }

  async addToTrainingPlan() {
    console.log('Vorher');
    console.log(this.trainingPlan);
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
    const updatePlan: TrainingPlan = {
      name: this.trainingPlan.name,
      description: this.trainingPlan.description,
      period: this.trainingPlan.period,
      periodInterval: this.trainingPlan.periodInterval,
      uid: this.trainingPlan.uid,
      exercises: array
    };
    console.log(updatePlan.exercises);
    //Plan in der Datenbank updaten
    await this.database.updateTrainingPlan(this.trainingPlan.trainingPlanId, updatePlan);
    //Modal schliessen
    await this.modalController.dismiss();
  }


  async getExercise() {
    //exercise-Daten laden
    await this.exerciseDBService.getExerciseByID(this.id).subscribe(result => {
      console.log(this.id);
      console.log(result);
      this.exercise = result;
      console.log(this.exercise);
    });
  }

  updateSetArray(newSetArray: string) {
    //Formdaten setzen
    this.setArray = JSON.parse(newSetArray);
  }

  async saveChanges() {
    console.log('Vorher');
    for (const selectedExercise of this.trainingPlan.exercises) {
      if (selectedExercise.exerciseId === this.exercise.numericId) {
        selectedExercise.sets = this.setArray;
      }
    }
    await this.database.updateTrainingPlan(this.trainingPlan.trainingPlanId, this.trainingPlan);
    //Modal schliessen
    await this.modalController.dismiss();
  }
}
