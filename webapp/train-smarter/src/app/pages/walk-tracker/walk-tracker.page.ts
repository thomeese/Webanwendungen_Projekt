import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {Platform} from '@ionic/angular';

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
  displayedTrack = null;
  trackedRoute = [];
  routeData = [];
  posSub: Subscription;
  constructor(private geolocation: Geolocation, private platform: Platform) { }

  ionViewDidLoad(){
    this.platform.ready().then(() =>{
      const mapOptions ={
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl:false
      };
      this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
    });
  }
  ngOnInit() {
  }

  startRun() {
    return null;
  }

  persistRun() {
    return null;
  }
}
