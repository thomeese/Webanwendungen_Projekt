import {Component, OnInit} from '@angular/core';
import {ExerciseDBService} from '../../../services/exercise-db.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-exercise-detail',
  templateUrl: './exercise-detail.page.html',
  styleUrls: ['./exercise-detail.page.scss'],
})
export class ExerciseDetailPage implements OnInit {

  id;
  exercise;
  constructor(private exerciseDBService: ExerciseDBService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

  }

  getExercise(){
    this.exerciseDBService.getExerciseByID(this.id).subscribe((result) => {
      this.exercise = result;
      console.log(this.exercise);
    });
  }
}
