import {Injectable, Query} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  updateDoc,
  where,
  query, collectionGroup
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {traceUntilFirst} from '@angular/fire/performance';
import {AuthenticationService} from './authentication.service';

enum SearchTypes {
  exercise = '/exercise',
  exercisesList = '',
  bodyPart = '/bodyPart',
  bodyPartList = '/bodyPartList',
  exerciseByID = '/exercise',
  targetMuscle = '/target',
  targetMuscleList = '/targetList',
  equipment = '/equipment',
  equipmentList = '/equipmentList'
}

export interface UserData {
  docId?: string;
  uid: string;
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
  excerciseId: string;
  trainingPlanId: string;
  uid: string;
  date: string;
  sets: Array<any>;
}

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {

  constructor(private firestore: Firestore,
              private authService: AuthenticationService) {
  }

  getUserData(): Observable<UserData[]> {
    const userRef = collection(this.firestore, 'userData');
    return collectionData(userRef, {idField: 'userId'}) as Observable<UserData []>;
  }

  getUserDataById(id: string): Observable<UserData> {
    const userDocRef = doc(this.firestore, `userData/${id}`);
    return docData(userDocRef, {idField: 'userId'}) as Observable<UserData>;
  }

  addUser(user: UserData) {
    const userRef = collection(this.firestore, 'userData');
    return addDoc(userRef, user);
  }

  updateUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.docId}`);
    return updateDoc(userDocRef, {
      firstname: user.firstname, surname: user.surname,
      birthdate: user.birthdate, size: user.size, email: user.email
    });
  }

  deleteUser(user: UserData) {
    const userDocRef = doc(this.firestore, `userData/${user.docId}`);
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
    return collectionData(trainingPlanRef, {idField: 'trainingPlanId'}) as Observable<any []>;
  }

  getTrainingsPlanById(id: string): Observable<any> {
    const trainingPlanRef = doc(this.firestore, `trainingPlan/${id}`);
    return docData(trainingPlanRef, {idField: 'trainingPlanId'}) as Observable<any>;
  }

  getUserTrainingsPlan() {
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    const trainQuery = query(trainingPlanRef, where('uid', '==', this.authService.getUserId()));
    return collectionData(trainQuery, {idField: 'trainingPlanId'});
  }

  addExercise(exercise: Excersise) {
    const exerciseRef = collection(this.firestore, 'exercises');
    return addDoc(exerciseRef, exercise);
  }

  getAllExercises(): Observable<Excersise[]> {
    const exerciseRef = collection(this.firestore, 'exercises');
    return collectionData(exerciseRef, {idField: 'exerciseId'}) as Observable<Excersise[]>;
  }

  getExercisesBySearch(type, target?): Observable<Excersise[]> {
    console.log('Hello');
    console.log(type);
    console.log(SearchTypes.bodyPart);
    const exerciseRef = collection(this.firestore, 'exercises');
    if (type === 'exercisesList') {
      console.log(SearchTypes.exercisesList);
      return this.getAllExercises();
    }
    if (type === 'bodyPart') {
      console.log('bodypart');
      const exerciseQuary = query(exerciseRef, where('bodypart', '==', target));
      return collectionData(exerciseQuary, {idField: 'exerciseId'}) as Observable<Excersise []>;
    }
    if (type === 'targetMuscle') {
      console.log(SearchTypes.targetMuscle);
      const exerciseQuary = query(exerciseRef, where('target', '==', target));
      return collectionData(exerciseQuary, {idField: 'exerciseId'}) as Observable<Excersise []>;
    }
    if (type === 'equipment') {
      console.log(SearchTypes.equipment);
      const exerciseQuary = query(exerciseRef, where('equipment', '==', target));
      return collectionData(exerciseQuary, {idField: 'exerciseId'}) as Observable<Excersise []>;
    }
  }

  getExerciseById(id: string): Observable<Excersise> {
    const exerciseRef = doc(this.firestore, `exercises/${id}`);
    return docData(exerciseRef, {idField: 'exerciseId'}) as Observable<Excersise>;
  }

  getExerciseByNumericId(id: string) {
    const exerciseRef = collection(this.firestore, 'exercises');
    const exerciseQuary = query(exerciseRef, where('numericId', '==', id));
    return collectionData(exerciseQuary, {idField: 'exerciseId'}) as Observable<Excersise []>;
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
      exerciseId: setLogging.excerciseId, trainingPlanId: setLogging.trainingPlanId,
      userId: setLogging.uid, date: setLogging.date, sets: setLogging.sets,
    });
  }

  deleteSetLogging(setLogging: SetLogging) {
    const setLoggingDocRef = doc(this.firestore, `setLogging/${setLogging.id}`);
    return deleteDoc(setLoggingDocRef);
  }
}
