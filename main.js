(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./counter-lazy/counter-lazy.module": [
		"./src/app/counter-lazy/counter-lazy.module.ts",
		"counter-lazy-counter-lazy-module"
	],
	"./customers/customers.module": [
		"./src/app/customers/customers.module.ts",
		"customers-customers-module"
	],
	"./orders/orders.module": [
		"./src/app/orders/orders.module.ts",
		"orders-orders-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _components_templates_display_data_in_template_display_data_in_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components-templates/display-data-in-template/display-data-in-template.component */ "./src/app/components-templates/display-data-in-template/display-data-in-template.component.ts");
/* harmony import */ var _components_templates_display_data_in_template_url_display_data_in_template_url_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components-templates/display-data-in-template-url/display-data-in-template-url.component */ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.ts");
/* harmony import */ var _components_templates_template_syntax_template_syntax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components-templates/template-syntax/template-syntax.component */ "./src/app/components-templates/template-syntax/template-syntax.component.ts");
/* harmony import */ var _components_templates_custom_events_custom_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components-templates/custom-events/custom-events.component */ "./src/app/components-templates/custom-events/custom-events.component.ts");
/* harmony import */ var _components_templates_two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components-templates/two-way-binding/two-way-binding.component */ "./src/app/components-templates/two-way-binding/two-way-binding.component.ts");
/* harmony import */ var _components_templates_directives_directives_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components-templates/directives/directives.component */ "./src/app/components-templates/directives/directives.component.ts");
/* harmony import */ var _components_templates_interaction_interaction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components-templates/interaction/interaction.component */ "./src/app/components-templates/interaction/interaction.component.ts");
/* harmony import */ var _components_templates_lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components-templates/lifecycle-hooks/lifecycle-hooks.component */ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _components_templates_lifecycle_content_hooks_lifecycle_content_hooks_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component */ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.ts");
/* harmony import */ var _components_templates_lifecycle_view_hooks_lifecycle_view_hooks_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component */ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.ts");
/* harmony import */ var _components_templates_style_components_styles_demo_styles_demo_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components-templates/style-components/styles-demo/styles-demo.component */ "./src/app/components-templates/style-components/styles-demo/styles-demo.component.ts");
/* harmony import */ var _components_templates_input_test_input_test_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components-templates/input-test/input-test.component */ "./src/app/components-templates/input-test/input-test.component.ts");
/* harmony import */ var _components_templates_pipes_pipes_pipes_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components-templates/pipes/pipes/pipes.component */ "./src/app/components-templates/pipes/pipes/pipes.component.ts");
/* harmony import */ var _rx_demo_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./rx-demo/observables-demo/observables-demo.component */ "./src/app/rx-demo/observables-demo/observables-demo.component.ts");
/* harmony import */ var _rx_demo_subject_demo_subject_demo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./rx-demo/subject-demo/subject-demo.component */ "./src/app/rx-demo/subject-demo/subject-demo.component.ts");
/* harmony import */ var _rx_demo_operators_demo_operators_demo_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rx-demo/operators-demo/operators-demo.component */ "./src/app/rx-demo/operators-demo/operators-demo.component.ts");
/* harmony import */ var _rx_demo_different_operators_different_operators_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./rx-demo/different-operators/different-operators.component */ "./src/app/rx-demo/different-operators/different-operators.component.ts");
/* harmony import */ var _modules_demo_lazy_loading_demo_lazy_loading_demo_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules-demo/lazy-loading-demo/lazy-loading-demo.component */ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.ts");
/* harmony import */ var _modules_demo_eager_vs_lazy_loading_eager_vs_lazy_loading_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component */ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.ts");
/* harmony import */ var _counter_one_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./counter-one/counter-home/counter-home.component */ "./src/app/counter-one/counter-home/counter-home.component.ts");
/* harmony import */ var _counter_two_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./counter-two/counter-home/counter-home.component */ "./src/app/counter-two/counter-home/counter-home.component.ts");
/* harmony import */ var _forms_demo_reactive_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./forms-demo/reactive/form-control/form-control.component */ "./src/app/forms-demo/reactive/form-control/form-control.component.ts");
/* harmony import */ var _forms_demo_reactive_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./forms-demo/reactive/form-group/form-group.component */ "./src/app/forms-demo/reactive/form-group/form-group.component.ts");
/* harmony import */ var _forms_demo_reactive_nested_form_group_nested_form_group_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forms-demo/reactive/nested-form-group/nested-form-group.component */ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.ts");
/* harmony import */ var _forms_demo_reactive_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./forms-demo/reactive/form-builder/form-builder.component */ "./src/app/forms-demo/reactive/form-builder/form-builder.component.ts");
/* harmony import */ var _forms_demo_reactive_form_array_form_array_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./forms-demo/reactive/form-array/form-array.component */ "./src/app/forms-demo/reactive/form-array/form-array.component.ts");
/* harmony import */ var _forms_demo_template_driven_super_hero_super_hero_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./forms-demo/template-driven/super-hero/super-hero.component */ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.ts");
/* harmony import */ var _forms_demo_reactive_reactive_form_validation_reactive_form_validation_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./forms-demo/reactive/reactive-form-validation/reactive-form-validation.component */ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.ts");
/* harmony import */ var _forms_demo_template_driven_template_driven_form_validation_template_driven_form_validation_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component */ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var appRoutes = [
    { path: 'index', component: _index_index_component__WEBPACK_IMPORTED_MODULE_4__["IndexComponent"] },
    /* Components - Templates */
    { path: 'components-templates/display-data-in-template', component: _components_templates_display_data_in_template_display_data_in_template_component__WEBPACK_IMPORTED_MODULE_5__["DisplayDataInTemplateComponent"] },
    { path: 'components-templates/display-data-in-template-url', component: _components_templates_display_data_in_template_url_display_data_in_template_url_component__WEBPACK_IMPORTED_MODULE_6__["DisplayDataInTemplateUrlComponent"] },
    { path: 'components-templates/template-syntax', component: _components_templates_template_syntax_template_syntax_component__WEBPACK_IMPORTED_MODULE_7__["TemplateSyntaxComponent"] },
    { path: 'components-templates/template-syntax/custom-events', component: _components_templates_custom_events_custom_events_component__WEBPACK_IMPORTED_MODULE_8__["CustomEventsComponent"] },
    { path: 'components-templates/template-syntax/two-way-binding', component: _components_templates_two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_9__["TwoWayBindingComponent"] },
    { path: 'components-templates/directives', component: _components_templates_directives_directives_component__WEBPACK_IMPORTED_MODULE_10__["DirectivesComponent"] },
    { path: 'components-templates/component-interaction', component: _components_templates_interaction_interaction_component__WEBPACK_IMPORTED_MODULE_11__["InteractionComponent"] },
    { path: 'components-templates/lifecycle-hooks', component: _components_templates_lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_12__["LifecycleHooksComponent"] },
    { path: 'components-templates/lifecycle-hooks/content-hooks', component: _components_templates_lifecycle_content_hooks_lifecycle_content_hooks_component__WEBPACK_IMPORTED_MODULE_13__["LifecycleContentHooksComponent"] },
    { path: 'components-templates/lifecycle-hooks/view-hooks', component: _components_templates_lifecycle_view_hooks_lifecycle_view_hooks_component__WEBPACK_IMPORTED_MODULE_14__["LifecycleViewHooksComponent"] },
    { path: 'components-templates/styles-demo', component: _components_templates_style_components_styles_demo_styles_demo_component__WEBPACK_IMPORTED_MODULE_15__["StylesDemoComponent"] },
    { path: 'components-templates/input-test', component: _components_templates_input_test_input_test_component__WEBPACK_IMPORTED_MODULE_16__["InputTestComponent"] },
    { path: 'components-templates/pipes', component: _components_templates_pipes_pipes_pipes_component__WEBPACK_IMPORTED_MODULE_17__["PipesComponent"] },
    /* rx-demo module routes */
    { path: 'rxjs/observables-demo', component: _rx_demo_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_18__["ObservablesDemoComponent"] },
    { path: 'rxjs/subjects-demo', component: _rx_demo_subject_demo_subject_demo_component__WEBPACK_IMPORTED_MODULE_19__["SubjectDemoComponent"] },
    { path: 'rxjs/operators-demo', component: _rx_demo_operators_demo_operators_demo_component__WEBPACK_IMPORTED_MODULE_20__["OperatorsDemoComponent"] },
    { path: 'rxjs/different-operators', component: _rx_demo_different_operators_different_operators_component__WEBPACK_IMPORTED_MODULE_21__["DifferentOperatorsComponent"] },
    /* NgModules routes */
    { path: 'ngmodules/lazy-loading', component: _modules_demo_lazy_loading_demo_lazy_loading_demo_component__WEBPACK_IMPORTED_MODULE_22__["LazyLoadingDemoComponent"] },
    /* Lazy loading demo routes */
    { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
    { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
    /* Angular 8 lazy loading syntax */
    /* { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)},
    { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)}, */
    /* Eager Vs Lazy loading demo routes */
    { path: 'ngmodules/eager-vs-lazy-loading', component: _modules_demo_eager_vs_lazy_loading_eager_vs_lazy_loading_component__WEBPACK_IMPORTED_MODULE_23__["EagerVsLazyLoadingComponent"] },
    { path: 'ngmodules/eager-vs-lazy-loading/counter-one-home', component: _counter_one_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_24__["CounterHomeComponent"] },
    { path: 'ngmodules/eager-vs-lazy-loading/counter-two-home', component: _counter_two_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_25__["CounterHomeComponent"] },
    { path: 'lazy-counter-home', loadChildren: './counter-lazy/counter-lazy.module#CounterLazyModule' },
    /* Forms demo routes */
    { path: 'forms/reactive/form-control', component: _forms_demo_reactive_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_26__["FormControlComponent"] },
    { path: 'forms/reactive/form-group', component: _forms_demo_reactive_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_27__["FormGroupComponent"] },
    { path: 'forms/reactive/nested-form-group', component: _forms_demo_reactive_nested_form_group_nested_form_group_component__WEBPACK_IMPORTED_MODULE_28__["NestedFormGroupComponent"] },
    { path: 'forms/reactive/form-builder', component: _forms_demo_reactive_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_29__["FormBuilderComponent"] },
    { path: 'forms/reactive/form-array', component: _forms_demo_reactive_form_array_form_array_component__WEBPACK_IMPORTED_MODULE_30__["FormArrayComponent"] },
    { path: 'forms/template-driven', component: _forms_demo_template_driven_super_hero_super_hero_component__WEBPACK_IMPORTED_MODULE_31__["SuperHeroComponent"] },
    { path: 'forms/validation/reactive', component: _forms_demo_reactive_reactive_form_validation_reactive_form_validation_component__WEBPACK_IMPORTED_MODULE_32__["ReactiveFormValidationComponent"] },
    { path: 'forms/validation/template-driven', component: _forms_demo_template_driven_template_driven_form_validation_template_driven_form_validation_component__WEBPACK_IMPORTED_MODULE_33__["TemplateDrivenFormValidationComponent"] },
    /* Default path and wild match routes */
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"fixed-top\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6\">\r\n                      <h3>\r\n                          <a [routerLink]=\"['/index']\">Angular Fundamentals</a>\r\n                      </h3>\r\n                  </div>\r\n                  <div class=\"col-lg-6 top-nav\">\r\n                      <nav>\r\n                          <ul class=\"nav nav-pills float-right\">\r\n                              <li class=\"nav-item\">\r\n                                  <a class=\"nav-link active\" [routerLink]=\"['/index']\">Go to Index</a>\r\n                              </li>\r\n                          </ul>\r\n                      </nav>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</header>\r\n\r\n<main role=\"main\" class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\r\n<footer class=\"fixed-bottom\">\r\n  <div class=\"container\">\r\n      <p>Developed with &hearts; on Angular. By <a target=\"_blank\" href=\"https://twitter.com/nagarjun_immadi\">@nagarjun_immadi</a>. Github <a href=\"https://github.com/angular-online/angular-fundamentals\" target=\"_blank\">Repo</a></p>\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_templates_components_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components-templates/components-templates.module */ "./src/app/components-templates/components-templates.module.ts");
/* harmony import */ var _rx_demo_rx_demo_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rx-demo/rx-demo.module */ "./src/app/rx-demo/rx-demo.module.ts");
/* harmony import */ var _modules_demo_modules_demo_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules-demo/modules-demo.module */ "./src/app/modules-demo/modules-demo.module.ts");
/* harmony import */ var _counter_one_counter_one_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./counter-one/counter-one.module */ "./src/app/counter-one/counter-one.module.ts");
/* harmony import */ var _counter_two_counter_two_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./counter-two/counter-two.module */ "./src/app/counter-two/counter-two.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _forms_demo_forms_demo_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forms-demo/forms-demo.module */ "./src/app/forms-demo/forms-demo.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"].forRoot(),
                _components_templates_components_templates_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsTemplatesModule"],
                _rx_demo_rx_demo_module__WEBPACK_IMPORTED_MODULE_7__["RxDemoModule"],
                _modules_demo_modules_demo_module__WEBPACK_IMPORTED_MODULE_8__["ModulesDemoModule"],
                _counter_one_counter_one_module__WEBPACK_IMPORTED_MODULE_9__["CounterOneModule"].forRoot(),
                _counter_two_counter_two_module__WEBPACK_IMPORTED_MODULE_10__["CounterTwoModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_11__["CoreModule"],
                _forms_demo_forms_demo_module__WEBPACK_IMPORTED_MODULE_12__["FormsDemoModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components-templates/attribute-directives/highlight-v1.directive.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/attribute-directives/highlight-v1.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: HighlightV1Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightV1Directive", function() { return HighlightV1Directive; });
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

var HighlightV1Directive = /** @class */ (function () {
    function HighlightV1Directive(el) {
        this.el = el;
    }
    HighlightV1Directive.prototype.onmouseenter = function () {
        this.highlight('yellow');
    };
    HighlightV1Directive.prototype.onmouseleave = function () {
        this.highlight(null);
    };
    HighlightV1Directive.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV1Directive.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV1Directive.prototype, "onmouseleave", null);
    HighlightV1Directive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlightV1]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightV1Directive);
    return HighlightV1Directive;
}());



/***/ }),

/***/ "./src/app/components-templates/attribute-directives/highlight-v2.directive.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/attribute-directives/highlight-v2.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: HighlightV2Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightV2Directive", function() { return HighlightV2Directive; });
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

var HighlightV2Directive = /** @class */ (function () {
    function HighlightV2Directive(el) {
        this.el = el;
    }
    HighlightV2Directive.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || 'red');
    };
    HighlightV2Directive.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightV2Directive.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HighlightV2Directive.prototype, "highlightColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV2Directive.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV2Directive.prototype, "onMouseLeave", null);
    HighlightV2Directive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlightV2]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightV2Directive);
    return HighlightV2Directive;
}());



/***/ }),

/***/ "./src/app/components-templates/attribute-directives/highlight-v3.directive.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/attribute-directives/highlight-v3.directive.ts ***!
  \*************************************************************************************/
/*! exports provided: HighlightV3Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightV3Directive", function() { return HighlightV3Directive; });
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

var HighlightV3Directive = /** @class */ (function () {
    function HighlightV3Directive(el) {
        this.el = el;
        this.testClass = 'some-test-class';
    }
    HighlightV3Directive.prototype.onMouseEnter = function () {
        this.highlight(this.highlightColor || 'red');
    };
    HighlightV3Directive.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightV3Directive.prototype.highlight = function (color) {
        this.el.nativeElement.style.backgroundColor = color;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appHighlightV3'),
        __metadata("design:type", String)
    ], HighlightV3Directive.prototype, "highlightColor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV3Directive.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HighlightV3Directive.prototype, "onMouseLeave", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", String)
    ], HighlightV3Directive.prototype, "testClass", void 0);
    HighlightV3Directive = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlightV3]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightV3Directive);
    return HighlightV3Directive;
}());



/***/ }),

/***/ "./src/app/components-templates/attribute-directives/highlight.directive.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components-templates/attribute-directives/highlight.directive.ts ***!
  \**********************************************************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
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

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/components-templates/components-templates.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components-templates/components-templates.module.ts ***!
  \*********************************************************************/
/*! exports provided: ComponentsTemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsTemplatesModule", function() { return ComponentsTemplatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _display_data_in_template_display_data_in_template_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-data-in-template/display-data-in-template.component */ "./src/app/components-templates/display-data-in-template/display-data-in-template.component.ts");
/* harmony import */ var _display_data_in_template_url_display_data_in_template_url_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-data-in-template-url/display-data-in-template-url.component */ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.ts");
/* harmony import */ var _template_syntax_template_syntax_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./template-syntax/template-syntax.component */ "./src/app/components-templates/template-syntax/template-syntax.component.ts");
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ "./src/app/components-templates/hero-detail/hero-detail.component.ts");
/* harmony import */ var _custom_events_custom_events_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom-events/custom-events.component */ "./src/app/components-templates/custom-events/custom-events.component.ts");
/* harmony import */ var _display_hero_display_hero_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./display-hero/display-hero.component */ "./src/app/components-templates/display-hero/display-hero.component.ts");
/* harmony import */ var _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./two-way-binding/two-way-binding.component */ "./src/app/components-templates/two-way-binding/two-way-binding.component.ts");
/* harmony import */ var _font_sizer_font_sizer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./font-sizer/font-sizer.component */ "./src/app/components-templates/font-sizer/font-sizer.component.ts");
/* harmony import */ var _hero_bio_hero_bio_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hero-bio/hero-bio.component */ "./src/app/components-templates/hero-bio/hero-bio.component.ts");
/* harmony import */ var _directives_directives_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directives/directives.component */ "./src/app/components-templates/directives/directives.component.ts");
/* harmony import */ var _attribute_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attribute-directives/highlight.directive */ "./src/app/components-templates/attribute-directives/highlight.directive.ts");
/* harmony import */ var _attribute_directives_highlight_v1_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./attribute-directives/highlight-v1.directive */ "./src/app/components-templates/attribute-directives/highlight-v1.directive.ts");
/* harmony import */ var _attribute_directives_highlight_v2_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./attribute-directives/highlight-v2.directive */ "./src/app/components-templates/attribute-directives/highlight-v2.directive.ts");
/* harmony import */ var _attribute_directives_highlight_v3_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./attribute-directives/highlight-v3.directive */ "./src/app/components-templates/attribute-directives/highlight-v3.directive.ts");
/* harmony import */ var _structural_directives_reverse_if_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./structural-directives/reverse-if.directive */ "./src/app/components-templates/structural-directives/reverse-if.directive.ts");
/* harmony import */ var _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interaction/interaction.component */ "./src/app/components-templates/interaction/interaction.component.ts");
/* harmony import */ var _hero_name_hero_name_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./hero-name/hero-name.component */ "./src/app/components-templates/hero-name/hero-name.component.ts");
/* harmony import */ var _countdown_parent_with_temp_ref_var_countdown_parent_with_temp_ref_var_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component */ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.ts");
/* harmony import */ var _countdown_parent_with_view_child_countdown_parent_with_view_child_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./countdown-parent-with-view-child/countdown-parent-with-view-child.component */ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.ts");
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./countdown-timer/countdown-timer.component */ "./src/app/components-templates/countdown-timer/countdown-timer.component.ts");
/* harmony import */ var _simple_todo_simple_todo_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./simple-todo/simple-todo.component */ "./src/app/components-templates/simple-todo/simple-todo.component.ts");
/* harmony import */ var _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./todo-detail/todo-detail.component */ "./src/app/components-templates/todo-detail/todo-detail.component.ts");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/components-templates/user-detail/user-detail.component.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./edit-user/edit-user.component */ "./src/app/components-templates/edit-user/edit-user.component.ts");
/* harmony import */ var _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./lifecycle-hooks/lifecycle-hooks.component */ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.ts");
/* harmony import */ var _user_cycle_user_cycle_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./user-cycle/user-cycle.component */ "./src/app/components-templates/user-cycle/user-cycle.component.ts");
/* harmony import */ var _user_after_view_detail_user_after_view_detail_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./user-after-view-detail/user-after-view-detail.component */ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.ts");
/* harmony import */ var _user_after_content_detail_user_after_content_detail_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./user-after-content-detail/user-after-content-detail.component */ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.ts");
/* harmony import */ var _lifecycle_content_hooks_lifecycle_content_hooks_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./lifecycle-content-hooks/lifecycle-content-hooks.component */ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.ts");
/* harmony import */ var _style_components_styles_demo_styles_demo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./style-components/styles-demo/styles-demo.component */ "./src/app/components-templates/style-components/styles-demo/styles-demo.component.ts");
/* harmony import */ var _style_components_main_user_main_user_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./style-components/main-user/main-user.component */ "./src/app/components-templates/style-components/main-user/main-user.component.ts");
/* harmony import */ var _style_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./style-components/user-actions/user-actions.component */ "./src/app/components-templates/style-components/user-actions/user-actions.component.ts");
/* harmony import */ var _style_components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./style-components/user-details/user-details.component */ "./src/app/components-templates/style-components/user-details/user-details.component.ts");
/* harmony import */ var _style_components_user_team_user_team_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./style-components/user-team/user-team.component */ "./src/app/components-templates/style-components/user-team/user-team.component.ts");
/* harmony import */ var _style_components_user_controls_user_controls_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./style-components/user-controls/user-controls.component */ "./src/app/components-templates/style-components/user-controls/user-controls.component.ts");
/* harmony import */ var _input_test_input_test_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./input-test/input-test.component */ "./src/app/components-templates/input-test/input-test.component.ts");
/* harmony import */ var _pipes_pipes_pipes_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/pipes/pipes.component */ "./src/app/components-templates/pipes/pipes/pipes.component.ts");
/* harmony import */ var _pipes_exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pipes/exponential-strength.pipe */ "./src/app/components-templates/pipes/exponential-strength.pipe.ts");
/* harmony import */ var _pipes_format_name_pipe__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pipes/format-name.pipe */ "./src/app/components-templates/pipes/format-name.pipe.ts");
/* harmony import */ var _pipes_flying_heroes_pure_pipe__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pipes/flying-heroes-pure.pipe */ "./src/app/components-templates/pipes/flying-heroes-pure.pipe.ts");
/* harmony import */ var _pipes_flying_heroes_impure_pipe__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pipes/flying-heroes-impure.pipe */ "./src/app/components-templates/pipes/flying-heroes-impure.pipe.ts");
/* harmony import */ var _lifecycle_view_hooks_lifecycle_view_hooks_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./lifecycle-view-hooks/lifecycle-view-hooks.component */ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















































