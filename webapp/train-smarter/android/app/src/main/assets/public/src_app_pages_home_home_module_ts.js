"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _training_plan_training_plan_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training-plan/training-plan.module */ 2589);









let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _training_plan_training_plan_module__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanPageModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);









swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.EffectCoverflow]);
let HomePage = class HomePage {
  constructor(dataServise, loadingCtr, authService) {
    this.dataServise = dataServise;
    this.loadingCtr = loadingCtr;
    this.authService = authService;
    this.config = {
      slidesPerView: 'auto',
      spaceBetween: 10,
      centeredSlides: true,
      pagination: {
        dynamicBullets: true,
        clickable: true
      },
      coverflowEffect: {
        rotate: 30,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false
      },
      effect: 'coverflow' //navigation: true,

    };
    this.trainingPlanList = [];
  }

  ngOnInit() {
    this.getTrainingPlans();
    this.dataServise.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
      this.user = res[0];
    });
  }

  getTrainingPlans() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtr.create({
        message: 'Loading..',
        spinner: 'bubbles'
      });
      yield loading.present();

      _this.dataServise.getUserTrainingsPlan().subscribe(res => {
        _this.trainingPlanList = res;
      });

      yield loading.dismiss();
    })();
  }

};

HomePage.ctorParameters = () => [{
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewEncapsulation.None,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".swiper-wrapper {\n  margin-bottom: 10px;\n}\n\n.toolbar {\n  padding-top: 0 !important;\n}\n\n/*.home-background {\n  --background: url(\"/assets/images/wave-haikei(3).svg\") no-repeat center center fixed;\n  --background-size: cover;\n}*/\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n\nh1 {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\nh2 {\n  color: var(--ion-text-color, #ffffff);\n}\n\n.trainingPlans-card {\n  margin: 0 0 0 0;\n  max-width: 400px;\n  border-radius: 10px;\n  background: rgba(183, 214, 227, 0.71);\n  box-shadow: 16px 18px 27px -2px rgba(89, 89, 89, 0.51);\n}\n\n.trainingPlans-card .trainingPlans-card-header {\n  padding: 5px 15px 5px 15px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card {\n  border-radius: 10px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card ion-card-title {\n  border-bottom: 0;\n}\n\nspan.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary-contrast, #ffffff);\n  opacity: 1;\n}\n\n.swiper-pagination-bullet {\n  background-color: var(--ion-color-primary-contrast, #ffffff);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7OztFQUFBOztBQU9BOzs7RUFBQTs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UscUNBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzREFBQTtBQUhGOztBQUlFO0VBQ0UsMEJBQUE7QUFGSjs7QUFNSTtFQUNFLG1CQUFBO0FBSk47O0FBTU07RUFDQSxnQkFBQTtBQUpOOztBQVdBO0VBQ0UsNERBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFDRSw0REFBQTtFQUNBLFlBQUE7QUFSRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItd3JhcHBlciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi50b29sYmFyIHtcbiAgcGFkZGluZy10b3A6IDAgIWltcG9ydGFudDtcbn1cblxuLyouaG9tZS1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93YXZlLWhhaWtlaSgzKS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0qL1xuXG5cbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcbi8qLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSovXG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaDIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICNmZmZmZmYpO1xufVxuXG4udHJhaW5pbmdQbGFucy1jYXJkIHtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMjE0LCAyMjcsIDAuNzEpO1xuICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjdweCAtMnB4IHJnYmEoODksIDg5LCA4OSwgMC41MSk7XG4gIC50cmFpbmluZ1BsYW5zLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgfVxuXG4gIC50cmFpbmluZ1BsYW4tY2FyZCB7XG4gICAgaW9uLWNhcmQge1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgaW9uLWNhcmQtdGl0bGUge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gICAgfVxuXG4gIH1cbn1cblxuc3Bhbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmZmZmKTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmZmZmKTtcbiAgb3BhY2l0eTogMC41O1xufVxuIl19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\" class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-background\" fullscreen=\"true\">\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text><h1 *ngIf=\"user\">Hi, {{this.user.firstname}}</h1></ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"\">\n        <ion-card class=\"trainingPlans-card\">\n          <ion-card-header class=\"trainingPlans-card-header\">\n            <ion-text><h2>Trainingspläne</h2></ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <swiper #swiper [config]=\"config\">\n              <ng-template swiperSlide *ngFor=\"let trainingPlan of trainingPlanList\">\n                <app-training-plan-card class=\"trainingPlan-card\" [trainingPlan]=\"trainingPlan\" [showDescription]=\"false\"></app-training-plan-card>\n              </ng-template>\n            </swiper>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map