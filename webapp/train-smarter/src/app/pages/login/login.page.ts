import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import {AuthenticationService} from "../../services/authentication.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public appPages = [
    {title: 'Inbox', url: '/pages/Inbox', icon: 'mail'},
    {title: 'Login', url: '/pages/login/', icon: 'mail'},
    {title: 'Outbox', url: '/pages/Outbox', icon: 'paper-plane'},
    {title: 'Favorites', url: '/pages/Favorites', icon: 'heart'},
    {title: 'Archived', url: '/pages/Archived', icon: 'archive'},
    {title: 'Trash', url: '/pages/Trash', icon: 'trash'},
    {title: 'Spam', url: '/pages/Spam', icon: 'warning'},
  ];
  user: FormGroup;
  register = false;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {
  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();
    const loggedInUser = await this.authService.signIn(this.user.value);
    await loading.dismiss();

    if (loggedInUser) {
      //Url noch setzen
      this.router.navigateByUrl('', {replaceUrl: true});
    } else {
      this.displayAlert('Anmeldung fehlgeschlagen', 'Bitte versuchen sie es Erneut');
    }
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();
    const loggedInUser = await this.authService.signUp(this.user.value);
    await loading.dismiss();

    if (loggedInUser) {
      //Url noch setzen
      this.router.navigateByUrl('', {replaceUrl: true});
    } else {
      this.displayAlert('Registrierung fehlgeschlagen', 'Bitte versuchen sie es Erneut');
    }
  }

  async displayAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Schließen'],
    });
    await alert.present();
  }

  ngOnInit() {
    this.user = this.formbuilder.group({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,
          //mind. 1 Großbuchstaben, 1 Kleinbuchstaben, mind. 8 Zeichen und mind. 1 Sonderzeichen, mind. 1 Zahl
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$')]),
        password2: new FormControl('', [Validators.required])
      },
      {
        validator: this.isEquals('password', 'password2')
      });
  }

  private isEquals(string1: any, string2: any) {
    return (checkForm: FormGroup) => {
      const value1 = checkForm.controls[string1];
      const value2 = checkForm.controls[string2];
      if (value1.value === value2.value) {
        return value2.setErrors(null);
      } else {
        return value2.setErrors({notEquivalent: true});
      }
    };
  }

}
