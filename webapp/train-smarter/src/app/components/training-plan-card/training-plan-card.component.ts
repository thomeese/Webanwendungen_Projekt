import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-training-plan-card',
  templateUrl: './training-plan-card.component.html',
  styleUrls: ['./training-plan-card.component.scss'],
})
export class TrainingPlanCardComponent implements OnInit {
  @Input() trainingPlan;
  @Input() showDescription: boolean;

  constructor(private router: Router, private alertController: AlertController,
              private dataService: DatabaseService) {
  }

  async deleteView() {
    const alert = await this.alertController.create({
      message: 'Möchten Sie diesen Trainingsplan wirklich löschen?',
      buttons: [{
        text: 'Abbrechen',
        role: 'cancel',
      },
        {
          text: 'Löschen',
          handler: () => {
            this.deletePlan();
            alert.dismiss();
          }
        }
      ]
    });
    alert.present();
  }


  deletePlan() {
    this.dataService.deleteTrainingPlan(this.trainingPlan);
  }

  ngOnInit() {
  }

}
