"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_exercise_exercise_module_ts"],{

/***/ 2284:
/*!*********************************************************************!*\
  !*** ./src/app/components/exercise-card/exercise-card.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExerciseCardComponent": () => (/* binding */ ExerciseCardComponent)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _exercise_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-card.component.html?ngResource */ 9927);
/* harmony import */ var _exercise_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise-card.component.scss?ngResource */ 2933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _pages_exercise_exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/exercise/exercise-detail/exercise-detail.page */ 148);








let ExerciseCardComponent = class ExerciseCardComponent {
  constructor(router, modalCtrl) {
    this.router = router;
    this.modalCtrl = modalCtrl;
  }

  openDetails() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _pages_exercise_exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_3__.ExerciseDetailPage,
        componentProps: {
          id: _this.exercise.numericId,
          trainingPlanId: _this.trainingPlanId
        },
        breakpoints: [0, 0.5, 0.8, 1],
        initialBreakpoint: 0.5
      });
      modal.present();
    })();
  }

  ngOnInit() {
    console.log(this.exercise);
  }

};

ExerciseCardComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController
}];

ExerciseCardComponent.propDecorators = {
  exercise: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }],
  trainingPlanId: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
ExerciseCardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-exercise-card',
  template: _exercise_card_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exercise_card_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExerciseCardComponent);


/***/ }),

/***/ 2529:
/*!***********************************************************!*\
  !*** ./src/app/pages/exercise/exercise-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisePageRoutingModule": () => (/* binding */ ExercisePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _exercise_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise.page */ 3577);
/* harmony import */ var _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise-detail/exercise-detail.page */ 148);





const routes = [
    {
        path: '',
        component: _exercise_page__WEBPACK_IMPORTED_MODULE_0__.ExercisePage
    }, {
        path: ':id',
        component: _exercise_detail_exercise_detail_page__WEBPACK_IMPORTED_MODULE_1__.ExerciseDetailPage
    }
];
let ExercisePageRoutingModule = class ExercisePageRoutingModule {
};
ExercisePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    })
], ExercisePageRoutingModule);



/***/ }),

/***/ 1751:
/*!***************************************************!*\
  !*** ./src/app/pages/exercise/exercise.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisePageModule": () => (/* binding */ ExercisePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise-routing.module */ 2529);
/* harmony import */ var _exercise_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise.page */ 3577);
/* harmony import */ var _components_exercise_card_exercise_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/exercise-card/exercise-card.component */ 2284);








let ExercisePageModule = class ExercisePageModule {
};
ExercisePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _exercise_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExercisePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_exercise_page__WEBPACK_IMPORTED_MODULE_1__.ExercisePage, _components_exercise_card_exercise_card_component__WEBPACK_IMPORTED_MODULE_2__.ExerciseCardComponent]
    })
], ExercisePageModule);



/***/ }),

/***/ 3577:
/*!*************************************************!*\
  !*** ./src/app/pages/exercise/exercise.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExercisePage": () => (/* binding */ ExercisePage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _exercise_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exercise.page.html?ngResource */ 2942);
/* harmony import */ var _exercise_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise.page.scss?ngResource */ 6541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/exercise-db.service */ 3597);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ 4382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);









let ExercisePage = class ExercisePage {
  constructor(exerciseDBService, loadingCtr, database, route, router, ionRouterOutlet, menu) {
    this.exerciseDBService = exerciseDBService;
    this.loadingCtr = loadingCtr;
    this.database = database;
    this.route = route;
    this.router = router;
    this.ionRouterOutlet = ionRouterOutlet;
    this.menu = menu;
    this.exercises = [];
    this.searchTypes = _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.SearchTypesToString;
    this.muscles = _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.MusclesToString;
    this.bodyparts = _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.BodyPartsToString;
    this.equipment = _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.EquipmentToString;
    this.enumSearchTypeKeys = [];
    this.enumMuscleKeys = [];
    this.enumBodyPartKeys = [];
    this.enumEquipmentKeys = [];
    this.enumMuscleValues = [];
    this.enumBodyPartValues = [];
    this.enumEquipmentValues = [];
    this.searchTypeSelected = null;
    this.targetSelected = null;
    this.exerciseID = null;
    this.enumSearchTypeKeys = Object.keys(this.searchTypes);
    this.enumMuscleKeys = Object.keys(this.muscles);
    this.enumBodyPartKeys = Object.keys(this.bodyparts);
    this.enumEquipmentKeys = Object.keys(this.equipment);
    this.enumMuscleValues = Object.values(_services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.Muscles);
    this.enumBodyPartValues = Object.values(_services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.BodyParts);
    this.enumEquipmentValues = Object.values(_services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.Equipment);
    this.searchTypeSelected = this.enumSearchTypeKeys[0];
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation() !== null) {
        if (this.router.getCurrentNavigation().extras.state) {
          this.trainingPlanId = this.router.getCurrentNavigation().extras.state.trainingPlanId;
          console.log(this.trainingPlanId);
        }
      }
    });
  }

  ngOnInit() {
    if (this.ionRouterOutlet.canGoBack()) {
      this.menu.enable(false);
    }
  }

  loadData() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('LoadData gestartet');
      console.log(_this.searchTypeSelected);
      console.log(_this.targetSelected);
      const loading = yield _this.loadingCtr.create({
        message: 'Loading..',
        spinner: 'bubbles'
      });
      yield loading.present();

      if (_this.searchTypeSelected === _this.enumSearchTypeKeys[3]) {
        // with ID
        console.log(_this.exerciseID.length);

        if (_this.exerciseID.length === 4) {
          _this.database.getExerciseByNumericId(_this.exerciseID).subscribe(result => {
            console.log(result);
            _this.exercises = result;
          });
        } else {
          console.log(_this.exerciseID);

          _this.database.getExerciseById(_this.exerciseID).subscribe(result => {
            console.log(result);
            _this.exercises = [];

            _this.exercises.push(result);
          });
        }
      } else if (_this.searchTypeSelected === _this.enumSearchTypeKeys[0]) {
        // All Exercises
        _this.database.getAllExercises().subscribe(result => {
          console.log(result);
          _this.exercises = result;
        });
      } else {
        // with Target
        _this.database.getExercisesBySearch(_this.searchTypeSelected, _this.targetSelected).subscribe(result => {
          console.log(result);
          _this.exercises = result;
        });
      }

      yield loading.dismiss();
    })();
  }

};

