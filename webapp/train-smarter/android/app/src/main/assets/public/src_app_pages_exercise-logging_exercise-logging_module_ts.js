"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exercise-logging_exercise-logging_module_ts"],{

/***/ 416:
/*!***************************************************************************!*\
  !*** ./src/app/pages/exercise-logging/exercise-logging-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseLoggingPageRoutingModule": () => (/* binding */ ExerciseLoggingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _exercise_logging_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-logging.page */ 4336);




const routes = [
    {
        path: '',
        component: _exercise_logging_page__WEBPACK_IMPORTED_MODULE_0__.ExerciseLoggingPage
    }
];
let ExerciseLoggingPageRoutingModule = class ExerciseLoggingPageRoutingModule {
};
ExerciseLoggingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExerciseLoggingPageRoutingModule);



/***/ }),

/***/ 7245:
/*!*******************************************************************!*\
  !*** ./src/app/pages/exercise-logging/exercise-logging.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseLoggingPageModule": () => (/* binding */ ExerciseLoggingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _exercise_logging_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-logging-routing.module */ 416);
/* harmony import */ var _exercise_logging_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-logging.page */ 4336);







let ExerciseLoggingPageModule = class ExerciseLoggingPageModule {
};
ExerciseLoggingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _exercise_logging_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExerciseLoggingPageRoutingModule
        ],
        declarations: [_exercise_logging_page__WEBPACK_IMPORTED_MODULE_1__.ExerciseLoggingPage]
    })
], ExerciseLoggingPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_exercise-logging_exercise-logging_module_ts.js.map