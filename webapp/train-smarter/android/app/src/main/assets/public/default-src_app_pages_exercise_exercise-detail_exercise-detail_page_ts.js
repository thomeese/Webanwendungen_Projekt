"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"],{

/***/ 148:
/*!************************************************************************!*\
  !*** ./src/app/pages/exercise/exercise-detail/exercise-detail.page.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseDetailPage": () => (/* binding */ ExerciseDetailPage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _exercise_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-detail.page.html?ngResource */ 2670);
/* harmony import */ var _exercise_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-detail.page.scss?ngResource */ 1927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/exercise-db.service */ 3597);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);











let ExerciseDetailPage = class ExerciseDetailPage {
  constructor(exerciseDBService, loadingController, location, database, route, router, nav, formbuilder, modalController) {
    this.exerciseDBService = exerciseDBService;
    this.loadingController = loadingController;
    this.location = location;
    this.database = database;
    this.route = route;
    this.router = router;
    this.nav = nav;
    this.formbuilder = formbuilder;
    this.modalController = modalController;
    this.edit = false;
    this.setArray = [];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        console.log('Navigation on');
        console.log(this.router.getCurrentNavigation());

        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
        }
      }
    });
  }

  ngOnInit() {
    console.log(this.edit);
    console.log(this.setArray);
    console.log(this.id);
    console.log(this.trainingPlanId);

    try {
      if (this.id === 'undefined' || this.id === null) {
        this.id = this.route.snapshot.paramMap.get('id'); //exerciseId setzten
      } //Falls ein Trainingsplan uebergeben wurde, diesen holen


      if (this.trainingPlanId) {
        this.database.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
          this.trainingPlan = res;
          console.log(this.trainingPlan);
        });
      }

      this.getExercise();
    } catch (error) {
      console.log(error);
    }
  }

  updateExerciseinTrainingPlan() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const array = _this.trainingPlan.exercises;
      array.forEach(item => {
        //Exercise im Array finden
        if (item.exerciseId === _this.exercise.exerciseId) {
          //Bearbeitete Sets setzen
          item.sets = _this.setArray;
        }
      }); //Attribute im Plan setzten

      const updatePlan = {
        id: _this.trainingPlan.trainingPlanId,
        name: _this.trainingPlan.name,
        description: _this.trainingPlan.description,
        period: _this.trainingPlan.period,
        uid: _this.trainingPlan.uid,
        exercises: array
      }; //Plan in der Datenbank updaten

      yield _this.database.updateTrainingPlan(updatePlan); //Modal schliessen

      yield _this.modalController.dismiss();
    })();
  }

  addToTrainingPlan() {
    var _this2 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Vorher');
      let array;
      array = _this2.trainingPlan.exercises;

      if (!array) {
        array = [];
      } //Exercise dem Exercise-Array hinzufuegen


      array.push({
        exerciseId: _this2.id,
        name: _this2.exercise.name,
        sets: _this2.setArray
      }); //Attribute im Plan setzten

      const updatePlan = {
        id: _this2.trainingPlan.trainingPlanId,
        name: _this2.trainingPlan.name,
        description: _this2.trainingPlan.description,
        period: _this2.trainingPlan.period,
        uid: _this2.trainingPlan.uid,
        exercises: array
      }; //Plan in der Datenbank updaten

      yield _this2.database.updateTrainingPlan(updatePlan); //Modal schliessen

      yield _this2.modalController.dismiss();
    })();
  }

  getExercise() {
    var _this3 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //exercise-Daten laden
      yield _this3.database.getExerciseByNumericId(_this3.id).subscribe(result => {
        _this3.exercise = result[0];
        console.log(_this3.exercise);
      });
    })();
  }

  updateSetArray(newSetArray) {
    //Formdaten setzen
    this.setArray = JSON.parse(newSetArray);
  }

  saveChanges() {
    var _this4 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Vorher');

      for (const selectedExercise of _this4.trainingPlan.exercises) {
        if (selectedExercise.exerciseId === _this4.exercise.numericId) {
          selectedExercise.sets = _this4.setArray;
        }
      }

      yield _this4.database.updateTrainingPlan(_this4.trainingPlan); //Modal schliessen

      yield _this4.modalController.dismiss();
    })();
  }

  loadSets() {
    console.log("Exercise");
    console.log(this.exercise);
    this.setArray = this.exercise.sets;
    console.log(this.setArray);
  }

};

