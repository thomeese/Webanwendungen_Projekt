import {Component, OnInit} from '@angular/core';
import {
  BodyParts,
  BodyPartsToString, Equipment,
  EquipmentToString,
  ExerciseDBService, Muscles,
  MusclesToString,
  SearchTypesToString
} from '../../services/exercise-db.service';
import {LoadingController} from '@ionic/angular';
import {DatabaseService, Excersise} from '../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})

export class ExercisePage implements OnInit {
  exercises = [];

  searchTypes = SearchTypesToString;
  muscles = MusclesToString;
  bodyparts = BodyPartsToString;
  equipment = EquipmentToString;
  enumSearchTypeKeys = [];
  enumMuscleKeys = [];
  enumBodyPartKeys = [];
  enumEquipmentKeys = [];
  enumMuscleValues = [];
  enumBodyPartValues = [];
  enumEquipmentValues = [];

  searchTypeSelected = null;
  targetSelected = null;
  exerciseID = null;
  trainingPlanId;

  constructor(private exerciseDBService: ExerciseDBService,
              private loadingCtr: LoadingController,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
    this.enumMuscleValues = Object.values(Muscles);
    this.enumBodyPartValues = Object.values(BodyParts);
    this.enumEquipmentValues = Object.values(Equipment);
    this.searchTypeSelected = this.enumSearchTypeKeys[0];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
          console.log(this.trainingPlanId);
        }
      }
    });
  }

  ngOnInit() {
  }

  async loadData() {
    console.log('LoadData gestartet');
    console.log(this.searchTypeSelected);
    console.log(this.targetSelected);
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    if (this.searchTypeSelected === this.enumSearchTypeKeys[3]) { // with ID
      console.log(this.exerciseID.length);
      if (this.exerciseID.length === 4) {
        this.database.getExerciseByNumericId(this.exerciseID).subscribe(result => {
          console.log(result);
          this.exercises = result;
        });
      } else {
        console.log(this.exerciseID);
        this.database.getExerciseById(this.exerciseID).subscribe(result => {
          console.log(result);
          this.exercises = [];
          this.exercises.push(result);
        });
      }
    } else if (this.searchTypeSelected === this.enumSearchTypeKeys[0]) { // All Exercises
      this.database.getAllExercises().subscribe(result => {
        console.log(result);
        this.exercises = result;
      });
    } else { // with Target
      this.database.getExercisesBySearch(this.searchTypeSelected, this.targetSelected).subscribe(result => {
        console.log(result);
        this.exercises = result;
      });
    }
    await loading.dismiss();
  }
}
