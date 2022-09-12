import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {
  BodyParts,
  BodyPartsToString, Equipment,
  EquipmentToString,
  ExerciseDBService, Muscles,
  MusclesToString,
  SearchTypesToString
} from '../../services/exercise-db.service';
import {
  IonContent,
  IonRouterOutlet,
  LoadingController,
  MenuController,
  ModalController,
  Platform
} from '@ionic/angular';
import{Exercise} from '../../Interfaces/exercise';
import {DatabaseService} from '../../services/database.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';
import {ExerciseDetailPage} from './exercise-detail/exercise-detail.page';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
})

export class ExercisePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;

  @Input() trainingPlan;
  @Input() addToPlan = false;

  backToTop = false;

  exercises = [];

  searchTypes = SearchTypesToString;
  muscles = MusclesToString;
  bodyparts = BodyPartsToString;
  equipment = EquipmentToString;
  enumSearchTypeKeys = [];
  enumMuscleKeys = [];
  enumBodyPartKeys = [];
  enumEquipmentKeys = [];
  enumMuscleValues = [];
  enumBodyPartValues = [];
  enumEquipmentValues = [];


  searchTypeSelected = null;
  targetSelected = null;
  exerciseID = null;

  // wird fuer Infinite Scroll verwendet
  slice = 10;

  constructor(private exerciseDBService: ExerciseDBService,
              private loadingCtr: LoadingController,
              private database: DatabaseService,
              private route: ActivatedRoute,
              private router: Router,
              private ionRouterOutlet: IonRouterOutlet,
              private menu: MenuController,
              private platform: Platform,
              private modalCtrl: ModalController) {
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
    this.enumMuscleValues = Object.values(Muscles);
    this.enumBodyPartValues = Object.values(BodyParts);
    this.enumEquipmentValues = Object.values(Equipment);
    this.searchTypeSelected = this.enumSearchTypeKeys[0];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlan = this.router.getCurrentNavigation().extras.state.trainingPlan;
          console.log(this.trainingPlan);
        }
      }
    });
  }

  ngOnInit() {
    if (this.ionRouterOutlet.canGoBack()) {
      this.menu.enable(false);
    }
  }

  ionViewDidLeave(){
    this.menu.enable(true);
  }

  steel() {
    this.exerciseDBService.getAll().subscribe(res => {
      res.forEach(elem => {
        const data: Exercise = {
          bodypart: elem.bodyPart,
          equipment: elem.equipment,
          gifUrl: elem.gifUrl,
          name: elem.name,
          target: elem.target,
          numericId: elem.id
        };
        this.database.addExercise(data);
      });
    });
  }

  async loadData() {
    console.log('LoadData gestartet');
    console.log(this.searchTypeSelected);
    console.log(this.targetSelected);
    const loading = await this.loadingCtr.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    if (this.searchTypeSelected === this.enumSearchTypeKeys[3]) { // with ID
      console.log(this.exerciseID.length);
      if (this.exerciseID.length === 4) {
        this.database.getExerciseByNumericId(this.exerciseID).subscribe(result => {
          console.log(result);
          this.exercises = result;
        });
      } else {
        console.log(this.exerciseID);
        this.database.getExerciseById(this.exerciseID).subscribe(result => {
          console.log(result);
          this.exercises = [];
          this.exercises.push(result);
        });
      }
    } else if (this.searchTypeSelected === this.enumSearchTypeKeys[0]) { // All Exercises
      this.database.getAllExercises().subscribe(result => {
        console.log(result);
        this.exercises = result;
      });
    } else { // with Target
      this.database.getExercisesBySearch(this.searchTypeSelected, this.targetSelected).subscribe(result => {
        console.log(result);
        this.exercises = result;
      });
    }
    await loading.dismiss();
  }

  doInfinite(infiniteScroll) {
    setTimeout(() => {
      console.log('Slice: ' + this.slice);
      this.slice += 10;
      infiniteScroll.target.complete();
    }, 200);
  }

  scrollToTop() {
    this.content.scrollToTop(400);
    console.log('Go to Top');
  }

  getScrollPos(scrollTop: number) {
    if(scrollTop > this.platform.height()) {
      this.backToTop = true;
    } else {
      this.backToTop = false;
    }
  }

  async openDetails() {
    const modal = await this.modalCtrl.create({
      component: ExerciseDetailPage,
      componentProps: {id: 1231, trainingPlan: this.trainingPlan, addToPlan: this.addToPlan},
      breakpoints: [0, 0.5 ,0.8, 1],
      initialBreakpoint: 0.5
    });
    modal.present();
  }
}