ExerciseDetailPage.ctorParameters = () => [{
  type: _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.ExerciseDBService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

ExerciseDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-exercise-detail',
  template: _exercise_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exercise_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}) //getExercise momentan nicht eingebunden
], ExerciseDetailPage);


/***/ }),

/***/ 3597:
/*!*************************************************!*\
  !*** ./src/app/services/exercise-db.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BodyParts": () => (/* binding */ BodyParts),
/* harmony export */   "BodyPartsToString": () => (/* binding */ BodyPartsToString),
/* harmony export */   "Equipment": () => (/* binding */ Equipment),
/* harmony export */   "EquipmentToString": () => (/* binding */ EquipmentToString),
/* harmony export */   "ExerciseDBService": () => (/* binding */ ExerciseDBService),
/* harmony export */   "Muscles": () => (/* binding */ Muscles),
/* harmony export */   "MusclesToString": () => (/* binding */ MusclesToString),
/* harmony export */   "SearchTypes": () => (/* binding */ SearchTypes),
/* harmony export */   "SearchTypesToString": () => (/* binding */ SearchTypesToString)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 3819);




//Exercise Enum
var SearchTypesToString;
(function (SearchTypesToString) {
    SearchTypesToString["exercisesList"] = "Alle Uebungen";
    SearchTypesToString["bodyPart"] = "Nach K\u00F6rperteil";
    SearchTypesToString["targetMuscle"] = "Nach Muskelgruppe";
    SearchTypesToString["exerciseByID"] = "Nach \u00DCbungsID";
    SearchTypesToString["equipment"] = "Nach Equipment";
})(SearchTypesToString || (SearchTypesToString = {}));
var SearchTypes;
(function (SearchTypes) {
    SearchTypes["exercise"] = "/exercise";
    SearchTypes["exercisesList"] = "";
    SearchTypes["bodyPart"] = "/bodyPart";
    SearchTypes["bodyPartList"] = "/bodyPartList";
    SearchTypes["exerciseByID"] = "/exercise";
    SearchTypes["targetMuscle"] = "/target";
    SearchTypes["targetMuscleList"] = "/targetList";
    SearchTypes["equipment"] = "/equipment";
    SearchTypes["equipmentList"] = "/equipmentList";
})(SearchTypes || (SearchTypes = {}));
var MusclesToString;
(function (MusclesToString) {
    MusclesToString["abductors"] = "Abduktoren";
    MusclesToString["abs"] = "Bauchmuskeln";
    MusclesToString["adductors"] = "Adduktoren";
    MusclesToString["biceps"] = "Biceps";
    MusclesToString["calves"] = "Waden";
    MusclesToString["cardiovascularSystem"] = "Blutkreislauf";
    MusclesToString["delts"] = "Deltas";
    MusclesToString["forearms"] = "Unterarm";
    MusclesToString["glutes"] = "Gluteus";
    MusclesToString["hamstrings"] = "Oberschenkelmuskulatur";
    MusclesToString["lats"] = "Latissimus";
    MusclesToString["levatorScapulae"] = "Schulterbl\u00E4tter";
    MusclesToString["pectorals"] = "Brustmuskeln";
    MusclesToString["quads"] = "Quads";
    MusclesToString["serratusAnterior"] = "vorderer S\u00E4gemuskel";
    MusclesToString["spine"] = "Wirbels\u00E4ule";
    MusclesToString["traps"] = "Trapezmuskel";
    MusclesToString["triceps"] = "Triceps";
    MusclesToString["upperBack"] = "Oberer R\u00FCcken";
})(MusclesToString || (MusclesToString = {}));
var Muscles;
(function (Muscles) {
    Muscles["abductors"] = "abductors";
    Muscles["abs"] = "abs";
    Muscles["adductors"] = "adductors";
    Muscles["biceps"] = "biceps";
    Muscles["calves"] = "calves";
    Muscles["cardiovascularSystem"] = "cardiovascular system";
    Muscles["delts"] = "delts";
    Muscles["forearms"] = "forearms";
    Muscles["glutes"] = "glutes";
    Muscles["hamstrings"] = "hamstrings";
    Muscles["lats"] = "lats";
    Muscles["levatorScapulae"] = "levator scapulae";
    Muscles["pectorals"] = "pectorals";
    Muscles["quads"] = "quads";
    Muscles["serratusAnterior"] = "serratus anterior";
    Muscles["spine"] = "spine";
    Muscles["traps"] = "traps";
    Muscles["triceps"] = "triceps";
    Muscles["upperBack"] = "upper back";
})(Muscles || (Muscles = {}));
var BodyPartsToString;
(function (BodyPartsToString) {
    BodyPartsToString["back"] = "R\u00FCcken";
    BodyPartsToString["cardio"] = "Cardio";
    BodyPartsToString["chest"] = "Brust";
    BodyPartsToString["lowerArms"] = "Unterarm";
    BodyPartsToString["lowerLegs"] = "Untere Beine";
    BodyPartsToString["neck"] = "Nacken";
    BodyPartsToString["shoulders"] = "Schultern";
    BodyPartsToString["upperArms"] = "Obere Arme";
    BodyPartsToString["upperLegs"] = "Oberer Beine";
    BodyPartsToString["waist"] = "Taille";
})(BodyPartsToString || (BodyPartsToString = {}));
var BodyParts;
(function (BodyParts) {
    BodyParts["back"] = "back";
    BodyParts["cardio"] = "cardio";
    BodyParts["chest"] = "chest";
    BodyParts["lowerArms"] = "lower arms";
    BodyParts["lowerLegs"] = "lower legs";
    BodyParts["neck"] = "neck";
    BodyParts["shoulders"] = "shoulders";
    BodyParts["upperArms"] = "upper arms";
    BodyParts["upperLegs"] = "upper legs";
    BodyParts["waist"] = "waist";
})(BodyParts || (BodyParts = {}));
var EquipmentToString;
(function (EquipmentToString) {
    EquipmentToString["assisted"] = "unterst\u00FCtzt";
    EquipmentToString["band"] = "Band";
    EquipmentToString["barbell"] = "Langhantel";
    EquipmentToString["bodyWeight"] = "body weight";
    EquipmentToString["bosuBall"] = "BosuBall";
    EquipmentToString["cable"] = "Kabel";
    EquipmentToString["dumbbell"] = "Kurzhantel";
    EquipmentToString["ellipticalMachine"] = "elliptische Maschine";
    EquipmentToString["ezBarbel"] = "EZ Hantel";
    EquipmentToString["hammer"] = "Hammer";
    EquipmentToString["kettlebell"] = "Kettlebell";
    EquipmentToString["leverageMachine"] = "Hebelmaschine";
    EquipmentToString["medicineBall"] = "Medizinball";
    EquipmentToString["olympicBarbel"] = "olympische Langhantel";
    EquipmentToString["resistanceBand"] = "Widerstandsband";
    EquipmentToString["roller"] = "Rolle";
    EquipmentToString["rope"] = "Seil";
    EquipmentToString["skiergMachine"] = "SkiErg Maschine";
    EquipmentToString["sledMachine"] = "Sled Maschine";
    EquipmentToString["smithMachine"] = "Multipresse";
    EquipmentToString["stabilityBall"] = "Stabilit\u00E4tsball";
    EquipmentToString["stationaryBike"] = "Fahrrad";
    EquipmentToString["stepmillMachine"] = "Stepmill Maschine";
    EquipmentToString["tire"] = "Reifen";
    EquipmentToString["trapBar"] = "Trap Bar";
    EquipmentToString["upperBodyEergometer"] = "Oberk\u00F6rper-Ergometer";
    EquipmentToString["weighted"] = "gewichtet";
    EquipmentToString["wheelRoller"] = "AB Roller";
})(EquipmentToString || (EquipmentToString = {}));
var Equipment;
(function (Equipment) {
    Equipment["assisted"] = "assisted";
    Equipment["band"] = "band";
    Equipment["barbell"] = "barbell";
    Equipment["bodyWeight"] = "body weight";
    Equipment["bosuBall"] = "bosu ball";
    Equipment["cable"] = "cable";
    Equipment["dumbbell"] = "dumbbell";
    Equipment["ellipticalMachine"] = "elliptical machine";
    Equipment["ezBarbel"] = "ez barbell";
    Equipment["hammer"] = "hammer";
    Equipment["kettlebell"] = "kettlebell";
    Equipment["leverageMachine"] = "leverage machine";
    Equipment["medicineBall"] = "medicine ball";
    Equipment["olympicBarbel"] = "olympic barbell";
    Equipment["resistanceBand"] = "resistance band";
    Equipment["roller"] = "roller";
    Equipment["rope"] = "rope";
    Equipment["skiergMachine"] = "skierg machine";
    Equipment["sledMachine"] = "sled machine";
    Equipment["smithMachine"] = "smith machine";
    Equipment["stabilityBall"] = "stability ball";
    Equipment["stationaryBike"] = "stationary bike";
    Equipment["stepmillMachine"] = "stepmill machine";
    Equipment["tire"] = "tire";
    Equipment["trapBar"] = "trap bar";
    Equipment["upperBodyEergometer"] = "upper body ergometer";
    Equipment["weighted"] = "weighted";
    Equipment["wheelRoller"] = "wheel roller";
})(Equipment || (Equipment = {}));
let ExerciseDBService = class ExerciseDBService {
    constructor(http, loadingCtr) {
        this.http = http;
        this.loadingCtr = loadingCtr;
        this.url = 'https://exercisedb.p.rapidapi.com/exercises';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
            'x-rapidapi-key': 'faa32cc9f5msh7a6aced2f4a8cbcp110446jsn70a489d7ecbd',
            'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        });
    }
    getData(type, target) {
        if (typeof target === 'undefined') {
            return this.http.get(`${this.url}${SearchTypes[type]}`, { headers: this.headers });
        }
        return this.http.get(`${this.url}${SearchTypes[type]}/${target}`, { headers: this.headers });
    }
    getExerciseByID(id) {
        return this.http.get(`${this.url}/exercise/${id}`, { headers: this.headers });
    }
};
ExerciseDBService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.LoadingController }
];
ExerciseDBService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ExerciseDBService);



