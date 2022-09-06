import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from '@ionic/angular';
import {ExerciseDetailPage} from '../../pages/exercise/exercise-detail/exercise-detail.page';

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
})
export class ExerciseCardComponent implements OnInit {

  @Input() exercise;
  @Input() trainingPlanId;

  constructor(private router: Router, private modalCtrl: ModalController) {

  }

  async openDetails() {
    const modal = await this.modalCtrl.create({
      component: ExerciseDetailPage,
      componentProps: {id: this.exercise.numericId, trainingPlanId: this.trainingPlanId},
      breakpoints: [0, 0.5 ,0.8, 1],
      initialBreakpoint: 0.5
    });
    modal.present();
  }

  ngOnInit() {
    console.log(this.exercise);
  }
}
