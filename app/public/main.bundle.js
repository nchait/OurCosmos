webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pic{\r\n    -webkit-transform: (0,-40px);\r\n            transform: (0,-40px)\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<script type=\"text/javascript\" src=\"node_modules/auth0-js/build/auth0.js\"></script>\r\n<div style=\"text-align:center\">\r\n  <h1> </h1><h4> <br></h4>\r\n\r\n  <img  width=\"100%\" (click)=\"goHome()\" alt=\"Our Cosmos Logo\" src=\"https://i.imgur.com/K4ygS6T.jpg\">\r\n\r\n<!-- The following line inserts the sample component -->\r\n<router-outlet></router-outlet>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n       <em class =\"text-center\">Copyright &copy; Noah Chait</em>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.authService.checkCookie(this.onResponse.bind(this));
    }
    AppComponent.prototype.onResponse = function (theInfo) {
        console.log(theInfo);
    };
    AppComponent.prototype.goHome = function () {
        this.router.navigate['/'];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sample_sample_component__ = __webpack_require__("../../../../../src/app/sample/sample.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_service__ = __webpack_require__("../../../../../src/app/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_signup_signup_component__ = __webpack_require__("../../../../../src/app/auth/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_signin_signin_component__ = __webpack_require__("../../../../../src/app/auth/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__ = __webpack_require__("../../../../angular2-cookie/services/cookies.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pictures_show_search_show_search_component__ = __webpack_require__("../../../../../src/app/pictures/show-search/show-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pictures_search_service__ = __webpack_require__("../../../../../src/app/pictures/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__collections_collect_service__ = __webpack_require__("../../../../../src/app/collections/collect.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__collections_view_collection_view_collection_component__ = __webpack_require__("../../../../../src/app/collections/view-collection/view-collection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__settings_documents_documents_component__ = __webpack_require__("../../../../../src/app/settings/documents/documents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__settings_settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__settings_documentation_service__ = __webpack_require__("../../../../../src/app/settings/documentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__settings_dmca_dmca_component__ = __webpack_require__("../../../../../src/app/settings/dmca/dmca.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__settings_doc_management_doc_management_component__ = __webpack_require__("../../../../../src/app/settings/doc-management/doc-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sanitize_service__ = __webpack_require__("../../../../../src/app/sanitize.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var appRoutes = [
    {
        path: 'settings',
        component: __WEBPACK_IMPORTED_MODULE_22__settings_settings_settings_component__["a" /* SettingsComponent */]
    },
    {
        path: 'generic',
        component: __WEBPACK_IMPORTED_MODULE_4__sample_sample_component__["a" /* SampleComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_15__home_page_home_page_component__["a" /* HomePageComponent */]
    },
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_8__auth_signin_signin_component__["a" /* SigninComponent */]
    },
    {
        path: 'signup',
        component: __WEBPACK_IMPORTED_MODULE_7__auth_signup_signup_component__["a" /* SignupComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_16__pictures_show_search_show_search_component__["a" /* ShowSearchComponent */]
    },
    {
        path: 'mycosmos',
        component: __WEBPACK_IMPORTED_MODULE_20__collections_view_collection_view_collection_component__["a" /* ViewCollectionComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__sample_sample_component__["a" /* SampleComponent */],
                __WEBPACK_IMPORTED_MODULE_7__auth_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__auth_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_11__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__home_page_home_page_component__["a" /* HomePageComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pictures_show_search_show_search_component__["a" /* ShowSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_20__collections_view_collection_view_collection_component__["a" /* ViewCollectionComponent */],
                __WEBPACK_IMPORTED_MODULE_21__settings_documents_documents_component__["a" /* DocumentsComponent */],
                __WEBPACK_IMPORTED_MODULE_22__settings_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__settings_dmca_dmca_component__["a" /* DmcaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__settings_doc_management_doc_management_component__["a" /* DocManagementComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng2_bootstrap_modal__["BootstrapModalModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__sample_sample_component__["a" /* SampleComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__sample_service__["a" /* SampleService */], __WEBPACK_IMPORTED_MODULE_26__sanitize_service__["a" /* SanitizeService */], __WEBPACK_IMPORTED_MODULE_12__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_14_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_17__pictures_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_19__collections_collect_service__["a" /* CollectService */], __WEBPACK_IMPORTED_MODULE_23__settings_documentation_service__["a" /* DocumentationService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__("../../../../angular2-cookie/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http, _cookieService) {
        this.http = http;
        this._cookieService = _cookieService;
        this.username = 0;
        this.headers = null;
        this.myKeyA = 'our-cosmos-cookie'; //session cookie
        this.myKeyB = 'our-cosmos-id'; //user id
    }
    AuthService.prototype.getInfo = function () {
        return this.username;
    };
    AuthService.prototype.logOut = function () {
        this._cookieService.put(this.myKeyA, '0'); //remove cookies
        this._cookieService.put(this.myKeyB, '0');
        this.username = 0; //remove username
    };
    AuthService.prototype.checkCookie = function (callback_fun) {
        var _this = this;
        var cookieA = this._cookieService.get(this.myKeyA); //look for the saved cookies
        var cookieB = this._cookieService.get(this.myKeyB);
        this.http.get('/api/users/cookie/' + cookieB + '&' + cookieA).subscribe(function (data) {
            var x = data;
            if (_this.username == undefined) {
                console.log('called');
                _this.logOut();
                return callback_fun(_this.username);
            }
            _this.username = x.username; //if so set username
            console.log('cookie response ' + x.message);
            callback_fun(_this.username); //give the user the username
        });
    };
    AuthService.prototype.attemptSignup = function (callback_fun, email, username, password) {
        var body = ({
            'email': email,
            'username': username,
            'password': password
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        console.log('sign up body ' + body);
        this.http.post('/api/users/', body, { headers: this.headers }).subscribe(function (data) {
            var x = data;
            console.log('sign up response ' + x.message);
            callback_fun(x.message);
        });
    };
    AuthService.prototype.attemptSignin = function (callback_fun, email, password) {
        var _this = this;
        var body = ({
            'email': email,
            'password': password
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(body);
        this.http.post('/api/users/signin', body, { headers: this.headers }).subscribe(function (data) {
            console.log(data);
            var x = data;
            _this._cookieService.put(_this.myKeyA, x.cookie); //set the cookies regardless because if not correct it will mean nothing
            _this._cookieService.put(_this.myKeyB, x.id);
            _this.username = x.username; //set username internally
            callback_fun(x.message);
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    {{outcome}}\r\n</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\r\n          </div>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Sign In</button>\r\n        </form>\r\n  </div>\r\n</div>\r\n<h1>No account yet?</h1>\r\n\r\n<a class=\"btn btn-primary btn-lg\" (click)=\"onClick()\">Sign Up Here</a>\r\n<app-navbar></app-navbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
import { Router } from '@angular/router';
private router: Router
this.router.navigate(['/']);
*/
var SigninComponent = (function () {
    function SigninComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.outcome = '';
        this.authService.logOut();
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var email = form.value.email;
        var password = form.value.password;
        console.log(email);
        if (email.length < 3 || password.length < 3) {
            this.outcome = 'all lengths must be larger than 3';
            return;
        }
        var x = email.split('@'); //validate email for @ and .   
        if (x.length != 2) {
            this.outcome = 'invalid email';
            return;
        }
        x = x[1].split('.');
        if (x.length != 2) {
            this.outcome = 'invalid email';
            return;
        }
        this.authService.attemptSignin(this.onResponse.bind(this), email, password); //send the log in to auth service  
    };
    SigninComponent.prototype.onResponse = function (res) {
        if (res == 200) {
            this.outcome = 'Success';
            this.router.navigate(['/mycosmos']); //show their collections
        }
        else if (res == 210) {
            this.outcome = 'you are not verified';
        }
        else if (res == 211) {
            this.outcome = 'invalid password';
        }
        else if (res == 212) {
            this.outcome = 'invalid email';
        }
        else {
            this.outcome = 'inexplicable error please reload the page and try again';
        }
    };
    SigninComponent.prototype.onClick = function () {
        this.router.navigate(['/signup']); //move to sign up
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__("../../../../../src/app/auth/signin/signin.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\r\n    {{outcome}}\r\n</h1>\r\n<div class=\"row\">\r\n  <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <form (ngSubmit)=\"onSignup(f)\" #f=\"ngForm\">\r\n          <div class=\"form-group\">\r\n            <label for=\"email\">Email</label>\r\n            <input type=\"email\" id=\"email\" name=\"email\" ngModel class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"title\">Title</label>\r\n              <input type=\"title\" id=\"title\" name=\"title\" ngModel class=\"form-control\">\r\n          </div>\r\n          <div class=\"form-group\">\r\n              <label for=\"password\">Password</label>\r\n              <input type=\"password\" id=\"password\" name=\"password\" ngModel class=\"form-control\">\r\n          </div>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\r\n        </form>\r\n  </div>\r\n</div>\r\n<h1>Have an account?</h1>\r\n\r\n<a class=\"btn btn-primary btn-lg\" (click)=\"onClick()\">Sign In Here</a>\r\n\r\n<app-navbar></app-navbar>\r\n"

/***/ }),

/***/ "../../../../../src/app/auth/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.outcome = '';
        this.authService.logOut(); //log them out if they are here
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSignup = function (form) {
        var email = form.value.email;
        var x = email.split('@');
        if (x.length != 2) {
            this.outcome = 'invalid email'; //validate email for @ and .
            return;
        }
        x = x[1].split('.');
        if (x.length != 2) {
            this.outcome = 'invalid email';
            return;
        }
        var username = form.value.title;
        var password = form.value.password;
        if (email.length < 3 || password.length < 3 || username.length < 3) {
            this.outcome = 'all lengths must be larger than 3';
            return;
        }
        this.authService.attemptSignup(this.onResponse.bind(this), email, username, password); //attempt sign up
    };
    SignupComponent.prototype.onResponse = function (res) {
        if (res == 200) {
            this.outcome = 'Success';
        }
        else if (res == 208) {
            this.outcome = 'Email Taken';
        }
        else {
            this.outcome = 'inexplicable error please reload the page and try again';
        }
    };
    SignupComponent.prototype.onClick = function () {
        this.router.navigate(['/signin']); //go to sign in
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */]
            ],
            declarations: [],
            exports: []
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/auth/signup/signup.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/collections/collect.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectService = (function () {
    function CollectService(http) {
        this.http = http;
    }
    CollectService.prototype.newCollection = function (callback_fun, pub, name, descrip, image, creator) {
        //create a new collection
        var body = ({
            'open': pub,
            'name': name,
            'descrip': descrip,
            'picture': image,
            'creator': creator
        });
        //console.log(body);
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        //console.log(body);    
        this.http.post('/api/collections/', body, { headers: this.headers }).subscribe(function (data) {
            //console.log(data);
            var x = data;
            callback_fun(x.message);
        });
    };
    CollectService.prototype.rateCollection = function (callback_fun, collId, myId, val) {
        var body = ({
            'collId': collId,
            'userId': myId,
            'rate': val //send a rating
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(body);
        this.http.post('/api/rating/', body, { headers: this.headers }).subscribe(function (data) {
            var x = data;
            console.log(data);
            callback_fun(x.message);
        });
    };
    CollectService.prototype.deleteCollection = function (callback_fun, id) {
        this.http.delete('/api/collections/' + id).subscribe(function (data) {
            callback_fun(data);
        });
    };
    CollectService.prototype.sendDMCA = function (callback_fun, id) {
        this.http.get('/api/dmca/' + id).subscribe(function (data) {
            callback_fun(data); //report an image
        });
    };
    CollectService.prototype.fixDMCA = function (callback_fun, id) {
        this.http.delete('/api/dmca/' + id).subscribe(function (data) {
            callback_fun(data); //restore an image
        });
    };
    CollectService.prototype.getDmca = function (callback_fun) {
        this.http.get('/api/dmca').subscribe(function (data) {
            callback_fun(data); //get all reported collections
        });
    };
    CollectService.prototype.updateCollection = function (callback_fun, item) {
        var body = ({
            'doc': item
        }); //update collections values
        //console.log(body);
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        //console.log(body);    
        this.http.put('/api/collections/', body, { headers: this.headers }).subscribe(function (data) {
            //console.log(data);
            var x = data;
            callback_fun(x.message);
        });
    };
    CollectService.prototype.getPublics = function (callback_fun) {
        this.http.get('/api/collections').subscribe(function (data) {
            callback_fun(data);
        });
    };
    CollectService.prototype.getCollections = function (callback_fun, info) {
        this.http.get('/api/collections/' + info).subscribe(function (data) {
            console.log('the collection data: ' + data);
            callback_fun(data);
        });
    };
    CollectService.prototype.addCollections = function (callback_fun, item) {
        var body = ({
            'doc': item //add or delete from a collection
        });
        console.log(body);
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(body);
        this.http.post('/api/collections/' + item._id, body, { headers: this.headers }).subscribe(function (data) {
            var x = data;
            console.log(data);
            callback_fun(x.message);
        });
    };
    CollectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CollectService);
    return CollectService;
}());



/***/ }),

/***/ "../../../../../src/app/collections/view-collection/view-collection.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide-bullets {\r\n    list-style:none;\r\n    margin-left: -40px;\r\n    margin-top:20px;\r\n}\r\n.thumbnail {\r\n    padding: 0;\r\n}\r\n\r\n.carousel-inner>.item>img, .carousel-inner>.item>a>img {\r\n    width: 100%;\r\n}\r\n#slider-thumbs {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    white-space: nowrap;\r\n}\r\n.no-border{\r\n    border: 0px;\r\n}\r\n.holder{ \r\n    height: 500px;\r\n}\r\n.nobigger{\r\n    max-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/collections/view-collection/view-collection.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Choose a collection to view </h1>\r\n<ng-container *ngIf=\"owner == true\">\r\n  <button class=\"btn btn-red\" (click)=\"deleteFromColl()\"> Delete all instances of this picture from your collection!</button>\r\n</ng-container>\r\n<ng-container *ngIf=\"show == 1;else second\">\r\n    <div class=\"superBox\">\r\n        <div class=\"container\">\r\n            <div id=\"main_area\">\r\n                <!-- Slider -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\" id=\"slider-thumbs\">\r\n                        <!-- Bottom switcher of slider -->\r\n                        <ul class=\"hide-bullets\" *ngFor=\"let x of pictures; let i = index\" >\r\n                            <li class=\"col-sm-12\">\r\n                                <ng-container *ngIf=\"x != undefined;else nothing\">                      \r\n                                    <button ion-item class=\"thumbnail\" (click)=\"onSelect(i)\"> \r\n                                        <img src = {{x}}/>                                   \r\n                                    </button>\r\n                                </ng-container> \r\n                            </li>  \r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"col-xs-12\" id=\"slider\">\r\n                            <!-- Top part of the slider -->\r\n                            <div class=\"row holder\">\r\n                                <div class=\"col-sm-8\" id=\"carousel-bounding-box align-middle\">\r\n                                    <div class=\"carousel slide\" id=\"myCarousel\">\r\n                                        <!-- Carousel items -->\r\n                                        <div class=\"carousel-inner \">\r\n                                            <div class=\"active item \" data-slide-number= i>\r\n                                                <img class = \"nobigger\" src= {{pictures[currentpic]}}>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- Carousel nav -->\r\n                                        <button class=\"left carousel-control no-border\" (click)=prev()>\r\n                                            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                                        </button>\r\n                                        <button class=\"right carousel-control no-border\" (click)=\"next()\">\r\n                                            <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/Slider-->\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ng-container *ngIf=\"info != 0\">\r\n        <h1>{{validity}}</h1>\r\n        <div class=\"btn-group\" *ngFor=\"let y of collections; let j = index\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addto(j)\">{{y.name}}</button>                    \r\n        </div> \r\n        <br><br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"revealNew(1)\">Create New Collection With This Image</button>        \r\n        <br><br>\r\n        <ng-container *ngIf=\"theNew != 0\">\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n                    <form (ngSubmit)=\"onCreate(n)\" #n=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\">Name</label>\r\n                            <input type=\"text\" id=\"name\" name=\"name\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"descrip\">Description</label>\r\n                            <input type=\"text\" id=\"descrip\" name=\"descrip\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <label for=\"public\">Public</label>\r\n                                <input type=\"checkbox\" id=\"public\" name=\"public\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Create New Collection With this Image</button>\r\n                        <br><br>\r\n                        <button class=\"btn btn-primary\" (click)=revealNew(0)>Close</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n      </ng-container>  \r\n    </ng-container>   \r\n    <ng-container *ngIf=\"info != 0\">        \r\n        <div class=\"container\">            \r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"text-center\">Name</th>\r\n                  <th class=\"text-center\">Descripton</th>\r\n                  <th class=\"text-center\">Public</th>                  \r\n                  <th class=\"text-center\">Actions</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody  *ngFor=\"let x of collections; let i = index\">\r\n                      \r\n                <tr>\r\n                  <td>{{x.name}}</td>\r\n                  <td>{{x.descrip}}</td>\r\n                  <td>{{x.open}}</td>\r\n                  <td>\r\n                    <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"view(i, true)\">View</button>                    \r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"edit(i)\">Edit</button>                    \r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteColl(i)\">Delete</button>                    \r\n                      </div>\r\n                  </td>       \r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>    \r\n    </ng-container>\r\n    <br>\r\n    <h1>{{duplicate}}</h1>\r\n    <ng-container *ngIf=\"toEdit != -1\">\r\n        <br>\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n                <form (ngSubmit)=\"onChange(m)\" #m=\"ngForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"myName\">Name</label>\r\n                        <br>current value: {{preset[0]}}\r\n                        <input type=\"text\" id=\"myName\" name=\"myName\" ngModel class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"myDescrip\">Description</label>\r\n                        <br>current value: {{preset[1]}}\r\n                        <input type=\"text\" id=\"myDescrip\" name=\"myDescrip\" ngModel class=\"form-control\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"myPublic\">Public</label>\r\n                        <br>current value: {{preset[2]}}\r\n                        <input type=\"checkbox\" id=\"myPublic\" name=\"myPublic\" ngModel class=\"form-control\">\r\n                    </div>\r\n                    <button class=\"btn btn-primary\" type=\"submit\">Submit Changes</button>\r\n                    <br><br>\r\n                    <button class=\"btn btn-primary\" (click)=edit(-1)>Close</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n<ng-template #second>\r\n</ng-template>   \r\n<br><br>\r\n<h1>{{rateValidity}}</h1>\r\n<br><br>\r\n  <div class=\"container\">            \r\n      <table class=\"table table-bordered\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"text-center\">Name</th>\r\n            <th class=\"text-center\">Descripton</th>\r\n            <th class=\"text-center\">Actions</th>\r\n            <th class=\"text-center\">Rating</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody  *ngFor=\"let x of collectionsO; let i = index\">\r\n          <ng-container *ngIf=\"x.creator != info\">      \r\n            <tr>\r\n              <td>{{x.name}}</td>\r\n              <td>{{x.descrip}}</td>\r\n              <td>\r\n                <div class=\"btn-group\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"view(i, false)\">view</button>                    \r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"report(i)\">Report</button>                    \r\n                    </div>\r\n              </td>\r\n              <td>\r\n                <ng-container *ngIf =\"x.publicRating==undefined || x.publicRating==0; else Second\">\r\n                  Be the first to rate!\r\n                </ng-container>\r\n                <ng-template #Second>\r\n                    {{x.publicRating}}              \r\n                </ng-template>\r\n                <br>\r\n                <ng-container *ngIf=\"info != 0\">\r\n                  <div class=\"btn-group\" *ngFor=\"let y of numbers; let j = index\">\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click)=\"rate(i, j)\">{{y}}</button>                   \r\n                    </div>\r\n                </ng-container>\r\n              </td>        \r\n            </tr>\r\n          </ng-container>\r\n        </tbody>\r\n      </table>\r\n    </div>    \r\n<app-navbar></app-navbar>\r\n<br><br>\r\n"

/***/ }),

/***/ "../../../../../src/app/collections/view-collection/view-collection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCollectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_service__ = __webpack_require__("../../../../../src/app/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pictures_search_service__ = __webpack_require__("../../../../../src/app/pictures/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections_collect_service__ = __webpack_require__("../../../../../src/app/collections/collect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewCollectionComponent = (function () {
    function ViewCollectionComponent(collectService, dialogService, modalService, authService, _sampleService, _searchService) {
        this.collectService = collectService;
        this.dialogService = dialogService;
        this.modalService = modalService;
        this.authService = authService;
        this._sampleService = _sampleService;
        this._searchService = _searchService;
        // Initialize response with empty string
        this.preset = ['', '', ''];
        this.response = ''; //output for user
        this.show = 0; //show the slider
        this.pictures = new Array(100); //pictures showing
        this.currentpic = 0; //index of current picture
        this.theNew = 0; //the new collection window variable
        this.toEdit = -1; //edit window not open
        this.numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //for ratings
        this.authService.checkCookie(this.onAuth.bind(this)); //are we signed in
        this.collectService.getPublics(this.setPublics.bind(this)); //get the public collections
        this.info = this.authService.getInfo(); //try to get the username quickly
        console.log(this.info);
        this.currentpic = 0;
    }
    ViewCollectionComponent.prototype.ngOnInit = function () { };
    ViewCollectionComponent.prototype.edit = function (index) {
        this.toEdit = index;
        this.preset[0] = this.collections[index].name;
        this.preset[1] = this.collections[index].descrip;
        this.preset[2] = this.collections[index].open;
    };
    ViewCollectionComponent.prototype.rate = function (collO, value) {
        this.collectService.rateCollection(this.onRate.bind(this), this.collectionsO[collO]._id, this.info, value + 1); //rate a collection   
    };
    ViewCollectionComponent.prototype.onRate = function (res) {
        console.log('result from rate: ' + res);
        if (res == 200) {
            this.rateValidity = 'rating submitted'; //output response
        }
        else if (res == 230) {
            this.rateValidity = 'rating adjusted';
        }
        this.refresh(res); //refresh the ratings
    };
    ViewCollectionComponent.prototype.onChange = function (form) {
        this.collections[this.toEdit].descrip = form.value.myDescrip; //submit edits of collection
        this.collections[this.toEdit].open = form.value.myPublic;
        this.collections[this.toEdit].name = form.value.myName;
        this.collectService.updateCollection(this.onUpdate.bind(this), this.collections[this.toEdit]);
    };
    ViewCollectionComponent.prototype.onUpdate = function (res) {
        if (res == 223) {
            this.duplicate = 'Name already in use, choose another name';
            //name in use
        }
        if (res == 200) {
            this.duplicate = '';
            this.toEdit = -1;
        }
        this.refresh(res);
    };
    ViewCollectionComponent.prototype.deleteColl = function (index) {
        this.collectService.deleteCollection(this.refresh.bind(this), this.collections[index]._id);
    };
    ViewCollectionComponent.prototype.deleteFromColl = function () {
        var _this = this;
        var newArray = []; //remove a picture from the collection
        this.pictures.forEach(function (element) {
            if (_this.pictures[_this.currentpic] == element) {
            }
            else {
                newArray.push(element);
            }
        });
        console.log(this.pictures);
        console.log(newArray);
        if (newArray.length == 0) {
            this.validity = "you cant delete your last picture!"; //no empty collections
            return;
        }
        this.pictures = newArray;
        this.collections[this.index].pictures = newArray;
        this.collectService.updateCollection(this.refresh.bind(this), this.collections[this.index]);
    };
    ViewCollectionComponent.prototype.refresh = function (res) {
        this.collectService.getPublics(this.setPublics.bind(this));
        this.collectService.getCollections(this.setCollections.bind(this), this.info);
    };
    ViewCollectionComponent.prototype.report = function (index) {
        this.collectService.sendDMCA(this.refresh.bind(this), this.collectionsO[index]._id);
    };
    ViewCollectionComponent.prototype.view = function (index, owner) {
        console.log();
        this.currentpic = 0;
        this.show = 1;
        this.owner = owner;
        if (owner) {
            this.index = index;
            console.log(this.collections);
            this.pictures = this.collections[index].pictures;
        }
        else {
            console.log(this.collectionsO);
            this.pictures = this.collectionsO[index].pictures;
        }
    };
    ViewCollectionComponent.prototype.onAuth = function (theInfo) {
        this.info = theInfo;
        if (theInfo == undefined) {
            this.info = 0;
        }
        console.log('usernme: ' + theInfo);
        if (this.info != 1) {
            this.collectService.getCollections(this.setCollections.bind(this), this.info);
        }
    };
    ViewCollectionComponent.prototype.setPublics = function (res) {
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < res.length - 1; i++) {
                var x1 = res[i].publicRating;
                if (x1 == undefined) {
                    x1 = 0;
                }
                var x2 = res[i + 1].publicRating;
                if (x2 == undefined) {
                    x2 = 0;
                }
                if (x1 < x2) {
                    var temp = res[i];
                    res[i] = res[i + 1];
                    res[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        this.collectionsO = res;
        console.log(this.collectionsO.length);
    };
    ViewCollectionComponent.prototype.setCollections = function (res) {
        console.log(res);
        this.collections = res.body;
        console.log('setcollections called, ' + this.collections);
        console.log(this.info);
    };
    ViewCollectionComponent.prototype.addto = function (index) {
        //console.log(index);
        this.collections[index].pictures.push(this.pictures[this.currentpic]);
        console.log(this.collections[index]);
        this.collectService.addCollections(this.confirmAdd.bind(this), this.collections[index]);
    };
    ViewCollectionComponent.prototype.confirmAdd = function (res) {
        if (res == 222) {
            this.validity = 'error server side!';
        }
        else if (res == 200) {
            this.validity = 'Success';
        }
        else {
            this.validity = 'Inexplicable Error';
        }
    };
    ViewCollectionComponent.prototype.onSelect = function (index) {
        this.show = 0;
        console.log(index);
        this.currentpic = index; //select a pic from the slider
        this.show = 1;
    };
    ViewCollectionComponent.prototype.revealNew = function (x) {
        this.theNew = x;
    };
    ViewCollectionComponent.prototype.onCreate = function (form) {
        this.collectService.newCollection(this.afterCreate.bind(this), form.value.public, form.value.name, form.value.descrip, this.pictures[this.currentpic], this.info);
    };
    ViewCollectionComponent.prototype.afterCreate = function (res) {
        if (res == 220) {
            this.validity = 'choose a new name';
        }
        else if (res == 200) {
            this.validity = 'Success'; //on response from create collections
            this.collectService.getCollections(this.setCollections.bind(this), this.info);
            this.collectService.getPublics(this.setPublics.bind(this));
            this.theNew = 0;
        }
        else {
            this.validity = 'Inexplicable Error';
        }
    };
    ViewCollectionComponent.prototype.next = function () {
        this.show = 0;
        this.currentpic++;
        if (this.pictures[this.currentpic] == undefined) {
            this.currentpic = 0;
        }
        this.show = 1;
    };
    ViewCollectionComponent.prototype.prev = function () {
        this.show = 0;
        this.currentpic--;
        console.log(this.currentpic);
        if (this.currentpic < 0) {
            this.currentpic = 99;
            while (this.pictures[this.currentpic] == undefined) {
                console.log(this.currentpic);
                this.currentpic--;
                if (this.currentpic == 0) {
                    break;
                }
            }
            console.log(this.currentpic);
        }
        this.show = 1;
    };
    ViewCollectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-collection',
            template: __webpack_require__("../../../../../src/app/collections/view-collection/view-collection.component.html"),
            styles: [__webpack_require__("../../../../../src/app/collections/view-collection/view-collection.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__collections_collect_service__["a" /* CollectService */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__sample_service__["a" /* SampleService */], __WEBPACK_IMPORTED_MODULE_2__pictures_search_service__["a" /* SearchService */]])
    ], ViewCollectionComponent);
    return ViewCollectionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-light fixed-bottom\" style=\"background-color: #e3f2fd;\">\r\n  <!-- Navbar content -->\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imprinted-box{\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class = \"jumbotron blockquote\">\r\n \r\n    <h3 class=\"display-6\">I've given you enough rope to hang yourself with.</h3>\r\n    <footer class=\"blockquote-footer\">SE3316a <cite title=\"Source Title\">Jagath</cite></footer>\r\n\r\n</div>\r\n<app-navbar></app-navbar>\r\n\r\n<div class=\"imprinted-box\">\r\n  <ng-container *ngIf=\"info == 0;else second\"> \r\n    <h1 class=\"display-4\">  New to The Cosmos?</h1>\r\n    <p>\r\n      Welcome to our journey through the stars! Over just six days Noah Chait,<br>\r\n      a lowly programmer who has minimal experience in front-end programming<br>\r\n      has blossomed into a full stack developer. Join him as he documents his love<br>\r\n      for space and exploration. He utilized NASA's open picture library API to create<br>\r\n      a flawless user interface which allows you to store multiple collections of your<br>\r\n      favourite pictures and rate those collections as many times as you want.\r\n    </p>\r\n  </ng-container>\r\n  <ng-template #second>\r\n    <ng-container *ngIf=\"info === 'admin';else third\">\r\n        You have logged in as the Admin. \r\n\r\n    </ng-container>\r\n    </ng-template>\r\n    <ng-template #third>\r\n        <h1 class=\"display-4\">  Welcome back to The Cosmos?</h1>\r\n        <p>\r\n        Welcome to our journey through the stars! Over just six days Noah Chait,<br>\r\n        a lowly programmer who has minimal experience in front-end programming<br>\r\n        has blossomed into a full stack developer. Join him as he documents his love<br>\r\n        for space and exploration. He utilized NASA's open picture library API to create<br>\r\n        a flawless user interface which allows you to store multiple collections of your<br>\r\n        favourite pictures and rate those collections as many times as you want.<br>\r\n        <br><br>\r\n        As a member of the community, you can publish delete and edit your own<br>\r\n        collections of NASA’s Pictures. You can also rate other collections within <br>\r\n        the community.<br>\r\n        <br><br>\r\n        \r\n      </p>\r\n  </ng-template>\r\n</div>\r\n<a routerLink=\"/mycosmos\">\r\n  <button class=\"btn btn-primary\">\r\n      view the collections here!\r\n  </button>\r\n</a>\r\n<div class=\"container\">            \r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center\">Name</th>\r\n          <th class=\"text-center\">Descripton</th>\r\n          <th class=\"text-center\">Rating</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody  *ngFor=\"let x of collections; let i = index\">\r\n              \r\n        <tr>\r\n          <td>{{x.name}}</td>\r\n          <td>{{x.descrip}}</td>\r\n          <td>\r\n            <ng-container *ngIf =\"x.publicRating==undefined || x.publicRating==0; else Second\">\r\n              Be the first to rate!\r\n            </ng-container>\r\n            <ng-template #Second>\r\n                {{x.publicRating}}              \r\n            </ng-template>\r\n          </td>        \r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collections_collect_service__ = __webpack_require__("../../../../../src/app/collections/collect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePageComponent = (function () {
    function HomePageComponent(collectService, authService) {
        this.collectService = collectService;
        this.authService = authService;
        this.authService.checkCookie(this.onResponse.bind(this)); //check cookies
        this.info = this.authService.getInfo(); //set user
        console.log(this.info);
        this.collectService.getPublics(this.show.bind(this)); //get the public collections
    }
    HomePageComponent.prototype.onResponse = function (theInfo) {
        this.info = theInfo;
        if (theInfo == undefined) {
            this.info = 0;
        }
        console.log(theInfo);
    };
    HomePageComponent.prototype.show = function (res) {
        console.log('show me!');
        // console.log(res[4].publicRating);
        // console.log(res[3].publicRating);
        // if (res[4].publicRating>res[5].publicRating){
        //   //console.log('good');
        // }
        var swapped;
        do {
            swapped = false;
            for (var i = 0; i < res.length - 1; i++) {
                var x1 = res[i].publicRating;
                if (x1 == undefined) {
                    x1 = 0;
                }
                var x2 = res[i + 1].publicRating;
                if (x2 == undefined) {
                    x2 = 0;
                }
                if (x1 < x2) {
                    var temp = res[i];
                    res[i] = res[i + 1];
                    res[i + 1] = temp;
                    swapped = true;
                }
            }
        } while (swapped);
        console.log(res);
        if (res.length > 10) {
            this.collections = res.slice(0, 10);
        }
        else {
            this.collections = res;
        }
        console.log(this.collections.length);
    };
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__collections_collect_service__["a" /* CollectService */], __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header navbar-fixed-top\">\r\n        <div class=\"collapse navbar-collapse navbar-fixed-top\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li class=\"navbar-brand\">  </li>          \r\n                <li><a routerLink=\"/\" class=\"navbar-brand\">Our Cosmos</a></li>\r\n\r\n                <ng-container *ngIf=\"info == 0;else second\"> \r\n                        <li><div routerLink=\"/signin\" class=\"navbar-brand\">Sign In</div></li>                        \r\n                        <li><div routerLink=\"/mycosmos\" class=\"navbar-brand\">View Cosmos</div></li>                        \r\n                    </ng-container>\r\n                <ng-template #second>\r\n                    <li><a routerLink=\"/mycosmos\" class=\"navbar-brand\">My Cosmos</a></li>                        \r\n                    <ng-container *ngIf=\"info === 'admin'\">\r\n                        <li><a href=\"/settings\" class=\"navbar-brand\">Settings</a></li>                    \r\n                    </ng-container>\r\n                </ng-template>\r\n                <li><a routerLink=\"/search\" class=\"navbar-brand\">Search</a></li>                                    \r\n            </ul>\r\n            <ul class=\"navbar-nav navbar-right\">\r\n    \r\n               <ng-container *ngIf=\"info == 0;else fourth\"> \r\n                    <li><a routerLink=\"/signup\" class=\"navbar-brand\">Sign Up</a></li>                        \r\n                </ng-container>\r\n                <ng-template #fourth>\r\n                    <li> <div routerLink=\"/signin\" class=\"navbar-brand\">Log Out</div></li>                        \r\n                </ng-template>     \r\n                <li><a class=\"navbar-brand\"> </a></li>\r\n                \r\n            </ul>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pictures_search_service__ = __webpack_require__("../../../../../src/app/pictures/search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(_searchService, authService, router) {
        this._searchService = _searchService;
        this.authService = authService;
        this.router = router;
        this.authService.checkCookie(this.onResponse.bind(this));
        this.info = this.authService.getInfo(); //get user for navbar options
    } //all done using html and routerLink
    NavbarComponent.prototype.onResponse = function (theInfo) {
        if (theInfo == undefined) {
            theInfo = 0;
        }
        this.info = theInfo;
        console.log(this.info);
    };
    //this.onResponse.bind(this)
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__pictures_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

/*
import { Router } from '@angular/router';
private router: Router
this.router.navigate(['/']);
*/ 


/***/ }),

/***/ "../../../../../src/app/pictures/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.query = '';
        this.response = '';
        this.fill = '';
        this.pictures = new Array(100);
    }
    SearchService.prototype.getData = function (callback_fun, params) {
        this.query = params;
        this.http.get('/api/nasa/search/' + params).subscribe(function (data) {
            var x = data;
            var pictures = new Array(100);
            var j;
            var res = x.body.collection.items;
            //console.log(res);
            //console.log(res[0].links[0].href);
            for (j in res) {
                pictures[j] = res[j].links[0].href;
            }
            callback_fun(pictures);
            //console.log(data);  
            //        callback_fun(pictures);
        });
    };
    SearchService.prototype.getPrevData = function (callback_fun) {
        var params = this.query;
        this.http.get('/api/nasa/search/' + params).subscribe(function (data) {
            var x = data;
            var pictures = new Array(100);
            var j;
            var res = x.body.collection.items;
            //console.log(res);
            //console.log(res[0].links[0].href);
            for (j in res) {
                pictures[j] = res[j].links[0].href;
            }
            callback_fun(pictures);
            //console.log(data);  
            //        callback_fun(pictures);
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "../../../../../src/app/pictures/show-search/show-search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hide-bullets {\r\n    list-style:none;\r\n    margin-left: -40px;\r\n    margin-top:20px;\r\n}\r\n.thumbnail {\r\n    padding: 0;\r\n}\r\n\r\n.carousel-inner>.item>img, .carousel-inner>.item>a>img {\r\n    width: 100%;\r\n}\r\n#slider-thumbs {\r\n    height: 500px;\r\n    overflow-y: scroll;\r\n    white-space: nowrap;\r\n}\r\n.no-border{\r\n    border: 0px;\r\n}\r\n.holder{ \r\n    height: 500px;\r\n}\r\n.nobigger{\r\n    max-height: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pictures/show-search/show-search.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"navbar-form form-inline my-2 my-lg-0\" (ngSubmit)=\"onSearch(f)\" #f=\"ngForm\">\r\n    <input name=\"search\" id=\"search\" class=\"form-control mr-sm-2\" type=\"text\" ngModel placeholder=\"Search\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n</form>\r\n<ng-container *ngIf=\"show == 1;else second\">\r\n    <div class=\"superBox\">\r\n        <div class=\"container\">\r\n            <div id=\"main_area\">\r\n                <!-- Slider -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-3\" id=\"slider-thumbs\">\r\n                        <!-- Bottom switcher of slider -->\r\n                        <ul class=\"hide-bullets\" *ngFor=\"let x of pictures; let i = index\" >\r\n                            <li class=\"col-sm-12\">\r\n                                <ng-container *ngIf=\"x != undefined;else nothing\">                      \r\n                                    <button ion-item class=\"thumbnail\" (click)=\"onSelect(i)\"> \r\n                                        <img src = {{x}}/>                                   \r\n                                    </button>\r\n                                </ng-container> \r\n                            </li>  \r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"col-sm-8\">\r\n                        <div class=\"col-xs-12\" id=\"slider\">\r\n                            <!-- Top part of the slider -->\r\n                            <div class=\"row holder\">\r\n                                <div class=\"col-sm-8\" id=\"carousel-bounding-box align-middle\">\r\n                                    <div class=\"carousel slide\" id=\"myCarousel\">\r\n                                        <!-- Carousel items -->\r\n                                        <div class=\"carousel-inner \">\r\n                                            <div class=\"active item \" data-slide-number= i>\r\n                                                <img class = \"nobigger\" src= {{pictures[currentpic]}}>\r\n                                            </div>\r\n                                        </div>\r\n                                        <!-- Carousel nav -->\r\n                                        <button class=\"left carousel-control no-border\" (click)=prev()>\r\n                                            <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n                                        </button>\r\n                                        <button class=\"right carousel-control no-border\" (click)=\"next()\">\r\n                                            <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n                                        </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--/Slider-->\r\n                </div>\r\n        \r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"info != 0\">\r\n        <h1>{{validity}}</h1>\r\n        <div class=\"btn-group\" *ngFor=\"let y of collections; let j = index\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"addto(j)\">{{y.name}}</button>                    \r\n        </div> \r\n        <br><br>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"revealNew(1)\">Create New Collection</button>        \r\n        <ng-container *ngIf=\"theNew != 0\">\r\n            <br>\r\n            <div class=\"row\">\r\n                <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n                    <form (ngSubmit)=\"onCreate(n)\" #n=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"name\">Name</label>\r\n                            <input type=\"text\" id=\"name\" name=\"name\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"descrip\">Description</label>\r\n                            <input type=\"text\" id=\"descrip\" name=\"descrip\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                                <label for=\"public\">Public</label>\r\n                                <input type=\"checkbox\" id=\"public\" name=\"public\" ngModel class=\"form-control\">\r\n                        </div>\r\n                        <button class=\"btn btn-primary\" type=\"submit\">Create New Collection With this Image</button>\r\n                        <br><br>\r\n                        <button class=\"btn btn-primary\" (click)=revealNew(0)>Close</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-container>\r\n<ng-template #second>\r\n    searching...\r\n</ng-template>        \r\n<app-navbar></app-navbar>"

/***/ }),

/***/ "../../../../../src/app/pictures/show-search/show-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_service__ = __webpack_require__("../../../../../src/app/sample.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/pictures/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__collections_collect_service__ = __webpack_require__("../../../../../src/app/collections/collect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowSearchComponent = (function () {
    function ShowSearchComponent(collectService, dialogService, modalService, authService, _sampleService, _searchService) {
        this.collectService = collectService;
        this.dialogService = dialogService;
        this.modalService = modalService;
        this.authService = authService;
        this._sampleService = _sampleService;
        this._searchService = _searchService;
        this.response = '';
        this.fill = '';
        this.show = 0;
        this.selected = 0;
        this.pictures = new Array(100);
        this.currentpic = 1;
        this.theNew = 0;
        //this._sampleService.getData(this.onResponse.bind(this),'');
        this._searchService.getPrevData(this.onSearchReturn.bind(this));
        this.authService.checkCookie(this.onAuth.bind(this));
        this.info = this.authService.getInfo();
        console.log(this.info);
        this.currentpic = 1;
    }
    ShowSearchComponent.prototype.ngOnInit = function () {
    };
    ShowSearchComponent.prototype.onAuth = function (theInfo) {
        this.info = theInfo;
        if (theInfo == undefined) {
            this.info = 0;
        }
        console.log(theInfo);
        if (this.info != 1) {
            this.collectService.getCollections(this.setCollections.bind(this), this.info);
        }
    };
    ShowSearchComponent.prototype.setCollections = function (res) {
        console.log(res);
        this.collections = res.body;
    };
    ShowSearchComponent.prototype.onClick = function () {
    };
    ShowSearchComponent.prototype.addto = function (index) {
        //console.log(index);
        this.collections[index].pictures.push(this.pictures[this.currentpic]);
        console.log(this.collections[index]);
        this.collectService.addCollections(this.confirmAdd.bind(this), this.collections[index]);
    };
    ShowSearchComponent.prototype.confirmAdd = function (res) {
        if (res == 222) {
            this.validity = 'error serverside!';
        }
        else if (res == 200) {
            this.validity = 'Success';
        }
        else {
            this.validity = 'Inexplicable Error';
        }
    };
    ShowSearchComponent.prototype.onSelect = function (index) {
        this.show = 0;
        console.log(index);
        this.currentpic = index;
        this.show = 1;
    };
    ShowSearchComponent.prototype.onSearch = function (form) {
        console.log(form.value.search);
        this._searchService.getData(this.onSearchReturn.bind(this), encodeURI(form.value.search));
        this.show = 0;
        this.currentpic = 0;
    };
    ShowSearchComponent.prototype.onResponse = function (res) {
        //console.log(res);
        this.pictures = res;
    };
    ShowSearchComponent.prototype.onSearchReturn = function (res) {
        console.log(res);
        this.pictures = res;
        console.log(this.pictures);
        this.show = 1;
        this.currentpic = 0;
    };
    ShowSearchComponent.prototype.revealNew = function (x) {
        this.theNew = x;
    };
    ShowSearchComponent.prototype.onCreate = function (form) {
        this.collectService.newCollection(this.afterCreate.bind(this), form.value.public, form.value.name, form.value.descrip, this.pictures[this.currentpic], this.info);
    };
    ShowSearchComponent.prototype.afterCreate = function (res) {
        if (res == 220) {
            this.validity = 'choose a new name';
        }
        else if (res == 200) {
            this.validity = 'Success';
            this.collectService.getCollections(this.setCollections.bind(this), this.info);
            this.theNew = 0;
        }
        else {
            this.validity = 'Inexplicable Error';
        }
    };
    ShowSearchComponent.prototype.next = function () {
        this.show = 0;
        this.currentpic++;
        if (this.pictures[this.currentpic] == undefined) {
            this.currentpic = 0;
        }
        this.show = 1;
    };
    ShowSearchComponent.prototype.prev = function () {
        this.show = 0;
        this.currentpic--;
        console.log(this.currentpic);
        if (this.currentpic < 0) {
            this.currentpic = 99;
            while (this.pictures[this.currentpic] == undefined) {
                console.log(this.currentpic);
                this.currentpic--;
                if (this.currentpic == 0) {
                    break;
                }
            }
            console.log(this.currentpic);
        }
        this.show = 1;
    };
    ShowSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-show-search',
            template: __webpack_require__("../../../../../src/app/pictures/show-search/show-search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pictures/show-search/show-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__collections_collect_service__["a" /* CollectService */], __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap_modal__["DialogService"], __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModal */], __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__sample_service__["a" /* SampleService */], __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]])
    ], ShowSearchComponent);
    return ShowSearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sample.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleService = (function () {
    function SampleService(http) {
        this.http = http;
    }
    /*
    * This function receives a callback funtion to send back the aynchronous response from the server.
    */
    SampleService.prototype.getData = function (callback_fun, params) {
        this.http.get('/api/nasa/search/' + params).subscribe(function (data) {
            var x = data;
            var pictures = new Array(100);
            var j;
            var res = x.body.collection.items;
            //console.log(res);
            //console.log(res[0].links[0].href);
            for (j in res) {
                pictures[j] = res[j].links[0].href;
            }
            callback_fun(pictures);
        });
    };
    SampleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SampleService);
    return SampleService;
}());

//    this.http.get('https://images-api.nasa.gov/search?q=apollo%2011&media_type=image').subscribe(data => {
//search?q=apollo%2011&media_type=image
//    this.http.get('/api/bears/5a1c8b46601e6225b9b86697').subscribe(data => { 


/***/ }),

/***/ "../../../../../src/app/sample/sample.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n        <h2>Bordered Table</h2>\r\n        <p>The .table-bordered class adds borders to a table:</p>            \r\n        <table class=\"table table-bordered\">\r\n          <thead>\r\n            <tr>\r\n              <th>name</th>\r\n              <th>Descripton</th>\r\n              <th>actions</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            \r\n            <tr>\r\n              <td>John</td>\r\n              <td>Doe</td>\r\n              <td>john@example.com</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Mary</td>\r\n              <td>Moe</td>\r\n              <td>mary@example.com</td>\r\n            </tr>\r\n            <tr>\r\n              <td>July</td>\r\n              <td>Dooley</td>\r\n              <td>july@example.com</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      "

/***/ }),

/***/ "../../../../../src/app/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__ = __webpack_require__("../../../../ng2-bootstrap-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SampleComponent = (function (_super) {
    __extends(SampleComponent, _super);
    function SampleComponent(dialogService) {
        return _super.call(this, dialogService) || this;
    }
    SampleComponent.prototype.confirm = function () {
        // we set dialog result as true on click on confirm button, 
        // then we can get dialog result from caller code 
        this.result = true;
        this.close();
    };
    SampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__("../../../../../src/app/sample/sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sample/sample.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogService"]])
    ], SampleComponent);
    return SampleComponent;
}(__WEBPACK_IMPORTED_MODULE_1_ng2_bootstrap_modal__["DialogComponent"]));



/***/ }),

/***/ "../../../../../src/app/sanitize.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SanitizeService = (function () {
    function SanitizeService() {
    }
    SanitizeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SanitizeService);
    return SanitizeService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/dmca/dmca.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/dmca/dmca.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">            \r\n    <table class=\"table table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th class=\"text-center\">Name</th>\r\n          <th class=\"text-center\">Descripton</th>\r\n          <th class=\"text-center\">Actions</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody  *ngFor=\"let x of collectionsO; let i = index\">\r\n          <tr>\r\n            <td>{{x.name}}</td>\r\n            <td>{{x.descrip}}</td>\r\n            <td>\r\n              <div class=\"btn-group\">\r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onFix(i)\">Restore</button>                    \r\n                      <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDelete(i)\">Delete</button>                    \r\n                  </div>\r\n            </td>       \r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>    "

