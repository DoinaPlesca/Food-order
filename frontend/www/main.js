"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_userPages_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/userPages/home/home.component */ 715);
/* harmony import */ var _components_userPages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/userPages/menu/menu.component */ 4919);
/* harmony import */ var _components_userPages_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/userPages/about/about.component */ 1856);
/* harmony import */ var _components_userPages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/userPages/reservation/reservation.component */ 8856);
/* harmony import */ var _components_adminPages_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/adminPages/main/main.component */ 8458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);








const routes = [{
  path: '',
  component: _components_userPages_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'menu.html',
  component: _components_userPages_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent
}, {
  path: 'about.html',
  component: _components_userPages_about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'reservation.html',
  component: _components_userPages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_3__.ReservationComponent
}, {
  path: 'main.html',
  component: _components_adminPages_main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'frontend';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/productService */ 6560);
/* harmony import */ var _components_userPages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/userPages/home/home.component */ 715);
/* harmony import */ var _components_userPages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/userPages/menu/menu.component */ 4919);
/* harmony import */ var _components_userPages_about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/userPages/about/about.component */ 1856);
/* harmony import */ var _components_userPages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/userPages/reservation/reservation.component */ 8856);
/* harmony import */ var _components_adminPages_main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/adminPages/main/main.component */ 8458);
/* harmony import */ var _services_categoryService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/categoryService */ 9080);
/* harmony import */ var _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/shared/user-Pages.Service/shared-content */ 6665);
/* harmony import */ var _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/shared/user-Pages.Service/shared-footer */ 6785);
/* harmony import */ var _services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/shared/user-Pages.Service/shared-prod_cat.service */ 3407);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-toastr */ 7548);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);



















class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [_services_productService__WEBPACK_IMPORTED_MODULE_1__.ProductService, _services_categoryService__WEBPACK_IMPORTED_MODULE_7__.CategoryService, _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_8__.SharedContentService, _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_9__.SharedFooterService, _services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_10__.SharedProductCategoryService],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule.forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_11__.AppComponent, _components_userPages_home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _components_userPages_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__.MenuComponent, _components_userPages_about_about_component__WEBPACK_IMPORTED_MODULE_4__.AboutComponent, _components_userPages_reservation_reservation_component__WEBPACK_IMPORTED_MODULE_5__.ReservationComponent, _components_adminPages_main_main_component__WEBPACK_IMPORTED_MODULE_6__.MainComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_15__.ToastrModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_17__.CommonModule]
  });
})();

/***/ }),

/***/ 8458:
/*!**************************************************************!*\
  !*** ./src/app/components/adminPages/main/main.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainComponent: () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-prod_cat.service */ 3407);
/* harmony import */ var src_app_services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/productService */ 6560);
/* harmony import */ var src_app_services_categoryService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/categoryService */ 9080);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);






