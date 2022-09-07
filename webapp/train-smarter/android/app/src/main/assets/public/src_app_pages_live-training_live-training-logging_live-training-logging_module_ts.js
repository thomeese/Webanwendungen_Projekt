"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_live-training_live-training-logging_live-training-logging_module_ts"],{

/***/ 5107:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-logging/live-training-logging-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingLoggingPageRoutingModule": () => (/* binding */ LiveTrainingLoggingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _live_training_logging_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training-logging.page */ 3481);




const routes = [
    {
        path: '',
        component: _live_training_logging_page__WEBPACK_IMPORTED_MODULE_0__.LiveTrainingLoggingPage
    }
];
let LiveTrainingLoggingPageRoutingModule = class LiveTrainingLoggingPageRoutingModule {
};
LiveTrainingLoggingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LiveTrainingLoggingPageRoutingModule);



/***/ }),

/***/ 875:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training-logging/live-training-logging.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTrainingLoggingPageModule": () => (/* binding */ LiveTrainingLoggingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _live_training_logging_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training-logging-routing.module */ 5107);
/* harmony import */ var _live_training_logging_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-training-logging.page */ 3481);
/* harmony import */ var _exercise_exercise_detail_exercise_detail_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../exercise/exercise-detail/exercise-detail.module */ 4496);








let LiveTrainingLoggingPageModule = class LiveTrainingLoggingPageModule {
};
LiveTrainingLoggingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _live_training_logging_routing_module__WEBPACK_IMPORTED_MODULE_0__.LiveTrainingLoggingPageRoutingModule,
            _exercise_exercise_detail_exercise_detail_module__WEBPACK_IMPORTED_MODULE_2__.ExerciseDetailPageModule
        ],
        declarations: [_live_training_logging_page__WEBPACK_IMPORTED_MODULE_1__.LiveTrainingLoggingPage]
    })
], LiveTrainingLoggingPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_live-training_live-training-logging_live-training-logging_module_ts.js.map