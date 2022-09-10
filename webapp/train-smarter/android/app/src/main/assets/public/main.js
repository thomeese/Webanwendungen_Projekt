(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 8224:
/*!*********************************************!*\
  !*** ./src/app/animations/nav-animation.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageAnimation": () => (/* binding */ pageAnimation)
/* harmony export */ });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 3819);

const pageAnimation = (baseEL, opts) => {
    const DURATION = 300;
    const animationCtrl = new _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.AnimationController();
    // Standard Transition
    const rootTransition = animationCtrl.create()
        .duration(opts.duration || DURATION)
        .easing('cubic-bezier(0.3,0,0.66,1)');
    // entfernt ion-page-invisible, damit die neue Page direkt sichtbar ist
    const enteringPage = animationCtrl.create()
        .addElement(opts.enteringEl)
        .beforeRemoveClass('ion-page-invisible');
    // erstellt eine Animation für die verlassende Seite
    const leavingPage = animationCtrl.create().addElement(opts.leavingEl);
    // eigentliche Animation für die das Eintreten und Verlassen der jeweiligen Page
    if (opts.direction === 'forward') {
        enteringPage.fromTo('opacity', '0.1', '1').fromTo('transform', 'translateX(100%)', 'translateX(0)');
        leavingPage.fromTo('opacity', '1', '0.1');
    }
    else {
        leavingPage.fromTo('transform', 'translateX(0)', 'translateX(100%)');
        enteringPage.fromTo('opacity', '0.1', '1');
    }
    // Fuegt Animation für das Eintreten und Verlassen der Seiten hinzu
    rootTransition.addAnimation(enteringPage);
    rootTransition.addAnimation(leavingPage);
    return rootTransition;
};


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/authentication.service */ 7053);




//
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 1053)).then(m => m.LoginPageModule)
    }, {
        path: 'analytics',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"), __webpack_require__.e("default-src_app_pages_exercise_exercise_module_ts"), __webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("src_app_pages_analytics_analytics_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/analytics/analytics.module */ 2679)).then(m => m.AnalyticsPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    }, {
        path: 'training-plan',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_training-plan_training-plan_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/training-plan/training-plan.module */ 2589)).then(m => m.TrainingPlanPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    },
    {
        path: 'exercise',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"), __webpack_require__.e("default-src_app_pages_exercise_exercise_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exercise/exercise.module */ 1751)).then(m => m.ExercisePageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_swiper_angular_fesm2015_swiper_angular_mjs"), __webpack_require__.e("default-src_app_pages_training-plan_training-plan_module_ts"), __webpack_require__.e("src_app_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    }, {
        path: 'live-training',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_live-training_live-training_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/live-training/live-training.module */ 1879)).then(m => m.LiveTrainingPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    }, {
        path: 'training-plan-detail',
        // eslint-disable-next-line max-len
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"), __webpack_require__.e("default-src_app_pages_exercise_exercise_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_training-plan_training-plan-detail_training-plan-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/training-plan/training-plan-detail/training-plan-detail.module */ 7491)).then(m => m.TrainingPlanDetailPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    },
    {
        path: 'exercise-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_exercise_exercise-detail_exercise-detail_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_services_database_service_ts-_9e570")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exercise/exercise-detail/exercise-detail.module */ 4496)).then(m => m.ExerciseDetailPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    },
    {
        path: 'exercise-logging',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_exercise-logging_exercise-logging_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/exercise-logging/exercise-logging.module */ 7245)).then(m => m.ExerciseLoggingPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    },
    {
        path: 'walk-tracker',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_walk-tracker_walk-tracker_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/walk-tracker/walk-tracker.module */ 6425)).then(m => m.WalkTrackerPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    }, {
        path: 'walk-tracker-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_walk-tracker_walk-tracker-detail_walk-tracker-detail_module_ts"), __webpack_require__.e("src_app_services_database_service_ts-_9e571")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/walk-tracker/walk-tracker-detail/walk-tracker-detail.module */ 2969)).then(m => m.WalkTrackerDetailPageModule),
        canActivate: [_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/authentication.service */ 7053);
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/settings.service */ 452);









