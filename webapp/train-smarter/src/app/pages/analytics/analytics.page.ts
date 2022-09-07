import {Component, OnInit} from '@angular/core';
import {DatabaseService} from '../../services/database.service';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {
  mostUsedPlan;
  leastUsedPlan;
  constructor(private dataService: DatabaseService,
              private authService: AuthenticationService) {
  }

   getMostUsedTrainingsPlan() {
    const map = new Map();
     this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        });
        const maxValue = Math.max(...map.values());
        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === maxValue) {
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.mostUsedPlan = resultItem;
            });
          } else {
          }
        }
      });
    });
  }

  getLeastUsedTrainingsPlan() {
    const map = new Map();
    this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        });
        const minValue = Math.min(...map.values());
        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === minValue) {
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.leastUsedPlan = resultItem;
            });
          } else {
          }
        }
      });
    });
  }

  ngOnInit() {
    this.getMostUsedTrainingsPlan();
    this.getLeastUsedTrainingsPlan();
  }

}
