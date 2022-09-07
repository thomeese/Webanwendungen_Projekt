"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_live-training_live-training_module_ts"],{

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
    }
];
let LiveTrainingPageRoutingModule = class LiveTrainingPageRoutingModule {
};
LiveTrainingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
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
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _live_training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live-training.page.html?ngResource */ 92);
/* harmony import */ var _live_training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live-training.page.scss?ngResource */ 1831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let LiveTrainingPage = class LiveTrainingPage {
    constructor() { }
    ngOnInit() {
    }
};
LiveTrainingPage.ctorParameters = () => [];
LiveTrainingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-live-training',
        template: _live_training_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_live_training_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LiveTrainingPage);



/***/ }),

/***/ 1831:
/*!************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXZlLXRyYWluaW5nLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 92:
/*!************************************************************************!*\
  !*** ./src/app/pages/live-training/live-training.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>LiveTraining</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">LiveTraining</ion-title>\n    </ion-toolbar>\n  </ion-header>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_live-training_live-training_module_ts.js.map