/***/ }),

/***/ "../../../../../src/app/settings/dmca/dmca.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DmcaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collections_collect_service__ = __webpack_require__("../../../../../src/app/collections/collect.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DmcaComponent = (function () {
    function DmcaComponent(collectService) {
        this.collectService = collectService;
        this.collectService.getDmca(this.onResponse.bind(this)); //display all dmca complaints and allow user to restore or delete the collections
    }
    DmcaComponent.prototype.ngOnInit = function () {
    };
    DmcaComponent.prototype.onResponse = function (res) {
        console.log(res);
        this.collectionsO = res.body;
    };
    DmcaComponent.prototype.onFix = function (index) {
        this.collectService.fixDMCA(this.refresh.bind(this), this.collectionsO[index]._id);
    };
    DmcaComponent.prototype.onDelete = function (index) {
        this.collectService.deleteCollection(this.refresh.bind(this), this.collectionsO[index]._id);
    };
    DmcaComponent.prototype.refresh = function (res) {
        this.collectService.getDmca(this.onResponse.bind(this));
    };
    DmcaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dmca',
            template: __webpack_require__("../../../../../src/app/settings/dmca/dmca.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/dmca/dmca.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__collections_collect_service__["a" /* CollectService */]])
    ], DmcaComponent);
    return DmcaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/doc-management/doc-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/doc-management/doc-management.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{validity}}</h1>\r\n<form (ngSubmit)=\"onPrivacy(n)\" #n=\"ngForm\" id=\"priv\">\r\n    <div class=\"form-group\">\r\n        <label for=\"val\">Privacy <br> It is recomended to write in word and copy and paste</label><br>\r\n        <input name=\"val\" id=\"val\" class=\"form-control mr-sm-2\" type=\"text\" ngModel placeholder=\"Privacy\">        \r\n    </div>\r\n  <button class=\"btn btn-primary\" type=\"submit\">Submit New Privacy Form</button>    \r\n</form>\r\n<form (ngSubmit)=\"onSecurity(f)\" #f=\"ngForm\" id=\"priv\">\r\n    <div class=\"form-group\">\r\n        <label for=\"val\">Security <br> It is recomended to write in word and copy and paste</label><br>\r\n        <input name=\"val\" id=\"val\" class=\"form-control mr-sm-2\" type=\"text\" ngModel placeholder=\"Security\">        \r\n    </div>\r\n  <button class=\"btn btn-primary\" type=\"submit\">Submit New Security Form</button>    \r\n</form>\r\n<form (ngSubmit)=\"onDmca(g)\" #g=\"ngForm\" id=\"priv\">\r\n    <div class=\"form-group\">\r\n        <label for=\"val\">DMCA <br> It is recomended to write in word and copy and paste</label><br>\r\n        <input name=\"val\" id=\"val\" class=\"form-control mr-sm-2\" type=\"text\" ngModel placeholder=\"DMCA\">        \r\n    </div>\r\n  <button class=\"btn btn-primary\" type=\"submit\">Submit New DMCA Form</button>    \r\n</form>"

