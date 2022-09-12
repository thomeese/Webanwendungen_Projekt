import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  mostUsedPlan;
  leastUsedPlan;
  exerciseWeightRecordMap;
  exerciseLookupMap;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
      dynamicBullets: true,
      clickable: true
    },
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false
    },
    effect: 'coverflow',
    //navigation: true,
  };
  constructor(private dataService: DatabaseService,
              private router: Router) {
  }

  getExercisePersonalRecord() {
    const map = new Map ();
    let setArray = [];
    this.dataService.getAllSetLoggingByUid().subscribe( result => {
      //Alle Gewichte fuer die jeweilige Exercise finden
      result.forEach( item => {
        item.sets.forEach( concreteSet =>{
          setArray.push(concreteSet.weight);
        });
        if(map.get(item.excerciseId)) {
          for (const i of map.get(item.excerciseId)) {
            setArray.push(i);
          }
        }
        //und zwischenspeichern
        map.set(item.excerciseId,setArray);
        setArray = [];
      });
      const secondMap = new Map ();
      //Maximalgewicht fuer die jeweilige Exercise finden
      for( const k of map.keys()){
        if(map.get(k)) {
          //und zwischen speichern
          secondMap.set(k, Math.max(...map.get(k)));
        }
      }
      this.exerciseWeightRecordMap = secondMap;
      this.exerciseLookupMap = new Map();
      for(const j of secondMap.keys()){
        if(secondMap.get(j)){
          //genaue Exercise-Daten holen und mit Maximalgewicht speichern
          this.dataService.getExerciseByNumericId(j).subscribe(resultExercise => {
            this.exerciseLookupMap.set(j,resultExercise[0]);
            console.log(this.exerciseLookupMap);
          });
        }
      }
    });
  }

  getMostUsedTrainingsPlan() {
    const map = new Map();
    this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        //Map mit ids und Nullen vorinitialisieren
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          //Jede gefundene Id hochzaehlen
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        });
        //Max-Wert in der Map ermitteln
        const maxValue = Math.max(...map.values());
        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === maxValue) {
            //Plan der dem Max-Wert in der Map hat setzen
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.mostUsedPlan = resultItem;
            });
          }
        }
      });
    });
  }

  getLeastUsedTrainingsPlan() {
    const map = new Map();
    this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        //Map mit ids und Nullen vorinitialisieren
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          //Jede gefundene Id hochzaehlen
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        });
        //Min-Wert in der Map ermitteln
        const minValue = Math.min(...map.values());
        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === minValue) {
            //Plan der dem Min-Wert in der Map hat setzen
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.leastUsedPlan = resultItem;
            });
          }
        }
      });
    });
  }

  openTrainingPlain(trainingPlanId) {
    this.router.navigateByUrl('/training-plan/' + trainingPlanId);
  }

  ngOnInit() {
    this.getMostUsedTrainingsPlan();
    this.getLeastUsedTrainingsPlan();
    this.getExercisePersonalRecord();
  }

  async redirect(trainingPlanId: string) {
    await this.router.navigateByUrl(`/training-plan/${trainingPlanId}`, {replaceUrl: true});
  }
}