/***/ }),

/***/ 1927:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/exercise/exercise-detail/exercise-detail.page.scss?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = ".toolbar {\n  padding-top: 0 !important;\n}\n\nion-title {\n  padding-left: 0;\n  color: #0d0d0d;\n  font-size: 20px;\n}\n\nion-content ion-title {\n  padding-right: 0;\n}\n\nion-text {\n  color: #0d0d0d;\n  word-wrap: break-word;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.label {\n  padding-right: 5px;\n}\n\n.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0U7RUFDRSxnQkFBQTtBQUFKOztBQUtBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQU1BO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQUhGIiwiZmlsZSI6ImV4ZXJjaXNlLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZXtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuXG59XG5cbmlvbi10ZXh0IHtcbiAgY29sb3I6ICMwZDBkMGQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmxhYmVsIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4vLyBIZWFkZXIgZHVyY2hzaWNodGlnXG4udHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 2670:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/exercise/exercise-detail/exercise-detail.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar class=\"toolbar transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div *ngIf=\"exercise\" class=\"ion-text-wrap ion-text-center\">{{exercise.name}}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar transparent\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <ion-title>\n        <div *ngIf=\"exercise\" class=\"ion-text-wrap ion-text-center\">{{exercise.name}}</div>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-card>\n    <ion-card-content>\n      <ion-title>\n        <div *ngIf=\"exercise\" class=\"ion-text-wrap ion-text-center\">{{exercise.name}}</div>\n      </ion-title>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"exercise\">\n    <img src=\"{{exercise.gifUrl}}\"/>\n    <ion-card>\n      <ion-card-content>\n        <ion-text class=\"label\">Muskelgruppe:</ion-text>\n        <ion-text>{{exercise.target}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-text class=\"label\">Benötigtes Equipment:</ion-text>\n        <ion-text>{{exercise.equipment}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <app-set-card (newSetArray)=\"updateSetArray($event)\" [setArray]=\"setArray\" *ngIf=\"this.trainingPlan\"></app-set-card>\n\n    <ion-button *ngIf=\"this.trainingPlan && !this.edit\" [disabled]=\"this.setArray.length === 0\"\n                (click)=\"addToTrainingPlan()\">Zum Trainingsplan hinzufügen\n    </ion-button>\n    <ion-button *ngIf=\"this.trainingPlan && this.edit\" [disabled]=\"this.setArray.length === 0\"\n                (click)=\"saveChanges()\">Änderungen speichern\n    </ion-button>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts.js.map
