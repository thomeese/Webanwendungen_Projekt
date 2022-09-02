import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {
  trainingform: FormGroup;

  constructor(
    private dataServise: DatabaseService,
    private formbuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new FormControl('',[Validators.required, Validators.minLength(5)]),
      description: new FormControl('',[Validators.required, Validators.minLength(15)])
    });
  }

}
