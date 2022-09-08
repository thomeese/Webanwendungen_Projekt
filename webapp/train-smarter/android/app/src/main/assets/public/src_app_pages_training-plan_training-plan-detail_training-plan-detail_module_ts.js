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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _training_plan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-detail-routing.module */ 9295);
/* harmony import */ var _training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-detail.page */ 5142);
/* harmony import */ var _exercise_exercise_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exercise/exercise.module */ 1751);








let TrainingPlanDetailPageModule = class TrainingPlanDetailPageModule {
};
TrainingPlanDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _training_plan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanDetailPageRoutingModule,
            _exercise_exercise_module__WEBPACK_IMPORTED_MODULE_2__.ExercisePageModule
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _training_plan_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./training-plan-detail.page.html?ngResource */ 9784);
/* harmony import */ var _training_plan_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./training-plan-detail.page.scss?ngResource */ 6449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let TrainingPlanDetailPage = class TrainingPlanDetailPage {
    constructor(databaseService, route, router, alertController) {
        this.databaseService = databaseService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
    }
    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.getPlan(id);
    }
    addExerciseView() {
        const navigationExtras = {
            state: {
                trainingPlan: this.trainingPlan,
                addToPlan: true
            }
        };
        this.router.navigate(['exercise'], navigationExtras);
    }
    getPlan(id) {
        this.databaseService.getTrainingsPlanById(id).subscribe(res => {
            this.trainingPlan = res;
            console.log("Trainingsplan Detailansicht: " + this.trainingPlan.id);
        });
    }
};
TrainingPlanDetailPage.ctorParameters = () => [
    { type: _services_database_service__WEBPACK_IMPORTED_MODULE_2__.DatabaseService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
TrainingPlanDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-training-plan-detail',
        template: _training_plan_detail_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_training_plan_detail_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TrainingPlanDetailPage);



/***/ }),

/***/ 6449:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.scss?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = ".exercises-list {\n  border-radius: 10px;\n  background: rgba(224, 224, 224, 0.71);\n  box-shadow: 16px 18px 27px -2px rgba(89, 89, 89, 0.51);\n}\n.exercises-list .exercises-list-content {\n  padding-left: 0;\n  padding-right: 0;\n}\n.exercises-list app-exercise-card {\n  padding-bottom: 10px;\n}\n.toolbar {\n  padding-top: 0 !important;\n}\n.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWluaW5nLXBsYW4tZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzREFBQTtBQUpGO0FBTUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSjtBQU1FO0VBQ0Usb0JBQUE7QUFKSjtBQVFBO0VBQ0UseUJBQUE7QUFMRjtBQVNBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQU5GIiwiZmlsZSI6InRyYWluaW5nLXBsYW4tZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8ve1xuLy8gIGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG4vLyAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM1MmRlZywgcmdiYSgwLDAsMCwxKSA0NiUsIHJnYmEoMjIsNDAsMjI4LDEpIDgzJSwgcmdiYSgwLDIzMiwyNTUsMSkgMTAwJSk7XG4vL31cblxuLmV4ZXJjaXNlcy1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyMjQsIDIyNCwgMjI0LCAwLjcxKTtcbiAgYm94LXNoYWRvdzogMTZweCAxOHB4IDI3cHggLTJweCByZ2JhKDg5LCA4OSwgODksIDAuNTEpO1xuXG4gIC5leGVyY2lzZXMtbGlzdC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxuICBhcHAtZXhlcmNpc2UtY2FyZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuLnRvb2xiYXJ7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuXG4iXX0= */";

/***/ }),

/***/ 9784:
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/training-plan/training-plan-detail/training-plan-detail.page.html?ngResource ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar class=\"toolbar transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <div class=\"ion-text-wrap\">\n      <ion-title *ngIf=\"!this.trainingPlan\">Detailansicht</ion-title>\n      <ion-title *ngIf=\"this.trainingPlan\">{{this.trainingPlan.name}}</ion-title>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar transparent\">\n      <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n      <div class=\"ion-text-wrap\">\n        <ion-title size=\"large\" *ngIf=\"!this.trainingPlan\">Detailansicht</ion-title>\n        <ion-title size=\"large\" *ngIf=\"this.trainingPlan\">{{this.trainingPlan.name}}</ion-title>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n  <ion-label>Beschreibung:</ion-label>\n  <ion-item *ngIf=\"this.trainingPlan\">{{this.trainingPlan.description}}</ion-item>\n  <ion-label>Häufigkeit des Trainings:</ion-label>\n  <ion-item *ngIf=\"this.trainingPlan\">{{this.trainingPlan.period}}</ion-item>\n  <ion-card class=\"exercises-list\">\n    <ion-card-header>\n      <ion-text><h3>Übungen:</h3></ion-text>\n      <ion-fab horizontal=\"end\" vertical=\"top\">\n        <ion-fab-button size=\"small\" color=\"dark\" class=\"button-add\" (click)=\"addExerciseView()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n    </ion-card-header>\n    <ion-card-content class=\"exercises-list-content\" *ngIf=\"this.trainingPlan\">\n      <app-exercise-card *ngFor=\"let exercise of this.trainingPlan.exercises\" [trainingPlan]=\"this.trainingPlan\" [exercise]=\"exercise\" [sets]=\"exercise.sets\" [showGif]=\"true\"></app-exercise-card>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts.js.map