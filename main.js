(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\qug\programmation\ihm-scrollbar\src\main.ts */"zUnb");


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

/***/ "PPKh":
/*!****************************************************!*\
  !*** ./src/app/action-bar/action-bar.component.ts ***!
  \****************************************************/
/*! exports provided: ActionBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionBarComponent", function() { return ActionBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");



class ActionBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
ActionBarComponent.ɵfac = function ActionBarComponent_Factory(t) { return new (t || ActionBarComponent)(); };
ActionBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActionBarComponent, selectors: [["app-action-bar"]], decls: 7, vars: 0, consts: [["color", "primary"], ["mat-fab", ""]], template: function ActionBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["footer[_ngcontent-%COMP%] {\n  background-color: green;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 6px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin: auto;\n  background-color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9uLWJhci9hY3Rpb24tYmFyLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0NBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbi1iYXIvYWN0aW9uLWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlciBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuXHJcbiAgICBoZWlnaHQ6IDYwcHhcclxuICAgIGRpc3BsYXk6IGZsZXhcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXHJcbiAgICBwYWRkaW5nOiA2cHhcclxuXHJcbmJ1dHRvblxyXG4gICAgbWFyZ2luOiBhdXRvXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-action-bar',
                templateUrl: './action-bar.component.html',
                styleUrls: ['./action-bar.component.sass']
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_bar_page_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-bar/page-bar.component */ "b/e+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-bar/action-bar.component */ "PPKh");