var ComponentsTemplatesModule = /** @class */ (function () {
    function ComponentsTemplatesModule() {
    }
    ComponentsTemplatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_display_data_in_template_display_data_in_template_component__WEBPACK_IMPORTED_MODULE_5__["DisplayDataInTemplateComponent"], _display_data_in_template_url_display_data_in_template_url_component__WEBPACK_IMPORTED_MODULE_6__["DisplayDataInTemplateUrlComponent"], _template_syntax_template_syntax_component__WEBPACK_IMPORTED_MODULE_7__["TemplateSyntaxComponent"], _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_8__["HeroDetailComponent"], _custom_events_custom_events_component__WEBPACK_IMPORTED_MODULE_9__["CustomEventsComponent"], _display_hero_display_hero_component__WEBPACK_IMPORTED_MODULE_10__["DisplayHeroComponent"], _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_11__["TwoWayBindingComponent"], _font_sizer_font_sizer_component__WEBPACK_IMPORTED_MODULE_12__["FontSizerComponent"], _hero_bio_hero_bio_component__WEBPACK_IMPORTED_MODULE_13__["HeroBioComponent"], _directives_directives_component__WEBPACK_IMPORTED_MODULE_14__["DirectivesComponent"], _attribute_directives_highlight_directive__WEBPACK_IMPORTED_MODULE_15__["HighlightDirective"], _attribute_directives_highlight_v1_directive__WEBPACK_IMPORTED_MODULE_16__["HighlightV1Directive"], _attribute_directives_highlight_v2_directive__WEBPACK_IMPORTED_MODULE_17__["HighlightV2Directive"], _attribute_directives_highlight_v3_directive__WEBPACK_IMPORTED_MODULE_18__["HighlightV3Directive"], _structural_directives_reverse_if_directive__WEBPACK_IMPORTED_MODULE_19__["ReverseIfDirective"], _interaction_interaction_component__WEBPACK_IMPORTED_MODULE_20__["InteractionComponent"], _hero_name_hero_name_component__WEBPACK_IMPORTED_MODULE_21__["HeroNameComponent"], _countdown_parent_with_temp_ref_var_countdown_parent_with_temp_ref_var_component__WEBPACK_IMPORTED_MODULE_22__["CountdownParentWithTempRefVarComponent"], _countdown_parent_with_view_child_countdown_parent_with_view_child_component__WEBPACK_IMPORTED_MODULE_23__["CountdownParentWithViewChildComponent"], _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_24__["CountdownTimerComponent"], _simple_todo_simple_todo_component__WEBPACK_IMPORTED_MODULE_25__["SimpleTodoComponent"], _todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_26__["TodoDetailComponent"], _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_27__["UserDetailComponent"], _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_28__["EditUserComponent"], _lifecycle_hooks_lifecycle_hooks_component__WEBPACK_IMPORTED_MODULE_29__["LifecycleHooksComponent"], _user_cycle_user_cycle_component__WEBPACK_IMPORTED_MODULE_30__["UserCycleComponent"], _user_after_view_detail_user_after_view_detail_component__WEBPACK_IMPORTED_MODULE_31__["UserAfterViewDetailComponent"], _user_after_content_detail_user_after_content_detail_component__WEBPACK_IMPORTED_MODULE_32__["UserAfterContentDetailComponent"], _lifecycle_content_hooks_lifecycle_content_hooks_component__WEBPACK_IMPORTED_MODULE_33__["LifecycleContentHooksComponent"], _style_components_styles_demo_styles_demo_component__WEBPACK_IMPORTED_MODULE_34__["StylesDemoComponent"], _style_components_main_user_main_user_component__WEBPACK_IMPORTED_MODULE_35__["MainUserComponent"], _style_components_user_actions_user_actions_component__WEBPACK_IMPORTED_MODULE_36__["UserActionsComponent"], _style_components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_37__["UserDetailsComponent"], _style_components_user_team_user_team_component__WEBPACK_IMPORTED_MODULE_38__["UserTeamComponent"], _style_components_user_controls_user_controls_component__WEBPACK_IMPORTED_MODULE_39__["UserControlsComponent"], _input_test_input_test_component__WEBPACK_IMPORTED_MODULE_40__["InputTestComponent"], _pipes_pipes_pipes_component__WEBPACK_IMPORTED_MODULE_41__["PipesComponent"], _pipes_exponential_strength_pipe__WEBPACK_IMPORTED_MODULE_42__["ExponentialStrengthPipe"], _pipes_format_name_pipe__WEBPACK_IMPORTED_MODULE_43__["FormatNamePipe"], _pipes_flying_heroes_pure_pipe__WEBPACK_IMPORTED_MODULE_44__["FlyingHeroesPurePipe"], _pipes_flying_heroes_impure_pipe__WEBPACK_IMPORTED_MODULE_45__["FlyingHeroesImpurePipe"], _lifecycle_view_hooks_lifecycle_view_hooks_component__WEBPACK_IMPORTED_MODULE_46__["LifecycleViewHooksComponent"]]
        })
    ], ComponentsTemplatesModule);
    return ComponentsTemplatesModule;
}());



/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"seconds\">{{timer.seconds}}</div>\r\n<app-countdown-timer #timer></app-countdown-timer>\r\n<button class=\"btn btn-secondary btn-sm\" (click)=\"timer.start()\">Start</button> &nbsp;\r\n<button class=\"btn btn-secondary btn-sm\" (click)=\"timer.stop()\">Stop</button>"

/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: CountdownParentWithTempRefVarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownParentWithTempRefVarComponent", function() { return CountdownParentWithTempRefVarComponent; });
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

var CountdownParentWithTempRefVarComponent = /** @class */ (function () {
    function CountdownParentWithTempRefVarComponent() {
    }
    CountdownParentWithTempRefVarComponent.prototype.ngOnInit = function () {
    };
    CountdownParentWithTempRefVarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countdown-parent-with-temp-ref-var',
            template: __webpack_require__(/*! ./countdown-parent-with-temp-ref-var.component.html */ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.html"),
            styles: [__webpack_require__(/*! ./countdown-parent-with-temp-ref-var.component.css */ "./src/app/components-templates/countdown-parent-with-temp-ref-var/countdown-parent-with-temp-ref-var.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CountdownParentWithTempRefVarComponent);
    return CountdownParentWithTempRefVarComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"seconds\">{{ seconds() }}</div>\r\n<app-countdown-timer></app-countdown-timer>\r\n<button class=\"btn btn-secondary btn-sm\" (click)=\"start()\">Start</button> &nbsp;\r\n<button class=\"btn btn-secondary btn-sm\" (click)=\"stop()\">Stop</button>\r\n"

/***/ }),

/***/ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: CountdownParentWithViewChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownParentWithViewChildComponent", function() { return CountdownParentWithViewChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countdown-timer/countdown-timer.component */ "./src/app/components-templates/countdown-timer/countdown-timer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountdownParentWithViewChildComponent = /** @class */ (function () {
    function CountdownParentWithViewChildComponent() {
    }
    CountdownParentWithViewChildComponent.prototype.seconds = function () { return 0; };
    CountdownParentWithViewChildComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
        // but wait a tick first to avoid one-time devMode unidirectional-data-flow-violation error
        setTimeout(function () { return _this.seconds = function () { return _this.timerComponent.seconds; }; }, 0);
    };
    CountdownParentWithViewChildComponent.prototype.start = function () { this.timerComponent.start(); };
    CountdownParentWithViewChildComponent.prototype.stop = function () { this.timerComponent.stop(); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_1__["CountdownTimerComponent"]),
        __metadata("design:type", _countdown_timer_countdown_timer_component__WEBPACK_IMPORTED_MODULE_1__["CountdownTimerComponent"])
    ], CountdownParentWithViewChildComponent.prototype, "timerComponent", void 0);
    CountdownParentWithViewChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countdown-parent-with-view-child',
            template: __webpack_require__(/*! ./countdown-parent-with-view-child.component.html */ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.html"),
            styles: [__webpack_require__(/*! ./countdown-parent-with-view-child.component.css */ "./src/app/components-templates/countdown-parent-with-view-child/countdown-parent-with-view-child.component.css")]
        })
    ], CountdownParentWithViewChildComponent);
    return CountdownParentWithViewChildComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/countdown-timer/countdown-timer.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-timer/countdown-timer.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/countdown-timer/countdown-timer.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/countdown-timer/countdown-timer.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>{{message}}</p>"

/***/ }),

/***/ "./src/app/components-templates/countdown-timer/countdown-timer.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components-templates/countdown-timer/countdown-timer.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CountdownTimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownTimerComponent", function() { return CountdownTimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CountdownTimerComponent = /** @class */ (function () {
    function CountdownTimerComponent() {
        this.intervalId = 0;
        this.message = '';
        this.seconds = 11;
    }
    CountdownTimerComponent.prototype.clearTimer = function () { clearInterval(this.intervalId); };
    CountdownTimerComponent.prototype.ngOnInit = function () { this.start(); };
    CountdownTimerComponent.prototype.ngOnDestroy = function () { this.clearTimer(); };
    CountdownTimerComponent.prototype.start = function () { this.countDown(); };
    CountdownTimerComponent.prototype.stop = function () {
        this.clearTimer();
        this.message = "Holding at T-" + this.seconds + " seconds";
    };
    CountdownTimerComponent.prototype.countDown = function () {
        var _this = this;
        this.clearTimer();
        this.intervalId = window.setInterval(function () {
            _this.seconds -= 1;
            if (_this.seconds === 0) {
                _this.message = 'Blast off!';
            }
            else {
                if (_this.seconds < 0) {
                    _this.seconds = 10;
                } // reset
                _this.message = "T-" + _this.seconds + " seconds and counting";
            }
        }, 1000);
    };
    CountdownTimerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-countdown-timer',
            template: __webpack_require__(/*! ./countdown-timer.component.html */ "./src/app/components-templates/countdown-timer/countdown-timer.component.html"),
            styles: [__webpack_require__(/*! ./countdown-timer.component.css */ "./src/app/components-templates/countdown-timer/countdown-timer.component.css")]
        })
    ], CountdownTimerComponent);
    return CountdownTimerComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/custom-events/custom-events.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components-templates/custom-events/custom-events.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul li {\r\n    list-style: none;\r\n    padding: 10px 0px;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/custom-events/custom-events.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components-templates/custom-events/custom-events.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Custom Events</b></h6>\r\n<hr>\r\n<ul>\r\n  <li *ngFor=\"let hero of heros\">\r\n    <app-display-hero (deleteHeroEvent)=\"delete($event)\" [hero]=\"hero\"></app-display-hero>\r\n  </li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>Input Output Properties</b></h6>\r\n<hr>\r\n<h6>With Aliasing:</h6>\r\n<ul>\r\n  <li *ngFor=\"let hero of heros\">\r\n    <app-hero-bio (deleteRequest)=\"delete($event)\" [name]=\"hero\"></app-hero-bio>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components-templates/custom-events/custom-events.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components-templates/custom-events/custom-events.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CustomEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEventsComponent", function() { return CustomEventsComponent; });
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

var CustomEventsComponent = /** @class */ (function () {
    function CustomEventsComponent() {
        this.heros = [{ "id": 1, "name": "John", "power": 2612 },
            { "id": 2, "name": "Vernice", "power": 7036 },
            { "id": 3, "name": "Chrissie", "power": 3331 },
            { "id": 4, "name": "Tana", "power": 5158 },
            { "id": 5, "name": "Rawley", "power": 8948 }];
    }
    CustomEventsComponent.prototype.ngOnInit = function () {
    };
    CustomEventsComponent.prototype.delete = function (heroObj) {
        console.log(heroObj);
    };
    CustomEventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-custom-events',
            template: __webpack_require__(/*! ./custom-events.component.html */ "./src/app/components-templates/custom-events/custom-events.component.html"),
            styles: [__webpack_require__(/*! ./custom-events.component.css */ "./src/app/components-templates/custom-events/custom-events.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomEventsComponent);
    return CustomEventsComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/directives/directives.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components-templates/directives/directives.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p span { color: red; font-size: 70%; }"

/***/ }),

/***/ "./src/app/components-templates/directives/directives.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/directives/directives.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Attribute Directives</b></h6>\r\n\r\n<br>\r\n<h6>appHighlight - With static color:</h6>\r\n<p appHighlight>Highlight me!</p>\r\n\r\n<br>\r\n<h6>appHighlightV1 - Respond to user-initiated events:</h6>\r\n<p appHighlightV1>Highlight me!</p>\r\n\r\n<br>\r\n<h6>appHighlightV2 - Pass values into the directive with an @Input data binding:</h6>\r\n<p appHighlightV2>highlightColor is not passed. So, It would be highlighted with default color(red) specified in directive.</p>\r\n<p appHighlightV2 [highlightColor]=\"color\">Highlight me in the color specified by component(green)</p>\r\n\r\n<br>\r\n<h6>appHighlightV3 - Bind to an @Input alias:</h6>\r\n<p appHighlightV3 [appHighlightV3]=\"color\">Highlight me - Used both property and directive names</p>\r\n<p [appHighlightV3]=\"color\">Highlight me - Used property and directive names together.</p>\r\n\r\n<br>\r\n<hr>\r\n<h6><b>Structural Directives</b></h6>\r\n\r\n<br>\r\n<h6>*ngIf:</h6>\r\n<div *ngIf=\"currentHero\" class=\"name\">{{currentHero.name}}</div>\r\n<div [style.display]=\"currentHero ? 'block': 'none'\">{{currentHero.name}}</div>\r\n\r\n\r\n<div *ngIf=\"nullHero\" class=\"name\">{{nullHero.name}}</div>\r\n<div [style.display]=\"nullHero ? 'block': 'none'\">{{nullHero?.name}}</div>\r\n\r\n<br>\r\n<h6>*ngFor:</h6>\r\n<div>*ngFor with index:</div>\r\n<div *ngFor=\"let hero of heroes; let i=index\">{{i + 1}} - {{hero.name}}</div>\r\n\r\n<br>\r\n<div>*ngFor without trackBy:</div>\r\n<div *ngFor=\"let hero of heroes\">\r\n    ({{hero.id}}) {{hero.name}}\r\n</div>\r\n<br>\r\n<div>*ngFor with trackBy:</div>\r\n<div *ngFor=\"let hero of heroes; trackBy: trackByHeroes\">\r\n    ({{hero.id}}) {{hero.name}}\r\n</div>\r\n\r\n<br>\r\n<button class=\"btn btn-primary\" (click)=\"updateWihDifferentNames()\">Update Heroes With Different Names</button> &nbsp;&nbsp;\r\n<button class=\"btn btn-primary\" (click)=\"updateWithDifferentIds()\">Update Heroes With Different Ids</button>\r\n\r\n<br>\r\n<br>\r\n<h6>ng-template</h6>\r\n<p>Hip!</p>\r\n    <ng-template>\r\n        <p>Hip!</p>\r\n    </ng-template>\r\n<p>Hooray!</p>\r\n\r\n<br>\r\n<h6>ng-container</h6>\r\n<p>\r\n    I turned the corner\r\n    <span *ngIf=\"currentHero\">\r\n        and saw {{currentHero.name}}. I waved\r\n    </span>\r\n    and continued on my way.\r\n</p>\r\n\r\n<p>\r\n    I turned the corner\r\n    <ng-container *ngIf=\"currentHero\">\r\n        and saw {{currentHero.name}}. I waved\r\n    </ng-container>\r\n    and continued on my way.\r\n</p>\r\n\r\n<br>\r\n<h6>ng-container to group elements</h6>\r\n<label>With span</label><br>\r\n<select [(ngModel)]=\"currentHero\">\r\n    <option value=\"\">Select Hero</option>\r\n    <span *ngFor=\"let h of heroes\">\r\n        <span *ngIf=\"h.power > 3000\">\r\n            <option [ngValue]=\"h\">{{h.name}}</option>\r\n        </span>\r\n    </span>\r\n</select>\r\n\r\n<br>    \r\n<br>\r\n<label>With ng-container</label><br>\r\n<select [(ngModel)]=\"currentHero\">\r\n    <option value=\"\">Select Hero</option>\r\n    <ng-container *ngFor=\"let h of heroes\">\r\n        <ng-container *ngIf=\"h.power > 3000\">\r\n            <option [ngValue]=\"h\">{{h.name}}</option>\r\n        </ng-container>\r\n    </ng-container>\r\n</select>\r\n\r\n<br>\r\n<br>\r\n<h6>Custom structural directive: appReverseIf</h6>\r\n<p *appReverseIf=\"condition\">This should be shown</p>\r\n<p *appReverseIf=\"!condition\">This should be removed</p>\r\n"

/***/ }),

/***/ "./src/app/components-templates/directives/directives.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/directives/directives.component.ts ***!
  \*************************************************************************/
