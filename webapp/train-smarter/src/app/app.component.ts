import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'logintrest', url: 'login', icon: 'mail' },
    { title: 'home', url: 'home', icon: 'paper-plane' },
    { title: 'live-training', url: 'live-training', icon: 'heart' },
    { title: 'analytics', url: 'analytics', icon: 'archive' },
    { title: 'training-plan', url: 'training-plan', icon: 'trash' },
    { title: 'exercise', url: 'exercise', icon: 'warning' },
  ];
  constructor() {}
}