/***/ }),

/***/ "../../../../../src/app/settings/doc-management/doc-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentation_service__ = __webpack_require__("../../../../../src/app/settings/documentation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocManagementComponent = (function () {
    function DocManagementComponent(docService) {
        this.docService = docService;
    } //three forms, one for each document to tell the service to 
    DocManagementComponent.prototype.onResponse = function (data) {
        if (data = 200) {
            this.validity = 'success, reload to see!';
        }
    };
    DocManagementComponent.prototype.ngOnInit = function () {
    };
    DocManagementComponent.prototype.onPrivacy = function (form) {
        console.log(form.value.val);
        this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a24750ac2f567cf10d03334');
    };
    DocManagementComponent.prototype.onSecurity = function (form) {
        console.log(form.value.val);
        this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a2477ddc2f567cf10d03335');
    };
    DocManagementComponent.prototype.onDmca = function (form) {
        console.log(form.value.val);
        this.docService.changeDoc(this.onResponse.bind(this), form.value.val, '5a2490bc991275cfce7cbef2');
    };
    DocManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doc-management',
            template: __webpack_require__("../../../../../src/app/settings/doc-management/doc-management.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/doc-management/doc-management.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__documentation_service__["a" /* DocumentationService */]])
    ], DocManagementComponent);
    return DocManagementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/documentation.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationService = (function () {
    function DocumentationService(http) {
        this.http = http;
        this.headers = null;
    }
    DocumentationService.prototype.changeDoc = function (callback_fun, words, id) {
        var body = ({
            'words': words,
            'id': id
        });
        this.headers = new Headers({ 'Content-Type': 'application/json' });
        console.log(body);
        this.http.post('/api/document', body, { headers: this.headers }).subscribe(function (data) {
            var x = data;
            console.log(data);
            callback_fun(x.message);
        });
    };
    DocumentationService.prototype.getDoc = function (callback_fun) {
        this.http.get('/api/document').subscribe(function (data) {
            callback_fun(data);
        });
    };
    DocumentationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DocumentationService);
    return DocumentationService;
}());



