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
    this.trainingPlanId = this.route.snapshot.paramMap.get('trainingPlanId');
    this.getPlan();
  }
  getPlan() {
    this.databaseService.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
      this.exercises = res.exercises;
    });
  }
}
