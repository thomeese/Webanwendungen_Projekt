import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute} from '@angular/router';

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
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getPlan();
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
