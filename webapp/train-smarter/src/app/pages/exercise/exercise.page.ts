import { Component, OnInit } from '@angular/core';
import {ExerciseDBService, SearchType} from "../../services/exercise-db.service";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})
export class ExercisePage implements OnInit {

  constructor(private exerciseDBService: ExerciseDBService, private loadingCtr: LoadingController) { }

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

    this.exerciseDBService.getData(SearchType.exercisesList).subscribe((result) => {
      console.log(result);
    });
  }

}
