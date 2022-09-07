"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_training-plan_training-plan_module_ts"],{

/***/ 3305:
/*!*******************************************************************************!*\
  !*** ./src/app/components/training-plan-card/training-plan-card.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanCardComponent": () => (/* binding */ TrainingPlanCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_plan_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-card.component.html?ngResource */ 6164);
/* harmony import */ var _training_plan_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-card.component.scss?ngResource */ 8822);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let TrainingPlanCardComponent = class TrainingPlanCardComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
TrainingPlanCardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TrainingPlanCardComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    description: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }],
    showDescription: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
TrainingPlanCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-training-plan-card',
        template: _training_plan_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_plan_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingPlanCardComponent);



/***/ }),

/***/ 5142:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanDetailPage": () => (/* binding */ TrainingPlanDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_plan_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-detail.page.html?ngResource */ 9784);
/* harmony import */ var _training_plan_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-detail.page.scss?ngResource */ 6449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);






let TrainingPlanDetailPage = class TrainingPlanDetailPage {
    constructor(databaseService, route, router) {
        this.databaseService = databaseService;
        this.route = route;
        this.router = router;
        this.exercises = [];
    }
    ngOnInit() {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getPlan();
    }
    addExerciseView() {
        const navigationExtras = {
            state: {
                trainingPlanId: this.id
            }
        };
        this.router.navigate(['exercise'], navigationExtras);
    }
    getPlan() {
        this.databaseService.getTrainingsPlanById(this.id).subscribe(res => {
            this.name = res.name;
            this.description = res.description;
            this.period = res.period;
            this.exercises = res.exercises;
        });
    }
    showExerciseLogging() {
    }
};
TrainingPlanDetailPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
TrainingPlanDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-training-plan-detail',
        template: _training_plan_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_plan_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingPlanDetailPage);



/***/ }),

/***/ 9162:
/*!*********************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanPageRoutingModule": () => (/* binding */ TrainingPlanPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _training_plan_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan.page */ 1113);
/* harmony import */ var _training_plan_detail_training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-detail/training-plan-detail.page */ 5142);





const routes = [
    {
        path: '',
        component: _training_plan_page__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanPage
    },
    {
        path: ':id',
        component: _training_plan_detail_training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__.TrainingPlanDetailPage
    }
];
let TrainingPlanPageRoutingModule = class TrainingPlanPageRoutingModule {
};
TrainingPlanPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TrainingPlanPageRoutingModule);



/***/ }),

/***/ 2589:
/*!*************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanPageModule": () => (/* binding */ TrainingPlanPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _training_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-routing.module */ 9162);
/* harmony import */ var _training_plan_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan.page */ 1113);
/* harmony import */ var _components_training_plan_card_training_plan_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/training-plan-card/training-plan-card.component */ 3305);








let TrainingPlanPageModule = class TrainingPlanPageModule {
};
TrainingPlanPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _training_plan_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        exports: [
            _components_training_plan_card_training_plan_card_component__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanCardComponent
        ],
        declarations: [_training_plan_page__WEBPACK_IMPORTED_MODULE_1__.TrainingPlanPage, _components_training_plan_card_training_plan_card_component__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanCardComponent]
    })
], TrainingPlanPageModule);



/***/ }),

/***/ 1113:
/*!***********************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanPage": () => (/* binding */ TrainingPlanPage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan.page.html?ngResource */ 8311);
/* harmony import */ var _training_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training-plan.page.scss?ngResource */ 1817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);









let TrainingPlanPage = class TrainingPlanPage {
  constructor(dataServise, formbuilder, authService, loadingController) {
    this.dataServise = dataServise;
    this.formbuilder = formbuilder;
    this.authService = authService;
    this.loadingController = loadingController;
    this.trainingPlanList = [];
    this.weekdays = ['Jeden Tag', 'alle zwei Tage', 'alle drei Tage', 'alle vier Tage', 'alle fünf Tage', 'alle sechs Tage', 'Jede Woche', 'alle zwei Wochen', 'alle drei Wochen', 'Jeden Monat'];
  }

  ngOnInit() {
    this.trainingform = this.formbuilder.group({
      name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]),
      description: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(15)]),
      period: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('Auswahl', [])
    });
    this.dataServise.getUserTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });
    /*
    this.dataServise.getTrainingsPlan().subscribe(res => {
      this.trainingPlanList = res;
    });*/
  }

  addTrainingsPlan() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const formData = _this.trainingform.getRawValue();

      const plan = {
        uid: _this.authService.getUserId(),
        name: formData.name,
        description: formData.description,
        period: formData.period
      };
      const loading = yield _this.loadingController.create();
      yield loading.present();
      yield _this.dataServise.addTrainingPlan(plan);
      yield loading.dismiss();
    })();
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(null, 'confirm');
  }

  onWillDismiss(event) {
    const ev = event;
  }

};

