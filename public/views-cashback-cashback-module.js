(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cashback-cashback-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/cashback/cashback.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cashback/cashback.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- for message start -->\n<p-toast class=\"custom-toast\"></p-toast>\n<!-- for message end -->\n\n<div class=\"card cashback-list\">\n  <h5>Cashback List</h5>\n  <section class=\"customer-list\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!-- Cashback Content Start---------- -->\n        <p-table #dt1 [value]=\"lstCashbackListAFA\" [(selection)]=\"lstCashbackListAFA\" dataKey=\"id\"\n          styleClass=\"p-datatable-lstCashbackListAFA\" [rowHover]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n          [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" [paginator]=\"true\"\n          currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [filterDelay]=\"0\"\n          [globalFilterFields]=\"['createDate','brandName','cashbackCategoryTitle','cashbackTypeTitle','rewardPoints','productPrice']\">\n          <ng-template pTemplate=\"caption\">\n            <div class=\"table-header\">\n              List of Cashback\n              <span class=\"p-input-icon-left\">\n                <i class=\"pi pi-search\"></i>\n                <input pInputText type=\"text\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"\n                  placeholder=\"Search...\" />\n              </span>\n            </div>\n          </ng-template>\n          <ng-template pTemplate=\"header\">\n            <tr>\n              <!-- <th style=\"width: 3rem\"></th> -->\n              <th pSortableColumn=\"createDate\">Date <p-sortIcon field=\"createDate\"></p-sortIcon>\n              </th>\n              <th pSortableColumn=\"cashbackTypeTitle\">Type <p-sortIcon field=\"cashbackTypeTitle\"></p-sortIcon>\n              </th>\n              <th pSortableColumn=\"cashbackCategoryTitle\">Category <p-sortIcon field=\"cashbackCategoryTitle\">\n                </p-sortIcon>\n              </th>\n              <th pSortableColumn=\"brandName\">Brands <p-sortIcon field=\"brandName\"></p-sortIcon>\n              </th>\n              <th pSortableColumn=\"products\">Products <p-sortIcon field=\"products\"></p-sortIcon>\n              </th>\n              <th pSortableColumn=\"rewardPoints\">Reward Points <p-sortIcon field=\"rewardPoints\"></p-sortIcon>\n              </th>\n              <th pSortableColumn=\"productPrice\">Product Price <p-sortIcon field=\"productPrice\"></p-sortIcon>\n              </th>\n              <!-- <th pSortableColumn=\"isCollect\">Used <p-sortIcon field=\"date\"></p-sortIcon>\n                             </th> -->\n              <!-- <th pSortableColumn=\"status\">Status <p-sortIcon field=\"status\"></p-sortIcon>\n                                      </th>\n                                      <th pSortableColumn=\"activity\">Activity <p-sortIcon field=\"activity\"></p-sortIcon>\n                                      </th>\n                                      <th style=\"width: 8rem\"></th> -->\n            </tr>\n\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-lstCashbackListAFA>\n            <tr class=\"p-selectable-row\">\n              <!-- <td>\n                                        <p-tableCheckbox [value]=\"lstCashbackListFA\"></p-tableCheckbox>\n                                      </td> -->\n              <td>\n                {{lstCashbackListAFA.createDate | date:'dd-MMM-yyyy'}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.cashbackTypeTitle}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.cashbackCategoryTitle}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.brandName}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.products}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.rewardPoints}}\n              </td>\n              <td>\n                {{lstCashbackListAFA.productPrice}}\n              </td>\n              <!-- <td>\n                               {{lstCashbackListFA.isCollect}}\n                             </td> -->\n              <!-- <td>\n                                        <span class=\"p-column-title\">Activity</span>\n                                        <p-progressBar [value]=\"lstCashbackListFA.activity\" [showValue]=\"false\"></p-progressBar>\n                                      </td> -->\n              <!-- <td style=\"text-align: center\">\n                                        <button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n                                      </td> -->\n            </tr>\n          </ng-template>\n          <ng-template pTemplate=\"emptymessage\">\n            <tr>\n              <td colspan=\"8\">No cashback found.</td>\n            </tr>\n          </ng-template>\n        </p-table>\n        <!-- Cashback Content End---------- -->\n      </div>\n    </div>\n  </section>\n</div>\n");

/***/ }),

/***/ "./src/app/services/cashback.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/cashback.service.ts ***!
  \**********************************************/
/*! exports provided: CashbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackService", function() { return CashbackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CashbackService = /** @class */ (function () {
    function CashbackService(_http) {
        this._http = _http;
    }
    CashbackService.prototype.getAllCashbackListFA = function () {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/Cashback/getAllCashbackListFA");
    };
    CashbackService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CashbackService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CashbackService);
    return CashbackService;
}());



/***/ }),

