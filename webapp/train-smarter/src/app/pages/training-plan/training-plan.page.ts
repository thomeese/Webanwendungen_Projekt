import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal, LoadingController} from '@ionic/angular';
import {DatabaseService, TrainingPlan, UserData} from '../../services/database.service';
import {OverlayEventDetail} from '@ionic/core/components';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  trainingform: FormGroup;
  trainingPlanList = [];
  weekdays= [
    'Jeden Tag',
    'alle zwei Tage',
    'alle drei Tage',
    'alle vier Tage',
    'alle fünf Tage',
    'alle sechs Tage',
    'Jede Woche',
    'alle zwei Wochen',
    'alle drei Wochen',
    'Jeden Monat',
  ];
  constructor(
    private dataServise: DatabaseService,
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController
  ) {
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(15)]),
      period: new FormControl('Auswahl',[])
    });

    this.dataServise.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    /*
    this.dataServise.getTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });*/
  }

  async addTrainingsPlan() {
    const formData = this.trainingform.getRawValue();
    const plan: TrainingPlan = {
      uid: this.authService.getUserId(),
      name: formData.name,
      description: formData.description,
      period: formData.period,
      exercises: []
    };
    const loading = await this.loadingController.create();
    await loading.present();
    await this.dataServise.addTrainingPlan(plan);
    await loading.dismiss();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
  }
}
