import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {AuthenticationService} from '../../services/authentication.service';
import {DatabaseService} from '../../services/database.service';

declare let google;

@Component({
  selector: 'app-walk-tracker',
  templateUrl: './walk-tracker.page.html',
  styleUrls: ['./walk-tracker.page.scss'],
})
export class WalkTrackerPage implements OnInit {
  userWalkData;
  constructor(private geolocation: Geolocation,
              private platform: Platform,
              private authService: AuthenticationService,
              private dataService: DatabaseService) {
  }

  ngOnInit() {

    this.dataService.getWalkDataByUid().subscribe((res) =>{
      this.userWalkData = res;
    });
  }
}
