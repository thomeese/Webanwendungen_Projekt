import {Component, OnInit} from '@angular/core';
import {
  BodyParts,
  BodyPartsToString, Equipment,
  EquipmentToString,
  ExerciseDBService, Muscles,
  MusclesToString,
  SearchTypesToString
} from "../../services/exercise-db.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
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

  constructor(private exerciseDBService: ExerciseDBService, private loadingCtr: LoadingController) {
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
    this.enumMuscleValues = Object.values(Muscles);
    this.enumBodyPartValues = Object.values(BodyParts);
    this.enumEquipmentValues = Object.values(Equipment);
    this.searchTypeSelected = this.enumSearchTypeKeys[0];
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
    loading.dismiss();

    if (this.searchTypeSelected === this.enumSearchTypeKeys[3]) { // with ID

      this.exerciseDBService.getData(this.searchTypeSelected, this.exerciseID).subscribe((result) => {
        console.log(result);
      });
    } else if (this.searchTypeSelected === this.enumSearchTypeKeys[0]) { // All Exercises
      this.exerciseDBService.getData(this.searchTypeSelected).subscribe((result) => {
        console.log(result);
      });
    } else  { // with Target
      this.exerciseDBService.getData(this.searchTypeSelected, this.targetSelected).subscribe((result) => {
        console.log(result);
      });
    }
  }
}
