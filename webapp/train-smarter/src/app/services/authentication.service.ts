import {Injectable} from '@angular/core';
import firebase from 'firebase/compat';
import {Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {createUserWithEmailAndPassword} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthetificated;

  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.isAuthetificated = false;
  }
  async signUp(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (user) {
        this.isAuthetificated = true;
      }
      return user;
    } catch (ex) {
      return null;
    }
  }

  async signIn({email, password}) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      if (user) {
        this.isAuthetificated = true;
      }
      return user;
    } catch (ex) {
      return null;
    }
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    if (!this.isAuthetificated) {
      this.router.navigateByUrl('/login', {replaceUrl: true});
      return false;
    }
    return true;
  }
}