function MainComponent_th_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th");
  }
}
function MainComponent_th_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const header_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](header_r5);
  }
}
function MainComponent_th_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th");
  }
}
function MainComponent_tr_51_ng_container_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const property_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", property_r9, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
  }
}
function MainComponent_tr_51_ng_container_1_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const property_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](property_r9);
  }
}
function MainComponent_tr_51_ng_container_1_td_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const property_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", property_r9, " ");
  }
}
function MainComponent_tr_51_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainComponent_tr_51_ng_container_1_td_1_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainComponent_tr_51_ng_container_1_td_2_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MainComponent_tr_51_ng_container_1_td_3_Template, 2, 1, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const i_r10 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.displayType === "categories" && i_r10 === 2 && i_r10 >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.displayType === "categories" && i_r10 !== 2 && i_r10 >= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.displayType === "products" && i_r10 >= 1 && i_r10 !== 5 && i_r10 !== 6 && i_r10 !== 8);
  }
}
function MainComponent_tr_51_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 41)(1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_tr_51_td_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r17.deleteItem(item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function MainComponent_tr_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MainComponent_tr_51_ng_container_1_Template, 4, 3, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MainComponent_tr_51_td_2_Template, 3, 0, "td", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.getTableProperties(item_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.displayType === "categories" || ctx_r4.displayType === "products");
  }
}
const _c0 = function (a0, a1) {
  return {
    "category-table": a0,
    "product-table": a1
  };
};
class MainComponent {
  constructor(sharedService, productService, categoryService) {
    this.sharedService = sharedService;
    this.productService = productService;
    this.categoryService = categoryService;
    this.categories = [];
    this.products = [];
    this.displayType = 'categories';
  }
  getProductSpecificProperty(product) {
    return `${product.name} - ${product.description}
    - ${product.price}- ${product.quantity}`;
  }
  getCategorySpecificProperty(category) {
    return `${category.categoryName} - ${category.categoryImageUrl}`;
  }
  isProduct(item) {
    const product = item;
    return product?.name !== undefined && product?.description !== undefined && product?.price !== undefined && product?.quantity !== undefined;
  }
  isCategory(item) {
    const category = item;
    return category.categoryName !== undefined && category?.categoryImageUrl !== undefined;
  }
  getTableHeaders() {
    if (this.displayType === 'categories') {
      return ['Category Name', 'Image', 'Action'];
    } else if (this.displayType === 'products') {
      return ['Product Name', 'Description', 'Price', 'Quantity', 'Action'];
    }
    return [];
  }
  getTableProperties(item) {
    if (this.isProduct(item)) {
      const product = item;
      return Object.values(product);
    } else if (this.isCategory(item)) {
      const category = item;
      return Object.values(category);
    }
    return [];
  }
  switchDisplay(type) {
    this.displayType = type;
    this.loadData();
  }
  loadData() {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this.displayType === 'categories') {
          yield _this.sharedService.loadAllCategories();
          _this.categories = _this.sharedService.getCategories();
        } else if (_this.displayType === 'products') {
          yield _this.sharedService.loadAllProducts();
          _this.products = _this.sharedService.getProducts();
        }
      } catch (error) {
        console.error('Failed to load data', error);
      }
    })();
  }
  getData() {
    return this.displayType === 'categories' ? this.categories : this.products;
  }
  ngOnInit() {
    this.loadData();
  }
  isImageUrl(url) {
    return url.endsWith('.jpg') || url.endsWith('.png');
  }
  deleteItem(item) {}
  static #_ = this.ɵfac = function MainComponent_Factory(t) {
    return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_1__.SharedProductCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_productService__WEBPACK_IMPORTED_MODULE_2__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_categoryService__WEBPACK_IMPORTED_MODULE_3__.CategoryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MainComponent,
    selectors: [["app-main"]],
    decls: 113,
    vars: 9,
    consts: [["lang", "en"], ["sharedContent", ""], [1, "sub_page"], [1, "header_section"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css", "integrity", "sha512-..."], [1, "top-bar"], ["href", "index.html", 1, "navbar-brand"], [1, "page-body"], [1, "row"], [1, "col-md-6", "col-xl-3", 3, "click"], [1, "card", "widget-card-1"], [1, "card-block-small"], ["src", "/assets/images/burger.png", "alt", "FoodIcons", 1, "card1-icon"], [1, "text-c-blue", "f-w-600"], ["src", "assets/images/f6.png", "alt", "FoodIcons", 1, "card1-icon"], [1, "col-md-6", "col-xl-3"], ["src", "/assets/images/dinner-table.png", "alt", "FoodIcons", 1, "card1-icon"], ["src", "/assets/images/take-away.png", "alt", "FoodIcons", 1, "card1-icon"], [1, "col-md-12", "col-xl-8"], [1, "card", "custom-card"], [1, "card-header"], [4, "ngIf"], [1, "card-block"], ["id", "dataTable", 1, "table", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "col-md-12", "col-xl-4"], [1, "card", "fb-card"], [1, "icofont", "icofont-social-facebook"], [1, "d-inline-block"], [1, "card-block", "text-center"], [1, "col-6", "b-r-default"], [1, "text-muted"], [1, "col-6"], [1, "card", "dribble-card"], [1, "icofont", "icofont-social-dribbble"], [1, "card", "twitter-card"], [1, "icofont", "icofont-social-twitter"], ["style", "display: flex; align-items: center; margin-top: 5px;", 4, "ngIf"], ["alt", "Category Image", 2, "max-width", "50px", "max-height", "50px", 3, "src"], [2, "display", "flex", "align-items", "center", "margin-top", "5px"], [3, "click"]],
    template: function MainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "body", 2)(4, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "meta", 4)(6, "meta", 5)(7, "link", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7)(9, "a", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "FlavorFrame");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_Template_div_click_14_listener() {
          return ctx.switchDisplay("categories");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MainComponent_Template_div_click_20_listener() {
          return ctx.switchDisplay("products");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 12)(22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17)(27, "div", 12)(28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Reservation");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 17)(33, "div", 12)(34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Online Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 20)(39, "div", 21)(40, "div", 22)(41, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](43, MainComponent_th_43_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 24)(45, "table", 25)(46, "thead")(47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, MainComponent_th_48_Template, 2, 1, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](49, MainComponent_th_49_Template, 1, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, MainComponent_tr_51_Template, 3, 2, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 27)(53, "div", 28)(54, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 30)(57, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](60, "blog page timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 31)(62, "div", 10)(63, "div", 32)(64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 34)(69, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Comment");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 35)(74, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 30)(77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, "dribble");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, "Product page analysis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 31)(82, "div", 10)(83, "div", 32)(84, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, "Live");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 34)(89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Message");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 37)(94, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "i", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 30)(97, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98, "twitter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, "current new timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 31)(102, "div", 10)(103, "div", 32)(104, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "new tweet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 34)(109, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110, "450+");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Follower");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.displayType === "products" ? "Products" : "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayType === "categories" || ctx.displayType === "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c0, ctx.displayType === "categories", ctx.displayType === "products"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getTableHeaders());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.displayType === "categories" || ctx.displayType === "products");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.getData());
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
    encapsulation: 2
  });
}


