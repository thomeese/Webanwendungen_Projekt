"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_analytics_analytics_module_ts"],{

/***/ 8410:
/*!*************************************************************!*\
  !*** ./src/app/pages/analytics/analytics-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsPageRoutingModule": () => (/* binding */ AnalyticsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics.page */ 97);




const routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_0__.AnalyticsPage
    }
];
let AnalyticsPageRoutingModule = class AnalyticsPageRoutingModule {
};
AnalyticsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AnalyticsPageRoutingModule);



/***/ }),

/***/ 2679:
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsPageModule": () => (/* binding */ AnalyticsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-routing.module */ 8410);
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.page */ 97);







let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyticsPageRoutingModule
        ],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_1__.AnalyticsPage]
    })
], AnalyticsPageModule);



/***/ }),

/***/ 97:
/*!***************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AnalyticsPage": () => (/* binding */ AnalyticsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics.page.html?ngResource */ 9743);
/* harmony import */ var _analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.page.scss?ngResource */ 5215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let AnalyticsPage = class AnalyticsPage {
    constructor() { }
    ngOnInit() {
    }
};
AnalyticsPage.ctorParameters = () => [];
AnalyticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-analytics',
        template: _analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AnalyticsPage);



/***/ }),

/***/ 5215:
/*!****************************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbmFseXRpY3MucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9743:
/*!****************************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Analytics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Analytics</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n  <img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Circle_reflect_wikipedia.jpg/220px-Circle_reflect_wikipedia.jpg\"/>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_analytics_module_ts.js.map