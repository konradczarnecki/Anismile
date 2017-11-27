webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-top id=\"top\"\n           [ngClass]=\"{'stick' : stick}\"\n           [ngStyle]=\"{'boxShadow' : '0 2px 12px 0 rgba(180, 180, 180, ' + shadowOp + ')'}\"></app-top>\n  <div class=\"main\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  width: 100%;\n  min-height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: 30% 1fr;\n      grid-template-rows: 30% 1fr;\n  grid-template-areas: \"top\" \"main\";\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: center;\n      justify-items: center; }\n\napp-top {\n  grid-area: top;\n  z-index: 2; }\n\n.main {\n  grid-area: main;\n  padding-top: 20px; }\n\n.stick {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -205px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shadowOp = 0;
        this.stick = false;
        window.addEventListener('scroll', function () {
            _this.shadowOp = 0.5 * (window.scrollY - 70) / 190;
            if (_this.shadowOp > 0.5)
                _this.shadowOp = 0.5;
            else if (_this.shadowOp < 0)
                _this.shadowOp = 0;
            _this.stick = window.scrollY >= 190;
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__top_top_component__ = __webpack_require__("../../../../../src/app/top/top.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fade_directive__ = __webpack_require__("../../../../../src/app/fade.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__ = __webpack_require__("../../../../../src/app/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__owned_owned_component__ = __webpack_require__("../../../../../src/app/owned/owned.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid_grid_component__ = __webpack_require__("../../../../../src/app/grid/grid.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__fetch_service__ = __webpack_require__("../../../../../src/app/fetch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__categories_categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__details_details_component__ = __webpack_require__("../../../../../src/app/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    { path: 'owned', component: __WEBPACK_IMPORTED_MODULE_9__grid_grid_component__["a" /* GridComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__login_login_service__["a" /* LoginService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */] },
    { path: 'animal/:id', component: __WEBPACK_IMPORTED_MODULE_13__details_details_component__["a" /* DetailsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__top_top_component__["a" /* TopComponent */],
            __WEBPACK_IMPORTED_MODULE_5__fade_directive__["a" /* FadeHighlightDirective */],
            __WEBPACK_IMPORTED_MODULE_7__preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_8__owned_owned_component__["a" /* OwnedComponent */],
            __WEBPACK_IMPORTED_MODULE_9__grid_grid_component__["a" /* GridComponent */],
            __WEBPACK_IMPORTED_MODULE_11__categories_categories_component__["a" /* CategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__profile_profile_component__["a" /* ProfileComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_6__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_10__fetch_service__["a" /* FetchService */], __WEBPACK_IMPORTED_MODULE_14__login_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"row\" *ngFor=\"let category of categories\"><span>{{category.name}}</span></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 12vw;\n  display: -ms-grid;\n  display: grid;\n  grid-auto-rows: 40px;\n  font-family: \"Karla\";\n  color: rgba(122, 122, 122, 0.8);\n  font-size: 17px; }\n\n.row {\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  border-radius: 3px; }\n\n.row:hover {\n  border: 1px solid rgba(240, 128, 128, 0.16);\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_service__ = __webpack_require__("../../../../../src/app/fetch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesComponent = (function () {
    function CategoriesComponent(fetchService) {
        this.fetchService = fetchService;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    CategoriesComponent.prototype.fetch = function () {
        var _this = this;
        this.fetchService.getCategories().then(function (categories) {
            _this.categories = categories;
        });
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/categories/categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fetch_service__["a" /* FetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fetch_service__["a" /* FetchService */]) === "function" && _a || Object])
], CategoriesComponent);

var _a;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div id=\"image\">\n    <div id=\"frame\" #frame>\n      <img #image [src]=\"animal?.imageUrl\"/>\n    </div>\n  </div>\n\n  <div id=\"textFrame\">\n\n    <div id=\"line\">\n\n      <div id=\"header\">\n        <span>{{animal?.name}}</span>\n      </div>\n\n      <div id=\"price\"><span>{{animal?.price}}</span></div>\n      <div id=\"addButton\">+</div>\n\n    </div>\n\n    <div id=\"description\">{{animal?.description}}</div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/details/details.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 75vw;\n  height: 60vh;\n  justify-self: center;\n  font-family: \"Karla\";\n  color: rgba(122, 122, 122, 0.8);\n  margin-top: 30px; }\n\n#frame {\n  width: 18vw;\n  height: 18vw;\n  border-radius: 10px;\n  overflow: hidden; }\n\n#image {\n  width: 30%;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  float: left;\n  margin-left: 4vw; }\n\n#textFrame {\n  width: 50%;\n  float: right;\n  margin-right: 8vw; }\n\n#line {\n  width: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 35% 15% 10%;\n      grid-template-columns: 35% 15% 10%;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: stretch;\n      justify-items: stretch;\n  font-size: 24px; }\n\n#header {\n  font-size: 36px;\n  font-weight: 600;\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#price {\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-grid-column-align: center;\n      justify-items: center; }\n\n#description {\n  margin-top: 30px;\n  text-align: justify;\n  text-justify: inter-word; }\n\n#addButton {\n  display: -ms-grid;\n  display: grid;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fetch_service__ = __webpack_require__("../../../../../src/app/fetch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailsComponent = (function () {
    function DetailsComponent(route, fetchService) {
        this.route = route;
        this.fetchService = fetchService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.fetchService.getAnimal(params.id).then(function (animal) { return _this.animal = animal; });
        });
    };
    DetailsComponent.prototype.ngAfterViewInit = function () {
        this.positionImage();
    };
    DetailsComponent.prototype.positionImage = function () {
        var img = this.image.nativeElement;
        var smaller = img.width < img.height ? 'Width' : 'Height';
        var higher = smaller === 'Width' ? 'Height' : 'Width';
        var frameDimensions = {
            forSmaller: this.frame.nativeElement['offset' + smaller],
            forHigher: this.frame.nativeElement['offset' + higher]
        };
        img[smaller.toLowerCase()] = frameDimensions.forSmaller;
        var offset = (img[higher.toLowerCase()] / 2 - frameDimensions.forHigher / 2);
        console.log(offset);
        img.style.transform = "translate(-" + offset + "px, 0)";
    };
    return DetailsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('image'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], DetailsComponent.prototype, "image", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('frame'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], DetailsComponent.prototype, "frame", void 0);
DetailsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/details/details.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__fetch_service__["a" /* FetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fetch_service__["a" /* FetchService */]) === "function" && _d || Object])
], DetailsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/fade.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FadeHighlightDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__("../../../../animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FadeHighlightDirective = (function () {
    function FadeHighlightDirective(el) {
        this.el = el;
        this.onElement = false;
        this.duration = 300;
    }
    FadeHighlightDirective.prototype.highlight = function () {
        var _this = this;
        this.onElement = true;
        setTimeout(function () {
            if (_this.onElement == true) {
                _this.entered = Date.now();
                _this.targetColor = _this.fade;
                _this.animate();
            }
        }, 30);
    };
    FadeHighlightDirective.prototype.unhighlight = function () {
        this.onElement = false;
        this.targetColor = 'rgba(255,255,255,0.05)';
        var timeout = Date.now() - this.entered;
        setTimeout(this.animate.bind(this), this.duration - timeout);
    };
    FadeHighlightDirective.prototype.animate = function () {
        __WEBPACK_IMPORTED_MODULE_1_animejs__({
            targets: this.el.nativeElement,
            backgroundColor: this.targetColor,
            duration: this.duration,
            easing: 'linear',
            elasticity: 0
        });
    };
    return FadeHighlightDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], FadeHighlightDirective.prototype, "fade", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FadeHighlightDirective.prototype, "highlight", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FadeHighlightDirective.prototype, "unhighlight", null);
FadeHighlightDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[fade]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object])
], FadeHighlightDirective);

var _a;
//# sourceMappingURL=fade.directive.js.map

/***/ }),

/***/ "../../../../../src/app/fetch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FetchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FetchService = (function () {
    function FetchService(http) {
        this.http = http;
    }
    FetchService.prototype.getAllAnimals = function (page) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + '/animals/get-all?page=' + page).subscribe(function (response) {
                resolve(response.json().content);
            });
        });
    };
    FetchService.prototype.getAnimal = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + '/animals/get-by-id?id=' + id).subscribe(function (response) {
                resolve(response.json());
            });
        });
    };
    FetchService.prototype.getCategories = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + '/animals/categories').subscribe(function (response) {
                resolve(response.json());
            });
        });
    };
    return FetchService;
}());
FetchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], FetchService);

var _a;
//# sourceMappingURL=fetch.service.js.map

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n  <app-categories id=\"categories\" [ngClass]=\"{'stick' : stickCategories}\"></app-categories>\n  <div class=\"grid\">\n    <app-preview *ngFor=\"let animal of animals\"\n                 [name]=\"animal.name\"\n                 [price]=\"animal.price\"\n                 [imageSrc]=\"animal.imageUrl\"\n                 [id]=\"animal.id\" ></app-preview>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 98vw;\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 15% 70% 15%;\n      grid-template-columns: 15% 70% 15%;\n  grid-template-areas: \"left-margin center right-margin\";\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: stretch;\n      justify-items: stretch; }\n\n.grid {\n  width: 100%;\n  height: 100%;\n  grid-area: center;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-rows: (minmax(190px, 1fr))[auto-fill];\n      grid-template-rows: repeat(auto-fill, minmax(190px, 1fr));\n  -ms-grid-columns: (minmax(150px, 1fr))[auto-fill];\n      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  grid-column-gap: 5px;\n  grid-row-gap: 5px; }\n\napp-categories {\n  grid-area: left-margin;\n  justify-self: center; }\n\n.stick {\n  position: fixed;\n  top: 10.3vh;\n  left: 1.8vw; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/grid/grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fetch_service__ = __webpack_require__("../../../../../src/app/fetch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridComponent = (function () {
    function GridComponent(fetchService) {
        this.fetchService = fetchService;
    }
    GridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stickCategories = false;
        window.addEventListener('scroll', function () {
            if (window.scrollY >= 190) {
                if (_this.stickCategories == false) {
                    // let el: HTMLElement = document.getElementById('categories');
                    // let rect = el.getBoundingClientRect();
                    // el.style.top = rect.top + 'px';
                    // el.style.left = rect.left + 'px';
                    _this.stickCategories = true;
                }
            }
            else
                _this.stickCategories = false;
        });
        this.fetchService.getAllAnimals(0).then(function (animals) {
            var ext = [];
            for (var i = 0; i < 15; i++)
                animals.forEach(function (animal) { return ext.push(animal); });
            _this.animals = ext;
        });
    };
    return GridComponent;
}());
GridComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-grid',
        template: __webpack_require__("../../../../../src/app/grid/grid.component.html"),
        styles: [__webpack_require__("../../../../../src/app/grid/grid.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fetch_service__["a" /* FetchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fetch_service__["a" /* FetchService */]) === "function" && _a || Object])
], GridComponent);

