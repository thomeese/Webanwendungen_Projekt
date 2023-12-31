"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6552);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6552);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6552:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ 7053);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/database.service */ 4382);










let LoginPage = class LoginPage {
  constructor(formbuilder, authService, loadingController, alertController, router, dataService, menu) {
    this.formbuilder = formbuilder;
    this.authService = authService;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.dataService = dataService;
    this.menu = menu;
    this.register = false;
  }

  signIn() {
    var _this = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingController.create();
      yield loading.present();
      const loggedInUser = yield _this.authService.signIn(_this.userForm.value);
      yield loading.dismiss();

      if (loggedInUser) {
        yield _this.router.navigateByUrl('/home', {
          replaceUrl: true
        });
        yield _this.menu.enable(true);
      } else {
        yield _this.displayAlert('Anmeldung fehlgeschlagen', 'Bitte versuchen sie es erneut.');
      }
    })();
  }

  signUp() {
    var _this2 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create();
      yield loading.present();

      const data = _this2.registerData.getRawValue();

      const loggedInUser = yield _this2.authService.signUp(data.email, data.password);
      console.log(loggedInUser);
      const newUser = {
        uid: loggedInUser.uid,
        firstname: data.firstname,
        surname: data.surname,
        birthdate: data.birthdate,
        size: data.size.replace(',', '.'),
        email: data.email
      };

      _this2.dataService.addUser(newUser);

      yield loading.dismiss();

      if (loggedInUser) {
        yield _this2.router.navigateByUrl('/home', {
          replaceUrl: true
        });
        yield _this2.menu.enable(true);
      } else {
        yield _this2.displayAlert('Registrierung fehlgeschlagen', 'Bitte versuchen sie es Erneut');
      }
    })();
  }

  displayAlert(header, message) {
    var _this3 = this;

    return (0,_Users_manuel_Desktop_GitLab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        header,
        message,
        buttons: ['Schließen']
      });
      yield alert.present();
    })();
  }

  ngOnInit() {
    this.userForm = this.formbuilder.group({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [])
    });
    const docDate = new Date();
    this.registerData = this.formbuilder.group({
      firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z][a-zA-Z .,\'-]*$')]),
      surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^[a-zA-Z][a-zA-Z .,\'-äÄßüÜ]*$')]),
      birthdate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(new Date(docDate).toISOString().slice(0, -1)),
      size: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('[1-2]{1}[.,]{1}[0-9]{2}')]),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, //mind. 1 Großbuchstaben, 1 Kleinbuchstaben, mind. 8 Zeichen und mind. 1 Sonderzeichen, mind. 1 Zahl
      _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$')]),
      password2: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
    }, {
      validator: this.isEquals('password', 'password2')
    });
    this.menu.enable(false);
  }

  isEquals(string1, string2) {
    return checkForm => {
      const value1 = checkForm.controls[string1];
      const value2 = checkForm.controls[string2];

      if (value1.value === value2.value) {
        return value2.setErrors(null);
      } else {
        return value2.setErrors({
          notEquivalent: true
        });
      }
    };
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _services_database_service__WEBPACK_IMPORTED_MODULE_4__.DatabaseService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 4382:
/*!**********************************************!*\
  !*** ./src/app/services/database.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseService": () => (/* binding */ DatabaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ 6466);
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.service */ 7053);