/*! exports provided: DirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesComponent", function() { return DirectivesComponent; });
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

var DirectivesComponent = /** @class */ (function () {
    function DirectivesComponent() {
        this.color = 'green';
        this.currentHero = {
            name: "John"
        };
        this.nullHero = null;
        this.heroes = [{ "id": 1, "name": "John", "power": 2612 },
            { "id": 2, "name": "Vernice", "power": 7036 },
            { "id": 3, "name": "Chrissie", "power": 3331 },
            { "id": 4, "name": "Tana", "power": 5158 },
            { "id": 5, "name": "Rawley", "power": 8948 }];
        this.differentHeroNames = [{ "id": 1, "name": "Ram", "power": 2612 },
            { "id": 2, "name": "Laxman", "power": 7036 },
            { "id": 3, "name": "Barath", "power": 3331 },
            { "id": 4, "name": "Shatrughna", "power": 5158 },
            { "id": 5, "name": "Hanuman", "power": 8948 }];
        this.differentHeroIds = [{ "id": 11, "name": "Ram", "power": 2612 },
            { "id": 12, "name": "Laxman", "power": 7036 },
            { "id": 13, "name": "Barath", "power": 3331 },
            { "id": 14, "name": "Shatrughna", "power": 5158 },
            { "id": 15, "name": "Hanuman", "power": 8948 }];
        this.condition = false;
    }
    DirectivesComponent.prototype.ngOnInit = function () {
    };
    DirectivesComponent.prototype.trackByHeroes = function (index, hero) {
        return hero.id;
    };
    DirectivesComponent.prototype.updateWihDifferentNames = function () {
        this.heroes = this.differentHeroNames;
    };
    DirectivesComponent.prototype.updateWithDifferentIds = function () {
        this.heroes = this.differentHeroIds;
    };
    DirectivesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-directives',
            template: __webpack_require__(/*! ./directives.component.html */ "./src/app/components-templates/directives/directives.component.html"),
            styles: [__webpack_require__(/*! ./directives.component.css */ "./src/app/components-templates/directives/directives.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DirectivesComponent);
    return DirectivesComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>{{title}}</h4>\r\n<h4>My favorite hero is: {{myHero}}</h4>\r\n<h4>My favorite hero age is: {{age}}</h4>\r\n<p>Heroes:</p>\r\n  <ul>\r\n    <li *ngFor=\"let hero of heroes\">\r\n      {{ hero }}\r\n    </li>\r\n  </ul>\r\n\r\n  <p *ngIf=\"heroes.length > 3\">There are many heroes!</p>"

/***/ }),

/***/ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: DisplayDataInTemplateUrlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataInTemplateUrlComponent", function() { return DisplayDataInTemplateUrlComponent; });
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

var DisplayDataInTemplateUrlComponent = /** @class */ (function () {
    function DisplayDataInTemplateUrlComponent() {
        this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
        var age = 20;
    }
    DisplayDataInTemplateUrlComponent.prototype.ngOnInit = function () {
    };
    DisplayDataInTemplateUrlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-data-in-template-url',
            template: __webpack_require__(/*! ./display-data-in-template-url.component.html */ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.html"),
            styles: [__webpack_require__(/*! ./display-data-in-template-url.component.css */ "./src/app/components-templates/display-data-in-template-url/display-data-in-template-url.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayDataInTemplateUrlComponent);
    return DisplayDataInTemplateUrlComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/display-data-in-template/display-data-in-template.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/components-templates/display-data-in-template/display-data-in-template.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/display-data-in-template/display-data-in-template.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components-templates/display-data-in-template/display-data-in-template.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DisplayDataInTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayDataInTemplateComponent", function() { return DisplayDataInTemplateComponent; });
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

var DisplayDataInTemplateComponent = /** @class */ (function () {
    function DisplayDataInTemplateComponent() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }
    DisplayDataInTemplateComponent.prototype.ngOnInit = function () {
    };
    DisplayDataInTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-data-in-template',
            template: "\n    <h4>{{title}}</h4>\n    <h4>My favorite hero is: {{myHero}}</h4>\n  ",
            styles: [__webpack_require__(/*! ./display-data-in-template.component.css */ "./src/app/components-templates/display-data-in-template/display-data-in-template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayDataInTemplateComponent);
    return DisplayDataInTemplateComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/display-hero/display-hero.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components-templates/display-hero/display-hero.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/display-hero/display-hero.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components-templates/display-hero/display-hero.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-4\">{{ hero.name }}</div>\r\n  <div class=\"col-lg-4\">{{ hero.power }}</div>\r\n  <div class=\"col-lg-4\"><a (click)=\"deleteHero(hero)\">Delete</a></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components-templates/display-hero/display-hero.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/display-hero/display-hero.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DisplayHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayHeroComponent", function() { return DisplayHeroComponent; });
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

var DisplayHeroComponent = /** @class */ (function () {
    function DisplayHeroComponent() {
        this.deleteHeroEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    DisplayHeroComponent.prototype.ngOnInit = function () {
    };
    DisplayHeroComponent.prototype.deleteHero = function (hero) {
        this.deleteHeroEvent.emit(hero);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DisplayHeroComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DisplayHeroComponent.prototype, "deleteHeroEvent", void 0);
    DisplayHeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-hero',
            template: __webpack_require__(/*! ./display-hero.component.html */ "./src/app/components-templates/display-hero/display-hero.component.html"),
            styles: [__webpack_require__(/*! ./display-hero.component.css */ "./src/app/components-templates/display-hero/display-hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayHeroComponent);
    return DisplayHeroComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/edit-user/edit-user.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components-templates/edit-user/edit-user.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/edit-user/edit-user.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/edit-user/edit-user.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>Child Component - Name:</label> <input [(ngModel)]=\"user.name\" /> <br>\r\n<label>Child Component - Age:</label> <input [(ngModel)]=\"user.age\" /> <br>\r\n"

/***/ }),

/***/ "./src/app/components-templates/edit-user/edit-user.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components-templates/edit-user/edit-user.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
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

var EditUserComponent = /** @class */ (function () {
    function EditUserComponent() {
        this.version = 8;
    }
    EditUserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EditUserComponent.prototype, "user", void 0);
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/components-templates/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/components-templates/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/font-sizer/font-sizer.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components-templates/font-sizer/font-sizer.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/font-sizer/font-sizer.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/font-sizer/font-sizer.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"dec()\" title=\"smaller\">-</button>\r\n  <button (click)=\"inc()\" title=\"bigger\">+</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components-templates/font-sizer/font-sizer.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/font-sizer/font-sizer.component.ts ***!
  \*************************************************************************/
/*! exports provided: FontSizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizerComponent", function() { return FontSizerComponent; });
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

var FontSizerComponent = /** @class */ (function () {
    function FontSizerComponent() {
        this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FontSizerComponent.prototype.dec = function () {
        this.size--;
        this.sizeChange.emit(this.size);
    };
    FontSizerComponent.prototype.inc = function () {
        this.size++;
        this.sizeChange.emit(this.size);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], FontSizerComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FontSizerComponent.prototype, "sizeChange", void 0);
    FontSizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-font-sizer',
            template: __webpack_require__(/*! ./font-sizer.component.html */ "./src/app/components-templates/font-sizer/font-sizer.component.html"),
            styles: [__webpack_require__(/*! ./font-sizer.component.css */ "./src/app/components-templates/font-sizer/font-sizer.component.css")]
        })
    ], FontSizerComponent);
    return FontSizerComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/hero-bio/hero-bio.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components-templates/hero-bio/hero-bio.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/hero-bio/hero-bio.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components-templates/hero-bio/hero-bio.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-4\">{{ hero.name }}</div>\r\n  <div class=\"col-lg-4\">{{ hero.power }}</div>\r\n  <div class=\"col-lg-4\"><a (click)=\"deleteHero(hero)\">Delete</a></div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components-templates/hero-bio/hero-bio.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components-templates/hero-bio/hero-bio.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeroBioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroBioComponent", function() { return HeroBioComponent; });
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

var HeroBioComponent = /** @class */ (function () {
    function HeroBioComponent() {
        this.deleteHeroEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroBioComponent.prototype.ngOnInit = function () {
    };
    HeroBioComponent.prototype.deleteHero = function (hero) {
        this.deleteHeroEvent.emit(hero);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('name'),
        __metadata("design:type", Object)
    ], HeroBioComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('deleteRequest'),
        __metadata("design:type", Object)
    ], HeroBioComponent.prototype, "deleteHeroEvent", void 0);
    HeroBioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-bio',
            template: __webpack_require__(/*! ./hero-bio.component.html */ "./src/app/components-templates/hero-bio/hero-bio.component.html"),
            styles: [__webpack_require__(/*! ./hero-bio.component.css */ "./src/app/components-templates/hero-bio/hero-bio.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HeroBioComponent);
    return HeroBioComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/hero-detail/hero-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components-templates/hero-detail/hero-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    margin-bottom: 0px;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/hero-detail/hero-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/hero-detail/hero-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Hero Details:</h6>\r\n<p>Hero name: {{ hero.name }}</p>\r\n<p>Hero power: {{ hero.power }}</p>\r\n"

/***/ }),

/***/ "./src/app/components-templates/hero-detail/hero-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/hero-detail/hero-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
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

var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        console.log(this.hero);
    };
    HeroDetailComponent.prototype.ngOnChanges = function () {
        console.log(this.hero);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/components-templates/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/components-templates/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/hero-name/hero-name.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components-templates/hero-name/hero-name.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/hero-name/hero-name.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/hero-name/hero-name.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Hero name: {{ name }}</p>\r\n<input type=\"text\" [(ngModel)]=\"name\" />"

/***/ }),

/***/ "./src/app/components-templates/hero-name/hero-name.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components-templates/hero-name/hero-name.component.ts ***!
  \***********************************************************************/
/*! exports provided: HeroNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroNameComponent", function() { return HeroNameComponent; });
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

var HeroNameComponent = /** @class */ (function () {
    function HeroNameComponent() {
    }
    HeroNameComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(HeroNameComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name.trim();
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], HeroNameComponent.prototype, "name", null);
    HeroNameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hero-name',
            template: __webpack_require__(/*! ./hero-name.component.html */ "./src/app/components-templates/hero-name/hero-name.component.html"),
            styles: [__webpack_require__(/*! ./hero-name.component.css */ "./src/app/components-templates/hero-name/hero-name.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroNameComponent);
    return HeroNameComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/input-test/input-test.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components-templates/input-test/input-test.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/input-test/input-test.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/input-test/input-test.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ user.name }}<br>\r\n{{ user.age }}<br><br>\r\n<label>Parent Component - Name:</label> <input [(ngModel)]=\"user.name\" /> <br>\r\n<label>Parent Component - Age:</label> <input [(ngModel)]=\"user.age\" /> <br><br>\r\n\r\n<app-edit-user [user]=\"user\"></app-edit-user>\r\n"

/***/ }),

/***/ "./src/app/components-templates/input-test/input-test.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/input-test/input-test.component.ts ***!
  \*************************************************************************/
/*! exports provided: InputTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTestComponent", function() { return InputTestComponent; });
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

var InputTestComponent = /** @class */ (function () {
    function InputTestComponent() {
        this.user = {
            name: 'Steve Jobs',
            age: 60
        };
    }
    InputTestComponent.prototype.ngOnInit = function () {
    };
    InputTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-test',
            template: __webpack_require__(/*! ./input-test.component.html */ "./src/app/components-templates/input-test/input-test.component.html"),
            styles: [__webpack_require__(/*! ./input-test.component.css */ "./src/app/components-templates/input-test/input-test.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InputTestComponent);
    return InputTestComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/interaction/interaction.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components-templates/interaction/interaction.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/interaction/interaction.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/interaction/interaction.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Component interaction</b></h6>\r\n<hr>\r\n<h6>Parent interacts with child via template reference variable:</h6>\r\n<app-countdown-parent-with-temp-ref-var></app-countdown-parent-with-temp-ref-var>\r\n\r\n<br><br><br>\r\n<h6>Using @ViewChild():</h6>\r\n<app-countdown-parent-with-view-child></app-countdown-parent-with-view-child>\r\n\r\n<br><br><br>\r\n<h6>Using @ContentChild():</h6>\r\n<app-user-detail #detail>\r\n    <div>User edit form start</div>\r\n    <app-edit-user [user]=\"detail.user\"></app-edit-user>\r\n    <div>User edit form end</div>\r\n</app-user-detail>\r\n\r\n<br>\r\n<h6>Via a service:</h6>\r\n<app-simple-todo></app-simple-todo>"

/***/ }),

/***/ "./src/app/components-templates/interaction/interaction.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/interaction/interaction.component.ts ***!
  \***************************************************************************/
/*! exports provided: InteractionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionComponent", function() { return InteractionComponent; });
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

var InteractionComponent = /** @class */ (function () {
    function InteractionComponent() {
        this.currentHero = {
            name: "John"
        };
    }
    InteractionComponent.prototype.ngOnInit = function () {
    };
    InteractionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interaction',
            template: __webpack_require__(/*! ./interaction.component.html */ "./src/app/components-templates/interaction/interaction.component.html"),
            styles: [__webpack_require__(/*! ./interaction.component.css */ "./src/app/components-templates/interaction/interaction.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InteractionComponent);
    return InteractionComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h6><b>ngAfterContentInit(), ngAfterContentChecked()</b></h6>\r\n<app-user-after-content-detail #detail>\r\n    <app-edit-user [user]=\"detail.user\"></app-edit-user>\r\n</app-user-after-content-detail>\r\n"

/***/ }),

/***/ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LifecycleContentHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleContentHooksComponent", function() { return LifecycleContentHooksComponent; });
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

var LifecycleContentHooksComponent = /** @class */ (function () {
    function LifecycleContentHooksComponent() {
    }
    LifecycleContentHooksComponent.prototype.ngOnInit = function () {
    };
    LifecycleContentHooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifecycle-content-hooks',
            template: __webpack_require__(/*! ./lifecycle-content-hooks.component.html */ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-content-hooks.component.css */ "./src/app/components-templates/lifecycle-content-hooks/lifecycle-content-hooks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifecycleContentHooksComponent);
    return LifecycleContentHooksComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>ngOnChanges(), ngOnInit(), ngDoCheck(), ngOnDestroy()</b></h6><br>\r\n<button class=\"btn btn-primary\" (click)=\"created = !created\">{{ !created ? 'Create':'Destroy' }} Component</button> &nbsp;\r\n<button class=\"btn btn-primary\" *ngIf=\"created\" (click)=\"changeCurrentUser()\">Change Current User</button> &nbsp;\r\n<button class=\"btn btn-primary\" *ngIf=\"created\" (click)=\"changeCurrentUserName()\">Change Current User Name</button>\r\n\r\n<br><br>\r\n<input type=\"text\" [(ngModel)]=\"currentUser.name\" />\r\n\r\n<br><br>\r\n<app-user-cycle *ngIf=\"created\" [user]=\"currentUser\"></app-user-cycle>\r\n\r\n<br>\r\n<h6><b>ngAfterViewInit(), ngAfterViewChecked()</b></h6>\r\n<a [routerLink]=\"['/components-templates/lifecycle-hooks/view-hooks']\">Click Here for View Hooks Example</a>\r\n\r\n<br><br>\r\n<h6><b>ngAfterContentInit(), ngAfterContentChecked()</b></h6>\r\n<a [routerLink]=\"['/components-templates/lifecycle-hooks/content-hooks']\">Click Here for Content Hooks Example</a>"

/***/ }),

/***/ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LifecycleHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleHooksComponent", function() { return LifecycleHooksComponent; });
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

var LifecycleHooksComponent = /** @class */ (function () {
    function LifecycleHooksComponent() {
        this.created = false;
        this.user = {
            name: 'John',
            age: 25
        };
        this.otherUser = {
            name: 'Michael',
            age: 30
        };
        this.currentUser = this.user;
    }
    LifecycleHooksComponent.prototype.ngOnInit = function () {
    };
    LifecycleHooksComponent.prototype.changeCurrentUser = function () {
        this.currentUser = this.otherUser;
    };
    LifecycleHooksComponent.prototype.changeCurrentUserName = function () {
        this.currentUser.name = 'Chris';
    };
    LifecycleHooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifecycle-hooks',
            template: __webpack_require__(/*! ./lifecycle-hooks.component.html */ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-hooks.component.css */ "./src/app/components-templates/lifecycle-hooks/lifecycle-hooks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifecycleHooksComponent);
    return LifecycleHooksComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<h6><b>ngAfterViewInit(), ngAfterViewChecked()</b></h6>\r\n<app-user-after-view-detail></app-user-after-view-detail>"

/***/ }),

/***/ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LifecycleViewHooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LifecycleViewHooksComponent", function() { return LifecycleViewHooksComponent; });
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

var LifecycleViewHooksComponent = /** @class */ (function () {
    function LifecycleViewHooksComponent() {
    }
    LifecycleViewHooksComponent.prototype.ngOnInit = function () {
    };
    LifecycleViewHooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lifecycle-view-hooks',
            template: __webpack_require__(/*! ./lifecycle-view-hooks.component.html */ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.html"),
            styles: [__webpack_require__(/*! ./lifecycle-view-hooks.component.css */ "./src/app/components-templates/lifecycle-view-hooks/lifecycle-view-hooks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LifecycleViewHooksComponent);
    return LifecycleViewHooksComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/pipes/exponential-strength.pipe.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/pipes/exponential-strength.pipe.ts ***!
  \*************************************************************************/
/*! exports provided: ExponentialStrengthPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExponentialStrengthPipe", function() { return ExponentialStrengthPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ExponentialStrengthPipe = /** @class */ (function () {
    function ExponentialStrengthPipe() {
    }
    ExponentialStrengthPipe.prototype.transform = function (value, exponent) {
        var exp = parseFloat(exponent);
        return Math.pow(value, isNaN(exp) ? 1 : exp);
    };
    ExponentialStrengthPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'exponentialStrength'
        })
    ], ExponentialStrengthPipe);
    return ExponentialStrengthPipe;
}());



/***/ }),

/***/ "./src/app/components-templates/pipes/flying-heroes-impure.pipe.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/pipes/flying-heroes-impure.pipe.ts ***!
  \*************************************************************************/
/*! exports provided: FlyingHeroesImpurePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyingHeroesImpurePipe", function() { return FlyingHeroesImpurePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FlyingHeroesImpurePipe = /** @class */ (function () {
    function FlyingHeroesImpurePipe() {
    }
    FlyingHeroesImpurePipe.prototype.transform = function (allHeroes) {
        return allHeroes.filter(function (hero) { return hero.canFly; });
    };
    FlyingHeroesImpurePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'flyingHeroesImpure',
            pure: false
        })
    ], FlyingHeroesImpurePipe);
    return FlyingHeroesImpurePipe;
}());



/***/ }),

/***/ "./src/app/components-templates/pipes/flying-heroes-pure.pipe.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components-templates/pipes/flying-heroes-pure.pipe.ts ***!
  \***********************************************************************/
/*! exports provided: FlyingHeroesPurePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlyingHeroesPurePipe", function() { return FlyingHeroesPurePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FlyingHeroesPurePipe = /** @class */ (function () {
    function FlyingHeroesPurePipe() {
    }
    FlyingHeroesPurePipe.prototype.transform = function (allHeroes) {
        return allHeroes.filter(function (hero) { return hero.canFly; });
    };
    FlyingHeroesPurePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'flyingHeroesPure'
        })
    ], FlyingHeroesPurePipe);
    return FlyingHeroesPurePipe;
}());



/***/ }),

/***/ "./src/app/components-templates/pipes/format-name.pipe.ts":
/*!****************************************************************!*\
  !*** ./src/app/components-templates/pipes/format-name.pipe.ts ***!
  \****************************************************************/
/*! exports provided: FormatNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNamePipe", function() { return FormatNamePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatNamePipe = /** @class */ (function () {
    function FormatNamePipe() {
    }
    FormatNamePipe.prototype.transform = function (value, first_word, second_word) {
        var name = value.split(' ');
        var positions = {
            'first': 0,
            'middle': 1,
            'last': 2
        };
        return name[positions[first_word]] + " " + name[positions[second_word]];
    };
    FormatNamePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'formatName'
        })
    ], FormatNamePipe);
    return FormatNamePipe;
}());



/***/ }),

/***/ "./src/app/components-templates/pipes/pipes/pipes.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components-templates/pipes/pipes/pipes.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/pipes/pipes/pipes.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components-templates/pipes/pipes/pipes.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Pipes</b></h6>\r\n<div>Birth day</div>\r\n<div>Without pipe: {{ birthday }}</div>\r\n<div>With pipe: {{ birthday | date }}</div>\r\n<div>With pipe and parameter: {{ birthday | date:'MM/dd/yy' }}</div>\r\n<div>With pipe chaining: {{ birthday | date | uppercase }}</div>\r\n<div>json pipe:</div>\r\n<pre>\r\n{{ heroes | json }}\r\n</pre>\r\n\r\n\r\n<br>\r\n<h6>Custom Pipes</h6>\r\n<div>2 power 10 is {{ 2 | exponentialStrength: 10 }}</div>\r\n<div>The preferred name of {{ name }} is {{ name | formatName: 'middle' : 'last' }}</div>\r\n<div>The preferred name of {{ name }} is {{ name | formatName: 'first' : 'last' }}</div>\r\n<div>The preferred name of {{ name }} is {{ name | formatName: 'first' : 'middle' }}</div>\r\n\r\n<br>\r\n<h6>Pure Pipes</h6>\r\n<div>Heroes without pipe(All Heroes)</div>\r\n<ul>\r\n  <li *ngFor=\"let hero of heroes\">{{ hero.name }}</li>\r\n</ul>\r\n\r\n<br>\r\n<div>Pure pipes can't detect change in Object property change / Array element change</div>\r\n<div>Pure pipes can only detect the Variable / Object / Array reference change</div>\r\n\r\n<div style=\"margin: 10px 0px;\">\r\n  <label>Add hero by pushing object:</label> &nbsp;&nbsp;\r\n  <input type=\"text\" [(ngModel)]=\"newHero.name\" #heroName (keyup.enter)=\"pushHero(heroName.value, can.value)\" placeholder=\"Type name and hit enter\" /> &nbsp;&nbsp;\r\n  <input type=\"checkbox\" [(ngModel)]=\"newHero.canFly\" #can /> Can Fly\r\n</div>\r\n\r\n<div style=\"margin: 10px 0px;\">\r\n  <label>Add hero by reference change:</label> &nbsp;&nbsp; \r\n  <input type=\"text\" [(ngModel)]=\"newHero.name\" #heroName2 (keyup.enter)=\"concatHero(heroName2.value, can2.value)\" placeholder=\"Type name and hit enter\" /> &nbsp;&nbsp;\r\n  <input type=\"checkbox\" [(ngModel)]=\"newHero.canFly\" #can2 /> Can Fly\r\n</div>\r\n\r\n<div>Heroes with flyingHeroesPure pipe</div>\r\n<ul>\r\n  <li *ngFor=\"let hero of (heroes | flyingHeroesPure)\">{{ hero.name }}</li>\r\n</ul>\r\n\r\n<br>\r\n<div>Heroes with flyingHeroesImpure pipe</div>\r\n<div>Impure pipe can respond for any kind of change(Mutation of object properties / Reference change)</div>\r\n<ul>\r\n  <li *ngFor=\"let hero of (heroes | flyingHeroesImpure)\">{{ hero.name }}</li>\r\n</ul>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components-templates/pipes/pipes/pipes.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components-templates/pipes/pipes/pipes.component.ts ***!
  \*********************************************************************/
/*! exports provided: PipesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesComponent", function() { return PipesComponent; });
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

var PipesComponent = /** @class */ (function () {
    function PipesComponent() {
        this.birthday = new Date(1995, 3, 15);
        this.name = 'Keith C John';
        this.heroes = [
            { name: 'Windstorm', canFly: true },
            { name: 'Bombasto', canFly: false },
            { name: 'Magneto', canFly: false },
            { name: 'Tornado', canFly: true }
        ];
        this.newHero = {
            name: '',
            canFly: true
        };
    }
    PipesComponent.prototype.ngOnInit = function () {
        console.log(this.birthday);
    };
    PipesComponent.prototype.pushHero = function (name, canFly) {
        var heroObj = {
            name: name,
            canFly: canFly
        };
        // Here heroes array reference is not changed. Pushed another element to same array.
        // So, Pure pipe don't detect this change 
        this.heroes.push(heroObj);
        this.newHero.name = '';
    };
    PipesComponent.prototype.concatHero = function (name, canFly) {
        var heroObj = {
            name: name,
            canFly: canFly
        };
        // Here we are changing the reference of the heroes array on concat
        // Pure pipe will respond to this change
        this.heroes = this.heroes.concat(heroObj);
        this.newHero.name = '';
    };
    PipesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pipes',
            template: __webpack_require__(/*! ./pipes.component.html */ "./src/app/components-templates/pipes/pipes/pipes.component.html"),
            styles: [__webpack_require__(/*! ./pipes.component.css */ "./src/app/components-templates/pipes/pipes/pipes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PipesComponent);
    return PipesComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/simple-todo/simple-todo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components-templates/simple-todo/simple-todo.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/simple-todo/simple-todo.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/simple-todo/simple-todo.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Todo List:</div>\r\n<app-todo-detail *ngFor=\"let todo of todos\" [todo]=\"todo\"></app-todo-detail>\r\n\r\n<br>\r\n<div>User Actions:</div>\r\n<div *ngFor=\"let action of userActions\">{{ action }}</div>\r\n\r\n<br>\r\n<h6>Async Pipe - Print user action</h6>\r\n<div>{{ tracker.todoObservable$ | async }}</div>"

/***/ }),

/***/ "./src/app/components-templates/simple-todo/simple-todo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/simple-todo/simple-todo.component.ts ***!
  \***************************************************************************/
/*! exports provided: SimpleTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTodoComponent", function() { return SimpleTodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todo_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-tracker.service */ "./src/app/components-templates/simple-todo/todo-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleTodoComponent = /** @class */ (function () {
    function SimpleTodoComponent(tracker) {
        this.tracker = tracker;
        this.userActions = [];
        this.todos = [
            { id: 1, title: 'Pay power bill', done: false },
            { id: 2, title: 'Pay phone bill', done: false },
            { id: 3, title: 'Talk to call center', done: false },
            { id: 4, title: 'Attend meeting', done: true },
            { id: 5, title: 'Deposit money', done: true }
        ];
    }
    SimpleTodoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tracker.todoObservable$.subscribe(function (todoAction) {
            _this.userActions.push(todoAction);
        });
    };
    SimpleTodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-simple-todo',
            template: __webpack_require__(/*! ./simple-todo.component.html */ "./src/app/components-templates/simple-todo/simple-todo.component.html"),
            styles: [__webpack_require__(/*! ./simple-todo.component.css */ "./src/app/components-templates/simple-todo/simple-todo.component.css")],
            providers: [_todo_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TodoTrackerService"]]
        }),
        __metadata("design:paramtypes", [_todo_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TodoTrackerService"]])
    ], SimpleTodoComponent);
    return SimpleTodoComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/simple-todo/todo-tracker.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components-templates/simple-todo/todo-tracker.service.ts ***!
  \**************************************************************************/
