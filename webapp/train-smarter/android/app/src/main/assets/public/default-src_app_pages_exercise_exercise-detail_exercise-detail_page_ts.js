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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _exercise_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-detail.page.html?ngResource */ 2670);
/* harmony import */ var _exercise_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-detail.page.scss?ngResource */ 1927);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/exercise-db.service */ 3597);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);











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
    this.setArray = [];
    this.displayForm = true;
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

  newSet() {
    this.displayForm = true;
  }

  addSet() {
    const data = this.setForm.getRawValue();
    this.setArray.push({
      setnumber: data.setnumber,
      repetition: data.repetition,
      weight: data.weight
    });
    this.setForm = this.setForm = this.formbuilder.group({
      setnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(`${this.setArray.length + 1}`, []),
      repetition: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{2}')]),
      weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [])
    });
    this.displayForm = false;
  }

  ngOnInit() {
    try {
      this.setForm = this.formbuilder.group({
        setnumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(`${this.setArray.length + 1}`, []),
        repetition: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[0-9]{2}')]),
        weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [])
      });
      const idTmp = this.route.snapshot.paramMap.get('id');

      if (idTmp !== 'undefined' && idTmp !== null) {
        this.id = idTmp;
      }

      console.log('trainingsPlanId: ' + this.trainingPlanId);

      if (this.trainingPlanId) {
        this.database.getTrainingsPlanById(this.trainingPlanId).subscribe(res => {
          this.trainingPlan = res;
          console.log(this.trainingPlan);
        });
      }
    } catch (error) {
      console.log(error);
    }

    this.getExercise();
  }

  addToTrainingPlan() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('Vorher');
      let array;
      array = _this.trainingPlan.exercises;
      console.log(array);

      if (!array) {
        array = [];
      }

      console.log('Mitten drin');
      console.log(_this.id);
      array.push({
        exerciseId: _this.id,
        name: _this.exercise.name
      });
      const updatePlan = {
        id: _this.trainingPlan.trainingPlanId,
        name: _this.trainingPlan.name,
        description: _this.trainingPlan.description,
        period: _this.trainingPlan.period,
        uid: _this.trainingPlan.uid,
        exercises: array
      };
      yield _this.database.updateTrainingPlan(updatePlan);
      console.log('Button hinzufuegen zum Trainingsplan');

      _this.modalController.dismiss();
    })();
  }

  getExercise() {
    var _this2 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.database.getExerciseByNumericId(_this2.id).subscribe(result => {
        _this2.exercise = result[0];
        console.log(_this2.exercise);
      });
    })();
  }

};

ExerciseDetailPage.ctorParameters = () => [{
  type: _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.ExerciseDBService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

ExerciseDetailPage.propDecorators = {
  id: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input
  }]
};
ExerciseDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-exercise-detail',
  template: _exercise_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exercise_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
}) //getExercise momentan nicht eingebunden
], ExerciseDetailPage);


