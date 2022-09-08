import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-training-plan-detail',
  templateUrl: './training-plan-detail.page.html',
  styleUrls: ['./training-plan-detail.page.scss'],
})
export class TrainingPlanDetailPage implements OnInit {

  trainingPlan;
  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getPlan(id);
  }

  addExerciseView() {
    const navigationExtras: NavigationExtras = {
      state: {
        trainingPlan: this.trainingPlan,
        addToPlan: true
      }
    };
    this.router.navigate(['exercise'], navigationExtras);
  }

  getPlan(id) {
    this.databaseService.getTrainingsPlanById(id).subscribe(res => {
      this.trainingPlan = res;

      console.log("Trainingsplan Detailansicht: " + this.trainingPlan.id);
    });
  }
}
