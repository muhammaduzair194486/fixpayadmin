(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-customers-customers-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customer-details/customer-details.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customer-details/customer-details.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-messages [(value)]=\"msgs\" [enableService]=\"false\"></p-messages>\n\n<div class=\"card customer-details\">\n  <h5>Customer Details</h5>\n  <section class=\"customer-details\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"p-fluid\">\n          <div class=\"p-field\">\n            <img [src]=\"customerDetailsFA.image\" [alt]=\"customerDetailsFA.fullName\" width=\"100\" height=\"80\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"brandName\" class=\"lbl-heading\">Name:</label>\n                <label for=\"brandName\" class=\"lbl-details\">{{customerDetailsFA.fullName}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"email\" class=\"lbl-heading\">Email:</label>\n                <label for=\"email\" class=\"lbl-details\">{{customerDetailsFA.email}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"userName\" class=\"lbl-heading\">Username:</label>\n                <label for=\"userName\" class=\"lbl-details\">{{customerDetailsFA.username}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"phoneNumber\" class=\"lbl-heading\">Phone Number:</label>\n                <label for=\"phoneNumber\" class=\"lbl-details\">{{customerDetailsFA.phoneNumber}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"date\" class=\"lbl-heading\">Joinning Date:</label>\n                <label for=\"date\" class=\"lbl-details\">{{customerDetailsFA.createDate | date: 'dd-MMM-yyyy'}}</label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"p-fluid\">\n              <div class=\"p-field\">\n                <label for=\"date\" class=\"lbl-heading\">Wallet:</label>\n                <label for=\"date\" class=\"lbl-details\">{{customerDetailsFA.totalBalance}}</label>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n</div>\n\n<div class=\"card customer-details-tabmenu\">\n  <h5>Customer Details</h5>\n  <section class=\"customer-details-tabmenu\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <!-- Custome Header-----start -->\n        <p-tabView styleClass=\"tabview-custom\">\n          <p-tabPanel>\n            <ng-template pTemplate=\"header\">\n              <i class=\"pi pi-briefcase\"></i>\n              <span> Cashback</span>\n            </ng-template>\n            <!-- Cashback Content Start---------- -->\n            <p-table #dt1 [value]=\"lstCashbackListFA\" [(selection)]=\"lstCashbackListFA\" dataKey=\"id\"\n              styleClass=\"p-datatable-lstCashbackListFA\" [rowHover]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n              [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" [paginator]=\"true\"\n              currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [filterDelay]=\"0\"\n              [globalFilterFields]=\"['createDate','cashbackTypeTitle','cashbackCategoryTitle','rewardPoints']\">\n              <ng-template pTemplate=\"caption\">\n                <div class=\"table-header\">\n                  List of Cashback\n                  <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt1.filterGlobal($event.target.value, 'contains')\"\n                      placeholder=\"Search...\" />\n                  </span>\n                </div>\n              </ng-template>\n              <ng-template pTemplate=\"header\">\n                <tr>\n                  <!-- <th style=\"width: 3rem\"></th> -->\n                  <th pSortableColumn=\"createDate\">Date <p-sortIcon field=\"createDate\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"cashbackTypeTitle\">Type <p-sortIcon field=\"cashbackTypeTitle\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"cashbackCategoryTitle\">Category <p-sortIcon field=\"cashbackCategoryTitle\">\n                    </p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"rewardPoints\">Reward Points <p-sortIcon field=\"rewardPoints\"></p-sortIcon>\n                  </th>\n                  <!-- <th pSortableColumn=\"isCollect\">Used <p-sortIcon field=\"date\"></p-sortIcon>\n                     </th> -->\n                  <!-- <th pSortableColumn=\"status\">Status <p-sortIcon field=\"status\"></p-sortIcon>\n                              </th>\n                              <th pSortableColumn=\"activity\">Activity <p-sortIcon field=\"activity\"></p-sortIcon>\n                              </th>\n                              <th style=\"width: 8rem\"></th> -->\n                </tr>\n\n              </ng-template>\n              <ng-template pTemplate=\"body\" let-lstCashbackListFA>\n                <tr class=\"p-selectable-row\">\n                  <!-- <td>\n                                <p-tableCheckbox [value]=\"lstCashbackListFA\"></p-tableCheckbox>\n                              </td> -->\n                  <td>\n                    {{lstCashbackListFA.createDate | date:'dd-MMM-yyyy'}}\n                  </td>\n                  <td>\n                    {{lstCashbackListFA.cashbackTypeTitle}}\n                  </td>\n                  <td>\n                    {{lstCashbackListFA.cashbackCategoryTitle}}\n                  </td>\n                  <td>\n                    {{lstCashbackListFA.rewardPoints}}\n                  </td>\n                  <!-- <td>\n                       {{lstCashbackListFA.isCollect}}\n                     </td> -->\n                  <!-- <td>\n                                <span class=\"p-column-title\">Activity</span>\n                                <p-progressBar [value]=\"lstCashbackListFA.activity\" [showValue]=\"false\"></p-progressBar>\n                              </td> -->\n                  <!-- <td style=\"text-align: center\">\n                                <button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n                              </td> -->\n                </tr>\n              </ng-template>\n              <ng-template pTemplate=\"emptymessage\">\n                <tr>\n                  <td colspan=\"8\">No cashback found.</td>\n                </tr>\n              </ng-template>\n            </p-table>\n            <!-- Cashback Content End---------- -->\n          </p-tabPanel>\n          <p-tabPanel header=\"Header II\">\n            <ng-template pTemplate=\"header\">\n              <i class=\"pi pi-share-alt\"></i>\n              <span> Transactions</span>\n            </ng-template>\n\n            <!-- Transactions Content Start---------- -->\n            <p-table #dt2 [value]=\"lstTransactionListFA\" [(selection)]=\"lstTransactionListFA\" dataKey=\"id\"\n              styleClass=\"p-datatable-lstTransactionListFA\" [rowHover]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n              [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" [paginator]=\"true\"\n              currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [filterDelay]=\"0\"\n              [globalFilterFields]=\"['createDate','brandName','paymentModeTitle','transactionModeTile','transactionTypeTitle','amount']\">\n              <ng-template pTemplate=\"caption\">\n                <div class=\"table-header\">\n                  List of Cashback\n                  <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt2.filterGlobal($event.target.value, 'contains')\"\n                      placeholder=\"Search...\" />\n                  </span>\n                </div>\n              </ng-template>\n              <ng-template pTemplate=\"header\">\n                <tr>\n                  <!-- <th style=\"width: 3rem\"></th> -->\n                  <th pSortableColumn=\"createDate\">Date <p-sortIcon field=\"createDate\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"brandName\">Merchants <p-sortIcon field=\"brandName\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"paymentModeTitle\">Payment Mode <p-sortIcon field=\"paymentModeTitle\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"transactionModeTile\">Transaction Mode <p-sortIcon field=\"transactionModeTile\">\n                    </p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"transactionTypeTitle\">Credit <p-sortIcon field=\"transactionTypeTitle\">\n                    </p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"transactionTypeTitle\">Debit <p-sortIcon field=\"transactionTypeTitle\">\n                    </p-sortIcon>\n                  </th>\n                  <!-- <th pSortableColumn=\"amount\">Amount <p-sortIcon field=\"amount\"></p-sortIcon>\n                  </th> -->\n                  <!-- <th pSortableColumn=\"isCollect\">Used <p-sortIcon field=\"date\"></p-sortIcon>\n                  </th> -->\n                  <!-- <th pSortableColumn=\"status\">Status <p-sortIcon field=\"status\"></p-sortIcon>\n                           </th>\n                           <th pSortableColumn=\"activity\">Activity <p-sortIcon field=\"activity\"></p-sortIcon>\n                           </th>\n                           <th style=\"width: 8rem\"></th> -->\n                </tr>\n\n              </ng-template>\n              <ng-template pTemplate=\"body\" let-lstTransactionListFA>\n\n                <tr class=\"p-selectable-row\" *ngIf=\"lstTransactionListFA.transactionTypeNumber == 1\">\n                  <!-- If Credit -->\n                  <!-- <td>\n                          <p-tableCheckbox [value]=\"lstCashbackListFA\"></p-tableCheckbox>\n                       </td> -->\n                  <td>\n                    {{lstTransactionListFA.createDate | date:'dd-MMM-yyyy'}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.brandName}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.paymentModeTitle}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.transactionModeTile}}\n                  </td>\n                  <!-- <td>\n                    {{lstTransactionListFA.transactionTypeTitle}}\n                  </td> -->\n                  <td>\n                    {{lstTransactionListFA.amount}}\n                  </td>\n                  <td>\n                    0\n                  </td>\n                  <!-- <td>\n                    {{lstCashbackListFA.isCollect}}\n                  </td> -->\n                  <!-- <td>\n                             <span class=\"p-column-title\">Activity</span>\n                             <p-progressBar [value]=\"lstCashbackListFA.activity\" [showValue]=\"false\"></p-progressBar>\n                           </td> -->\n                  <!-- <td style=\"text-align: center\">\n                             <button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n                           </td> -->\n                </tr>\n                <tr class=\"p-selectable-row\" *ngIf=\"lstTransactionListFA.transactionTypeNumber == 2\">\n                  <!-- If Debit -->\n                  <!-- <td>\n                               <p-tableCheckbox [value]=\"lstCashbackListFA\"></p-tableCheckbox>\n                             </td> -->\n                  <td>\n                    {{lstTransactionListFA.createDate | date:'dd-MMM-yyyy'}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.brandName}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.paymentModeTitle}}\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.transactionModeTile}}\n                  </td>\n                  <!-- <td>\n                      {{lstTransactionListFA.transactionTypeTitle}}\n                    </td> -->\n                  <td>\n                    0\n                  </td>\n                  <td>\n                    {{lstTransactionListFA.amount}}\n                  </td>\n                  <!-- <td>\n                      {{lstCashbackListFA.isCollect}}\n                    </td> -->\n                  <!-- <td>\n                               <span class=\"p-column-title\">Activity</span>\n                               <p-progressBar [value]=\"lstCashbackListFA.activity\" [showValue]=\"false\"></p-progressBar>\n                             </td> -->\n                  <!-- <td style=\"text-align: center\">\n                               <button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n                             </td> -->\n                </tr>\n              </ng-template>\n              <ng-template pTemplate=\"emptymessage\">\n                <tr>\n                  <td colspan=\"8\">No transactions found.</td>\n                </tr>\n              </ng-template>\n            </p-table>\n            <!-- Transactions Content End---------- -->\n\n          </p-tabPanel>\n          <p-tabPanel header=\"Header III\">\n            <ng-template pTemplate=\"header\">\n              <i class=\"pi pi-user-plus\"></i>\n              <span> Friends</span>\n            </ng-template>\n\n            <!-- Friends Content Start---------- -->\n            <p-table #dt3 [value]=\"lstFriendListModelFA\" [(selection)]=\"lstFriendListModelFA\" dataKey=\"id\"\n              styleClass=\"p-datatable-lstFriendListModelFA\" [rowHover]=\"true\" [rows]=\"10\" [showCurrentPageReport]=\"true\"\n              [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" [paginator]=\"true\"\n              currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\" [filterDelay]=\"0\"\n              [globalFilterFields]=\"['createDate','email','friendRequestFlagTitle','fullName','email','userName','phoneNumber']\">\n              <ng-template pTemplate=\"caption\">\n                <div class=\"table-header\">\n                  List of Cashback\n                  <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt3.filterGlobal($event.target.value, 'contains')\"\n                      placeholder=\"Search...\" />\n                  </span>\n                </div>\n              </ng-template>\n              <ng-template pTemplate=\"header\">\n                <tr>\n                  <!-- <th style=\"width: 3rem\"></th> -->\n                  <th pSortableColumn=\"fullName\">Friend<p-sortIcon field=\"fullName\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"fullName\">Flag<p-sortIcon field=\"fullName\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"email\">Email <p-sortIcon field=\"email\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"userName\">Username <p-sortIcon field=\"userName\">\n                    </p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"phoneNumber\">Phone Number <p-sortIcon field=\"phoneNumber\"></p-sortIcon>\n                  </th>\n                  <th pSortableColumn=\"createDate\">Date <p-sortIcon field=\"createDate\"></p-sortIcon>\n                  </th>\n                  <!-- <th pSortableColumn=\"isCollect\">Used <p-sortIcon field=\"date\"></p-sortIcon>\n                     </th> -->\n                  <!-- <th pSortableColumn=\"status\">Status <p-sortIcon field=\"status\"></p-sortIcon>\n                              </th>\n                              <th pSortableColumn=\"activity\">Activity <p-sortIcon field=\"activity\"></p-sortIcon>\n                              </th>\n                              <th style=\"width: 8rem\"></th> -->\n                </tr>\n\n              </ng-template>\n              <ng-template pTemplate=\"body\" let-lstFriendListModelFA>\n                <tr class=\"p-selectable-row\">\n                  <!-- <td>\n                                <p-tableCheckbox [value]=\"lstCashbackListFA\"></p-tableCheckbox>\n                              </td> -->\n                  <td>\n                    <img [alt]=\"lstFriendListModelFA.fullName\" [src]=\"lstFriendListModelFA.image\" width=\"32\"\n                      style=\"vertical-align: middle\" />\n                    <span class=\"image-text\">{{lstFriendListModelFA.fullName}}</span>\n                  </td>\n                  <td>\n                    {{lstFriendListModelFA.friendRequestFlagTitle}}\n                  </td>\n                  <td>\n                    {{lstFriendListModelFA.email}}\n                  </td>\n                  <td>\n                    {{lstFriendListModelFA.userName}}\n                  </td>\n                  <td>\n                    {{lstFriendListModelFA.phoneNumber}}\n                  </td>\n                  <td>\n                    {{lstFriendListModelFA.createDate | date:'dd-MMM-yyyy'}}\n                  </td>\n                  <!-- <td>\n                       {{lstCashbackListFA.isCollect}}\n                     </td> -->\n                  <!-- <td>\n                                <span class=\"p-column-title\">Activity</span>\n                                <p-progressBar [value]=\"lstCashbackListFA.activity\" [showValue]=\"false\"></p-progressBar>\n                              </td> -->\n                  <!-- <td style=\"text-align: center\">\n                                <button pButton type=\"button\" class=\"p-button-secondary\" icon=\"pi pi-cog\"></button>\n                              </td> -->\n                </tr>\n              </ng-template>\n              <ng-template pTemplate=\"emptymessage\">\n                <tr>\n                  <td colspan=\"8\">No friends found.</td>\n                </tr>\n              </ng-template>\n            </p-table>\n            <!-- Friends Content End---------- -->\n\n          </p-tabPanel>\n        </p-tabView>\n        <!-- Custome Header-----end -->\n      </div>\n    </div>\n\n\n\n  </section>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customers.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customers.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- for message start -->\n<p-toast class=\"custom-toast\"></p-toast>\n<!-- for message end -->\n\n<p-table #dt [value]=\"customerList\" dataKey=\"id\"\n        [rows]=\"10\" [showCurrentPageReport]=\"true\" [rowsPerPageOptions]=\"[10,25,50]\" [loading]=\"loading\" styleClass=\"p-datatable-customerList\"\n        [paginator]=\"true\" currentPageReportTemplate=\"Showing {first} to {last} of {totalRecords} entries\"\n        [filterDelay]=\"0\" [globalFilterFields]=\"['fullName','phoneNumber']\">\n        <ng-template pTemplate=\"caption\">\n            <div class=\"table-header\">\n                List of Customers\n                <span class=\"p-input-icon-left\">\n                    <i class=\"pi pi-search\"></i>\n                    <input pInputText type=\"text\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" placeholder=\"Global Search\" />\n                </span>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Image</th>\n                <th>Name</th>\n                <th>PhoneNumber</th>\n                <th>Joinning Date</th>\n                <th>Status</th>\n                <th>Actions</th>\n                <!-- <th>Address</th> -->\n            </tr>\n            <tr>\n                <th></th>\n                <th>\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'fullName', 'startsWith')\" placeholder=\"Search\" class=\"p-column-filter\">\n                </th>\n                <th>\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'phoneNumber', 'contains')\" placeholder=\"Search\" class=\"p-column-filter\">\n                </th>\n                <th></th>\n                <th></th>\n                <th></th>\n                <!-- <th>\n                    <input pInputText type=\"text\" (input)=\"dt.filter($event.target.value, 'address', 'contains')\" placeholder=\"Search\" class=\"p-column-filter\">\n                </th> -->\n                <!-- <th>\n                    <input pInputText type=\"text\" (input)=\"onActivityChange($event)\" placeholder=\"Minimum\" class=\"p-column-filter\" >\n                </th> -->\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-customerList>\n            <tr>\n                <td>\n                    <img [src]=\"customerList.image\" [alt]=\"customerList.fullName\" width=\"120\" height=\"100\"/>\n                </td>\n                <td>\n                    {{customerList.fullName}}\n                </td>\n                <td>\n                    {{customerList.phoneNumber}}\n                </td>\n                <td>\n                    {{customerList.createDate | date: 'dd-MMM-yyy'}}\n                </td>\n                <td>\n                    <p-inputSwitch (onChange)=\"statusChange(customerList.id,customerList.active)\" [(ngModel)]=\"customerList.active\"></p-inputSwitch>\n                </td>\n                <td>\n                    <!-- //customers/customer-details -->\n                    <a [routerLink]=\"['/customers/customer-details']\" [queryParams]=\"{CustomerId: customerList.id}\" pButton pRipple type=\"button\" icon=\"pi pi-eye\" class=\"p-button-rounded p-button-text\"></a>\n                </td>\n                <!-- <td>\n                    {{merchantList.address}}\n                </td> -->\n                <!-- <td>\n                    <img src=\"assets/showcase/images/demo/flag/flag_placeholder.png\" [class]=\"'flag flag-' + customer.country.code\" width=\"30\">\n                    <span class=\"image-text\">{{merchantList.BrandName}}</span>\n                </td> -->\n                <!-- <td>\n                    <img [alt]=\"customer.representative.name\" src=\"assets/showcase/images/demo/avatar/{{customer.representative.image}}\" width=\"32\" style=\"vertical-align: middle\" />\n                    <span class=\"image-text\">{{customer.representative.name}}</span>\n                </td> -->\n                <!-- <td>\n                    {{merchantList.BrandName}}\n                </td> -->\n                <!-- <td>\n                    <span [class]=\"'customer-badge status-' + customer.status\">{{merchantList.BrandName}}</span>\n                </td> -->\n                <!-- <td>\n                    <p-progressBar [value]=\"customer.activity\" [showValue]=\"false\"></p-progressBar>\n                </td> -->\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"emptymessage\">\n            <tr>\n                <td colspan=\"6\">No customers found.</td>\n            </tr>\n        </ng-template>\n    </p-table>\n");

