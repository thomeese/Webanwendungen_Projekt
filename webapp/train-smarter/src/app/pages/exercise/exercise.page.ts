import { Component, OnInit } from '@angular/core';
import { BodyParts, Equipment, ExerciseDBService, Muscles, SearchTypesToString} from "../../services/exercise-db.service";
import {LoadingController} from "@ionic/angular";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  searchTypes = SearchTypesToString;
  muscles = Muscles;
  bodyparts = BodyParts;
  equipment = Equipment;
  enumSearchTypeKeys = [];
  enumMuscleKeys = [];
  enumBodyPartKeys = [];
  enumEquipmentKeys = [];
  searchTypeSelected = null;
  targetSelected = null;
  exerciseID = null;

  constructor(private exerciseDBService: ExerciseDBService, private loadingCtr: LoadingController) {
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
    this.searchTypeSelected = this.enumSearchTypeKeys[0];
  }

  ngOnInit() {
  }

  async loadData() {
    console.log('LoadData gestartet');
    console.log(this.searchTypeSelected);
    console.log(this.enumSearchTypeKeys[0]);
      const loading = await this.loadingCtr.create({
        message: 'Loading..',
        spinner: 'bubbles',
      });
      await loading.present();
      loading.dismiss();

      if (this.searchTypeSelected !== this.enumSearchTypeKeys[0]) {
        this.exerciseDBService.getData(this.searchTypeSelected, this.targetSelected).subscribe((result) => {
          console.log(result);
        });
      } else {
        this.exerciseDBService.getData(this.searchTypeSelected).subscribe((result) => {
          console.log(result);
        });
      }
  }

  test(){
    if (typeof this.searchTypeSelected !== 'undefined') {
      this.loadData();
    } else {
      setTimeout(this.test, 250);
    }
  }
}
