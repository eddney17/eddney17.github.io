(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eddnie\maraalcaraz_art\ng-mara-art-web\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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

/***/ "NoJQ":
/*!**************************************************!*\
  !*** ./src/app/main-site/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 0, consts: [[1, "home-wrapper"], [1, "content-flex", "secondary-font", "font-darkgrey"], ["id", "about-article", 1, "content-flex-item"], [1, "bolder"], [1, "buttons"], [1, "btn-transparent-primary"], ["id", "about-images", 1, "content-flex-item"], ["id", "artist-image", "src", "./assets/images/mk_artist_image.jpg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About the Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mara Alcaraz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " is a Philippine based abstract artist that tells her stories by using bold colors and textures in her artworks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " She is a business analyst by profession and an abstract painter by passion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Most of her works are inspired by Wassily Kandinsky, Van Gogh, and Joan Mir\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CHECK ARTWORKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-wrapper[_ngcontent-%COMP%] {\n  padding: 60px 150px;\n}\n\n.content-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n\n.content-flex-item[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n#about-article[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n#about-article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n#about-article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#about-images[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n\n#artist-image[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n#buttons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n@media screen and (max-width: 1075px) {\n  .home-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n\n  #about-article[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0;\n  }\n  #about-article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  #about-article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  #artist-image[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQUFKOztBQUdBO0VBQ0ksT0FBQTtBQUFKOztBQUdBO0VBQ0ksYUFBQTtBQUFKOztBQUVJO0VBQ0ksZUFBQTtBQUFSOztBQUdJO0VBQ0ksZUFBQTtBQURSOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFNQTtFQUNJLGdCQUFBO0FBSEo7O0FBTUE7RUFDSTtJQUNJLGtCQUFBO0VBSE47O0VBT0U7SUFFSSxrQkFBQTtJQUNBLFVBQUE7RUFMTjtFQU9NO0lBQ0ksZUFBQTtFQUxWO0VBUU07SUFDSSxlQUFBO0VBTlY7O0VBV0U7SUFDSSxZQUFBO0lBQ0EsYUFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7RUFSTjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS13cmFwcGVye1xyXG4gICAgcGFkZGluZzogNjBweCAxNTBweDtcclxuXHJcbn1cclxuXHJcbi5jb250ZW50LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7XHJcbn1cclxuXHJcbi5jb250ZW50LWZsZXgtaXRlbXtcclxuICAgIGZsZXg6MTtcclxufVxyXG5cclxuI2Fib3V0LWFydGljbGV7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuI2Fib3V0LWltYWdlc3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhcnRpc3QtaW1hZ2V7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcclxuICAgIFxyXG59XHJcblxyXG4jYnV0dG9uc3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xyXG4gICAgLmhvbWUtd3JhcHBlcntcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgI2Fib3V0LWFydGljbGV7XHJcblxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBoMXtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgICNhcnRpc3QtaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7ICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'ng-mara-art-web';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "YkzY":
/*!********************************************************************************!*\
  !*** ./src/app/main-site/main-site-container/main-site-container.component.ts ***!
  \********************************************************************************/
/*! exports provided: MainSiteContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSiteContainerComponent", function() { return MainSiteContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainSiteContainerComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainSiteContainerComponent.ɵfac = function MainSiteContainerComponent_Factory(t) { return new (t || MainSiteContainerComponent)(); };
MainSiteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSiteContainerComponent, selectors: [["app-main-site-container"]], decls: 17, vars: 0, consts: [[1, "navbar-flex"], [1, "navbar-title"], [1, "font-lightgrey"], [1, "navbar-links"], [1, "navbar-links-list"], [1, "mr-10", "link-item"], [1, "link-item"], [1, "content-wrapper"]], template: function MainSiteContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MARA ALCARAZ|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ART STUDIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ARTWORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: 50px;\n  border-bottom: solid;\n  border-color: #707070;\n  padding: 0 30px;\n  z-index: 100;\n  position: fixed;\n  width: 100%;\n  top: 0;\n}\n\n.navbar-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: inherit;\n  align-items: center;\n}\n\n.navbar-title[_ngcontent-%COMP%] {\n  flex: 1;\n  width: auto;\n}\n\n.navbar-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.navbar-links[_ngcontent-%COMP%] {\n  flex: 1;\n  width: auto;\n  text-align: right;\n}\n\nul.navbar-links-list[_ngcontent-%COMP%] {\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n}\n\nul.navbar-links-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.link-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.link-item[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  margin: 50px 30px 20px 30px;\n}\n\n@media screen and (max-width: 1600px) {\n  nav[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 20px 0;\n  }\n\n  .navbar-title[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n    text-align: center;\n    padding: 10px 0;\n  }\n\n  .navbar-links[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n    text-align: center;\n  }\n\n  .content-wrapper[_ngcontent-%COMP%] {\n    margin: 100px 30px 20px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLXNpdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxPQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUNJO0VBQ0ksU0FBQTtBQUNSOztBQUdBO0VBQ0ksT0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUlBO0VBQ0ksU0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtBQURKOztBQUlBO0VBRUkscUJBQUE7QUFGSjs7QUFLQTtFQUNJLGVBQUE7QUFGSjs7QUFLQTtFQUNJLGdCQUFBO0FBRko7O0FBTUE7RUFDSSwyQkFBQTtBQUhKOztBQU1BO0VBRUk7SUFDSSxZQUFBO0lBQ0EsZUFBQTtFQUpOOztFQU1FO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0lBQ0EsZUFBQTtFQUhOOztFQU1FO0lBQ0ksY0FBQTtJQUNBLGtCQUFBO0VBSE47O0VBTUU7SUFDSSw0QkFBQTtFQUhOO0FBQ0YiLCJmaWxlIjoibWFpbi1zaXRlLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInAsIGgxLCBoMiwgaDMsIGg0LCBsaSB7XHJcbiAgICBjb2xvcjojNzA3MDcwO1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBoZWlnaHQ6NTBweDsgICBcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjNzA3MDcwO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6MDtcclxufVxyXG5cclxuLm5hdmJhci1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci10aXRsZXtcclxuICAgIGZsZXg6MTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWxpbmtze1xyXG4gICAgZmxleDogMTsgICAgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxudWwubmF2YmFyLWxpbmtzLWxpc3R7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsLm5hdmJhci1saW5rcy1saXN0ID4gbGl7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxpbmstaXRlbXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbmstaXRlbTpob3ZlcntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVye1xyXG4gICAgbWFyZ2luOjUwcHggMzBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE2MDBweCkge1xyXG5cclxuICAgIG5hdntcclxuICAgICAgICBoZWlnaHQ6YXV0bzsgICBcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLXRpdGxleyAgICBcclxuICAgICAgICBmbGV4OiAxIDAgMTAwJTsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm5hdmJhci1saW5rc3tcclxuICAgICAgICBmbGV4OiAxIDAgMTAwJTsgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luOjEwMHB4IDMwcHggMjBweCAzMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSiteContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-site-container',
                templateUrl: './main-site-container.component.html',
                styleUrls: ['./main-site-container.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome-page/welcome-page.component */ "fDIK");
