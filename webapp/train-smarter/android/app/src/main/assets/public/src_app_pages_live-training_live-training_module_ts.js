"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_live-training_live-training_module_ts"],{

/***/ 3481:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-logging/live-training-logging.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingLoggingPage": () => (/* binding */ LiveTrainingLoggingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _live_training_logging_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training-logging.page.html?ngResource */ 5225);
/* harmony import */ var _live_training_logging_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-training-logging.page.scss?ngResource */ 6133);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/localstorage.service */ 7675);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/database.service */ 4382);






let LiveTrainingLoggingPage = class LiveTrainingLoggingPage {
    constructor(locaStorageServ, dataService) {
        this.locaStorageServ = locaStorageServ;
        this.dataService = dataService;
        this.setLog = [];
    }
    ngOnInit() {
        if (this.trainingPlanId) {
            const exercises = JSON.parse(this.locaStorageServ.getData('live-training-exercises'));
            console.log(exercises);
            exercises.forEach(item => {
                if (item.exerciseId === this.exerciseId) {
                    this.exercise = item;
                    this.dataService.getExerciseByNumericId(this.exercise.exerciseId).subscribe(res => {
                        this.gifUrl = res[0].gifUrl;
                    });
                }
            });
            this.setLog = JSON.parse(this.locaStorageServ.getData('set-log-data-' + this.exerciseId));
            if (!this.setLog) {
                this.setLog = [];
            }
        }
    }
    updateSetLogArray($event) {
        this.setLog = JSON.parse($event);
        this.locaStorageServ.saveData(`set-log-data-${this.exerciseId}`, JSON.stringify(this.setLog));
    }
};
LiveTrainingLoggingPage.ctorParameters = () => [
    { type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_2__.LocalstorageService },
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService }
];
LiveTrainingLoggingPage.propDecorators = {
    trainingPlanId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }],
    exerciseId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
LiveTrainingLoggingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-live-training-logging',
        template: _live_training_logging_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_live_training_logging_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveTrainingLoggingPage);



/***/ }),

/***/ 1649:
/*!*********************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingPageRoutingModule": () => (/* binding */ LiveTrainingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _live_training_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training.page */ 4839);




const routes = [
    {
        path: '',
        component: _live_training_page__WEBPACK_IMPORTED_MODULE_0__.LiveTrainingPage
    },
    {
        path: 'live-training-logging',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_live-training_live-training-logging_live-training-logging_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./live-training-logging/live-training-logging.module */ 875)).then(m => m.LiveTrainingLoggingPageModule)
    }
];
let LiveTrainingPageRoutingModule = class LiveTrainingPageRoutingModule {
};
LiveTrainingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LiveTrainingPageRoutingModule);



/***/ }),

/***/ 1879:
/*!*************************************************************!*\
  !*** ./src/app/pages/live-training/live-training.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingPageModule": () => (/* binding */ LiveTrainingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _live_training_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training-routing.module */ 1649);
/* harmony import */ var _live_training_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-training.page */ 4839);







let LiveTrainingPageModule = class LiveTrainingPageModule {
};
LiveTrainingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _live_training_routing_module__WEBPACK_IMPORTED_MODULE_0__.LiveTrainingPageRoutingModule
        ],
        declarations: [_live_training_page__WEBPACK_IMPORTED_MODULE_1__.LiveTrainingPage]
    })
], LiveTrainingPageModule);



/***/ }),

/***/ 4839:
/*!***********************************************************!*\
  !*** ./src/app/pages/live-training/live-training.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingPage": () => (/* binding */ LiveTrainingPage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _live_training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-training.page.html?ngResource */ 92);
/* harmony import */ var _live_training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./live-training.page.scss?ngResource */ 1831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/localstorage.service */ 7675);
/* harmony import */ var _live_training_logging_live_training_logging_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./live-training-logging/live-training-logging.page */ 3481);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/locales/de */ 8855);
/* harmony import */ var _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/extra/de */ 7470);













