import {Component, Input, OnInit} from '@angular/core';
import {LocalstorageService} from '../../../services/localstorage.service';
import {DatabaseService} from '../../../services/database.service';

@Component({
  selector: 'app-live-training-logging',
  templateUrl: './live-training-logging.page.html',
  styleUrls: ['./live-training-logging.page.scss'],
})
export class LiveTrainingLoggingPage implements OnInit {
  @Input() trainingPlan;
  @Input() exerciseId;
  exercise;
  gifUrl;
  setLog = [];
  constructor(private locaStorageServ: LocalstorageService,
  private dataService: DatabaseService) {
  }

  ngOnInit() {
    if (this.trainingPlan) {
      const exercises = JSON.parse(this.locaStorageServ.getData('live-training-exercises'));
      console.log(exercises);
      exercises.forEach(item =>{
        if(item.exerciseId === this.exerciseId){
          this.exercise = item;
          this.dataService.getExerciseByNumericId(this.exercise.exerciseId).subscribe(res =>{
            this.gifUrl = res[0].gifUrl;
          });
        }
      });
      this.setLog = JSON.parse(this.locaStorageServ.getData('set-log-data-'+this.exerciseId));
      if(!this.setLog){
        this.setLog = [];
      }
    }
  }

  updateSetLogArray($event: string) {
    this.setLog = JSON.parse($event);
    this.locaStorageServ.saveData(`set-log-data-${this.exerciseId}`,JSON.stringify(this.setLog));
  }
}
