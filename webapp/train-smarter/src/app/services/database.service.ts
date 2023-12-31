import {Injectable} from '@angular/core';
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
  query, collectionGroup, QueryConstraint
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {traceUntilFirst} from '@angular/fire/performance';
import {AuthenticationService} from './authentication.service';
import {UserData} from '../Interfaces/userData';
import {TrainingPlan} from '../Interfaces/trainingPlan';
import {SetLogging} from '../Interfaces/setLogging';
import {WalkData} from '../Interfaces/walkData';

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

  getUserDataByUid(uid: string): Observable<UserData[]> {
    const userRef = collection(this.firestore, 'userData');
    const userQuery = query(userRef, where('uid', '==', uid));
    return collectionData(userQuery, {idField: 'userId'}) as Observable<UserData []>;
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

  addTrainingPlan(plan: TrainingPlan) {
    console.log(plan);
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    return addDoc(trainingPlanRef, plan);
  }

  updateTrainingPlan(trainingPlanId: string, plan: TrainingPlan) {
    const trainingPlanDocRef = doc(this.firestore, `trainingPlan/${trainingPlanId}`);
    return updateDoc(trainingPlanDocRef, {uid: plan.uid, name: plan.name, description: plan.description
      , period: plan.period,periodInterval: plan.periodInterval, exercises: plan.exercises});
  }

  deleteTrainingPlan(plan: TrainingPlan) {
    const trainingPlanDocRef = doc(this.firestore, `trainingPlan/${plan.trainingPlanId}`);
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
  getTrainingsPlanByUidAndName(name: string): Observable<any>{
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    const queryConstraints: QueryConstraint[] = [where('name','==',name),where('uid', '==', this.authService.getUserId())];
    const trainQuery = query(trainingPlanRef, ...queryConstraints);
    return collectionData(trainQuery, {idField: 'trainingPlanId'});
  }

  getUserTrainingsPlan() {
    const trainingPlanRef = collection(this.firestore, 'trainingPlan');
    const trainQuery = query(trainingPlanRef, where('uid', '==', this.authService.getUserId()));
    return collectionData(trainQuery, {idField: 'trainingPlanId'});
  }

  getAllSetLoggingByUid(): Observable<SetLogging []> {
    const setLoggingRef = collection(this.firestore, 'setLogging');
    const setLogginQuery = query(setLoggingRef, where('uid', '==', this.authService.getUserId()));
    return collectionData(setLogginQuery, {idField: 'setLoggingId'}) as Observable<SetLogging []>;
  }

  addSetLogging(setLogging: SetLogging) {
    const setLoggingRef = collection(this.firestore, 'setLogging');
    return addDoc(setLoggingRef, setLogging);
  }

  updateSetLogging(setLogging: SetLogging) {
    const setLoggingDocRef = doc(this.firestore, `setLogging/${setLogging.id}`);
    return updateDoc(setLoggingDocRef, {
      exerciseId: setLogging.excerciseId, trainingPlanId: setLogging.trainingPlanId,
      userId: setLogging.uid, date: setLogging.date, time: setLogging.time, sets: setLogging.sets,
    });
  }

  deleteSetLogging(setLogging: SetLogging) {
    const setLoggingDocRef = doc(this.firestore, `setLogging/${setLogging.id}`);
    return deleteDoc(setLoggingDocRef);
  }

  addWalk(walk: WalkData) {
    const walkRef = collection(this.firestore, 'walkData');
    return addDoc(walkRef, walk);
  }

  getWalkDataById(id: string): Observable<any> {
    const walkRef = doc(this.firestore, `walkData/${id}`);
    return docData(walkRef, {idField: 'walkId'}) as Observable<any>;
  }

  getWalkDataByUid(): Observable<any []> {
    const walkRef = collection(this.firestore, 'walkData');
    const walkQuery = query(walkRef, where('uid', '==', this.authService.getUserId()));
    return collectionData(walkQuery, {idField: 'walkId'}) as Observable<any []>;
  }

  deleteWalk(walk: WalkData) {
    const walkRef = doc(this.firestore, `walkData/${walk.walkId}`);
    return deleteDoc(walkRef);
  }
}
