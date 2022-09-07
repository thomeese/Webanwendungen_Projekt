import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  mostUsedPlan;
  leastUsedPlan;

  constructor(private dataService: DatabaseService,
              private router: Router) {
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

  ngOnInit() {
    this.getMostUsedTrainingsPlan();
    this.getLeastUsedTrainingsPlan();
  }

  async redirect(trainingPlanId: string) {
   await this.router.navigateByUrl(`/training-plan/${trainingPlanId}`, {replaceUrl: true});
  }
}