/*! exports provided: TodoTrackerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoTrackerService", function() { return TodoTrackerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoTrackerService = /** @class */ (function () {
    function TodoTrackerService(http) {
        this.http = http;
        this.todoSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.todoObservable$ = this.todoSubject.asObservable();
    }
    TodoTrackerService.prototype.track = function (todo) {
        var action = todo.title + " is " + (todo.done ? "" : "not") + " completed";
        this.todoSubject.next(action);
        this.http.get('assets/todos.json').subscribe(function (data) {
            console.log(data);
        });
    };
    TodoTrackerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoTrackerService);
    return TodoTrackerService;
}());



/***/ }),

/***/ "./src/app/components-templates/structural-directives/reverse-if.directive.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components-templates/structural-directives/reverse-if.directive.ts ***!
  \************************************************************************************/
/*! exports provided: ReverseIfDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReverseIfDirective", function() { return ReverseIfDirective; });
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

var ReverseIfDirective = /** @class */ (function () {
    function ReverseIfDirective(templateRef, viewContainer) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
    }
    Object.defineProperty(ReverseIfDirective.prototype, "appReverseIf", {
        set: function (condition) {
            if (!condition) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ReverseIfDirective.prototype, "appReverseIf", null);
    ReverseIfDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appReverseIf]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], ReverseIfDirective);
    return ReverseIfDirective;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/main-user/main-user.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/main-user/main-user.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-user-actions></app-user-actions>\r\n\r\n<br>\r\n<app-user-details [user]=\"user\" [class.active]=\"user.active\">\r\n  <app-user-controls [user]=\"user\"></app-user-controls>\r\n</app-user-details>"

/***/ }),

/***/ "./src/app/components-templates/style-components/main-user/main-user.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/main-user/main-user.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MainUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainUserComponent", function() { return MainUserComponent; });
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

var MainUserComponent = /** @class */ (function () {
    function MainUserComponent() {
    }
    MainUserComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MainUserComponent.prototype, "user", void 0);
    MainUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-user',
            template: __webpack_require__(/*! ./main-user.component.html */ "./src/app/components-templates/style-components/main-user/main-user.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MainUserComponent);
    return MainUserComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/styles-demo/styles-demo.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/styles-demo/styles-demo.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"users-heading\">Users</h1>\r\n<app-main-user [user]=\"user\"></app-main-user>"

/***/ }),

/***/ "./src/app/components-templates/style-components/styles-demo/styles-demo.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/styles-demo/styles-demo.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StylesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesDemoComponent", function() { return StylesDemoComponent; });
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

var StylesDemoComponent = /** @class */ (function () {
    function StylesDemoComponent() {
        this.user = {
            name: 'Human Torch',
            team: ['Mister Fantastic', 'Invisible Woman', 'Thing']
        };
    }
    StylesDemoComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(StylesDemoComponent.prototype, "themeClass", {
        get: function () {
            return 'theme-light';
        },
        enumerable: true,
        configurable: true
    });
    StylesDemoComponent.prototype.onmouseenter = function () {
        console.log('mouse entered on styles demo component');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], StylesDemoComponent.prototype, "themeClass", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StylesDemoComponent.prototype, "onmouseenter", null);
    StylesDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-styles-demo',
            template: __webpack_require__(/*! ./styles-demo.component.html */ "./src/app/components-templates/style-components/styles-demo/styles-demo.component.html"),
            styles: ['h1 { font-weight: normal; }', '.users-heading { color: #369;font-size: 30px; }']
        }),
        __metadata("design:paramtypes", [])
    ], StylesDemoComponent);
    return StylesDemoComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/user-actions/user-actions.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-actions/user-actions.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    background-color: green;\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-actions/user-actions.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-actions/user-actions.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>No user action is in progress.</div>"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-actions/user-actions.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-actions/user-actions.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionsComponent", function() { return UserActionsComponent; });
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

var UserActionsComponent = /** @class */ (function () {
    function UserActionsComponent() {
    }
    UserActionsComponent.prototype.ngOnInit = function () {
    };
    UserActionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-actions',
            template: __webpack_require__(/*! ./user-actions.component.html */ "./src/app/components-templates/style-components/user-actions/user-actions.component.html"),
            styles: [__webpack_require__(/*! ./user-actions.component.css */ "./src/app/components-templates/style-components/user-actions/user-actions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserActionsComponent);
    return UserActionsComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/user-controls/user-controls.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-controls/user-controls.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/style-components/user-controls/user-controls.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-controls/user-controls.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  button {\r\n    background-color: white;\r\n    border: 1px solid #777;\r\n  }\r\n</style>\r\n<h3>Controls</h3>\r\n<button (click)=\"activate()\">Activate</button>"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-controls/user-controls.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-controls/user-controls.component.ts ***!
  \************************************************************************************************/
/*! exports provided: UserControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserControlsComponent", function() { return UserControlsComponent; });
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

var UserControlsComponent = /** @class */ (function () {
    function UserControlsComponent() {
    }
    UserControlsComponent.prototype.ngOnInit = function () {
    };
    UserControlsComponent.prototype.activate = function () {
        this.user.active = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserControlsComponent.prototype, "user", void 0);
    UserControlsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-controls',
            template: __webpack_require__(/*! ./user-controls.component.html */ "./src/app/components-templates/style-components/user-controls/user-controls.component.html"),
            styles: [__webpack_require__(/*! ./user-controls.component.css */ "./src/app/components-templates/style-components/user-controls/user-controls.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserControlsComponent);
    return UserControlsComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/user-details/user-details.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-details/user-details.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    padding: 10px;\r\n}\r\n\r\n:host {\r\n    display: block;\r\n    border: 1px solid black;\r\n}\r\n\r\n:host(.active) {\r\n    border-width: 3px;\r\n}\r\n\r\n:host-context(.theme-light) h2 {\r\n    background-color: #eef;\r\n}\r\n\r\n:host /deep/ h3 {\r\n    font-style: italic;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-details/user-details.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-details/user-details.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{ user.name }}</h2>\r\n<app-user-team [user]=\"user\"></app-user-team>\r\n<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-details/user-details.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-details/user-details.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
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

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "user", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components-templates/style-components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components-templates/style-components/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/style-components/user-team/user-team.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-team/user-team.component.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/style-components/user-team/user-team.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-team/user-team.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" type=\"text/css\" href=\"../../../../assets/user-team.css\" />\r\n\r\n<h3>Team</h3>\r\n<ul>\r\n  <li *ngFor=\"let member of user.team\">\r\n    {{member}}\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/components-templates/style-components/user-team/user-team.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components-templates/style-components/user-team/user-team.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UserTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTeamComponent", function() { return UserTeamComponent; });
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

var UserTeamComponent = /** @class */ (function () {
    function UserTeamComponent() {
    }
    UserTeamComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserTeamComponent.prototype, "user", void 0);
    UserTeamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-team',
            template: __webpack_require__(/*! ./user-team.component.html */ "./src/app/components-templates/style-components/user-team/user-team.component.html"),
            styles: [__webpack_require__(/*! ./user-team.component.css */ "./src/app/components-templates/style-components/user-team/user-team.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserTeamComponent);
    return UserTeamComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/template-syntax/template-syntax.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components-templates/template-syntax/template-syntax.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".saveable {\r\n    color: green;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/template-syntax/template-syntax.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/template-syntax/template-syntax.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Interpolation binding</b></h6>\r\n<p>My current hero is {{currentHero.name}}</p>\r\n\r\n<h3>\r\n  <img id=\"heroImg\" src=\"{{heroImageUrl}}\" style=\"height:50px\">\r\n  <img id=\"heroImg2\" src=\"./assets/images/hero.jpg\" style=\"height:50px\">\r\n  <img id=\"heroImg3\" src=\"../../../assets/images/hero.jpg\" style=\"height:50px\">\r\n</h3>\r\n\r\n<p>The sum of 1 + 1 is {{1 + 1}}</p>\r\n\r\n<p>The sum of 1 + 1 is not {{1 + 1 + getVal()}}</p>\r\n\r\n<!-- Script tag will be removed while build -->\r\n<script>\r\n  alert('test');\r\n</script>\r\n\r\n<hr />\r\n<h6><b>Property binding</b></h6>\r\n<br />\r\n\r\n<img [src]=\"heroImageUrl\" style=\"height:50px\" />\r\n<img bind-src=\"heroImageUrl\" style=\"height:50px\" />\r\n<br /><br />\r\n\r\n<button [disabled]=\"formNotChanged\">Cancel</button>\r\n<br /><br />\r\n\r\n<app-hero-detail [hero]=\"currentHero\"></app-hero-detail>\r\n<app-hero-detail hero=\"{{currentHero}}\"></app-hero-detail> \r\n<br />\r\n<button (click)=\"updateHero()\">Update Hero</button>\r\n<br /><br />\r\n\r\n<div ngClass [ngClass]=\"classConditions\">[ngClass] binding to the classes property</div>\r\n<br />\r\n\r\n<h6>Usign function call in bindings:</h6>\r\n<img src=\"{{getHeroImage()}}\" style=\"height:50px\" />\r\n<img [src]=\"getHeroImage()\" style=\"height:50px\" />\r\n<br /><br />\r\n\r\n<!-- Here 'hero' property is initialised with 'currentHero' string. If we use square brackets then only template expression will be evaluated -->\r\n<app-hero-detail hero=\"currentHero\"></app-hero-detail>\r\n<br />\r\n\r\n\r\n<h6>Script tags in property bindings:</h6>\r\n<p><span>\"{{evilTitle}}\" is the <i>interpolated</i> evil title.</span></p>\r\n<p>\"<span [innerHTML]=\"evilTitle\"></span>\" is the <i>property bound</i> evil title.</p>\r\n\r\n<hr />\r\n<h6><b>Attribute, class, and style bindings</b></h6>\r\n<br />\r\n\r\n<h6>Attribute binding</h6>\r\n\r\n<input type=\"text\" id=\"name\" value=\"John\" placeholder=\"Name\" />\r\n<br><br>\r\n\r\n<table class=\"table table-bordered text-center\">\r\n  <tr>\r\n    <td id=\"tdId\" colspan=\"2\">One</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Three-Four</td>\r\n    <td>Three-Four</td>\r\n  </tr>\r\n</table>\r\n\r\n<br><br>\r\n\r\n<div>Un-comment below binding to get error</div>\r\n<table class=\"table table-bordered text-center\">\r\n  <tr>\r\n    <!-- <td colspan=\"{{ noOfColumns }}\">One</td> -->\r\n  </tr>\r\n  <tr>\r\n    <td>Three-Four</td>\r\n    <td>Three-Four</td>\r\n  </tr>\r\n</table>\r\n\r\n\r\n<div>Attribute binding</div>\r\n<table class=\"table table-bordered text-center\">\r\n  <tr>\r\n    <td [attr.colspan]=\"noOfColumns\">One</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Three-Four</td>\r\n    <td>Three-Four</td>\r\n  </tr>\r\n</table>\r\n<br>\r\n\r\n<h6>Class bindings</h6>\r\n<div>I. Reset/override all class names with class property binding</div>\r\n<div class=\"bad curly special\" [class]=\"badCurly\">Bad curly</div>\r\n<br>\r\n\r\n<div>II. Toggle a single class</div>\r\n<div [class.special]=\"special\">This is a special class</div>\r\n<div [class.special]=\"!special\">This is not a special class</div>\r\n<div [class.very]=\"special\" [class.special]=\"special\">This is a very special class</div>\r\n<div class=\"not\" [class.very]=\"special\" [class.special]=\"special\">This is not a very special class</div>\r\n<br>\r\n\r\n<div>III. Toggle Multiple classes(ngClass directive)</div>\r\n<div [ngClass]=\"classConditions\">Multiple class bindings</div>\r\n<div class=\"anotherClass\" [ngClass]=\"classConditions\">Multiple class bindings dont override other existing classes</div>\r\n<br>\r\n\r\n<h6>Style bindings</h6>\r\n<button [style.color]=\"isSpecial ? 'green': 'red'\">Save</button>\r\n<br><br>\r\n<button [style.background-color]=\"canSave ? 'cyan': 'grey'\" >Save</button>\r\n<br><br>\r\n<button [style.color]=\"isSpecial ? 'green': 'red'\" [style.background-color]=\"canSave ? 'cyan': 'grey'\">Save</button>\r\n<br><br>\r\n<button [style.font-size.px]=\"isSpecial ? 13 : 21\">Big</button>\r\n<br><br>\r\n<button [style.fontSize.px]=\"isSpecial ? 13 : 21\">Camel cased fontSize</button>\r\n<br><br>\r\n<div [ngStyle]=\"currentStyles\"> Div with ngStyle directive</div>\r\n\r\n<br>\r\n<hr>\r\n<h6><b>Event Binding</b></h6>\r\n<button (click)=\"onSave($event)\">Save</button> <br><br>\r\n<button on-click=\"onSave($event)\">Save</button>\r\n<br><br>\r\n<input type=\"text\" (keypress)=\"onSave($event)\"/>\r\n\r\n<br>\r\n<hr>\r\n<h6><b>Template Expression Operators</b></h6>\r\n<br>\r\n<h6>Pipe Operator:</h6>\r\n<div>Hero name: {{currentHero.name | uppercase}}</div>\r\n<div><pre>{{currentHero | json}}</pre></div>\r\n\r\n<br>\r\n<h6>Safe Navigation Operator:</h6>\r\n<div>The null hero's name is {{nullHero?.name}}</div>\r\n\r\n<br>\r\n<hr>\r\n<h6><b>Template Statements</b></h6>\r\n<div>Template statement allows assignment operator '='</div>\r\n<div>Hero name: {{currentHero.name}}</div>\r\n<div><button (click)=\"currentHero.name = 'David'\">Save</button></div>\r\n<br>\r\n<div>We can chain the template statements</div>\r\n<div><button (click)=\"currentHero.name = 'David';onSave($event)\">Save</button></div>\r\n\r\n<br>\r\n<hr>\r\n<h6><b>Template reference variables ( #hero )</b></h6>\r\n<form (ngSubmit)=\"onSubmit(heroForm)\" ngForm #heroForm=\"ngForm\" id=\"hero-form\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Phone: {{ phoneRef.value }}\r\n      <input class=\"form-control\" id=\"phone\" name=\"phone\" #phoneRef [(ngModel)]=\"phone\">\r\n    </label>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name: {{ name.value }}\r\n      <input class=\"form-control\" name=\"name\" [(ngModel)]=\"currentHero.name\" #name=\"ngModel\" required minlength=\"4\" >\r\n    </label>\r\n\r\n    <div><pre>{{ name.errors | json }}</pre></div>\r\n\r\n    <div *ngIf=\"name.invalid\">\r\n      <div *ngIf=\"name.errors.required\">\r\n        Name is required\r\n      </div> \r\n      <div *ngIf=\"name.errors.minlength\">\r\n        Name should be morethan 4 chars\r\n      </div>     \r\n    </div>\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"!heroForm.form.valid\">Submit</button>\r\n</form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />"

/***/ }),

/***/ "./src/app/components-templates/template-syntax/template-syntax.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components-templates/template-syntax/template-syntax.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TemplateSyntaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateSyntaxComponent", function() { return TemplateSyntaxComponent; });
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

var TemplateSyntaxComponent = /** @class */ (function () {
    function TemplateSyntaxComponent() {
        this.currentHero = {
            name: "Steven",
            power: 200
        };
        this.phone = "976543213";
        this.heroImageUrl = './assets/images/hero.jpg';
        this.formNotChanged = true;
        this.canSave = true;
        this.isUnchanged = false;
        this.isSpecial = false;
        this.classConditions = {
            'saveable': this.canSave,
            'modified': !this.isUnchanged,
            'special': this.isSpecial
        };
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script>Syntax';
        this.noOfColumns = 2;
        this.actionName = "Save";
        this.badCurly = 'different bad curly';
        this.special = true;
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px'
        };
        this.nullHero = null;
    }
    TemplateSyntaxComponent.prototype.ngOnInit = function () {
    };
    TemplateSyntaxComponent.prototype.getVal = function () {
        return 1;
    };
    TemplateSyntaxComponent.prototype.getHeroImage = function () {
        // this.formNotChanged = false; // Un-comment me to see error in console.
        // getHeroImage() method is used in view to get the hero image. If we modify the value of formNotChanged property in this function we will get an error in console. We should not do like this.
        // getHeroImage() method should only return a value. It should not modify any other component property.
        return this.heroImageUrl;
    };
    TemplateSyntaxComponent.prototype.onSave = function (event) {
        console.log(event);
    };
    TemplateSyntaxComponent.prototype.onSubmit = function (heroForm) {
        console.log(heroForm);
    };
    TemplateSyntaxComponent.prototype.updateHero = function () {
        this.currentHero = {
            name: "John",
            power: 500
        };
    };
    TemplateSyntaxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-syntax',
            template: __webpack_require__(/*! ./template-syntax.component.html */ "./src/app/components-templates/template-syntax/template-syntax.component.html"),
            styles: [__webpack_require__(/*! ./template-syntax.component.css */ "./src/app/components-templates/template-syntax/template-syntax.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateSyntaxComponent);
    return TemplateSyntaxComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/todo-detail/todo-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components-templates/todo-detail/todo-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    cursor: pointer;\r\n    margin-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components-templates/todo-detail/todo-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/todo-detail/todo-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (click)=\"toggle()\" [style.text-decoration]=\"todo.done ? 'line-through' : 'none'\">\r\n    {{ todo.title }}\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components-templates/todo-detail/todo-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/todo-detail/todo-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _simple_todo_todo_tracker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../simple-todo/todo-tracker.service */ "./src/app/components-templates/simple-todo/todo-tracker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(tracker) {
        this.tracker = tracker;
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
    };
    TodoDetailComponent.prototype.toggle = function () {
        this.todo.done = !this.todo.done;
        this.tracker.track(this.todo);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoDetailComponent.prototype, "todo", void 0);
    TodoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-detail',
            template: __webpack_require__(/*! ./todo-detail.component.html */ "./src/app/components-templates/todo-detail/todo-detail.component.html"),
            styles: [__webpack_require__(/*! ./todo-detail.component.css */ "./src/app/components-templates/todo-detail/todo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_simple_todo_todo_tracker_service__WEBPACK_IMPORTED_MODULE_1__["TodoTrackerService"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/two-way-binding/two-way-binding.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components-templates/two-way-binding/two-way-binding.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/two-way-binding/two-way-binding.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components-templates/two-way-binding/two-way-binding.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Two way data binding without using NgModel Directive</b></h6>\r\n<div>Two way data binding on form elements, using property and event binding:</div>\r\n<div>Current hero name is: {{ currentHero.name }}</div>\r\n<input [value]=\"currentHero.name\" (input)=\"currentHero.name=$event.target.value\" >\r\n<br><br><button (click)=\"checkHeroName()\">check hero name</button>\r\n\r\n<br>\r\n<br>\r\n<div>\r\n  <label>Select Hero name:</label>\r\n  <select [value]=\"currentHero.name\" (change)=\"currentHero.name=$event.target.value\">\r\n    <option value=\"\">Select Hero</option>\r\n    <option value=\"John Doe\">John Doe</option>\r\n    <option value=\"Chris\">Chris</option>\r\n    <option value=\"Evan\">Evan</option>\r\n  </select>\r\n</div>\r\n\r\n<br>\r\n<h6><b>Two way data binding using NgModel Directive</b></h6>\r\n<input [(ngModel)]=\"currentHero.name\">\r\n\r\n<br><br>\r\n<h6>Two way data binding using bindon syntax</h6>\r\n<input bindon-ngModel=\"currentHero.name\">\r\n\r\n<br><br>\r\n<div>NgModel - Splitted into property and Event binding</div>\r\n<input [ngModel]=\"currentHero.name\" (ngModelChange)=\"currentHero.name=$event\">\r\n\r\n<br><br>\r\n<div>NgModel - manipulate the value on change</div>\r\n<input [ngModel]=\"currentHero.name\" (ngModelChange)=\"setUpperCase($event)\">\r\n"

/***/ }),

/***/ "./src/app/components-templates/two-way-binding/two-way-binding.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components-templates/two-way-binding/two-way-binding.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TwoWayBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingComponent", function() { return TwoWayBindingComponent; });
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

var TwoWayBindingComponent = /** @class */ (function () {
    function TwoWayBindingComponent() {
        this.currentHero = {
            name: 'John Doe'
        };
    }
    TwoWayBindingComponent.prototype.ngOnInit = function () {
    };
    TwoWayBindingComponent.prototype.setUpperCase = function (value) {
        this.currentHero.name = value.toUpperCase();
    };
    TwoWayBindingComponent.prototype.printEvent = function (e) {
        console.log(e);
    };
    TwoWayBindingComponent.prototype.checkHeroName = function () {
        console.log(this.currentHero.name);
    };
    TwoWayBindingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two-way-binding',
            template: __webpack_require__(/*! ./two-way-binding.component.html */ "./src/app/components-templates/two-way-binding/two-way-binding.component.html"),
            styles: [__webpack_require__(/*! ./two-way-binding.component.css */ "./src/app/components-templates/two-way-binding/two-way-binding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoWayBindingComponent);
    return TwoWayBindingComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\r\n  <label>Name:</label> {{ user.name }} <br>\r\n  <label>Age:</label> {{ user.age }}\r\n  </div>\r\n  \r\n  <br>\r\n  <div class=\"edit\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  "

/***/ }),

/***/ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: UserAfterContentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAfterContentDetailComponent", function() { return UserAfterContentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/components-templates/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAfterContentDetailComponent = /** @class */ (function () {
    function UserAfterContentDetailComponent() {
        this.user = {
            name: 'John',
            age: 25
        };
    }
    UserAfterContentDetailComponent.prototype.ngOnInit = function () {
        // console.log(this.editUserContent.user.name);
    };
    UserAfterContentDetailComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
        console.log(this.editUserContent.user.name);
        console.log(this.editUserContent.user.age);
    };
    UserAfterContentDetailComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
        console.log(this.editUserContent.user.name);
        console.log(this.editUserContent.user.age);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"]),
        __metadata("design:type", _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"])
    ], UserAfterContentDetailComponent.prototype, "editUserContent", void 0);
    UserAfterContentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-after-content-detail',
            template: __webpack_require__(/*! ./user-after-content-detail.component.html */ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-after-content-detail.component.css */ "./src/app/components-templates/user-after-content-detail/user-after-content-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAfterContentDetailComponent);
    return UserAfterContentDetailComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.css":
/*!**************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.css ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\r\n  <label>Name:</label> {{ user.name }} <br>\r\n  <label>Age:</label> {{ user.age }}\r\n</div>\r\n\r\n<app-edit-user [user]=\"user\"></app-edit-user>\r\n"

/***/ }),

/***/ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: UserAfterViewDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAfterViewDetailComponent", function() { return UserAfterViewDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/components-templates/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserAfterViewDetailComponent = /** @class */ (function () {
    function UserAfterViewDetailComponent() {
        this.user = {
            name: 'John',
            age: 25
        };
    }
    UserAfterViewDetailComponent.prototype.ngOnInit = function () {
        // console.log(this.editUserView.user.name);
    };
    UserAfterViewDetailComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit Called...!");
        console.log(this.editUserView.user.name);
        console.log(this.editUserView.user.age);
    };
    UserAfterViewDetailComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked Called...!");
        console.log(this.editUserView.user.name);
        console.log(this.editUserView.user.age);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"]),
        __metadata("design:type", _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"])
    ], UserAfterViewDetailComponent.prototype, "editUserView", void 0);
    UserAfterViewDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-after-view-detail',
            template: __webpack_require__(/*! ./user-after-view-detail.component.html */ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-after-view-detail.component.css */ "./src/app/components-templates/user-after-view-detail/user-after-view-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserAfterViewDetailComponent);
    return UserAfterViewDetailComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/user-cycle/user-cycle.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components-templates/user-cycle/user-cycle.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/user-cycle/user-cycle.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/user-cycle/user-cycle.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  Name: {{ user.name }} <br>\r\n  Age: {{ user.age }} <br>\r\n</div>"

/***/ }),

/***/ "./src/app/components-templates/user-cycle/user-cycle.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components-templates/user-cycle/user-cycle.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserCycleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCycleComponent", function() { return UserCycleComponent; });
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

var UserCycleComponent = /** @class */ (function () {
    function UserCycleComponent() {
        console.log('1. Input properties not available in constructor - ' + this.user);
    }
    UserCycleComponent.prototype.ngOnChanges = function (changes) {
        console.log("2. Component OnChanges");
        console.log('Input properties first available in ngOnChanges');
        console.log(changes);
        console.log(this.user);
    };
    UserCycleComponent.prototype.ngOnInit = function () {
        console.log("3. Component Created");
        //this.usersSubscriber = this.userService.getUSers().subscribe(users => {});
    };
    UserCycleComponent.prototype.ngDoCheck = function () {
        console.log("4. Component DoCheck");
        console.log(this.user.name);
    };
    UserCycleComponent.prototype.ngOnDestroy = function () {
        console.log("5. Component Destroyed");
        //this.usersSubscriber.unSubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserCycleComponent.prototype, "user", void 0);
    UserCycleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-cycle',
            template: __webpack_require__(/*! ./user-cycle.component.html */ "./src/app/components-templates/user-cycle/user-cycle.component.html"),
            styles: [__webpack_require__(/*! ./user-cycle.component.css */ "./src/app/components-templates/user-cycle/user-cycle.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserCycleComponent);
    return UserCycleComponent;
}());



/***/ }),

/***/ "./src/app/components-templates/user-detail/user-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components-templates/user-detail/user-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components-templates/user-detail/user-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components-templates/user-detail/user-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"details\">\r\n<label>Name:</label> {{ user.name }} <br>\r\n<label>Age:</label> {{ user.age }}\r\n</div>\r\n\r\n<br>\r\n<div class=\"edit\">\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n<br>\r\n<div>User Detail Component Content End</div>\r\n"

/***/ }),

/***/ "./src/app/components-templates/user-detail/user-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components-templates/user-detail/user-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/components-templates/edit-user/edit-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent() {
        this.user = {
            name: 'John',
            age: 25
        };
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent.prototype.ngAfterContentInit = function () {
        console.log(this.editUserContent.version);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"]),
        __metadata("design:type", _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"])
    ], UserDetailComponent.prototype, "editUserContent", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/components-templates/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.css */ "./src/app/components-templates/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.service */ "./src/app/core/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/util.service.ts":
/*!**************************************!*\
  !*** ./src/app/core/util.service.ts ***!
  \**************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UtilService = /** @class */ (function () {
    function UtilService() {
        this.userNameSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('John Doe');
        this.userName$ = this.userNameSubject.asObservable();
    }
    UtilService.prototype.updateUSerName = function (userName) {
        this.userNameSubject.next(userName);
    };
    UtilService.prototype.checkUniqueUserName = function (userName) {
        var existingUserNames = ['batMan', 'antMan', 'spiderMan', 'superMan'];
        var isExists = existingUserNames.indexOf(userName) > -1 ? true : false;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(isExists).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/app/counter-one/counter-home/counter-home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/counter-one/counter-home/counter-home.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/counter-one/counter-home/counter-home.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/counter-one/counter-home/counter-home.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Counter One</b></h6>\r\n<app-display-count></app-display-count>\r\n<app-increase-count></app-increase-count>\r\n\r\n<br><br>\r\n<a class=\"btn btn-outline-primary\" [routerLink]=\"['../']\">&lt;&lt; Back to Eager Loading Vs Lazy Loading</a>\r\n"

/***/ }),

/***/ "./src/app/counter-one/counter-home/counter-home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/counter-one/counter-home/counter-home.component.ts ***!
  \********************************************************************/
/*! exports provided: CounterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterHomeComponent", function() { return CounterHomeComponent; });
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

var CounterHomeComponent = /** @class */ (function () {
    function CounterHomeComponent() {
    }
    CounterHomeComponent.prototype.ngOnInit = function () {
    };
    CounterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter-home',
            template: __webpack_require__(/*! ./counter-home.component.html */ "./src/app/counter-one/counter-home/counter-home.component.html"),
            styles: [__webpack_require__(/*! ./counter-home.component.css */ "./src/app/counter-one/counter-home/counter-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CounterHomeComponent);
    return CounterHomeComponent;
}());



/***/ }),

/***/ "./src/app/counter-one/counter-one.module.ts":
/*!***************************************************!*\
  !*** ./src/app/counter-one/counter-one.module.ts ***!
  \***************************************************/
/*! exports provided: CounterOneModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterOneModule", function() { return CounterOneModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _counting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counting.service */ "./src/app/counter-one/counting.service.ts");
/* harmony import */ var _counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./counter-home/counter-home.component */ "./src/app/counter-one/counter-home/counter-home.component.ts");
/* harmony import */ var _display_count_display_count_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display-count/display-count.component */ "./src/app/counter-one/display-count/display-count.component.ts");
/* harmony import */ var _increase_count_increase_count_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./increase-count/increase-count.component */ "./src/app/counter-one/increase-count/increase-count.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CounterOneModule = /** @class */ (function () {
    function CounterOneModule() {
    }
    CounterOneModule_1 = CounterOneModule;
    CounterOneModule.forRoot = function () {
        return {
            ngModule: CounterOneModule_1,
            providers: [_counting_service__WEBPACK_IMPORTED_MODULE_3__["CountingService"]]
        };
    };
    CounterOneModule = CounterOneModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_4__["CounterHomeComponent"], _display_count_display_count_component__WEBPACK_IMPORTED_MODULE_5__["DisplayCountComponent"], _increase_count_increase_count_component__WEBPACK_IMPORTED_MODULE_6__["IncreaseCountComponent"]],
            exports: [_display_count_display_count_component__WEBPACK_IMPORTED_MODULE_5__["DisplayCountComponent"], _increase_count_increase_count_component__WEBPACK_IMPORTED_MODULE_6__["IncreaseCountComponent"]],
            providers: []
        })
    ], CounterOneModule);
    return CounterOneModule;
    var CounterOneModule_1;
}());



