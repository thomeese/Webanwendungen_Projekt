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
/* harmony import */ var C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _awesome_cordova_plugins_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/calendar/ngx */ 8731);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/calendar.service */ 9603);











swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.EffectCoverflow]);
let HomePage = class HomePage {
  constructor(dataServise, loadingCtr, authService, calendarService, calendar, platform) {
    this.dataServise = dataServise;
    this.loadingCtr = loadingCtr;
    this.authService = authService;
    this.calendarService = calendarService;
    this.calendar = calendar;
    this.platform = platform;
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
    this.platform.ready().then(() => {
      this.calendar.listCalendars().then(calendars => {
        this.calendars = calendars;
      });
    });
  }

  ngOnInit() {
    this.getTrainingPlans();
    this.dataServise.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
      this.user = res[0];
    });
  }

  getTrainingPlans() {
    var _this = this;

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
}, {
  type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_7__.CalendarService
}, {
  type: _awesome_cordova_plugins_calendar_ngx__WEBPACK_IMPORTED_MODULE_6__.Calendar
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewEncapsulation.None,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".swiper-wrapper {\n  margin-bottom: 10px;\n}\n\n.toolbar {\n  padding-top: 0 !important;\n}\n\n/*.home-background {\n  --background: url(\"/assets/images/wave-haikei(3).svg\") no-repeat center center fixed;\n  --background-size: cover;\n}*/\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n\nh1 {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\nh2 {\n  color: var(--ion-text-color, #ffffff);\n}\n\n.trainingPlans-card {\n  margin: 0 0 0 0;\n  max-width: 400px;\n  border-radius: 10px;\n  background: rgba(183, 214, 227, 0.71);\n  box-shadow: 16px 18px 27px -2px rgba(89, 89, 89, 0.51);\n}\n\n.trainingPlans-card .trainingPlans-card-header {\n  padding: 5px 15px 5px 15px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card {\n  border-radius: 10px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card ion-card-title {\n  border-bottom: 0;\n}\n\nspan.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-primary-contrast, #ffffff);\n  opacity: 1;\n}\n\n.swiper-pagination-bullet {\n  background-color: var(--ion-color-primary-contrast, #ffffff);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7OztFQUFBOztBQU9BOzs7RUFBQTs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUhGOztBQU1BO0VBQ0UscUNBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzREFBQTtBQUhGOztBQUlFO0VBQ0UsMEJBQUE7QUFGSjs7QUFNSTtFQUNFLG1CQUFBO0FBSk47O0FBTU07RUFDQSxnQkFBQTtBQUpOOztBQVdBO0VBQ0UsNERBQUE7RUFDQSxVQUFBO0FBUkY7O0FBV0E7RUFDRSw0REFBQTtFQUNBLFlBQUE7QUFSRiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2lwZXItd3JhcHBlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnRvb2xiYXIge1xyXG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qLmhvbWUtYmFja2dyb3VuZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93YXZlLWhhaWtlaSgzKS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLS1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59Ki9cclxuXHJcblxyXG4vLyBIZWFkZXIgZHVyY2hzaWNodGlnXHJcbi8qLnRyYW5zcGFyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSovXHJcblxyXG5oMSB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjZmZmZmZmKTtcclxufVxyXG5cclxuLnRyYWluaW5nUGxhbnMtY2FyZCB7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMjE0LCAyMjcsIDAuNzEpO1xyXG4gIGJveC1zaGFkb3c6IDE2cHggMThweCAyN3B4IC0ycHggcmdiYSg4OSwgODksIDg5LCAwLjUxKTtcclxuICAudHJhaW5pbmdQbGFucy1jYXJkLWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcclxuICB9XHJcblxyXG4gIC50cmFpbmluZ1BsYW4tY2FyZCB7XHJcbiAgICBpb24tY2FyZCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICBpb24tY2FyZC10aXRsZSB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuc3Bhbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QsICNmZmZmZmYpO1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmZmZmKTtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\" class=\"ion-no-border\">\r\n  <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Home</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"home-background\" fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\r\n    <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\r\n      <ion-title size=\"large\">Home</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-text><h1 *ngIf=\"user\">Hi, {{this.user.firstname}}</h1></ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-lg=\"\">\r\n        <ion-card class=\"trainingPlans-card\">\r\n          <ion-card-header class=\"trainingPlans-card-header\">\r\n            <ion-text><h2>Trainingspläne</h2></ion-text>\r\n          </ion-card-header>\r\n          <ion-card-content>\r\n            <swiper #swiper [config]=\"config\">\r\n              <ng-template swiperSlide *ngFor=\"let trainingPlan of trainingPlanList\">\r\n                <app-training-plan-card class=\"trainingPlan-card\" [trainingPlan]=\"trainingPlan\" [showDescription]=\"false\"></app-training-plan-card>\r\n              </ng-template>\r\n            </swiper>\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n    <ion-list *ngIf=\"this.calendars\">\r\n      <ion-item *ngFor=\"let calender of calendars\">\r\n        <ion-text>{{calender.name}}</ion-text>\r\n        <ion-text>{{calender.type}}</ion-text>\r\n      </ion-item>\r\n    </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map