let AppComponent = class AppComponent {
  constructor(router, authService, settings) {
    this.router = router;
    this.authService = authService;
    this.settings = settings;
    this.appPages = [{
      title: 'home',
      url: 'home',
      icon: 'home'
    }, {
      title: 'live-training',
      url: 'live-training',
      icon: 'heart'
    }, {
      title: 'analytics',
      url: 'analytics',
      icon: 'analytics'
    }, {
      title: 'Trainingspläne',
      url: 'training-plan',
      icon: 'file-tray-full'
    }, {
      title: 'Übungen',
      url: 'exercise',
      icon: 'list'
    }, {
      title: 'Lauf',
      url: 'walk-tracker',
      icon: 'walk'
    }];
    console.log(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.isNativePlatform());
    console.log(_capacitor_core__WEBPACK_IMPORTED_MODULE_3__.Capacitor.getPlatform());
  }

  signOut() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.authService.signOut();
      yield _this.router.navigateByUrl('/login', {
        replaceUrl: true
      });
      document.location.reload();
    })();
  }

};

AppComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__.AuthenticationService
}, {
  type: _services_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService
}];

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_fire_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/app */ 9150);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ 2111);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _animations_nav_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations/nav-animation */ 8224);
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @firebase/auth */ 931);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 287);

















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot({ navAnimation: _animations_nav_animation__WEBPACK_IMPORTED_MODULE_3__.pageAnimation }), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.provideFirebaseApp)(() => {
                const app = (0,_angular_fire_app__WEBPACK_IMPORTED_MODULE_12__.initializeApp)(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase);
                if (_capacitor_core__WEBPACK_IMPORTED_MODULE_4__.Capacitor.isNativePlatform()) {
                    (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.initializeAuth)(app, {
                        persistence: _firebase_auth__WEBPACK_IMPORTED_MODULE_5__.indexedDBLocalPersistence
                    });
                }
                return app;
            }),
            (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.provideAuth)(() => (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_13__.getAuth)()),
            (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.provideFirestore)(() => (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_14__.getFirestore)()),
            (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__.provideStorage)(() => (0,_angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__.getStorage)()),],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy }, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__.Geolocation],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 7053:
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ 1577);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let AuthenticationService = class AuthenticationService {
  constructor(auth, router, menu) {
    this.auth = auth;
    this.router = router;
    this.menu = menu;
    this.isAuthetificated = false;
    this.checkAllreadyLockedIn();
  }

  checkAllreadyLockedIn() {
    this.auth.onAuthStateChanged(user => {
      if (user) {
        console.log('Nutzer bereits eingeloggt!');
        this.user = user;
        this.isAuthetificated = true;
        this.menu.enable(true);
        this.router.navigateByUrl('/home', {
          replaceUrl: true
        });
      } else {
        this.isAuthetificated = false;
        return false;
      }
    });
    return true;
  }

  signUp(email, password) {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.createUserWithEmailAndPassword)(_this.auth, email, password);

        if (_this.user) {
          _this.isAuthetificated = true;
          _this.user = _this.user.user;
        }

        return _this.user;
      } catch (ex) {
        return null;
      }
    })();
  }

  signIn({
    email,
    password
  }) {
    var _this2 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.user = yield (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithEmailAndPassword)(_this2.auth, email, password);

        if (_this2.user) {
          _this2.isAuthetificated = true;
          _this2.user = _this2.user.user;
        }

        return _this2.user;
      } catch (ex) {
        return null;
      }
    })();
  }

  signOut() {
    return (0,_angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(this.auth);
  }

  getEmail() {
    return this.user.email;
  }

  getUserId() {
    return this.user.uid;
  }

  getUserDocId() {
    return this.userDocId;
  }

  setUserDocId(id) {
    this.userDocId = id;
  }

  canActivate(route) {
    if (this.isAuthetificated) {
      return true;
    }

    this.router.navigateByUrl('/login', {
      replaceUrl: true
    });
    return false;
  }

};