/***/ }),

/***/ "./src/app/services/customers.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/customers.service.ts ***!
  \***********************************************/
/*! exports provided: CustomersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersService", function() { return CustomersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var CustomersService = /** @class */ (function () {
    function CustomersService(_http) {
        this._http = _http;
        this._url = 'https://localhost:44328/api/Customer';
    }
    CustomersService.prototype.getAllCustomers = function () {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/Customer/GetAllCustomersFA");
    };
    CustomersService.prototype.statusChange = function (id, active) {
        return this._http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/Customer/changeStatus", { id: id, active: active });
    };
    CustomersService.prototype.getCustomerCashbackTransactionFriendDetails = function (id) {
        return this._http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/Customer/getCustomerCashbackTransactionFriendDetails/" + id);
    };
    CustomersService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CustomersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomersService);
    return CustomersService;
}());



/***/ }),

/***/ "./src/app/views/customers/customer-details/customer-details.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/views/customers/customer-details/customer-details.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.layout-content .content-section.implementation > h3 {\r\n    font-weight: 600;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\ndiv.card {\r\n    padding: 3% 3% 3% 3%;\r\n}\r\n\r\ndiv.customer-details div.p-fluid div.p-field label.lbl-heading {\r\n    font-size: 14px;\r\n    font-weight: bold;\r\n}\r\n\r\ndiv.customer-details div.p-fluid div.p-field label.lbl-details {\r\n    font-size: 14px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY3VzdG9tZXJzL2N1c3RvbWVyLWRldGFpbHMvY3VzdG9tZXItZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2N1c3RvbWVycy9jdXN0b21lci1kZXRhaWxzL2N1c3RvbWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubGF5b3V0LWNvbnRlbnQgLmNvbnRlbnQtc2VjdGlvbi5pbXBsZW1lbnRhdGlvbiA+IGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbnRleHRhcmVhIHtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxufVxyXG5cclxuZGl2LmNhcmQge1xyXG4gICAgcGFkZGluZzogMyUgMyUgMyUgMyU7XHJcbn1cclxuXHJcbmRpdi5jdXN0b21lci1kZXRhaWxzIGRpdi5wLWZsdWlkIGRpdi5wLWZpZWxkIGxhYmVsLmxibC1oZWFkaW5nIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5kaXYuY3VzdG9tZXItZGV0YWlscyBkaXYucC1mbHVpZCBkaXYucC1maWVsZCBsYWJlbC5sYmwtZGV0YWlscyB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/views/customers/customer-details/customer-details.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/customers/customer-details/customer-details.component.ts ***!
  \********************************************************************************/