/***/ }),

/***/ "./src/app/counter-one/counting.service.ts":
/*!*************************************************!*\
  !*** ./src/app/counter-one/counting.service.ts ***!
  \*************************************************/
/*! exports provided: CountingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountingService", function() { return CountingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountingService = /** @class */ (function () {
    function CountingService() {
        this.count = 0;
        this.counterSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.count);
        this.counter$ = this.counterSubject.asObservable();
    }
    CountingService.prototype.increment = function () {
        this.counterSubject.next(++this.count);
    };
    CountingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CountingService);
    return CountingService;
}());



/***/ }),

/***/ "./src/app/counter-one/display-count/display-count.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/counter-one/display-count/display-count.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/counter-one/display-count/display-count.component.html":
/*!************************************************************************!*\
  !*** ./src/app/counter-one/display-count/display-count.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>Total count is: {{ count }}</span>\r\n"

/***/ }),

/***/ "./src/app/counter-one/display-count/display-count.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/counter-one/display-count/display-count.component.ts ***!
  \**********************************************************************/
/*! exports provided: DisplayCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayCountComponent", function() { return DisplayCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counting.service */ "./src/app/counter-one/counting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayCountComponent = /** @class */ (function () {
    function DisplayCountComponent(countingService) {
        this.countingService = countingService;
    }
    DisplayCountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.countingService.counter$.subscribe(function (val) { return _this.count = val; });
    };
    DisplayCountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-count',
            template: __webpack_require__(/*! ./display-count.component.html */ "./src/app/counter-one/display-count/display-count.component.html"),
            styles: [__webpack_require__(/*! ./display-count.component.css */ "./src/app/counter-one/display-count/display-count.component.css")]
        }),
        __metadata("design:paramtypes", [_counting_service__WEBPACK_IMPORTED_MODULE_1__["CountingService"]])
    ], DisplayCountComponent);
    return DisplayCountComponent;
}());



/***/ }),

/***/ "./src/app/counter-one/increase-count/increase-count.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/counter-one/increase-count/increase-count.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/counter-one/increase-count/increase-count.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/counter-one/increase-count/increase-count.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "&nbsp; &nbsp; <button class=\"btn btn-primary btn-sm\" (click)=\"addOne()\">+</button>\r\n"

/***/ }),

/***/ "./src/app/counter-one/increase-count/increase-count.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/counter-one/increase-count/increase-count.component.ts ***!
  \************************************************************************/
/*! exports provided: IncreaseCountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncreaseCountComponent", function() { return IncreaseCountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _counting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../counting.service */ "./src/app/counter-one/counting.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncreaseCountComponent = /** @class */ (function () {
    function IncreaseCountComponent(countingService) {
        this.countingService = countingService;
    }
    IncreaseCountComponent.prototype.ngOnInit = function () {
    };
    IncreaseCountComponent.prototype.addOne = function () {
        this.countingService.increment();
    };
    IncreaseCountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-increase-count',
            template: __webpack_require__(/*! ./increase-count.component.html */ "./src/app/counter-one/increase-count/increase-count.component.html"),
            styles: [__webpack_require__(/*! ./increase-count.component.css */ "./src/app/counter-one/increase-count/increase-count.component.css")]
        }),
        __metadata("design:paramtypes", [_counting_service__WEBPACK_IMPORTED_MODULE_1__["CountingService"]])
    ], IncreaseCountComponent);
    return IncreaseCountComponent;
}());



/***/ }),

/***/ "./src/app/counter-two/counter-home/counter-home.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/counter-two/counter-home/counter-home.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/counter-two/counter-home/counter-home.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/counter-two/counter-home/counter-home.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Counter Two</b></h6>\r\n<app-display-count></app-display-count>\r\n<app-increase-count></app-increase-count>\r\n\r\n<br><br><br>\r\n<h6>Core Module - UtilService Demo</h6>\r\n<div>User name is {{ userName }}</div>\r\n\r\n<br><br>\r\n<a class=\"btn btn-outline-primary\" [routerLink]=\"['../']\">&lt;&lt; Back to Eager Loading Vs Lazy Loading</a>"

/***/ }),

/***/ "./src/app/counter-two/counter-home/counter-home.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/counter-two/counter-home/counter-home.component.ts ***!
  \********************************************************************/
/*! exports provided: CounterHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterHomeComponent", function() { return CounterHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util.service */ "./src/app/core/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CounterHomeComponent = /** @class */ (function () {
    function CounterHomeComponent(util) {
        this.util = util;
    }
    CounterHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.util.userName$.subscribe(function (val) { return _this.userName = val; });
    };
    CounterHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-counter-home',
            template: __webpack_require__(/*! ./counter-home.component.html */ "./src/app/counter-two/counter-home/counter-home.component.html"),
            styles: [__webpack_require__(/*! ./counter-home.component.css */ "./src/app/counter-two/counter-home/counter-home.component.css")]
        }),
        __metadata("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], CounterHomeComponent);
    return CounterHomeComponent;
}());



/***/ }),

/***/ "./src/app/counter-two/counter-two.module.ts":
/*!***************************************************!*\
  !*** ./src/app/counter-two/counter-two.module.ts ***!
  \***************************************************/
/*! exports provided: CounterTwoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterTwoModule", function() { return CounterTwoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./counter-home/counter-home.component */ "./src/app/counter-two/counter-home/counter-home.component.ts");
/* harmony import */ var _counter_one_counter_one_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../counter-one/counter-one.module */ "./src/app/counter-one/counter-one.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CounterTwoModule = /** @class */ (function () {
    function CounterTwoModule() {
    }
    CounterTwoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _counter_one_counter_one_module__WEBPACK_IMPORTED_MODULE_4__["CounterOneModule"]
            ],
            declarations: [_counter_home_counter_home_component__WEBPACK_IMPORTED_MODULE_3__["CounterHomeComponent"]]
        })
    ], CounterTwoModule);
    return CounterTwoModule;
}());



/***/ }),

/***/ "./src/app/forms-demo/forms-demo.module.ts":
/*!*************************************************!*\
  !*** ./src/app/forms-demo/forms-demo.module.ts ***!
  \*************************************************/
/*! exports provided: FormsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsDemoModule", function() { return FormsDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _reactive_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reactive/form-control/form-control.component */ "./src/app/forms-demo/reactive/form-control/form-control.component.ts");
/* harmony import */ var _reactive_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reactive/form-group/form-group.component */ "./src/app/forms-demo/reactive/form-group/form-group.component.ts");
/* harmony import */ var _reactive_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reactive/form-builder/form-builder.component */ "./src/app/forms-demo/reactive/form-builder/form-builder.component.ts");
/* harmony import */ var _reactive_form_array_form_array_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactive/form-array/form-array.component */ "./src/app/forms-demo/reactive/form-array/form-array.component.ts");
/* harmony import */ var _reactive_nested_form_group_nested_form_group_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reactive/nested-form-group/nested-form-group.component */ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.ts");
/* harmony import */ var _template_driven_super_hero_super_hero_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-driven/super-hero/super-hero.component */ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.ts");
/* harmony import */ var _reactive_reactive_form_validation_reactive_form_validation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reactive/reactive-form-validation/reactive-form-validation.component */ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.ts");
/* harmony import */ var _template_driven_template_driven_form_validation_template_driven_form_validation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template-driven/template-driven-form-validation/template-driven-form-validation.component */ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FormsDemoModule = /** @class */ (function () {
    function FormsDemoModule() {
    }
    FormsDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            declarations: [_reactive_form_control_form_control_component__WEBPACK_IMPORTED_MODULE_4__["FormControlComponent"], _reactive_form_group_form_group_component__WEBPACK_IMPORTED_MODULE_5__["FormGroupComponent"], _reactive_form_builder_form_builder_component__WEBPACK_IMPORTED_MODULE_6__["FormBuilderComponent"], _reactive_form_array_form_array_component__WEBPACK_IMPORTED_MODULE_7__["FormArrayComponent"], _reactive_nested_form_group_nested_form_group_component__WEBPACK_IMPORTED_MODULE_8__["NestedFormGroupComponent"], _template_driven_super_hero_super_hero_component__WEBPACK_IMPORTED_MODULE_9__["SuperHeroComponent"], _reactive_reactive_form_validation_reactive_form_validation_component__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormValidationComponent"], _template_driven_template_driven_form_validation_template_driven_form_validation_component__WEBPACK_IMPORTED_MODULE_11__["TemplateDrivenFormValidationComponent"]]
        })
    ], FormsDemoModule);
    return FormsDemoModule;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/form-array/form-array.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-array/form-array.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-array/form-array.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-array/form-array.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n  <label>\r\n    First Name:\r\n    <input type=\"text\" formControlName=\"firstName\">\r\n  </label><br><br>\r\n\r\n  <label>\r\n    Last Name:\r\n    <input type=\"text\" formControlName=\"lastName\">\r\n  </label><br><br>\r\n\r\n  <div formGroupName=\"address\">\r\n    <h3>Address</h3>\r\n  \r\n    <label>\r\n      Street:\r\n      <input type=\"text\" formControlName=\"street\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      City:\r\n      <input type=\"text\" formControlName=\"city\">\r\n    </label><br><br>\r\n    \r\n    <label>\r\n      State:\r\n      <input type=\"text\" formControlName=\"state\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      Zip Code:\r\n      <input type=\"text\" formControlName=\"zip\">\r\n    </label><br><br>\r\n  </div>\r\n\r\n  <div formArrayName=\"aliases\">\r\n    <h3>Aliases</h3> <button (click)=\"addAlias()\">Add Alias</button><br><br>\r\n\r\n    <div *ngFor=\"let control of aliases.controls; let i=index\">\r\n      <label>\r\n        Alias:\r\n        <input type=\"text\" [formControlName]=\"i\">\r\n      </label>\r\n    </div>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!profileFormGroup.valid\">Submit</button><br><br>\r\n\r\n  <p>\r\n    <button (click)=\"updateFewProfileControls()\">Patch Profile</button>\r\n  </p>\r\n  <p>\r\n    <button (click)=\"updateAllProfileControls()\">Update all Profile controls</button>\r\n  </p>\r\n</form>"

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-array/form-array.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-array/form-array.component.ts ***!
  \************************************************************************/