(0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.registerLocaleData)(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_7__["default"], 'de-DE', _angular_common_locales_extra_de__WEBPACK_IMPORTED_MODULE_8__["default"]);
let LiveTrainingPage = class LiveTrainingPage {
  constructor(loadingCtr, dataService, router, localStorageCtrl, modalCtrl) {
    this.loadingCtr = loadingCtr;
    this.dataService = dataService;
    this.router = router;
    this.localStorageCtrl = localStorageCtrl;
    this.modalCtrl = modalCtrl; // Zeigt, ob die Übung schon erledigt ist

    this.exercisesState = [];
  }

  ngOnInit() {
    this.trainingPlanId = this.localStorageCtrl.getData('live-training-trainingPlanId');
    this.exercisesState = JSON.parse(this.localStorageCtrl.getData('training-exercise-state'));

    if (!this.exercisesState) {
      this.exercisesState = [];
    }

    if (this.trainingPlanId) {
      //this.exercises = JSON.parse(this.localStorageCtrl.getData('live-training-trainingPlanId'));
      console.log(this.exercises);

      if (this.exercises === 'undefined' || !this.exercises) {
        this.getExercises();
      }
    } else {
      this.getTrainingPlans();
    }

    console.log(this.exercises);
  }

  getExercises() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtr.create({
        message: 'Loading..',
        spinner: 'bubbles'
      });
      yield loading.present();

      _this.dataService.getTrainingsPlanById(_this.trainingPlanId).subscribe(res => {
        _this.trainingPlan = res;
        _this.exercises = res.exercises;
        console.log(_this.trainingPlan);

        _this.localStorageCtrl.saveData('live-training-exercises', JSON.stringify(_this.exercises));

        if (_this.exercisesState.length === 0) {
          for (const exercise of _this.exercises) {
            _this.exercisesState.push(false);
          }
        }

        console.log(_this.exercisesState);
      });

      yield loading.dismiss();
    })();
  }

  logTraining(_exerciseId) {
    var _this2 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this2.modalCtrl.create({
        component: _live_training_logging_live_training_logging_page__WEBPACK_IMPORTED_MODULE_5__.LiveTrainingLoggingPage,
        componentProps: {
          trainingPlanId: _this2.trainingPlanId,
          exerciseId: _exerciseId
        },
        breakpoints: [0, 0.8, 1],
        initialBreakpoint: 0.8
      });
      modal.present();
    })();
  }

  getTrainingPlans() {
    var _this3 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this3.loadingCtr.create({
        message: 'Loading..',
        spinner: 'bubbles'
      });
      yield loading.present();

      _this3.dataService.getUserTrainingsPlan().subscribe(res => {
        _this3.trainingPlanList = res;
      });

      yield loading.dismiss();
    })();
  }

  startLiveTraining(trainingPlanId) {
    this.trainingPlanId = trainingPlanId;
    this.localStorageCtrl.saveData('live-training-trainingPlanId', trainingPlanId);
    this.getExercises();
  }

  setChecked(i, exerciseId) {
    this.exercisesState[i] = !this.exercisesState[i];
    this.commitSetLog(exerciseId);
  }

  commitSetLog(_exerciseId) {
    var _this4 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(_this4.trainingPlan);
      const set = {
        date: new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('de-DE').transform(new Date(), 'dd.MM.yyyy'),
        time: new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('de-DE').transform(new Date(), 'HH:mm'),
        excerciseId: _exerciseId,
        sets: JSON.parse(_this4.localStorageCtrl.getData('set-log-data-' + _exerciseId)),
        trainingPlanId: _this4.trainingPlanId,
        uid: _this4.trainingPlan.uid
      };
      yield _this4.dataService.addSetLogging(set);

      _this4.localStorageCtrl.removeData('set-log-data-' + _exerciseId);

      _this4.localStorageCtrl.saveData('training-exercise-state', JSON.stringify(_this4.exercisesState));
    })();
  }

  finishTraining() {
    this.localStorageCtrl.clearData();
    this.router.navigateByUrl('home', {
      replaceUrl: true
    });
  }

};

LiveTrainingPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}, {
  type: _services_localstorage_service__WEBPACK_IMPORTED_MODULE_4__.LocalstorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController
}];

LiveTrainingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-live-training',
  template: _live_training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_live_training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LiveTrainingPage);


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
    getUserDataByUid(uid) {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        const userQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(userRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', uid));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(userQuery, { idField: 'userId' });
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
    getAllSetLoggingByUid() {
        const setLoggingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'setLogging');
        const setLogginQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(setLoggingRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', this.authService.getUserId()));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(setLogginQuery, { idField: 'setLoggingId' });
    }
    addSetLogging(setLogging) {
        const setLoggingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'setLogging');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(setLoggingRef, setLogging);
    }
    updateSetLogging(setLogging) {
        const setLoggingDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `setLogging/${setLogging.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(setLoggingDocRef, {
            exerciseId: setLogging.excerciseId, trainingPlanId: setLogging.trainingPlanId,
            userId: setLogging.uid, date: setLogging.date, time: setLogging.time, sets: setLogging.sets,
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

/***/ 7675:
/*!**************************************************!*\
  !*** ./src/app/services/localstorage.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstorageService": () => (/* binding */ LocalstorageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let LocalstorageService = class LocalstorageService {
    constructor() { }
    saveData(key, value) {
        localStorage.setItem(key, value);
    }
    getData(key) {
        return localStorage.getItem(key);
    }
    removeData(key) {
        localStorage.removeItem(key);
    }
    clearData() {
        localStorage.clear();
    }
};
LocalstorageService.ctorParameters = () => [];
LocalstorageService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], LocalstorageService);



/***/ }),

/***/ 6133:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-logging/live-training-logging.page.scss?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = ".toolbar {\n  padding-top: 0 !important;\n}\n\n.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtdHJhaW5pbmctbG9nZ2luZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQUNGIiwiZmlsZSI6ImxpdmUtdHJhaW5pbmctbG9nZ2luZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 1831:
/*!************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "ion-fab ion-text {\n  padding-right: 10px;\n}\n\nion-col {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.toolbar {\n  padding-top: 0 !important;\n}\n\n.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtdHJhaW5pbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUJBQUE7QUFBSjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7QUFERjs7QUFJQTtFQUNFLGtDQUFBO0VBQ0Esb0NBQUE7QUFERiIsImZpbGUiOiJsaXZlLXRyYWluaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1mYWJ7XG4gIGlvbi10ZXh0e1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIH1cbn1cblxuaW9uLWNvbCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRvb2xiYXJ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4vLyBIZWFkZXIgZHVyY2hzaWNodGlnXG4udHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4iXX0= */";

/***/ }),

/***/ 5225:
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-logging/live-training-logging.page.html?ngResource ***!
  \******************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar class=\"toolbar transparent\">\n    <ion-title>live-training-logging</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar transparent\">\n      <ion-title size=\"large\">live-training-logging</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div *ngIf=\"this.exercise\">\n    <ion-header>{{this.exercise.name}}</ion-header>\n    <div>\n      <img src=\"{{gifUrl}}\"/>\n    </div>\n    <app-set-card (newSetArray)=\"updateSetLogArray($event)\" [setArray]=\"setLog\" *ngIf=\"this.exercise\"></app-set-card>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 92:
/*!************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar class=\"toolbar transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>LiveTraining</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar transparent\">\n      <ion-title size=\"large\">LiveTraining</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div *ngIf=\"trainingPlanList && !trainingPlanId\">\n    <ion-text>Wähle einen Trainingsplan:</ion-text>\n    <ion-list>\n      <ion-item Button=\"\" (click)=\"startLiveTraining(plan.trainingPlanId)\" *ngFor=\"let plan of this.trainingPlanList\">\n        <ion-text>{{plan.name}}</ion-text>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf=\"trainingPlanId && exercises\">\n    <ion-list>\n      <ion-item>\n        <ion-col>Todo</ion-col>\n        <ion-col>Done</ion-col>\n      </ion-item>\n      <ion-item *ngFor=\"let todo of exercises; let i=index\" button=\"\">\n        <ion-col (click)=\"this.logTraining(todo.exerciseId)\">{{todo.name}}</ion-col>\n        <ion-col>\n          <ion-button shape=\"round\" fill=\"clear\" [class.button-disabled]=\"exercisesState[i]\" (click)=\"setChecked(i, todo.exerciseId)\">\n            <ion-icon size=\"large\"\n                      [attr.color]=\" exercisesState[i] ? 'success' : 'danger'\"\n                       name=\"checkmark-done-circle\"></ion-icon>\n        </ion-button>\n        </ion-col>\n      </ion-item>\n    </ion-list>\n\n\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n      <!--<ion-grid>\n        <ion-row>\n          <ion-button class=\" ion-align-self-center ion-text-right\"><ion-text>Training beenden</ion-text></ion-button>\n          <ion-col size=\"3\"><ion-fab-button size=\"small\" (click)=\"this.finishTraining()\"><ion-icon name=\"cloud-done\"></ion-icon></ion-fab-button></ion-col>\n        </ion-row>\n      </ion-grid>-->\n      <ion-button color=\"success\" (click)=\"this.finishTraining()\"><ion-text>beenden</ion-text><ion-icon name=\"cloud-done\"></ion-icon></ion-button>\n    </ion-fab>\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8855:
/*!*****************************************************!*\
  !*** ./node_modules/@angular/common/locales/de.mjs ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(val) {
  const n = val,
        i = Math.floor(Math.abs(val)),
        v = val.toString().replace(/^[^.]*\.?/, '').length;
  if (i === 1 && v === 0) return 1;
  return 5;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (["de", [["AM", "PM"], u, u], u, [["S", "M", "D", "M", "D", "F", "S"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."], ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]], [["S", "M", "D", "M", "D", "F", "S"], ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"], ["So.", "Mo.", "Di.", "Mi.", "Do.", "Fr.", "Sa."]], [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan.", "Feb.", "März", "Apr.", "Mai", "Juni", "Juli", "Aug.", "Sept.", "Okt.", "Nov.", "Dez."], ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]], [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]], [["v. Chr.", "n. Chr."], u, u], 1, [6, 0], ["dd.MM.yy", "dd.MM.y", "d. MMMM y", "EEEE, d. MMMM y"], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1}, {0}", u, "{1} 'um' {0}", u], [",", ".", ";", "%", "+", "-", "E", "·", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "EUR", "€", "Euro", {
  "ATS": ["öS"],
  "AUD": ["AU$", "$"],
  "BGM": ["BGK"],
  "BGO": ["BGJ"],
  "BYN": [u, "р."],
  "CUC": [u, "Cub$"],
  "DEM": ["DM"],
  "FKP": [u, "Fl£"],
  "GHS": [u, "₵"],
  "GNF": [u, "F.G."],
  "KMF": [u, "FC"],
  "PHP": [u, "₱"],
  "RON": [u, "L"],
  "RUR": [u, "р."],
  "RWF": [u, "F.Rw"],
  "SYP": [],
  "THB": ["฿"],
  "TWD": ["NT$"],
  "XXX": [],
  "ZMW": [u, "K"]
}, "ltr", plural]);

/***/ }),

/***/ 7470:
/*!***********************************************************!*\
  !*** ./node_modules/@angular/common/locales/extra/de.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([[["Mitternacht", "morgens", "vorm.", "mittags", "nachm.", "abends", "nachts"], u, ["Mitternacht", "morgens", "vormittags", "mittags", "nachmittags", "abends", "nachts"]], [["Mitternacht", "Morgen", "Vorm.", "Mittag", "Nachm.", "Abend", "Nacht"], u, ["Mitternacht", "Morgen", "Vormittag", "Mittag", "Nachmittag", "Abend", "Nacht"]], ["00:00", ["05:00", "10:00"], ["10:00", "12:00"], ["12:00", "13:00"], ["13:00", "18:00"], ["18:00", "24:00"], ["00:00", "05:00"]]]);

/***/ })

}]);
//# sourceMappingURL=src_app_pages_live-training_live-training_module_ts.js.map