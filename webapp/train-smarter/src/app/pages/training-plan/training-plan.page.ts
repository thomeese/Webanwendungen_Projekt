import { Component, OnInit } from '@angular/core';
import {DatabaseService} from '../../services/database.service';

@Component({
  selector: 'app-training-plan',
  templateUrl: './training-plan.page.html',
  styleUrls: ['./training-plan.page.scss'],
})
export class TrainingPlanPage implements OnInit {

  constructor(
    private dataServise: DatabaseService
  ) { }

  ngOnInit() {
  }

}
