import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {AlertController, LoadingController, MenuController} from '@ionic/angular';
import {Router} from '@angular/router';
import {DatabaseService} from '../../services/database.service';
import {UserData} from '../../interfaces/userData';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  userForm: FormGroup;
  registerData: FormGroup;
  register = false;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthenticationService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    private dataService: DatabaseService,
    private menu: MenuController
  ) {

  }

  async signIn() {
    const loading = await this.loadingController.create();
    await loading.present();
    const loggedInUser = await this.authService.signIn(this.userForm.value);
    await loading.dismiss();

    if (loggedInUser) {
      await this.router.navigateByUrl('/home', {replaceUrl: true});
      await this.menu.enable(true);
    } else {
      await this.displayAlert('Anmeldung fehlgeschlagen', 'Bitte versuchen sie es erneut.');
    }
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();
    const data = this.registerData.getRawValue();
    const loggedInUser = await this.authService.signUp(data.email, data.password);
    console.log(loggedInUser);
    const newUser: UserData = {
      uid: loggedInUser.uid,
      firstname: data.firstname,
      surname: data.surname,
      birthdate: data.birthdate,
      size: data.size.replace(',', '.'),
      email: data.email
    };
    this.dataService.addUser(newUser);
    await loading.dismiss();
    if (loggedInUser) {
      await this.router.navigateByUrl('/home', {replaceUrl: true});
      await this.menu.enable(true);
    } else {
      await this.displayAlert('Registrierung fehlgeschlagen', 'Bitte versuchen sie es Erneut');
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
    this.userForm = this.formbuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', []),
    });
    const docDate = new Date();
    this.registerData = this.formbuilder.group({
        firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z .,\'-]*$')]),
        surname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z][a-zA-Z .,\'-äÄßüÜ]*$')]),
        birthdate: new FormControl(new Date(docDate).toISOString().slice(0, -1)),
        size: new FormControl('', [Validators.required, Validators.pattern('[1-2]{1}[.,]{1}[0-9]{2}')]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required,
          //mind. 1 Großbuchstaben, 1 Kleinbuchstaben, mind. 8 Zeichen und mind. 1 Sonderzeichen, mind. 1 Zahl
          Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$')]),
        password2: new FormControl('', [Validators.required])
      },
      {
        validator: this.isEquals('password', 'password2')
      });
    this.menu.enable(false);
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
