function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["height-weight-lenght-height-weight-lenght-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeightWeightLenghtHeightWeightLenghtPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-back-button text=\"\" icon=\"chevron-back-outline\"></ion-back-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>{{'courier_info' | translate}}</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"bg_color\">\r\n\t<div class=\"banner\">\r\n\t\t<h2 class=\"ion-text-center\">{{'select_measurements' | translate}}</h2>\r\n\t\t<img src=\"assets/images/box.png\">\r\n\t\t<h3 class=\"ion-text-end lenght\">\r\n\t\t\t<span>{{'lenght' | translate}}</span>\r\n\t\t\t<strong> 124 cm </strong>\r\n\t\t</h3>\r\n\t\t<h3 class=\"ion-text-center width\">\r\n\t\t\t<span>{{'width' | translate}}</span>\r\n\t\t\t<strong> 75 cm </strong>\r\n\t\t</h3>\r\n\t\t<h3 class=\"ion-text-center height\">\r\n\t\t\t<span>{{'height' | translate}}</span>\r\n\t\t\t<strong>60 cm </strong>\r\n\t\t</h3>\r\n\t</div>\r\n\t<ion-list lines=\"none\">\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'width' | translate}} <span class=\"end\">75 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-50\" max=\"90\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'lenght' | translate}} <span class=\"end\">124 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-20\" max=\"200\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t\t<ion-item>\r\n\t\t\t<div class=\"item_inner\">\r\n\t\t\t\t<h2 class=\"d-flex\">{{'height' | translate}} <span class=\"end\">60 cm</span></h2>\r\n\t\t\t\t<ion-range mode=\"md\" min=\"-60\" max=\"85\"></ion-range>\r\n\t\t\t\t<h3 class=\"d-flex\">0 cm <span class=\"end\">1000 cm</span></h3>\r\n\t\t\t</div>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n</ion-content>\r\n\r\n<ion-footer class=\"ion-no-border\">\r\n\t<ion-button size=\"large\"  class=\"btn\">{{'done' | translate}}</ion-button>\r\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: HeightWeightLenghtPageRoutingModule */

  /***/
  function srcAppHeightWeightLenghtHeightWeightLenghtRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPageRoutingModule", function () {
      return HeightWeightLenghtPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./height-weight-lenght.page */
    "./src/app/height-weight-lenght/height-weight-lenght.page.ts");

    var routes = [{
      path: '',
      component: _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_3__["HeightWeightLenghtPage"]
    }];

    var HeightWeightLenghtPageRoutingModule = function HeightWeightLenghtPageRoutingModule() {
      _classCallCheck(this, HeightWeightLenghtPageRoutingModule);
    };

    HeightWeightLenghtPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HeightWeightLenghtPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/height-weight-lenght/height-weight-lenght.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/height-weight-lenght/height-weight-lenght.module.ts ***!
    \*********************************************************************/

  /*! exports provided: HeightWeightLenghtPageModule */

  /***/
  function srcAppHeightWeightLenghtHeightWeightLenghtModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPageModule", function () {
      return HeightWeightLenghtPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _height_weight_lenght_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./height-weight-lenght-routing.module */
    "./src/app/height-weight-lenght/height-weight-lenght-routing.module.ts");
    /* harmony import */


    var _height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./height-weight-lenght.page */
    "./src/app/height-weight-lenght/height-weight-lenght.page.ts");

    var HeightWeightLenghtPageModule = function HeightWeightLenghtPageModule() {
      _classCallCheck(this, HeightWeightLenghtPageModule);
    };

    HeightWeightLenghtPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _height_weight_lenght_routing_module__WEBPACK_IMPORTED_MODULE_6__["HeightWeightLenghtPageRoutingModule"]],
      declarations: [_height_weight_lenght_page__WEBPACK_IMPORTED_MODULE_7__["HeightWeightLenghtPage"]]
    })], HeightWeightLenghtPageModule);
    /***/
  },

  /***/
  "./src/app/height-weight-lenght/height-weight-lenght.page.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/height-weight-lenght/height-weight-lenght.page.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeightWeightLenghtHeightWeightLenghtPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: var(--bg-color);\n}\n\n.banner {\n  padding-top: 21px;\n  position: relative;\n  overflow: hidden;\n  width: 300px;\n  margin: 0 auto;\n  height: 310px;\n}\n\n.banner h2 {\n  margin: 0;\n  padding-bottom: 56px;\n  font-weight: 700;\n  font-size: 1.25rem;\n  color: var(--text-black);\n}\n\n.banner img {\n  display: block;\n  margin: 0 auto;\n  width: 160px;\n}\n\n.banner h3 {\n  position: absolute;\n  color: var(--text-black);\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0;\n  font-size: 0.85rem;\n}\n\n.banner h3 strong {\n  display: block;\n  color: var(--primary);\n  font-size: 1.2rem;\n  font-weight: 400;\n}\n\n.banner h3.lenght {\n  left: 0;\n  bottom: 38px;\n}\n\n.banner h3.width {\n  right: -28px;\n  left: 0;\n  margin: 0 auto;\n  bottom: 0;\n}\n\n.banner h3.height {\n  right: 0;\n  bottom: 96px;\n}\n\nion-list {\n  background: var(--transparent) !important;\n  margin: 0;\n  padding: 0;\n  padding-top: 40px;\n}\n\nion-list ion-item {\n  padding: 14px;\n  --inner-padding-end: 0px;\n  --inner-min-height: unset !important;\n  --padding-start: 0;\n  --highligh-color-focused: var(--transparent) !important;\n  --background: var(--transparent);\n  background: var(--white);\n  --min-height: unset;\n  margin-bottom: 5px;\n}\n\nion-list ion-item .item_inner {\n  width: 100%;\n}\n\nion-list ion-item .item_inner h2 {\n  color: var(--text-dark);\n  font-size: 1rem;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n}\n\nion-list ion-item .item_inner h2 span {\n  color: var(--primary);\n  font-weight: 400;\n  font-size: 0.9rem;\n}\n\nion-list ion-item .item_inner h3 {\n  color: var(--text-light);\n  font-size: 0.75rem;\n  width: calc(100% - 25px);\n  margin: 0 auto;\n  font-weight: 400;\n}\n\nion-list ion-item .item_inner ion-range {\n  padding-top: 0;\n  padding-bottom: 0;\n  --bar-background: var(--text-light);\n  --bar-background-active: var(--text-light);\n  --knob-background: var(--primary);\n}\n\nion-footer {\n  background: var(--bg-color);\n}\n\nion-footer .button.btn {\n  --border-radius: 0px 33px 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVpZ2h0LXdlaWdodC1sZW5naHQvRDpcXE1vYmlsZUZyYW13b3Jrc1xcSW9uaWNcXFJlc291cmNlc1xcaW9uaWNUZW1wbGF0ZVxcY291cmllci9zcmNcXGFwcFxcaGVpZ2h0LXdlaWdodC1sZW5naHRcXGhlaWdodC13ZWlnaHQtbGVuZ2h0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvaGVpZ2h0LXdlaWdodC1sZW5naHQvaGVpZ2h0LXdlaWdodC1sZW5naHQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7QUNDRDs7QURFQTtFQUNDLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQ0NEOztBRENDO0VBQ0MsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FDQ0Y7O0FERUM7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNBRjs7QURHQztFQUNDLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURHRTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNESDs7QURJRTtFQUNDLE9BQUE7RUFDQSxZQUFBO0FDRkg7O0FES0U7RUFDQyxZQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDSEg7O0FET0U7RUFDQyxRQUFBO0VBQ0EsWUFBQTtBQ0xIOztBRFdBO0VBQ0MseUNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDUkQ7O0FEVUM7RUFDQyxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsdURBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1JGOztBRFVFO0VBQ0MsV0FBQTtBQ1JIOztBRFVHO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FDUko7O0FEVUk7RUFDQyxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNSTDs7QURZRztFQUNDLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRGFHO0VBQ0MsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0FDWEo7O0FEa0JBO0VBQ0MsMkJBQUE7QUNmRDs7QURpQkM7RUFDQyw2QkFBQTtBQ2ZGIiwiZmlsZSI6InNyYy9hcHAvaGVpZ2h0LXdlaWdodC1sZW5naHQvaGVpZ2h0LXdlaWdodC1sZW5naHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC0tYmFja2dyb3VuZDogdmFyKC0tYmctY29sb3IpO1xyXG59XHJcblxyXG4uYmFubmVyIHtcclxuXHRwYWRkaW5nLXRvcDogMjFweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogMzAwcHg7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0aGVpZ2h0OiAzMTBweDtcclxuXHJcblx0aDIge1xyXG5cdFx0bWFyZ2luOiAwO1xyXG5cdFx0cGFkZGluZy1ib3R0b206IDU2cHg7XHJcblx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0Zm9udC1zaXplOiAxLjI1cmVtO1xyXG5cdFx0Y29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xyXG5cdH1cclxuXHJcblx0aW1nIHtcclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0bWFyZ2luOiAwIGF1dG87XHJcblx0XHR3aWR0aDogMTYwcHg7XHJcblx0fVxyXG5cclxuXHRoMyB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRjb2xvcjogdmFyKC0tdGV4dC1ibGFjayk7XHJcblx0XHR3aWR0aDogZml0LWNvbnRlbnQ7XHJcblx0XHRtYXJnaW46IDA7XHJcblx0XHRmb250LXNpemU6IC44NXJlbTtcclxuXHJcblx0XHRzdHJvbmcge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRmb250LXNpemU6IDEuMnJlbTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdH1cclxuXHJcblx0XHQmLmxlbmdodCB7XHJcblx0XHRcdGxlZnQ6IDA7XHJcblx0XHRcdGJvdHRvbTogMzhweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLndpZHRoIHtcclxuXHRcdFx0cmlnaHQ6IC0yOHB4O1xyXG5cdFx0XHRsZWZ0OiAwO1xyXG5cdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0Ym90dG9tOiAwO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHQmLmhlaWdodCB7XHJcblx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRib3R0b206IDk2cHg7XHJcblxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcGFyZW50KSAhaW1wb3J0YW50O1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdHBhZGRpbmctdG9wOiA0MHB4O1xyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHRwYWRkaW5nOiAxNHB4O1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG5cdFx0LS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1oaWdobGlnaC1jb2xvci1mb2N1c2VkOiB2YXIoLS10cmFuc3BhcmVudCkgIWltcG9ydGFudDtcclxuXHRcdC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xyXG5cdFx0YmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG5cdFx0LS1taW4taGVpZ2h0OiB1bnNldDtcclxuXHRcdG1hcmdpbi1ib3R0b206IDVweDtcclxuXHJcblx0XHQuaXRlbV9pbm5lciB7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0aDIge1xyXG5cdFx0XHRcdGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMXJlbTtcclxuXHRcdFx0XHR3aWR0aDogY2FsYygxMDAlIC0gMjVweCk7XHJcblx0XHRcdFx0bWFyZ2luOiAwIGF1dG87XHJcblxyXG5cdFx0XHRcdHNwYW4ge1xyXG5cdFx0XHRcdFx0Y29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogLjlyZW07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRoMyB7XHJcblx0XHRcdFx0Y29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogLjc1cmVtO1xyXG5cdFx0XHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcclxuXHRcdFx0XHRtYXJnaW46IDAgYXV0bztcclxuXHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpb24tcmFuZ2Uge1xyXG5cdFx0XHRcdHBhZGRpbmctdG9wOiAwO1xyXG5cdFx0XHRcdHBhZGRpbmctYm90dG9tOiAwO1xyXG5cdFx0XHRcdC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQpO1xyXG5cdFx0XHRcdC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuXHRcdFx0XHQtLWtub2ItYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XHJcblxyXG5cdC5idXR0b24uYnRuIHtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogMHB4IDMzcHggMCAwO1xyXG5cdH1cclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1iZy1jb2xvcik7XG59XG5cbi5iYW5uZXIge1xuICBwYWRkaW5nLXRvcDogMjFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBoZWlnaHQ6IDMxMHB4O1xufVxuLmJhbm5lciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy1ib3R0b206IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2spO1xufVxuLmJhbm5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxNjBweDtcbn1cbi5iYW5uZXIgaDMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrKTtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbn1cbi5iYW5uZXIgaDMgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4uYmFubmVyIGgzLmxlbmdodCB7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMzhweDtcbn1cbi5iYW5uZXIgaDMud2lkdGgge1xuICByaWdodDogLTI4cHg7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3R0b206IDA7XG59XG4uYmFubmVyIGgzLmhlaWdodCB7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDk2cHg7XG59XG5cbmlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgcGFkZGluZy10b3A6IDQwcHg7XG59XG5pb24tbGlzdCBpb24taXRlbSB7XG4gIHBhZGRpbmc6IDE0cHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1pbm5lci1taW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0taGlnaGxpZ2gtY29sb3ItZm9jdXNlZDogdmFyKC0tdHJhbnNwYXJlbnQpICFpbXBvcnRhbnQ7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gIC0tbWluLWhlaWdodDogdW5zZXQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBoMiBzcGFuIHtcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cbmlvbi1saXN0IGlvbi1pdGVtIC5pdGVtX2lubmVyIGgzIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICBmb250LXNpemU6IDAuNzVyZW07XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyNXB4KTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5pb24tbGlzdCBpb24taXRlbSAuaXRlbV9pbm5lciBpb24tcmFuZ2Uge1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIC0tYmFyLWJhY2tncm91bmQ6IHZhcigtLXRleHQtbGlnaHQpO1xuICAtLWJhci1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0tdGV4dC1saWdodCk7XG4gIC0ta25vYi1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5KTtcbn1cblxuaW9uLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWNvbG9yKTtcbn1cbmlvbi1mb290ZXIgLmJ1dHRvbi5idG4ge1xuICAtLWJvcmRlci1yYWRpdXM6IDBweCAzM3B4IDAgMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/height-weight-lenght/height-weight-lenght.page.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/height-weight-lenght/height-weight-lenght.page.ts ***!
    \*******************************************************************/

  /*! exports provided: HeightWeightLenghtPage */

  /***/
  function srcAppHeightWeightLenghtHeightWeightLenghtPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeightWeightLenghtPage", function () {
      return HeightWeightLenghtPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HeightWeightLenghtPage = /*#__PURE__*/function () {
      function HeightWeightLenghtPage() {
        _classCallCheck(this, HeightWeightLenghtPage);
      }

      _createClass(HeightWeightLenghtPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeightWeightLenghtPage;
    }();

    HeightWeightLenghtPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-height-weight-lenght',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./height-weight-lenght.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/height-weight-lenght/height-weight-lenght.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./height-weight-lenght.page.scss */
      "./src/app/height-weight-lenght/height-weight-lenght.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HeightWeightLenghtPage);
    /***/
  }
}]);
//# sourceMappingURL=height-weight-lenght-height-weight-lenght-module-es5.js.map