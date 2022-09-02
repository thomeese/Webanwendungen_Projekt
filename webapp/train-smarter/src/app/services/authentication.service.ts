import { Injectable } from '@angular/core';
import firebase from 'firebase/compat';
import {Auth, signInWithEmailAndPassword, signOut} from '@angular/fire/auth';
import {createUserWithEmailAndPassword} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) {
  }

  async signUp(email, password) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
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
      return user;
    } catch (ex) {
      return null;
    }
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