/*! exports provided: FormArrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormArrayComponent", function() { return FormArrayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormArrayComponent = /** @class */ (function () {
    function FormArrayComponent(fb) {
        this.fb = fb;
        this.profileFormGroup = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [''],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            }),
            aliases: this.fb.array([
                this.fb.control('')
            ])
        });
    }
    FormArrayComponent.prototype.ngOnInit = function () {
        this.profileFormGroup.valueChanges.subscribe(function (changesObj) {
            console.log(changesObj);
        });
    };
    Object.defineProperty(FormArrayComponent.prototype, "aliases", {
        get: function () {
            console.log(this.profileFormGroup.get('aliases'));
            return this.profileFormGroup.get('aliases');
        },
        enumerable: true,
        configurable: true
    });
    FormArrayComponent.prototype.addAlias = function () {
        this.aliases.push(this.fb.control(''));
    };
    FormArrayComponent.prototype.onSubmit = function () {
        console.log(this.profileFormGroup.value);
        console.log(this.profileFormGroup.status);
        console.log(this.profileFormGroup.valid);
    };
    FormArrayComponent.prototype.updateFewProfileControls = function () {
        this.profileFormGroup.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    };
    FormArrayComponent.prototype.updateAllProfileControls = function () {
        this.profileFormGroup.setValue({
            firstName: 'John',
            lastName: 'Doe',
            address: {
                street: 'Some Street',
                city: 'Hyd',
                state: 'TS',
                zip: '' // In setValue method, we can pass empty values. But, we should not miss any form control.
            },
            aliases: ['John', 'Doe', 'Dude']
        });
    };
    FormArrayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-array',
            template: __webpack_require__(/*! ./form-array.component.html */ "./src/app/forms-demo/reactive/form-array/form-array.component.html"),
            styles: [__webpack_require__(/*! ./form-array.component.css */ "./src/app/forms-demo/reactive/form-array/form-array.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormArrayComponent);
    return FormArrayComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/form-builder/form-builder.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-builder/form-builder.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-builder/form-builder.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-builder/form-builder.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n  <label>\r\n    First Name:\r\n    <input type=\"text\" formControlName=\"firstName\">\r\n  </label><br><br>\r\n\r\n  <label>\r\n    Last Name:\r\n    <input type=\"text\" formControlName=\"lastName\">\r\n  </label><br><br>\r\n\r\n  <div formGroupName=\"address\">\r\n    <h3>Address</h3>\r\n  \r\n    <label>\r\n      Street:\r\n      <input type=\"text\" formControlName=\"street\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      City:\r\n      <input type=\"text\" formControlName=\"city\">\r\n    </label><br><br>\r\n    \r\n    <label>\r\n      State:\r\n      <input type=\"text\" formControlName=\"state\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      Zip Code:\r\n      <input type=\"text\" formControlName=\"zip\">\r\n    </label><br><br>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!profileFormGroup.valid\">Submit</button><br><br>\r\n\r\n  <p>\r\n    <button (click)=\"updateFewProfileControls()\">Patch Profile</button>\r\n  </p>\r\n  <p>\r\n    <button (click)=\"updateAllProfileControls()\">Update all Profile controls</button>\r\n  </p>\r\n</form>"

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-builder/form-builder.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-builder/form-builder.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBuilderComponent", function() { return FormBuilderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormBuilderComponent = /** @class */ (function () {
    function FormBuilderComponent(fb) {
        this.fb = fb;
        this.profileFormGroup = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [''],
            address: this.fb.group({
                street: [''],
                city: [''],
                state: [''],
                zip: ['']
            })
        });
    }
    FormBuilderComponent.prototype.ngOnInit = function () {
        this.profileFormGroup.valueChanges.subscribe(function (changesObj) {
            console.log(changesObj);
        });
    };
    FormBuilderComponent.prototype.onSubmit = function () {
        console.log(this.profileFormGroup.value);
        console.log(this.profileFormGroup.status);
        console.log(this.profileFormGroup.valid);
    };
    FormBuilderComponent.prototype.updateFewProfileControls = function () {
        this.profileFormGroup.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    };
    FormBuilderComponent.prototype.updateAllProfileControls = function () {
        this.profileFormGroup.setValue({
            firstName: 'John',
            lastName: 'Doe',
            address: {
                street: 'Some Street',
                city: 'Hyd',
                state: 'TS',
                zip: '' // In setValue method, we can pass empty values. But, we should not miss any form control.
            }
        });
    };
    FormBuilderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-builder',
            template: __webpack_require__(/*! ./form-builder.component.html */ "./src/app/forms-demo/reactive/form-builder/form-builder.component.html"),
            styles: [__webpack_require__(/*! ./form-builder.component.css */ "./src/app/forms-demo/reactive/form-builder/form-builder.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], FormBuilderComponent);
    return FormBuilderComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/form-control/form-control.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-control/form-control.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-control/form-control.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-control/form-control.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label>\r\n  Name:\r\n  <input type=\"text\" [formControl]=\"name\"> <br><br>\r\n  <button class=\"btn btn-primary\" (click)=\"readCurrentName()\">Read Current Name</button> &nbsp;&nbsp;\r\n  <button class=\"btn btn-primary\" (click)=\"updateName()\">update Name</button> &nbsp;&nbsp;\r\n</label>\r\n\r\n<br><br>\r\n<p>Status: {{ name.status }}</p>\r\n<p>Validity: {{ name.valid }}</p>\r\n<p>InValid: {{ name.invalid }}</p>\r\n<p>Pristine: {{ name.pristine }}</p>\r\n<p>Dirty: {{ name.dirty }}</p>\r\n<p>Touched: {{ name.touched }}</p>\r\n<p>Untouched: {{ name.untouched }}</p>\r\n\r\n<p>Value: {{ name.value }}</p>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-control/form-control.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-control/form-control.component.ts ***!
  \****************************************************************************/
/*! exports provided: FormControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormControlComponent", function() { return FormControlComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormControlComponent = /** @class */ (function () {
    function FormControlComponent() {
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    }
    FormControlComponent.prototype.ngOnInit = function () {
        this.name.valueChanges.subscribe(function (currentValue) {
            console.log(currentValue);
        });
    };
    FormControlComponent.prototype.readCurrentName = function () {
        console.log(this.name.value);
    };
    FormControlComponent.prototype.updateName = function () {
        this.name.setValue('Einstein');
    };
    FormControlComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-control',
            template: __webpack_require__(/*! ./form-control.component.html */ "./src/app/forms-demo/reactive/form-control/form-control.component.html"),
            styles: [__webpack_require__(/*! ./form-control.component.css */ "./src/app/forms-demo/reactive/form-control/form-control.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormControlComponent);
    return FormControlComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/form-group/form-group.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-group/form-group.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-group/form-group.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-group/form-group.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n  <label>\r\n    First Name:\r\n    <input type=\"text\" formControlName=\"firstName\">\r\n  </label><br><br>\r\n\r\n  <label>\r\n    Last Name:\r\n    <input type=\"text\" formControlName=\"lastName\">\r\n  </label><br><br>\r\n\r\n  <button type=\"submit\" [disabled]=\"!profileFormGroup.valid\">Submit</button>\r\n</form>\r\n\r\n<br><br>\r\n{{ profileFormGroup.value | json }}"

/***/ }),

/***/ "./src/app/forms-demo/reactive/form-group/form-group.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/form-group/form-group.component.ts ***!
  \************************************************************************/
/*! exports provided: FormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroupComponent", function() { return FormGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormGroupComponent = /** @class */ (function () {
    function FormGroupComponent() {
        this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    FormGroupComponent.prototype.ngOnInit = function () {
        this.profileFormGroup.valueChanges.subscribe(function (changesObj) {
            console.log(changesObj);
        });
    };
    FormGroupComponent.prototype.onSubmit = function () {
        console.log(this.profileFormGroup.value);
        console.log(this.profileFormGroup.status);
        console.log(this.profileFormGroup.valid);
    };
    FormGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-group',
            template: __webpack_require__(/*! ./form-group.component.html */ "./src/app/forms-demo/reactive/form-group/form-group.component.html"),
            styles: [__webpack_require__(/*! ./form-group.component.css */ "./src/app/forms-demo/reactive/form-group/form-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FormGroupComponent);
    return FormGroupComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"profileFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n  \r\n  <label>\r\n    First Name:\r\n    <input type=\"text\" formControlName=\"firstName\">\r\n  </label><br><br>\r\n\r\n  <label>\r\n    Last Name:\r\n    <input type=\"text\" formControlName=\"lastName\">\r\n  </label><br><br>\r\n\r\n  <div formGroupName=\"address\">\r\n    <h3>Address</h3>\r\n  \r\n    <label>\r\n      Street:\r\n      <input type=\"text\" formControlName=\"street\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      City:\r\n      <input type=\"text\" formControlName=\"city\">\r\n    </label><br><br>\r\n    \r\n    <label>\r\n      State:\r\n      <input type=\"text\" formControlName=\"state\">\r\n    </label><br><br>\r\n  \r\n    <label>\r\n      Zip Code:\r\n      <input type=\"text\" formControlName=\"zip\">\r\n    </label><br><br>\r\n  </div>\r\n\r\n  <button type=\"submit\" [disabled]=\"!profileFormGroup.valid\">Submit</button><br><br>\r\n\r\n  <p>\r\n    <button (click)=\"updateFewProfileControls()\">Patch Profile</button>\r\n  </p>\r\n  <p>\r\n    <button (click)=\"updateAllProfileControls()\">Update all Profile controls</button>\r\n  </p>\r\n</form>\r\n\r\n<br><br>\r\n\r\n<pre>{{ profileFormGroup.value | json }}</pre> <br>\r\n\r\n{{ profileFormGroup.valid }} <br>\r\n{{ profileFormGroup.status }} <br>"

/***/ }),

/***/ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NestedFormGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NestedFormGroupComponent", function() { return NestedFormGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NestedFormGroupComponent = /** @class */ (function () {
    function NestedFormGroupComponent() {
        this.profileFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                street: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                city: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                state: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
                zip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
            })
        });
    }
    NestedFormGroupComponent.prototype.ngOnInit = function () {
        this.profileFormGroup.valueChanges.subscribe(function (changesObj) {
            console.log(changesObj);
        });
    };
    NestedFormGroupComponent.prototype.onSubmit = function () {
        console.log(this.profileFormGroup.value);
        console.log(this.profileFormGroup.status);
        console.log(this.profileFormGroup.valid);
    };
    NestedFormGroupComponent.prototype.updateFewProfileControls = function () {
        this.profileFormGroup.patchValue({
            firstName: 'Nancy',
            address: {
                street: '123 Drew Street'
            }
        });
    };
    NestedFormGroupComponent.prototype.updateAllProfileControls = function () {
        this.profileFormGroup.setValue({
            firstName: 'John',
            lastName: 'Doe',
            address: {
                street: 'Some Street',
                city: 'Hyd',
                state: 'TS',
                zip: '' // In setValue method, we can pass empty values. But, we should not miss any form control.
            }
        });
    };
    NestedFormGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nested-form-group',
            template: __webpack_require__(/*! ./nested-form-group.component.html */ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.html"),
            styles: [__webpack_require__(/*! ./nested-form-group.component.css */ "./src/app/forms-demo/reactive/nested-form-group/nested-form-group.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NestedFormGroupComponent);
    return NestedFormGroupComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.css":
/*!*****************************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.css ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fundamentals-form\">\r\n\r\n  <form [formGroup]=\"heroFormGroup\" (ngSubmit)=\"onSubmit()\">\r\n    \r\n    <!-- Refering name control from heroFormGroup -->\r\n    <!-- <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n\r\n      <div *ngIf=\"heroFormGroup.controls.name.invalid && (heroFormGroup.controls.name.dirty || heroFormGroup.controls.name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"heroFormGroup.controls.name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"heroFormGroup.controls.name.errors.minlength\">\r\n          Name must be at least 4 characters long.\r\n        </div>\r\n        <div *ngIf=\"heroFormGroup.controls.name.errors.maxlength\">\r\n          Name should not be more than 10 characters.\r\n        </div>\r\n      </div>\r\n      <pre>{{ heroFormGroup.controls.name.errors | json }}</pre>\r\n    </div> -->\r\n\r\n    <!-- Refering name control using getter method -->\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input id=\"name\" class=\"form-control\" formControlName=\"name\">\r\n\r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"name.errors.minlength\">\r\n          Name must be at least 4 characters long.\r\n        </div>\r\n        <div *ngIf=\"name.errors.maxlength\">\r\n          Name should not be more than 10 characters.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"alterEgo\">Alter Ego</label>\r\n      <input id=\"alterEgo\" class=\"form-control\" formControlName=\"alterEgo\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"power\">Hero Power</label>\r\n      <select id=\"power\" class=\"form-control\" formControlName=\"power\">\r\n        <option value=\"\">Select hero power</option>\r\n        <option *ngFor=\"let p of powers\" [value]=\"p\">{{p}}</option>\r\n      </select>\r\n\r\n      <div *ngIf=\"power.invalid && power.touched\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"power.errors.required\">Power is required.</div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input id=\"email\" class=\"form-control\" formControlName=\"email\">\r\n\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          Email is required.\r\n        </div>\r\n        <div *ngIf=\"email.errors.email\">\r\n          Please enter a valid email.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"seconderyEmail\">Secondery Email</label>\r\n      <input id=\"seconderyEmail\" class=\"form-control\" formControlName=\"seconderyEmail\">\r\n\r\n      <div *ngIf=\"seconderyEmail.invalid && (seconderyEmail.dirty || seconderyEmail.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"seconderyEmail.errors?.pattern\">\r\n          Please enter a valid email.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Available</label>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" value=\"yes\" formControlName=\"available\">\r\n        <label class=\"form-check-label\">Yes</label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"radio\" value=\"no\" formControlName=\"available\">\r\n        <label class=\"form-check-label\">No</label>\r\n      </div>\r\n\r\n      <div *ngIf=\"available.invalid && (available.dirty || available.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"available.errors.required\">\r\n          Please select availability.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"nickName\">Nick Name</label>\r\n      <input id=\"nickName\" class=\"form-control\" formControlName=\"nickName\">\r\n\r\n      <div *ngIf=\"nickName.invalid && (nickName.dirty || nickName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nickName.errors.required\">\r\n          Nick name is required.\r\n        </div>\r\n        <div *ngIf=\"nickName.errors.forbiddenName\">\r\n          {{ nickName.errors.forbiddenName.value }} is not allowed as nick name. \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"userName\">User Name</label>\r\n      <input id=\"userName\" class=\"form-control\" formControlName=\"userName\">\r\n\r\n      <div *ngIf=\"userName.pending\">Validating....</div>\r\n      <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"userName.errors.required\">\r\n          User name is required.\r\n        </div>\r\n        <div *ngIf=\"userName.errors.uniqueUserName\">\r\n          {{ userName.errors.uniqueUserName }} is already taken. Please choose another.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Vehicles</label>\r\n      <div class=\"form-check\" *ngFor=\"let vehicle of vehicles.controls; let i=index\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" [formControl]=\"vehicle\">\r\n        <label class=\"form-check-label\">{{ vehiclesArr[i].label }}</label>\r\n      </div>\r\n\r\n      <div *ngIf=\"vehicles.invalid && (vehicles.dirty || vehicles.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"vehicles.errors.required\">\r\n          Please select atleast one vehicle. \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"heroFormGroup.invalid || heroFormGroup.pending\">Submit</button> &nbsp;&nbsp;\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"heroFormGroup.reset()\">Reset</button>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ReactiveFormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormValidationComponent", function() { return ReactiveFormValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validators_forbidden_name_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/validators/forbidden-name.validator */ "./src/app/shared/validators/forbidden-name.validator.ts");
/* harmony import */ var _shared_validators_unique_user_name_async_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/validators/unique-user-name.async-validator */ "./src/app/shared/validators/unique-user-name.async-validator.ts");
/* harmony import */ var _shared_validators_checkbox_required_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/validators/checkbox-required.validator */ "./src/app/shared/validators/checkbox-required.validator.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReactiveFormValidationComponent = /** @class */ (function () {
    function ReactiveFormValidationComponent(fb, uniqueUserNameValidator) {
        this.fb = fb;
        this.uniqueUserNameValidator = uniqueUserNameValidator;
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer', 'Honest'];
        this.vehiclesArr = [
            { label: "Two Wheeler", value: 'two-wheeler', selected: false },
            { label: "Four Wheeler", value: 'four-wheeler', selected: false },
            { label: "Private Chopper", value: 'private-chopper', selected: false },
            { label: "Private Plain", value: 'private-plain', selected: false }
        ];
    }
    ReactiveFormValidationComponent.prototype.ngOnInit = function () {
        this.heroFormGroup = this.fb.group({
            'name': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            'alterEgo': [''],
            'power': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'email': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            'seconderyEmail': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            'available': ['yes', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'nickName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, Object(_shared_validators_forbidden_name_validator__WEBPACK_IMPORTED_MODULE_2__["forbiddenNameValidator"])(['Bob', 'Tim', 'Tommy'])]],
            'userName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required], this.uniqueUserNameValidator.validate.bind(this.uniqueUserNameValidator)],
            'vehicles': this.buildVehicleCheckBoxControls(),
        });
        this.heroFormGroup.valueChanges.subscribe(function (changesObj) {
            console.log(changesObj);
            // console.log(this.heroFormGroup.get('vehicles'));
        });
    };
    ReactiveFormValidationComponent.prototype.buildVehicleCheckBoxControls = function () {
        var _this = this;
        var vehicleCheckBoxControls = [];
        this.vehiclesArr.forEach(function (vehicle) {
            var control = _this.fb.control(vehicle.selected);
            vehicleCheckBoxControls.push(control);
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"](vehicleCheckBoxControls, Object(_shared_validators_checkbox_required_validator__WEBPACK_IMPORTED_MODULE_4__["checkboxRequiredValidator"])());
    };
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "name", {
        get: function () { return this.heroFormGroup.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "power", {
        get: function () { return this.heroFormGroup.get('power'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "alterEgo", {
        get: function () { return this.heroFormGroup.get('alterEgo'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "email", {
        get: function () { return this.heroFormGroup.get('email'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "seconderyEmail", {
        get: function () { return this.heroFormGroup.get('seconderyEmail'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "available", {
        get: function () { return this.heroFormGroup.get('available'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "nickName", {
        get: function () { return this.heroFormGroup.get('nickName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "userName", {
        get: function () { return this.heroFormGroup.get('userName'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReactiveFormValidationComponent.prototype, "vehicles", {
        get: function () { return this.heroFormGroup.get('vehicles'); },
        enumerable: true,
        configurable: true
    });
    ReactiveFormValidationComponent.prototype.onSubmit = function () {
        console.log(this.heroFormGroup.value);
        var payload = __assign({}, this.heroFormGroup.value);
        payload.vehicles = this.getVehicleValues(payload.vehicles);
        console.log(payload);
    };
    ReactiveFormValidationComponent.prototype.getVehicleValues = function (checkboxValues) {
        var _this = this;
        var values = [];
        checkboxValues.forEach(function (val, index) {
            if (val) {
                values.push(_this.vehiclesArr[index].value);
            }
        });
        return values;
    };
    ReactiveFormValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reactive-form-validation',
            template: __webpack_require__(/*! ./reactive-form-validation.component.html */ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.html"),
            styles: [__webpack_require__(/*! ./reactive-form-validation.component.css */ "./src/app/forms-demo/reactive/reactive-form-validation/reactive-form-validation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _shared_validators_unique_user_name_async_validator__WEBPACK_IMPORTED_MODULE_3__["UniqueUserNameValidator"]])
    ], ReactiveFormValidationComponent);
    return ReactiveFormValidationComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/super-hero/super-hero.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ng-valid:not(form) {\r\n    border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n    border-left: 5px solid #a94442; /* red */\r\n}\r\n"

/***/ }),

/***/ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/super-hero/super-hero.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Hero Form</h1>\r\n  <form (ngSubmit)=\"onSubmit(heroForm)\" ngForm #heroForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"hero.name\" name=\"name\" #name=\"ngModel\" required>\r\n      <div *ngIf=\"name.invalid && name.touched\" class=\"alert alert-danger\">\r\n        Name is required\r\n      </div>\r\n      <div>value: {{ name.value }}</div>\r\n      <div>status: {{ name.status }}</div>\r\n      <div>valid: {{ name.valid }}</div>\r\n      <div>invalid: {{ name.invalid }}</div>\r\n      <div>pristine: {{ name.pristine }}</div>\r\n      <div>dirty: {{ name.dirty }}</div>\r\n      <div>touched: {{ name.touched }}</div>\r\n      <div>untouched: {{ name.untouched }}</div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"alterEgo\">Alter Ego (Second Personality)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"alterEgo\" [(ngModel)]=\"hero.alterEgo\" name=\"alterEgo\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"power\">Hero Power</label>\r\n      <select class=\"form-control\" id=\"power\" [(ngModel)]=\"hero.power\" name=\"power\" #power=\"ngModel\" required>\r\n        <option value=\"\">Select Power</option>\r\n        <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\r\n      </select>\r\n      <div *ngIf=\"power.invalid && power.touched\" class=\"alert alert-danger\">\r\n        Power is required\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"heroForm.invalid\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/super-hero/super-hero.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SuperHeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperHeroComponent", function() { return SuperHeroComponent; });
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

var SuperHeroComponent = /** @class */ (function () {
    function SuperHeroComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer', 'Honest'];
        this.hero = {
            name: '',
            alterEgo: '',
            power: ''
        };
    }
    SuperHeroComponent.prototype.ngOnInit = function () {
    };
    SuperHeroComponent.prototype.onSubmit = function (heroForm) {
        console.log(this.hero);
        console.log(heroForm);
        console.log(heroForm.valid);
        console.log(heroForm.controls);
        console.log(heroForm.controls.name.value);
        console.log(heroForm.value);
    };
    SuperHeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-super-hero',
            template: __webpack_require__(/*! ./super-hero.component.html */ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.html"),
            styles: [__webpack_require__(/*! ./super-hero.component.css */ "./src/app/forms-demo/template-driven/super-hero/super-hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuperHeroComponent);
    return SuperHeroComponent;
}());



/***/ }),

/***/ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.css":
/*!**************************************************************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container fundamentals-form\">\r\n  <form (ngSubmit)=\"onSubmit(heroForm)\" #heroForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"heroObj.name\" name=\"name\" #name=\"ngModel\" required minlength=\"4\" maxlength=\"10\">\r\n      \r\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"name.errors.required\">\r\n          Name is required.\r\n        </div>\r\n        <div *ngIf=\"name.errors.minlength\">\r\n          Name must be at least 4 characters long.\r\n        </div>\r\n        <div *ngIf=\"name.errors.maxlength\">\r\n          Name should not be more than 10 characters.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"alterEgo\">Alter Ego (Second Personality)</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"alterEgo\" [(ngModel)]=\"heroObj.alterEgo\" name=\"alterEgo\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"power\">Hero Power</label>\r\n      <select class=\"form-control\" id=\"power\" [(ngModel)]=\"heroObj.power\" name=\"power\" #power=\"ngModel\" required>\r\n        <option *ngFor=\"let pow of powers\" [value]=\"pow\">{{pow}}</option>\r\n      </select>\r\n      <div *ngIf=\"power.invalid && (power.dirty || power.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"power.errors.required\">\r\n          Power is required\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"email\">Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"heroObj.email\" name=\"email\" #email=\"ngModel\" required pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n\r\n      <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"email.errors.required\">\r\n          Email is required.\r\n        </div>\r\n        <div *ngIf=\"email.errors.pattern\">\r\n          Please enter a valid email.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"seconderyEmail\">Secondery Email</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"seconderyEmail\" [(ngModel)]=\"heroObj.seconderyEmail\" name=\"seconderyEmail\" #seconderyEmail=\"ngModel\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n\r\n      <div *ngIf=\"seconderyEmail.invalid && (seconderyEmail.dirty || seconderyEmail.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"seconderyEmail.errors.pattern\">\r\n          Please enter a valid email.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Available</label>\r\n      <div class=\"form-check\">\r\n        <input type=\"radio\" class=\"form-check-input\" [(ngModel)]=\"heroObj.available\" value=\"yes\" name=\"available\" required>\r\n        <label class=\"form-check-label\">Yes</label>\r\n      </div>\r\n      <div class=\"form-check\">\r\n        <input type=\"radio\" class=\"form-check-input\" [(ngModel)]=\"heroObj.available\" value=\"no\" name=\"available\" required>\r\n        <label class=\"form-check-label\">No</label>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"nickName\">Nick Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"nickName\" [(ngModel)]=\"heroObj.nickName\" name=\"nickName\" #nickName=\"ngModel\" required appForbiddenNameValidaor [forbiddenNames]=\"forbiddenNames\">\r\n\r\n      <div *ngIf=\"nickName.invalid && (nickName.dirty || nickName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"nickName.errors.required\">\r\n          Nick name is required.\r\n        </div>\r\n        <div *ngIf=\"nickName.errors.forbiddenName\">\r\n          {{ nickName.errors.forbiddenName.value }} is not allowed as nick name. \r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"userName\">User Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"userName\" [(ngModel)]=\"heroObj.userName\" name=\"userName\" #userName=\"ngModel\" required appUniqueUserNameAsyncValidator>\r\n\r\n      <div *ngIf=\"userName.pending\">Validating....</div>\r\n      <div *ngIf=\"userName.invalid && (userName.dirty || userName.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"userName.errors.required\">\r\n          User name is required.\r\n        </div>\r\n        <div *ngIf=\"userName.errors.uniqueUserName\">\r\n          {{ userName.errors.uniqueUserName }} is already taken. Please choose another.\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label>Vehicles</label>\r\n      <div class=\"form-check\" *ngFor=\"let vehicle of vehiclesArr\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"vehicle.selected\" [value]=\"vehicle.selected\" name=\"vehicles\" required>\r\n        <label class=\"form-check-label\">{{ vehicle.label }}</label>\r\n      </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!heroForm.form.valid\">Submit</button>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: TemplateDrivenFormValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDrivenFormValidationComponent", function() { return TemplateDrivenFormValidationComponent; });
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

var TemplateDrivenFormValidationComponent = /** @class */ (function () {
    function TemplateDrivenFormValidationComponent() {
        this.powers = ['Really Smart', 'Super Flexible', 'Weather Changer', 'Honest'];
        this.vehiclesArr = [
            { label: "Two Wheeler", value: 'two-wheeler', selected: false },
            { label: "Four Wheeler", value: 'four-wheeler', selected: false },
            { label: "Private Chopper", value: 'private-chopper', selected: false },
            { label: "Private Plain", value: 'private-plain', selected: false }
        ];
        this.heroObj = {
            'name': '',
            'alterEgo': '',
            'power': '',
            'email': '',
            'seconderyEmail': '',
            'available': 'yes',
            'nickName': '',
            'userName': '',
            'vehicles': []
        };
        this.forbiddenNames = ['Bob', 'Tim', 'Tommy'];
    }
    TemplateDrivenFormValidationComponent.prototype.ngOnInit = function () { };
    TemplateDrivenFormValidationComponent.prototype.onSubmit = function (heroForm) {
        var _this = this;
        console.log(heroForm);
        console.log(heroForm.value);
        console.log(this.heroObj);
        console.log(this.vehiclesArr);
        this.heroObj.vehicles = [];
        this.vehiclesArr.forEach(function (val) {
            if (val.selected)
                _this.heroObj.vehicles.push(val.value);
        });
        console.log(this.heroObj);
    };
    TemplateDrivenFormValidationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-template-driven-form-validation',
            template: __webpack_require__(/*! ./template-driven-form-validation.component.html */ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.html"),
            styles: [__webpack_require__(/*! ./template-driven-form-validation.component.css */ "./src/app/forms-demo/template-driven/template-driven-form-validation/template-driven-form-validation.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TemplateDrivenFormValidationComponent);
    return TemplateDrivenFormValidationComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.css":
/*!*******************************************!*\
  !*** ./src/app/index/index.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".index-page ul li{\r\n    list-style: none;\r\n}"

/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" class=\"index-page\">\r\n  \r\n  <ngb-panel id=\"toggle-1\" title=\"Architecture\">\r\n    <ng-template ngbPanelContent>\r\n      Please implement atleast todos list page in <a href=\"https://github.com/angular-online/todos-app\" target=\"_blank\">Todos app</a> to understand architecture of Angular framework.\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n  <ngb-panel id=\"toggle-2\" title=\"Components & Templates\">\r\n    <ng-template ngbPanelContent>\r\n      <ul class=\"index-list\">\r\n        <li class=\"heading\">\r\n          <h6>1. Displaying Data</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/display-data-in-template']\">Component with template</a></li>\r\n            <li><a [routerLink]=\"['/components-templates/display-data-in-template-url']\">Component with template url</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"heading\">\r\n          <h6>2. Template Syntax</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/template-syntax']\">Template Syntax</a></li>\r\n            <li><a [routerLink]=\"['/components-templates/template-syntax/custom-events']\">Custom Events / EventEmitter</a></li>\r\n            <li><a [routerLink]=\"['/components-templates/template-syntax/two-way-binding']\">Two-Way binding and NgModel</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"heading\">\r\n          <h6>3. Directives</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/directives']\">Directives Examples</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"heading\">\r\n          <h6>4. Component Interaction</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/component-interaction']\">Component Interaction Examples</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"heading\">\r\n          <h6>5. Component Lifecycle Hooks</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/lifecycle-hooks']\">Component Lifecycle Hooks</a></li>\r\n          </ul>\r\n        </li>\r\n\r\n        <li class=\"heading\">\r\n          <h6>6. Pipes</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/components-templates/pipes']\">Pipes Examples</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n  <ngb-panel id=\"toggle-3\" title=\"Observables & RxJS\">\r\n    <ng-template ngbPanelContent>\r\n      <ul class=\"index-list\">\r\n        <li class=\"heading\">\r\n          <h6>1. Observables</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/rxjs/observables-demo']\">Observables Demo</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"heading\">\r\n          <h6>2. Subjects</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/rxjs/subjects-demo']\">Subjects Demo</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"heading\">\r\n          <h6>3. Operators</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/rxjs/operators-demo']\">Operators Demo</a></li>\r\n            <li><a [routerLink]=\"['/rxjs/different-operators']\">Different Operators</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n  <ngb-panel id=\"toggle-4\" title=\"NgModules & Dependency Injection\">\r\n    <ng-template ngbPanelContent>\r\n      <ul class=\"index-list\">\r\n        <li class=\"heading\">\r\n          <h6>1. Lazy Loading Feature Modules</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/ngmodules/lazy-loading']\">Lazy Loading Feature Modules Demo</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"heading\">\r\n          <h6>2. Singleton Services / Eager Loading Vs Lazy Loading</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['/ngmodules/eager-vs-lazy-loading']\">Eager Loading Vs Lazy Loading Demo</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n  <ngb-panel id=\"toggle-5\" title=\"Forms\">\r\n    <ng-template ngbPanelContent>\r\n      <ul class=\"index-list\">\r\n        <li class=\"heading\">\r\n          <h6>1. Reactive Forms</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['../forms/reactive/form-control']\">Form Control</a></li>\r\n            <li><a [routerLink]=\"['../forms/reactive/form-group']\">Form Group</a></li>\r\n            <li><a [routerLink]=\"['../forms/reactive/nested-form-group']\">Nested Form Group</a></li>\r\n            <li><a [routerLink]=\"['../forms/reactive/form-builder']\">Form Builder</a></li>\r\n            <li><a [routerLink]=\"['../forms/reactive/form-array']\">Form Array</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"heading\">\r\n          <h6>2. Template Driven Forms</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['../forms/template-driven']\">Template Driven Forms</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"heading\">\r\n          <h6>3. Form Validation</h6>\r\n          <ul class=\"nested-list\">\r\n            <li><a [routerLink]=\"['../forms/validation/reactive']\">Reactive Forms Validation</a></li>\r\n            <li><a [routerLink]=\"['../forms/validation/template-driven']\">Template-Driven Forms Validation</a></li>\r\n          </ul>\r\n        </li>\r\n      </ul>\r\n    </ng-template>\r\n  </ngb-panel>\r\n\r\n</ngb-accordion>\r\n\r\n"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IndexComponent = /** @class */ (function () {
    function IndexComponent(titleService) {
        this.titleService = titleService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Index Page - List of links to all example programs');
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>Eager Loading Vs Lazy Loading / Singleton Services</h6><br>\r\n\r\n<a [routerLink]=\"['counter-one-home']\">Counter One Home</a> <br><br>\r\n<a [routerLink]=\"['counter-two-home']\">Counter Two Home</a> <br><br>\r\n<!-- <a [routerLink]=\"['/counter-two-home']\">Counter Two Home</a> <br><br> --> \r\n\r\n<a [routerLink]=\"['../../lazy-counter-home']\">Lazy Counter Home</a>\r\n<!-- <a [routerLink]=\"['/lazy-counter-home']\">Lazy Counter Home</a> -->\r\n\r\n"

/***/ }),

/***/ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EagerVsLazyLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EagerVsLazyLoadingComponent", function() { return EagerVsLazyLoadingComponent; });
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

var EagerVsLazyLoadingComponent = /** @class */ (function () {
    function EagerVsLazyLoadingComponent() {
    }
    EagerVsLazyLoadingComponent.prototype.ngOnInit = function () {
    };
    EagerVsLazyLoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eager-vs-lazy-loading',
            template: __webpack_require__(/*! ./eager-vs-lazy-loading.component.html */ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.html"),
            styles: [__webpack_require__(/*! ./eager-vs-lazy-loading.component.css */ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EagerVsLazyLoadingComponent);
    return EagerVsLazyLoadingComponent;
}());



/***/ }),

/***/ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a class=\"btn btn-primary\" [routerLink]=\"['/customers']\">Customers</a> &nbsp;\r\n<a class=\"btn btn-primary\" [routerLink]=\"['/orders']\">Orders</a> &nbsp;\r\n<a class=\"btn btn-primary\" [routerLink]=\"['']\">Home</a>\r\n"

/***/ }),

/***/ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.ts ***!
  \*******************************************************************************/
/*! exports provided: LazyLoadingDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadingDemoComponent", function() { return LazyLoadingDemoComponent; });
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

var LazyLoadingDemoComponent = /** @class */ (function () {
    function LazyLoadingDemoComponent() {
    }
    LazyLoadingDemoComponent.prototype.ngOnInit = function () {
    };
    LazyLoadingDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lazy-loading-demo',
            template: __webpack_require__(/*! ./lazy-loading-demo.component.html */ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.html"),
            styles: [__webpack_require__(/*! ./lazy-loading-demo.component.css */ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LazyLoadingDemoComponent);
    return LazyLoadingDemoComponent;
}());



/***/ }),

/***/ "./src/app/modules-demo/modules-demo.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules-demo/modules-demo.module.ts ***!
  \*****************************************************/
/*! exports provided: ModulesDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesDemoModule", function() { return ModulesDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lazy_loading_demo_lazy_loading_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-loading-demo/lazy-loading-demo.component */ "./src/app/modules-demo/lazy-loading-demo/lazy-loading-demo.component.ts");
/* harmony import */ var _eager_vs_lazy_loading_eager_vs_lazy_loading_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eager-vs-lazy-loading/eager-vs-lazy-loading.component */ "./src/app/modules-demo/eager-vs-lazy-loading/eager-vs-lazy-loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ModulesDemoModule = /** @class */ (function () {
    function ModulesDemoModule() {
    }
    ModulesDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_lazy_loading_demo_lazy_loading_demo_component__WEBPACK_IMPORTED_MODULE_3__["LazyLoadingDemoComponent"], _eager_vs_lazy_loading_eager_vs_lazy_loading_component__WEBPACK_IMPORTED_MODULE_4__["EagerVsLazyLoadingComponent"]]
        })
    ], ModulesDemoModule);
    return ModulesDemoModule;
}());



/***/ }),

/***/ "./src/app/rx-demo/color-change.service.ts":
/*!*************************************************!*\
  !*** ./src/app/rx-demo/color-change.service.ts ***!
  \*************************************************/
/*! exports provided: ColorChangeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorChangeService", function() { return ColorChangeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorChangeService = /** @class */ (function () {
    function ColorChangeService() {
        this.colorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.color$ = this.colorSubject.asObservable();
    }
    ColorChangeService.prototype.emitColor = function (color) {
        this.colorSubject.next(color);
    };
    ColorChangeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ColorChangeService);
    return ColorChangeService;
}());



/***/ }),

/***/ "./src/app/rx-demo/color-input/color-input.component.css":
/*!***************************************************************!*\
  !*** ./src/app/rx-demo/color-input/color-input.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rx-demo/color-input/color-input.component.html":
/*!****************************************************************!*\
  !*** ./src/app/rx-demo/color-input/color-input.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>Type a valid color and hit enter:</label> <br>\r\n  <input type=\"text\" [(ngModel)]=\"color\" (keyup.enter)=\"changeColor()\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rx-demo/color-input/color-input.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/rx-demo/color-input/color-input.component.ts ***!
  \**************************************************************/
/*! exports provided: ColorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorInputComponent", function() { return ColorInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_change_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color-change.service */ "./src/app/rx-demo/color-change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorInputComponent = /** @class */ (function () {
    function ColorInputComponent(colorChangeService) {
        this.colorChangeService = colorChangeService;
        this.color = 'blue';
    }
    ColorInputComponent.prototype.ngOnInit = function () {
    };
    ColorInputComponent.prototype.changeColor = function () {
        this.colorChangeService.emitColor(this.color);
    };
    ColorInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-input',
            template: __webpack_require__(/*! ./color-input.component.html */ "./src/app/rx-demo/color-input/color-input.component.html"),
            styles: [__webpack_require__(/*! ./color-input.component.css */ "./src/app/rx-demo/color-input/color-input.component.css")]
        }),
        __metadata("design:paramtypes", [_color_change_service__WEBPACK_IMPORTED_MODULE_1__["ColorChangeService"]])
    ], ColorInputComponent);
    return ColorInputComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/colorful-text/colorful-text.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/rx-demo/colorful-text/colorful-text.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rx-demo/colorful-text/colorful-text.component.html":
/*!********************************************************************!*\
  !*** ./src/app/rx-demo/colorful-text/colorful-text.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [style.color]=\"color\">Subjects are part of RxJS. Subjects are also a kind of Observables.</div>\r\n"

/***/ }),

/***/ "./src/app/rx-demo/colorful-text/colorful-text.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/rx-demo/colorful-text/colorful-text.component.ts ***!
  \******************************************************************/
/*! exports provided: ColorfulTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorfulTextComponent", function() { return ColorfulTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_change_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../color-change.service */ "./src/app/rx-demo/color-change.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorfulTextComponent = /** @class */ (function () {
    function ColorfulTextComponent(colorChangeService) {
        this.colorChangeService = colorChangeService;
        this.color = 'blue';
    }
    ColorfulTextComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorChangeService.color$.subscribe(function (color) { return _this.color = color; });
    };
    ColorfulTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colorful-text',
            template: __webpack_require__(/*! ./colorful-text.component.html */ "./src/app/rx-demo/colorful-text/colorful-text.component.html"),
            styles: [__webpack_require__(/*! ./colorful-text.component.css */ "./src/app/rx-demo/colorful-text/colorful-text.component.css")]
        }),
        __metadata("design:paramtypes", [_color_change_service__WEBPACK_IMPORTED_MODULE_1__["ColorChangeService"]])
    ], ColorfulTextComponent);
    return ColorfulTextComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/different-operators/different-operators.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/rx-demo/different-operators/different-operators.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    width: 65%;\r\n}"

/***/ }),

/***/ "./src/app/rx-demo/different-operators/different-operators.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/rx-demo/different-operators/different-operators.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>1. map</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of numbersMappedLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>2. filter</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of filterLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>3. combineLatest</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of combineLatestLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>4. merge</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of mergeLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>5. concat</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of concatLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>6. startWith</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of startWithLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>7. withLatestFrom</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of withLatestFromLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>8. zip</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of zipLogs\">{{ log | json }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>9. debounceTime</b></h6>\r\n<input type=\"text\" value=\"\" id=\"name\" />\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of debounceTimeLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>10. distinct & distinctUntilChanged</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of distinctLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of distinctUntilChangedLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>11. take</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of takeLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>12. takeUntil</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of takeUntilLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6><b>13. bufferTime</b></h6>\r\n<ul class=\"logs\">\r\n  <li *ngFor=\"let log of bufferTimeLogs\">{{ log | json}}</li>\r\n</ul>"

/***/ }),

/***/ "./src/app/rx-demo/different-operators/different-operators.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/rx-demo/different-operators/different-operators.component.ts ***!
  \******************************************************************************/
/*! exports provided: DifferentOperatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifferentOperatorsComponent", function() { return DifferentOperatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DifferentOperatorsComponent = /** @class */ (function () {
    function DifferentOperatorsComponent() {
        this.numbersMappedLogs = [];
        this.filterLogs = [];
        this.combineLatestLogs = [];
        this.concatLogs = [];
        this.mergeLogs = [];
        this.startWithLogs = [];
        this.withLatestFromLogs = [];
        this.zipLogs = [];
        this.debounceTimeLogs = [];
        this.distinctLogs = [];
        this.distinctUntilChangedLogs = [];
        this.takeLogs = [];
        this.takeUntilLogs = [];
        this.bufferTimeLogs = [];
    }
    DifferentOperatorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var numbersObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3, 4, 5);
        /******* map operator *********/
        var numbersMapped = numbersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return val * 10; }));
        numbersMapped.subscribe(function (val) { return _this.numbersMappedLogs.push(val); });
        /******* filter operator *********/
        var numbersFiltered = numbersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (val) { return val % 2 === 0; })); // Filtered even numbers
        numbersFiltered.subscribe(function (val) { return _this.filterLogs.push(val); });
        /******* combineLatest operator *********/
        var observable1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        var observable2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1500);
        var combined$ = observable1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observable2$, function (val1, val2) {
            return val1 + " - " + val2;
        }));
        combined$.subscribe(function (val) { return _this.combineLatestLogs.push(val); });
        /******* merge operator *********/
        var merged$ = observable1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["merge"])(observable2$));
        merged$.subscribe(function (val) { return _this.mergeLogs.push(val); });
        /******* concat operator *********/
        var nums1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3);
        var nums2$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(4, 5, 6);
        var concatinated$ = nums1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concat"])(nums2$));
        concatinated$.subscribe(function (val) { return _this.concatLogs.push(val); });
        /******* startWith operator *********/
        var nums3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3);
        var startedWith$ = nums3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(0));
        startedWith$.subscribe(function (val) { return _this.startWithLogs.push(val); });
        /******* withLatestFrom operator *********/
        //emit every 5s
        var source = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        //emit every 1s
        var secondSource = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        var final = source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(secondSource), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_a) {
            var first = _a[0], second = _a[1];
            return "First Source (5s): " + first + " Second Source (1s): " + second;
        }));
        final.subscribe(function (val) { return _this.withLatestFromLogs.push(val); });
        /******* zip operator *********/
        //emit every 1s
        var numbers1$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        var numbers2$ = numbers1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(2));
        var numb$ = numbers1$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["zip"])(numbers2$));
        //output: [0,0]...[1,1]
        numb$.subscribe(function (val) { return _this.zipLogs.push(val); });
        /******* debounceTime operator *********/
        var inputElem = document.getElementById('name');
        //wait .5s between keyups to emit current value
        //throw away all other values
        var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(inputElem, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500));
        events$.subscribe(function (event) { return _this.debounceTimeLogs.push(inputElem.value); });
        /******* distinct & distinctUntilChanged operator *********/
        var duplicates$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])([1, 1, 2, 2, 3, 1, 2, 3]);
        duplicates$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinct"])()).subscribe(function (val) { return _this.distinctLogs.push(val); });
        duplicates$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])()).subscribe(function (val) { return _this.distinctUntilChangedLogs.push(val); });
        /******* take operator *********/
        //emit value every 1s
        var interval$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        //take the first 5 emitted values
        interval$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(5)).subscribe(function (val) { return _this.takeLogs.push(val); });
        /******* takeUntil operator *********/
        var source$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        //after 5 seconds, emit value
        var timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
        //when timer emits after 5s, complete source$
        source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(timer$)).subscribe(function (val) { return _this.takeUntilLogs.push(val); });
        /******* bufferTime operator *********/
        //Create an observable that emits a value every 500ms
        var intrvl$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(500);
        //After 2 seconds have passed, emit buffered values as an array
        intrvl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["bufferTime"])(2000)).subscribe(function (val) { return _this.bufferTimeLogs.push(val); });
        /******* tap operator *********/
        var source3$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3, 4, 5);
        //transparently log values from source
        source3$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) { return console.log("BEFORE MAP: " + val); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return val + 10; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (val) { return console.log("AFTER MAP: " + val); })).subscribe();
        /******* retry & catchError operator *********/
        var apiData = Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_3__["ajax"])('https://todos-api-dev.herokuapp.com/todoss').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(3), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (!res.response) {
                throw new Error('Value expected!');
            }
            return res.response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }));
        apiData.subscribe({
            next: function (data) { console.log('data: ', data); },
            error: function (err) { console.log('errors already caught... will not run'); }
        });
    };
    DifferentOperatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-different-operators',
            template: __webpack_require__(/*! ./different-operators.component.html */ "./src/app/rx-demo/different-operators/different-operators.component.html"),
            styles: [__webpack_require__(/*! ./different-operators.component.css */ "./src/app/rx-demo/different-operators/different-operators.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DifferentOperatorsComponent);
    return DifferentOperatorsComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/observables-demo/observables-demo.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/rx-demo/observables-demo/observables-demo.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#special-area {\r\n    width: 100%;\r\n    height: 150px;\r\n    background: #d3d3d3;\r\n    border: 1px solid #3b3333;\r\n}\r\n\r\nul.logs {\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/rx-demo/observables-demo/observables-demo.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/rx-demo/observables-demo/observables-demo.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Observable Creation</b></h6>\r\n\r\n<br>\r\n<h6>fromEvent</h6>\r\n<div id=\"special-area\"></div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of fromEventLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>ajax</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of ajaxLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>interval</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of intervalLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>from array</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of fromLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>of method</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of ofLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>Observable.create</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of customObservableLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>new Observable()</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of customObservable2Logs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>Custom observalble with error method</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of customObservable3Logs\">{{ log }}</li>\r\n</ul>\r\n\r\n<h6>Custom observalble on array</h6>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of arrayCustomObservableLogs\">{{ log }}</li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/rx-demo/observables-demo/observables-demo.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/rx-demo/observables-demo/observables-demo.component.ts ***!
  \************************************************************************/
/*! exports provided: ObservablesDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservablesDemoComponent", function() { return ObservablesDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/ajax */ "./node_modules/rxjs/_esm5/ajax/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ObservablesDemoComponent = /** @class */ (function () {
    function ObservablesDemoComponent() {
        this.fromEventLogs = [];
        this.ajaxLogs = [];
        this.intervalLogs = [];
        this.fromLogs = [];
        this.ofLogs = [];
        this.customObservableLogs = [];
        this.customObservable2Logs = [];
        this.customObservable3Logs = [];
        this.arrayCustomObservableLogs = [];
    }
    ObservablesDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        /***** fromEvent *****/
        var specialElement = document.getElementById('special-area');
        var mouseEventsObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(specialElement, 'mousemove');
        var subscription = mouseEventsObservable.subscribe(function (evt) {
            _this.fromEventLogs.push("Coords: " + evt.clientX + " X " + evt.clientY);
            if (evt.clientX < 250 && evt.clientY < 230) {
                subscription.unsubscribe();
                _this.fromEventLogs.push("Unsubscribed for mouse events");
            }
        });
        /***** ajax *****/
        var todosUrl = 'https://todos-api-dev.herokuapp.com/todos';
        var todoObservable = Object(rxjs_ajax__WEBPACK_IMPORTED_MODULE_2__["ajax"])(todosUrl);
        todoObservable.subscribe(function (res) {
            console.log(res.status, res.response);
            _this.ajaxLogs.push('Response came');
        });
        /***** interval *****/
        var secondsCounterObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(1000);
        secondsCounterObservable.subscribe(function (n) { return _this.intervalLogs.push("It's been " + n + " seconds since subscribing!"); });
        /***** from array *****/
        var numbers = [10, 20, 30, 40, 50];
        var arrayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(numbers);
        arrayObservable.subscribe(function (n) { return _this.fromLogs.push("" + n); });
        /***** of *****/
        var ofObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(60, 70, 80, 90, 100);
        ofObservable.subscribe(function (n) { return _this.ofLogs.push("" + n); });
        /***** Custom observable with create method *****/
        var customObservable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            observer.next(1);
            observer.next(2);
            observer.next(3);
            setTimeout(function () {
                observer.next(4);
                observer.complete();
            }, 1000);
            observer.next(5);
        });
        customObservable.subscribe({
            next: function (x) { return _this.customObservableLogs.push('got value ' + x); },
            error: function (err) { return _this.customObservableLogs.push('something wrong occurred: ' + err); },
            complete: function () { return _this.customObservableLogs.push('done'); },
        }); // subscribe method with next, error, complete methods in an object
        /***** Custom observalble with new keyword *****/
        var customObservable2 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            observer.next(11);
            observer.next(22);
            observer.next(33);
            setTimeout(function () {
                observer.next(44);
                observer.complete();
            }, 1000);
        });
        customObservable2.subscribe(function (x) { return _this.customObservable2Logs.push('got value ' + x); }, function (err) { return _this.customObservable2Logs.push('something wrong occurred: ' + err); }, function () { return _this.customObservable2Logs.push('done'); }); // subscribe method with next, error, complete methods
        /***** Custom observalble with error method *****/
        var customObservable3 = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            try {
                observer.next(111);
                observer.next(222);
                observer.next(333);
                throw new Error('some error');
            }
            catch (err) {
                observer.error(err);
            }
        });
        customObservable3.subscribe(function (x) { return _this.customObservable3Logs.push('got value ' + x); }, // called on, observer.next()
        function (// called on, observer.next()
        err) { return _this.customObservable3Logs.push('something wrong occurred: ' + err); }, // called on, observer.error()
        function () { return _this.customObservable3Logs.push('done'); }); // subscribe method with next, error, complete methods
        /***** Custom observable on array *****/
        /***** Instead of using from method, created array observable with  Observable.create *****/
        var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var arrayCustomObservable = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            numbersArray.forEach(function (n) {
                observer.next(n);
            });
            observer.complete();
        });
        arrayCustomObservable.subscribe({
            next: function (x) { return _this.arrayCustomObservableLogs.push('got value ' + x); },
            error: function (err) { return _this.arrayCustomObservableLogs.push('something wrong occurred: ' + err); },
            complete: function () { return _this.arrayCustomObservableLogs.push('done'); },
        }); // subscribe method with next, error, complete methods in an object    
    };
    ObservablesDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-observables-demo',
            template: __webpack_require__(/*! ./observables-demo.component.html */ "./src/app/rx-demo/observables-demo/observables-demo.component.html"),
            styles: [__webpack_require__(/*! ./observables-demo.component.css */ "./src/app/rx-demo/observables-demo/observables-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ObservablesDemoComponent);
    return ObservablesDemoComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/operators-demo/operators-demo.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/rx-demo/operators-demo/operators-demo.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/rx-demo/operators-demo/operators-demo.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/rx-demo/operators-demo/operators-demo.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Operators</b></h6> <br>\r\n\r\n<div>Applying map and filter operators</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of oddSquareLogs1\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>Applying map and filter operators through pipe()</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of oddSquareLogs2\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>Applying pipe() on observable</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of oddSquareLogs3\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6>Marble Diagrams</h6>\r\n<img src=\"assets/images/marble.PNG\" style=\"width: 80%;margin-top: 10px;\"/>\r\n\r\n<br>\r\n<h6>Map Marble Diagram</h6>\r\n<img src=\"assets/images/map-marble.PNG\" style=\"width: 80%;margin-top: 10px;\"/>"

/***/ }),