/***/ }),

/***/ 1856:
/*!***************************************************************!*\
  !*** ./src/app/components/userPages/about/about.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-content */ 6665);
/* harmony import */ var _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-footer */ 6785);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




const _c0 = ["sharedContent"];
const _c1 = ["sharedFooter"];
class AboutComponent {
  constructor(sharedContentService, sharedFooterService) {
    this.sharedContentService = sharedContentService;
    this.sharedFooterService = sharedFooterService;
  }
  ngOnInit() {
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
  }
  static #_ = this.ɵfac = function AboutComponent_Factory(t) {
    return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_0__.SharedContentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_1__.SharedFooterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: AboutComponent,
    selectors: [["app-about"]],
    viewQuery: function AboutComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sharedContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sharedFooter = _t.first);
      }
    },
    decls: 83,
    vars: 0,
    consts: [["sharedContent", ""], [1, "sub_page"], [1, "hero_area"], [1, "bg-box"], ["src", "/assets/images/hero-bg.jpg", "alt", ""], [1, "header_section"], [1, "container"], [1, "navbar", "navbar-expand-lg", "custom_nav-container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "index.html", 1, "nav-link"], ["href", "menu.html", 1, "nav-link"], [1, "nav-item", "active"], ["href", "about.html", 1, "nav-link"], [1, "sr-only"], ["href", "reservation.html", 1, "nav-link"], [1, "user_option"], ["href", "", 1, "user_link"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["href", "#", 1, "cart_link"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 456.029 456.029", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 456.029 456.029"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                   C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"], [1, "form-inline"], ["type", "submit", 1, "btn", "my-2", "my-sm-0", "nav_search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["href", "", 1, "order_online"], [1, "about_section", "layout_padding"], [1, "row"], [1, "col-md-6"], [1, "img-box"], ["src", "images/about-img.png", "alt", ""], [1, "detail-box"], [1, "heading_container"], ["sharedFooter", ""]],
    template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "header", 5)(7, "div", 6)(8, "nav", 7)(9, "a", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " FlavorFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12)(16, "li", 13)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 13)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 16)(23, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "About ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "li", 13)(28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Book Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 24)(35, "g")(36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "g")(39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "g")(42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "g")(45, "g")(46, "g")(47, "g")(48, "g")(49, "g")(50, "g")(51, "g")(52, "g")(53, "g")(54, "g")(55, "g")(56, "g")(57, "g")(58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "form", 28)(60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Order Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "section", 32)(65, "div", 6)(66, "div", 33)(67, "div", 34)(68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](69, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 34)(71, "div", 37)(72, "div", 38)(73, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](74, " We Are FlavorFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, " Welcome to a Culinary Haven for Families! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78, " At FlavorFrame, we invite you to embark on a delightful culinary journey where good food and cherished moments come together in a warm and inviting atmosphere. As a family-friendly establishment, we take pride in creating an environment that feels like an extension of your own home. Step into our welcoming space, where cozy aesthetics blend seamlessly with a touch of modern charm. Our carefully curated decor aims to create a comfortable setting for families to relax, connect, and enjoy a memorable dining experience. Whether you're celebrating a special occasion or simply craving a night out with loved ones, our restaurant provides the perfect backdrop for creating lasting memories. Thank you for choosing FlavorFrame. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " We look forward to serving you and your family soon! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "div", null, 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    encapsulation: 2
  });
}


/***/ }),

/***/ 715:
/*!*************************************************************!*\
  !*** ./src/app/components/userPages/home/home.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-prod_cat.service */ 3407);
/* harmony import */ var _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-content */ 6665);
/* harmony import */ var _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-footer */ 6785);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8849);







