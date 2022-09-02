import { Component, OnInit } from '@angular/core';
import { BodyParts, Equipment, ExerciseDBService, Muscles, SearchTypes} from "../../services/exercise-db.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {
  searchTypeSelected = null;
  searchTypes = SearchTypes;
  muscles = Muscles;
  bodyparts = BodyParts;
  equipment = Equipment;
  enumSearchTypeKeys= [];
  enumMuscleKeys= [];
  enumBodyPartKeys= [];
  enumEquipmentKeys= [];
  constructor(private exerciseDBService: ExerciseDBService, private loadingCtr: LoadingController) {
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
  }


  ngOnInit() {
    this.loadData();
  }

  async loadData(target?) {
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();
    loading.dismiss();

    this.exerciseDBService.getData(SearchTypes.exercisesList).subscribe((result) => {
      console.log(result);
    });
  }

}
