import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TrainingPlan} from '../../../Interfaces/trainingPlan';

@Component({
  selector: 'app-training-plan-detail',
  templateUrl: './training-plan-detail.page.html',
  styleUrls: ['./training-plan-detail.page.scss'],
})
export class TrainingPlanDetailPage implements OnInit {

  trainingPlan: TrainingPlan;
  descriptionForm: FormGroup;
  periodForm: FormGroup;
  displayDescriptionForm = false;
  displayPeriodForm = false;
  recurrence= [
    'Tage',
    'Wochen',
    'Monate',
  ];
  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private alertController: AlertController,
              private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
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
      this.descriptionForm = this.formbuilder.group({
        editDescription: new FormControl(`${this.trainingPlan.description}`, [])
      });
      this.periodForm = this.formbuilder.group({
        editPeriod: new FormControl(`${this.trainingPlan.period}`, []),
        editPeriodInterval: new FormControl(`${this.trainingPlan.periodInterval}`,[])
      });
      console.log('Trainingsplan Detailansicht: ');
      console.log(this.trainingPlan);
    });
  }

  async editPlanTags() {
    const newPlan: TrainingPlan = {
      uid: this.trainingPlan.uid,
      name: this.trainingPlan.name,
      description: this.descriptionForm.getRawValue().editDescription,
      exercises: this.trainingPlan.exercises,
      period: this.periodForm.getRawValue().editPeriod,
      periodInterval: this.periodForm.getRawValue().editPeriodInterval
    };
    await this.databaseService.updateTrainingPlan(this.trainingPlan.trainingPlanId, newPlan);
    if(this.displayDescriptionForm === true){
      this.displayDescriptionForm = false;
    }
    if(this.displayPeriodForm === true){
      this.displayPeriodForm = false;
    }
  }
}