const _c0 = ["sharedContent"];
const _c1 = ["sharedFooter"];
function HomeComponent_li_194_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](category_r4.categoryName);
  }
}
function HomeComponent_div_197_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 78)(1, "div", 48)(2, "div")(3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 37)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 80)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 23)(15, "g")(16, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "g")(19, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "g")(22, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "path", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "g")(25, "g")(26, "g")(27, "g")(28, "g")(29, "g")(30, "g")(31, "g")(32, "g")(33, "g")(34, "g")(35, "g")(36, "g")(37, "g")(38, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const product_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", product_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r5.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r5.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r5.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Dkk ", product_r5.price, " ");
  }
}
class HomeComponent {
  constructor(sharedProductService, sharedContentService, sharedFooterService) {
    this.sharedProductService = sharedProductService;
    this.sharedContentService = sharedContentService;
    this.sharedFooterService = sharedFooterService;
    this.products = [];
    this.categories = [];
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.sharedContent.nativeElement.innerHTML = _this.sharedContentService.getSharedContent();
      _this.sharedFooter.nativeElement.innerHTML = _this.sharedFooterService.getFooterContent();
      _this.loadAllProducts();
      yield _this.loadAllCategories();
    })();
  }
  loadAllProducts() {
    var _this2 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.sharedProductService.loadAllProducts();
        _this2.products = _this2.sharedProductService.getProducts();
      } catch (error) {
        console.error('Failed to load all products', error);
      }
    })();
  }
  loadAllCategories() {
    var _this3 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.sharedProductService.loadAllCategories();
        _this3.categories = _this3.sharedProductService.getCategories();
      } catch (error) {
        console.error('Failed to load all categories', error);
      }
    })();
  }
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_1__.SharedProductCategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_2__.SharedContentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_3__.SharedFooterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    viewQuery: function HomeComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sharedContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sharedFooter = _t.first);
      }
    },
    decls: 238,
    vars: 2,
    consts: [["sharedContent", ""], [1, "hero_area"], [1, "bg-box"], ["src", "/assets/images/intro.jpg", "alt", ""], [1, "header_section"], [1, "container"], [1, "navbar", "navbar-expand-lg", "custom_nav-container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggle"], [1, ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item", "active"], ["href", "index.html", 1, "nav-link"], [1, "sr-only"], [1, "nav-item"], ["href", "menu.html", 1, "nav-link"], ["href", "about.html", 1, "nav-link"], ["href", "reservation.html", 1, "nav-link"], [1, "user_option"], ["href", "", 1, "user_link"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["href", "#", 1, "cart_link"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 456.029 456.029", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 456.029 456.029"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                   C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"], [1, "form-inline"], ["type", "submit", 1, "btn", "my-2", "my-sm-0", "nav_search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["href", "", 1, "order_online"], [1, "slider_section"], ["id", "customCarousel1", "data-ride", "carousel", "data-interval", "2000", 1, "carousel", "slide"], [1, "carousel-inner"], [1, "carousel-item", "active"], [1, "row"], [1, "col-md-7", "col-lg-6"], [1, "detail-box"], [1, "btn-box"], ["href", "", 1, "btn1"], [1, "carousel-item"], [1, "carousel-indicators"], ["data-target", "#customCarousel1", "data-slide-to", "0", 1, "active"], ["data-target", "#customCarousel1", "data-slide-to", "1"], ["data-target", "#customCarousel1", "data-slide-to", "2"], [1, "offer_section", "layout_padding-bottom"], [1, "offer_container"], [1, "col-md-6"], [1, "box"], [1, "img-box"], ["src", "assets/images/o1.jpg", "alt", ""], ["href", ""], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                     c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                     C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                     c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                     C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                     c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"], ["src", "assets/images/o2.jpg", "alt", ""], [1, "food_section", "layout_padding-bottom"], [1, "heading_container", "heading_center"], [1, "filters_menu"], [4, "ngFor", "ngForOf"], [1, "filters-content"], [1, "row", "grid"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "book_section", "layout_padding"], [1, "heading_container"], [1, "form_container"], ["action", ""], ["type", "text", "placeholder", "Your Name", 1, "form-control"], ["type", "text", "placeholder", "Phone Number", 1, "form-control"], ["type", "email", "placeholder", "Your Email", 1, "form-control"], [1, "form-control", "nice-select", "wide"], ["value", "", "disabled", "", "selected", ""], ["value", ""], ["type", "date", 1, "form-control"], [1, "btn_box"], [1, "map_container"], ["id", "googleMap"], ["sharedFooter", ""], [1, "col-sm-6", "col-lg-4"], [3, "src", "alt"], [1, "options"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                         C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "body")(3, "div", 1)(4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "header", 4)(7, "div", 5)(8, "nav", 6)(9, "a", 7)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " FlavorFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "ul", 11)(16, "li", 12)(17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 15)(22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 15)(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 15)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Book Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 19)(31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 23)(35, "g")(36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "g")(39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "g")(42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "g")(45, "g")(46, "g")(47, "g")(48, "g")(49, "g")(50, "g")(51, "g")(52, "g")(53, "g")(54, "g")(55, "g")(56, "g")(57, "g")(58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "form", 27)(60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Order Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "section", 31)(65, "div", 32)(66, "div", 33)(67, "div", 34)(68, "div", 5)(69, "div", 35)(70, "div", 36)(71, "div", 37)(72, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, " Family Restaurant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " At FlavorFrame, we believe in the power of good food to bring people together. Nestled in the heart of Esbjerg, our family-friendly restaurant is a warm and inviting space where flavors come alive, and memories are made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 38)(77, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 40)(80, "div", 5)(81, "div", 35)(82, "div", 36)(83, "div", 37)(84, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85, " Family Restaurant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " At FlavorFrame, we believe in the power of good food to bring people together. Nestled in the heart of Esbjerg, our family-friendly restaurant is a warm and inviting space where flavors come alive, and memories are made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 38)(89, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 40)(92, "div", 5)(93, "div", 35)(94, "div", 36)(95, "div", 37)(96, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](97, " Family Restaurant ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, " Welcome to FlavorFrame \u2013 A Taste of Home! At FlavorFrame, we believe in the power of good food to bring people together. Nestled in the heart of Esbjerg, our family-friendly restaurant is a warm and inviting space where flavors come alive, and memories are made. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 38)(101, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "div", 5)(104, "ol", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](105, "li", 42)(106, "li", 43)(107, "li", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "section", 45)(109, "div", 46)(110, "div", 5)(111, "div", 35)(112, "div", 47)(113, "div", 48)(114, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 37)(117, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, " Tasty Thursdays ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "h6")(120, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, "20%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, " Off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "svg", 23)(126, "g")(127, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "g")(130, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](131, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "g")(133, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](134, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](135, "g")(136, "g")(137, "g")(138, "g")(139, "g")(140, "g")(141, "g")(142, "g")(143, "g")(144, "g")(145, "g")(146, "g")(147, "g")(148, "g")(149, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 47)(151, "div", 48)(152, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](153, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "div", 37)(155, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](156, " Pizza Days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "h6")(158, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, "15%");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](160, " Off ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](162, " Order Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "svg", 23)(164, "g")(165, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "path", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "g")(168, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](169, "path", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "g")(171, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](172, "path", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](173, "g")(174, "g")(175, "g")(176, "g")(177, "g")(178, "g")(179, "g")(180, "g")(181, "g")(182, "g")(183, "g")(184, "g")(185, "g")(186, "g")(187, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "section", 56)(189, "div", 5)(190, "div", 57)(191, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](192, " Our Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "ul", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](194, HomeComponent_li_194_Template, 2, 1, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "div", 60)(196, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](197, HomeComponent_div_197_Template, 39, 5, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 38)(199, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](200, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "section", 63)(202, "div", 5)(203, "div", 64)(204, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](205, " Book A Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "div", 35)(207, "div", 47)(208, "div", 65)(209, "form", 66)(210, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](211, "input", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](212, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](213, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](215, "input", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "div")(217, "select", 70)(218, "option", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](219, " How many persons? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](221, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](223, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "option", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](227, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](228, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](229, "input", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "div", 74)(231, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](232, " Book Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "div", 47)(234, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](235, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](236, "div", null, 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](194);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm],
    encapsulation: 2
  });
}


