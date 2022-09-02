import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoadingController} from "@ionic/angular";
import {Observable} from "rxjs";

//Exercise Enum
export enum SearchType {
  exercise = '/exercise',
  exercisesList = '',
  bodyPart = '/bodyPart',
  bodyPartList = '/bodyPartList',
  exerciseByID = '/excerise',
  targetMuscle = '/target',
  targetMuscleList = '/targetList',
  equipment = '/equipment',
  equipmentList = '/equipmentList'
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

  getData(type: SearchType, target?): Observable<any> {
    if(typeof target === undefined) {
      return this.http.get<any>(`${this.url}${type}`, {headers: this.headers});
    }
    return this.http.get<any>(`${this.url}${type}/${target}`, {headers: this.headers});
  }
}
