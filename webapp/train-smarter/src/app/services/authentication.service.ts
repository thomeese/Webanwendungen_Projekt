import {Injectable} from '@angular/core';
import firebase from 'firebase/compat';
import {Auth, setPersistence, signInWithEmailAndPassword, signOut,} from '@angular/fire/auth';
import {createUserWithEmailAndPassword} from '@angular/fire/auth';
import {ActivatedRouteSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isAuthetificated;
  user;
  userDocId;
  constructor(
    private auth: Auth,
    private router: Router
  ) {
    this.isAuthetificated = false;
  }

  async signUp(email, password) {
    try {
      await setPersistence('session').then(async () => {
        this.user = await createUserWithEmailAndPassword(
          this.auth,
          email,
          password
        );
        if (this.user) {
          this.isAuthetificated = true;
        }
        return this.user;
      });
    } catch (ex) {
      return null;
    }
  }

  async signIn({email, password}) {
    try {
      await setPersistence('session').then(async () => {
        this.user = await signInWithEmailAndPassword(
          this.auth,
          email,
          password
        );
        if (this.user) {
          this.isAuthetificated = true;
        }
        return this.user;
    });
    }catch (ex) {
      return null;
    }
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }

  getEmail() {
    return this.user.user.email;
  }

  getUserId() {
    return this.user.user.uid;
  }
  getUserDocId() {
    return this.userDocId;
  }
  setUserDocId(id: string) {
    this.userDocId = id;
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    return true;
    if (!this.isAuthetificated) {
      this.router.navigateByUrl('/login', {replaceUrl: true});
      return false;
    }
    return true;
  }
}
