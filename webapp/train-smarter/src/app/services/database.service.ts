import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface UserData {
  userId?: string;
  firstname: string;
  surname: string;
  birthdate: string;
  size: number;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private firestore: Firestore) {
  }

  getUserData(): Observable<UserData[]> {
    const userRef = collection(this.firestore, 'userData');
    return collectionData(userRef, {idField: 'userId'}) as Observable<UserData []>;
  }

  getUserById(id: string): Observable<UserData> {
    const userDocRef = doc(this.firestore, `userData/${id}`);
    return docData(userDocRef, {idField: 'userId'}) as Observable<UserData>;
  }

  addUser(user: UserData) {
    const userRef = collection(this.firestore, 'userData');
    return addDoc(userRef, user);
  }

  updateUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.userId}`);
    return updateDoc(userDocRef,{firstname: user.firstname, surname: user.surname,
      birthdate: user.birthdate, size: user.size, email: user.email});
  }

  deleteUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.userId}`);
    return deleteDoc(userDocRef);
  }
}
