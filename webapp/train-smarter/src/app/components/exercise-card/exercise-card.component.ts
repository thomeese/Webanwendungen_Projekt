import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-exercise-card',
  templateUrl: './exercise-card.component.html',
  styleUrls: ['./exercise-card.component.scss'],
})
export class ExerciseCardComponent implements OnInit {

  @Input() gifUrl: string;
  @Input() title: string;
  @Input() id: string;

  constructor(private router: Router, private modalCtrl: ModalController) {

  }

  ngOnInit() {
  }
}
