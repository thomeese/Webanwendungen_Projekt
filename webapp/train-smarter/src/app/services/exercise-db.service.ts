import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoadingController} from "@ionic/angular";
import {Observable} from "rxjs";

//Exercise Enum
export enum SearchTypes {
  exercisesList = 'Alle Uebungen',
  bodyPart = 'Nach Körperteil',
  bodyPartList = 'Nach Muskelgruppe',
  exerciseByID = 'Nach Equipment'

  /*exercise = '/exercise',
  exercisesList = '',
  bodyPart = '/bodyPart',
  bodyPartList = '/bodyPartList',
  exerciseByID = '/excerise',
  targetMuscle = '/target',
  targetMuscleList = '/targetList',
  equipment = '/equipment',
  equipmentList = '/equipmentList'*/
}
export enum Muscles {
  abductors = 'abductors',
  abs = 'abs',
  adductors = 'adductors',
  biceps = 'biceps',
  calves = 'calves',
  cardiovascularSystem = 'cardiovascular system',
  delts = 'delts',
  forearms = 'forearms',
  glutes = 'glutes',
  hamstrings = 'hamstrings',
  lats = 'lats',
  levatorScapulae = 'levator scapulae',
  pectorals = 'pectorals',
  quads = 'quads',
  serratusAnterior = 'serratus anterior',
  spine = 'spine',
  traps = 'traps',
  triceps = 'triceps',
  upperBack = 'upper back'
}
export enum BodyParts {
  back = 'back',
  cardio = 'cardio',
  chest = 'chest',
  lowerArms = 'lower arms',
  lowerLegs = 'lower legs',
  neck = 'neck',
  shoulders = 'shoulders',
  upperArms = 'upper arms',
  upperLegs = 'upper legs',
  waist = 'waist'
}
export enum Equipment {
  assisted = 'assisted',
  band = 'band',
  barbell = 'barbell',
  bodyWeight ='body weight',
  bosuBall ='bosu ball',
  cable = 'cable',
  dumbbell = 'dumbbell',
  ellipticalMachine = 'elliptical machine',
  ezBarbel = 'ez barbell',
  hammer = 'hammer',
  kettlebell = 'kettlebell',
  leverageMachine = 'leverage machine',
  medicineBall = 'medicine ball',
  olympicBarbel = 'olympic barbell',
  resistanceBand = 'resistance band',
  roller = 'roller',
  rope = 'rope',
  skiergMachine = 'skierg machine',
  sledMachine = 'sled machine',
  smithMachine = 'smith machine',
  stabilityBall = 'stability ball',
  stationaryBike = 'stationary bike',
  stepmillMachine = 'stepmill machine',
  tire = 'tire',
  trapBar = 'trap bar',
  upperBodyEergometer = 'upper body ergometer',
  eighted = 'weighted',
  wheelRoller = 'wheel roller'
 }

export interface Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}


@Injectable({
  providedIn: 'root'
})
export class ExerciseDBService {
  url = 'https://exercisedb.p.rapidapi.com/exercises';
  headers = new HttpHeaders({
    'x-rapidapi-key': 'a54a4134ddmshb6ebf96f9eb85d9p1ae9c9jsnc7cb43018d56',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  });
  constructor(private http: HttpClient, private loadingCtr: LoadingController) {}

  getData(type: SearchTypes, target?): Observable<any> {
    if(typeof target === undefined) {
      return this.http.get<any>(`${this.url}${type}`, {headers: this.headers});
    }
    return this.http.get<any>(`${this.url}${type}/${target}`, {headers: this.headers});
  }
}