/***/ }),

/***/ 4919:
/*!*************************************************************!*\
  !*** ./src/app/components/userPages/menu/menu.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-content */ 6665);
/* harmony import */ var _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-footer */ 6785);
/* harmony import */ var _services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-prod_cat.service */ 3407);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8849);








const _c0 = ["sharedContent"];
const _c1 = ["sharedFooter"];
function MenuComponent_li_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MenuComponent_li_70_Template_li_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const category_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.selectCategory(category_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", category_r4.categoryName, " ");
  }
}
function MenuComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div")(3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 46)(6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 47)(11, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "svg", 23)(15, "g")(16, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "path", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "g")(19, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "path", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "g")(22, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "path", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "g")(25, "g")(26, "g")(27, "g")(28, "g")(29, "g")(30, "g")(31, "g")(32, "g")(33, "g")(34, "g")(35, "g")(36, "g")(37, "g")(38, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("alt", product_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", product_r7.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r7.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", product_r7.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Dkk ", product_r7.price, " ");
  }
}
class MenuComponent {
  //selectedCategorySubscription: Subscription | undefined ;
  constructor(sharedContentService, sharedFooterService, sharedService) {
    this.sharedContentService = sharedContentService;
    this.sharedFooterService = sharedFooterService;
    this.sharedService = sharedService;
    this.products = [];
    this.categories = [];
  }
  ngOnInit() {
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
    this.loadAllProducts();
    this.loadAllCategories();
  }
  loadProductsForSelectedCategory(categoryId) {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.products = yield _this.sharedService.getAllProductsForSelectedCategory(categoryId);
      } catch (error) {
        console.error('Error loading products for the selected category', error);
      }
    })();
  }
  loadProducts(categoryId) {
    this.loadProductsForSelectedCategory(categoryId);
  }
  getProductsForCategory(categoryId) {
    return this.products.filter(product => product.category_id === categoryId);
  }
  selectCategory(category) {
    if (category && category.categoryId !== undefined) {
      this.sharedService.selectCategory(category.categoryId);
    }
  }
  loadAllProducts() {
    var _this2 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2.sharedService.loadAllProducts();
        _this2.products = _this2.sharedService.getProducts();
      } catch (error) {
        console.error('Failed to load all products', error);
      }
    })();
  }
  loadAllCategories() {
    var _this3 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3.sharedService.loadAllCategories();
        _this3.categories = _this3.sharedService.getCategories();
      } catch (error) {
        console.error('Failed to load all categories', error);
      }
    })();
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_1__.SharedContentService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_2__.SharedFooterService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_prod_cat_service__WEBPACK_IMPORTED_MODULE_3__.SharedProductCategoryService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    viewQuery: function MenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sharedContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sharedFooter = _t.first);
      }
    },
    decls: 79,
    vars: 2,
    consts: [["sharedContent", ""], [1, "sub_page"], [1, "hero_area"], [1, "bg-box"], ["src", "/assets/images/hero-bg.jpg", "alt", ""], [1, "header_section"], [1, "container"], [1, "navbar", "navbar-expand-lg", "custom_nav-container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["routerLink", "/", 1, "nav-link"], [1, "sr-only"], ["routerLink", "/menu", 1, "nav-link"], ["href", "about.html", 1, "nav-link"], ["href", "reservation.html", 1, "nav-link"], [1, "user_option"], ["href", "", 1, "user_link"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["href", "#", 1, "cart_link"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 456.029 456.029", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 456.029 456.029"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                   C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"], [1, "form-inline"], ["type", "submit", 1, "btn", "my-2", "my-sm-0", "nav_search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["href", "", 1, "order_online"], [1, "food_section", "layout_padding"], [1, "heading_container", "heading_center"], [1, "filters_menu"], [3, "click", 4, "ngFor", "ngForOf"], [1, "filters-content"], [1, "row", "grid"], ["class", "col-sm-6 col-lg-4", 4, "ngFor", "ngForOf"], [1, "btn-box"], ["href", ""], ["sharedFooter", ""], [3, "click"], [1, "col-sm-6", "col-lg-4"], [1, "box"], [1, "img-box"], [3, "src", "alt"], [1, "detail-box"], [1, "options"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                         c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                         C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                         c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                         C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                         c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "body", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "header", 5)(7, "div", 6)(8, "nav", 7)(9, "a", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " FlavorFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12)(16, "li", 13)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 13)(22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li", 13)(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "li", 13)(28, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Book Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 19)(31, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "svg", 23)(35, "g")(36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "path", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "g")(39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "g")(42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "g")(45, "g")(46, "g")(47, "g")(48, "g")(49, "g")(50, "g")(51, "g")(52, "g")(53, "g")(54, "g")(55, "g")(56, "g")(57, "g")(58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "form", 27)(60, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Order Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "section", 31)(65, "div", 6)(66, "div", 32)(67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Our Menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "ul", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](70, MenuComponent_li_70_Template, 2, 1, "li", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 35)(72, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, MenuComponent_div_73_Template, 39, 5, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 38)(75, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "div", null, 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.categories);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.products);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm],
    encapsulation: 2
  });
}


