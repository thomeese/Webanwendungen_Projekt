import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc, where
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {query} from '@angular/fire/database';

export interface UserData {
  userId?: string;
  firstname: string;
  surname: string;
  birthdate: string;
  size: number;
  email: string;
}

export interface Excersise {
  exerciseId?: string;
  name: string;
  bodypart: string;
  equipment: string;
  gifUrl: string;
  target: string;
}

export interface SetLogging {
  id?: string;
  excercizeId: string;
  trainingPlanId: string;
  userId: string;
  date: string;
  set: number;
  weight: number;
  repition: number;
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

  addUser(user: UserData) {
    const userRef = collection(this.firestore, 'userData');
    return addDoc(userRef, user);
  }

  updateUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.userId}`);
    return updateDoc(userDocRef, {
      firstname: user.firstname, surname: user.surname,
      birthdate: user.birthdate, size: user.size, email: user.email
    });
  }

  deleteUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.userId}`);
    return deleteDoc(userDocRef);
  }

  addTrainingPlan(plan: any) {
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    return addDoc(trainingPlanRef, plan);
  }

  updateTrainingPlan(plan: any) {
    const trainingPlanDocRef = doc(this.firestore, `trainingPlan/${plan.id}`);
    return updateDoc(trainingPlanDocRef, plan);
  }

  deleteTrainingPlan(plan: any) {
    const trainingPlanDocRef = doc(this.firestore, `trainingPlan/${plan.id}`);
    return deleteDoc(trainingPlanDocRef);
  }

  getTrainingsPlan(): Observable<any[]> {
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    return collectionData(trainingPlanRef, {idField: 'userId'}) as Observable<any []>;
  }

  addExercise(exercise: Excersise) {
    const exerciseRef = collection(this.firestore, 'exercises');
    return addDoc(exerciseRef, exercise);
  }

  updateExercise(exercise: Excersise) {
    const exerciseDocRef = doc(this.firestore, `exercises/${exercise.exerciseId}`);
    return updateDoc(exerciseDocRef, {
      name: exercise.name, bodypart: exercise.bodypart,
      equipment: exercise.equipment, gifUrl: exercise.gifUrl, target: exercise.target
    });
  }

  deleteExercise(exercise: Excersise) {
    const exerciseDocRef = doc(this.firestore, `exercises/${exercise.exerciseId}`);
    return deleteDoc(exerciseDocRef);
  }

  addSetLogging(setLogging: SetLogging) {
    const setLoggingRef = collection(this.firestore, 'setLogging');
    return addDoc(setLoggingRef, setLogging);
  }

  updateSetLogging(setLogging: SetLogging) {
    const setLoggingDocRef = doc(this.firestore, `setLogging/${setLogging.id}`);
    return updateDoc(setLoggingDocRef, {
      exerciseId: setLogging.excercizeId, trainingPlanId: setLogging.trainingPlanId,
      userId: setLogging.userId, date: setLogging.date, set: setLogging.set,
      weight: setLogging.weight, repetiton: setLogging.repition
    });
  }

  deleteSetLogging(setLogging: SetLogging) {
    const setLoggingDocRef = doc(this.firestore, `setLogging/${setLogging.id}`);
    return deleteDoc(setLoggingDocRef);
  }
}
