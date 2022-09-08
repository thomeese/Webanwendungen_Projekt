import {Component, ElementRef, OnInit, Input, ViewChild} from '@angular/core';
import {Geoposition} from '@ionic-native/geolocation';
import {DatePipe} from '@angular/common';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {AuthenticationService} from '../../../services/authentication.service';
import {DatabaseService} from '../../../services/database.service';
import {Subscription} from 'rxjs';

declare let google;

@Component({
  selector: 'app-walk-tracker-detail',
  templateUrl: './walk-tracker-detail.page.html',
  styleUrls: ['./walk-tracker-detail.page.scss'],
})

export class WalkTrackerDetailPage implements OnInit {
  @Input() walkId;
  @ViewChild('map') mapElement: ElementRef;
  walkStartet = false;
  map: any;
  startTimestamp;
  endTimetamp;
  specificWalkData;
  displayedTrack = null;
  trackedRoute = [];
  posSub: Subscription;

  constructor(private geolocation: Geolocation,
              private platform: Platform,
              private authService: AuthenticationService,
              private dataService: DatabaseService) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      const mapOptions = {
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.geolocation.getCurrentPosition().then(pos => {
        const latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
        this.map.setCenter(latLng);
        this.map.setZoom(18);
      });
    });
    if(this.walkId){
      this.dataService.getWalkDataById(this.walkId).subscribe((res) =>{
        this.specificWalkData = res;
      });
    }
  }

  startRun() {
    this.startTimestamp = new Date();
    this.walkStartet = true;
    this.posSub = this.geolocation.watchPosition().subscribe((data) => {
      if (data as Geoposition && 'coords' in data) {
        this.trackedRoute.push({
          lat: data.coords.latitude,
          lng: data.coords.longitude
        });
        this.drawPath(this.trackedRoute);
      }
    });
    return null;
  }

  drawPath(pathValue) {
    if (this.displayedTrack) {
      this.displayedTrack.setMap(null);
    }
    if (pathValue.length > 1) {
      this.displayedTrack = new google.maps.Polyline({
        path: pathValue,
        geodesic: true,
        strokeColor: '#ff0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.displayedTrack.setMap(this.map);
    }
  }

  timeConvert(input: number): string {
    let seconds = Math.floor(input / 1000);
    let minutes = 0;
    let hours = 0;
    if (seconds > 60) {
      minutes = Math.floor(seconds / 60);
      seconds = Math.floor(seconds % 60);
    }
    if (minutes > 60) {
      hours = Math.floor(minutes / 60);
      minutes = Math.floor(minutes % 60);
    }
    return hours + ':' + minutes + ':' + seconds;
  }

  async persistRun() {
    this.posSub.unsubscribe();
    this.endTimetamp = new Date();
    const neededTime = this.endTimetamp.valueOf() - this.startTimestamp.valueOf();
    console.log(neededTime);
    console.log(this.timeConvert(neededTime));
    this.walkStartet = false;
    const newWalkDoc = {
      uid: this.authService.getUserId(),
      neededTime: this.timeConvert(neededTime),
      date: new DatePipe('de-DE').transform(new Date(), 'dd.MM.yyyy'),
      time: new DatePipe('de-DE').transform(new Date(), 'HH:mm:ss'),
      route: this.trackedRoute
    };
    //this.userWalkData.push(newWalkDoc);
    await this.dataService.addWalk(newWalkDoc);
  }
}