var _a;
//# sourceMappingURL=grid.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <div id=\"column\">\n\n    <input id=\"username\" [ngClass]=\"{'invalid' : wrongCredentials}\" placeholder=\"username\" classs=\"field\" [(ngModel)]=\"username\">\n    <input id=\"password\" [ngClass]=\"{'invalid' : wrongCredentials}\" placeholder=\"password\" classs=\"field\" [(ngModel)]=\"password\">\n\n    <div id=\"buttons\">\n      <div id=\"login\" class=\"button\" (click)=\"login()\">submit</div>\n      <div id=\"register\" class=\"button\" (click)=\"register()\">register</div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-family: 'Karla'; }\n\ninput {\n  width: 100%;\n  height: 50px;\n  border-radius: 3px;\n  border: solid 1px rgba(82, 41, 64, 0.67);\n  margin: auto;\n  color: rgba(82, 41, 64, 0.67);\n  text-align: center;\n  font-size: 105%; }\n\n.button {\n  width: 48%;\n  height: 50px;\n  border-radius: 3px;\n  border: solid 1px rgba(82, 41, 64, 0.67);\n  color: rgba(122, 122, 122, 0.8);\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.button:hover {\n  color: white;\n  background-color: rgba(82, 41, 64, 0.67);\n  cursor: pointer; }\n\n#buttons {\n  margin: auto;\n  width: 100%;\n  height: 50px; }\n\n#column {\n  margin: auto;\n  width: 400px;\n  height: 100%; }\n\n#username {\n  margin-top: 100px; }\n\n#password {\n  margin-top: 8px; }\n\n#buttons {\n  margin-top: 8px; }\n\n#login {\n  float: left; }\n\n#register {\n  float: right; }\n\n.invalid {\n  box-shadow: 1px 1px 5px rgba(198, 0, 0, 0.26); }\n\ninput, .button {\n  box-shadow: 1px 1px 5px rgba(165, 165, 165, 0.56); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.wrongCredentials = false;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.service.login(this.username, this.password).then(function (result) {
            if (result) {
                _this.wrongCredentials = false;
                _this.router.navigate(['/owned']);
            }
            else
                _this.wrongCredentials = true;
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        this.service.register(this.username, this.password).then(function (result) {
            if (result) {
                _this.wrongCredentials = false;
                _this.router.navigate(['/owned']);
            }
            else
                _this.wrongCredentials = true;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha256__ = __webpack_require__("../../../../js-sha256/src/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_js_sha256__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.logged = false;
    }
    LoginService.prototype.login = function (username, password) {
        return this.request('login')(username, password);
    };
    LoginService.prototype.register = function (username, password) {
        return this.request('register')(username, password);
    };
    LoginService.prototype.request = function (type) {
        var _this = this;
        return function (username, password) {
            var pwdHash = __WEBPACK_IMPORTED_MODULE_2_js_sha256__["sha256"](password);
            return new Promise(function (resolve) {
                _this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiurl + '/' + type, { username: username, password: pwdHash }).subscribe(function (response) {
                    var result = response.json().status === 'success';
                    _this.logged = result;
                    localStorage.setItem('token', response.json().content);
                    resolve(result);
                });
            });
        };
    };
    LoginService.prototype.canActivate = function () {
        return this.logged;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/owned/owned.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-grid></app-grid>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/owned/owned.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/owned/owned.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OwnedComponent = (function () {
    function OwnedComponent() {
    }
    OwnedComponent.prototype.ngOnInit = function () {
    };
    return OwnedComponent;
}());
OwnedComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-owned',
        template: __webpack_require__("../../../../../src/app/owned/owned.component.html"),
        styles: [__webpack_require__("../../../../../src/app/owned/owned.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], OwnedComponent);

//# sourceMappingURL=owned.component.js.map

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" (click)=\"openDetails()\">\n  <div  id=\"thumbnail\"><img [src]=\"imageSrc\"/></div>\n  <span id=\"name\">{{name}}</span><br>\n  <span id=\"price\">{{price}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 150px;\n  min-height: 190px;\n  border: solid 1px transparent;\n  border-radius: 5px;\n  text-align: center;\n  font-family: \"Karla\";\n  color: rgba(122, 122, 122, 0.8); }\n\n.wrapper:hover {\n  border: solid 1px rgba(240, 128, 128, 0.16);\n  box-shadow: 1px 1px 7px 0 rgba(206, 206, 206, 0.29);\n  cursor: pointer; }\n  .wrapper:hover #thumbnail {\n    opacity: 0.9; }\n\n#thumbnail {\n  width: 120px;\n  height: 120px;\n  margin: 15px auto;\n  margin-bottom: 5px;\n  opacity: 0.7;\n  border-radius: 3px;\n  overflow: hidden;\n  text-align: center; }\n\nimg {\n  height: 144px;\n  width: 180px;\n  -webkit-transform: translate(-30px, -12px);\n          transform: translate(-30px, -12px); }\n\n#name {\n  font-size: 19px; }\n\n#price {\n  font-size: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewComponent = (function () {
    function PreviewComponent(router) {
        this.router = router;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.openDetails = function () {
        this.router.navigate(['/animal/' + this.id]);
    };
    return PreviewComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], PreviewComponent.prototype, "id", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PreviewComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PreviewComponent.prototype, "price", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], PreviewComponent.prototype, "imageSrc", void 0);
PreviewComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-preview',
        template: __webpack_require__("../../../../../src/app/preview/preview.component.html"),
        styles: [__webpack_require__("../../../../../src/app/preview/preview.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PreviewComponent);

var _a;
//# sourceMappingURL=preview.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);

//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/top/top.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div id=\"banner\">\r\n    anismile\r\n  </div>\r\n  <div id=\"frame\">\r\n    <img id=\"front\" src=\"\" #bannerFront/>\r\n    <img id=\"back\" src=\"\" #bannerBack/>\r\n  </div>\r\n\r\n  <div id=\"bar\" class=\"scroll\">\r\n    <div class=\"menuLink\" [fade]=\"highlightColor\">animals</div>\r\n    <div class=\"menuLink\" routerLink=\"/owned\" [fade]=\"highlightColor\">owned</div>\r\n    <div class=\"menuLink\" [fade]=\"highlightColor\">smileys</div>\r\n    <div class=\"menuLink\" routerLink=\"/login\" *ngIf=\"!loginService.logged\" [fade]=\"highlightColor\">login</div>\r\n    <div class=\"menuLink\" routerLink=\"/profile\" *ngIf=\"loginService.logged\"  [fade]=\"highlightColor\">profile</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/top/top.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Karla);", ""]);

// module
exports.push([module.i, ".wrapper {\n  width: 98vw;\n  min-height: 100%;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 65vw 1fr;\n      grid-template-columns: 1fr 65vw 1fr;\n  -ms-grid-rows: 1fr 50px;\n      grid-template-rows: 1fr 50px;\n  grid-template-areas: \"left-margin banner right-margin\"\r \"left-margin-b bar    right-margin-b\";\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: stretch;\n      justify-items: stretch;\n  font-family: \"Karla\";\n  background: white; }\n\n#banner {\n  grid-area: banner;\n  padding: 20px;\n  text-align: center;\n  font-size: 120px;\n  -webkit-transform: scale(1.3, 1);\n          transform: scale(1.3, 1);\n  font-family: \"Karla\";\n  color: #ebebeb;\n  z-index: 3; }\n\n#front {\n  opacity: 0.8;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n#back {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n#frame {\n  grid-area: banner;\n  border-radius: 7px;\n  margin: 10px 0;\n  overflow: hidden;\n  width: 65vw;\n  height: 180px;\n  position: relative; }\n\n#bar {\n  grid-area: bar;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n  -ms-grid-column-align: stretch;\n      justify-items: stretch;\n  background: white;\n  z-index: 5; }\n\n.menuLink {\n  color: rgba(122, 122, 122, 0.8);\n  font-size: 25px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-column-align: center;\n      justify-items: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 5px;\n  margin-top: 5px; }\n\n.menuLink:hover {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/top/top.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs__ = __webpack_require__("../../../../animejs/anime.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_animejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_animejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_service__ = __webpack_require__("../../../../../src/app/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopComponent = (function () {
    function TopComponent(loginService) {
        this.loginService = loginService;
        this.highlightColor = 'rgba(149, 112, 160, 0.05)';
        this.duration = 50000;
        this.transitionTime = 2000;
    }
    TopComponent.prototype.ngOnInit = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + "/images/banner?ran=";
        this.bannerFront.nativeElement.src = url + Date.now();
        this.bannerBack.nativeElement.src = url + Date.now() + 1;
        this.frontLayerActive = true;
        this.changeImgInterId = setInterval(this.changeImage.bind(this), 9000);
        this.animate();
    };
    TopComponent.prototype.animate = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_animejs__({
            targets: [this.bannerFront.nativeElement, this.bannerBack.nativeElement],
            translateX: [0, -950],
            translateY: [0, -450],
            duration: this.duration,
            easing: 'linear',
            complete: function () {
                var target = _this.frontLayerActive ? _this.bannerFront.nativeElement : _this.bannerBack.nativeElement;
                clearInterval(_this.changeImgInterId);
                __WEBPACK_IMPORTED_MODULE_1_animejs__({
                    targets: target,
                    opacity: 0,
                    duration: _this.transitionTime,
                    easing: 'linear',
                    complete: function () {
                        setTimeout(_this.changeImage.bind(_this), _this.transitionTime);
                        setTimeout(_this.animate.bind(_this), _this.transitionTime);
                        _this.changeImgInterId = setInterval(_this.changeImage.bind(_this), 9000);
                    }
                });
            }
        });
    };
    TopComponent.prototype.changeImage = function () {
        var _this = this;
        var frontOp = this.frontLayerActive ? 0 : 0.8;
        var backOp = !this.frontLayerActive ? 0 : 0.8;
        __WEBPACK_IMPORTED_MODULE_1_animejs__({
            targets: this.bannerFront.nativeElement,
            opacity: frontOp,
            duration: this.transitionTime,
            easing: 'linear',
            complete: function () {
                var layerToChange = !_this.frontLayerActive ? _this.bannerFront : _this.bannerBack;
                var timestamp = Date.now();
                layerToChange.nativeElement.src = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiurl + "/images/banner?ran=" + timestamp;
            }
        });
        __WEBPACK_IMPORTED_MODULE_1_animejs__({
            targets: this.bannerBack.nativeElement,
            opacity: backOp,
            duration: this.transitionTime,
            easing: 'linear'
        });
        this.frontLayerActive = !this.frontLayerActive;
    };
    return TopComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('bannerBack'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], TopComponent.prototype, "bannerBack", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('bannerFront'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], TopComponent.prototype, "bannerFront", void 0);
TopComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-top',
        template: __webpack_require__("../../../../../src/app/top/top.component.html"),
        styles: [__webpack_require__("../../../../../src/app/top/top.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], TopComponent);

var _a, _b, _c;
//# sourceMappingURL=top.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiurl: ""
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map