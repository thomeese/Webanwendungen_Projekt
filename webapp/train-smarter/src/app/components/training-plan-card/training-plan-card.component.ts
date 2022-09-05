import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-training-plan-card',
  templateUrl: './training-plan-card.component.html',
  styleUrls: ['./training-plan-card.component.scss'],
})
export class TrainingPlanCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() id: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  details() {
    this.router.navigateByUrl(`/training-plan/${this.id}`);
  }
}
