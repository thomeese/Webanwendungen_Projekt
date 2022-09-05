import {Component, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute} from '@angular/router';
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
  constructor(private exerciseDBService: ExerciseDBService, private route: ActivatedRoute,
              private loadingController: LoadingController,
              private location: Location,
              private database: DatabaseService) {
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