TrainingPlanPage.ctorParameters = () => [{
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}];

TrainingPlanPage.propDecorators = {
  modal: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonModal]
  }]
};
TrainingPlanPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-training-plan',
  template: _training_plan_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_training_plan_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TrainingPlanPage);


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

/***/ 8822:
/*!********************************************************************************************!*\
  !*** ./src/app/components/training-plan-card/training-plan-card.component.scss?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLXBsYW4tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoidHJhaW5pbmctcGxhbi1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";

/***/ }),

/***/ 6449:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1wbGFuLWRldGFpbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1817:
/*!************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "app-training-plan-card {\n  width: 100%;\n  max-width: 350px;\n}\n\n/*\n.button-add{\n  z-index: 12;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  position: fixed;\n  bottom: 15px;\n  right: 15px;\n  border-radius: 50%;\n  ion-icon{\n    padding-right: 5px;\n  }\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLXBsYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InRyYWluaW5nLXBsYW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLXRyYWluaW5nLXBsYW4tY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDM1MHB4O1xufVxuXG4vKlxuLmJ1dHRvbi1hZGR7XG4gIHotaW5kZXg6IDEyO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgaW9uLWljb257XG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xuICB9XG59XG4qL1xuIl19 */";

/***/ }),

/***/ 6164:
/*!********************************************************************************************!*\
  !*** ./src/app/components/training-plan-card/training-plan-card.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card button routerDirection=\"forward\" [routerLink]=\"'/training-plan/' + this.id\" routerLinkActive=\"selected\">\n  <ion-card-header>\n    <ion-card-title>{{name}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content *ngIf=\"showDescription\">\n    {{description}}\n  </ion-card-content>\n</ion-card>\n";

/***/ }),

/***/ 9784:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title *ngIf=\"!name\">Detailansicht</ion-title>\n    <ion-title *ngIf=\"name\">{{name}}: Detailansicht</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-title>{{name}}</ion-card-title>\n  <ion-label>Beschreibung:</ion-label>\n  <ion-item *ngIf=\"description\">{{description}}</ion-item>\n  <ion-label>Häufigkeit des Trainings:</ion-label>\n  <ion-item *ngIf=\"period\">{{period}}</ion-item>\n  <ion-card>\n    <ion-card-header>\n      <ion-text><h3>Übungen:</h3></ion-text>\n      <ion-fab horizontal=\"end\" vertical=\"top\">\n        <ion-fab-button size=\"small\" color=\"dark\" class=\"button-add\" (click)=\"addExerciseView()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor=\"let exercise of this.exercises\">\n        <ion-item button=\"\" routerDirection=\"forward\" [routerLink]=\"'/exercise/' + exercise.exerciseId\"\n                  routerLinkActive=\"selected\">{{exercise.name}}</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ }),

/***/ 8311:
/*!************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Trainingspläne</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Trainingspläne</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-item *ngFor=\"let plan of trainingPlanList\" lines=\"none\">\n      <app-training-plan-card [name]=\"plan.name\" [description]=\"plan.description\" [id]=\"plan.trainingPlanId\" [showDescription]=\"true\"></app-training-plan-card>\n    </ion-item>\n  </ion-list>\n  <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n    <ion-fab-button size=\"small\" color=\"dark\" id=\"trigger-btn-trainingModal\" class=\"button-add\"><ion-icon name=\"add-circle\"></ion-icon></ion-fab-button>\n  </ion-fab>\n\n\n  <ion-modal trigger=\"trigger-btn-trainingModal\" (willDismiss)=\"onWillDismiss($event)\">\n    <ng-template>\n      <ion-header>\n        <ion-toolbar>\n          <ion-title>Neuer Trainingsplan</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"cancel()\">\n              <ion-icon name=\"close-circle\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content class=\"ion-padding\">\n        <form [formGroup]=\"trainingform\" (submit)=\"addTrainingsPlan()\">\n          <ion-item>\n            <ion-label position=\"stacked\">Name des Plans</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"trainingform.dirty\">Feld Name darf nicht leer sein.</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label position=\"stacked\">Was bewirkt der Plan</ion-label>\n            <ion-input type=\"text\" formControlName=\"description\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"trainingform.dirty\">Feld Beschreibung darf nicht leer sein.</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-select formControlName=\"period\" placeholder=\"Wie häufig soll trainiert werden?\">\n              <ion-label position=\"stacked\">Häufigkeit des Trainings:</ion-label>\n              <ion-select-option *ngFor=\"let option of this.weekdays\">{{option}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n            <ion-button type=\"submit\" (click)=\"confirm()\" [disabled]=\"this.trainingform.invalid\">Trainingsplan\n              Speichern\n            </ion-button>\n          </ion-item>\n        </form>\n      </ion-content>\n    </ng-template>\n  </ion-modal>\n</ion-content>\n\n\n\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_training-plan_training-plan_module_ts.js.map