/***/ "./src/app/rx-demo/operators-demo/operators-demo.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/rx-demo/operators-demo/operators-demo.component.ts ***!
  \********************************************************************/
/*! exports provided: OperatorsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperatorsDemoComponent", function() { return OperatorsDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatorsDemoComponent = /** @class */ (function () {
    function OperatorsDemoComponent() {
        this.oddSquareLogs1 = [];
        this.oddSquareLogs2 = [];
        this.oddSquareLogs3 = [];
    }
    OperatorsDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Created observable using of method
        var numbersObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(1, 2, 3, 4, 5);
        /********* Applying map and filter operators ***********/
        var oddFilterFunc = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (val) { return val % 2 !== 0; });
        var oddFiltered$ = oddFilterFunc(numbersObservable);
        oddFiltered$.subscribe(function (value) { return console.log('filter output', value); });
        var squareMapFunc = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (val) { return val * val; });
        var oddSquaredNumbers$ = squareMapFunc(oddFiltered$);
        oddSquaredNumbers$.subscribe(function (value) { return _this.oddSquareLogs1.push(value); });
        /*********** Applying map and filter operators through pipe() **************/
        var squareOddValsPipeFunc = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n % 2 !== 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return n * n; }));
        var squareOdd$ = squareOddValsPipeFunc(numbersObservable);
        squareOdd$.subscribe(function (x) { return _this.oddSquareLogs2.push(x); });
        /******** Applying pipe() on observable ***********/
        // The pipe() function is also a method on the RxJS Observable, so we can use it like below for same operation
        var squaredOddObservable = numbersObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (n) { return n % 2 !== 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (n) { return n * n; }));
        squaredOddObservable.subscribe(function (x) { return _this.oddSquareLogs3.push(x); });
    };
    OperatorsDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-operators-demo',
            template: __webpack_require__(/*! ./operators-demo.component.html */ "./src/app/rx-demo/operators-demo/operators-demo.component.html"),
            styles: [__webpack_require__(/*! ./operators-demo.component.css */ "./src/app/rx-demo/operators-demo/operators-demo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OperatorsDemoComponent);
    return OperatorsDemoComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/rx-demo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/rx-demo/rx-demo.module.ts ***!
  \*******************************************/
/*! exports provided: RxDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxDemoModule", function() { return RxDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./observables-demo/observables-demo.component */ "./src/app/rx-demo/observables-demo/observables-demo.component.ts");
/* harmony import */ var _subject_demo_subject_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./subject-demo/subject-demo.component */ "./src/app/rx-demo/subject-demo/subject-demo.component.ts");
/* harmony import */ var _operators_demo_operators_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operators-demo/operators-demo.component */ "./src/app/rx-demo/operators-demo/operators-demo.component.ts");
/* harmony import */ var _colorful_text_colorful_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./colorful-text/colorful-text.component */ "./src/app/rx-demo/colorful-text/colorful-text.component.ts");
/* harmony import */ var _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-input/color-input.component */ "./src/app/rx-demo/color-input/color-input.component.ts");
/* harmony import */ var _different_operators_different_operators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./different-operators/different-operators.component */ "./src/app/rx-demo/different-operators/different-operators.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var RxDemoModule = /** @class */ (function () {
    function RxDemoModule() {
    }
    RxDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: [_observables_demo_observables_demo_component__WEBPACK_IMPORTED_MODULE_3__["ObservablesDemoComponent"], _subject_demo_subject_demo_component__WEBPACK_IMPORTED_MODULE_4__["SubjectDemoComponent"], _operators_demo_operators_demo_component__WEBPACK_IMPORTED_MODULE_5__["OperatorsDemoComponent"], _colorful_text_colorful_text_component__WEBPACK_IMPORTED_MODULE_6__["ColorfulTextComponent"], _color_input_color_input_component__WEBPACK_IMPORTED_MODULE_7__["ColorInputComponent"], _different_operators_different_operators_component__WEBPACK_IMPORTED_MODULE_8__["DifferentOperatorsComponent"]]
        })
    ], RxDemoModule);
    return RxDemoModule;
}());



