import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingController} from '@ionic/angular';
import {Observable} from 'rxjs';

//Exercise Enum
export enum SearchTypesToString {
  exercisesList = 'Alle Uebungen',
  bodyPart = 'Nach Körperteil',
  targetMuscle = 'Nach Muskelgruppe',
  exerciseByID = 'Nach ÜbungsID',
  equipment = 'Nach Equipment'
}
export enum SearchTypes {
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

export enum MusclesToString {
  abductors = 'Abduktoren',
  abs = 'Bauchmuskeln',
  adductors = 'Adduktoren',
  biceps = 'Biceps',
  calves = 'Waden',
  cardiovascularSystem = 'Blutkreislauf',
  delts = 'Deltas',
  forearms = 'Unterarm',
  glutes = 'Gluteus',
  hamstrings = 'Oberschenkelmuskulatur',
  lats = 'Latissimus',
  levatorScapulae = 'Schulterblätter',
  pectorals = 'Brustmuskeln',
  quads = 'Quads',
  serratusAnterior = 'vorderer Sägemuskel',
  spine = 'Wirbelsäule',
  traps = 'Trapezmuskel',
  triceps = 'Triceps',
  upperBack = 'Oberer Rücken'
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

export enum BodyPartsToString {
  back = 'Rücken',
  cardio = 'Cardio',
  chest = 'Brust',
  lowerArms = 'Unterarm',
  lowerLegs = 'Untere Beine',
  neck = 'Nacken',
  shoulders = 'Schultern',
  upperArms = 'Obere Arme',
  upperLegs = 'Oberer Beine',
  waist = 'Taille'
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

export enum EquipmentToString {
  assisted = 'unterstützt',
  band = 'Band',
  barbell = 'Langhantel',
  bodyWeight ='body weight',
  bosuBall ='BosuBall',
  cable = 'Kabel',
  dumbbell = 'Kurzhantel',
  ellipticalMachine = 'elliptische Maschine',
  ezBarbel = 'EZ Hantel',
  hammer = 'Hammer',
  kettlebell = 'Kettlebell',
  leverageMachine = 'Hebelmaschine',
  medicineBall = 'Medizinball',
  olympicBarbel = 'olympische Langhantel',
  resistanceBand = 'Widerstandsband',
  roller = 'Rolle',
  rope = 'Seil',
  skiergMachine = 'SkiErg Maschine',
  sledMachine = 'Sled Maschine',
  smithMachine = 'Multipresse',
  stabilityBall = 'Stabilitätsball',
  stationaryBike = 'Fahrrad',
  stepmillMachine = 'Stepmill Maschine',
  tire = 'Reifen',
  trapBar = 'Trap Bar',
  upperBodyEergometer = 'Oberkörper-Ergometer',
  weighted = 'gewichtet',
  wheelRoller = 'AB Roller'
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
  weighted = 'weighted',
  wheelRoller = 'wheel roller'
 }



@Injectable({
  providedIn: 'root'
})
export class ExerciseDBService {
  url = 'https://exercisedb.p.rapidapi.com/exercises';
  headers = new HttpHeaders({
    'x-rapidapi-key': 'faa32cc9f5msh7a6aced2f4a8cbcp110446jsn70a489d7ecbd',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  });
  constructor(private http: HttpClient, private loadingCtr: LoadingController) {}

  getData(type, target?): Observable<any> {
    if(typeof target === 'undefined') {
      return this.http.get<any>(`${this.url}${SearchTypes[type]}`, {headers: this.headers});
    }
      return this.http.get<any>(`${this.url}${SearchTypes[type]}/${target}`, {headers: this.headers});
    }
  getExerciseByID(id): Observable<any> {
    return this.http.get<any>(`${this.url}/exercise/${id}`, {headers: this.headers});
  }
  getAll(): Observable<any> {
    return this.http.get<any>('https://exercisedb.p.rapidapi.com/exercises', {headers: this.headers});
  }
}
