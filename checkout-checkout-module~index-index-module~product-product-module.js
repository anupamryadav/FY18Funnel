(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout-checkout-module~index-index-module~product-product-module"],{

/***/ "./src/app/product/checkout/billing-details/billing-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/product/checkout/billing-details/billing-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  billing-details works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product/checkout/billing-details/billing-details.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/product/checkout/billing-details/billing-details.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/checkout/billing-details/billing-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/product/checkout/billing-details/billing-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BillingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingDetailsComponent", function() { return BillingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BillingDetailsComponent = /** @class */ (function () {
    function BillingDetailsComponent() {
    }
    BillingDetailsComponent.prototype.ngOnInit = function () { };
    BillingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-billing-details",
            template: __webpack_require__(/*! ./billing-details.component.html */ "./src/app/product/checkout/billing-details/billing-details.component.html"),
            styles: [__webpack_require__(/*! ./billing-details.component.scss */ "./src/app/product/checkout/billing-details/billing-details.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BillingDetailsComponent);
    return BillingDetailsComponent;
}());



/***/ }),

/***/ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/product/checkout/checkout-navbar/checkout-navbar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Checking Out Products</h3>\r\n\r\n<div class=\"board-inner\" id=\"status-buttons\">\r\n  <ul class=\"nav nav-tabs\" id=\"myTab\">\r\n    <div class=\"liner\"></div>\r\n\r\n    <!-- circular user icon -->\r\n    <li>\r\n      <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['/']}}]\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"\r\n        data-toggle=\"tab\" title=\"Product Summary\">\r\n        <span class=\"round-tabs one\">\r\n          <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- circular tasks icon -->\r\n    <li>\r\n      <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['shipping-details']}}]\" routerLinkActive=\"active\" data-toggle=\"tab\"\r\n        title=\"Shipping Details\">\r\n        <span class=\"round-tabs two\">\r\n          <i class=\"fa fa-truck\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- circular home icon -->\r\n    <li>\r\n      <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['billing-details']}}]\" routerLinkActive=\"active\" data-toggle=\"tab\"\r\n        title=\"Confirmation\">\r\n        <span class=\"round-tabs three\">\r\n          <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </a>\r\n    </li>\r\n\r\n    <!-- circular ok icon -->\r\n    <li>\r\n      <a [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['result']}}]\" routerLinkActive=\"active\" data-toggle=\"tab\" title=\"Payment\">\r\n        <span class=\"round-tabs four\">\r\n          <i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </a>\r\n    </li>\r\n\r\n  </ul>\r\n  <div class=\"clearfix\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/product/checkout/checkout-navbar/checkout-navbar.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board .nav-tabs {\n  position: relative;\n  margin: 40px auto;\n  margin-bottom: 0;\n  box-sizing: border-box; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none; }\n\n.liner {\n  height: 2px;\n  background: #ddd;\n  position: absolute;\n  width: 78%;\n  margin: 63px auto;\n  left: 0;\n  right: 0;\n  z-index: 1; }\n\n.nav-tabs > li {\n  width: 25%; }\n\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px; }\n\n.nav > li {\n  position: relative;\n  display: block; }\n\n.nav-tabs > li a {\n  width: 70px;\n  height: 70px;\n  margin: 20px auto;\n  border-radius: 100%;\n  padding: 0; }\n\n.nav-tabs > li > a {\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0; }\n\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n\na {\n  background-color: transparent; }\n\n#status-buttons a.active span.round-tabs.one {\n  background: #22c222;\n  color: #fff; }\n\nspan.round-tabs.one {\n  color: #22c222;\n  border: 2px solid #22c222; }\n\nspan.round-tabs.two {\n  color: #febe29;\n  border: 2px solid #febe29; }\n\nspan.round-tabs.three {\n  color: #3e5e9a;\n  border: 2px solid #3e5e9a; }\n\nspan.round-tabs.four {\n  color: #f1685e;\n  border: 2px solid #f1685e; }\n\nspan.round-tabs {\n  width: 70px;\n  height: 70px;\n  line-height: 70px;\n  display: inline-block;\n  border-radius: 100px;\n  background: #fff;\n  z-index: 2;\n  position: absolute;\n  left: 0;\n  text-align: center;\n  font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/product/checkout/checkout-navbar/checkout-navbar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CheckoutNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutNavbarComponent", function() { return CheckoutNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutNavbarComponent = /** @class */ (function () {
    function CheckoutNavbarComponent() {
    }
    CheckoutNavbarComponent.prototype.ngOnInit = function () {
    };
    CheckoutNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-checkout-navbar',
            template: __webpack_require__(/*! ./checkout-navbar.component.html */ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.html"),
            styles: [__webpack_require__(/*! ./checkout-navbar.component.scss */ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutNavbarComponent);
    return CheckoutNavbarComponent;
}());



/***/ }),

/***/ "./src/app/product/checkout/checkout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product/checkout/checkout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\r\n  <div class=\"container\">\r\n    <div class=\"board\">\r\n      <!-- Navigation Area (Circular Tabs) -->\r\n      <app-checkout-navbar></app-checkout-navbar>\r\n      <!-- End Navigation Area (Circular Tabs) -->\r\n\r\n      <!-- Content Area -->\r\n      <div class=\"tab-content\">\r\n        <!-- Routed view  -->\r\n        <router-outlet name=\"checkOutlet\"></router-outlet>\r\n      </div>\r\n      <!-- End Content Area -->\r\n    </div>\r\n\r\n    <!-- For Debugging: show our formData as it is being typed -->\r\n    <!-- <pre>{{ formData | json }}</pre> -->\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/product/checkout/checkout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/product/checkout/checkout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".board {\n  margin: 60px auto;\n  height: 500px;\n  background: #fff; }\n"

/***/ }),

/***/ "./src/app/product/checkout/checkout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product/checkout/checkout.component.ts ***!
  \********************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () { };
    CheckoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/product/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.scss */ "./src/app/product/checkout/checkout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/product/checkout/checkout.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/product/checkout/checkout.module.ts ***!
  \*****************************************************/
/*! exports provided: CheckoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
/* harmony import */ var _checkout_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.routing */ "./src/app/product/checkout/checkout.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkout-navbar/checkout-navbar.component */ "./src/app/product/checkout/checkout-navbar/checkout-navbar.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./result/result.component */ "./src/app/product/checkout/result/result.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/product/checkout/products/products.component.ts");
/* harmony import */ var _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shipping-details/shipping-details.component */ "./src/app/product/checkout/shipping-details/shipping-details.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./checkout.component */ "./src/app/product/checkout/checkout.component.ts");
/* harmony import */ var _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./billing-details/billing-details.component */ "./src/app/product/checkout/billing-details/billing-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _checkout_routing__WEBPACK_IMPORTED_MODULE_0__["CheckoutRoutingModule"]],
            declarations: [
                _checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"],
                _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_9__["BillingDetailsComponent"],
                _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_5__["ShippingDetailsComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                _result_result_component__WEBPACK_IMPORTED_MODULE_3__["ResultComponent"],
                _checkout_navbar_checkout_navbar_component__WEBPACK_IMPORTED_MODULE_2__["CheckoutNavbarComponent"]
            ],
            exports: [_checkout_component__WEBPACK_IMPORTED_MODULE_8__["CheckoutComponent"]]
        })
    ], CheckoutModule);
    return CheckoutModule;
}());



