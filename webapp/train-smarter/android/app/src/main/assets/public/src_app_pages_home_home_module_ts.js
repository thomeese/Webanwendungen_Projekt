"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 5733:
/*!*********************************************************************************!*\
  !*** ./src/app/components/calendar-event-card/calendar-event-card.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarEventCardComponent": () => (/* binding */ CalendarEventCardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _calendar_event_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calendar-event-card.component.html?ngResource */ 50);
/* harmony import */ var _calendar_event_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-event-card.component.scss?ngResource */ 2084);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);




let CalendarEventCardComponent = class CalendarEventCardComponent {
    constructor() {
    }
    ngOnInit() {
        this.startDate = new Date(this.calendarEvent.startDate.replace(' ', 'T'));
    }
};
CalendarEventCardComponent.ctorParameters = () => [];
CalendarEventCardComponent.propDecorators = {
    calendarEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
CalendarEventCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-calendar-event-card',
        template: _calendar_event_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_calendar_event_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CalendarEventCardComponent);



/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 6610);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _training_plan_training_plan_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../training-plan/training-plan.module */ 2589);
/* harmony import */ var _components_calendar_event_card_calendar_event_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/calendar-event-card/calendar-event-card.component */ 5733);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_9__.SwiperModule,
            _training_plan_training_plan_module__WEBPACK_IMPORTED_MODULE_2__.TrainingPlanPageModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage, _components_calendar_event_card_calendar_event_card_component__WEBPACK_IMPORTED_MODULE_3__.CalendarEventCardComponent]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ 3587);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/calendar.service */ 9603);










swiper__WEBPACK_IMPORTED_MODULE_4__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_4__.Navigation, swiper__WEBPACK_IMPORTED_MODULE_4__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_4__.EffectCoverflow]);
let HomePage = class HomePage {
  constructor(dataServise, loadingCtr, authService, calendarService, paltform) {
    this.dataServise = dataServise;
    this.loadingCtr = loadingCtr;
    this.authService = authService;
    this.calendarService = calendarService;
    this.paltform = paltform;
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
    console.log(this.paltform.width());
    console.log(this.paltform.height());
    this.getTrainingPlans();
    this.dataServise.getUserDataByUid(this.authService.getUserId()).subscribe(res => {
      this.user = res[0];
    });
    this.calendarService.getNextEvents().then(r => {
      if (r !== 'error') {
        this.nextEvents = r;
      }
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
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__.AuthenticationService
}, {
  type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_6__.CalendarService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
}];

HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-home',
  template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewEncapsulation.None,
  styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], HomePage);


/***/ }),

/***/ 2084:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/calendar-event-card/calendar-event-card.component.scss?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "ion-card-title {\n  text-align: center;\n  border-bottom: 1px solid grey;\n  font-weight: bold;\n  padding-bottom: 10px;\n  padding-top: 10px;\n}\n\nion-card {\n  border-radius: 15px;\n  margin: 5px 5px 15px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbGVuZGFyLWV2ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0FBQ0YiLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNhcmQtdGl0bGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuaW9uLWNhcmR7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIG1hcmdpbjogNXB4IDVweCAxNXB4IDVweDtcbn1cblxuIl19 */";

