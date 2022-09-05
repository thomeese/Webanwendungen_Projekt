import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  public appPages = [
    {title: 'home', url: 'home', icon: 'home'},
    {title: 'live-training', url: 'live-training', icon: 'heart'},
    {title: 'analytics', url: 'analytics', icon: 'analytics'},
    {title: 'training-plan', url: 'training-plan', icon: 'document'},
    {title: 'exercise', url: 'exercise', icon: 'warning'},
  ];

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {
  }

  async signOut() {
    await this.authService.signOut();
    await this.router.navigateByUrl('/login', {replaceUrl: true});
    document.location.reload();
  }
}