/***/ }),

/***/ "./src/app/product/checkout/checkout.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/product/checkout/checkout.routing.ts ***!
  \******************************************************/
/*! exports provided: checkoutRoutes, CheckoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutRoutes", function() { return checkoutRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutRoutingModule", function() { return CheckoutRoutingModule; });
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.component */ "./src/app/product/checkout/checkout.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result/result.component */ "./src/app/product/checkout/result/result.component.ts");
/* harmony import */ var _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipping-details/shipping-details.component */ "./src/app/product/checkout/shipping-details/shipping-details.component.ts");
/* harmony import */ var _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing-details/billing-details.component */ "./src/app/product/checkout/billing-details/billing-details.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/products.component */ "./src/app/product/checkout/products/products.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var checkoutRoutes = [
    {
        path: "checkouts",
        component: _checkout_component__WEBPACK_IMPORTED_MODULE_0__["CheckoutComponent"],
        children: [
            {
                path: "",
                component: _products_products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
                outlet: "checkOutlet"
            },
            {
                path: "shipping-details",
                component: _shipping_details_shipping_details_component__WEBPACK_IMPORTED_MODULE_2__["ShippingDetailsComponent"],
                outlet: "checkOutlet"
            },
            {
                path: "billing-details",
                component: _billing_details_billing_details_component__WEBPACK_IMPORTED_MODULE_3__["BillingDetailsComponent"],
                outlet: "checkOutlet"
            },
            { path: "result", component: _result_result_component__WEBPACK_IMPORTED_MODULE_1__["ResultComponent"], outlet: "checkOutlet" }
        ]
    }
];
var CheckoutRoutingModule = /** @class */ (function () {
    function CheckoutRoutingModule() {
    }
    CheckoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(checkoutRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], CheckoutRoutingModule);
    return CheckoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/product/checkout/products/products.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/product/checkout/products/products.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <ul class=\"list-group mb-3\">\r\n        <li class=\"list-group-item d-flex justify-content-between lh-condensed\" *ngFor=\"let product of checkoutProducts\">\r\n            <div>\r\n                <img [src]=\"product.productImageUrl\" [alt]=\"product.productName\" width=\"150\" height=\"100\">\r\n            </div>\r\n            <div style=\"padding: 10px\">\r\n                <h6 class=\" my-0 \">{{product.productName}}</h6>\r\n                <p>Product Seller : {{product.productSeller}}</p>\r\n            </div>\r\n            <span class=\"text-muted \">${{product.productPrice}}</span>\r\n        </li>\r\n        <hr>\r\n        <li class=\"list-group-item d-flex justify-content-between \">\r\n            <span>Total (USD)</span>\r\n            <strong>${{totalPrice}}</strong>\r\n        </li>\r\n\r\n    </ul>\r\n    <div class=\"float-right\">\r\n        <a class=\"btn btn-default \" [routerLink]=\"['/checkouts', {outlets: {'checkOutlet': ['shipping-details']}}]\" routerLinkActive=\"active\">Next</a>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/product/checkout/products/products.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/product/checkout/products/products.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/checkout/products/products.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/product/checkout/products/products.component.ts ***!
  \*****************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.totalPrice = 0;
        var products = productService.getLocalCartProducts();
        this.checkoutProducts = products;
        products.forEach(function (product) {
            console.log("Checkout", product.productPrice);
            _this.totalPrice += product.productPrice;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () { };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-products",
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/product/checkout/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/product/checkout/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_0__["ProductService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/product/checkout/result/result.component.html":
/*!***************************************************************!*\
  !*** ./src/app/product/checkout/result/result.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  result works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/product/checkout/result/result.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/product/checkout/result/result.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/checkout/result/result.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/product/checkout/result/result.component.ts ***!
  \*************************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultComponent = /** @class */ (function () {
    function ResultComponent() {
    }
    ResultComponent.prototype.ngOnInit = function () { };
    ResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-result",
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/product/checkout/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/product/checkout/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/product/checkout/shipping-details/shipping-details.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/product/checkout/shipping-details/shipping-details.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"col-md order-md-1\">\r\n    <h4 class=\"mb-3\">Shipping Address</h4>\r\n    <form class=\"needs-validation\" #userDetailsForm=\"ngForm\" (ngSubmit)=\"updateUserDetails(userDetailsForm)\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"firstName\">First name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"firstName\" [(ngModel)]=\"userDetail.firstName\" name=\"firstName\" required>\r\n          <div class=\"invalid-feedback\">\r\n            Valid first name is required.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 mb-3\">\r\n          <label for=\"lastName\">Last name</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"lastName\" [(ngModel)]=\"userDetail.lastName\" name=\"lastName\" required>\r\n          <div class=\"invalid-feedback\">\r\n            Valid last name is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mb-3\">\r\n        <label for=\"username\">Username</label>\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\">@</span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" id=\"username\" [(ngModel)]=\"userDetails.userName\" name=\"userName\" [disabled]=\"true\">\r\n          <div class=\"invalid-feedback\" style=\"width: 100%;\">\r\n            Your username is required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mb-3\">\r\n        <label for=\"email\">Email\r\n          <span class=\"text-muted\">(Optional)</span>\r\n        </label>\r\n        <input type=\"email\" class=\"form-control\" id=\"email\" [(ngModel)]=\"userDetails.emailId\" name=\"email\" [disabled]=\"true\">\r\n        <div class=\"invalid-feedback\">\r\n          Please enter a valid email address for shipping updates.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mb-3\">\r\n        <label for=\"address\">Address</label>\r\n        <input type=\"text\" class=\"form-control\" id=\"address\" placeholder=\"1234 Main St\" [(ngModel)]=\"userDetail.address1\" name=\"address1\"\r\n          required>\r\n        <div class=\"invalid-feedback\">\r\n          Please enter your shipping address.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mb-3\">\r\n        <label for=\"address2\">Address 2\r\n          <span class=\"text-muted\">(Optional)</span>\r\n        </label>\r\n        <input type=\"text\" class=\"form-control\" id=\"address2\" placeholder=\"Apartment or suite\" [(ngModel)]=\"userDetail.address2\"\r\n          name=\"address2\">\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-5 mb-3\">\r\n          <label for=\"country\">Country</label>\r\n          <select class=\"custom-select d-block w-100\" id=\"country\" required [(ngModel)]=\"userDetail.country\" name=\"country\">\r\n            <option value=\"\">Choose...</option>\r\n            <option>United States</option>\r\n          </select>\r\n          <div class=\"invalid-feedback\">\r\n            Please select a valid country.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4 mb-3\">\r\n          <label for=\"state\">State</label>\r\n          <select class=\"custom-select d-block w-100\" id=\"state\" [(ngModel)]=\"userDetail.state\" name=\"state\" required>\r\n            <option value=\"\">Choose...</option>\r\n            <option>California</option>\r\n          </select>\r\n          <div class=\"invalid-feedback\">\r\n            Please provide a valid state.\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-3 mb-3\">\r\n          <label for=\"zip\">Zip</label>\r\n          <input type=\"text\" class=\"form-control\" id=\"zip\" placeholder=\"\" [(ngModel)]=\"userDetail.zip\" name=\"zip\" required>\r\n          <div class=\"invalid-feedback\">\r\n            Zip code required.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr class=\"mb-4\">\r\n      <button class=\"btn btn-primary btn-lg btn-block\" type=\"submit\">Continue to checkout</button>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/product/checkout/shipping-details/shipping-details.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/product/checkout/shipping-details/shipping-details.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/checkout/shipping-details/shipping-details.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/product/checkout/shipping-details/shipping-details.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ShippingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShippingDetailsComponent", function() { return ShippingDetailsComponent; });
/* harmony import */ var _shared_models_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingDetailsComponent = /** @class */ (function () {
    function ShippingDetailsComponent(authService) {
        this.authService = authService;
        this.userDetail = new _shared_models_user__WEBPACK_IMPORTED_MODULE_0__["UserDetail"]();
        this.userDetails = authService.getLoggedInUser();
    }
    ShippingDetailsComponent.prototype.ngOnInit = function () { };
    ShippingDetailsComponent.prototype.updateUserDetails = function (form) {
        var data = form.value;
        data["emailId"] = this.userDetails.emailId;
        data["userName"] = this.userDetails.userName;
        console.log("Data: ", data);
    };
    ShippingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-shipping-details",
            template: __webpack_require__(/*! ./shipping-details.component.html */ "./src/app/product/checkout/shipping-details/shipping-details.component.html"),
            styles: [__webpack_require__(/*! ./shipping-details.component.scss */ "./src/app/product/checkout/shipping-details/shipping-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ShippingDetailsComponent);
    return ShippingDetailsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=checkout-checkout-module~index-index-module~product-product-module.js.map