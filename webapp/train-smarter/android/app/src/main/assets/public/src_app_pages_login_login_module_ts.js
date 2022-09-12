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
/* harmony import */ var C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this2.loadingController.create();
      yield loading.present();

      const data = _this2.registerData.getRawValue();

      const loggedInUser = yield _this2.authService.signUp(data.email, data.password);
      const newUser = {
        uid: loggedInUser.user.uid,
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

    return (0,C_Users_tobeh_OneDrive_Desktop_Uni_Gitlab_webanwendungen_projekt_webapp_train_smarter_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    addExercise(exercise) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(exerciseRef, exercise);
    }
    getAllExercises() {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseRef, { idField: 'exerciseId' });
    }
    getExercisesBySearch(type, target) {
        console.log('Hello');
        console.log(type);
        console.log(SearchTypes.bodyPart);
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        if (type === 'exercisesList') {
            console.log(SearchTypes.exercisesList);
            return this.getAllExercises();
        }
        if (type === 'bodyPart') {
            console.log('bodypart');
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('bodypart', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
        if (type === 'targetMuscle') {
            console.log(SearchTypes.targetMuscle);
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('target', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
        if (type === 'equipment') {
            console.log(SearchTypes.equipment);
            const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('equipment', '==', target));
            return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
        }
    }
    getExerciseById(id) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${id}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.docData)(exerciseRef, { idField: 'exerciseId' });
    }
    getExerciseByNumericId(id) {
        const exerciseRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(this.firestore, 'exercises');
        const exerciseQuary = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.query)(exerciseRef, (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.where)('numericId', '==', id));
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.collectionData)(exerciseQuary, { idField: 'exerciseId' });
    }
    updateExercise(exercise) {
        const exerciseDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${exercise.exerciseId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.updateDoc)(exerciseDocRef, {
            name: exercise.name, bodypart: exercise.bodypart,
            equipment: exercise.equipment, gifUrl: exercise.gifUrl, target: exercise.target
        });
    }
    deleteExercise(exercise) {
        const exerciseDocRef = (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(this.firestore, `exercises/${exercise.exerciseId}`);
        return (0,_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)(exerciseDocRef);
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

module.exports = "ion-content {\n  --background: url(\"/assets/images/victor-freitas-unsplash.jpg\") no-repeat center center / cover;\n  display: flex;\n  position: fixed;\n}\n\nion-label {\n  padding-left: 5px;\n}\n\nion-col {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.content {\n  opacity: 0.9;\n  height: 600px;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 25px;\n}\n\n/*.transparent {\n  background: transparent !important;\n  --background: transparent !important;\n}*/\n\n/*\nion-content {\n  --background: url(\"/assets/victor-freitas-unsplash.jpg\") no-repeat center center / cover;\n  display: flex;\n}\n\n.content {\n  opacity: 0.75;\n  position: absolute;\n  max-width: 500px;\n  bottom: 20vh;\n  z-index: 15;\n  padding-left: 5px;\n  padding-right: 5px;\n  border-radius: 15px;\n}\n */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLCtGQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFFQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQUNGOztBQUVBOzs7RUFBQTs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvV3ZEWWRYRHpraHNcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL3ZpY3Rvci1mcmVpdGFzLXVuc3BsYXNoLmpwZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG59XHJcbmlvbi1jb2wgIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDAuOTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIC8vbWF4LXdpZHRoOiA1MDBweDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG59XHJcbi8vIEhlYWRlciBkdXJjaHNpY2h0aWdcclxuLyoudHJhbnNwYXJlbnQge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59Ki9cclxuXHJcbi8qXHJcbmlvbi1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvdmljdG9yLWZyZWl0YXMtdW5zcGxhc2guanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgYm90dG9tOiAyMHZoO1xyXG4gIHotaW5kZXg6IDE1O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbiAqL1xyXG5cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content fullscreen=\"true\">\r\n  <div class=\"main\">\r\n    <ion-card class=\"content\">\r\n      <div class=\"login ion-padding-top\">\r\n        <div class=\"ion-text-center\">\r\n          <ion-text color=\"black\">\r\n            <h1>Willkommen bei Train-Smarter</h1>\r\n          </ion-text>\r\n        </div>\r\n        <form [formGroup]=\"userForm\" (submit)=\"signIn()\" *ngIf=\"!register\">\r\n          <ion-item>\r\n            <ion-icon name=\"mail-outline\"></ion-icon>\r\n            <ion-label>Email:</ion-label>\r\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"userForm.dirty\">Geben sie ein gültige Email-Adresse ein.</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n            <ion-label>Passwort:</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n          </ion-item>\r\n          <ion-grid>\r\n            <ion-row>\r\n              <ion-col></ion-col>\r\n              <ion-col>\r\n                <ion-button type=\"submit\" [disabled]=\"!userForm.valid\">Anmelden</ion-button>\r\n              </ion-col>\r\n              <ion-col></ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n              <ion-col>\r\n              </ion-col>\r\n              <ion-col>\r\n                <ion-button fill=\"clear\" *ngIf=\"!register\" (click)=\"this.register=true\">Registrieren</ion-button>\r\n              </ion-col>\r\n              <ion-col>\r\n              </ion-col>\r\n            </ion-row>\r\n          </ion-grid>\r\n        </form>\r\n        <form [formGroup]=\"registerData\" (submit)=\"signUp()\" *ngIf=\"register\">\r\n          <ion-item>\r\n            <ion-label>Vorname:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"firstname\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Vorname darf nicht leer sein. z.B. Max</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Nachname:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"surname\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Nachname darf nicht leer sein. z.B. Mustermann\r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Geburtsdatum:</ion-label>\r\n            <ion-datetime-button displayFormat=\"MM-DD-YYYY\" datetime=\"datetime\"></ion-datetime-button>\r\n            <ion-modal [keepContentsMounted]=\"true\">\r\n              <ng-template>\r\n                <ion-datetime displayFormat=\"DD.MM.YYYY\"\r\n                              presentation=\"date\"\r\n                              id=\"datetime\"\r\n                              formControlName=\"birthdate\"\r\n                              show-default-buttons=\"true\"\r\n                >\r\n                </ion-datetime>\r\n              </ng-template>\r\n            </ion-modal>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Körpergröße:</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"size\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Feld Körpergröße darf nicht leer sein. z.B. 1.80\r\n            </ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Email:</ion-label>\r\n            <ion-input type=\"email\" formControlName=\"email\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Geben sie eine gültige Email-Adresse ein</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Password:</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Geben Sie bitte ein gültiges Passwort ein</ion-note>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>Password wiederholen:</ion-label>\r\n            <ion-input type=\"password\" formControlName=\"password2\"></ion-input>\r\n            <ion-note slot=\"error\" *ngIf=\"registerData.dirty\">Passwörter Stimmen nicht überein</ion-note>\r\n          </ion-item>\r\n          <ion-item lines=\"none\">\r\n            <ion-button type=\"submit\" [disabled]=\"!registerData.valid\">Registrieren</ion-button>\r\n            <ion-button fill=\"clear\" class=\"\" slot=\"end\" type=\"button\" (click)=\"this.register=false\">Abbrechen</ion-button>\r\n          </ion-item>\r\n        </form>\r\n      </div>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map