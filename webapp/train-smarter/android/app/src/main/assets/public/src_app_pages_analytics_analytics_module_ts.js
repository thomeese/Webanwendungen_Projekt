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
/* harmony import */ var C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
      slidesPerView: 1,
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

  openTrainingPlain(trainingPlanId) {
    this.router.navigateByUrl('/training-plan/' + trainingPlanId);
  }

  ngOnInit() {
    this.getMostUsedTrainingsPlan();
    this.getLeastUsedTrainingsPlan();
    this.getExercisePersonalRecord();
  }

  redirect(trainingPlanId) {
    var _this = this;

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

module.exports = ".toolbar {\n  padding-top: 0 !important;\n}\n\nion-card {\n  --background: rgba(183, 214, 227, 0.71);\n  border-radius: 15px;\n  --color: var(--ion-text-color, #fffffff);\n  font-weight: bold;\n}\n\nion-card ion-card-header {\n  border-bottom: 1px solid grey;\n}\n\nion-card ion-card-content {\n  padding-bottom: 5px;\n  padding-top: 5px;\n}\n\nion-card h1 {\n  padding-top: 5px;\n  font-size: 12px;\n}\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuYWx5dGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDRTtFQUNFLDZCQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFTQTs7O0VBQUEiLCJmaWxlIjoiYW5hbHl0aWNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tY2FyZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDE4MywgMjE0LCAyMjcsIDAuNzEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsICNmZmZmZmZmKTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgaW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuXHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLy9jb2xvcjogIzBkMGQwZDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBIZWFkZXIgZHVyY2hzaWNodGlnXHJcbi8qLnRyYW5zcGFyZW50IHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufSovXHJcbiJdfQ== */";

/***/ }),

/***/ 9743:
/*!****************************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\" class=\"ion-no-border\">\r\n  <ion-toolbar class=\"toolbar transparent\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>Analytics</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen=\"true\">\r\n  <ion-header collapse=\"condense\" class=\"ion-no-border\">\r\n    <ion-toolbar class=\"toolbar transparent\">\r\n      <ion-title size=\"large\">Analytics</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-card>\r\n      <ion-card-header>Persönlicher Gewichtsrekord:</ion-card-header>\r\n    <ion-card-content>\r\n      <swiper  [config]=\"this.config\" *ngIf=\"this.exerciseLookupMap && this.exerciseWeightRecordMap\">\r\n        <ng-template swiperSlide *ngFor=\"let exercise of exerciseLookupMap.keys()\">\r\n          <app-exercise-card [exercise]=\"exerciseLookupMap.get(exercise)\"\r\n                             [maxWeight]=\"exerciseWeightRecordMap.get(exercise)\"></app-exercise-card>\r\n        </ng-template>\r\n      </swiper>\r\n    </ion-card-content>\r\n  </ion-card>\r\n\r\n    <ion-card *ngIf=\"mostUsedPlan\" (click)=\"openTrainingPlain(this.mostUsedPlan.trainingPlanId)\">\r\n      <ion-card-header>Am meisten absolvierter Trainingplan</ion-card-header>\r\n      <ion-card-content>\r\n        <ion-text><h1>Name: {{this.mostUsedPlan.name}}</h1></ion-text>\r\n      </ion-card-content>\r\n      <ion-card-content>\r\n        <ion-text><h1>Beschreibung: {{this.mostUsedPlan.description}}</h1></ion-text>\r\n      </ion-card-content>\r\n    </ion-card>\r\n    <ion-card *ngIf=\"leastUsedPlan\" (click)=\"openTrainingPlain(this.leastUsedPlan.trainingPlanId)\">\r\n      <ion-card-header>Am wenigsten absolvierter Trainingplan</ion-card-header>\r\n      <ion-card-content>\r\n        <ion-text><h1>Name: {{this.leastUsedPlan.name}}</h1></ion-text>\r\n      </ion-card-content>\r\n      <ion-card-content>\r\n        <ion-text><h1>Beschreibung: {{this.leastUsedPlan.description}}</h1></ion-text>\r\n      </ion-card-content>\r\n    </ion-card>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_analytics_analytics_module_ts.js.map