/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 7053);




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
let DatabaseService = class DatabaseService {
    constructor(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
    }
    getUserData() {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(userRef, { idField: 'userId' });
    }
    getUserDataById(id) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(userDocRef, { idField: 'userId' });
    }
    addUser(user) {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(userRef, user);
    }
    updateUser(user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${user.docId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(userDocRef, {
            firstname: user.firstname, surname: user.surname,
            birthdate: user.birthdate, size: user.size, email: user.email
        });
    }
    deleteUser(user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${user.docId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(userDocRef);
    }
    addTrainingPlan(plan) {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(trainingPlanRef, plan);
    }
    updateTrainingPlan(plan) {
        const trainingPlanDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${plan.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(trainingPlanDocRef, plan);
    }
    deleteTrainingPlan(plan) {
        const trainingPlanDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${plan.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(trainingPlanDocRef);
    }
    getTrainingsPlan() {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(trainingPlanRef, { idField: 'trainingPlanId' });
    }
    getTrainingsPlanById(id) {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(trainingPlanRef, { idField: 'trainingPlanId' });
    }
    getUserTrainingsPlan() {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        const trainQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(trainingPlanRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', this.authService.getUserId()));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(trainQuery, { idField: 'trainingPlanId' });
    }
    addExercise(exercise) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(exerciseRef, exercise);
    }
    getAllExercises() {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseRef, { idField: 'exerciseId' });
    }
    getExercisesBySearch(type, target) {
        console.log('Hello');
        console.log(type);
        console.log(SearchTypes.bodyPart);
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        if (type === 'exercisesList') {
            console.log(SearchTypes.exercisesList);
            return this.getAllExercises();
        }
        if (type === 'bodyPart') {
            console.log('bodypart');
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('bodypart', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
        if (type === 'targetMuscle') {
            console.log(SearchTypes.targetMuscle);
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('target', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
        if (type === 'equipment') {
            console.log(SearchTypes.equipment);
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('equipment', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
    }
    getExerciseById(id) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(exerciseRef, { idField: 'exerciseId' });
    }
    getExerciseByNumericId(id) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('numericId', '==', id));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
    }
    updateExercise(exercise) {
        const exerciseDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${exercise.exerciseId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(exerciseDocRef, {
            name: exercise.name, bodypart: exercise.bodypart,
            equipment: exercise.equipment, gifUrl: exercise.gifUrl, target: exercise.target
        });
    }
    deleteExercise(exercise) {
        const exerciseDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${exercise.exerciseId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(exerciseDocRef);
    }
    addSetLogging(setLogging) {
        const setLoggingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'setLogging');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(setLoggingRef, setLogging);
    }
    updateSetLogging(setLogging) {
        const setLoggingDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `setLogging/${setLogging.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(setLoggingDocRef, {
            exerciseId: setLogging.excercizeId, trainingPlanId: setLogging.trainingPlanId,
            userId: setLogging.userId, date: setLogging.date, set: setLogging.set,
            weight: setLogging.weight, repetiton: setLogging.repition
        });
    }
    deleteSetLogging(setLogging) {
        const setLoggingDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `setLogging/${setLogging.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(setLoggingDocRef);
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



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

module.exports = "ion-title {\n  padding-left: 0;\n  color: #0d0d0d;\n  font-size: 20px;\n}\n\nion-content ion-title {\n  padding-right: 0;\n}\n\nion-text {\n  color: #0d0d0d;\n  word-wrap: break-word;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n.label {\n  padding-right: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFDRjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBSUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0FBREYiLCJmaWxlIjoiZXhlcmNpc2UtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBjb2xvcjogIzBkMGQwZDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5pb24tY29udGVudCB7XG4gIGlvbi10aXRsZSB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuXG5pb24tdGV4dCB7XG4gIGNvbG9yOiAjMGQwZDBkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5sYWJlbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 2670:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/exercise/exercise-detail/exercise-detail.page.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      <div *ngIf=\"exercise\" class=\"ion-text-wrap ion-text-center\" >{{exercise.name}}</div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-title>\n        <div *ngIf=\"exercise\" class=\"ion-text-wrap ion-text-center\" >{{exercise.name}}</div>\n      </ion-title>\n    </ion-card-content>\n  </ion-card>\n  <div *ngIf=\"exercise\">\n    <img src=\"{{exercise.gifUrl}}\"/>\n    <ion-card>\n      <ion-card-content>\n        <ion-text class=\"label\">Muskelgruppe:</ion-text>\n        <ion-text>{{exercise.target}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n    <ion-card>\n      <ion-card-content>\n        <ion-text class=\"label\">Benötigtes Equipment:</ion-text>\n        <ion-text>{{exercise.equipment}}</ion-text>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-list *ngIf=\"this.trainingPlan && setArray.length !== 0\">\n      <ion-item>\n        <ion-col>Satz</ion-col>\n        <ion-col>Wiederhohlung</ion-col>\n        <ion-col>Gewicht (optional)</ion-col>\n      </ion-item>\n      <ion-item *ngFor=\"let set of this.setArray\">\n        <ion-col>{{set.setnumber}}</ion-col>\n        <ion-col>{{set.repetition}}</ion-col>\n        <ion-col>{{set.weight}}</ion-col>\n      </ion-item>\n      <ion-button (click)=\"this.newSet()\">\n        <ion-icon name=\"add-circle\"></ion-icon>\n      </ion-button>\n    </ion-list>\n    <form [formGroup]=\"this.setForm\" (submit)=\"this.addSet()\" *ngIf=\"this.trainingPlan && this.displayForm\">\n      <ion-item>\n        <ion-col>Satz</ion-col>\n        <ion-col>Wiederhohlung</ion-col>\n        <ion-col>Gewicht (optional)</ion-col>\n      </ion-item>\n      <ion-item>\n        <ion-col>\n          <ion-input type=\"text\" formControlName=\"setnumber\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input type=\"text\" formControlName=\"repetition\"></ion-input>\n        </ion-col>\n        <ion-col>\n          <ion-input type=\"text\" formControlName=\"weight\"></ion-input>\n        </ion-col>\n      </ion-item>\n      <ion-button type=\"submit\" [disabled]=\"setForm.invalid\">\n        <ion-icon name=\"checkmark-circle\"></ion-icon>\n      </ion-button>\n    </form>\n    <ion-button *ngIf=\"this.trainingPlan\" (click)=\"addToTrainingPlan()\">Zum Trainingsplan hinzufügen\n    </ion-button>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts.js.map