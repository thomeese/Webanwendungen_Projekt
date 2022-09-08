import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';
import {DatePipe} from '@angular/common';
import {filter} from 'rxjs/operators';
import {Geoposition} from '@ionic-native/geolocation';

declare let google;

@Component({
  selector: 'app-walk-tracker',
  templateUrl: './walk-tracker.page.html',
  styleUrls: ['./walk-tracker.page.scss'],
})
export class WalkTrackerPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  walkStartet = false;
  map: any;
  startTimestamp;
  endTimetamp;
  displayedTrack = null;
  trackedRoute = [];
  routeData = [];
  posSub: Subscription;

  constructor(private geolocation: Geolocation, private platform: Platform) {
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
        this.map.setZoom(15);
      });
    });
  }

  startRun() {
    this.startTimestamp = new Date();
    this.walkStartet = true;
    this.posSub = this.geolocation.watchPosition().subscribe(data => {
      setTimeout(() => {
        if ((data as Geoposition).coords !== undefined) {
          this.trackedRoute.push({
            lat: (data as Geoposition).coords.latitude,
            lon: (data as Geoposition).coords.longitude
          });
          this.drawPath(this.trackedRoute);
        }
      });
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
        strokeColor: '#0037ff',
        strokeOpacity: 1.0,
        strokeWeight: 3
      });
      this.displayedTrack.setMap(this.map);
    }
  }

  timeConvert(input: number): string {
    const seconds = Math.floor(input / 1000);
    let minutes = 0;
    let hours = 0;
    if(seconds > 60){
      minutes = seconds % 60;
    }
    if(minutes > 60){
      hours = seconds % 60;
    }
    return hours+':'+minutes+':' + seconds;
  }

  persistRun() {
    this.endTimetamp = new Date();
    this.routeData.push(this.trackedRoute);
    const neededTime = this.endTimetamp.valueOf() - this.startTimestamp.valueOf();
    console.log(this.timeConvert(neededTime));
    this.walkStartet = false;
    this.posSub.unsubscribe();
    return null;
  }
}
