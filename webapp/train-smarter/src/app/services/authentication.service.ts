import {Injectable} from '@angular/core';
import firebase from 'firebase/compat';
import {Auth, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut,} from '@angular/fire/auth';
import {browserLocalPersistence} from '@firebase/auth';
import {createUserWithEmailAndPassword} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, Router} from '@angular/router';
import {MenuController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthetificated = false;
  user;
  userDocId;

  constructor(
    private auth: Auth,
    private router: Router,
    private menu: MenuController) {
    this.checkAllreadyLockedIn();
  }

  checkAllreadyLockedIn(): boolean{
      this.auth.onAuthStateChanged( (user) => {
        if (user) {
          console.log(user);
          console.log('Nutzer bereits eingeloggt!');
          this.user = user;
          this.isAuthetificated = true;
          this.menu.enable(true);
          this.router.navigateByUrl('/home', {replaceUrl: true});
        } else {
          this.isAuthetificated = false;
          return false;
        }
      });
    return true;
  }

  async signUp(email, password) {
    try {
      this.user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (this.user) {
        this.isAuthetificated = true;
        this.user = this.user.user;
      }
      return this.user;
    } catch (ex) {
      return null;
    }
  }

  async signIn({email, password}) {
    try {
      this.user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (this.user) {
        this.isAuthetificated = true;
        this.user = this.user.user;
      }
      return this.user;
    } catch (ex) {
      return null;
    }
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }

  getEmail() {
    return this.user.email;
  }

  getUserId() {
    return this.user.uid;
  }

  getUserDocId() {
    return this.userDocId;
  }

  setUserDocId(id: string) {
    this.userDocId = id;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(this.router.url);
    console.log(route);
    if (this.isAuthetificated) {
        return true;
      }
    this.router.navigateByUrl('/login', {replaceUrl: true});
    return false;
  }
}
