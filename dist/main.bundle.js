webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = " "

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n \n \n\n <router-outlet></router-outlet>\n\n "

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Anime Oshirase';
    }
    AppComponent.prototype.isEmptyValue = function (value) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["isEmpty"])(value);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__details_details_component__ = __webpack_require__("./src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__http_service_service__ = __webpack_require__("./src/app/http-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__details_details_component__["a" /* DetailsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'home',
                        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */]
                    },
                    {
                        path: 'details',
                        component: __WEBPACK_IMPORTED_MODULE_6__details_details_component__["a" /* DetailsComponent */]
                    }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_7__http_service_service__["a" /* HttpServiceService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/***/ (function(module, exports) {

module.exports = ".center-youtube{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = " \n<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"assets/images/icons/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"assets/images/icons/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"assets/images/icons/favicon-16x16.png\">\n<link rel=\"stylesheet\" href=\"assets/css/details-page.css\" />\n<link rel=\"mask-icon\" href=\"assets/images/icons/safari-pinned-tab.svg\" color=\"#5bbad5\">\n<!-- <script type=\"text/javascipt\" src=\"assets/lib/jquery/dis/jquery.js\"></script> -->\n\n<meta name=\"msapplication-TileColor\" content=\"#da532c\">\n<meta name=\"theme-color\" content=\"#ffffff\">\n<meta name=\"viewport\" content=\"width=device-width\">\n<meta name=\"mobile-web-app-capable\" content=\"yes\">\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n \n<div class=\"page-navigator-top\">\n  <span (click)=\"onBackPressed()\">\n    <i class=\"fas fa-chevron-left\"></i>\n  </span>\n</div>\n<div class=\"container table\">\n  <div id=\"youTube\">\n      <iframe width=\"320\" height=\"188\" src=\"https://www.youtube.com/embed/iwROgK94zcM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  \n  </div>\n  <hr />\n  <div class=\" container description\">\n    <p>\n      A love story between an 18-year-old girl named Sophie, cursed by a witch into an old woman's body, and a magician named Howl.\n      Under the curse, Sophie sets out to seek her fortune, which takes her to Howl's strange moving castle. In the castle,\n      Sophie meets Howl's fire demon, named Karishifâ.\n    </p>\n  </div>\n  <!-- <div id=\"youTube\">\n          <iframe width=\"560\" height=\"315\" ng-src={{srcTrusted(details.trailer)}} frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n      </div> -->\n\n</div>\n<div class=\"theater-btn container\">\n  <a class=\"theater-info-btn\"> Theater Info</a>\n</div>\n<script>\n  //(navigator.standalone == true)\n  //'serviceWorker' in navigator && navigator.serviceWorker.register('/serviceWorker');\n</script>\n<script>\n  function onBackPressed() {\n    window.location.href = \"home\";\n  }\n          //app.controller(\"mainController\", ($scope, $http, $sce) => {\n          //$scope.srcTrusted = function (code) {\n\n          //    var url = `https://www.youtube.com/embed/` + code\n\n          //    return $sce.trustAsResourceUrl(url);;\n          //}\n\n</script>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DetailsComponent = /** @class */ (function () {
    function DetailsComponent() {
        this.screenW = 0;
        this.screenH = 0;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        console.log(window.innerWidth);
        if (window.innerWidth) {
            this.screenW = window.innerWidth;
            this.screenH = window.innerHeight;
        }
        else {
            this.screenW = document.body.clientWidth;
            this.screenH = document.body.clientHeight;
        }
        console.log("page loaded");
        jQuery('#youTube').addClass("center-youtube");
    };
    DetailsComponent.prototype.onBackPressed = function () {
        window.location.href = "home";
    };
    DetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-details',
            template: __webpack_require__("./src/app/details/details.component.html"),
            styles: [__webpack_require__("./src/app/details/details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"apple-touch-icon\" sizes=\"180x180\" href=\"assets/images/icons/apple-touch-icon.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"32x32\" href=\"assets/images/icons/favicon-32x32.png\">\n<link rel=\"icon\" type=\"image/png\" sizes=\"16x16\" href=\"assets/images/icons/favicon-16x16.png\">\n\n<link rel=\"mask-icon\" href=\"assets/images/icons/safari-pinned-tab.svg\" color=\"#5bbad5\">\n\n<meta name=\"msapplication-TileColor\" content=\"#da532c\">\n<meta name=\"theme-color\" content=\"#ffffff\">\n<meta name=\"viewport\" content=\"width=device-width\">\n<meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n<meta name=\"mobile-web-app-capable\" content=\"yes\">\n<link href=\"assets/images/covers/apple_splash_2048.png\" sizes=\"2048x2732\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_1668.png\" sizes=\"1668x2224\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_1536.png\" sizes=\"1536x2048\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_1125.png\" sizes=\"1125x2436\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_1242.png\" sizes=\"1242x2208\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_750.png\" sizes=\"750x1334\" rel=\"apple-touch-startup-image\" />\n<link href=\"assets/images/covers/apple_splash_640.png\" sizes=\"640x1136\" rel=\"apple-touch-startup-image\" />\n\n<!-- <script src=\"/node_modules/jquery/dist/jquery.slim.js\"></script> -->\n\n\n<!-- <div class=\"container table-iphone\">\n  <!-- <div class=\"tile-container-row\">\n   \n    <div *ngFor=\"let movie of Movies\"   (click)=\"openDetails(event)\" class=\"  tile-parent\">\n      <div class=\"tile-image-container\">\n        <img src={{movie.poster_sm.src}} class=\"img-responsive\" />\n\n      </div>\n      <div class=\"tile-subheader-container\">\n\n\n        <div class=\"tile-subheader-title\">{{movie.title}}</div>\n        <br />\n        <div class=\"tite-subheader-date\">{{movie.releaseDate}}</div>\n\n      </div>\n     \n    </div> -->\n<!-- <div (click)=\"openDetails(event)\" class=\"  tile-parent\">\n      <div class=\"tile-image-container\">\n        <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"img-responsive\" />\n\n      </div>\n      <div class=\"tile-subheader-container\">\n\n\n        <div class=\"tile-subheader-title\">Howls Moving Castle</div>\n        <br />\n        <div class=\"tite-subheader-date\">12-15-19</div>\n\n      </div>\n\n\n\n\n    </div>\n    <div (click)=\"openDetails(event)\" class=\"  tile-parent\">\n      <div class=\"tile-image-container\">\n        <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"img-responsive\" />\n\n      </div>\n      <div class=\"tile-subheader-container\">\n\n\n        <div class=\"tile-subheader-title\">Howls Moving Castle</div>\n        <br />\n        <div class=\"tite-subheader-date\">12-15-19</div>\n\n      </div>\n\n\n\n\n    </div>\n    <div (click)=\"openDetails(event)\" class=\"  tile-parent\">\n      <div class=\"tile-image-container\">\n        <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"img-responsive\" />\n\n      </div>\n      <div class=\"tile-subheader-container\">\n\n\n        <div class=\"tile-subheader-title\">Howls Moving Castle</div>\n        <br />\n        <div class=\"tite-subheader-date\">12-15-19</div>\n\n      </div>\n\n\n\n\n    </div> -->\n<!-- <hr />\n  </div>\n\n</div> -->\n\n\n<div class=\"main-container\">\n  <div class=\"phone-navigation-top-container\">\n    <div class=\"logo\"></div>\n    <div class=\"phone-navigation-top-text-header\">\n      <span>AnimeOsihrase</span>\n    </div>\n  </div>\n\n  <div class=\"movie-tile-main-container\">\n    <div class=\"banner-container\">\n      <div class=\"banner-row\">\n        <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"\" />\n      </div>\n      <div class=\"sub-container-header\">\n        <h4>Howls moving castle</h4>\n        <p>Sophie (Emily Mortimer) has an uneventful life at her late father's hat shop, but all that changes when she befriends wizard Howl (Christian Bale), who lives in a magical flying castle. However, the evil Witch of Waste (Lauren Bacall) takes issue with their budding relationship and casts a spell on young Sophie, which ages her prematurely. Now Howl must use all his magical talents to battle the jealous hag and return Sophie to her former youth and beauty.</p>\n      </div>\n    </div>\n    <div class=\"movie-row-tile-container\">\n      <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"img-responsive\" />\n      <div>\n        <h4>Howls moving castle</h4>\n      </div>\n      <div>\n        <span>Rating:Na</span>\n        <span></span>\n      </div>\n    </div>\n    <div class=\"movie-row-tile-container\">\n      <img src=\"assets/images/covers/Howls_moving_castle_cover.jpg\" class=\"img-responsive\" />\n      <div>\n        <h4>Howls moving castle</h4>\n\n      </div>\n      <div>\n        <span>Rating:Na</span>\n      </div>\n    </div>\n  </div>\n\n\n  <!-- Bottom navigation start  -->\n  <div class=\"phone-navigation-bottm-container\">\n    <div class=\"phone-navigation-row\">\n\n      <div>\n        <i class=\"fas fa-user-circle\"></i>\n        <br>\n        <span>Account</span>\n      </div>\n\n      <div>\n        <i class=\"fas fa-film\"></i>\n        <br>\n        <span>Anime</span>\n      </div>\n\n      <div>\n        <i class=\"fas fa-home\"> </i>\n        <br>\n        <span>Home</span>\n      </div>\n    </div>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service_service__ = __webpack_require__("./src/app/http-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(ApiCaller) {
        this.ApiCaller = ApiCaller;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ApiCaller.getAll(function (movies) {
            _this.Movies = movies;
        });
    };
    HomeComponent.prototype.openDetails = function (e) {
        console.log();
        window.location.href = "details";
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__http_service_service__["a" /* HttpServiceService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moviemodel__ = __webpack_require__("./src/app/moviemodel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(_http) {
        this._http = _http;
        this.url = "https://apianimearato.azurewebsites.net/api/v1/get";
    }
    HttpServiceService.prototype.getAll = function (callback) {
        this._http.get(this.url).map(function (item) {
            var json = item.json();
            return json;
        }).subscribe(function (success) {
            var mapped = success.map(function (item) {
                var movie = new __WEBPACK_IMPORTED_MODULE_3__moviemodel__["a" /* Moviemodel */]();
                movie.poster_sm = new Image();
                movie.poster_sm.src = "data:image/png;base64," + item["poster_sm"];
                movie.poster_lg = new Image();
                movie.poster_lg.src = "data:image/png;base64," + item["poster_lg"];
                movie.poster_md = new Image();
                movie.poster_md.src = "data:image/png;base64," + item["poster_md"];
                movie.poster_lgx = new Image();
                movie.poster_lgx.src = "data:image/png;base64," + item["poster_lgx"];
                movie.theatricalRelease = item["theatricalRelease"];
                movie.releaseDate = item["releaseDate"];
                movie.title = item["title"];
                return movie;
            });
            callback(mapped);
        }, function (error) { console.log("failure"); });
    };
    HttpServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/moviemodel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Moviemodel; });
var Moviemodel = /** @class */ (function () {
    /**
     *
     */
    function Moviemodel() {
    }
    return Moviemodel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map