var SearchTypes;
(function (SearchTypes) {
    SearchTypes["exercise"] = "/exercise";
    SearchTypes["exercisesList"] = "";
    SearchTypes["bodyPart"] = "/bodyPart";
    SearchTypes["bodyPartList"] = "/bodyPartList";
    SearchTypes["exerciseByID"] = "/exercise";
    SearchTypes["targetMuscle"] = "/target";
    SearchTypes["targetMuscleList"] = "/targetList";
    SearchTypes["equipment"] = "/equipment";
    SearchTypes["equipmentList"] = "/equipmentList";
})(SearchTypes || (SearchTypes = {}));
let DatabaseService = class DatabaseService {
    constructor(firestore, authService) {
        this.firestore = firestore;
        this.authService = authService;
    }
    getUserData() {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(userRef, { idField: 'userId' });
    }
    getUserDataById(id) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(userDocRef, { idField: 'userId' });
    }
    getUserDataByUid(uid) {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        const userQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(userRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', uid));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(userQuery, { idField: 'userId' });
    }
    addUser(user) {
        const userRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'userData');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(userRef, user);
    }
    updateUser(user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${user.docId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(userDocRef, {
            firstname: user.firstname, surname: user.surname,
            birthdate: user.birthdate, size: user.size, email: user.email
        });
    }
    deleteUser(user) {
        const userDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `userData/${user.docId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(userDocRef);
    }
    addTrainingPlan(plan) {
        console.log(plan);
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(trainingPlanRef, plan);
    }
    updateTrainingPlan(trainingPlanId, plan) {
        const trainingPlanDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${trainingPlanId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(trainingPlanDocRef, { uid: plan.uid, name: plan.name, description: plan.description,
            period: plan.period, periodInterval: plan.periodInterval, exercises: plan.exercises });
    }
    deleteTrainingPlan(plan) {
        const trainingPlanDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${plan.trainingPlanId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(trainingPlanDocRef);
    }
    getTrainingsPlan() {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(trainingPlanRef, { idField: 'trainingPlanId' });
    }
    getTrainingsPlanById(id) {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `trainingPlan/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(trainingPlanRef, { idField: 'trainingPlanId' });
    }
    getUserTrainingsPlan() {
        const trainingPlanRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'trainingPlan');
        const trainQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(trainingPlanRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', this.authService.getUserId()));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(trainQuery, { idField: 'trainingPlanId' });
    }
    getAllSetLoggingByUid() {
        const setLoggingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'setLogging');
        const setLogginQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(setLoggingRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', this.authService.getUserId()));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(setLogginQuery, { idField: 'setLoggingId' });
    }
    addSetLogging(setLogging) {
        const setLoggingRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'setLogging');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(setLoggingRef, setLogging);
    }
    updateSetLogging(setLogging) {
        const setLoggingDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `setLogging/${setLogging.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(setLoggingDocRef, {
            exerciseId: setLogging.excerciseId, trainingPlanId: setLogging.trainingPlanId,
            userId: setLogging.uid, date: setLogging.date, time: setLogging.time, sets: setLogging.sets,
        });
    }
    deleteSetLogging(setLogging) {
        const setLoggingDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `setLogging/${setLogging.id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(setLoggingDocRef);
    }
    addWalk(walk) {
        const walkRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'walkData');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(walkRef, walk);
    }
    getWalkDataById(id) {
        const walkRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `walkData/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(walkRef, { idField: 'walkId' });
    }
    getWalkDataByUid() {
        const walkRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'walkData');
        const walkQuery = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(walkRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('uid', '==', this.authService.getUserId()));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(walkQuery, { idField: 'walkId' });
    }
    deleteWalk(walk) {
        const walkRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `walkData/${walk.walkId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(walkRef);
    }
};
DatabaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService }
];
DatabaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], DatabaseService);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/assets/images/victor-freitas-unsplash.jpg\") no-repeat center center / cover;\n  display: flex;\n  position: fixed;\n}\n\nion-datetime {\n  color: var(--ion-text-color, rgba(255, 255, 255, 0.16)) !important;\n}\n\nion-label {\n  padding-left: 5px;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  opacity: 0.9;\n  height: 600px;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 25px;\n}\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n\n/*\nion-content {\n  --background: url(\"/assets/victor-freitas-unsplash.jpg\") no-repeat center center / cover;\n  display: flex;\n}\n\n.content {\n  opacity: 0.75;\n  position: absolute;\n  max-width: 500px;\n  bottom: 20vh;\n  z-index: 15;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 15px;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtGQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUFlLGtFQUFBO0FBRWY7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBRUEsUUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFJRjs7QUFEQTs7O0VBQUE7O0FBS0E7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy92aWN0b3ItZnJlaXRhcy11bnNwbGFzaC5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGZpeGVkO1xufVxuXG5pb24tZGF0ZXRpbWUgeyBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNikpICFpbXBvcnRhbnQ7IH1cblxuaW9uLWxhYmVsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG5pb24tY29sICB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbnRlbnQge1xuICBvcGFjaXR5OiAwLjk7XG4gIGhlaWdodDogNjAwcHg7XG4gIC8vbWF4LXdpZHRoOiA1MDBweDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XG59XG4vLyBIZWFkZXIgZHVyY2hzaWNodGlnXG4vKi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn0qL1xuXG4vKlxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvdmljdG9yLWZyZWl0YXMtdW5zcGxhc2guanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250ZW50IHtcbiAgb3BhY2l0eTogMC43NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBib3R0b206IDIwdmg7XG4gIHotaW5kZXg6IDE1O1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSovXG5cblxuXG4iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content fullscreen=\"true\">\n  <div class=\"main\">\n    <ion-card class=\"content\">\n      <div class=\"login ion-padding-top\">\n        <div class=\"ion-text-center\">\n          <ion-text color=\"black\">\n            <h1>Willkommen bei Train-Smarter</h1>\n          </ion-text>\n        </div>\n        <form [formGroup]=\"userForm\" (submit)=\"signIn()\" *ngIf=\"!register\">\n          <ion-item>\n            <ion-icon name=\"mail-outline\"></ion-icon>\n            <ion-label>Email:</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"userForm.dirty\">Geben sie ein gültige Email-Adresse ein.</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\n            <ion-label>Passwort:</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n          <ion-grid>\n            <ion-row>\n              <ion-col></ion-col>\n              <ion-col>\n                <ion-button type=\"submit\" [disabled]=\"!userForm.valid\">Anmelden</ion-button>\n              </ion-col>\n              <ion-col></ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n              </ion-col>\n              <ion-col>\n                <ion-button fill=\"clear\" *ngIf=\"!register\" (click)=\"this.register=true\">Registrieren</ion-button>\n              </ion-col>\n              <ion-col>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </form>\n        <form [formGroup]=\"registerData\" (submit)=\"signUp()\" *ngIf=\"register\">\n          <ion-item>\n            <ion-label>Vorname:</ion-label>\n            <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Vorname darf nicht leer sein. z.B. Max</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Nachname:</ion-label>\n            <ion-input type=\"text\" formControlName=\"surname\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Nachname darf nicht leer sein. z.B. Mustermann\n            </ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Geburtsdatum:</ion-label>\n            <ion-datetime-button displayFormat=\"MM-DD-YYYY\" datetime=\"datetime\"></ion-datetime-button>\n            <ion-modal [keepContentsMounted]=\"true\">\n              <ng-template>\n                <ion-datetime displayFormat=\"DD.MM.YYYY\"\n                              presentation=\"date\"\n                              id=\"datetime\"\n                              formControlName=\"birthdate\"\n                              show-default-buttons=\"true\"\n                >\n                </ion-datetime>\n              </ng-template>\n            </ion-modal>\n          </ion-item>\n          <ion-item>\n            <ion-label>Körpergröße:</ion-label>\n            <ion-input type=\"text\" formControlName=\"size\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Körpergröße darf nicht leer sein. z.B. 1.80\n            </ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Email:</ion-label>\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Geben sie eine gültige Email-Adresse ein</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password:</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Geben Sie bitte ein gültiges Passwort ein</ion-note>\n          </ion-item>\n          <ion-item>\n            <ion-label>Password wiederholen:</ion-label>\n            <ion-input type=\"password\" formControlName=\"password2\"></ion-input>\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Passwörter Stimmen nicht überein</ion-note>\n          </ion-item>\n          <ion-item lines=\"none\">\n            <ion-button type=\"submit\" [disabled]=\"!registerData.valid\">Registrieren</ion-button>\n            <ion-button fill=\"clear\" class=\"\" slot=\"end\" type=\"button\" (click)=\"this.register=false\">Abbrechen</ion-button>\n          </ion-item>\n        </form>\n      </div>\n    </ion-card>\n  </div>\n</ion-content>\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map
