"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_training-plan_training-plan-detail_training-plan-detail_page_ts"],{

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

module.exports = ".exercises-list {\n  border-radius: 10px;\n  background: rgba(224, 224, 224, 0.71);\n  box-shadow: 16px 18px 27px -2px rgba(89, 89, 89, 0.51);\n}\n.exercises-list ion-card-content {\n  padding-left: 0;\n  padding-right: 0;\n}\n.exercise-card {\n  border-radius: 15px;\n  margin: 0 7px 12px 7px;\n}\n.exercise-card ion-card-header {\n  border-bottom: 1px solid grey;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.exercise-card ion-card-header h4 {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0d0d0d;\n}\n.exercise-card .set-header {\n  border-bottom: 1px dashed grey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLXBsYW4tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzREFBQTtBQUpGO0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQVFBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtBQUxGO0FBT0U7RUFDRSw2QkFBQTtFQUVBLG9CQUFBO0VBQ0EsaUJBQUE7QUFOSjtBQVFJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQU5OO0FBVUU7RUFDRSw4QkFBQTtBQVJKIiwiZmlsZSI6InRyYWluaW5nLXBsYW4tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8ve1xuLy8gIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG4vLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1MmRlZywgcmdiYSgwLDAsMCwxKSA0NiUsIHJnYmEoMjIsNDAsMjI4LDEpIDgzJSwgcmdiYSgwLDIzMiwyNTUsMSkgMTAwJSk7XG4vL31cblxuLmV4ZXJjaXNlcy1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjcxKTtcbiAgYm94LXNoYWRvdzogMTZweCAxOHB4IDI3cHggLTJweCByZ2JhKDg5LCA4OSwgODksIDAuNTEpO1xuXG4gIGlvbi1jYXJkLWNvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICB9XG59XG5cbi5leGVyY2lzZS1jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgbWFyZ2luOiAwIDdweCAxMnB4IDdweDtcblxuICBpb24tY2FyZC1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG5cbiAgICBoNCB7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGNvbG9yOiAjMGQwZDBkO1xuICAgIH1cbiAgfVxuXG4gIC5zZXQtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGdyZXk7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 9784:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"ion-text-wrap\">\n      <ion-title *ngIf=\"!name\">Detailansicht</ion-title>\n      <ion-title *ngIf=\"name\">{{name}}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <div class=\"ion-text-wrap\">\n        <ion-title size=\"large\" *ngIf=\"!name\">Detailansicht</ion-title>\n        <ion-title size=\"large\" *ngIf=\"name\">{{name}}</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-label>Beschreibung:</ion-label>\n  <ion-item *ngIf=\"description\">{{description}}</ion-item>\n  <ion-label>Häufigkeit des Trainings:</ion-label>\n  <ion-item *ngIf=\"period\">{{period}}</ion-item>\n  <ion-card class=\"exercises-list\">\n    <ion-card-header>\n      <ion-text><h3>Übungen:</h3></ion-text>\n      <ion-fab horizontal=\"end\" vertical=\"top\">\n        <ion-fab-button size=\"small\" color=\"dark\" class=\"button-add\" (click)=\"addExerciseView()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-card class=\"exercise-card\" *ngFor=\"let exercise of this.exercises\" button=\"\" routerDirection=\"forward\"\n                [routerLink]=\"'/exercise/' + exercise.exerciseId\"\n                routerLinkActive=\"selected\">\n        <ion-card-header>\n          <ion-text><h4>{{exercise.name}}</h4></ion-text>\n        </ion-card-header>\n        <ion-grid>\n          <ion-row class=\"set-header ion-text-center ion-justify-content-center\">\n            <ion-col size=\"3\">Satz</ion-col>\n            <ion-col size=\"5\">Wiederhohlung</ion-col>\n            <ion-col>Gewicht</ion-col>\n          </ion-row>\n          <ion-row class=\"ion-text-center ion-justify-content-center\" *ngFor=\"let set of exercise.sets\">\n            <ion-col size=\"3\">{{set.setnumber}}</ion-col>\n            <ion-col size=\"5\">{{set.repetition}}</ion-col>\n            <ion-col>{{set.weight}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_training-plan_training-plan-detail_training-plan-detail_page_ts.js.map