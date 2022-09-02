import {Component, OnInit, ViewChild} from '@angular/core';
import { IonModal } from '@ionic/angular';
import {DatabaseService} from '../../services/database.service';
import { OverlayEventDetail } from '@ionic/core/components';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {
  @ViewChild(IonModal) modal: IonModal;
  trainingform: FormGroup;

  constructor(
    private dataServise: DatabaseService,
    private formbuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      description: new FormControl('', [Validators.required, Validators.minLength(30)])
    });
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
