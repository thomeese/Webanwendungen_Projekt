"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts"],{

/***/ 2288:
/*!***********************************************************************************************!*\
  !*** ./src/app/components/exercise-with-logging-card/exercise-with-logging-card.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseWithLoggingCardComponent": () => (/* binding */ ExerciseWithLoggingCardComponent)
/* harmony export */ });
/* harmony import */ var C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _exercise_with_logging_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-with-logging-card.component.html?ngResource */ 3566);
/* harmony import */ var _exercise_with_logging_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-with-logging-card.component.scss?ngResource */ 494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _pages_exercise_exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/exercise/exercise-detail/exercise-detail.page */ 148);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ 4382);









let ExerciseWithLoggingCardComponent = class ExerciseWithLoggingCardComponent {
  constructor(router, modalCtrl, alertController, databaseService) {
    this.router = router;
    this.modalCtrl = modalCtrl;
    this.alertController = alertController;
    this.databaseService = databaseService;
  }

  ngOnInit() {
    console.log("Card");
    console.log(this.exercise);
  }

  editExercise() {
    var _this = this;

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _pages_exercise_exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__.ExerciseDetailPage,
        componentProps: {
          id: _this.exercise.exerciseId,
          trainingPlanId: _this.trainingPlan.id,
          edit: true,
          setArray: _this.exercise.sets
        },
        breakpoints: [0, 0.8, 1],
        initialBreakpoint: 0.8
      });
      console.log(_this.exercise.exerciseId);
      modal.present();
    })();
  }

  deleteExerciseView() {
    var _this2 = this;

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        message: 'Möchten Sie diese Übung wirklich löschen?',
        buttons: [{
          text: 'Abbrechen',
          role: 'cancel'
        }, {
          text: 'Löschen',
          handler: () => {
            _this2.deleteExercise(_this2.exercise.exerciseId);

            alert.dismiss();
          }
        }]
      });
      alert.present();
    })();
  }

  deleteExercise(exerciseId) {
    var _this3 = this;

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.trainingPlan.exercises = _this3.trainingPlan.exercises.filter(item => item.exerciseId !== exerciseId);
      yield _this3.databaseService.updateTrainingPlan(_this3.trainingPlan);
    })();
  }

};

ExerciseWithLoggingCardComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}];

ExerciseWithLoggingCardComponent.propDecorators = {
  exercise: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }],
  trainingPlan: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
  }]
};
ExerciseWithLoggingCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-exercise-with-logging-card',
  template: _exercise_with_logging_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exercise_with_logging_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExerciseWithLoggingCardComponent);


/***/ }),

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
/* harmony import */ var _components_exercise_with_logging_card_exercise_with_logging_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/exercise-with-logging-card/exercise-with-logging-card.component */ 2288);








let TrainingPlanDetailPageModule = class TrainingPlanDetailPageModule {
};
TrainingPlanDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _training_plan_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.TrainingPlanDetailPageRoutingModule
        ],
        declarations: [_training_plan_detail_page__WEBPACK_IMPORTED_MODULE_1__.TrainingPlanDetailPage, _components_exercise_with_logging_card_exercise_with_logging_card_component__WEBPACK_IMPORTED_MODULE_2__.ExerciseWithLoggingCardComponent]
    })
], TrainingPlanDetailPageModule);



/***/ }),

/***/ 494:
/*!************************************************************************************************************!*\
  !*** ./src/app/components/exercise-with-logging-card/exercise-with-logging-card.component.scss?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = ".exercise-card {\n  border-radius: 15px;\n}\n.exercise-card ion-card-header {\n  border-bottom: 1px solid grey;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n.exercise-card ion-card-header h4 {\n  font-weight: bold;\n  font-size: 18px;\n  color: #0d0d0d;\n}\n.exercise-card .set-header {\n  border-bottom: 1px dashed grey;\n}\n.exercise-card ion-item {\n  --inner-padding-end:0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLXdpdGgtbG9nZ2luZy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsNkJBQUE7RUFFQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBTjtBQUlFO0VBQ0UsOEJBQUE7QUFGSjtBQUtFO0VBQ0UsZ0NBQUE7QUFISiIsImZpbGUiOiJleGVyY2lzZS13aXRoLWxvZ2dpbmctY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGVyY2lzZS1jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICBpb24tY2FyZC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcblxyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuXHJcbiAgICBoNCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNldC1oZWFkZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBncmV5O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDowICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 3566:
/*!************************************************************************************************************!*\
  !*** ./src/app/components/exercise-with-logging-card/exercise-with-logging-card.component.html?ngResource ***!
  \************************************************************************************************************/
/***/ ((module) => {

module.exports = "<!--<ion-card class=\"exercise-card\" button=\"\" routerDirection=\"forward\"\r\n          [routerLink]=\"'/exercise/' + exercise.exerciseId\"\r\n          routerLinkActive=\"selected\">-->\r\n<ion-card class=\"exercise-card\">\r\n  <ion-card-header>\r\n    <ion-text><h4>{{exercise.name}}</h4></ion-text>\r\n  </ion-card-header>\r\n  <ion-item-sliding >\r\n    <ion-item-options side=\"start\">\r\n      <ion-item-option (click)=\"this.editExercise()\"><ion-icon name=\"pencil-sharp\"></ion-icon></ion-item-option>\r\n    </ion-item-options>\r\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n      <ion-grid>\r\n        <ion-row class=\"set-header ion-text-center ion-justify-content-center\">\r\n          <ion-col size=\"2\">Satz</ion-col>\r\n          <ion-col size=\"6\">Wiederholung</ion-col>\r\n          <ion-col>Gewicht</ion-col>\r\n        </ion-row>\r\n        <ion-row class=\"ion-text-center ion-justify-content-center\" *ngFor=\"let set of exercise.sets\">\r\n          <ion-col size=\"2\">{{set.setnumber}}</ion-col>\r\n          <ion-col size=\"6\">{{set.repetition}}</ion-col>\r\n          <ion-col>{{set.weight}}</ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </ion-item>\r\n    <ion-item-options slot=\"end\">\r\n      <ion-item-option color=\"danger\" (click)=\"this.deleteExerciseView()\"><ion-icon name=\"trash-sharp\"></ion-icon></ion-item-option>\r\n    </ion-item-options>\r\n  </ion-item-sliding>\r\n\r\n</ion-card>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts.js.map
