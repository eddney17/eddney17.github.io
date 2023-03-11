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

/***/ "CgIp":
/*!*************************************************************************!*\
  !*** ./src/app/shared/artwork-thumbnail/artwork-thumbnail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ArtworkThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkThumbnailComponent", function() { return ArtworkThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_artwork_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/artwork-model */ "CryT");



class ArtworkThumbnailComponent {
    constructor() {
        this.artwork = new src_app_models_artwork_model__WEBPACK_IMPORTED_MODULE_1__["ArtworkModel"]();
    }
    ngOnInit() {
    }
}
ArtworkThumbnailComponent.ɵfac = function ArtworkThumbnailComponent_Factory(t) { return new (t || ArtworkThumbnailComponent)(); };
ArtworkThumbnailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtworkThumbnailComponent, selectors: [["artwork-thumbnail"]], inputs: { artwork: "artwork" }, decls: 2, vars: 1, consts: [["id", "artwork-thumbnail"], ["id", "artwork-image", 3, "src"]], template: function ArtworkThumbnailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.artwork.Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["#artwork-thumbnail[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n#artwork-image[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n\n#artwork-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcnR3b3JrLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUlBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FBREoiLCJmaWxlIjoiYXJ0d29yay10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXJ0d29yay10aHVtYm5haWx7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI2FydHdvcmstaW1hZ2V7XHJcbiAgICBwb3NpdGlvbiA6IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoNzUlKTsgIFxyXG5cclxufVxyXG5cclxuI2FydHdvcmstaW1hZ2U6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyBmaWx0ZXI6IGJyaWdodG5lc3MoMTAwJSk7ICBcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtworkThumbnailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'artwork-thumbnail',
                templateUrl: './artwork-thumbnail.component.html',
                styleUrls: ['./artwork-thumbnail.component.scss']
            }]
    }], function () { return []; }, { artwork: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "CryT":
/*!*****************************************!*\
  !*** ./src/app/models/artwork-model.ts ***!
  \*****************************************/
/*! exports provided: ArtworkModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkModel", function() { return ArtworkModel; });
class ArtworkModel {
    constructor() {
        this.Name = "";
        this.Title = "";
        this.Url = "";
        this.Description = "";
        this.Width = 0;
        this.Height = 0;
        this.Orientation = "";
        this.CreatedDate = null;
    }
}


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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



function HomeComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 35, vars: 0, consts: [[1, "home-wrapper"], ["id", "featured-artwork", 1, "section-cont"], [1, "content-flex", "secondary-font", "font-darkgrey"], [1, "content-flex-item"], ["ngbSlide", ""], ["id", "featured-artwork-detail-cont", 1, "content-flex-item"], ["id", "featured-tag-wrapper", 1, "fontfam-primary"], ["id", "featured-artwork-title"], [1, "section-cont"], ["id", "about-article", 1, "content-flex-item"], [1, "bolder"], [1, "buttons"], [1, "btn-transparent-primary"], ["id", "about-images", 1, "content-flex-item"], ["id", "artist-image", "src", "./assets/images/mk_artist_image.jpg"], [1, "carousel-img-wrapper"], ["src", "/assets/images/welcome_bg.jpg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngb-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_ng_template_5_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HomeComponent_ng_template_6_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Featured artwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\"Conversations in the Dark\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Official entry on 2021 GSIS National Arts Competition");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "About the Artist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mara Alcaraz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " is a Philippine based abstract artist that tells her stories by using bold colors and textures in her artworks. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " She is a business analyst by profession and an abstract painter by passion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Most of her works are inspired by Wassily Kandinsky, Van Gogh, and Joan Mir\u00F3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " CHECK ARTWORKS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]], styles: [".content-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n\n.content-flex-item[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.section-cont[_ngcontent-%COMP%] {\n  border-bottom: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: #bdbbbb;\n  padding: 50px 0;\n}\n\n.carousel-img-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.carousel-img-wrapper[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 520px;\n}\n\n#about-article[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n#about-article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 45px;\n}\n\n#about-article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#about-images[_ngcontent-%COMP%] {\n  padding: 20px;\n  text-align: center;\n}\n\n#artist-image[_ngcontent-%COMP%] {\n  width: 400px;\n  height: 400px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n#buttons[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n#featured-tag-wrapper[_ngcontent-%COMP%] {\n  background-color: #707070;\n  color: #ffffff;\n  padding: 5px;\n  width: 150px;\n  text-align: center;\n}\n\n#featured-tag-wrapper[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n#featured-artwork-detail-cont[_ngcontent-%COMP%] {\n  padding: 50px 0 0 50px;\n}\n\n#featured-artwork-title[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-size: 55px;\n  font-weight: 900;\n}\n\n@media screen and (max-width: 1075px) {\n  .home-wrapper[_ngcontent-%COMP%] {\n    padding: 20px 30px;\n  }\n\n  #about-article[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 0;\n  }\n  #about-article[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  #about-article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n\n  #artist-image[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    object-fit: cover;\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBUEo7O0FBV0E7RUFDSSxPQUFBO0FBUko7O0FBWUE7RUFFSSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBdEJRO0VBdUJSLGVBQUE7QUFWSjs7QUFhQTtFQUNJLFdBQUE7QUFWSjs7QUFhQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBVko7O0FBY0E7RUFDSSxhQUFBO0FBWEo7O0FBYUk7RUFDSSxlQUFBO0FBWFI7O0FBY0k7RUFDSSxlQUFBO0FBWlI7O0FBZ0JBO0VBQ0ksYUFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBYko7O0FBZ0JBO0VBQ0ksZ0JBQUE7QUFiSjs7QUFnQkE7RUFDSSx5QkFsRVE7RUFtRVIsY0FqRUk7RUFrRUosWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWJKOztBQWVJO0VBQ0ksU0FBQTtBQWJSOztBQWlCQTtFQUNJLHNCQUFBO0FBZEo7O0FBaUJBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWRKOztBQW1CQTtFQUNJO0lBQ0ksa0JBQUE7RUFoQk47O0VBb0JFO0lBRUksa0JBQUE7SUFDQSxVQUFBO0VBbEJOO0VBb0JNO0lBQ0ksZUFBQTtFQWxCVjtFQXFCTTtJQUNJLGVBQUE7RUFuQlY7O0VBd0JFO0lBQ0ksWUFBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0VBckJOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRkYXJrZ3JleTogICM3MDcwNzA7XHJcbiRsaWdodGdyZXk6ICNiZGJiYmI7XHJcbiR3aGl0ZTogI2ZmZmZmZjtcclxuXHJcbi8vIC5ob21lLXdyYXBwZXJ7XHJcbi8vICAgICBwYWRkaW5nOiAwcHggMTUwcHg7XHJcbi8vIH1cclxuXHJcbi5jb250ZW50LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwLXJldmVyc2U7IFxyXG4gICAgXHJcbn1cclxuXHJcbi5jb250ZW50LWZsZXgtaXRlbXtcclxuICAgIGZsZXg6MTtcclxuXHJcbn1cclxuXHJcbi5zZWN0aW9uLWNvbnR7XHJcbiAgICAvLyBoZWlnaHQ6MTAwdmg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRsaWdodGdyZXk7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbWctd3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW1nLXdyYXBwZXIgPiBpbWd7XHJcbiAgICB3aWR0aDoxMDAlOyAgICAgIFxyXG4gICAgaGVpZ2h0OjUyMHB4O1xyXG4gICBcclxufVxyXG5cclxuI2Fib3V0LWFydGljbGV7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgIH1cclxuXHJcbiAgICBwe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxufVxyXG5cclxuI2Fib3V0LWltYWdlc3tcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhcnRpc3QtaW1hZ2V7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICAgICAgXHJcbn1cclxuXHJcbiNidXR0b25ze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI2ZlYXR1cmVkLXRhZy13cmFwcGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtncmV5O1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbiNmZWF0dXJlZC1hcnR3b3JrLWRldGFpbC1jb250e1xyXG4gICAgcGFkZGluZzogNTBweCAwIDAgNTBweDtcclxufVxyXG5cclxuI2ZlYXR1cmVkLWFydHdvcmstdGl0bGV7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogNTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA3NXB4KSB7XHJcbiAgICAuaG9tZS13cmFwcGVye1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMzBweDsgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAjYWJvdXQtYXJ0aWNsZXtcclxuXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgIGgxe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgI2FydGlzdC1pbWFnZXtcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTsgICBcclxuICAgICAgICBcclxuICAgIH1cclxufSJdfQ== */"] });
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

/***/ "TO+z":
/*!****************************************************!*\
  !*** ./src/app/main-site/about/about.component.ts ***!
  \****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 2, vars: 0, template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "about works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VffC":
/*!**********************************************************!*\
  !*** ./src/app/main-site/artworks/artworks.component.ts ***!
  \**********************************************************/
/*! exports provided: ArtworksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworksComponent", function() { return ArtworksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_app_data_artwork_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/app-data/artwork-data */ "lkOn");
/* harmony import */ var src_app_models_artwork_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/artwork-model */ "CryT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_artwork_thumbnail_artwork_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/artwork-thumbnail/artwork-thumbnail.component */ "CgIp");






function ArtworksComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtworksComponent_div_8_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const artwork_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.openArtwork(artwork_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "artwork-thumbnail", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const artwork_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("artwork", artwork_r1);
} }
class ArtworksComponent {
    constructor() {
        this.artworkData = new src_app_app_data_artwork_data__WEBPACK_IMPORTED_MODULE_1__["ArtworkData"]();
        this.artworks = this.artworkData.ArtworkList;
        this.modalOpen = false;
        this.selectedArtwork = new src_app_models_artwork_model__WEBPACK_IMPORTED_MODULE_2__["ArtworkModel"]();
    }
    ngOnInit() {
    }
    openArtwork(artwork) {
        this.modalOpen = true;
        this.selectedArtwork = artwork;
        setTimeout(() => this.addShowClassOnModal(), 500);
    }
    closeModal() {
        this.modalOpen = false;
        this.selectedArtwork = new src_app_models_artwork_model__WEBPACK_IMPORTED_MODULE_2__["ArtworkModel"]();
        this.removeShowClassOnModal();
    }
    addShowClassOnModal() {
        let modalElem = document.getElementsByClassName('artwork-modal');
        modalElem[0].classList.add('show');
    }
    removeShowClassOnModal() {
        let modalElem = document.getElementsByClassName('artwork-modal');
        modalElem[0].classList.remove('show');
    }
}
ArtworksComponent.ɵfac = function ArtworksComponent_Factory(t) { return new (t || ArtworksComponent)(); };
ArtworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ArtworksComponent, selectors: [["app-artworks"]], decls: 26, vars: 7, consts: [[1, "page-wrapper"], [1, "page-title"], [1, "page-body"], ["id", "grid-view"], [1, "artwork-grid-wrapper"], ["class", "artwork-grid-item", 3, "click", 4, "ngFor", "ngForOf"], ["id", "artworkModal", 1, "artwork-modal"], [1, "modal-content"], [1, "close-button-cont"], [1, "close-modal-btn", 3, "click"], [1, "artwork-modal-header"], [1, "artwork-modal-body"], ["id", "artwork-container"], ["id", "artwork-img-cont"], ["id", "artwork-img", 3, "src"], ["id", "artwork-details-cont"], [1, "mt-0", "mb-0"], [1, "font-lightgrey", "mt-0", "mb-0"], [1, "font-darkgrey", "fontfam-secondary"], [1, "artwork-grid-item", 3, "click"], [3, "artwork"]], template: function ArtworksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ARTWORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ArtworksComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ArtworksComponent_Template_button_click_12_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.artworks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.selectedArtwork.Url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedArtwork.Title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"]("", ctx.selectedArtwork.Height, "x", ctx.selectedArtwork.Width, " | ", ctx.selectedArtwork.Orientation, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedArtwork.Description);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_artwork_thumbnail_artwork_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["ArtworkThumbnailComponent"]], styles: [".artwork-grid-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.artwork-grid-item[_ngcontent-%COMP%] {\n  padding: 20px;\n  flex: 1 0 175px;\n  width: 175px;\n  max-width: 175px;\n  margin: 5px;\n}\n\n.artwork-modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border-width: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  display: none;\n  overflow: auto;\n  align-items: flex-start;\n  opacity: 0;\n}\n\n.artwork-modal.show[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center;\n  opacity: 1;\n}\n\n.modal-content[_ngcontent-%COMP%] {\n  margin: 75px 250px 0 250px;\n  width: 100%;\n  background-color: #ffffff;\n  flex: 1 1 auto;\n  border-radius: 30px;\n  padding: 50px 150px;\n}\n\n#artwork-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n#artwork-img-cont[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n}\n\n#artwork-details-cont[_ngcontent-%COMP%] {\n  flex: 2;\n  margin-left: 40px;\n  padding: 0 0 0 40px;\n  border-left: solid;\n  border-left-width: 1px;\n  border-left-color: #bdbbbb;\n}\n\nimg#artwork-img[_ngcontent-%COMP%] {\n  max-height: 450px;\n}\n\n.close-button-cont[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.close-modal-btn[_ngcontent-%COMP%] {\n  background-color: black;\n  border-width: 2px;\n  border-color: #ffffff;\n  height: 40px;\n  width: 40px;\n  border-style: solid;\n  border-color: #bdbbbb;\n  text-align: center;\n  border-radius: 50%;\n  color: #ffffff;\n  cursor: pointer;\n  right: 0;\n  position: relative;\n  top: -65px;\n  float: right;\n  right: -145px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcnR3b3Jrcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRko7O0FBS0E7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUZKOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFGSjs7QUFLQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXpDSTtFQTBDSixjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtBQUZKOztBQUtBO0VBQ0ksT0FBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxPQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkEvRFE7QUE2RFo7O0FBS0E7RUFDSSxpQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtBQUZKOztBQU1BO0VBQ0ksdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQTdFSTtFQThFSixZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBbEZRO0VBbUZSLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQXBGSTtFQXFGSixlQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEoiLCJmaWxlIjoiYXJ0d29ya3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbGlnaHRncmV5OiAjYmRiYmJiO1xyXG4kd2hpdGU6ICNmZmZmZmY7XHJcbi5hcnR3b3JrLWdyaWQtd3JhcHBlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uYXJ0d29yay1ncmlkLWl0ZW17XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZmxleDogMSAwIDE3NXB4O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgbWF4LXdpZHRoOiAxNzVweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59XHJcblxyXG4uYXJ0d29yay1tb2RhbHsgICAgXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDowO1xyXG4gICAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIGRpc3BsYXk6IG5vbmU7ICAgIFxyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydCA7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uYXJ0d29yay1tb2RhbC5zaG93e1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudHtcclxuICAgIG1hcmdpbjogNzVweCAyNTBweCAwIDI1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7ICAgICAgICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGU7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA1MHB4IDE1MHB4O1xyXG59XHJcblxyXG4jYXJ0d29yay1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4jYXJ0d29yay1pbWctY29udHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhcnR3b3JrLWRldGFpbHMtY29udHtcclxuICAgIGZsZXg6IDI7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDQwcHg7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQ7XHJcbiAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICRsaWdodGdyZXk7XHJcbn1cclxuXHJcbmltZyNhcnR3b3JrLWltZ3tcclxuICAgIG1heC1oZWlnaHQ6IDQ1MHB4O1xyXG59XHJcblxyXG4uY2xvc2UtYnV0dG9uLWNvbnR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jbG9zZS1tb2RhbC1idG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJvcmRlci13aWR0aDogMnB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkd2hpdGU7XHJcbiAgICBoZWlnaHQ6NDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGxpZ2h0Z3JleTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTY1cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICByaWdodDogLTE0NXB4O1xyXG59XHJcblxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArtworksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-artworks',
                templateUrl: './artworks.component.html',
                styleUrls: ['./artworks.component.scss']
            }]
    }], function () { return []; }, null); })();


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
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
}
MainSiteContainerComponent.ɵfac = function MainSiteContainerComponent_Factory(t) { return new (t || MainSiteContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MainSiteContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainSiteContainerComponent, selectors: [["app-main-site-container"]], decls: 19, vars: 0, consts: [[1, "navbar-flex"], [1, "navbar-title"], [1, "font-lightgrey"], [1, "navbar-links"], [1, "navbar-links-list"], [1, "mr-20", "link-item"], ["routerLink", "/home"], ["routerLink", "/home/artworks"], [1, "link-item"], [1, "content-wrapper"]], template: function MainSiteContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "MARA ALCARAZ |");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ART STUDIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "ARTWORKS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["p[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n  color: #707070;\n}\n\nnav[_ngcontent-%COMP%] {\n  height: 50px;\n  border-bottom: solid;\n  border-color: #707070;\n  padding: 0 60px;\n  z-index: 100;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  background-color: #F1F1F1;\n}\n\n.navbar-flex[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  height: inherit;\n  align-items: center;\n}\n\n.navbar-title[_ngcontent-%COMP%] {\n  flex: 1;\n  width: auto;\n}\n\n.navbar-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.navbar-links[_ngcontent-%COMP%] {\n  flex: 1;\n  width: auto;\n  text-align: right;\n}\n\nul.navbar-links-list[_ngcontent-%COMP%] {\n  margin: 0;\n  list-style-type: none;\n  padding: 0;\n}\n\nul.navbar-links-list[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.link-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.link-item[_ngcontent-%COMP%]:hover {\n  font-weight: 600;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  margin: 50px 30px 20px 30px;\n}\n\n@media screen and (max-width: 600px) {\n  nav[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 20px 0;\n  }\n\n  .navbar-title[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n    text-align: center;\n    padding: 10px 0;\n  }\n\n  .navbar-links[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n    text-align: center;\n  }\n\n  .content-wrapper[_ngcontent-%COMP%] {\n    margin: 100px 30px 20px 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLXNpdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLE9BQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0k7RUFDSSxTQUFBO0FBQ1I7O0FBR0E7RUFDSSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQUo7O0FBSUE7RUFDSSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBREo7O0FBSUE7RUFFSSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtBQUZKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFNQTtFQUNJLDJCQUFBO0FBSEo7O0FBTUE7RUFFSTtJQUNJLFlBQUE7SUFDQSxlQUFBO0VBSk47O0VBTUU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxlQUFBO0VBSE47O0VBTUU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUFITjs7RUFNRTtJQUNJLDRCQUFBO0VBSE47QUFDRiIsImZpbGUiOiJtYWluLXNpdGUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCwgaDEsIGgyLCBoMywgaDQsIGxpIHtcclxuICAgIGNvbG9yOiM3MDcwNzA7XHJcbn1cclxuXHJcbm5hdntcclxuICAgIGhlaWdodDo1MHB4OyAgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICM3MDcwNzA7XHJcbiAgICBwYWRkaW5nOiAwIDYwcHg7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcclxufVxyXG5cclxuLm5hdmJhci1mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hdmJhci10aXRsZXtcclxuICAgIGZsZXg6MTtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG5cclxuICAgIHB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2YmFyLWxpbmtze1xyXG4gICAgZmxleDogMTsgICAgXHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG5cclxudWwubmF2YmFyLWxpbmtzLWxpc3R7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbnVsLm5hdmJhci1saW5rcy1saXN0ID4gbGl7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmxpbmstaXRlbXtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmxpbmstaXRlbTpob3ZlcntcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG59XHJcblxyXG4uY29udGVudC13cmFwcGVye1xyXG4gICAgbWFyZ2luOjUwcHggMzBweCAyMHB4IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgbmF2e1xyXG4gICAgICAgIGhlaWdodDphdXRvOyAgIFxyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIH1cclxuICAgIC5uYXZiYXItdGl0bGV7ICAgIFxyXG4gICAgICAgIGZsZXg6IDEgMCAxMDAlOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgXHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubmF2YmFyLWxpbmtze1xyXG4gICAgICAgIGZsZXg6IDEgMCAxMDAlOyBcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtd3JhcHBlcntcclxuICAgICAgICBtYXJnaW46MTAwcHggMzBweCAyMHB4IDMwcHg7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainSiteContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-site-container',
                templateUrl: './main-site-container.component.html',
                styleUrls: ['./main-site-container.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _main_site_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-site/about/about.component */ "TO+z");
/* harmony import */ var _main_site_artworks_artworks_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-site/artworks/artworks.component */ "VffC");
/* harmony import */ var _shared_artwork_thumbnail_artwork_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/artwork-thumbnail/artwork-thumbnail.component */ "CgIp");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"],
        _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_5__["MainSiteContainerComponent"],
        _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _main_site_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _main_site_artworks_artworks_component__WEBPACK_IMPORTED_MODULE_8__["ArtworksComponent"],
        _shared_artwork_thumbnail_artwork_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__["ArtworkThumbnailComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_4__["WelcomePageComponent"],
                    _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_5__["MainSiteContainerComponent"],
                    _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                    _main_site_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _main_site_artworks_artworks_component__WEBPACK_IMPORTED_MODULE_8__["ArtworksComponent"],
                    _shared_artwork_thumbnail_artwork_thumbnail_component__WEBPACK_IMPORTED_MODULE_9__["ArtworkThumbnailComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"]
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

/***/ "lkOn":
/*!******************************************!*\
  !*** ./src/app/app-data/artwork-data.ts ***!
  \******************************************/
/*! exports provided: ArtworkData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtworkData", function() { return ArtworkData; });
class ArtworkData {
    constructor() {
        this.ArtworkList = [
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                Height: 0,
                Width: 0,
                Orientation: "Portrait",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_lighthouse.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
            {
                Name: "",
                Url: "/assets/images/ma_artwork_gold.jpg",
                Title: "Lighthouse",
                Description: "",
                Height: 0,
                Width: 0,
                Orientation: "",
                CreatedDate: null
            },
        ];
    }
}


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
/* harmony import */ var _main_site_artworks_artworks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-site/artworks/artworks.component */ "VffC");








const routes = [
    { path: '', component: src_app_welcome_page_welcome_page_component__WEBPACK_IMPORTED_MODULE_2__["WelcomePageComponent"] },
    { path: 'home', component: _main_site_main_site_container_main_site_container_component__WEBPACK_IMPORTED_MODULE_3__["MainSiteContainerComponent"], children: [
            { path: '', component: _main_site_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], pathMatch: 'full' },
            { path: 'artworks', component: _main_site_artworks_artworks_component__WEBPACK_IMPORTED_MODULE_5__["ArtworksComponent"], pathMatch: 'full' }
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