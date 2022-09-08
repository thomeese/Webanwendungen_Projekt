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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analytics-routing.module */ 8410);
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.page */ 97);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swiper/angular */ 341);
/* harmony import */ var _exercise_exercise_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exercise/exercise.module */ 1751);









let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_0__.AnalyticsPageRoutingModule,
            swiper_angular__WEBPACK_IMPORTED_MODULE_8__.SwiperModule,
            _exercise_exercise_module__WEBPACK_IMPORTED_MODULE_2__.ExercisePageModule
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
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics.page.html?ngResource */ 9743);
/* harmony import */ var _analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics.page.scss?ngResource */ 5215);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);







let AnalyticsPage = class AnalyticsPage {
  constructor(dataService, router) {
    this.dataService = dataService;
    this.router = router;
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
  }

  getExercisePersonalRecord() {
    const map = new Map();
    let setArray = [];
    this.dataService.getAllSetLoggingByUid().subscribe(result => {
      //Alle Gewichte fuer die jeweilige Exercise finden
      result.forEach(item => {
        item.sets.forEach(concreteSet => {
          setArray.push(concreteSet.weight);
        });

        if (map.get(item.excerciseId)) {
          for (const i of map.get(item.excerciseId)) {
            setArray.push(i);
          }
        } //und zwischenspeichern


        map.set(item.excerciseId, setArray);
        setArray = [];
      });
      const secondMap = new Map(); //Maximalgewicht fuer die jeweilige Exercise finden

      for (const k of map.keys()) {
        if (map.get(k)) {
          //und zwischen speichern
          secondMap.set(k, Math.max(...map.get(k)));
        }
      }

      this.exerciseWeightRecordMap = secondMap;
      this.exerciseLookupMap = new Map();

      for (const j of secondMap.keys()) {
        if (secondMap.get(j)) {
          //genaue Exercise-Daten holen und mit Maximalgewicht speichern
          this.dataService.getExerciseByNumericId(j).subscribe(resultExercise => {
            this.exerciseLookupMap.set(j, resultExercise[0]);
            console.log(this.exerciseLookupMap);
          });
        }
      }
    });
  }

  getMostUsedTrainingsPlan() {
    const map = new Map();
    this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        //Map mit ids und Nullen vorinitialisieren
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          //Jede gefundene Id hochzaehlen
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        }); //Max-Wert in der Map ermitteln

        const maxValue = Math.max(...map.values());

        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === maxValue) {
            //Plan der dem Max-Wert in der Map hat setzen
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.mostUsedPlan = resultItem;
            });
          }
        }
      });
    });
  }

  getLeastUsedTrainingsPlan() {
    const map = new Map();
    this.dataService.getUserTrainingsPlan().subscribe(result => {
      result.forEach(resultItem => {
        //Map mit ids und Nullen vorinitialisieren
        map.set(resultItem.trainingPlanId, 0);
      });
      this.dataService.getAllSetLoggingByUid().subscribe(res => {
        res.forEach(resItem => {
          //Jede gefundene Id hochzaehlen
          map.set(resItem.trainingPlanId, map.get(resItem.trainingPlanId) + 1);
        }); //Min-Wert in der Map ermitteln

        const minValue = Math.min(...map.values());

        for (const keyItem of map.keys()) {
          if (map.get(keyItem) === minValue) {
            //Plan der dem Min-Wert in der Map hat setzen
            this.dataService.getTrainingsPlanById(keyItem).subscribe(resultItem => {
              this.leastUsedPlan = resultItem;
            });
          }
        }
      });
    });
  }

  ngOnInit() {
    this.getMostUsedTrainingsPlan();
    this.getLeastUsedTrainingsPlan();
    this.getExercisePersonalRecord();
  }

  redirect(trainingPlanId) {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.router.navigateByUrl(`/training-plan/${trainingPlanId}`, {
        replaceUrl: true
      });
    })();
  }

};

AnalyticsPage.ctorParameters = () => [{
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_3__.DatabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

AnalyticsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-analytics',
  template: _analytics_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_analytics_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AnalyticsPage);


/***/ }),

/***/ 5215:
/*!****************************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".toolbar {\n  padding-top: 0 !important;\n}\n\n.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUdBO0VBQ0Usa0NBQUE7RUFDQSxvQ0FBQTtBQUFGIiwiZmlsZSI6ImFuYWx5dGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhciB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7XG59XG5cbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 9743:
/*!****************************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\n  <ion-toolbar class=\"toolbar transparent\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Analytics</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar class=\"toolbar transparent\">\n      <ion-title size=\"large\">Analytics</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-item lines=\"none\">\n    <ion-label>Letzter Trainingsplan</ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-label>Persönlicher Gewichtsrekord: </ion-label>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <swiper #swiper [config]=\"this.config\" *ngIf=\"this.exerciseLookupMap && this.exerciseWeightRecordMap\">\n      <ng-template swiperSlide *ngFor=\"let exercise of exerciseLookupMap.keys()\">\n        <app-exercise-card [exercise]=\"exerciseLookupMap.get(exercise)\" [maxWeight]=\"exerciseWeightRecordMap.get(exercise)\"></app-exercise-card>\n      </ng-template>\n    </swiper>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-card *ngIf=\"mostUsedPlan\" button=\"\" routerDirection=\"forward\" [routerLink]=\"'/training-plan/' + this.mostUsedPlan.trainingPlanId\" routerLinkActive=\"selected\">\n      <ion-card-header>Am meisten absolvierter Trainingplan</ion-card-header>\n      <ion-card-content>{{this.mostUsedPlan.name}}</ion-card-content>\n      <ion-card-content>{{this.mostUsedPlan.description}}</ion-card-content>\n    </ion-card>\n  </ion-item>\n  <ion-item lines=\"none\">\n    <ion-card *ngIf=\"leastUsedPlan\" button=\"\" routerDirection=\"forward\" [routerLink]=\"'/training-plan/' + this.leastUsedPlan.trainingPlanId\" routerLinkActive=\"selected\">\n      <ion-card-header>Am wenigsten absolvierter Trainingplan</ion-card-header>\n      <ion-card-content>{{this.leastUsedPlan.name}}</ion-card-content>\n      <ion-card-content>{{this.leastUsedPlan.description}}</ion-card-content>\n    </ion-card>\n  </ion-item>\n  <ion-label>Exercise Gewichtserfolgskurve</ion-label>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_analytics_module_ts.js.map