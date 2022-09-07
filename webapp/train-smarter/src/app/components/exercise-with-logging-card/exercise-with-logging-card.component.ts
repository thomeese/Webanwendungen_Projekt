import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-with-logging-card',
  templateUrl: './exercise-with-logging-card.component.html',
  styleUrls: ['./exercise-with-logging-card.component.scss'],
})
export class ExerciseWithLoggingCardComponent implements OnInit {

  @Input() exercise;

  constructor() { }

  ngOnInit() {}

}
