import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../../services/database.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-live-training-detail',
  templateUrl: './live-training-detail.page.html',
  styleUrls: ['./live-training-detail.page.scss'],
})
export class LiveTrainingDetailPage implements OnInit {
  id;
  name;
  exercises = [];

  constructor(private databaseService: DatabaseService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('Id: '+this.id);
    this.databaseService.getTrainingsPlanById(this.id).subscribe(res => {
      this.name = res.name;
      this.exercises = res.exercises;
      console.log('exercises: ');
      console.log(this.exercises);
    });
  }
}