/***/ }),

/***/ 8856:
/*!***************************************************************************!*\
  !*** ./src/app/components/userPages/reservation/reservation.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReservationComponent: () => (/* binding */ ReservationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-content */ 6665);
/* harmony import */ var _services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/shared/user-Pages.Service/shared-footer */ 6785);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




const _c0 = ["sharedContent"];
const _c1 = ["sharedFooter"];
class ReservationComponent {
  constructor(sharedContentService, sharedFooterService) {
    this.sharedContentService = sharedContentService;
    this.sharedFooterService = sharedFooterService;
  }
  ngOnInit() {
    this.sharedContent.nativeElement.innerHTML = this.sharedContentService.getSharedContent();
    this.sharedFooter.nativeElement.innerHTML = this.sharedFooterService.getFooterContent();
  }
  static #_ = this.ɵfac = function ReservationComponent_Factory(t) {
    return new (t || ReservationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_content__WEBPACK_IMPORTED_MODULE_0__.SharedContentService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_shared_user_Pages_Service_shared_footer__WEBPACK_IMPORTED_MODULE_1__.SharedFooterService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ReservationComponent,
    selectors: [["app-reservation"]],
    viewQuery: function ReservationComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 7);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sharedContent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.sharedFooter = _t.first);
      }
    },
    decls: 101,
    vars: 0,
    consts: [["sharedContent", ""], [1, "sub_page"], [1, "hero_area"], [1, "bg-box"], ["src", "/assets/images/hero-bg.jpg", "alt", ""], [1, "header_section"], [1, "container"], [1, "navbar", "navbar-expand-lg", "custom_nav-container"], ["href", "index.html", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, ""], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item"], ["href", "index.html", 1, "nav-link"], ["href", "menu.html", 1, "nav-link"], ["href", "about.html", 1, "nav-link"], [1, "nav-item", "active"], ["href", "reservation.html", 1, "nav-link"], [1, "sr-only"], [1, "user_option"], ["href", "", 1, "user_link"], ["aria-hidden", "true", 1, "fa", "fa-user"], ["href", "#", 1, "cart_link"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 456.029 456.029", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 456.029 456.029"], ["d", "M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248\n                   c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z"], ["d", "M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48\n                   C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064\n                   c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4\n                   C457.728,97.71,450.56,86.958,439.296,84.91z"], ["d", "M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296\n                   c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z"], [1, "form-inline"], ["type", "submit", 1, "btn", "my-2", "my-sm-0", "nav_search-btn"], ["aria-hidden", "true", 1, "fa", "fa-search"], ["href", "", 1, "order_online"], [1, "book_section", "layout_padding"], [1, "heading_container"], [1, "row"], [1, "col-md-6"], [1, "form_container"], ["action", ""], ["type", "text", "placeholder", "Your Name", 1, "form-control"], ["type", "text", "placeholder", "Phone Number", 1, "form-control"], ["type", "email", "placeholder", "Your Email", 1, "form-control"], [1, "form-control", "nice-select", "wide"], ["value", "", "disabled", "", "selected", ""], ["value", ""], ["type", "date", 1, "form-control"], [1, "btn_box"], [1, "map_container"], ["id", "googleMap"], ["sharedFooter", ""]],
    template: function ReservationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "body", 1)(3, "div", 2)(4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "header", 5)(7, "div", 6)(8, "nav", 7)(9, "a", 8)(10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " FlavorFrame ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11)(15, "ul", 12)(16, "li", 13)(17, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 13)(20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 13)(23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 17)(26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Book Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "svg", 24)(35, "g")(36, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "path", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "g")(39, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "path", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "g")(42, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "path", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "g")(45, "g")(46, "g")(47, "g")(48, "g")(49, "g")(50, "g")(51, "g")(52, "g")(53, "g")(54, "g")(55, "g")(56, "g")(57, "g")(58, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "form", 28)(60, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " Order Online ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "section", 32)(65, "div", 6)(66, "div", 33)(67, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, " Book A Table ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 34)(70, "div", 35)(71, "div", 36)(72, "form", 37)(73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](76, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div")(80, "select", 41)(81, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, " How many persons? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, " 2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, " 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " 4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, " 5 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](92, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 45)(94, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, " Book Now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "div", 35)(97, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](98, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](99, "div", null, 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
    },
    dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
    encapsulation: 2
  });
}