/***/ "./src/app/views/cashback/cashback-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/cashback/cashback-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: CashbackRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackRoutingModule", function() { return CashbackRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cashback_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashback.component */ "./src/app/views/cashback/cashback.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_helpers/auth.guard */ "./src/app/views/_helpers/auth.guard.ts");





//-----------------------------------------
var routes = [
    {
        path: '',
        data: {
            title: 'Cashback'
        },
        children: [
            {
                path: '',
                redirectTo: 'cashbacks'
            },
            {
                path: 'cashbacks',
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                component: _cashback_component__WEBPACK_IMPORTED_MODULE_3__["CashbackComponent"],
                data: {
                    title: 'Cashbacks'
                }
            },
        ]
    },
];
//------------------------------
var CashbackRoutingModule = /** @class */ (function () {
    function CashbackRoutingModule() {
    }
    CashbackRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CashbackRoutingModule);
    return CashbackRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/cashback/cashback.component.css":
/*!*******************************************************!*\
  !*** ./src/app/views/cashback/cashback.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\ndiv.card {\r\n    padding: 3% 3% 3% 3%;\r\n}\r\n\r\ndiv.cashback-list div.p-fluid div.p-field label.lbl-heading {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.cashback-list div.p-fluid div.p-field label.lbl-details {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2FzaGJhY2svY2FzaGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2Nhc2hiYWNrL2Nhc2hiYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZGl2LmNhcmQge1xyXG4gICAgcGFkZGluZzogMyUgMyUgMyUgMyU7XHJcbn1cclxuXHJcbmRpdi5jYXNoYmFjay1saXN0IGRpdi5wLWZsdWlkIGRpdi5wLWZpZWxkIGxhYmVsLmxibC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXYuY2FzaGJhY2stbGlzdCBkaXYucC1mbHVpZCBkaXYucC1maWVsZCBsYWJlbC5sYmwtZGV0YWlscyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/cashback/cashback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/cashback/cashback.component.ts ***!
  \******************************************************/
/*! exports provided: CashbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackComponent", function() { return CashbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_cashback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cashback.service */ "./src/app/services/cashback.service.ts");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var CashbackComponent = /** @class */ (function () {
    function CashbackComponent(_cashbackService, _messageService, _activatedRoute) {
        this._cashbackService = _cashbackService;
        this._messageService = _messageService;
        this._activatedRoute = _activatedRoute;
        this.error = '';
        this._severity = '';
        this._summary = '';
        this._detail = '';
    }
    CashbackComponent.prototype.ngOnInit = function () {
        this.getAllCashbackListFA();
    };
    CashbackComponent.prototype.getAllCashbackListFA = function () {
        var _this = this;
        this._cashbackService.getAllCashbackListFA().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe({
            next: function (response) {
                console.log(response);
                _this.lstCashbackListAFA = response;
            },
            error: function (error) {
                _this.MessageFun('Error', error, false);
            }
        });
    };
    //-------------message -------method-------start---------------
    CashbackComponent.prototype.MessageFun = function (status, message, result) {
        if (result) {
            this._severity = 'success';
            this._summary = 'Success';
            this._detail = message;
        }
        else if (status == "Error") {
            this._severity = 'error';
            this._summary = 'Error';
            this._detail = message;
        }
        else {
            this._severity = 'error';
            this._summary = 'Failed';
            this._detail = message;
        }
        this._messageService.add({
            severity: this._severity,
            summary: this._summary,
            detail: this._detail
        });
    };
    CashbackComponent.ctorParameters = function () { return [
        { type: _services_cashback_service__WEBPACK_IMPORTED_MODULE_3__["CashbackService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt1'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], CashbackComponent.prototype, "table", void 0);
    CashbackComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cashback',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cashback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/cashback/cashback.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cashback.component.css */ "./src/app/views/cashback/cashback.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_cashback_service__WEBPACK_IMPORTED_MODULE_3__["CashbackService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], CashbackComponent);
    return CashbackComponent;
}());



/***/ }),

/***/ "./src/app/views/cashback/cashback.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/cashback/cashback.module.ts ***!
  \***************************************************/
/*! exports provided: CashbackModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashbackModule", function() { return CashbackModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cashback_cashback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cashback/cashback.component */ "./src/app/views/cashback/cashback.component.ts");
/* harmony import */ var _services_cashback_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/cashback.service */ "./src/app/services/cashback.service.ts");
/* harmony import */ var _helpers_app_initializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/app.initializer */ "./src/app/views/_helpers/app.initializer.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/jwt.interceptor */ "./src/app/views/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/error.interceptor */ "./src/app/views/_helpers/error.interceptor.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/fesm2015/primeng-tabmenu.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/fesm2015/primeng-inputswitch.js");
/* harmony import */ var _cashback_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cashback-routing.module */ "./src/app/views/cashback/cashback-routing.module.ts");

// Angular





















//ThemeRouting

var CashbackModule = /** @class */ (function () {
    function CashbackModule() {
    }
    CashbackModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _cashback_routing_module__WEBPACK_IMPORTED_MODULE_21__["CashbackRoutingModule"],
                // BrowserModule,
                // BrowserAnimationsModule,
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_15__["DialogModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_16__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_14__["ToastModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_17__["ProgressBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_19__["MessagesModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_20__["InputSwitchModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_12__["TabMenuModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_cashback_cashback_component__WEBPACK_IMPORTED_MODULE_5__["CashbackComponent"]],
            bootstrap: [_cashback_cashback_component__WEBPACK_IMPORTED_MODULE_5__["CashbackComponent"]],
            providers: [
                _services_cashback_service__WEBPACK_IMPORTED_MODULE_6__["CashbackService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: _helpers_app_initializer__WEBPACK_IMPORTED_MODULE_7__["appInitializer"], multi: true, deps: [_services_cashback_service__WEBPACK_IMPORTED_MODULE_6__["CashbackService"]] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            ]
        })
    ], CashbackModule);
    return CashbackModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-cashback-cashback-module.js.map