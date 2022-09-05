import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-training-plan-detail',
  templateUrl: './training-plan-detail.page.html',
  styleUrls: ['./training-plan-detail.page.scss'],
})
export class TrainingPlanDetailPage implements OnInit {
  id;
  name;
  description;
  period;
  exercises = [];

  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPlan();
  }
  addExerciseView(){
    const navigationExtras: NavigationExtras = {
      state: {
        trainingPlanId: this.id
      }
    };
    this.router.navigate(['exercise'], navigationExtras);
  }
  getPlan() {
    this.databaseService.getTrainingsPlanById(this.id).subscribe(res => {
      this.name = res.name;
      this.description = res.description;
      this.period = res.period;
      this.exercises = res.exercises;
    });
  }

  showExerciseLogging() {
  }
}