function AppComponent_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 6);
} }
class AppComponent {
    constructor(route) {
        this.route = route;
        this.title = 'ihm-scrollbar';
        this.scrollProgress = 0;
        this.currentPageNumber = 1;
        this.totalPageNumber = 11;
    }
    ngOnInit() {
        console.log(this.route.snapshot.params);
        //this.currentPageNumber = +this.route.snapshot.paramMap.get("page");
    }
    ngAfterViewInit() {
        this.pageContent = document.getElementById('page-content');
    }
    setScrollProgress() {
        let height = this.pageContent.clientHeight;
        let scrollHeight = this.pageContent.scrollHeight - height;
        let scrollTop = this.pageContent.scrollTop;
        this.scrollProgress = Math.floor(scrollTop / scrollHeight * 100);
    }
    onSwipeLeft() {
        console.log("swipe left");
        if (this.currentPageNumber >= this.totalPageNumber) {
            return;
        }
        this.currentPageNumber++;
        this.changePage();
    }
    onSwipeRight() {
        console.log("swipe right");
        if (this.currentPageNumber <= 1) {
            return;
        }
        this.currentPageNumber--;
        this.changePage();
    }
    changePage() {
        this.pageContent.scrollTo(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 22, vars: 4, consts: [["id", "root"], [3, "currentPageNumber", "totalPageNumber"], ["mode", "determinate", "color", "green", 1, "scroll-progress", 3, "value"], ["id", "page-content", 3, "scroll", "swipeleft", "swiperight"], ["id", "bottom-arrow", "src", "assets/Bottom_Arrow.svg.png", 4, "ngIf"], ["id", "footer"], ["id", "bottom-arrow", "src", "assets/Bottom_Arrow.svg.png"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-page-bar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function AppComponent_Template_section_scroll_4_listener() { return ctx.setScrollProgress(); })("swipeleft", function AppComponent_Template_section_swipeleft_4_listener() { return ctx.onSwipeLeft(); })("swiperight", function AppComponent_Template_section_swiperight_4_listener() { return ctx.onSwipeRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Je me souviens encore du singulier effet que me produisit cette menace. Elle me donna un courage \u00E9norme. \u00ABBast! me disais-je, ils peuvent bien me donner deux mille vers; du diable si je trahis Michu!\u00BB J'attendis avec une impatience f\u00E9brile l'heure du d\u00EEner. La r\u00E9volte devait \u00E9clater au r\u00E9fectoire. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Le grand Michu \u00E9tait du Var. Son p\u00E8re, un paysan qui poss\u00E9dait quelques bouts de terre, avait fait le coup de feu en 51, lors de l'insurrection provoqu\u00E9e par le coup d'\u00C9tat. Laiss\u00E9 pour mort dans la plaine d'Uch\u00E2ne, il avait r\u00E9ussi \u00E0 se cacher. Quand il reparut, on ne l'inqui\u00E9ta pas. Seulement, les autorit\u00E9s du pays, les notables, les gros et les petits rentiers ne l'appel\u00E8rent plus que ce brigand de Michu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ce brigand, cet honn\u00EAte homme illettr\u00E9, envoya son fils au coll\u00E8ge d'A... Sans doute il le voulait savant pour le triomphe de la cause qu'il n'avait pu d\u00E9fendre, lui, que les armes \u00E0 la main. Nous savions vaguement cette histoire, au coll\u00E8ge, ce qui nous faisait regarder notre camarade comme un personnage tr\u00E8s-redoutable. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Le grand Michu \u00E9tait, d'ailleurs, beaucoup plus \u00E2g\u00E9 que nous. Il avait pr\u00E8s de dix-huit ans, bien qu'il ne se trouv\u00E2t encore qu'en quatri\u00E8me. Mais on n'osait le plaisanter. C'\u00E9tait un de ces esprits droits, qui apprennent difficilement, qui ne devinent rien; seulement, quand il savait une chose, il la savait \u00E0 fond et pour toujours. Fort, comme taill\u00E9 \u00E0 coups de hache, il r\u00E9gnait en ma\u00EEtre pendant les r\u00E9cr\u00E9ations. Avec cela, d'une douceur extr\u00EAme. Je ne l'ai jamais vu qu'une fois en col\u00E8re; il voulait \u00E9trangler un pion qui nous enseignait que tous les r\u00E9publicains \u00E9taient des voleurs et des assassins. On faillit mettre le grand Michu \u00E0 la porte. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Ce n'est que plus tard, lorsque j'ai revu mon ancien camarade dans mes souvenirs, que j'ai pu comprendre son attitude douce et forte. De bonne heure, son p\u00E8re avait d\u00FB en faire un homme. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Le Grand Michu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Frog Reader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AppComponent_img_20_Template, 1, 0, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-action-bar", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentPageNumber", ctx.currentPageNumber)("totalPageNumber", ctx.totalPageNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.scrollProgress);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", 98 >= ctx.scrollProgress);
    } }, directives: [_page_bar_page_bar_component__WEBPACK_IMPORTED_MODULE_3__["PageBarComponent"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_4__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_6__["ActionBarComponent"]], styles: ["#root[_ngcontent-%COMP%] {\n  height: 960px;\n  margin: 0 auto;\n  flex-flow: column;\n  display: flex;\n  position: relative;\n}\n\np[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\nsection[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  flex: 1 1 auto;\n}\n\nsection[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 1em;\n  border-top: 1px dotted grey;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n\np[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\n  margin-left: 65px;\n  margin-right: 65px;\n}\n\nheader[_ngcontent-%COMP%], #footer[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n\n.scroll-progress[_ngcontent-%COMP%] {\n  height: 3em;\n}\n\n#bottom-arrow[_ngcontent-%COMP%] {\n  height: 50px;\n  position: absolute;\n  right: 10px;\n  bottom: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksY0FBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0FBR0o7O0FBREE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFJSjs7QUFGQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFLSjs7QUFIQTtFQUNJLGNBQUE7QUFNSjs7QUFKQTtFQUNJLFdBQUE7QUFPSjs7QUFMQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUUoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNhc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcm9vdCBcclxuICAgIGhlaWdodDogOTYwcHhcclxuICAgIG1hcmdpbjogMCBhdXRvXHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtblxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXHJcblxyXG5wIFxyXG4gICAgZm9udC1zaXplOiAyZW1cclxuXHJcbnNlY3Rpb25cclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG4gICAgZmxleDogMSAxIGF1dG9cclxuXHJcbnNlY3Rpb24gZm9vdGVyXHJcbiAgICBkaXNwbGF5OiBmbGV4XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cclxuICAgIGZvbnQtc2l6ZTogMWVtXHJcbiAgICBib3JkZXItdG9wOiAxcHggZG90dGVkIGdyZXlcclxuICAgIHBhZGRpbmctdG9wOiAxZW1cclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW1cclxuXHJcbnAsIHNlY3Rpb24gZm9vdGVyXHJcbiAgICBtYXJnaW4tbGVmdDogNjVweFxyXG4gICAgbWFyZ2luLXJpZ2h0OiA2NXB4XHJcblxyXG5oZWFkZXIsICNmb290ZXJcclxuICAgIGZsZXg6IDAgMCBhdXRvXHJcblxyXG4uc2Nyb2xsLXByb2dyZXNzXHJcbiAgICBoZWlnaHQ6IDNlbVxyXG5cclxuI2JvdHRvbS1hcnJvd1xyXG4gICAgaGVpZ2h0OiA1MHB4XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGVcclxuICAgIHJpZ2h0OiAxMHB4XHJcbiAgICBib3R0b206IDgwcHgiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.sass']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./action-bar/action-bar.component */ "PPKh");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _page_bar_page_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-bar/page-bar.component */ "b/e+");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _MyHammerConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MyHammerConfig */ "nyya");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            // hammer instantion with custom config
            provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
            useClass: _MyHammerConfig__WEBPACK_IMPORTED_MODULE_10__["MyHammerConfig"],
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"],
        _page_bar_page_bar_component__WEBPACK_IMPORTED_MODULE_7__["PageBarComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _action_bar_action_bar_component__WEBPACK_IMPORTED_MODULE_4__["ActionBarComponent"],
                    _page_bar_page_bar_component__WEBPACK_IMPORTED_MODULE_7__["PageBarComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HammerModule"]
                ],
                providers: [
                    {
                        // hammer instantion with custom config
                        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["HAMMER_GESTURE_CONFIG"],
                        useClass: _MyHammerConfig__WEBPACK_IMPORTED_MODULE_10__["MyHammerConfig"],
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "b/e+":
/*!************************************************!*\
  !*** ./src/app/page-bar/page-bar.component.ts ***!
  \************************************************/
/*! exports provided: PageBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBarComponent", function() { return PageBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");




class PageBarComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageBarComponent.ɵfac = function PageBarComponent_Factory(t) { return new (t || PageBarComponent)(); };
PageBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBarComponent, selectors: [["app-page-bar"]], inputs: { currentPageNumber: "currentPageNumber", totalPageNumber: "totalPageNumber" }, decls: 7, vars: 2, consts: [[1, "page-number"], [1, "page-actions"], ["mat-icon-button", ""]], template: function PageBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Page ", ctx.currentPageNumber, "/", ctx.totalPageNumber, "");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]], styles: ["nav[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  background-color: green;\n  color: white;\n  align-items: center;\n  font-size: 2em;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1iYXIvcGFnZS1iYXIuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlLWJhci9wYWdlLWJhci5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdlxyXG4gICAgZGlzcGxheTogZmxleFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlblxyXG4gICAgY29sb3I6IHdoaXRlXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXHJcbiAgICBmb250LXNpemU6IDJlbVxyXG4gICAgcGFkZGluZzogNnB4XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-bar',
                templateUrl: './page-bar.component.html',
                styleUrls: ['./page-bar.component.sass']
            }]
    }], function () { return []; }, { currentPageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], totalPageNumber: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nyya":
/*!***********************************!*\
  !*** ./src/app/MyHammerConfig.ts ***!
  \***********************************/
/*! exports provided: MyHammerConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function() { return MyHammerConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"] {
    buildHammer(element) {
        let mc = new Hammer(element, {
            touchAction: "pan-y"
        });
        return mc;
    }
}
MyHammerConfig.ɵfac = function MyHammerConfig_Factory(t) { return ɵMyHammerConfig_BaseFactory(t || MyHammerConfig); };
MyHammerConfig.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MyHammerConfig, factory: MyHammerConfig.ɵfac });
const ɵMyHammerConfig_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](MyHammerConfig);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyHammerConfig, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");





const routes = [
    { path: '', redirectTo: "michu/1", pathMatch: "full" },
    { path: 'michu/:page', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] }
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "yLV6");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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