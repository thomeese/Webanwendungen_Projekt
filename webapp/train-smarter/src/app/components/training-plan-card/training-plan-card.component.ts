import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training-plan-card',
  templateUrl: './training-plan-card.component.html',
  styleUrls: ['./training-plan-card.component.scss'],
})
export class TrainingPlanCardComponent implements OnInit {
  @Input() trainingPlan;
  @Input() showDescription: boolean;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