/***/ }),

/***/ 1594:
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  BASE_URL: 'http://localhost:5000'
};

/***/ }),

/***/ 9080:
/*!*********************************************!*\
  !*** ./src/app/services/categoryService.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CategoryService: () => (/* binding */ CategoryService)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 1594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ 4189);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 7548);







class CategoryService {
  constructor(state, http, toastr) {
    this.state = state;
    this.http = http;
    this.toastr = toastr;
    this.categories = [];
  }
  getAllCategories() {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL}/food/order/category`));
        _this.state.setCategories(res.responseData);
        return res.responseData;
      } catch (error) {
        _this.toastr.error('Failed to fetch categories. Please try again later.');
        throw error;
      }
    })();
  }
  deleteCategoryById(categoryId) {
    var _this2 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (categoryId === undefined) {
          throw new Error('Invalid category ID');
        }
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL}/food/order/${categoryId}`;
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.http.delete(url));
        _this2.categories = _this2.categories.filter(c => c.categoryId !== categoryId);
        const toast = _this2.toastr.success('The category was successfully deleted!');
      } catch (error) {
        _this2.toastr.error('Failed to delete the category. Please try again later.');
        throw error;
      }
    })();
  }
  static #_ = this.ɵfac = function CategoryService_Factory(t) {
    return new (t || CategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state__WEBPACK_IMPORTED_MODULE_2__.State), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: CategoryService,
    factory: CategoryService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6560:
