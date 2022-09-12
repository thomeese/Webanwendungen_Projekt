import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal, LoadingController} from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import {OverlayEventDetail} from '@ionic/core/components';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Observable} from 'rxjs';
import {TrainingPlan} from '../../Interfaces/trainingPlan';
import {Calendar} from '@awesome-cordova-plugins/calendar/ngx';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  trainingform: FormGroup;
  trainingPlanList = [];
  recurrence= [
    'Tage',
    'Wochen',
    'Monate',
  ];
  constructor(
    private dataServise: DatabaseService,
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private calendarService: CalendarService
  ) {
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      description: new FormControl('', [Validators.required, Validators.minLength(15)]),
      period: new FormControl('Auswahl',[]),
      periodInterval: new FormControl('', []),
      addToCalendar: ['false']
    });

    this.dataServise.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
  }

  async addTrainingsPlan() {
    const formData = this.trainingform.getRawValue();
    const plan: TrainingPlan = {
      uid: this.authService.getUserId(),
      name: formData.name,
      description: formData.description,
      period: formData.period,
      periodInterval: formData.periodInterval,
      exercises: []
    };
    this.trainingform.reset();
    const loading = await this.loadingController.create();
    await loading.present();
    console.log(formData);
    this.calendarService.addToCalendar(formData);
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
