import {Component, OnInit, ViewChild} from '@angular/core';
import {IonModal, LoadingController} from '@ionic/angular';
import {DatabaseService, UserData} from '../../services/database.service';
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

  constructor(
    private dataServise: DatabaseService,
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController
  ) {
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(30)])
    });
    this.dataServise.getTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
  }

  async submitData() {
    let user = null;
    this.dataServise.getUserData().subscribe(response => {
      response.forEach(async userDoc => {
        if (userDoc.email === this.authService.getEmail()) {
          console.log(userDoc);
          user = userDoc;
          await this.addTrainingsPlan(user);
        }
      });
    });
  }

  async addTrainingsPlan(user) {
    const formData = this.trainingform.getRawValue();
    const plan = {
      userId: user.userId,
      name: formData.name,
      description: formData.description
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