/* harmony import */ var _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-site/main-site-container/main-site-container.component */ "YkzY");
/* harmony import */ var _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-site/home/home.component */ "NoJQ");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"],
        _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_5__["MainSiteContainerComponent"],
        _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"],
                    _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_5__["MainSiteContainerComponent"],
                    _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "fDIK":
/*!********************************************************!*\
  !*** ./src/app/welcome-page/welcome-page.component.ts ***!
  \********************************************************/
/*! exports provided: WelcomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageComponent", function() { return WelcomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class WelcomePageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    explore() {
        this.router.navigateByUrl("/home");
    }
}
WelcomePageComponent.ɵfac = function WelcomePageComponent_Factory(t) { return new (t || WelcomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WelcomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomePageComponent, selectors: [["app-welcome-page"]], decls: 15, vars: 0, consts: [["id", "welcome-page"], ["id", "welcome-page-banner"], ["id", "banner-item"], [1, "font-lightgrey"], ["id", "secondary-header"], [1, "secondary-font"], ["id", "button-cont"], [1, "btn-transparent-white", 3, "click"], ["id", "background-image"], ["src", "/assets/images/welcome_bg.jpg"]], template: function WelcomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MARA ALCARAZ ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ART STUDIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "contemporary | abstract");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WelcomePageComponent_Template_button_click_11_listener() { return ctx.explore(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EXPLORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#welcome-page[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100vh;\n}\n\n#background-image[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n}\n\n#background-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  object-fit: fill;\n  filter: brightness(0.7);\n}\n\n#welcome-page-banner[_ngcontent-%COMP%] {\n  display: flex;\n  z-index: 99;\n  width: 100%;\n  height: 100vh;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  justify-content: center;\n  align-items: center;\n}\n\n#welcome-page-banner[_ngcontent-%COMP%]   #banner-item[_ngcontent-%COMP%] {\n  flex: 1;\n  color: #ffffff;\n  padding: 30px 0px;\n  background-color: rgba(0, 0, 0, 0.288);\n}\n\n#welcome-page-banner[_ngcontent-%COMP%]   #banner-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 75px;\n  font-weight: 100;\n  margin: 0;\n}\n\n#welcome-page-banner[_ngcontent-%COMP%]   #banner-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 100;\n}\n\n#button-cont[_ngcontent-%COMP%] {\n  margin: 30px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlbGNvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFBQTs7QUFDSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUNSOztBQUdBO0VBQ0ksYUFBQTtFQUVBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHNDQUFBO0FBRFI7O0FBR1E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBRFo7O0FBR1E7RUFDSSxTQUFBO0VBQ0EsZ0JBQUE7QUFEWjs7QUFRQTtFQUNJLGNBQUE7QUFMSiIsImZpbGUiOiJ3ZWxjb21lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI3dlbGNvbWUtcGFnZXtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuI2JhY2tncm91bmQtaW1hZ2V7XHJcbnBvc2l0aW9uOmFic29sdXRlOyAgXHJcbnRvcDogMDtcclxud2lkdGg6IDEwMCU7XHJcbmhlaWdodDogMTAwdmg7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogZmlsbDsgXHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuNyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiN3ZWxjb21lLXBhZ2UtYmFubmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIFxyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIFxyXG4gICAgI2Jhbm5lci1pdGVte1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI4OCk7XHJcblxyXG4gICAgICAgIGxhYmVseyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IDc1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMntcclxuICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuI2J1dHRvbi1jb250e1xyXG4gICAgbWFyZ2luOiAzMHB4IDA7ICAgIFxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome-page',
                templateUrl: './welcome-page.component.html',
                styleUrls: ['./welcome-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/welcome-page/welcome-page.component */ "fDIK");
/* harmony import */ var _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-site/main-site-container/main-site-container.component */ "YkzY");
/* harmony import */ var _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-site/home/home.component */ "NoJQ");







const routes = [
    { path: '', component: src_app_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"] },
    { path: 'home', component: _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_3__["MainSiteContainerComponent"], children: [
            { path: '', component: _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' }
        ] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map