/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".swiper-wrapper {\n  margin-bottom: 10px;\n}\n\n/*.home-background {\n  --background: url(\"/assets/images/wave-haikei(3).svg\") no-repeat center center fixed;\n  --background-size: cover;\n}*/\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n\nh1 {\n  margin-top: 0;\n  margin-bottom: 15px;\n}\n\nh2 {\n  color: var(--ion-text-color, #ffffff);\n}\n\n.trainingPlans-card, .nextEvents {\n  margin: 0 0 20px 0;\n  max-width: 400px;\n  border-radius: 10px;\n  background: rgba(183, 214, 227, 0.71);\n  box-shadow: 16px 18px 27px -2px rgba(89, 89, 89, 0.51);\n}\n\n.trainingPlans-card ion-card-header, .nextEvents ion-card-header {\n  padding: 5px 15px 5px 15px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card {\n  border-radius: 10px;\n}\n\n.trainingPlans-card .trainingPlan-card ion-card ion-card-title {\n  border-bottom: 0;\n}\n\nspan.swiper-pagination-bullet.swiper-pagination-bullet-active {\n  background-color: var(--ion-color-dark, #000000);\n  opacity: 1;\n}\n\n.swiper-pagination-bullet {\n  background-color: var(--ion-color-dark, #000000);\n  opacity: 0.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7O0VBQUE7O0FBT0E7OztFQUFBOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQ0FBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxzREFBQTtBQUpGOztBQU1FO0VBQ0UsMEJBQUE7QUFKSjs7QUFXSTtFQUNFLG1CQUFBO0FBUk47O0FBVU07RUFDRSxnQkFBQTtBQVJSOztBQWdCQTtFQUNFLGdEQUFBO0VBQ0EsVUFBQTtBQWJGOztBQWdCQTtFQUNFLGdEQUFBO0VBQ0EsWUFBQTtBQWJGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXBlci13cmFwcGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyouaG9tZS1iYWNrZ3JvdW5kIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy93YXZlLWhhaWtlaSgzKS5zdmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4gIC0tYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0qL1xuXG5cbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcbi8qLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSovXG5cbmgxIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuaDIge1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICNmZmZmZmYpO1xufVxuXG5cbi50cmFpbmluZ1BsYW5zLWNhcmQsIC5uZXh0RXZlbnRzIHtcbiAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE4MywgMjE0LCAyMjcsIDAuNzEpO1xuICBib3gtc2hhZG93OiAxNnB4IDE4cHggMjdweCAtMnB4IHJnYmEoODksIDg5LCA4OSwgMC41MSk7XG5cbiAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiA1cHggMTVweCA1cHggMTVweDtcbiAgfVxufVxuXG4udHJhaW5pbmdQbGFucy1jYXJkIHtcblxuICAudHJhaW5pbmdQbGFuLWNhcmQge1xuICAgIGlvbi1jYXJkIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgICAgIGlvbi1jYXJkLXRpdGxlIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59XG5cbnNwYW4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzAwMDAwMCk7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzAwMDAwMCk7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiJdfQ== */";

/***/ }),

/***/ 50:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/calendar-event-card/calendar-event-card.component.html?ngResource ***!
  \**********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card class=\"card\" >\n  <ion-card-header>\n    <ion-card-title *ngIf=\"this.calendarEvent\" class=\"ion-text-center\">{{calendarEvent.title}}</ion-card-title>\n  </ion-card-header>\n  <ion-card-content>\n    <ion-text *ngIf=\"this.calendarEvent\"><h4>{{this.startDate | date:'d. MMMM y'}}</h4></ion-text>\n    <ion-text *ngIf=\"this.calendarEvent\"><h4>{{calendarEvent.message}}</h4></ion-text>\n  </ion-card-content>\n</ion-card>\n\n\n";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\" class=\"ion-no-border\">\n  <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Home</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"home-background\" fullscreen=\"true\">\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\n    <ion-toolbar class=\"toolbar transparent\"> <!--style=\"background: #F4FAF6\"-->\n      <ion-title size=\"large\">Home</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-text><h1 *ngIf=\"user\">Hi, {{this.user.firstname}}</h1></ion-text>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"\">\n        <ion-card class=\"trainingPlans-card\">\n          <ion-card-header class=\"trainingPlans-card-header\">\n            <ion-text><h2>Trainingspläne</h2></ion-text>\n          </ion-card-header>\n          <ion-card-content>\n            <swiper #swiper [config]=\"config\">\n              <ng-template swiperSlide *ngFor=\"let trainingPlan of trainingPlanList\">\n                <app-training-plan-card class=\"trainingPlan-card\" [trainingPlan]=\"trainingPlan\" [showDescription]=\"false\"></app-training-plan-card>\n              </ng-template>\n            </swiper>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"\">\n        <ion-card class=\"nextEvents\">\n        <ion-card-header >\n          <ion-text><h2>Nächste Trainingstermine</h2></ion-text>\n        </ion-card-header>\n        <ion-card-content>\n          <swiper #swiper [config]=\"config\">\n            <ng-template swiperSlide *ngFor=\"let nextEvent of nextEvents\">\n              <app-calendar-event-card [calendarEvent]=\"nextEvent\"></app-calendar-event-card>\n            </ng-template>\n          </swiper>\n        </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n    <ion-list *ngIf=\"this.calendars\">\n      <ion-item *ngFor=\"let calender of calendars\">\n        <ion-text>{{calender.name}}</ion-text>\n        <ion-text>{{calender.type}}</ion-text>\n      </ion-item>\n    </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map