ExercisePage.ctorParameters = () => [{
  type: _services_exercise_db_service__WEBPACK_IMPORTED_MODULE_3__.ExerciseDBService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonRouterOutlet
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController
}];

ExercisePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-exercise',
  template: _exercise_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_exercise_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], ExercisePage);


/***/ }),

/***/ 2933:
/*!**********************************************************************************!*\
  !*** ./src/app/components/exercise-card/exercise-card.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGVyY2lzZS1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 6541:
/*!**************************************************************!*\
  !*** ./src/app/pages/exercise/exercise.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "app-exercise-card {\n  width: 100%;\n  max-width: 258px;\n}\n\n.can-go-back ion-menu-button {\n  display: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4ZXJjaXNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdFO0VBQ0Usd0JBQUE7QUFBSiIsImZpbGUiOiJleGVyY2lzZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtZXhlcmNpc2UtY2FyZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDI1OHB4O1xufVxuXG4uY2FuLWdvLWJhY2sge1xuICBpb24tbWVudS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG59XG4iXX0= */";

/***/ }),

/***/ 9927:
/*!**********************************************************************************!*\
  !*** ./src/app/components/exercise-card/exercise-card.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-card button (click)=\"openDetails()\">\n  <ion-card-header>\n    <ion-img [src]=\"exercise.gifUrl\"></ion-img>\n    <ion-card-title class=\"ion-text-center\">{{exercise.name}}</ion-card-title>\n  </ion-card-header>\n</ion-card>\n\n\n";

/***/ }),

/***/ 2942:
/*!**************************************************************!*\
  !*** ./src/app/pages/exercise/exercise.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Exercise</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Exercise</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-list>\n    <ion-item>\n      <ion-select interface=\"popover\" placeholder=\"Wähle den Filter\" [(ngModel)]=\"searchTypeSelected\">\n        <ion-select-option *ngFor=\"let search of enumSearchTypeKeys\"\n                           [value]=\"search\">{{searchTypes[search]}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"(searchTypeSelected !== enumSearchTypeKeys[0] && searchTypeSelected !== enumSearchTypeKeys[3])\">\n    <ion-select interface=\"popover\" placeholder=\"Wähle aus.\" [(ngModel)]=\"targetSelected\">\n      <div *ngIf=\"searchTypeSelected === enumSearchTypeKeys[1]\"> <!-- By BodyPart selected -->\n        <ion-select-option *ngFor=\"let part of enumBodyPartKeys; let i = index\"\n                           [value]=this.enumBodyPartValues[i]>{{bodyparts[part]}}</ion-select-option>\n      </div>\n      <div *ngIf=\"searchTypeSelected === enumSearchTypeKeys[2]\"> <!-- By Muscle selected -->\n        <ion-select-option *ngFor=\"let musc of enumMuscleKeys; let i = index\"\n                           [value]=\"this.enumMuscleValues[i]\">{{muscles[musc]}}</ion-select-option>\n      </div>\n      <div *ngIf=\"searchTypeSelected === enumSearchTypeKeys[4]\"> <!-- By Equipment selected -->\n        <ion-select-option *ngFor=\"let equip of enumEquipmentKeys; let i = index\"\n                           [value]=\"this.enumEquipmentValues[i]\">{{equipment[equip]}}</ion-select-option>\n      </div>\n    </ion-select>\n    </ion-item>\n    <ion-item *ngIf=\"searchTypeSelected === enumSearchTypeKeys[3]\">\n      <ion-input placeholder=\"Geben Sie die ID ein.\" [(ngModel)]=\"exerciseID\"></ion-input>\n    </ion-item>\n      <ion-button class=\"search\" type=\"button\" (click)=\"loadData()\">Suchen</ion-button>\n  </ion-list>\n  <ion-list>\n    <ion-item position=\"floating\" button *ngFor=\"let exercise of exercises\">\n      <app-exercise-card [exercise]=\"exercise\" [trainingPlanId]=\"trainingPlanId\"></app-exercise-card>\n    </ion-item>\n  </ion-list>\n  <ion-button [routerLink]=\"'/exercise/0111'\" routerDirection=\"forward\" routerLinkActive=\"true\"></ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_exercise_exercise_module_ts.js.map