"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts"],{

/***/ 9295:
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail-routing.module.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanDetailPageRoutingModule": () => (/* binding */ TrainingPlanDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _training_plan_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-detail.page */ 5142);
/* harmony import */ var _exercise_logging_exercise_logging_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../exercise-logging/exercise-logging.page */ 4336);





const routes = [
    {
        path: '',
        component: _training_plan_detail_page__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanDetailPage
    },
    {
        path: ':id',
        component: _exercise_logging_exercise_logging_page__WEBPACK_IMPORTED_MODULE_1__.ExerciseLoggingPage
    }
];
let TrainingPlanDetailPageRoutingModule = class TrainingPlanDetailPageRoutingModule {
};
TrainingPlanDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], TrainingPlanDetailPageRoutingModule);



/***/ }),

/***/ 7491:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.module.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainingPlanDetailPageModule": () => (/* binding */ TrainingPlanDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _training_plan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-detail-routing.module */ 9295);
/* harmony import */ var _training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-detail.page */ 5142);







let TrainingPlanDetailPageModule = class TrainingPlanDetailPageModule {
};
TrainingPlanDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _training_plan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanDetailPageRoutingModule
        ],
        declarations: [_training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__.TrainingPlanDetailPage]
    })
], TrainingPlanDetailPageModule);



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

/***/ 6449:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFpbmluZy1wbGFuLWRldGFpbC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 9784:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-back-button slot=\"start\"></ion-back-button>\n    <ion-title *ngIf=\"!name\">Detailansicht</ion-title>\n    <ion-title *ngIf=\"name\">{{name}}: Detailansicht</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-title>{{name}}</ion-card-title>\n  <ion-label>Beschreibung:</ion-label>\n  <ion-item *ngIf=\"description\">{{description}}</ion-item>\n  <ion-label>Häufigkeit des Trainings:</ion-label>\n  <ion-item *ngIf=\"period\">{{period}}</ion-item>\n  <ion-card>\n    <ion-card-header>\n      <ion-text><h3>Übungen:</h3></ion-text>\n      <ion-fab horizontal=\"end\" vertical=\"top\">\n        <ion-fab-button size=\"small\" color=\"dark\" class=\"button-add\" (click)=\"addExerciseView()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-list *ngFor=\"let exercise of this.exercises\">\n        <ion-item button=\"\" routerDirection=\"forward\" [routerLink]=\"'/exercise/' + exercise.exerciseId\"\n                  routerLinkActive=\"selected\">{{exercise.name}}</ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts.js.map