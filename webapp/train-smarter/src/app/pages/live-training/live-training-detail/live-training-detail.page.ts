import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-live-training-detail',
  templateUrl: './live-training-detail.page.html',
  styleUrls: ['./live-training-detail.page.scss'],
})
export class LiveTrainingDetailPage implements OnInit {
  trainingPlanId;
  exercises;
  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        console.log('Navigation on');
        console.log(this.router.getCurrentNavigation());
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
        }
      }
    });
    this.getPlan();
  }
  getPlan() {
    this.databaseService.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
      this.exercises = res.exercises;
    });
  }
}