AuthenticationService.ctorParameters = () => [{
  type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__.Auth
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController
}];

AuthenticationService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], AuthenticationService);


/***/ }),

/***/ 452:
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsService": () => (/* binding */ SettingsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SettingsService = class SettingsService {
    constructor() {
        this.settings = {
            darkModeOn: false,
            theme: 'light'
        };
        if (localStorage.getItem('settings')) {
            this.settings = JSON.parse(localStorage.getItem('settings'));
        }
        this.activateTheme();
    }
    toggleDarkmode(event) {
        console.log(event);
        if (event.detail.checked) {
            this.settings.darkModeOn = true;
            this.settings.theme = 'dark';
            this.persist();
            this.activateTheme();
        }
        else {
            this.settings.darkModeOn = false;
            this.settings.theme = 'light';
            this.persist();
            this.activateTheme();
        }
    }
    persist() {
        localStorage.setItem('settings', JSON.stringify(this.settings));
    }
    activateTheme() {
        document.body.setAttribute('color-theme', this.settings.theme);
    }
};
SettingsService.ctorParameters = () => [];
SettingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SettingsService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    firebase: {
        projectId: 'train-smarter-7f991',
        appId: '1:104247468122:web:c3155e6b998f835caf7863',
        storageBucket: 'train-smarter-7f991.appspot.com',
        locationId: 'europe-west',
        apiKey: 'AIzaSyBcORqRncftgWiO9tX4Vlq7by70-LobNP4',
        authDomain: 'train-smarter-7f991.firebaseapp.com',
        messagingSenderId: '104247468122',
    },
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-17d9d367_js-node_modules_ionic_core_dist_esm_t-a480aa",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-app {\n  margin-top: env(safe-area-inset-top);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n\nion-item.toggle {\n  margin-left: 10px;\n  --inner-padding-start: 0px;\n  --padding-start: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtBQUFGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsMkRBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7QUFKRjs7QUFPQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxrQkFBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFMRjs7QUFRQTtFQUNFLGlDQUFBO0FBTEY7O0FBUUE7RUFDRSxvQ0FBQTtFQUNBLDBDQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFMRiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1hcHB7XG4gIG1hcmdpbi10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKTtcbiAgbWFyZ2luLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pXG59XG5cbmlvbi1pdGVtLnRvZ2dsZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAtLWlubmVyLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Inbox</ion-list-header>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n                      routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <div>\n          <ion-item lines=\"none\">\n            <ion-label>Loggout</ion-label>\n            <ion-button slot=\"start\" color=\"danger\" (click)=\"this.signOut()\">\n              <ion-icon name=\"log-out-outline\"></ion-icon>\n            </ion-button>\n          </ion-item>\n            <ion-fab vertical=\"bottom\" horizontal=\"start\">\n              <ion-fab-button color=\"dark\">\n                <ion-icon name=\"settings\"></ion-icon>\n              </ion-fab-button>\n              <ion-fab-list side=\"end\">\n                <ion-item class=\"toggle\" lines=\"none\">\n                  <ion-label>Darkmode</ion-label>\n                  <ion-toggle slot=\"start\" *ngIf=\"settings.settings.darkModeOn\" checked={true}\n                              (ionChange)='settings.toggleDarkmode($event)'></ion-toggle>\n                  <ion-toggle slot=\"start\" *ngIf=\"!settings.settings.darkModeOn\"\n                              (ionChange)='settings.toggleDarkmode($event)'></ion-toggle>\n                </ion-item>\n              </ion-fab-list>\n            </ion-fab>\n        </div>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map