/***/ }),

/***/ "../../../../../src/app/settings/documents/documents.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/documents/documents.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> For infringement notices, Email OurCosmosSE3316@gmail.com</h1>\r\n<h1> Privacy Statement</h1>\r\n{{privacy}}\r\n<br><br><br><br>\r\n<h1> Security Statement</h1>\r\n{{security}}\r\n<br><br><br><br>\r\n<h1> Security Statement</h1>\r\n{{dmca}}"

/***/ }),

/***/ "../../../../../src/app/settings/documents/documents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentation_service__ = __webpack_require__("../../../../../src/app/settings/documentation.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentsComponent = (function () {
    function DocumentsComponent(docService) {
        this.docService = docService;
        this.docService.getDoc(this.onResponse.bind(this));
    }
    DocumentsComponent.prototype.ngOnInit = function () {
    };
    DocumentsComponent.prototype.onResponse = function (data) {
        console.log(data[0].info);
        this.privacy = data[1].info;
        this.security = data[2].info;
        this.dmca = data[0].info;
    };
    DocumentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documents',
            template: __webpack_require__("../../../../../src/app/settings/documents/documents.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/documents/documents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__documentation_service__["a" /* DocumentationService */]])
    ], DocumentsComponent);
    return DocumentsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\r\n      <app-documents></app-documents>\r\n      <ng-container *ngIf=\"info == 'admin'\">    \r\n          <app-doc-management></app-doc-management>\r\n          <br> <br>\r\n          <app-dmca></app-dmca>\r\n      </ng-container>\r\n  </div>\r\n</div>\r\n<app-navbar></app-navbar>"

/***/ }),

/***/ "../../../../../src/app/settings/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documentation_service__ = __webpack_require__("../../../../../src/app/settings/documentation.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_service__ = __webpack_require__("../../../../../src/app/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsComponent = (function () {
    function SettingsComponent(authService, docService) {
        this.authService = authService;
        this.docService = docService;
        this.authService.checkCookie(this.onAuth.bind(this));
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    SettingsComponent.prototype.onAuth = function (theInfo) {
        this.info = theInfo;
        if (theInfo == undefined) {
            this.info = 0;
        }
        console.log('usernme: ' + theInfo);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__documentation_service__["a" /* DocumentationService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map