/***/ }),

/***/ "./src/app/rx-demo/subject-demo/subject-demo.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/rx-demo/subject-demo/subject-demo.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.logs {\r\n    list-style: none;\r\n    padding-left: 0px;\r\n    margin-top: 10px;\r\n}"

/***/ }),

/***/ "./src/app/rx-demo/subject-demo/subject-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/rx-demo/subject-demo/subject-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6><b>Subjects</b></h6> <br>\r\n\r\n<app-colorful-text></app-colorful-text>\r\n\r\n<br>\r\n\r\n<app-color-input></app-color-input>\r\n\r\n<br>\r\n<h6>Subjects works with only one execution context(Singleton) and Multicast the values</h6>\r\n<div>numbersObservable$ logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of observableLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>numbersSubject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of subjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>numbersSubjectObservable$ logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of subjectObservableLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6>Subject as both observable and observer</h6>\r\n<div>namesSubject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of namesSubjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<br>\r\n<h6>Different types of Subjects</h6>\r\n<div>Regular Subject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of regularSubjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>Behaviour Subject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of behaviorSubjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>Reply Subject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of replySubjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n<div>Async Subject logs</div>\r\n<ul class=\"logs\">\r\n    <li *ngFor=\"let log of asyncSubjectLogs\">{{ log }}</li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/rx-demo/subject-demo/subject-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/rx-demo/subject-demo/subject-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: SubjectDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDemoComponent", function() { return SubjectDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _subjects_demo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../subjects-demo.service */ "./src/app/rx-demo/subjects-demo.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SubjectDemoComponent = /** @class */ (function () {
    function SubjectDemoComponent(subjectsDemoService) {
        this.subjectsDemoService = subjectsDemoService;
        this.observableLogs = [];
        this.subjectLogs = [];
        this.subjectObservableLogs = [];
        this.namesSubjectLogs = [];
        this.regularSubjectLogs = [];
        this.behaviorSubjectLogs = [];
        this.replySubjectLogs = [];
        this.asyncSubjectLogs = [];
    }
    SubjectDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initTime = Date.now(); //Returns timestamp
        /******** Observable subscribers ********/
        this.subjectsDemoService.numbersObservable$.subscribe(function (n) {
            _this.observableLogs.push("At " + _this.getTimeDifference() + " seconds: Observer1: " + n);
        }); // Subscriber 1
        setTimeout(function () {
            _this.subjectsDemoService.numbersObservable$.subscribe(function (n) {
                _this.observableLogs.push("At " + _this.getTimeDifference() + " seconds: Observer2: " + n);
            });
        }, 1500); // Subscriber 2
        /******** Subject subscribers ********/
        this.subjectsDemoService.numbersSubject.subscribe(function (n) {
            _this.subjectLogs.push("At " + _this.getTimeDifference() + " seconds: Observer1: " + n);
        }); // Subscriber 1
        setTimeout(function () {
            _this.subjectsDemoService.numbersSubject.subscribe(function (n) {
                _this.subjectLogs.push("At " + _this.getTimeDifference() + " seconds: Observer2: " + n);
            });
        }, 1500); // Subscriber 2
        /******** Observable created from subject subscribers ********/
        this.subjectsDemoService.numbersSubjectObservable$.subscribe(function (n) {
            _this.subjectObservableLogs.push("At " + _this.getTimeDifference() + " seconds: Observer1: " + n);
        }); // Subscriber 1
        setTimeout(function () {
            _this.subjectsDemoService.numbersSubjectObservable$.subscribe(function (n) {
                _this.subjectObservableLogs.push("At " + _this.getTimeDifference() + " seconds: Observer2: " + n);
            });
        }, 1500); // Subscriber 2
        /******** 3. Subject as both observable and observer ********/
        var names = ['John', 'Andy', 'Benziman'];
        var namesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        namesSubject.subscribe(function (n) {
            _this.namesSubjectLogs.push("Observer1: " + n);
        }); // Subscriber 1
        namesSubject.subscribe(function (n) {
            _this.namesSubjectLogs.push("Observer2: " + n);
        }); // Subscriber 2
        var namesObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(names);
        namesObservable.subscribe(namesSubject);
        /***************** Subject Types *******************/
        // Regular Subject
        var regularSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        regularSubject.subscribe({
            next: function (v) { return _this.regularSubjectLogs.push('observer1: ' + v); }
        });
        regularSubject.next(1);
        regularSubject.next(2);
        regularSubject.subscribe({
            next: function (v) { return _this.regularSubjectLogs.push('observer2: ' + v); }
        });
        regularSubject.next(3);
        regularSubject.next(4);
        // Behaviour Subject
        var behaviorSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0); // 0 is the initial value
        behaviorSubject.subscribe({
            next: function (v) { return _this.behaviorSubjectLogs.push('observer1: ' + v); }
        });
        behaviorSubject.next(1);
        behaviorSubject.next(2);
        behaviorSubject.subscribe({
            next: function (v) { return _this.behaviorSubjectLogs.push('observer2: ' + v); }
        });
        behaviorSubject.next(3);
        // Reply Subject
        var replaySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](); // buffer all values for new subscribers
        //let replaySubject = new ReplaySubject(3); // buffer last 3 values for new subscribers
        //let replaySubject = new ReplaySubject(100, 1000); // buffer last 100 values emitted in last 1 Sec
        replaySubject.subscribe({
            next: function (v) { return _this.replySubjectLogs.push('observer1: ' + v); }
        });
        replaySubject.next(1);
        replaySubject.next(2);
        replaySubject.next(3);
        replaySubject.next(4);
        replaySubject.subscribe({
            next: function (v) { return _this.replySubjectLogs.push('observer2: ' + v); }
        });
        replaySubject.next(5);
        // Async Subject
        var asyncSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["AsyncSubject"]();
        asyncSubject.subscribe({
            next: function (v) { return _this.asyncSubjectLogs.push('observer1: ' + v); }
        });
        asyncSubject.next(1);
        asyncSubject.next(2);
        asyncSubject.next(3);
        asyncSubject.next(4);
        asyncSubject.subscribe({
            next: function (v) { return _this.asyncSubjectLogs.push('observer2: ' + v); }
        });
        asyncSubject.next(5);
        asyncSubject.complete();
    };
    SubjectDemoComponent.prototype.getTimeDifference = function () {
        return ((Date.now() - this.initTime) / 1000).toFixed(1);
    };
    SubjectDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subject-demo',
            template: __webpack_require__(/*! ./subject-demo.component.html */ "./src/app/rx-demo/subject-demo/subject-demo.component.html"),
            styles: [__webpack_require__(/*! ./subject-demo.component.css */ "./src/app/rx-demo/subject-demo/subject-demo.component.css")]
        }),
        __metadata("design:paramtypes", [_subjects_demo_service__WEBPACK_IMPORTED_MODULE_1__["SubjectsDemoService"]])
    ], SubjectDemoComponent);
    return SubjectDemoComponent;
}());



/***/ }),

/***/ "./src/app/rx-demo/subjects-demo.service.ts":
/*!**************************************************!*\
  !*** ./src/app/rx-demo/subjects-demo.service.ts ***!
  \**************************************************/
/*! exports provided: SubjectsDemoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectsDemoService", function() { return SubjectsDemoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubjectsDemoService = /** @class */ (function () {
    function SubjectsDemoService() {
        var _this = this;
        this.numbers = [1, 2, 3, 4, 5];
        this.numbersObservable$ = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var id = 0;
            var intervalId = setInterval(function () {
                observer.next(_this.numbers[id]);
                if (id === _this.numbers.length - 1) {
                    observer.complete();
                    clearInterval(intervalId);
                }
                else {
                    ++id;
                }
            }, 1000);
        });
        this.numbersSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.numbersSubjectObservable$ = this.numbersSubject.asObservable();
        this.emitNubers();
    }
    SubjectsDemoService.prototype.emitNubers = function () {
        var _this = this;
        var id = 0;
        var intervalId = setInterval(function () {
            _this.numbersSubject.next(_this.numbers[id]);
            if (id === _this.numbers.length - 1) {
                _this.numbersSubject.complete();
                clearInterval(intervalId);
            }
            else {
                ++id;
            }
        }, 1000);
    };
    SubjectsDemoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SubjectsDemoService);
    return SubjectsDemoService;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Page not found. <a [routerLink]=\"['/index']\">Go to Index Page -></a></p>\r\n"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _validators_forbidden_name_validaor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validators/forbidden-name-validaor.directive */ "./src/app/shared/validators/forbidden-name-validaor.directive.ts");
/* harmony import */ var _validators_unique_user_name_async_validator_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators/unique-user-name-async-validator.directive */ "./src/app/shared/validators/unique-user-name-async-validator.directive.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_validators_forbidden_name_validaor_directive__WEBPACK_IMPORTED_MODULE_3__["ForbiddenNameValidaorDirective"], _validators_unique_user_name_async_validator_directive__WEBPACK_IMPORTED_MODULE_4__["UniqueUserNameAsyncValidatorDirective"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"]],
            exports: [_validators_forbidden_name_validaor_directive__WEBPACK_IMPORTED_MODULE_3__["ForbiddenNameValidaorDirective"], _validators_unique_user_name_async_validator_directive__WEBPACK_IMPORTED_MODULE_4__["UniqueUserNameAsyncValidatorDirective"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/validators/checkbox-required.validator.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/validators/checkbox-required.validator.ts ***!
  \******************************************************************/
/*! exports provided: checkboxRequiredValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkboxRequiredValidator", function() { return checkboxRequiredValidator; });
function checkboxRequiredValidator() {
    return function (checkboxesArray) {
        var atLeastOneChecked = false;
        checkboxesArray.controls.forEach(function (checkbox) {
            if (checkbox.value) {
                atLeastOneChecked = true;
            }
        });
        return atLeastOneChecked ? null : { 'required': true };
    };
}


/***/ }),

/***/ "./src/app/shared/validators/forbidden-name-validaor.directive.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/validators/forbidden-name-validaor.directive.ts ***!
  \************************************************************************/
/*! exports provided: ForbiddenNameValidaorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenNameValidaorDirective", function() { return ForbiddenNameValidaorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forbidden_name_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forbidden-name.validator */ "./src/app/shared/validators/forbidden-name.validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForbiddenNameValidaorDirective = /** @class */ (function () {
    function ForbiddenNameValidaorDirective() {
    }
    ForbiddenNameValidaorDirective_1 = ForbiddenNameValidaorDirective;
    ForbiddenNameValidaorDirective.prototype.validate = function (control) {
        return Object(_forbidden_name_validator__WEBPACK_IMPORTED_MODULE_1__["forbiddenNameValidator"])(this.forbiddenNames)(control);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ForbiddenNameValidaorDirective.prototype, "forbiddenNames", void 0);
    ForbiddenNameValidaorDirective = ForbiddenNameValidaorDirective_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appForbiddenNameValidaor]',
            providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], useExisting: ForbiddenNameValidaorDirective_1, multi: true }]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenNameValidaorDirective);
    return ForbiddenNameValidaorDirective;
    var ForbiddenNameValidaorDirective_1;
}());



/***/ }),

/***/ "./src/app/shared/validators/forbidden-name.validator.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/validators/forbidden-name.validator.ts ***!
  \***************************************************************/
/*! exports provided: forbiddenNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forbiddenNameValidator", function() { return forbiddenNameValidator; });
function forbiddenNameValidator(names) {
    return function (control) {
        return names.indexOf(control.value) > -1 ? { 'forbiddenName': { value: control.value } } : null;
    };
}


/***/ }),

/***/ "./src/app/shared/validators/unique-user-name-async-validator.directive.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shared/validators/unique-user-name-async-validator.directive.ts ***!
  \*********************************************************************************/
/*! exports provided: UniqueUserNameAsyncValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUserNameAsyncValidatorDirective", function() { return UniqueUserNameAsyncValidatorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _unique_user_name_async_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unique-user-name.async-validator */ "./src/app/shared/validators/unique-user-name.async-validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UniqueUserNameAsyncValidatorDirective = /** @class */ (function () {
    function UniqueUserNameAsyncValidatorDirective(userNameValidator) {
        this.userNameValidator = userNameValidator;
    }
    UniqueUserNameAsyncValidatorDirective.prototype.validate = function (control) {
        this.userNameValidator.validate(control);
    };
    UniqueUserNameAsyncValidatorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appUniqueUserNameAsyncValidator]',
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_ASYNC_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return _unique_user_name_async_validator__WEBPACK_IMPORTED_MODULE_2__["UniqueUserNameValidator"]; }),
                    multi: true
                }
            ]
        }),
        __metadata("design:paramtypes", [_unique_user_name_async_validator__WEBPACK_IMPORTED_MODULE_2__["UniqueUserNameValidator"]])
    ], UniqueUserNameAsyncValidatorDirective);
    return UniqueUserNameAsyncValidatorDirective;
}());



/***/ }),

/***/ "./src/app/shared/validators/unique-user-name.async-validator.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/validators/unique-user-name.async-validator.ts ***!
  \***********************************************************************/
/*! exports provided: UniqueUserNameValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueUserNameValidator", function() { return UniqueUserNameValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_util_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/util.service */ "./src/app/core/util.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UniqueUserNameValidator = /** @class */ (function () {
    function UniqueUserNameValidator(utilService) {
        this.utilService = utilService;
    }
    UniqueUserNameValidator.prototype.validate = function (ctrl) {
        return this.utilService.checkUniqueUserName(ctrl.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (isExists) { return (isExists ? { uniqueUserName: ctrl.value } : null); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return null; }));
    };
    UniqueUserNameValidator = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_core_util_service__WEBPACK_IMPORTED_MODULE_1__["UtilService"]])
    ], UniqueUserNameValidator);
    return UniqueUserNameValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\van\Desktop\angular-fundamentals\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map