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

  async redirect(trainingPlanId: string) {
   await this.router.navigateByUrl(`/training-plan/${trainingPlanId}`, {replaceUrl: true});
  }
}