/*! exports provided: CustomerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailsComponent", function() { return CustomerDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/customers.service */ "./src/app/services/customers.service.ts");







var CustomerDetailsComponent = /** @class */ (function () {
    function CustomerDetailsComponent(_customersService, messageService, _activatedRoute) {
        var _this = this;
        this._customersService = _customersService;
        this.messageService = messageService;
        this._activatedRoute = _activatedRoute;
        this.CustomerId = '';
        this.loading = true;
        this._activatedRoute.queryParams.subscribe(function (data) {
            _this.CustomerId = data.CustomerId;
        });
    }
    CustomerDetailsComponent.prototype.ngOnInit = function () {
        this.getCustomerCashbackTransactionFriendDetails();
    };
    CustomerDetailsComponent.prototype.getCustomerCashbackTransactionFriendDetails = function () {
        var _this = this;
        this._customersService.getCustomerCashbackTransactionFriendDetails(this.CustomerId).
            pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe({
            next: function (response) {
                console.log(response);
                _this.loading = false;
                _this.customerDetailsFA = response.customerDetailsFA;
                _this.lstCashbackListFA = response.lstCashbackListFA;
                _this.lstFriendListModelFA = response.lstFriendListModelFA;
                _this.lstTransactionListFA = response.lstTransactionListFA;
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    CustomerDetailsComponent.ctorParameters = function () { return [
        { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt1'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], CustomerDetailsComponent.prototype, "table1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt2'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], CustomerDetailsComponent.prototype, "table2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt3'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_5__["Table"])
    ], CustomerDetailsComponent.prototype, "table3", void 0);
    CustomerDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-details',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customer-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customer-details/customer-details.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customer-details.component.css */ "./src/app/views/customers/customer-details/customer-details.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CustomerDetailsComponent);
    return CustomerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/views/customers/customers-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/customers/customers-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersRoutingModule", function() { return CustomersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _customers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers.component */ "./src/app/views/customers/customers.component.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/views/customers/customer-details/customer-details.component.ts");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_helpers/auth.guard */ "./src/app/views/_helpers/auth.guard.ts");






// const routes: Routes = [
//   {
//     path : '',
//     canActivate: [AuthGuard],
//     data : {
//       title : 'Customers',
//     },
//     children:[
//       {
//         path: '',
//         redirectTo: 'customers',
//       },
//       {
//         path: 'customers',
//         component:CustomersComponent,
//         data:{
//           title:'Customers'
//         }
//       }
//     ]
//   }
// ];
//-----------------------------------------
var routes = [
    {
        path: '',
        data: {
            title: 'Customer'
        },
        children: [
            {
                path: '',
                redirectTo: 'customers'
            },
            {
                path: 'customers',
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                component: _customers_component__WEBPACK_IMPORTED_MODULE_3__["CustomersComponent"],
                data: {
                    title: 'Customers'
                }
            },
        ]
    },
    { path: 'customer-details', canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]], component: _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_4__["CustomerDetailsComponent"] }
];
//------------------------------
var CustomersRoutingModule = /** @class */ (function () {
    function CustomersRoutingModule() {
    }
    CustomersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CustomersRoutingModule);
    return CustomersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/customers/customers.component.css":
/*!*********************************************************!*\
  !*** ./src/app/views/customers/customers.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2N1c3RvbWVycy9jdXN0b21lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/views/customers/customers.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/customers/customers.component.ts ***!
  \********************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(_customersService, _messageService) {
        this._customersService = _customersService;
        this._messageService = _messageService;
        this.loading = true;
        this.activityValues = [0, 100];
        this._severity = '';
        this._summary = '';
        this._detail = '';
    }
    CustomersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._customersService.getAllCustomers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe({
            next: function (response) {
                console.log(response);
                _this.customerList = response;
                console.log(_this.customerList);
                _this.loading = false;
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    //------------------------statusChange start-------------------
    CustomersComponent.prototype.statusChange = function (id, status) {
        var _this = this;
        this._customersService.statusChange(id, status).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe({
            next: function (response) {
                console.log(response);
                _this.MessageFun(response.status, response.message, response.result);
            },
            error: function (error) {
                _this.MessageFun('Error', error, false);
            }
        });
    };
    //------------------------statusChange end-------------------
    //-------------message -------method-------start---------------
    CustomersComponent.prototype.MessageFun = function (status, message, result) {
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
    CustomersComponent.ctorParameters = function () { return [
        { type: _services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"] },
        { type: primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dt'),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", primeng_table__WEBPACK_IMPORTED_MODULE_3__["Table"])
    ], CustomersComponent.prototype, "table", void 0);
    CustomersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customers',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/customers/customers.component.html")).default,
            providers: [primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]],
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./customers.component.css */ "./src/app/views/customers/customers.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_customers_service__WEBPACK_IMPORTED_MODULE_2__["CustomersService"],
            primeng_api__WEBPACK_IMPORTED_MODULE_4__["MessageService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/views/customers/customers.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/customers/customers.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersModule", function() { return CustomersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _customers_customers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customers/customers.component */ "./src/app/views/customers/customers.component.ts");
/* harmony import */ var _services_customers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/customers.service */ "./src/app/services/customers.service.ts");
/* harmony import */ var _helpers_app_initializer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_helpers/app.initializer */ "./src/app/views/_helpers/app.initializer.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_helpers/jwt.interceptor */ "./src/app/views/_helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_helpers/error.interceptor */ "./src/app/views/_helpers/error.interceptor.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");
/* harmony import */ var primeng_tabmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabmenu */ "./node_modules/primeng/fesm2015/primeng-tabmenu.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/slider */ "./node_modules/primeng/fesm2015/primeng-slider.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm2015/primeng-multiselect.js");
/* harmony import */ var primeng_contextmenu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/contextmenu */ "./node_modules/primeng/fesm2015/primeng-contextmenu.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/progressbar */ "./node_modules/primeng/fesm2015/primeng-progressbar.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_inputswitch__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/inputswitch */ "./node_modules/primeng/fesm2015/primeng-inputswitch.js");
/* harmony import */ var _customers_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./customers-routing.module */ "./src/app/views/customers/customers-routing.module.ts");
/* harmony import */ var _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./customer-details/customer-details.component */ "./src/app/views/customers/customer-details/customer-details.component.ts");

// Angular


























//ThemeRouting


var CustomersModule = /** @class */ (function () {
    function CustomersModule() {
    }
    CustomersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _customers_routing_module__WEBPACK_IMPORTED_MODULE_26__["CustomersRoutingModule"],
                // BrowserModule,
                // BrowserAnimationsModule,
                primeng_table__WEBPACK_IMPORTED_MODULE_13__["TableModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"],
                primeng_slider__WEBPACK_IMPORTED_MODULE_16__["SliderModule"],
                primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"],
                primeng_multiselect__WEBPACK_IMPORTED_MODULE_17__["MultiSelectModule"],
                primeng_contextmenu__WEBPACK_IMPORTED_MODULE_18__["ContextMenuModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_21__["DropdownModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_20__["ButtonModule"],
                primeng_toast__WEBPACK_IMPORTED_MODULE_14__["ToastModule"],
                primeng_inputtext__WEBPACK_IMPORTED_MODULE_23__["InputTextModule"],
                primeng_progressbar__WEBPACK_IMPORTED_MODULE_22__["ProgressBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                primeng_messages__WEBPACK_IMPORTED_MODULE_24__["MessagesModule"],
                primeng_inputswitch__WEBPACK_IMPORTED_MODULE_25__["InputSwitchModule"],
                primeng_message__WEBPACK_IMPORTED_MODULE_11__["MessageModule"],
                primeng_tabmenu__WEBPACK_IMPORTED_MODULE_12__["TabMenuModule"],
                primeng_tabview__WEBPACK_IMPORTED_MODULE_10__["TabViewModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_27__["CustomerDetailsComponent"]],
            bootstrap: [_customers_customers_component__WEBPACK_IMPORTED_MODULE_5__["CustomersComponent"], _customer_details_customer_details_component__WEBPACK_IMPORTED_MODULE_27__["CustomerDetailsComponent"]],
            providers: [
                _services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"],
                { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["APP_INITIALIZER"], useFactory: _helpers_app_initializer__WEBPACK_IMPORTED_MODULE_7__["appInitializer"], multi: true, deps: [_services_customers_service__WEBPACK_IMPORTED_MODULE_6__["CustomersService"]] },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_9__["ErrorInterceptor"], multi: true },
            ]
        })
    ], CustomersModule);
    return CustomersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-customers-customers-module.js.map