/*!********************************************!*\
  !*** ./src/app/services/productService.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 331);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 1594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ 4189);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ 7548);







class ProductService {
  constructor(state, http, toastr) {
    this.state = state;
    this.http = http;
    this.toastr = toastr;
    this.products = [];
  }
  getAllProducts() {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL}/food/order/product`));
        _this.state.setProducts(res.responseData);
        return res.responseData;
      } catch (error) {
        console.error(error);
        _this.toastr.error('Failed to fetch products. Please try again later.');
        throw error;
      }
    })();
  }
  getAllProductsForSelectedCategory(categoryId) {
    var _this2 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const res = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this2.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL}/food/order/category/${categoryId}/product`));
        _this2.state.setProducts(res.responseData);
        return res.responseData;
      } catch (error) {
        _this2.toastr.error('Failed to fetch products for the selected category. Please try again later.');
        throw error;
      }
    })();
  }
  deleteProductById(id) {
    var _this3 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.BASE_URL}/food/order/${id}`;
        yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this3.http.delete(url));
        _this3.products = _this3.products.filter(p => p.id !== id);
        const updatedProducts = _this3.http.get('api/products');
        return updatedProducts;
        const toast = _this3.toastr.success('The product was successfully deleted!');
      } catch (error) {
        _this3.toastr.error('Failed to delete the product. Please try again later.');
        throw error;
      }
    })();
  }
  static #_ = this.ɵfac = function ProductService_Factory(t) {
    return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_state__WEBPACK_IMPORTED_MODULE_2__.State), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: ProductService,
    factory: ProductService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6665:
/*!**********************************************************************!*\
  !*** ./src/app/services/shared/user-Pages.Service/shared-content.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedContentService: () => (/* binding */ SharedContentService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SharedContentService {
  getSharedContent() {
    return `
      <title>FlavorFrame</title>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-nice-select/1.1.0/css/nice-select.min.css" integrity="sha512-CruCP+TD3yXzlvvijET8wV5WxxEh5H8P4cmz0RFbKK6FlZ2sYl3AEsKlLPHbniXKSrDdFewhbmBK5skbdsASbQ==" crossorigin="anonymous" />
      <link href="/assets/css/font-awesome.min.css" rel="stylesheet" />
      <link href="/assets/css/style.css" rel="stylesheet" />
      <link href="/assets/css/responsive.css" rel="stylesheet" />

    `;
  }
  static #_ = this.ɵfac = function SharedContentService_Factory(t) {
    return new (t || SharedContentService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedContentService,
    factory: SharedContentService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6785:
/*!*********************************************************************!*\
  !*** ./src/app/services/shared/user-Pages.Service/shared-footer.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedFooterService: () => (/* binding */ SharedFooterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class SharedFooterService {
  getFooterContent() {
    // Return the shared footer HTML content
    return `
<footer class="footer_section">
  <div class="container">
    <div class="row">
      <div class="col-md-4 footer-col">
        <div class="footer_contact">
          <h4>
            Contact Us
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                  Location
                </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                  Call +01 1234567890
                </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                  flavorframe@gmail.com
                </span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4 footer-col">
        <div class="footer_detail">
          <a href="" class="footer-logo">
            FlavorFrame
          </a>
          <p>
            At FlavorFrame, we cherish the opportunity to stay connected with our wonderful community. Join us on social media for the latest updates, mouthwatering food pics, and exclusive offers!
          </p>
          <div class="footer_social">
            <a href="">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-twitter" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="">
              <i class="fa fa-pinterest" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-4 footer-col">
        <h4>
          Opening Hours
        </h4>
        <p>
          Everyday
        </p>
        <p>
          10.00 Am -10.00 Pm
        </p>
      </div>
    </div>
  </div>
</footer>
    `;
  }
  static #_ = this.ɵfac = function SharedFooterService_Factory(t) {
    return new (t || SharedFooterService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SharedFooterService,
    factory: SharedFooterService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 3407:
/*!*******************************************************************************!*\
  !*** ./src/app/services/shared/user-Pages.Service/shared-prod_cat.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedProductCategoryService: () => (/* binding */ SharedProductCategoryService)
/* harmony export */ });
/* harmony import */ var C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _productService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../productService */ 6560);
/* harmony import */ var _categoryService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../categoryService */ 9080);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ 7548);






;
class SharedProductCategoryService {
  constructor(productService, categoryService, toastr) {
    this.productService = productService;
    this.categoryService = categoryService;
    this.toastr = toastr;
    this.products = [];
    this.categories = [];
    this.selectedCategoryId = null;
    this.selectedCategoryIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.selectedCategoryId$ = this.selectedCategoryIdSubject.asObservable();
  }
  loadAllProducts() {
    var _this = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.products = yield _this.productService.getAllProducts();
      } catch (error) {
        console.error('Failed to load all products', error);
      }
    })();
  }
  getProducts() {
    return this.products;
  }
  loadAllCategories() {
    var _this2 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this2.categories = yield _this2.categoryService.getAllCategories();
      } catch (error) {
        console.error('Failed to load all categories', error);
      }
    })();
  }
  getCategories() {
    return this.categories || [];
  }
  selectCategory(categoryId) {
    this.selectedCategoryId = categoryId;
    this.selectedCategoryIdSubject.next(categoryId);
  }
  getAllProductsForSelectedCategory(categoryId) {
    var _this3 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this3.selectedCategoryId === null) {
          throw new Error('No category selected.');
        }
        const res = yield _this3.productService.getAllProductsForSelectedCategory(_this3.selectedCategoryId);
        _this3.products = res.responseData;
        return _this3.products;
      } catch (error) {
        console.error('Failed to fetch products for the selected category. Please try again later.');
        throw error;
      }
    })();
  }
  deleteCategory(categoryId) {
    var _this4 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.categoryService.deleteCategoryById(categoryId);
    })();
  }
  deleteProduct(id) {
    var _this5 = this;
    return (0,C_Users_doini_3rd_semester_Home_Work_Doina_exam_project_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.productService.deleteProductById(id);
    })();
  }
  static #_ = this.ɵfac = function SharedProductCategoryService_Factory(t) {
    return new (t || SharedProductCategoryService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_productService__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_categoryService__WEBPACK_IMPORTED_MODULE_2__.CategoryService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__.ToastrService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
    token: SharedProductCategoryService,
    factory: SharedProductCategoryService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 4189:
/*!***********************************!*\
  !*** ./src/app/services/state.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   State: () => (/* binding */ State)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class State {
  constructor() {
    this.products = [];
    this.categories = [];
    this.productsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.categoriesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.products$ = this.productsSubject.asObservable();
    this.categories$ = this.categoriesSubject.asObservable();
  }
  setProducts(products) {
    this.productsSubject.next(products);
  }
  getProducts() {
    return this.productsSubject.value;
  }
  setCategories(categories) {
    this.categoriesSubject.next(categories);
  }
  getCategories() {
    return this.categoriesSubject.value;
  }
  static #_ = this.ɵfac = function State_Factory(t) {
    return new (t || State)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: State,
    factory: State.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map