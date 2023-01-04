webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_growl__ = __webpack_require__("./node_modules/primeng/growl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_growl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_growl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_calendar__ = __webpack_require__("./node_modules/primeng/calendar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_inputmask__ = __webpack_require__("./node_modules/primeng/inputmask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_inputmask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_inputmask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_selectbutton__ = __webpack_require__("./node_modules/primeng/selectbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_selectbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_selectbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_radiobutton__ = __webpack_require__("./node_modules/primeng/radiobutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_radiobutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_radiobutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_accordion__ = __webpack_require__("./node_modules/primeng/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_accordion___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_accordion__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng_recaptcha__ = __webpack_require__("./node_modules/ng-recaptcha/fesm5/ng-recaptcha.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__ = __webpack_require__("./node_modules/primeng/tabview.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_primeng_tabview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_primeng_tabview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__componentes_navbar_navbar_component__ = __webpack_require__("./src/app/componentes/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__componentes_home_home_component__ = __webpack_require__("./src/app/componentes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__componentes_hoja_doblada_hoja_doblada_component__ = __webpack_require__("./src/app/componentes/hoja-doblada/hoja-doblada.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__componentes_seccion_opciones_seccion_opciones_component__ = __webpack_require__("./src/app/componentes/seccion-opciones/seccion-opciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__componentes_promociones_promociones_component__ = __webpack_require__("./src/app/componentes/promociones/promociones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__componentes_noticias_noticias_component__ = __webpack_require__("./src/app/componentes/noticias/noticias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__componentes_acerca_applus_acerca_applus_component__ = __webpack_require__("./src/app/componentes/acerca-applus/acerca-applus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__componentes_footer_footer_component__ = __webpack_require__("./src/app/componentes/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__componentes_main_main_component__ = __webpack_require__("./src/app/componentes/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__componentes_links_quienes_somos_quienes_somos_component__ = __webpack_require__("./src/app/componentes/links/quienes-somos/quienes-somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__componentes_links_porque_nosotros_porque_nosotros_component__ = __webpack_require__("./src/app/componentes/links/porque-nosotros/porque-nosotros.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__componentes_links_applus_en_el_mundo_applus_en_el_mundo_component__ = __webpack_require__("./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__componentes_links_contacto_contacto_component__ = __webpack_require__("./src/app/componentes/links/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__componentes_links_plantas_plantas_component__ = __webpack_require__("./src/app/componentes/links/plantas/plantas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__componentes_links_calendario_calendario_component__ = __webpack_require__("./src/app/componentes/links/calendario/calendario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__componentes_links_tarifas_tarifas_component__ = __webpack_require__("./src/app/componentes/links/tarifas/tarifas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__componentes_links_documentacion_documentacion_component__ = __webpack_require__("./src/app/componentes/links/documentacion/documentacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__componentes_links_recomendaciones_recomendaciones_component__ = __webpack_require__("./src/app/componentes/links/recomendaciones/recomendaciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__componentes_links_normas_normas_component__ = __webpack_require__("./src/app/componentes/links/normas/normas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__componentes_links_concurso_concurso_component__ = __webpack_require__("./src/app/componentes/links/concurso/concurso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__componentes_links_beneficios_beneficios_component__ = __webpack_require__("./src/app/componentes/links/beneficios/beneficios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__componentes_links_reservas_reservas_component__ = __webpack_require__("./src/app/componentes/links/reservas/reservas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__componentes_links_reservas_carga_de_datos_selector_de_planta_selector_de_planta_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__componentes_links_reservas_carga_de_datos_datos_vehiculo_datos_vehiculo_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__componentes_links_reservas_carga_de_datos_datos_cliente_datos_cliente_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__componentes_links_reservas_carga_de_datos_verificar_deudas_verificar_deudas_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__componentes_gestionar_reserva_gestionar_reserva_component__ = __webpack_require__("./src/app/componentes/gestionar-reserva/gestionar-reserva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__componentes_links_encuesta_encuesta_component__ = __webpack_require__("./src/app/componentes/links/encuesta/encuesta.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__servicios_plantas_service__ = __webpack_require__("./src/app/servicios/plantas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__servicios_reserva_service__ = __webpack_require__("./src/app/servicios/reserva.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__servicios_request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__servicios_contacto_service__ = __webpack_require__("./src/app/servicios/contacto.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__servicios_beneficios_service__ = __webpack_require__("./src/app/servicios/beneficios.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__servicios_encuesta_service__ = __webpack_require__("./src/app/servicios/encuesta.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__servicios_captcha_service__ = __webpack_require__("./src/app/servicios/captcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pipes_style_sanitizer_pipe__ = __webpack_require__("./src/app/pipes/style-sanitizer.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__componentes_links_reservas_carga_de_datos_selector_de_turno_selector_de_turno_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__componentes_links_reservas_carga_de_datos_confirmar_turno_confirmar_turno_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__componentes_links_reservas_carga_de_datos_seleccionar_pago_seleccionar_pago_component__ = __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__componentes_aviso_importante_aviso_importante_component__ = __webpack_require__("./src/app/componentes/aviso-importante/aviso-importante.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__componentes_links_beneficios_detalles_beneficios_detalles_beneficios_component__ = __webpack_require__("./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Componentes Nativos Angular / Modulos
















//Rutas

//Componentes





























//Servicios








//Pipes






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_18__componentes_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_19__componentes_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_54__pipes_style_sanitizer_pipe__["a" /* StyleSanitizerPipe */],
                __WEBPACK_IMPORTED_MODULE_20__componentes_hoja_doblada_hoja_doblada_component__["a" /* HojaDobladaComponent */],
                __WEBPACK_IMPORTED_MODULE_21__componentes_seccion_opciones_seccion_opciones_component__["a" /* SeccionOpcionesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__componentes_promociones_promociones_component__["a" /* PromocionesComponent */],
                __WEBPACK_IMPORTED_MODULE_23__componentes_noticias_noticias_component__["a" /* NoticiasComponent */],
                __WEBPACK_IMPORTED_MODULE_24__componentes_acerca_applus_acerca_applus_component__["a" /* AcercaApplusComponent */],
                __WEBPACK_IMPORTED_MODULE_25__componentes_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_26__componentes_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_27__componentes_links_quienes_somos_quienes_somos_component__["a" /* QuienesSomosComponent */],
                __WEBPACK_IMPORTED_MODULE_28__componentes_links_porque_nosotros_porque_nosotros_component__["a" /* PorqueNosotrosComponent */],
                __WEBPACK_IMPORTED_MODULE_29__componentes_links_applus_en_el_mundo_applus_en_el_mundo_component__["a" /* ApplusEnElMundoComponent */],
                __WEBPACK_IMPORTED_MODULE_30__componentes_links_contacto_contacto_component__["a" /* ContactoComponent */],
                __WEBPACK_IMPORTED_MODULE_31__componentes_links_plantas_plantas_component__["a" /* PlantasComponent */],
                __WEBPACK_IMPORTED_MODULE_32__componentes_links_calendario_calendario_component__["a" /* CalendarioComponent */],
                __WEBPACK_IMPORTED_MODULE_33__componentes_links_tarifas_tarifas_component__["a" /* TarifasComponent */],
                __WEBPACK_IMPORTED_MODULE_34__componentes_links_documentacion_documentacion_component__["a" /* DocumentacionComponent */],
                __WEBPACK_IMPORTED_MODULE_35__componentes_links_recomendaciones_recomendaciones_component__["a" /* RecomendacionesComponent */],
                __WEBPACK_IMPORTED_MODULE_36__componentes_links_normas_normas_component__["a" /* NormasComponent */],
                __WEBPACK_IMPORTED_MODULE_37__componentes_links_concurso_concurso_component__["a" /* ConcursoComponent */],
                __WEBPACK_IMPORTED_MODULE_38__componentes_links_beneficios_beneficios_component__["a" /* BeneficiosComponent */],
                __WEBPACK_IMPORTED_MODULE_39__componentes_links_reservas_reservas_component__["a" /* ReservasComponent */],
                __WEBPACK_IMPORTED_MODULE_40__componentes_links_reservas_carga_de_datos_selector_de_planta_selector_de_planta_component__["a" /* SelectorDePlantaComponent */],
                __WEBPACK_IMPORTED_MODULE_41__componentes_links_reservas_carga_de_datos_datos_vehiculo_datos_vehiculo_component__["a" /* DatosVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_42__componentes_links_reservas_carga_de_datos_datos_cliente_datos_cliente_component__["a" /* DatosClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_43__componentes_links_reservas_carga_de_datos_verificar_deudas_verificar_deudas_component__["a" /* VerificarDeudasComponent */],
                __WEBPACK_IMPORTED_MODULE_55__componentes_links_reservas_carga_de_datos_selector_de_turno_selector_de_turno_component__["a" /* SelectorDeTurnoComponent */],
                __WEBPACK_IMPORTED_MODULE_56__componentes_links_reservas_carga_de_datos_confirmar_turno_confirmar_turno_component__["a" /* ConfirmarTurnoComponent */],
                __WEBPACK_IMPORTED_MODULE_57__componentes_links_reservas_carga_de_datos_seleccionar_pago_seleccionar_pago_component__["a" /* SeleccionarPagoComponent */],
                __WEBPACK_IMPORTED_MODULE_44__componentes_gestionar_reserva_gestionar_reserva_component__["a" /* GestionarReservaComponent */],
                __WEBPACK_IMPORTED_MODULE_58__componentes_aviso_importante_aviso_importante_component__["a" /* AvisoImportanteComponent */],
                __WEBPACK_IMPORTED_MODULE_59__componentes_links_beneficios_detalles_beneficios_detalles_beneficios_component__["a" /* DetallesBeneficiosComponent */],
                __WEBPACK_IMPORTED_MODULE_45__componentes_links_encuesta_encuesta_component__["a" /* EncuestaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5_primeng_growl__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_16__app_routes__["a" /* APP_ROUTING */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_calendar__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_inputmask__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_selectbutton__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_15_primeng_tabview__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_primeng_radiobutton__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_accordion__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng_recaptcha__["a" /* RecaptchaModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAIK2W-gsSCJrs7WlHd3nUsSWO9exL31qc'
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3_primeng_components_common_messageservice__["MessageService"],
                __WEBPACK_IMPORTED_MODULE_46__servicios_plantas_service__["a" /* PlantasService */],
                __WEBPACK_IMPORTED_MODULE_47__servicios_reserva_service__["a" /* ReservaService */],
                __WEBPACK_IMPORTED_MODULE_48__servicios_request_service__["a" /* RequestService */],
                __WEBPACK_IMPORTED_MODULE_49__servicios_validaciones_service__["a" /* ValidacionesService */],
                __WEBPACK_IMPORTED_MODULE_50__servicios_contacto_service__["a" /* ContactoService */],
                __WEBPACK_IMPORTED_MODULE_51__servicios_beneficios_service__["a" /* BeneficiosService */],
                __WEBPACK_IMPORTED_MODULE_52__servicios_encuesta_service__["b" /* EncuestaService */],
                __WEBPACK_IMPORTED_MODULE_53__servicios_captcha_service__["a" /* CaptchaService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_17__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_ROUTING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__componentes_home_home_component__ = __webpack_require__("./src/app/componentes/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__componentes_links_quienes_somos_quienes_somos_component__ = __webpack_require__("./src/app/componentes/links/quienes-somos/quienes-somos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__componentes_links_applus_en_el_mundo_applus_en_el_mundo_component__ = __webpack_require__("./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__componentes_links_contacto_contacto_component__ = __webpack_require__("./src/app/componentes/links/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__componentes_links_plantas_plantas_component__ = __webpack_require__("./src/app/componentes/links/plantas/plantas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__componentes_links_calendario_calendario_component__ = __webpack_require__("./src/app/componentes/links/calendario/calendario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__componentes_links_tarifas_tarifas_component__ = __webpack_require__("./src/app/componentes/links/tarifas/tarifas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__componentes_links_documentacion_documentacion_component__ = __webpack_require__("./src/app/componentes/links/documentacion/documentacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__componentes_links_recomendaciones_recomendaciones_component__ = __webpack_require__("./src/app/componentes/links/recomendaciones/recomendaciones.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__componentes_links_normas_normas_component__ = __webpack_require__("./src/app/componentes/links/normas/normas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__componentes_links_concurso_concurso_component__ = __webpack_require__("./src/app/componentes/links/concurso/concurso.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__componentes_links_beneficios_beneficios_component__ = __webpack_require__("./src/app/componentes/links/beneficios/beneficios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__componentes_links_beneficios_detalles_beneficios_detalles_beneficios_component__ = __webpack_require__("./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__componentes_links_reservas_reservas_component__ = __webpack_require__("./src/app/componentes/links/reservas/reservas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__componentes_gestionar_reserva_gestionar_reserva_component__ = __webpack_require__("./src/app/componentes/gestionar-reserva/gestionar-reserva.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__componentes_links_encuesta_encuesta_component__ = __webpack_require__("./src/app/componentes/links/encuesta/encuesta.component.ts");

















var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__componentes_home_home_component__["a" /* HomeComponent */] },
    { path: 'applus', component: __WEBPACK_IMPORTED_MODULE_2__componentes_links_quienes_somos_quienes_somos_component__["a" /* QuienesSomosComponent */] },
    { path: 'applus_en_el_mundo', component: __WEBPACK_IMPORTED_MODULE_3__componentes_links_applus_en_el_mundo_applus_en_el_mundo_component__["a" /* ApplusEnElMundoComponent */] },
    { path: 'contacto', component: __WEBPACK_IMPORTED_MODULE_4__componentes_links_contacto_contacto_component__["a" /* ContactoComponent */] },
    { path: 'plantas', component: __WEBPACK_IMPORTED_MODULE_5__componentes_links_plantas_plantas_component__["a" /* PlantasComponent */] },
    { path: 'plantas/:id', component: __WEBPACK_IMPORTED_MODULE_5__componentes_links_plantas_plantas_component__["a" /* PlantasComponent */] },
    { path: 'calendario', component: __WEBPACK_IMPORTED_MODULE_6__componentes_links_calendario_calendario_component__["a" /* CalendarioComponent */] },
    { path: 'tarifas', component: __WEBPACK_IMPORTED_MODULE_7__componentes_links_tarifas_tarifas_component__["a" /* TarifasComponent */] },
    { path: 'documentacion', component: __WEBPACK_IMPORTED_MODULE_8__componentes_links_documentacion_documentacion_component__["a" /* DocumentacionComponent */] },
    { path: 'recomendaciones', component: __WEBPACK_IMPORTED_MODULE_9__componentes_links_recomendaciones_recomendaciones_component__["a" /* RecomendacionesComponent */] },
    { path: 'concurso', component: __WEBPACK_IMPORTED_MODULE_11__componentes_links_concurso_concurso_component__["a" /* ConcursoComponent */] },
    { path: 'beneficios', component: __WEBPACK_IMPORTED_MODULE_12__componentes_links_beneficios_beneficios_component__["a" /* BeneficiosComponent */] },
    { path: 'beneficios/:id', component: __WEBPACK_IMPORTED_MODULE_13__componentes_links_beneficios_detalles_beneficios_detalles_beneficios_component__["a" /* DetallesBeneficiosComponent */] },
    { path: 'normas', component: __WEBPACK_IMPORTED_MODULE_10__componentes_links_normas_normas_component__["a" /* NormasComponent */] },
    { path: 'reservas', component: __WEBPACK_IMPORTED_MODULE_14__componentes_links_reservas_reservas_component__["a" /* ReservasComponent */] },
    { path: 'encuesta', component: __WEBPACK_IMPORTED_MODULE_16__componentes_links_encuesta_encuesta_component__["a" /* EncuestaComponent */] },
    { path: 'gestionar_reserva', component: __WEBPACK_IMPORTED_MODULE_15__componentes_gestionar_reserva_gestionar_reserva_component__["a" /* GestionarReservaComponent */] },
];
false;
var APP_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/componentes/acerca-applus/acerca-applus.component.css":
/***/ (function(module, exports) {

module.exports = ".diapositivas {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.diapositivas_container {\r\n    background: rgba(1, 1, 1, 0.8) !important;\r\n}\r\n\r\n/*\r\n.diapositivas_container.ui-sidebar,\r\n.diapositivas_container.ui-sidebar-full,\r\n.diapositivas_container.ui-sidebar-mask,\r\n.diapositivas_container.ui-sidebar-active {}\r\n*/\r\n\r\np-sidebar>.ui-widget-content {\r\n    background: rgba(1, 1, 1, 0.8) !important;\r\n}"

/***/ }),

/***/ "./src/app/componentes/acerca-applus/acerca-applus.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-lightgrey pt-5\">\n\t<div class=\"container p-0\">\n\t\t<div class=\"bg-orange pl-2\">\n\t\t\t<div class=\"bg-lightgrey pl-2\">\n\t\t\t\t<div class=\"fc-orange fs-15\">Conoce más acerca de</div>\n\t\t\t\t<div class=\"fs-4\">Applus+ Automotive</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div>\n\t\t\t<p class=\"mt-3\">Applus+ es líder mundial en servicios de inspección reglamentaria de vehículos y soluciones para ensayos de emisiones y gases en todo el mundo. Realiza más de 20 millones de inspecciones cada año en Europa, Norteamérica, Centroamérica y Sudamérica, que hacen de ella una organización realmente global y reconocida en el campo de inspección de vehículos.</p>\n\t\t\t<p>Ofrecemos las mejores soluciones de inspección, ensayo y tecnología a los clientes; entre los que se encuentran gobiernos, fabricantes y comerciantes. Proporciona productos avanzados y fiables, al mercado de la automoción, lo que a su vez les permite aportar un valor completo al usuario final. Applus+ Automotive puede ofrecer y proporcionar un tiempo de respuesta rápido y soluciones precisas para los requisitos de sus clientes, independientemente del tamaño del proyecto.</p>\n\t\t\t<div class=\"m-0 p-0 row\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t<p class=\"fc-orange\">VER VIDEO INSTITUCIONAL</p>\n\t\t\t\t\t<video controls=\"true\" style=\"width: 100%; height: 20rem\" poster=\"assets/video/placeholder.png\">\n\t\t\t\t\t\t<source src=\"http://187.188.141.119:80/WEB_MEXICO/00_APPLUS_AUTOMOTIVE_CAST.mp4\" type=\"video/mp4\" />\n\t\t\t\t\t</video>\n\t\t\t\t\t<!-- <iframe style=\"width:100%;height:20rem;\" src=\"https://www.youtube.com/embed/GrQh1AWTnp8?rel=0&amp;controls=0&amp;showinfo=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe> -->\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n\t\t\t\t\t<p class=\"fc-orange\">Descargar PRESENTACIÓN CORPORATIVA</p>\n\t\t\t\t\t<div class=\"diapositivas animated fadeIn\" *ngIf=\"this.mostrar_diapositiva\" style=\"position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 10000; background-color: rgba(1, 1, 1, 0.8)\" (click)=\"this.mostrar_diapositiva = false\">\n\t\t\t\t\t\t<button class=\"btn btn-outline-light\" style=\"position: fixed; top: 5px; right: 5px\">X</button>\n\t\t\t\t\t\t<iframe style=\"width: 55rem; height: 40rem\" src=\"https://docs.google.com/presentation/d/e/2PACX-1vRrbPjzRyrg7ktEBh5I540a__z9Dv1yNjjfqSDrRJkAU8RwA1xQpgP-yQj2FkLDRGEx-vnRmyq1JeY9/embed?start=false&loop=true&delayms=5000\" frameborder=\"0\" allowfullscreen=\"true\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div style=\"cursor: pointer; width: 100%; height: 20rem; background-image: url(assets/img/img-diapositivas.png); background-size: cover; background-repeat: no-repeat\" (click)=\"this.mostrar_diapositiva = true\"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/acerca-applus/acerca-applus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AcercaApplusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AcercaApplusComponent = /** @class */ (function () {
    function AcercaApplusComponent() {
        this.mostrar_diapositiva = false;
    }
    AcercaApplusComponent.prototype.ngOnInit = function () {
    };
    AcercaApplusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-acerca-applus',
            template: __webpack_require__("./src/app/componentes/acerca-applus/acerca-applus.component.html"),
            styles: [__webpack_require__("./src/app/componentes/acerca-applus/acerca-applus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AcercaApplusComponent);
    return AcercaApplusComponent;
}());



/***/ }),

/***/ "./src/app/componentes/aviso-importante/aviso-importante.component.css":
/***/ (function(module, exports) {

module.exports = ".triangulo_der_grande {\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 25px solid transparent;\r\n    border-left: 50px solid #fc6500;\r\n    border-bottom: 25px solid transparent;\r\n    width: 0;\r\n    height: 0;\r\n    border-top: 0px solid transparent;\r\n    border-left: 32px solid #fc6500;\r\n    border-bottom: 37px solid transparent;\r\n    margin-top: -8px;\r\n    margin-left: 6px;\r\n}\r\n\r\n.aviso_importante {\r\n    display: table;\r\n    width: 100%;\r\n    background-color: #fc6500;\r\n    border-radius: 10px;\r\n    max-width: 350px;\r\n    min-width: -webkit-fit-content;\r\n    min-width: -moz-fit-content;\r\n    min-width: fit-content;\r\n    min-height: 60px;\r\n    padding: 6px;\r\n}\r\n\r\n.aviso_importante>div {\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n}"

/***/ }),

/***/ "./src/app/componentes/aviso-importante/aviso-importante.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"aviso_importante\">\n        <h4 *ngIf=\"this.titulo != null\" [style]=\"this.estiloTitulo() | styleSanitizer\">{{ this.titulo }}</h4>\n        <div [style]=\"this.estiloDetalles() | styleSanitizer\">{{ this.detalles }}</div>\n    </div>\n    <div class=\"triangulo_der_grande\"></div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/aviso-importante/aviso-importante.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AvisoImportanteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AvisoImportanteComponent = /** @class */ (function () {
    function AvisoImportanteComponent() {
    }
    AvisoImportanteComponent.prototype.ngOnInit = function () {
    };
    AvisoImportanteComponent.prototype.estiloTitulo = function () {
        return this.styleTitulo;
    };
    AvisoImportanteComponent.prototype.estiloDetalles = function () {
        return this.styleDetalles;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvisoImportanteComponent.prototype, "titulo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvisoImportanteComponent.prototype, "detalles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvisoImportanteComponent.prototype, "styleTitulo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AvisoImportanteComponent.prototype, "styleDetalles", void 0);
    AvisoImportanteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aviso-importante',
            template: __webpack_require__("./src/app/componentes/aviso-importante/aviso-importante.component.html"),
            styles: [__webpack_require__("./src/app/componentes/aviso-importante/aviso-importante.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AvisoImportanteComponent);
    return AvisoImportanteComponent;
}());



/***/ }),

/***/ "./src/app/componentes/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer-link {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 575px) {\r\n    .hide {\r\n        display: none;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\n<section class=\"bg-grey\">\n\t<div class=\"container py-4\">\n\t\t<div class=\"row\">\n\t\t\t<div routerLink=\"/contacto\" class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0 card-hover\" style=\"height: 180px\">\n\t\t\t\t<div class=\"col-12 imagen_con_pie fc-white card rounded-0 border-0 h-100\">\n\t\t\t\t\t<div class=\"fs-15\">Entra en<br />contacto con nosotros</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div routerLink=\"/tarifas\" class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 p-0 card-hover\" style=\"height: 180px\">\n\t\t\t\t<div class=\"col-12 bg-orange p-0 card rounded-0 border-0 h-100\">\n\t\t\t\t\t<div class=\"bg-logo-derecha align-middle\">\n\t\t\t\t\t\t<div class=\"col-11 offset-1 p-2\">\n\t\t\t\t\t\t\t<div class=\"row fc-white fs-2\">Costos</div>\n\t\t\t\t\t\t\t<div class=\"row fc-white fs-4\" style=\"line-height: 3rem\">2023</div>\n\t\t\t\t\t\t\t<div class=\"row fc-white fs-15\">Consulta los costos</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4 bg-lightgrey\" style=\"height: 180px\">\n\t\t\t\t<div class=\"col-11 offset-1 p-2 mt-3\">\n\t\t\t\t\t<h4 class=\"fc-orange fs-2\">Suscríbete a<br />nuestro Newsletter</h4>\n\t\t\t\t\t<div class=\"input-group col-xs-12 col-sm-12 col-md-10 col-lg-10 p-0 mb-2 mt-2\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Escribe aquí tu email...\" aria-label=\"Escriba su email\" [(ngModel)]=\"this.mail_cliente\" />\n\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t<button class=\"input-group-text fc-white bg-grey btn btn-orange-hover\" (click)=\"this.suscribir()\">></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row p-0\">\n\t\t\t\t\t\t<div class=\"col-1 mr-2\"><input type=\"checkbox\" aria-label=\"Acepto la política de privacidad\" [(ngModel)]=\"this.terminosYCondiciones\" /></div>\n\t\t\t\t\t\t<div class=\"col-10 pl-0\">\n\t\t\t\t\t\t\t<p class=\"mb-0\">\n\t\t\t\t\t\t\t\tHe leído y acepto lo expuesto en la <a href=\"#\"><b style=\"color: black\">Política de Privacidad</b></a>\n\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<section class=\"bg-lightgre hide\">\n\t<div class=\"container p-0 py-4\">\n\t\t<h4 class=\"mb-4\">Accesos directos</h4>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h5 class=\"fc-orange mb-3\">Applus+ México</h5>\n\t\t\t\t<p><a routerLink=\"/applus\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">¿Quiénes somos?</a></p>\n\t\t\t\t<p><a href=\"http://www.applusautomotive.com/es/\" target=\"_blank\" class=\"font_applus fc-darkgrey\">Applus en el mundo</a></p>\n\t\t\t\t<p><a routerLink=\"/contacto\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Contacto</a></p>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h5 class=\"fc-orange mb-3\">¿Dónde hacer la Verificación?</h5>\n\t\t\t\t<p><a routerLink=\"/plantas/colon\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">CVR 0010 Colón</a></p>\n\t\t\t\t<p><a routerLink=\"/plantas/vallarta\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">CVR 0007 Vallarta</a></p>\n\t\t\t\t<p><a routerLink=\"/plantas/guzman\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">CVR 0012 Guzmán</a></p>\n\t\t\t\t<p>\n\t\t\t\t\t<a routerLink=\"/plantas/el_salto\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\"\n\t\t\t\t\t\t>CVR 0281 El Salto <br />\n\t\t\t\t\t\t(próximamente)</a\n\t\t\t\t\t>\n\t\t\t\t</p>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h5 class=\"fc-orange mb-3\">¿Qué es la Verificación Responsable?</h5>\n\t\t\t\t<p><a routerLink=\"/calendario\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Calendario</a></p>\n\t\t\t\t<p><a routerLink=\"/normas\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Normas de Control</a></p>\n\t\t\t\t<!-- <p><a routerLink=\"/conozca_mas\" class=\"font_applus fc-darkgrey\">Conozca más</a></p> -->\n\t\t\t\t<p><a routerLink=\"/tarifas\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Costos</a></p>\n\t\t\t</div>\n\t\t\t<div class=\"col-3\">\n\t\t\t\t<h5 class=\"fc-orange mb-3\">Requisitos VR</h5>\n\t\t\t\t<p><a routerLink=\"/documentacion\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Documentación</a></p>\n\t\t\t\t<p><a routerLink=\"/recomendaciones\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Recomendaciones</a></p>\n\t\t\t\t<p><a routerLink=\"/beneficios\" class=\"font_applus fc-darkgrey\" (click)=\"this.scrollTop()\">Beneficios</a></p>\n\t\t\t\t<!-- <h5 class=\"fc-orange mb-3\">ENCUESTA DE<br>SATISFACCIÓN</h5> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<footer class=\"bg-darkgrey py-4\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t<img src=\"assets/img/LogoPieBlanco.png\" alt=\"Applus Autolatam\" style=\"width: 100%\" />\n\t\t\t</div>\n\t\t\t<div class=\"row col-xs-12 col-sm-7 col-md-7 col-lg-7 hide\">\n\t\t\t\t<!-- <div class=\"col-3 text-center footer-link\"><a href=\"/mapa_del_sitio\" class=\"font_applus fc-white \">Mapa del sitio</a></div>\n                <div class=\"col-3 text-center footer-link\"><a href=\"/aviso_legal\" class=\"font_applus fc-white \">Aviso Legal</a></div>\n                <div class=\"col-3 text-center footer-link\"><a href=\"/ayuda\" class=\"font_applus fc-white \">Ayuda</a></div>\n                <div class=\"col-3 text-center footer-link\"><a href=\"/contacto\" class=\"font_applus fc-white \">Contacto</a></div> -->\n\t\t\t</div>\n\t\t\t<div class=\"col-4 offset-4 col-sm-2 offset-sm-0 col-md-2 offset-dm-0 col-lg-2 offset-lg-0 fc-white\">\n\t\t\t\t<p class=\"mb-0 text-rigth\">Seguinos en</p>\n\t\t\t\t<div class=\"row m-1\">\n\t\t\t\t\t<div class=\"col-3 p-1\">\n\t\t\t\t\t\t<a href=\"https://www.facebook.com/profile.php?id=100083178646131\" target=\"_blank\"><img src=\"assets/img/redes_sociales/facebook.png\" alt=\"facebook\" style=\"width: 100%\" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3 offset-1 p-1\">\n\t\t\t\t\t\t<a href=\"https://www.linkedin.com/posts/applus-automotive_inspection-process-in-denmark-activity-6986580480129163264-0got?utm_source=share&utm_medium=member_android\" target=\"_blank\"><img src=\"assets/img/redes_sociales/linkedin.png\" alt=\"linkedin\" style=\"width: 100%\" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-3 offset-1 p-1\">\n\t\t\t\t\t\t<a href=\"https://www.instagram.com/applusverificacion/\" target=\"_blank\"><img src=\"assets/img/redes_sociales/instagram.png\" alt=\"instagram\" style=\"width: 100%\" /></a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row fc-white\">\n\t\t\t<div class=\"col-xs-12 col-sm-2 col-md-2 col-lg-2\">\n\t\t\t\t<p>© Applus+ México 2022</p>\n\t\t\t</div>\n\t\t\t<div class=\"row col-xs-12 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t<div class=\"col-12 text-left\">\n\t\t\t\t\t<a href=\"/\" class=\"font_applus fc-white\"><strong>www.automotive.mx</strong></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n"

/***/ }),

/***/ "./src/app/componentes/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { GrowlModule } from 'primeng/growl';



var FooterComponent = /** @class */ (function () {
    function FooterComponent(messageService, validaciones, http) {
        this.messageService = messageService;
        this.validaciones = validaciones;
        this.http = http;
        this.mail_cliente = "";
        this.terminosYCondiciones = false;
        this.msgs = "";
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.prototype.onResize = function (event) {
        this.width = event.target.innerWidth;
    };
    FooterComponent.prototype.suscribir = function () {
        var _this = this;
        this.messageService.clear();
        if (!this.terminosYCondiciones) {
            this.messageService.add({ severity: 'error', summary: 'Suscripción', detail: 'Debe aceptar los términos y condiciones' });
            return;
        }
        if (!this.validaciones.validarMail(this.mail_cliente)) {
            this.messageService.add({ severity: 'error', summary: 'Suscripción', detail: 'Debe ingresar un mail válido' });
            return;
        }
        var body = {
            mail: this.mail_cliente
        };
        this.http.post("contacto.suscripcion_newsletter.php", body).subscribe(function (exito) { }, function (error) { _this.messageService.add({ severity: 'error', summary: 'Error al suscribirse', detail: 'Vuelve a intentarlo luego, por favor.' }); });
        this.messageService.add({ severity: 'success', summary: 'Suscripción exitosa!', detail: 'Muchas gracias, en breve recibirá un correo de confirmación.' });
        this.mail_cliente = "";
        this.terminosYCondiciones = false;
    };
    FooterComponent.prototype.scrollTop = function () {
        // console.log("Scroll")
        if (document.body.scrollTop == 0) {
            window.scrollBy({ top: -document.documentElement.scrollTop, left: 0, behavior: 'smooth' });
        }
        else {
            window.scrollBy({ top: -document.body.scrollTop, left: 0, behavior: 'smooth' });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FooterComponent.prototype, "onResize", null);
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/componentes/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/componentes/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__["a" /* ValidacionesService */], __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__["a" /* RequestService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/componentes/gestionar-reserva/gestionar-reserva.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/gestionar-reserva/gestionar-reserva.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('assets/img/Foto-Home-1.jpg'); background-position: top; background-size: cover; height: 50vh; min-height: fit-content\" class=\"py-5\">\n\t<div class=\"preloader\" *ngIf=\"preloader\">\n\t\t<img src=\"assets/img/preloader.gif\" />\n\t</div>\n\t<p-growl [(value)]=\"this.mensajes\" life=\"10000\"></p-growl>\n\n\t<div class=\"container\">\n\t\t<form class=\"bg-transp fc-white p-4\">\n\t\t\t<!-- INGRESO DE CODIGO -->\n\t\t\t<h3 class=\"fc-orange text-center\">Gestionar mis RESERVAS</h3>\n\t\t\t<div class=\"fs-15\" *ngIf=\"this.slide == 1\">\n\t\t\t\t<div class=\"row px-5 pt-3\">\n\t\t\t\t\t<div row=\"col-8 \">\n\t\t\t\t\t\t<p class=\"fs-125\">Para gestionar sus reservas solicitamos tener a mano los datos enviados en el correo electrónico de confirmación que recibió al efectuar la misma</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"nombre\" class=\"col-sm-3 col-form-label font-weight-bold\">Tipo de identificación</label>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<select class=\"form-control p-1 rounded-0\" name=\"tipo_documento\" [(ngModel)]=\"this.cliente.tipo_documento.codigo\" (change)=\"this.seleccionarTipoDocumento()\">\n\t\t\t\t\t\t\t<option *ngFor=\"let tipo of this.tipos_documento\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n\t\t\t\t\t\t</select>\n\t\t\t\t\t</div>\n\t\t\t\t\t<label for=\"cedula\" class=\"col-sm-2 col-form-label font-weight-bold\">Nro. de Cédula</label>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" autocomplete=\"on\" name=\"cedula\" placeholder=\"\" [(ngModel)]=\"this.cliente.numero_documento\" (change)=\"this.cliente.numero_documento = this.cliente.numero_documento.toString().split(' ').join('').toUpperCase()\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"nombre\" class=\"col-sm-3 col-form-label font-weight-bold\">Matricula</label>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<input type=\"text\" autocomplete=\"given-name\" class=\"form-control-plaintext p-1 bg-white\" name=\"nombre\" placeholder=\"\" [(ngModel)]=\"this.matricula\" (change)=\"this.matricula = this.matricula.trim().toUpperCase().replace('/#|$|%|\\'/gi', '')\" maxlength=\"20\" />\n\t\t\t\t\t</div>\n\t\t\t\t\t<label for=\"apellido\" class=\"col-sm-2 col-form-label font-weight-bold\">Cod. de Reserva</label>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext p-1 bg-white d-inline\" [ngModelOptions]=\"{ standalone: true }\" [(ngModel)]=\"this.codigo\" />\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form-group row d-flex flex-row-reverse\" style=\"margin-right: 8rem\">\n\t\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t\t<re-captcha class=\"\" (resolved)=\"this.captchaResolved($event)\" [siteKey]=\"this.googleKey\"></re-captcha>\n\t\t\t\t\t\t<div class=\"\"><button class=\"btn btn-principal btn-orange-hover\" style=\"width: fit-content\" (click)=\"this.consultarTurno()\">Consultar</button></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<!-- MUESTRA DE VALORES -->\n\t\t\t<div *ngIf=\"this.slide == 2\">\n\t\t\t\t<div class=\"row px-5 pt-3\">\n\t\t\t\t\t<p class=\"text-center w-100\">¡Su reserva fue localizada con éxito!</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row px-5 pb-5\" style=\"margin: auto\">\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Cod. de Reserva: <strong class=\"fs-175 fc-orange\"> {{ this.codigo }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Empresa: <strong class=\"fs-175\"> {{ this.reserva_previa.nombre }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t\t<div class=\"mt-3 col-12\"></div>\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Fecha: <strong class=\"fs-175\"> {{ this.reserva_previa.fecha | date: \"dd/MM/yyyy\" }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t\t<!-- <label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\">Tipo de vehículo: <strong class=\"fs-175\"> {{ this.reserva_previa.tipo_vehiculo  }} </strong></label> -->\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Horario: <strong class=\"fs-175\"> {{ this.reserva_previa.hora }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Matrícula: <strong class=\"fs-175\"> {{ this.reserva_previa.patente }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t\t<label class=\"col-12 col-md-6 col-sm-6 col-lg-6 fs-175\"\n\t\t\t\t\t\t>Estación ITV: <strong class=\"fs-175\"> {{ this.reserva_previa.planta }} </strong></label\n\t\t\t\t\t>\n\t\t\t\t</div>\n\t\t\t\t<!-- MUESTRO SOLO EL BOTON DE CANCELACION SI NO TIENE EL PAGO REALIZADO -->\n\t\t\t\t<div style=\"width: 100%\"><button *ngIf=\"this.reserva_previa.codestado == 0\" class=\"btn-principal btn-orange-hover p-3 m-auto\" (click)=\"this.cancelarReserva()\">Cancelar cita</button></div>\n\t\t\t</div>\n\n\t\t\t<!-- CONFIRMA CANCELACION -->\n\t\t\t<div *ngIf=\"this.slide == 3\">\n\t\t\t\t<div class=\"row px-5 pt-3\">\n\t\t\t\t\t<p class=\"text-center w-100\">\n\t\t\t\t\t\t¡Su reserva <span style=\"font-weight: bold\">{{ this.codigo }}</span> fué eliminada con éxito!\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row px-5 pt-3\">\n\t\t\t\t\t<p class=\"text-center w-100\">¿Desea realizar una nueva reserva?</p>\n\t\t\t\t</div>\n\t\t\t\t<div style=\"width: 100%\">\n\t\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\" class=\"font_applus fc-darkgrey\"><button class=\"btn-principal btn-orange-hover p-3 m-auto\" routerLink=\"#\">HAZ TU CITA</button></a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/gestionar-reserva/gestionar-reserva.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarReservaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_reserva_service__ = __webpack_require__("./src/app/servicios/reserva.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_captcha_service__ = __webpack_require__("./src/app/servicios/captcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestionarReservaComponent = /** @class */ (function () {
    function GestionarReservaComponent(reservas, captchaService, validaciones) {
        this.reservas = reservas;
        this.captchaService = captchaService;
        this.validaciones = validaciones;
        // public cliente:Cliente;
        this.preloader = false;
        this.codigo = "";
        this.reserva_previa = null;
        this.captcha = null;
        this.mensaje_error = new Array();
        this.cliente = {
            nombre: null,
            numero_documento: null,
            apellido: null,
            domicilio: null,
            ciudad: null,
            telefono: null,
            email: null,
            tipo_documento: { codigo: null, descripcion: null }
        };
        this.tipos_documento = [
            { codigo: "C", descripcion: "CÉDULA" },
            { codigo: "R", descripcion: "RUC" },
            { codigo: "E", descripcion: "EXT" }
        ];
        this.googleKey = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].googleSiteKey;
    }
    GestionarReservaComponent.prototype.ngOnInit = function () {
        this.mensajes = new Array();
        this.slide = 1;
    };
    GestionarReservaComponent.prototype.captchaResolved = function (captchaResolved) {
        this.captcha = captchaResolved;
    };
    /** Consulta de turno
     *
     */
    GestionarReservaComponent.prototype.consultarTurno = function () {
        var _this = this;
        if (this.cliente.tipo_documento.codigo == null) {
            this.mensajes.push({ severity: 'error', summary: 'Tipo de documento', detail: 'Debe seleccionar un tipo de documento' });
        }
        if (this.cliente.tipo_documento.codigo == 'C') {
            //Valido la cédula
            if (this.cliente.numero_documento == null) {
                this.mensajes.push({ severity: 'error', summary: 'Error en Cédula', detail: 'Debe ingresar su número de cédula' });
                return;
            }
            else if (!this.validaciones.validarCedulaEcuatoriana(this.cliente.numero_documento.toString())) {
                this.mensajes.push({ severity: 'error', summary: 'Error en Cédula', detail: 'La cédula ingresada debe ser válida' });
                return;
            }
        }
        else if (this.cliente.tipo_documento.codigo == 'R') {
            //Valido el ruc
            if (this.cliente.numero_documento == null) {
                this.mensajes.push({ severity: 'error', summary: 'Error en RUC', detail: 'Debe ingresar un número de RUC' });
                return;
            }
            else if (!this.validaciones.validarRUCEcuatoriana(this.cliente.numero_documento.toString())) {
                console.log('ruc no es valido');
                this.mensajes.push({ severity: 'error', summary: 'Error en RUC', detail: 'El RUC ingresado debe ser válido' });
                return;
            }
        }
        else if (this.cliente.tipo_documento.codigo == 'E') {
            //Verifico que se haya ingresado un documento extranjero
            if (this.cliente.numero_documento == null || this.cliente.numero_documento == '') {
                this.mensajes.push({ severity: 'error', summary: 'Error identificacion', detail: 'Debe ingresar un número de identificación' });
                return;
            }
            else if (this.cliente.numero_documento.length > 20) {
                this.mensajes.push({ severity: 'error', summary: 'Error identificacion', detail: 'El número de identificación no puede superar los 20 dígitos' });
                return;
            }
        }
        if (this.matricula == null) {
            this.mensajes.push({ severity: 'error', summary: 'Matrícula', detail: 'Debe ingresar la matrícula correspondiente' });
            return;
        }
        else if (!this.validaciones.validaPatente(this.matricula)) {
            this.mensajes.push({ severity: 'error', summary: 'Error en matrícula', detail: 'La matrícula ingresada no es válida' });
            return;
        }
        if (this.codigo == "") {
            this.mensajes.push({ severity: "error", summary: "Código", detail: "Debe ingresar el código de la reserva" });
            return;
        }
        if (this.captcha) {
            this.captchaService.setCaptchaToken(this.captcha);
            this.preloader = true;
            this.reservas.consultarTurno(this.codigo, this.matricula, this.cliente.numero_documento).subscribe(function (dato) {
                _this.reserva_previa = dato;
                console.log(_this.reserva_previa);
                _this.slide = 2;
                _this.preloader = false;
            }, function (error) {
                _this.mensajes.push({ severity: "error", summary: "Código", detail: error.error });
                _this.preloader = false;
                console.log(error);
            });
        }
        else {
            this.mensajes = new Array();
            this.mensajes.push({ severity: 'info', summary: 'Matrícula buscada', detail: 'Debe resolver el captcha' });
        }
    };
    GestionarReservaComponent.prototype.seleccionarTipoDocumento = function () {
        var _this = this;
        this.tipos_documento.forEach(function (tipo) {
            if (tipo.codigo == _this.cliente.tipo_documento.codigo) {
                _this.cliente.tipo_documento.descripcion = tipo.descripcion;
            }
        }, this);
    };
    /** Eliminación de turno
     *
     */
    GestionarReservaComponent.prototype.cancelarReserva = function () {
        var _this = this;
        if (this.reserva_previa == null) {
            this.mensajes.push({ severity: "error", summary: "Reserva", detail: "No existe reserva para enviar" });
            return;
        }
        this.preloader = true;
        this.reservas.cancelarTurno(this.reserva_previa.numero, this.reserva_previa.fecha, this.reserva_previa.hora, this.reserva_previa.centro).subscribe(function (dato) {
            _this.mensajes.push({ severity: "success", summary: "Reserva", detail: "La reserva fué eliminada con éxito" });
            console.log(_this.reserva_previa);
            _this.slide = 3;
            _this.preloader = false;
        }, function (error) {
            _this.mensajes.push({ severity: "error", summary: "Reserva", detail: "Error al eliminar reserva" });
            _this.preloader = false;
        });
    };
    GestionarReservaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gestionar-reserva',
            template: __webpack_require__("./src/app/componentes/gestionar-reserva/gestionar-reserva.component.html"),
            styles: [__webpack_require__("./src/app/componentes/gestionar-reserva/gestionar-reserva.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_reserva_service__["a" /* ReservaService */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_captcha_service__["a" /* CaptchaService */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_validaciones_service__["a" /* ValidacionesService */]])
    ], GestionarReservaComponent);
    return GestionarReservaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/hoja-doblada/hoja-doblada.component.css":
/***/ (function(module, exports) {

module.exports = ".esquina_doblada {\r\n    display: block;\r\n    width: 150px;\r\n    height: 80px;\r\n    margin: 0px;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.esquina_doblada:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0px;\r\n    left: 0px;\r\n    display: block;\r\n    width: 0px;\r\n    border-color: rgba(0, 0, 0, 0) #ff9c00 #ff9c00 rgba(0, 0, 0, 0);\r\n    border-style: solid;\r\n    border-width: 25px 25px 0px 0px;\r\n}\r\n\r\n.col-top {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    width: 125px;\r\n    height: 25px;\r\n}\r\n\r\n.col-izquierda {\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 0;\r\n    width: 125px;\r\n    height: 55px;\r\n}\r\n\r\n.col-derecha {\r\n    position: absolute;\r\n    bottom: 0;\r\n    left: 0;\r\n    width: 25px;\r\n    height: 55px;\r\n}"

/***/ }),

/***/ "./src/app/componentes/hoja-doblada/hoja-doblada.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"esquina_doblada opacity-075\">\n    <div class=\"row p-0 m-0\">\n\n        <div class=\"col-top bg-white p-0 m-0\"> </div>\n\n    </div>\n    <div class=\"row p-0 m-0 \">\n\n        <div class=\"col-izquierda bg-white p-0 m-0 text-left\"><img style=\"width:80%\" src=\"assets/img/together.png\"></div>\n        <div class=\"col-derecha bg-white p-0 m-0\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/hoja-doblada/hoja-doblada.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HojaDobladaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HojaDobladaComponent = /** @class */ (function () {
    function HojaDobladaComponent() {
    }
    HojaDobladaComponent.prototype.ngOnInit = function () {
    };
    HojaDobladaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hoja-doblada',
            template: __webpack_require__("./src/app/componentes/hoja-doblada/hoja-doblada.component.html"),
            styles: [__webpack_require__("./src/app/componentes/hoja-doblada/hoja-doblada.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HojaDobladaComponent);
    return HojaDobladaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".prompt_principal {\r\n    height: 60vh;\r\n    width: 65vw;\r\n    background-image: url('/assets/img/Foto-Home-2.jpg');\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-color: rgba(0, 0, 0, 0.25);\r\n    min-height: -webkit-fit-content;\r\n    min-height: -moz-fit-content;\r\n    min-height: fit-content;\r\n}\r\n\r\n.prompt_principal>div:first-child {\r\n    height: 60vh;\r\n    width: 65vw;\r\n    background-color: rgba(0, 0, 0, 0.65);\r\n    position: absolute;\r\n    z-index: 1\r\n}\r\n\r\n.prompt_principal>div:last-child {\r\n    height: 30vh;\r\n    width: 65vw;\r\n    position: absolute;\r\n    z-index: 2;\r\n    min-height: -webkit-fit-content;\r\n    min-height: -moz-fit-content;\r\n    min-height: fit-content;\r\n    margin-top: 30vh;\r\n}\r\n\r\n.btn_cerrar {\r\n    position: absolute;\r\n    top: 20vh;\r\n    left: 82vw;\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .prompt_principal {\r\n        height: 95vh;\r\n        width: 95vw;\r\n        background-image: url('/assets/img/Foto-Home-2.jpg');\r\n        background-position: center;\r\n        background-size: cover;\r\n        background-color: rgba(0, 0, 0, 0.25);\r\n        min-height: -webkit-fit-content;\r\n        min-height: -moz-fit-content;\r\n        min-height: fit-content;\r\n    }\r\n    .prompt_principal>div:first-child {\r\n        height: 95vh;\r\n        width: 95vw;\r\n        background-color: rgba(0, 0, 0, 0.65);\r\n        position: absolute;\r\n        z-index: 1\r\n    }\r\n    .prompt_principal>div:last-child {\r\n        height: -webkit-fit-content;\r\n        height: -moz-fit-content;\r\n        height: fit-content;\r\n        -ms-flex-item-align: center;\r\n            -ms-grid-row-align: center;\r\n            align-self: center;\r\n        width: 95vw;\r\n        position: absolute;\r\n        z-index: 2;\r\n        min-height: -webkit-fit-content;\r\n        min-height: -moz-fit-content;\r\n        min-height: fit-content;\r\n        margin-top: 10vh;\r\n    }\r\n    .btn_cerrar {\r\n        position: absolute;\r\n        top: 60vh;\r\n        left: 40vw;\r\n        z-index: 10;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/componentes/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" porcentajeAltura=\"1\"></app-main>\n<app-seccion-opciones></app-seccion-opciones>\n<app-promociones></app-promociones>\n<app-noticias></app-noticias>\n<app-acerca-applus></app-acerca-applus>\n\n<div class=\"preloader\" *ngIf=\"this.mensaje\">\n    <div>\n        <div class=\"prompt_principal\">\n            <div></div>\n            <div class=\"fc-white p-lg-5 p-md-5 p-xl-5 p-0\" style=\"height: 40vh; margin-top: 10vh;\">\n                <div style=\"border: 2px solid #FC6500; max-width: 700px; margin: auto; padding: 10px; min-height: fit-content; display: flex; flex-direction: column; justify-content: center;\" class=\"h-100 text-center\">\n                    <h4 class=\"fs-2\">¡ATENCIÓN!</h4>\n                    <p class=\"fs-15\">\n                        Informamos que los días 24, 25, 26, 31 de diciembre, 1 y 2 de enero<br>\n                         <strong class=\"fs-15\" style=\"text-decoration: underline;\">\n                             LAS PLANTAS PERMANECERÁN CERRADAS                           \n                        </strong>\n                        <br>\n                    </p>\n                </div>\n            </div>\n        </div>\n        <button class=\"bg-orange rounded-0 fc-white border-0 pointer btn_cerrar\" (click)=\"this.mensaje = false;\">CERRAR</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.mensaje = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/componentes/home/home.component.html"),
            styles: [__webpack_require__("./src/app/componentes/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  applus-en-el-mundo works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApplusEnElMundoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplusEnElMundoComponent = /** @class */ (function () {
    function ApplusEnElMundoComponent() {
    }
    ApplusEnElMundoComponent.prototype.ngOnInit = function () {
    };
    ApplusEnElMundoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-applus-en-el-mundo',
            template: __webpack_require__("./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/applus-en-el-mundo/applus-en-el-mundo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplusEnElMundoComponent);
    return ApplusEnElMundoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/beneficios/beneficios.component.css":
/***/ (function(module, exports) {

module.exports = ".beneficio+.beneficio>div:first-child {\r\n    border-top: 2px solid #FC6500;\r\n}"

/***/ }),

/***/ "./src/app/componentes/links/beneficios/beneficios.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 fc-darkgrey\">\n\t\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t\t<p class=\"fc-orange\">Busca en tu localidad nuestras</p>\n\t\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Beneficios</h5>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"mt-3\">Beneficios del programa Verificación Responsable.</p>\n\t\t\t\t<!-- <p>Recibirás tu cuponera para que la disfrutes de estos beneficios junto al Kit de RTV, que entregamos a todos nuestros usuarios.</p> -->\n\t\t\t\t<!-- <p class=\"mt-2 fc-orange font-weight-bold\">Selección de beneficio por ciudad</p> -->\n\t\t\t\t<!-- <p-accordion>\n\t\t\t\t\t<p-accordionTab *ngFor=\"let localidad of this.localidades\">\n\t\t\t\t\t\t<p-header> {{ localidad }} </p-header>\n\t\t\t\t\t\t<div *ngFor=\"let beneficioActual of this.beneficios; let i = index\" class=\"row beneficio\" [style]=\"this.mostrarBeneficio(localidad, beneficioActual.localidad) | styleSanitizer\">\n\t\t\t\t\t\t\t<div class=\"col-12 mb-3\"></div>\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-3 col-lg-3 p-0 text-center text-md-right text-sm-right\"><img style=\"width: 80%\" [src]=\"'/assets/img/logos_beneficios/' + beneficioActual.comercio.logo\" [alt]=\"beneficioActual.comercio.nombre\" /></div>\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-3 col-lg-3 mt-2\">\n\t\t\t\t\t\t\t\t<app-aviso-importante [detalles]=\"beneficioActual.tipo\" [styleDetalles]=\"'color: rgb(255, 255, 255);text-align: center;margin-top: 12%; font-size: 1.15rem;'\"></app-aviso-importante>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-xs-4 col-sm-6 col-md-4 col-lg-4 d-none d-md-block fc-orange\">\n\t\t\t\t\t\t\t\t<div class=\"fs-25 text-center\">{{ beneficioActual.porcentaje }}</div>\n\t\t\t\t\t\t\t\t<div class=\"text-center\">{{ beneficioActual.descripcion_porcentaje }}</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-12 col-sm-12 col-md-2 col-lg-2 mt-2 mt-sm-2 mt-md-2 mt-xl-2 text-center\">\n\t\t\t\t\t\t\t\t<a [routerLink]=\"'/beneficios/' + beneficioActual.id\"><button class=\"btn-orange-outline\">VER MÁS...</button></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</p-accordionTab>\n\t\t\t\t</p-accordion> -->\n\t\t\t</div>\n\t\t\t<!-- <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 mt-5\">\n\t\t\t\t<a [routerLink]=\"'/contacto'\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center\">CONTACTO</div>\n\t\t\t\t</a>\n\t\t\t\t<img src=\"assets/img/reservaahora.jpg\" alt=\"Imagen red crtv\" class=\"col-8 d-block p-0 mx-auto mt-3\" />\n\n\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a>\n\n\t\t\t\t<div class=\"col-8 p-0 mt-3 mx-auto fc-white\" style=\"min-height: 8rem\">\n\t\t\t\t\t<img src=\"assets/img/consejos-practicos.png\" style=\"width: 100%\" />\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t</div>\n\n\t\t<div class=\"row no-gutters\">\n\t\t\t<div class=\"col col-12 col-md-6 order-1 order-md-1\">\n\t\t\t\t<div class=\"p-5\" style=\"background-color: #f2f2f2; width: 100%; height: 25rem\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h3>\n\t\t\t\t\t\t\t<span style=\"color: #fc6500; font-size: x-large\">Información</span>\n\t\t\t\t\t\t</h3>\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\tVerificar tu vehículo en tiempo y forma te dará mayores beneficios este 2023:\n\n\t\t\t\t\t\t\t<ul class=\"mt-3\">\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">10 % de descuento en el refrendo vehicular.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">20 % de descuento en cambio de placas foráneas por placas de Jalisco.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<p>Estos incentivos son acumulables a otros descuentos como aquellos que se hacen a personas con discapacidad, adultos mayores o pagos tempranos.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-md-6 order-1 order-md-2\">\n\t\t\t\t<div class=\"img-thumbnail\" style=\"background-position: center; background-size: contain; background-repeat: no-repeat; background-image: url('assets/img/fotos_beneficios/33.png'); background-color: #ffff; width: 100%; height: 25rem\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row no-gutters\">\n\t\t\t<div class=\"col col-12 col-md-6 order-2 order-md-2\">\n\t\t\t\t<div class=\"p-4\" style=\"background-color: #f2f2f2; width: 100%; height: 25rem\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t<span style=\"color: #fc6500; font-size: x-large\">Salud pública</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\tLa Verificación Responsable regula las emisiones vehiculares de:\n\n\t\t\t\t\t\t\t<ul class=\"mt-3\">\n\t\t\t\t\t\t\t\t<li class=\"mt-3\"><b>Ozono (O3)</b>, que afecta el aparato respiratorio e irrita las mucosas.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\"><b>Monóxido de Carbono (CO)</b>, que reduce la capacidad de transportar oxígeno en la sangre y en altas concentraciones ocasiona la muerte.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\"><b>Material Particulado (PM)</b>, que afecta el sistema pulmonar, los bronquios y los alvéolos de forma permanente, además, causa daño respiratorio, cardiovascular y muerte prematura.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\"><b>Compuestos Orgánicos Volátiles (COV)</b>, de los cuales alrededor de 40 tipos causan cáncer.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<p>Todos los efectos aquí mencionados se agudizan en las poblaciones más vulnerables: niños y adultos mayores.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-md-6 order-2 order-md-1\">\n\t\t\t\t<div class=\"img-thumbnail\" style=\"background-position: center; background-size: contain; background-repeat: no-repeat; background-image: url('assets/img/fotos_beneficios/2.png'); background-color: #ffff; width: 100%; height: 25rem\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row no-gutters\">\n\t\t\t<div class=\"col col-12 col-md-6 order-1 order-md-1\">\n\t\t\t\t<div class=\"p-4\" style=\"background-color: #f2f2f2; width: 100%; height: 25rem\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t<span style=\"color: #fc6500; font-size: x-large\">Economía del conductor</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\tAl afinar y dar mantenimiento regular a un vehículo contribuyes a los siguientes ítems:\n\t\t\t\t\t\t\t<ul class=\"mt-3\">\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Alargar su vida útil.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Ahorrar hasta un 30 % en el consumo de combustible.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Prevenir la evaporación de gasolina al revisar la hermeticidad del tapón de combustible.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Evitar gastos repentinos y elevados en reparaciones.</li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Detectar fallas a tiempo.</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t\t<p>Todos los efectos aquí mencionados se agudizan en las poblaciones más vulnerables: niños y adultos mayores.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-md-6 order-1 order-md-2\">\n\t\t\t\t<div class=\"img-thumbnail\" style=\"background-position: center; background-size: contain; background-repeat: no-repeat; background-image: url('assets/img/fotos_beneficios/3.png'); background-color: #ffff; width: 100%; height: 25rem\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row no-gutters\">\n\t\t\t<div class=\"col col-12 col-md-6 order-2 order-md-2\">\n\t\t\t\t<div class=\"p-4\" style=\"background-color: #f2f2f2; width: 100%; height: 25rem\">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<h4>\n\t\t\t\t\t\t\t<span style=\"color: #fc6500; font-size: x-large\">Fondo Ambiental Jalisco</span>\n\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t<h5>\n\t\t\t\t\t\t\tLos recursos generados con el programa Verificación Responsable se destinarán al Fondo Ambiental Jalisco, para realizar proyectos y acciones que contribuyan a mejorar la calidad del aire y del medio ambiente en beneficio de las y los jaliscienses.\n\t\t\t\t\t\t\t<ul class=\"mt-3\">\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Combate y prevención de incendios: <br /><a href=\"https://prevenciondeincendios.jalisco.gob.mx\">https://prevenciondeincendios.jalisco.gob.mx</a></li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Ciclovías: <a href=\"https://www.mibici.net\">https://www.mibici.net</a></li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Sistema de transporte sustentable: <br /><a href=\"https://mimovilidad.jalisco.gob.mx\">https://mimovilidad.jalisco.gob.mx</a></li>\n\t\t\t\t\t\t\t\t<li class=\"mt-3\">Red de monitoreo atmosférico: <br /><a href=\"http://siga.jalisco.gob.mx/aireysalud\">http://siga.jalisco.gob.mx/aireysalud</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</h5>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col col-12 col-md-6 order-2 order-md-1\">\n\t\t\t\t<div class=\"img-thumbnail\" style=\"background-position: center; background-size: contain; background-repeat: no-repeat; background-image: url('assets/img/fotos_beneficios/4.png'); background-color: #ffff; width: 100%; height: 25rem\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/beneficios/beneficios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_beneficios_service__ = __webpack_require__("./src/app/servicios/beneficios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeneficiosComponent = /** @class */ (function () {
    function BeneficiosComponent(beneficiosService) {
        var _this = this;
        this.beneficiosService = beneficiosService;
        this.localidades = ['Durán', 'Guayaquil', 'Samborondón'];
        this.beneficiosService.PedirBeneficios().subscribe(function (beneficios_descargados) {
            _this.beneficios = beneficios_descargados;
        });
    }
    BeneficiosComponent.prototype.ngOnInit = function () {
    };
    BeneficiosComponent.prototype.mostrarBeneficio = function (localidad, localidad_beneficio) {
        if (localidad == localidad_beneficio) {
            var estilo_localidad = "padding: 1rem;";
            //estilo_localidad = estilo_localidad + "padding-right: 0;"
            //estilo_localidad = estilo_localidad + "margin-rigth:1rem;"
            //estilo_localidad = estilo_localidad + "border-bottom: 1px solid #FC6500;"
            return estilo_localidad;
        }
        else {
            return "display: none;";
        }
    };
    BeneficiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-beneficios',
            template: __webpack_require__("./src/app/componentes/links/beneficios/beneficios.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/beneficios/beneficios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_beneficios_service__["a" /* BeneficiosService */]])
    ], BeneficiosComponent);
    return BeneficiosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 fc-darkgrey\">\n\t\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t\t<p class=\"fc-orange\">Busca en tu localidad nuestras</p>\n\t\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Promociones y Beneficios</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"animated paddingLeftAnimation fast\" *ngIf=\"this.beneficioSeleccionado.id != null\">\n\t\t\t\t\t<p class=\"mt-3\">Beneficio</p>\n\t\t\t\t\t<p class=\"fs-15\"></p>\n\t\t\t\t\t<p class=\"mt-2 fs-15 font-weight-bold\">{{ this.beneficioSeleccionado.comercio.nombre }}</p>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6\"><img style=\"width: 100%\" [src]=\"'/assets/img/logos_beneficios/' + beneficioSeleccionado.comercio.logo\" [alt]=\"beneficioSeleccionado.comercio.nombre\" /></div>\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 fc-orange\" *ngIf=\"beneficioSeleccionado.descripcion_porcentaje != ''\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<p class=\"font-weight-bold m-0\" style=\"font-size: 7rem; line-height: 5rem\">{{ beneficioSeleccionado.porcentaje }}</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"fs-25 text-center\">{{ beneficioSeleccionado.descripcion_porcentaje }}</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 fc-orange\" *ngIf=\"beneficioSeleccionado.descripcion_porcentaje == ''\">\n\t\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t\t<!-- <p class=\"font-weight-bold m-0\" style=\"font-size: 7rem; line-height: 5rem;\">{{ beneficioSeleccionado.porcentaje }}</p> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"fs-25 text-center font-weight-bold\" *ngIf=\"beneficioSeleccionado.tipo == 'Promoción'\">PROMO</div>\n\t\t\t\t\t\t\t<div class=\"fs-25 text-center font-weight-bold\" *ngIf=\"beneficioSeleccionado.tipo == 'Descuento'\">DESCUENTO</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\n\t\t\t\t\t\t\t<p class=\"font-weight-bold\">Dirección:</p>\n\t\t\t\t\t\t\t<p>{{ beneficioSeleccionado.direccion_beneficio }} - {{ beneficioSeleccionado.localidad }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6\">\n\t\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t\t<div *ngIf=\"beneficioSeleccionado.comercio.facebook != ''\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/redes_sociales/facebook.png\" alt=\"Facebook Logo\" style=\"width: 2rem\" />\n\t\t\t\t\t\t\t\t<a [href]=\"'http://www.facebook.com/' + beneficioSeleccionado.comercio.facebook\" target=\"_blank\">{{ beneficioSeleccionado.comercio.facebook }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"beneficioSeleccionado.comercio.instagram != ''\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/redes_sociales/instagram.png\" alt=\"Instagram Logo\" style=\"width: 2rem\" />\n\t\t\t\t\t\t\t\t<a [href]=\"'http://www.instagram.com/' + beneficioSeleccionado.comercio.instagram\" target=\"_blank\">{{ beneficioSeleccionado.comercio.instagram }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"beneficioSeleccionado.comercio.twitter != ''\">\n\t\t\t\t\t\t\t\t<img src=\"assets/img/redes_sociales/facebook.png\" alt=\"Twitter Logo\" style=\"width: 2rem\" />\n\t\t\t\t\t\t\t\t<a [href]=\"'http://www.facebook.com/' + beneficioSeleccionado.comercio.twitter\" target=\"_blank\">{{ beneficioSeleccionado.comercio.twitter }}</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div *ngIf=\"beneficioSeleccionado.comercio.web != ''\">\n\t\t\t\t\t\t\t\t<a [href]=\"beneficioSeleccionado.comercio.web\" target=\"_blank\" style=\"margin-left: 2rem\">Página web</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr />\n\t\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t\t<h3 class=\"col-12\">{{ beneficioSeleccionado.titulo }}</h3>\n\t\t\t\t\t\t<p class=\"col-12 m-0\" *ngFor=\"let linea_detalle of beneficioSeleccionado.detalles\">{{ linea_detalle }}</p>\n\t\t\t\t\t\t<p class=\"col-12 m-0\">{{ beneficioSeleccionado.validez }}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<hr />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 mt-5\">\n\t\t\t\t<a [routerLink]=\"'/contacto'\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center\">CONTACTO</div>\n\t\t\t\t</a>\n\t\t\t\t<img src=\"assets/img/reservaahora.jpg\" alt=\"Imagen red crtv\" class=\"col-8 d-block p-0 mx-auto mt-3\" />\n\n\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a>\n\t\t\t\t<div class=\"col-8 p-0 mt-3 mx-auto fc-white\" style=\"min-height: 8rem\">\n\t\t\t\t\t<img src=\"assets/img/consejos-practicos.png\" style=\"width: 100%\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetallesBeneficiosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_beneficios__ = __webpack_require__("./src/app/interfaces/beneficios.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_beneficios_service__ = __webpack_require__("./src/app/servicios/beneficios.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DetallesBeneficiosComponent = /** @class */ (function () {
    function DetallesBeneficiosComponent(route, beneficiosService) {
        this.route = route;
        this.beneficiosService = beneficiosService;
        this.beneficioSeleccionado = new __WEBPACK_IMPORTED_MODULE_1__interfaces_beneficios__["a" /* Beneficio */]();
    }
    DetallesBeneficiosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.beneficiosService.PedirBeneficios().subscribe(function (beneficios_descargados) {
            _this.route.params.subscribe(function (params) {
                var id_beneficio = params['id'];
                beneficios_descargados.forEach(function (beneficio) {
                    if (beneficio.id == id_beneficio) {
                        beneficio.detalles = JSON.parse(beneficio.detalles);
                        _this.beneficioSeleccionado = beneficio;
                    }
                });
            });
        });
    };
    DetallesBeneficiosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalles-beneficios',
            template: __webpack_require__("./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/beneficios/detalles-beneficios/detalles-beneficios.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__servicios_beneficios_service__["a" /* BeneficiosService */]])
    ], DetallesBeneficiosComponent);
    return DetallesBeneficiosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/calendario/calendario.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/calendario/calendario.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<p class=\"fc-orange\">Consulta nuestro</p>\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Calendario de Verificación</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8\">\n\t\t\t\t<p><b>Calendarización para la revisión técnica vehicular y matriculación.</b></p>\n\t\t\t\t<p>Para la verificación responsable de los vehículos que presten cualquiera de los tipos de servicio de transporte terrestre (particular, público, comercial o cuenta propia), se realizará conforme al detalle a continuación:</p>\n\t\t\t\t<p>Calendario oficial para vehículos <b>particulares</b> y de <b>uso intensivo</b>:</p>\n\t\t\t\t<div class=\"row mt-4\">\n\t\t\t\t\t<div *ngFor=\"let cal of this.calendario\" class=\"col-5 col-md-4 col-xs-6 col-sm-3 col-lg-2 fc-white font-weight-bold text-center p-1\">\n\t\t\t\t\t\t<div class=\"bg-grey\">{{ cal.mes }}</div>\n\t\t\t\t\t\t<div style=\"height: 5rem; display: flex; justify-content: center; align-items: center\" [class]=\"cal.digito.length > 1 ? 'bg-orange fs-1' : 'bg-orange fs-25 p-2'\">{{ cal.digito }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <p class=\"mt-4\">Calendario opcional</p>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div *ngFor=\"let cal of this.calendarioOpcional\" class=\"col-3 col-md-2 col-sm-2 col-lg-2 fc-white font-weight-bold text-center p-1\">\n\t\t\t\t\t\t<div class=\"bg-grey\">{{ cal.mes }}</div>\n\t\t\t\t\t\t<div style=\"height: 5rem; display: flex; justify-content: center; align-items: center\" [class]=\"cal.digito.length > 1 ? 'bg-orange fs-125' : 'bg-orange fs-25 p-2'\">{{ cal.digito }}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div> -->\n\t\t\t\t<!-- <p class=\"mt-2\"><b>Fuente: Resolución No. 066-DIR-2016-ANT, Agencia Nacional de Tránsito</b></p> -->\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4\">\n\t\t\t\t<a routerLink=\"/contacto\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Contacto</div>\n\t\t\t\t</a>\n\t\t\t\t<img src=\"assets/img/reservaahora.jpg\" alt=\"Imagen red crtv\" class=\"col-8 d-block p-0 mx-auto mt-3\" />\n\t\t\t\t<!-- <a routerLink=\"/reservas\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a> -->\n\n\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<hr />\n\t\t<h4 class=\"fc-orange pt-5\">Tu cita en 3 pasos:</h4>\n\t\t<div class=\"row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around mt-5\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/evento.png\" class=\"\" alt=\"Verificación responsable\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Verificación responsable</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">1.- Da clic en <b>HAZ TU CITA</b> y llena los datos necesarios para iniciar con el proceso, como información de contacto y del vehículo a verificar.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/metodo-de-pago.png\" class=\"\" alt=\"Verificación extemporánea\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Verificación extemporánea</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">2.- <b>Pago en linea o imprime tu orden de pago</b> y paga en ventanilla o en recaudadora para continuar.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/tarjeta-de-credito.png\" class=\"\" alt=\"Reimpresión por robo o extravío\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Reimpresión por robo o extravío</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">3.- Cuando tu pago se haya validado podrás <b>elegir el Centro de Verificación responsable, la fecha de tu cita y agendarla.</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a routerLink=\"/#\"> </a>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-4\"></div>\n\t\t\t<div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4\">\n\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold my-3\"><a href=\"http://187.188.141.119:80/WEB_MEXICO/221101_Guía_de_Usuario_Sistema_Citas_Verificación_Vehicular.pdf\" download target=\"_blank\" style=\"color: inherit\">DESCARGAR INSTRUCTIVO</a></div>\n\t\t\t</div>\n\t\t\t<div class=\"col-4\"></div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/calendario/calendario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarioComponent = /** @class */ (function () {
    function CalendarioComponent() {
        this.calendario = [
            { mes: "Enero-Febrero", digito: "1" },
            { mes: "Febrero-Marzo", digito: "2" },
            { mes: "Marzo-Abril", digito: "3" },
            { mes: "Abril-Mayo", digito: "4" },
            { mes: "Mayo-Junio", digito: "5" },
            { mes: "Julio-Agosto", digito: "6" },
            { mes: "Agosto-Setiembre", digito: "7" },
            { mes: "Septiembre-Octubre", digito: "8" },
            { mes: "Octubre-Noviembre", digito: "9" },
            { mes: "Noviembre-Diciembre", digito: "0" },
        ];
        this.calendarioOpcional = [
            { mes: "Enero", digito: "TODOS" },
            { mes: "Febrero", digito: "2 al 0" },
            { mes: "Marzo", digito: "3 al 0" },
            { mes: "Abril", digito: "4 al 0" },
            { mes: "Mayo", digito: "5 al 0" },
            { mes: "Junio", digito: "6 al 0" },
            { mes: "Julio", digito: "7 al 0" },
            { mes: "Agosto", digito: "8 al 0" },
            { mes: "Septiembre", digito: "9 al 0" },
            { mes: "Octubre", digito: "0" },
            { mes: "Noviembre", digito: "-" },
            { mes: "Diciembre", digito: "-" },
        ];
    }
    CalendarioComponent.prototype.ngOnInit = function () {
    };
    CalendarioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calendario',
            template: __webpack_require__("./src/app/componentes/links/calendario/calendario.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/calendario/calendario.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarioComponent);
    return CalendarioComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/concurso/concurso.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/concurso/concurso.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 fc-darkgrey\">\n\t\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t\t<p class=\"fc-orange\">Concurso</p>\n\t\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Tu RTV totalmente GRATIS</h5>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"mt-3\">Somos conscientes de que los usuarios que adoptan conductas responsables, pasando su Verificación de Vehículos sin demora, no sólo están asegurando la Seguridad Vial, también contribuyen al mejor servicio de Applus+ RTV, ya que nos permiten realizar un mejor dimensionamiento de nuestros recursos.</p>\n\t\t\t\t<p>En Applus+ Automotive queremos premiar a todos aquellos usuarios que son realmente responsables y comprometidos con la seguridad de todos.</p>\n\t\t\t\t<p>Es por ello, que durante este mes, todos los usuarios que visiten nuetro Centro de Verificación Responsable, participarán en el sorteo de RTV's gratis.</p>\n\t\t\t\t<p>Mucha suerte a todos, y gracias por confiar en Applus+ Automotive, la empresa líder en la Inspección Técnica de Vehículos.</p>\n\t\t\t\t<b>¡Estos son algunos de los ganadores de la RTV GRATIS! El próximo puedes ser tú.</b>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4 mt-5\">\n\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center\">CONTACTO</div>\n\t\t\t\t<img src=\"assets/img/reservaahora.jpg\" alt=\"Imagen red crtv\" class=\"col-8 d-block p-0 mx-auto mt-3\" />\n\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t<div class=\"col-8 p-0 mt-3 mx-auto fc-white\" style=\"min-height: 8rem\">\n\t\t\t\t\t<img src=\"assets/img/consejos-practicos.png\" style=\"width: 100%\" />\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/concurso/concurso.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConcursoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConcursoComponent = /** @class */ (function () {
    function ConcursoComponent() {
    }
    ConcursoComponent.prototype.ngOnInit = function () {
    };
    ConcursoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-concurso',
            template: __webpack_require__("./src/app/componentes/links/concurso/concurso.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/concurso/concurso.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConcursoComponent);
    return ConcursoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/contacto/contacto.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<div class=\"preloader\" *ngIf=\"preloader\">\n\t<img src=\"assets/img/preloader.gif\" />\n</div>\n<div class=\"preloader\" *ngIf=\"confirmarMensaje\">\n\t<div class=\"bg-grey fc-white text-center p-5\">\n\t\tMuchas gracias por ponerse en contacto con nosotros.\n\t\t<br />\n\t\tSu código de contacto es: {{ this.codigo_contacto }}\n\t\t<br />\n\t\t<br /><br />\n\t\t<button class=\"btn-principal d-inline p-2\" (click)=\"this.cerrarConfirmacion()\">Cerrar</button>\n\t</div>\n</div>\n<p-growl [(value)]=\"mensajesError\"></p-growl>\n<section class=\"bg-lightgrey py-5 pb-5\">\n\t<div class=\"container\">\n\t\t<div class=\"card-columns mt-3 d-flex flex-row\">\n\t\t\t<div class=\"card\">\n\t\t\t\t<div class=\"pl-2 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t\t<p class=\"fc-orange\">Información de</p>\n\t\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Contacto</h5>\n\t\t\t\t</div>\n\t\t\t\t<h5 class=\"mt-4\">Oficina Central Tlaquepaque</h5>\n\t\t\t\t<p>\n\t\t\t\t\tCVR 0010\n\t\t\t\t\t<br />Cristóbal Colon 5081, <br />San Pedro Tlaquepaque, Jal. - México\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tCVR 0012\n\t\t\t\t\t<br />Periférico Sur 843, <br />Ciudad Guzmán, Jal. - México\n\t\t\t\t</p>\n\t\t\t\t<p>\n\t\t\t\t\tCVR 0007\n\t\t\t\t\t<br />Av. Francisco Medina Ascencio 4774-A, <br />Puerto Vallarta, Jal. - México\n\t\t\t\t</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"card\">\n\t\t\t\t<h5 class=\"fc-orange\">Entra en contacto con nosotros</h5>\n\t\t\t\t<form>\n\t\t\t\t\t<input [(ngModel)]=\"this.mensaje.nombre\" name=\"nombre\" type=\"text\" class=\"form-control my-2 rounded-0\" placeholder=\"Nombre y Apellido\" autocomplete=\"name\" />\n\t\t\t\t\t<input [(ngModel)]=\"this.mensaje.empresa\" name=\"empresa\" type=\"text\" class=\"form-control my-2 rounded-0\" placeholder=\"Empresa\" autocomplete=\"organization\" />\n\t\t\t\t\t<input [(ngModel)]=\"this.mensaje.mail\" name=\"email\" type=\"text\" class=\"form-control my-2 rounded-0\" placeholder=\"E-mail\" autocomplete=\"email\" />\n\t\t\t\t\t<input [(ngModel)]=\"this.mensaje.telefono\" name=\"telefono\" type=\"text\" class=\"form-control my-2 rounded-0\" placeholder=\"Teléfono\" autocomplete=\"tel\" />\n\t\t\t\t\t<textarea [(ngModel)]=\"this.mensaje.mensaje\" name=\"mensaje\" class=\"form-control my-2 rounded-0\" rows=\"6\" placeholder=\"Mensaje\"></textarea>\n\t\t\t\t</form>\n\t\t\t\t<button class=\"btn-principal btn-orange-hover py-2 px-4 fs-125\" (click)=\"this.enviarMensaje()\">ENVIAR</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!-- \n\t<div class=\"row\">\n\t\t<agm-map [latitude]=\"map_center.lat\" [longitude]=\"map_center.lng\" [zoom]=\"13\" [streetViewControl]=\"false\" class=\"col-12 p-0\" style=\"height: 300px\">\n\t\t\t<agm-marker [latitude]=\"this.map_center.lat\" [longitude]=\"this.map_center.lng\" iconUrl=\"assets/img/gmaps.marker.icon.png\"> </agm-marker>\n\t\t</agm-map>\n\t</div> -->\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__ = __webpack_require__("./src/app/servicios/plantas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__interfaces_mensaje__ = __webpack_require__("./src/app/interfaces/mensaje.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__servicios_contacto_service__ = __webpack_require__("./src/app/servicios/contacto.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactoComponent = /** @class */ (function () {
    function ContactoComponent(servicioPlantas, validaciones, servicioContacto) {
        this.servicioPlantas = servicioPlantas;
        this.validaciones = validaciones;
        this.servicioContacto = servicioContacto;
        this.map_center = { lat: -2.189771, lng: -79.815410 };
        this.preloader = false;
        this.mensaje = new __WEBPACK_IMPORTED_MODULE_2__interfaces_mensaje__["a" /* Mensaje */]();
        this.codigo_contacto = "";
        this.confirmarMensaje = false;
        this.mensajesError = [];
    }
    ContactoComponent.prototype.ngOnInit = function () {
        //this.centrarMapa();
    };
    ContactoComponent.prototype.centrarMapa = function () {
        var _this = this;
        this.servicioPlantas.plantas.map(function (planta, indice, array) {
            _this.map_center.lat += planta.lat;
            _this.map_center.lng += planta.lng;
            var divisor = (indice > 0) ? 2 : 1;
            _this.map_center.lat = ((_this.map_center.lat) / divisor);
            _this.map_center.lng = ((_this.map_center.lng) / divisor);
        }, this);
    };
    ContactoComponent.prototype.enviarMensaje = function () {
        var _this = this;
        this.mensajesError = [];
        if (this.mensaje.nombre == "" || this.mensaje.nombre == undefined) {
            this.mensajesError.push({ severity: "danger", summary: "Nombre incorrecto", detail: "Por favor ingrese su nombre y apellido" });
            return;
        }
        if (!this.validaciones.validarMail(this.mensaje.mail)) {
            this.mensajesError.push({ severity: "danger", summary: "Mail incorrecto", detail: "Por favor ingrese un mail válido" });
            return;
        }
        if (this.mensaje.telefono == "" || this.mensaje.telefono == undefined) {
            this.mensajesError.push({ severity: "danger", summary: "Teléfono incorrecto", detail: "Por favor ingrese su número de teléfono" });
            return;
        }
        if (this.mensaje.mensaje == "" || this.mensaje.mensaje == undefined) {
            this.mensajesError.push({ severity: "danger", summary: "Mensaje incorrecto", detail: "Por favor ingrese el mensaje que desea enviarnos" });
            return;
        }
        this.preloader = true;
        this.servicioContacto.NuevoMensaje(this.mensaje).subscribe(function (cod_mensaje) {
            _this.codigo_contacto = cod_mensaje;
            _this.confirmarMensaje = true;
            _this.preloader = false;
        }, function (error) {
            var error_mensaje = { severity: "danger", summary: "Error al guardar mensaje", detail: "No se pudo guardar su mensaje, vuelva a intentarlo luego." };
            _this.mensajesError = [];
            _this.mensajesError.push(error_mensaje);
            _this.preloader = false;
        });
    };
    ContactoComponent.prototype.cerrarConfirmacion = function () {
        this.mensaje = { nombre: "", empresa: "", mail: "", telefono: "", mensaje: "" };
        this.confirmarMensaje = false;
    };
    ContactoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contacto',
            template: __webpack_require__("./src/app/componentes/links/contacto/contacto.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/contacto/contacto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__["a" /* PlantasService */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_validaciones_service__["a" /* ValidacionesService */],
            __WEBPACK_IMPORTED_MODULE_4__servicios_contacto_service__["a" /* ContactoService */]])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/documentacion/documentacion.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/documentacion/documentacion.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<p class=\"fc-orange\">Requisitos VR</p>\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Documentación</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8\">\n\t\t\t\t<p>La documentación que será solicitada al momento de realizar su Verificación Vehicular es la detallada a continuación:</p>\n\t\t\t\t<!-- <ul>\n                    <b>Planta Durán:</b>\n                    <li>Matrícula del Vehículo original.</li>\n                    <li>Turno reservado.</li>\n                    <li>Comprobante del pago de la RTV.</li>\n                </ul>\n                <ul>\n                    <b>Planta Portoviejo:</b>\n                    <li>Matrícula del Vehículo original o Certificado único vehicular.</li>\n                    <li>Orden de pago.</li>\n                    <li>Comprobante del pago de la RTV.</li>\n                    <li>Turno reservado en la página web de Portovial.</li>\n                </ul>\n                <ul>\n                    <b>Planta Machala:</b>\n                    <li>Matrícula del Vehículo original o Certificado único vehicular.</li>\n                    <li>Orden de pago.</li>\n                    <li>Comprobante del pago de la RTV.</li>\n                    <li>Turno reservado en la página web de Movilidad Machala.</li>\n                </ul>\n                <ul>\n                    <b>Planta Babahoyo:</b>\n                    <li>Cédula de identidad.</li>\n                    <li>Matrícula del Vehículo original o Certificado único vehicular.</li>\n                    <li>Orden de pago.</li>\n                    <li>Comprobante del pago de la RTV.</li>\n                    <li>Turno generado en ventanillas de Transvial.</li>\n                    \n                </ul> -->\n\t\t\t\t<ul>\n\t\t\t\t\t<!-- <b>Para todos los centros:</b> -->\n\t\t\t\t\t<li>Tarjeta de circulación</li>\n\t\t\t\t\t<li>Comprobante de cita</li>\n\t\t\t\t\t<li>Recibo de pago</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<p><b>¿Qué necesitas para hacer la Verificación Responsable?</b></p>\n\n\t\t\t\t<p>Requisitos previos a tu cita:</p>\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Realiza previamente el mantenimiento físico-mecánico a tu vehículo.</li>\n\t\t\t\t\t<li>Haz tu cita y paga.</li>\n\t\t\t\t\t<li>Preséntate 15 minutos antes de tu cita.</li>\n\t\t\t\t\t<li>Lleva tu tarjeta de circulación o póliza de seguro.</li>\n\t\t\t\t</ol>\n\n\t\t\t\t<p>Cuándo acudas al Centro de Verificación Responsable:</p>\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Porta tu cubrebocas.</li>\n\t\t\t\t\t<li>Lleva tu vehículo limpio.</li>\n\t\t\t\t\t<li>Evita dejar objetos de valor y otras pertenencias al interior de tu vehículo.</li>\n\t\t\t\t\t<li>Permanece en la sala de espera durante el proceso, este no tomará más de 20 min.</li>\n\t\t\t\t\t<li>Retírate después de recibir tus resultados para evitar saturar el patio de maniobras.</li>\n\t\t\t\t\t<li>Los centros cuentan con las medidas sanitarias anti COVID-19.</li>\n\t\t\t\t</ol>\n\n\t\t\t\t<p><b>Denuncia de distintivos y certificados falsos</b></p>\n\t\t\t\t<p>La falsificación de documentación oficial es un delito penal. <br />Si eres resguardante y/o propietario de un vehículo automotor tienes la obligación de realizar la prueba en un Centro de Verificación Responsable autorizado. <br />En caso de portar un Distintivo o Certificado de verificación apócrifo, será acreedor a una multa, tu vehículo será retirado de circulación y llevado al corralón.</p>\n\t\t\t\t<p><b>¿Sabes de alguien que entregue distintivos y certificados apócrifos, o fuiste víctima de algún gestor?</b></p>\n\t\t\t\t<p>Puedes ir a levantar tu denuncia a la Fiscalía Estatal ubicada en Calle 14 No. 2550, Col. Colón Industrial, Guadalajara. <br />También puedes llamar al 33 2686 5150 o enviar tu denuncia al correo electrónico: verificacion.semadet@jalisco.gob.mx. <br />O envía tu denuncia al correo electrónico: denuncias.semadet@jalisco.gob.mx.</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/documentacion/documentacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentacionComponent = /** @class */ (function () {
    function DocumentacionComponent() {
    }
    DocumentacionComponent.prototype.ngOnInit = function () {
    };
    DocumentacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-documentacion',
            template: __webpack_require__("./src/app/componentes/links/documentacion/documentacion.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/documentacion/documentacion.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentacionComponent);
    return DocumentacionComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/encuesta/encuesta.component.css":
/***/ (function(module, exports) {

module.exports = "p-radiobutton{\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-align: center;-ms-flex-align: center;align-items: center\r\n}"

/***/ }),

/***/ "./src/app/componentes/links/encuesta/encuesta.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"preloader\">\n\t<img src=\"assets/img/preloader.gif\" />\n</div>\n<p-growl [(value)]=\"mensajes\" life=\"10000\"></p-growl>\n<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<p class=\"fc-orange\">Responde nuestra</p>\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Encuesta de Satisfacción</h5>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8\">\n\t\t\t\t<p>Con tus servicios al día, ayudas a mejorar la <span class=\"en-orange\">SEGURIDAD VIAL</span> y el <span class=\"en-orange\">MEDIO AMBIENTE</span></p>\n\t\t\t\t<p>Por eso, valoramos tu opinión en nuestra encuesta de satisfacción</p>\n\t\t\t</div>\n\t\t\t<!-- DATOS USUARIO -->\n\t\t\t<form class=\"bg-grey fc-white p-4 col-sm-8\" *ngIf=\"this.nro_slide == 0\">\n\t\t\t\t<!-- Nombre cliente -->\n\t\t\t\t<div class=\"form-group row mt-3\"><label for=\"nombre\" class=\"col-5 offset-1\">Nombre</label><input type=\"text\" name=\"nombre\" [(ngModel)]=\"this.respuestaEncuesta.nombre\" (change)=\"this.respuestaEncuesta.nombre = this.respuestaEncuesta.nombre.toUpperCase()\" placeholder=\"-- ingrese su nombre --\" class=\"col-5\" /></div>\n\t\t\t\t<!-- Patente Vehículo -->\n\t\t\t\t<div class=\"form-group row\"><label for=\"patente\" class=\"col-5 offset-1\">Placa del vehículo</label><input type=\"text\" minlength=\"5\" maxlength=\"7\" name=\"patente\" [(ngModel)]=\"this.respuestaEncuesta.patente\" (change)=\"this.respuestaEncuesta.patente = this.respuestaEncuesta.patente.toUpperCase()\" placeholder=\"-- ingrese una placa --\" class=\"col-5\" /></div>\n\t\t\t\t<!-- Correo cliente -->\n\t\t\t\t<div class=\"form-group row mt-3\"><label for=\"mail\" class=\"col-5 offset-1\">Correo electrónico</label><input type=\"text\" name=\"mail\" pattern=\"[a-zA-Z0-9]+\" maxlength=\"25\" [(ngModel)]=\"this.respuestaEncuesta.mail\" (change)=\"this.respuestaEncuesta.mail = this.respuestaEncuesta.mail.toUpperCase()\" placeholder=\"-- ingrese su email --\" class=\"col-5\" /></div>\n\t\t\t\t<!-- Fecha RTV -->\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"fecha\" class=\"col-5 offset-1\">Fecha de la verificación</label>\n\t\t\t\t\t<!-- <input type=\"date\" name=\"fecha\" ([ngModel])=\"this.respuestaEncuesta.fechaRTV\" class=\"col-5\"> -->\n\t\t\t\t\t<p-calendar [showIcon]=\"true\" icon=\"icono_calendario\" [locale]=\"calendario_es\" readonlyInput=\"true\" [minDate]=\"this.fecha_min\" [maxDate]=\"this.fecha_max\" name=\"calendario\" dateFormat=\"dd/mm/yy\" (onSelect)=\"this.seleccionarFechaRTV($event)\" [(ngModel)]=\"todayDate\" dateFormat=\"dd/mm/yy\"></p-calendar>\n\t\t\t\t</div>\n\t\t\t\t<!-- Planta RTV -->\n\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t<label for=\"planta\" class=\"col-5 offset-1\">Centro de verificación</label>\n\t\t\t\t\t<select name=\"planta\" class=\"col-5\" [(ngModel)]=\"this.respuestaEncuesta.planta\">\n\t\t\t\t\t\t<!-- <option value=\"7\" selected disabled>-- seleccione un centro de verificación --</option> -->\n\t\t\t\t\t\t<option value=\"7\">Vallarta</option>\n\t\t\t\t\t\t<option value=\"10\">Tlaquepaque</option>\n\t\t\t\t\t\t<option value=\"11\">Zapotlán</option>\n\t\t\t\t\t\t<option value=\"12\">Salto</option>\n\t\t\t\t\t</select>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"text-center\">\n\t\t\t\t\tLa encuesta no te llevará mas de 1 <br />\n\t\t\t\t\tminutos en responder\n\t\t\t\t</p>\n\t\t\t\t<button class=\"btn-orange-hover btn btn-principal m-auto d-block mt-4\" (click)=\"this.validarDatosCliente()\">COMENZAR ENCUESTA</button>\n\t\t\t</form>\n\t\t\t<!-- PREGUNTAS -->\n\t\t\t<form class=\"bg-grey fc-white p-4 col-sm-8\" *ngIf=\"this.nro_slide == 1\">\n\t\t\t\t<div *ngFor=\"let seccion of this.encuestaService.encuesta.secciones\">\n\t\t\t\t\t<h3>\n\t\t\t\t\t\t<div style=\"background-color: #f65000; border-radius: 100px; padding: 17px; height: 0px; display: inline-flex; width: 0; justify-content: center; line-height: 0px; font-size: 20px\">{{ seccion.numero }}</div>\n\t\t\t\t\t\t{{ seccion.titulo }}\n\t\t\t\t\t</h3>\n\t\t\t\t\t<div *ngFor=\"let pregunta of seccion.preguntas\" class=\"mt-4\">\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<p class=\"fs-125\">{{ pregunta.numero }}. {{ pregunta.pregunta }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t\t<p-radioButton [name]=\"pregunta.id\" value=\"respuesta.valor\" class=\"mr-3\" [label]=\"respuesta.descripcion\" (click)=\"this.responder(pregunta.id, respuesta.valor)\" *ngFor=\"let respuesta of pregunta.respuestas\"></p-radioButton>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<button class=\"btn-orange-hover btn btn-principal m-auto d-block mt-4\" (click)=\"this.enviarEncuesta()\">FINALIZAR ENCUESTA</button>\n\t\t\t\t</div>\n\t\t\t\t<!-- <a href=\"document.location.reload(true);document.location='/mylink'\">Click here to refresh the page</a> -->\n\t\t\t</form>\n\n\t\t\t<!-- GRACIAS POR SU APORTE -->\n\t\t\t<form class=\"p-4 col-xs-12 col-md-8 col-sm-8 col-lg-8\" *ngIf=\"this.nro_slide == 2\">\n\t\t\t\t<h3 class=\"fc-orange text-center\">¡Muchas gracias por tu aporte!</h3>\n\t\t\t\t<!-- <img src=\"assets/img/fin_encuesta.JPG\" alt=\"Gracias por darnos su opinión\" style=\"width: 100%;\"> -->\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/encuesta/encuesta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EncuestaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_encuesta_service__ = __webpack_require__("./src/app/servicios/encuesta.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncuestaComponent = /** @class */ (function () {
    function EncuestaComponent(encuestaService, chages) {
        this.encuestaService = encuestaService;
        this.chages = chages;
        this.mensajes = new Array();
        this.preloader = false;
        this.nro_slide = 0;
        this.cantidad_slides = 3;
        this.fecha_min = new Date('2018-07-24');
        this.fecha_max = new Date();
        this.calendario_es = {
            firstDayOfWeek: 0,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: 'Hoy',
            clear: 'Limpiar'
        };
        this.respuestaEncuesta = new __WEBPACK_IMPORTED_MODULE_1__servicios_encuesta_service__["a" /* Encuesta */]();
    }
    EncuestaComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.todayDate = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    };
    /**
     * Valida los datos del cliente y muestra las preguntas
     */
    EncuestaComponent.prototype.validarDatosCliente = function () {
        //Validar los datos del cliente
        this.mensajes = new Array();
        // Valido el nombre
        if (this.respuestaEncuesta.nombre == null || this.respuestaEncuesta.nombre.length == 0) {
            this.mensajes.push({ severity: "error", summary: "Nombre", detail: "Debe ingresar el nombre" });
        }
        //Valido la patente
        if (this.respuestaEncuesta.patente == null || this.respuestaEncuesta.patente.length == 0) {
            this.mensajes.push({ severity: "error", summary: "Placa del vehículo", detail: "Debe ingresar la placa del vhículo" });
        }
        // Valido el correo
        if (this.respuestaEncuesta.mail == null || this.respuestaEncuesta.mail.length == 0) {
            this.mensajes.push({ severity: "error", summary: "Correo electrónico", detail: "Debe ingresar el correo electrónico" });
        }
        // //Valido la fecha 
        // if(this.respuestaEncuesta.fechaRTV == null){
        //   this.mensajes.push({severity:"error", summary:"Fecha de RTV", detail:"Debe seleccionar una fecha de verificación"})
        // }
        //Valido la planta 
        if (this.respuestaEncuesta.planta == null || this.respuestaEncuesta.planta == "-1") {
            this.mensajes.push({ severity: "error", summary: "Centro de  verificación", detail: "Debe seleccionar el centro de verificación donde asistió" });
        }
        //Si no se cargaron mensajes de error muestro el siguiente slide
        if (this.mensajes.length == 0) {
            this.mostrarSlide(this.nro_slide + 1);
        }
    };
    /**
     * Guarda la fecha seleccionada en el calendario en la fechaRTV de la respuesta de la encuesta
     * corrigiendo el formato para que sea el correcto al enviar al back end
     * @param value Fecha seleccionada en el calendario
     */
    EncuestaComponent.prototype.seleccionarFechaRTV = function (value) {
        this.respuestaEncuesta.fechaRTV = value.getFullYear() + "-" + ("0" + (value.getMonth() + 1)).slice(-2) + "-" + ("0" + value.getDate()).slice(-2);
        console.log(this.respuestaEncuesta.fechaRTV);
    };
    /**
     * Agrega o modifica una respuesta a la encuesta
     * @param preguntaid Id de la pregunta que se respondió
     * @param respuestaValue Valor de la respuesta seleccionada
     */
    EncuestaComponent.prototype.responder = function (preguntaid, respuestaValue) {
        var modificado = false;
        this.respuestaEncuesta.respuestas.forEach(function (pregunta) {
            if (pregunta.idpregunta == preguntaid) {
                pregunta.idrespuesta = respuestaValue;
                modificado = true;
            }
        });
        if (!modificado) {
            this.respuestaEncuesta.respuestas.push({ idpregunta: preguntaid, idrespuesta: respuestaValue });
        }
    };
    /** Envía la encuesta para guardarla */
    EncuestaComponent.prototype.enviarEncuesta = function () {
        var _this = this;
        if (this.respuestaEncuesta.fechaRTV == null) {
            var today = new Date();
            this.todayDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            this.respuestaEncuesta.fechaRTV = this.todayDate.toString();
        }
        this.mensajes = new Array();
        if (this.respuestaEncuesta.respuestas.length < this.encuestaService.encuesta.secciones[0].preguntas.length) {
            this.mensajes.push({ severity: "error", summary: "Preguntas", detail: "Se deben responder todas las preguntas antes de enviar la encuesta" });
        }
        //Si no se cargaron mensajes de error envío la encuesta y muestro el siguiente slide
        if (this.mensajes.length == 0) {
            // Envío la encuesta
            this.preloader = true;
            this.encuestaService.enviarEncuesta(this.respuestaEncuesta).subscribe(function (exito) {
                _this.mensajes.push({ severity: "info", summary: "Encuesta", detail: "Su respuesta fue enviada correctamente!" });
                _this.mostrarSlide(_this.nro_slide + 1);
                _this.preloader = false;
                _this.chages.markForCheck();
            }, function (error) {
                _this.preloader = false;
                _this.chages.markForCheck();
                _this.mensajes.push({ severity: "error", summary: "Preguntas", detail: "Se produjo un error al enviar su respuesta, por favor vuelva a intentarlo luego." });
            });
        }
    };
    /**
     * Muestra y valida el slide pasado por parámetro
     * @param slide Slide a mostrar
     */
    EncuestaComponent.prototype.mostrarSlide = function (slide) {
        console.log(this.respuestaEncuesta);
        if (slide < this.cantidad_slides && slide >= 0) {
            this.nro_slide = slide;
        }
    };
    /** Estilos a aplicar al main */
    EncuestaComponent.prototype.estiloMain = function () {
        return 'animated fadeIn mainFondo050';
    };
    EncuestaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-encuesta',
            template: __webpack_require__("./src/app/componentes/links/encuesta/encuesta.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/encuesta/encuesta.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_encuesta_service__["b" /* EncuestaService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]])
    ], EncuestaComponent);
    return EncuestaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/normas/normas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/normas/normas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Normas de control</h5>\n\t\t\t\t<!-- <p class=\"fc-orange\">Valores límites de calificación de las Revisiones Vehiculares</p> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8\">\n\t\t\t\t<!-- <h5 class=\"mt-2\">Prueba de Frenos de Servicio</h5>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th style=\"width: 40%\"></th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO I</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO II</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO III</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.prubaFrenosDeServicio\">\n\t\t\t\t\t\t\t<td style=\"background-color: #fc6500; font-weight: bold; width: 40%\">{{ prueba.desc }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo1 }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo2 }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo3 }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<h5 class=\"mt-2\">Prueba de Frenos de Mano</h5>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th style=\"width: 40%\"></th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 30%\">TIPO I</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 30%\">TIPO II</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.prubaFrenoDeMano\">\n\t\t\t\t\t\t\t<td style=\"background-color: #fc6500; font-weight: bold; width: 40%\">{{ prueba.desc }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 30%\">{{ prueba.tipo1 }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 30%\">{{ prueba.tipo2 }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<h5 class=\"mt-2\">Prueba de Amortiguadores</h5>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th style=\"width: 40%\"></th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO I</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO II</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">TIPO III</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.prubaAmortiguadores\">\n\t\t\t\t\t\t\t<td style=\"background-color: #fc6500; font-weight: bold; width: 40%\">{{ prueba.desc }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo1 }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo2 }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.tipo3 }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p class=\"mt-2\">En el sistema de amortiguación se mide la eficacia de los mismos, y la diferencia entre su desempeño en el mismo eje. Los inconvenientes que provocan el mal funcionamiento de los amortiguadores se relacionan directamente con los que provoca el sistema de frenos, ya que app-seccion-opcionesel funcionamiento es óptimo, pero en el momento de frenar, las ruedas no están apoyadas sobre el piso, el vehículo tendrá inconvenientes para frenar.</p>\n\t\t\t\t<h5>Prueba de Contaminación</h5>\n\t\t\t\t<p><b>Motores Gasolina:</b> El valor límite y cla calificación dependen del modelo del vehículo.</p>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO I</th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO II</th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO III</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td rowspan=\"2\" style=\"background-color: #fc6500; font-weight: bold\">HASTA 1989</td>\n\t\t\t\t\t\t\t<td>% CO</td>\n\t\t\t\t\t\t\t<td>De 6 a 6.5</td>\n\t\t\t\t\t\t\t<td>De 6.5 a 7</td>\n\t\t\t\t\t\t\t<td>Mayor a 7</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>ppm HC</td>\n\t\t\t\t\t\t\t<td>De 1000 a 1200</td>\n\t\t\t\t\t\t\t<td>De 1200 a 1400</td>\n\t\t\t\t\t\t\t<td>Mayor a 1400</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td rowspan=\"2\" style=\"background-color: #fc6500; font-weight: bold\">DE 1990 a 1999</td>\n\t\t\t\t\t\t\t<td>% CO</td>\n\t\t\t\t\t\t\t<td>De 3.5 a 4</td>\n\t\t\t\t\t\t\t<td>De 4 a 4.5</td>\n\t\t\t\t\t\t\t<td>Mayor a 4.5</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>ppm HC</td>\n\t\t\t\t\t\t\t<td>De 650 a 700</td>\n\t\t\t\t\t\t\t<td>De 700 a 750</td>\n\t\t\t\t\t\t\t<td>Mayor a 750</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td rowspan=\"2\" style=\"background-color: #fc6500; font-weight: bold\">DESDE 2000</td>\n\t\t\t\t\t\t\t<td>% CO</td>\n\t\t\t\t\t\t\t<td>De 0.5 a 1</td>\n\t\t\t\t\t\t\t<td>De 1 a 2</td>\n\t\t\t\t\t\t\t<td>Mayor a 2</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>ppm HC</td>\n\t\t\t\t\t\t\t<td>De 100 a 200</td>\n\t\t\t\t\t\t\t<td>De 200 a 400</td>\n\t\t\t\t\t\t\t<td>Mayor a 400</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p class=\"mt-2\"><b>Motores Gasolina:</b> El valor límite y cla calificación dependen del modelo del vehículo.</p>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th></th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO I</th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO II</th>\n\t\t\t\t\t\t<th class=\"bg-orange\">TIPO III</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td rowspan=\"2\" style=\"background-color: #fc6500; font-weight: bold\">Valor K en m -1</td>\n\t\t\t\t\t\t\t<td>Hasta 2000</td>\n\t\t\t\t\t\t\t<td>De 0.5 a 1.1</td>\n\t\t\t\t\t\t\t<td>De 1.2 a 2.1</td>\n\t\t\t\t\t\t\t<td>Mayor a 2.2</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td>Desde 2000</td>\n\t\t\t\t\t\t\t<td>De 0.5 a 0.8</td>\n\t\t\t\t\t\t\t<td>De 0.9 a 1.6</td>\n\t\t\t\t\t\t\t<td>Mayor a 1.7</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table> -->\n\n\t\t\t\t<h5 class=\"mt-5\">Obligados y Exentos</h5>\n\n\t\t\t\t<p class=\"mt-2\">Todos los vehículos que circulan en el Área Metropolitana de Guadalajara, y las ciudades medias de Puerto Vallarta y Ciudad Guzmán están obligados a verificar.</p>\n\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">OBLIGADOS</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">EXENTOS</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.obligadosYExentos\">\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.a }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.b }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\n\t\t\t\t<h5 class=\"mt-5\">Puntos de mejora para un vehículo no aprobado:</h5>\n\n\t\t\t\t<p class=\"mt-2\"><b>¿Tu vehiculó no aprobó la verificación?</b> <br />Conoce los puntos que se evalúan y que puedes mejorar:</p>\n\t\t\t\t<p class=\"mt-4\"><b>VerificaciónVerificación Visual:</b></p>\n\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">ELEMENTO POR EVALUAR</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">VEHICULOS GASOLINA <br />GAS NC O GAS LP</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">VEHICULOS DIESEL</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.revisionVisual\">\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.a }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.b }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.c }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p class=\"mt-4\"><b>Prueba de Emisiones:</b></p>\n\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">VEHICULOS DE GAS, <br />GAS LP O GAS NC</th>\n\t\t\t\t\t\t<th class=\"bg-orange\" style=\"width: 20%\">VEHICULOS DE DIESEL</th>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let prueba of this.rpruebaDeEmisiones\">\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.a }}</td>\n\t\t\t\t\t\t\t<td style=\"width: 20%\">{{ prueba.b }}</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t</table>\n\t\t\t\t<p class=\"mt-2\">En caso de rebasar los limites máximos permisibles, se te entregara una constancia técnica de rechazo.</p>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4\">\n\t\t\t\t<a routerLink=\"/contacto\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center\">CONTACTO</div>\n\t\t\t\t</a>\n\t\t\t\t<img src=\"assets/img/reservaahora.jpg\" alt=\"Imagen red crtv\" class=\"col-8 d-block p-0 mx-auto mt-3\" />\n\n\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a>\n\t\t\t\t<!-- <a routerLink=\"/reservas\">\n\t\t\t\t\t<div class=\"col-8 p-3 mx-auto bg-orange fc-white btn-principal btn-orange-hover text-center font-weight-bold\">Haz tu cita</div>\n\t\t\t\t</a> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/normas/normas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NormasComponent = /** @class */ (function () {
    function NormasComponent() {
        // public prubaFrenosDeServicio = [
        //   { desc: "Desequilibrio de ejes", tipo1: "De 15 a 30%", tipo2: "De 30 a 40%", tipo3: "Mayor a 40%"},
        //   { desc: "Eficacia livianos", tipo1: "De 60 a 70%", tipo2: "De 50 a 60%", tipo3: "Menor a 50%"},
        //   { desc: "Eficacia pesados", tipo1: "De 63 a 65%", tipo2: "De 60 a 63%", tipo3: "Menor a 60%"}
        // ]
        // public prubaFrenoDeMano = [
        //   { desc: "Livianos / Pesados", tipo1: "De 15 a 20%", tipo2: "Menor a 15%"}
        // ]
        // public prubaAmortiguadores = [
        //   { desc: "Desequilibrio ambos ejes", tipo1: "De 15 a 30%", tipo2: "De 30 a 50%", tipo3: "Mayor a 50%"},
        //   { desc: "Eficacia en primer eje", tipo1: "De 40 a 60%", tipo2: "De 15 a 40%", tipo3: "Menor a 15%"},
        //   { desc: "Eficacia en segundo eje", tipo1: "De 25 a 50%", tipo2: "De 15 a 25%", tipo3: "Menor a 15%"}
        // ] 
        this.obligadosYExentos = [
            { a: "Vehículos a gas", b: "Vehículos eléctricos" },
            { a: "Vehículos a gasolina", b: "Híbridos - eléctricos" },
            { a: "Vehículos a Diesel", b: "Con placas de antiguo" },
            { a: "", b: "Modelos de año en curso y año siguiente" },
            { a: "", b: "Motocicletas" },
            { a: "", b: "Con placas federales" },
        ];
        this.revisionVisual = [
            { a: "Sistema de escape", b: "Aplica", c: "Aplica" },
            { a: "Filtro del aire", b: "Aplica", c: "Aplica" },
            { a: "Fuga de aceite del motor", b: "Aplica", c: "Aplica" },
            { a: "Fuga de liquido de transmisión", b: "Aplica", c: "Aplica" },
            { a: "Fuga de liquido refrigerante", b: "Aplica", c: "Aplica" },
            { a: "Gobernador", b: "Aplica", c: "Aplica" },
            { a: "Mangueras de conexión a tanque de combustible", b: "Aplica", c: "No aplica" },
            { a: "Tapón del tanque de combustible", b: "Aplica", c: "Aplica" },
        ];
        this.rpruebaDeEmisiones = [
            { a: "Hidrocarburos (HC)", b: "Opacidad" },
            { a: "Monóxido de carbono (CO)", b: "" },
            { a: "Dióxido de carbono (CO2)", b: "" },
            { a: "Oxigeno (O2)", b: "" },
            { a: "TeOxidos de nitrógeno (NOx)*st", b: "" },
        ];
    }
    NormasComponent.prototype.ngOnInit = function () {
    };
    NormasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-normas',
            template: __webpack_require__("./src/app/componentes/links/normas/normas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/normas/normas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NormasComponent);
    return NormasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/plantas/plantas.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    width: 100%;\r\n    height: 250px;\r\n    margin: auto;\r\n}"

/***/ }),

/***/ "./src/app/componentes/links/plantas/plantas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"this.porcentajeAlturaMain\" class=\"animated heightIn slow\"></app-main>\n<section class=\"bg-lightgrey animated heightIn\">\n\t<div class=\"container p-0 pt-4 pb-2\">\n\t\t<div class=\"row d-flex flex-row-reverse\">\n\t\t\t<!-- <agm-map *ngIf=\"this.plantas.length > 0\" [latitude]=\"map_center.lat\" [longitude]=\"map_center.lng\" [zoom]=\"zoom\" [streetViewControl]=\"false\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\" [style]=\"this.altura_contenido | styleSanitizer\">\n                <agm-marker *ngFor=\"let plantaInfo of this.plantas\" [latitude]=\"plantaInfo.lat\" [longitude]=\"plantaInfo.lng\" (markerClick)=\"this.redirigir( '/plantas/' + plantaInfo.codigo )\" iconUrl='assets/img/gmaps.marker.icon.png'>\n                    <agm-info-window>\n                        <b>Planta {{ plantaInfo.nombre }}</b>\n                    </agm-info-window>\n                </agm-marker>\n            </agm-map> -->\n\t\t\t<!-- MAPA DE LAS PLANTAS -->\n\t\t\t<!-- <agm-map [latitude]=\"this.map_center.lat\" [longitude]=\"this.map_center.lng\" [zoom]=\"this.zoom\" [streetViewControl]=\"false\" class=\"col-xs-12 col-sm-7 col-md-7 col-lg-7\" [style]=\"this.altura_contenido | styleSanitizer\">\n                <agm-marker *ngFor=\"let plantaInfo of this.markers\" (markerClick)=\"this.redirigir('/plantas/'+plantaInfo.codigo)\" [title]=\"plantaInfo.nombre\" [latitude]=\"plantaInfo.lat\" [longitude]=\"plantaInfo.lng\" [iconUrl]='(plantaInfo.codigo == this.id_planta_seleccionada)? \"assets/img/gmaps.marker.icon.grande.png\" : \"assets/img/gmaps.marker.icon.png\"'></agm-marker>\n            </agm-map> -->\n\n\t\t\t<!-- MAPA DE LAS PLANTAS -->\n\t\t\t<div id=\"myMap\" class=\"col-xs-12 col-md-6 col-lg-6\" style=\"height: 400px\"></div>\n\t\t\t<!-- <input type=\"button\" value=\"Offset Map Center\" (onclick)=\"this.offsetMapCenter()\"/> -->\n\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 d-flex flex-column justify-content-around py-2\">\n\t\t\t\t<div class=\"pl-2 mt-3\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada != null\">\n\t\t\t\t\t\t<H1 class=\"fc-orange\" [innerHTML]=\"this.nombrePlanta\">{{ this.nombrePlanta }}></H1>\n\t\t\t\t\t\t<h3 class=\"fc-orange mt-5\">Horario de atención</h3>\n\t\t\t\t\t\t<p>Atención al público:</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada == null\">\n\t\t\t\t\t\t<h1 class=\"fc-orange mt-5\">Sucursales</h1>\n\t\t\t\t\t\t<h3>Sucursales México:</h3>\n\t\t\t\t\t\t<iframe src=\"https://www.google.com/maps/d/embed?mid=1EqKCJPP0gGh3iyx_O8hjxim0KEvl8Ww&ehbc=2E312F\" width=\"540\" height=\"380\"></iframe>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<p [innerHTML]=\"this.horarioPlanta\">{{ this.horarioPlanta }}</p>\n\t\t\t\t</div>\n\n\t\t\t\t<!-- <div class=\"mt-2\">\n                    <b>Seleccione en el mapa la planta de su preferencia, para acceder a más información.</b>\n                </div> -->\n\n\t\t\t\t<!-- <div class=\"mt-2\">\n\t\t\t\t</div> -->\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"detalles\">\n\t\t\t<div *ngFor=\"let plantaElegida of this.servicioPlantas.plantas\">\n\t\t\t\t<div #detalles *ngIf=\"plantaElegida.codigo == this.id_planta_seleccionada\">\n\t\t\t\t\t<div class=\"animated fadeIn fast\">\n\t\t\t\t\t\t<img [src]=\"plantaElegida.imagen\" alt=\"Imagen Planta\" class=\"w-100 mt-3\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"row mt-3 animated fadeIn\">\n\t\t\t\t\t\t<h3 class=\"fc-orange\">Centro {{ plantaElegida.nombre }}</h3>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row mt-2 mb-3 animated fadeIn\">\n\t\t\t\t\t\t<div class=\"col-xs-12 col-xs-8 col-md-8 col-lg-8 py-4 bg-white\" style=\"border-right: 4px solid #f65000\">\n\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t<b>Dirección:</b>\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<b>{{ plantaElegida.direccion }}</b>\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<b>{{ plantaElegida.ciudad }}</b>\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<br />\n\t\t\t\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada == 'colon'\">\n\t\t\t\t\t\t\t\t\t<p>El Centro de Verificación Responsable de Applus+ ubicado en Tlaquepaque, Jalisco , cuenta con una superficie de más de 7,265 metros cuadrados y con 10 líneas de revisión: una línea Universal para todo tipo de vehículos, 9 líneas para vehículos livianos. El Centro de verificación responsable cuenta con máquinas españolas de alta tecnología como: dinamómetros, analizadores de gases, opacímetros.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada == 'vallarta'\">\n\t\t\t\t\t\t\t\t\t<p>El Centro de Verificación Responsable de Applus+ ubicado en Puerto Vallarta, Jalisco, cuenta con una superficie de más de 4,986 metros cuadrados y con 5 líneas de revisión: 2 para revisiones en diésel y gasolina, y 3 líneas para vehículos livianos. El Centro de verificación responsable cuenta con máquinas norteamericana de alta tecnología como: dinamómetros, analizadores de gases, opacímetros.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada == 'guzman'\">\n\t\t\t\t\t\t\t\t\t<p>El Centro de Verificación Responsable de Applus+ ubicado en Ciudad Guzmán, Jalisco , cuenta con una superficie de 2,807mts cuadrados. Cuenta con 3 líneas de inspección: Dos líneas asignadas para vehículos ligeros y una línea para uso mixto, es decir vehículos ligeros y vehículos de servicio de carga. El Centro de verificación responsable cuenta con máquinas españolas de alta tecnología como: dinamómetros, analizadores de gases, opacímetros.</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div *ngIf=\"this.id_planta_seleccionada == 'el_salto'\">\n\t\t\t\t\t\t\t\t\t<p>PRÓXIMAMENTE</p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"col-xs-12 col-xs-4 col-md-4 col-lg-4\">\n\t\t\t\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\"><button routerLink=\"#\" class=\"col-7 py-3 mx-auto mt-2 font-weight-bold btn-principal btn-orange\">Haz tu cita</button></a>\n\n\t\t\t\t\t\t\t<button (click)=\"this.ComoLlegar()\" class=\"col-7 py-3 mx-auto mt-2 font-weight-bold btn-principal btn-orange\">Como llegar</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<div *ngIf=\"this.animacion_auto\" class=\"pantalla-completa d-flex flex-column justify-content-center align-items-center\">\n\t<img src=\"assets/img/auto-frente.png\" class=\"animated showUp\" />\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/links/plantas/plantas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__ = __webpack_require__("./src/app/servicios/plantas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantasComponent = /** @class */ (function () {
    function PlantasComponent(servicioPlantas, router, route) {
        this.servicioPlantas = servicioPlantas;
        this.router = router;
        this.route = route;
        this.animacion_auto = false;
        this.plantas = new Array();
        this.porcentajeAlturaMain = 0.4;
        this.map_center = {
            lat: 0,
            lng: 0
        };
        this.markers = [];
        this.zoom = 12;
    }
    PlantasComponent.prototype.GetMap = function (latitud, longitud) {
        this.map = new Microsoft.Maps.Map('#myMap', {
            // credentials: this._apikey,
            center: new Microsoft.Maps.Location(latitud, longitud),
            mapTypeId: Microsoft.Maps.MapTypeId.canvasLight
        });
        var locCol = new Microsoft.Maps.Location(20.610332, -103.398110);
        var locVall = new Microsoft.Maps.Location(20.690396, -105.233193);
        var locGuz = new Microsoft.Maps.Location(19.697483, -103.485771);
        var locEls = new Microsoft.Maps.Location(20.500933, -103.231784);
        // Add a pin to the map
        var pin = new Microsoft.Maps.Pushpin(locCol, { title: 'Planta Colón' });
        this.map.entities.push(pin);
        var pin = new Microsoft.Maps.Pushpin(locVall, { title: 'Planta Vallarta' });
        this.map.entities.push(pin);
        var pin = new Microsoft.Maps.Pushpin(locGuz, { title: 'Planta Guzmán' });
        this.map.entities.push(pin);
        var pin = new Microsoft.Maps.Pushpin(locEls, { title: 'Planta El Salto' });
        this.map.entities.push(pin);
        // Center the map on the location
        this.map.setView({ center: this.map.center, zoom: 13 });
    };
    //Durán en DB -2.192878,-79.812292
    //Portoviejo -1.076963, -80.505274
    PlantasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ventana = this.Ventana();
        this.altura_contenido = this.getStyle();
        this.route.params.subscribe(function (datos) {
            _this.id_planta_seleccionada = datos.id;
            _this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        });
        // console.log(this.id_planta_seleccionada);
        this.servicioPlantas.ObtenerListadoPlantas().subscribe(function (datos) {
            datos.forEach(function (planta) { _this.plantas.push(planta); });
            _this.plantas.forEach(function (planta) {
                var object = {
                    id: planta.id,
                    codigo: planta.codigo,
                    nombre: planta.nombre,
                    cod_empresa: planta.cod_empresa,
                    tipo: planta.tipo,
                    lat: Number(planta.lat),
                    lng: Number(planta.lng),
                    direccion: planta.direccion,
                    ciudad: planta.ciudad,
                    nro_contacto: planta.nro_contacto,
                    imagen: planta.imagen
                };
                _this.markers.push(object);
                // console.log("MARKERS", this.markers)
                _this.GetMap(_this.servicioPlantas.getPlanta(_this.id_planta_seleccionada).lat, _this.servicioPlantas.getPlanta(_this.id_planta_seleccionada).lng);
                //  this.centrarMapa();
            });
        }, function (error) { console.error(error); });
        // console.log('Planta');
        // console.log(this.id_planta_seleccionada);
        if (this.id_planta_seleccionada == 'colon') {
            this.nombrePlanta = 'CVR 0010 Colón';
        }
        else if (this.id_planta_seleccionada == 'vallarta') {
            this.nombrePlanta = 'CVR 0007 Vallarta';
        }
        else if (this.id_planta_seleccionada == 'guzman') {
            this.nombrePlanta = 'CVR 0012 Guzmán';
        }
        else if (this.id_planta_seleccionada == 'el_salto') {
            this.nombrePlanta = 'CVR 000 El Salto';
        }
        // console.log(this.horarioPlanta);
        if (this.id_planta_seleccionada == 'colon') {
            this.horarioPlanta = 'De Lunes a Viernes de 8:00 a 20:00hs <br>Sábados de 8:00 a 16:00hs';
        }
        else if (this.id_planta_seleccionada == 'vallarta') {
            this.horarioPlanta = 'De Lunes a Viernes de 9:00 a 18:00hs <br>Sábados de 9:00 a 14:00hs';
        }
        else if (this.id_planta_seleccionada == 'guzman') {
            this.horarioPlanta = 'De Lunes a Viernes de 9:00 a 18:00hs <br>Sábados de 9:00 a 14:00hs';
        }
        else if (this.id_planta_seleccionada == 'el_salto') {
            this.horarioPlanta = '<b>PROXIMAMENTE:</b> <br><b>APERTURA ESTIMADA ENERO 2023</b>';
        }
    };
    /** Ventana
     * Obtiene el tamaño de la ventana y lo guarda en la variable ventana
     */
    PlantasComponent.prototype.Ventana = function () {
        var ancho;
        var alto;
        if (!window.innerHeight) {
            ancho = (document.body.clientWidth);
            alto = (document.body.clientHeight);
        }
        else {
            ancho = (window.innerWidth);
            alto = (window.innerHeight);
        }
        return { ancho: ancho, alto: alto };
    };
    /** getStyle
     * Establece el alto del mapa según el alto de la ventana y el del main
     */
    PlantasComponent.prototype.getStyle = function () {
        var estilos = "";
        // REM => PIXEL
        //1rem * CantRems = CantPixels
        var pixeles_a_dejar_vacios = 2 * parseFloat(getComputedStyle(document.documentElement).fontSize);
        var alto = Math.round((this.ventana.alto - document.querySelector('header').scrollHeight) * (1 - this.porcentajeAlturaMain) - pixeles_a_dejar_vacios);
        //estilos += "height: "+ alto +"px;";
        estilos += "height: 300px;";
        return estilos;
    };
    /** getUserPosition
     * Obtiene la posición  actual del usuario y lo guarda en la variable user_location
     */
    PlantasComponent.prototype.getUserPosition = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.user_location = position.coords;
            });
        }
    };
    /** ComoLlegar
     * Abre una nueva ventana con la ruta desde la posición del cliente hacia la planta en google maps
     */
    PlantasComponent.prototype.ComoLlegar = function () {
        this.getUserPosition();
        var planta = this.servicioPlantas.getPlanta(this.id_planta_seleccionada);
        window.open("https://www.google.com.ar/maps/dir//" + planta.lat + "," + planta.lng + "/data=!3m1!4b1!4m2!4m1!3e0");
    };
    PlantasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-plantas',
            template: __webpack_require__("./src/app/componentes/links/plantas/plantas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/plantas/plantas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__["a" /* PlantasService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], PlantasComponent);
    return PlantasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/porque-nosotros/porque-nosotros.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/porque-nosotros/porque-nosotros.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  porque-nosotros works!\n</p>\n"

/***/ }),

/***/ "./src/app/componentes/links/porque-nosotros/porque-nosotros.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorqueNosotrosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PorqueNosotrosComponent = /** @class */ (function () {
    function PorqueNosotrosComponent() {
    }
    PorqueNosotrosComponent.prototype.ngOnInit = function () {
    };
    PorqueNosotrosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-porque-nosotros',
            template: __webpack_require__("./src/app/componentes/links/porque-nosotros/porque-nosotros.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/porque-nosotros/porque-nosotros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PorqueNosotrosComponent);
    return PorqueNosotrosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/quienes-somos/quienes-somos.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/quienes-somos/quienes-somos.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\"></app-main>\r\n<app-acerca-applus></app-acerca-applus>"

/***/ }),

/***/ "./src/app/componentes/links/quienes-somos/quienes-somos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuienesSomosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuienesSomosComponent = /** @class */ (function () {
    function QuienesSomosComponent() {
    }
    QuienesSomosComponent.prototype.ngOnInit = function () {
    };
    QuienesSomosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-quienes-somos',
            template: __webpack_require__("./src/app/componentes/links/quienes-somos/quienes-somos.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/quienes-somos/quienes-somos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuienesSomosComponent);
    return QuienesSomosComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/recomendaciones/recomendaciones.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/recomendaciones/recomendaciones.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<p class=\"fc-orange\">Requisitos ITV</p>\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Recomendaciones</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8\">\n\t\t\t\t<b>Consulte estos puntos antes de la verificación responsable.</b>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 mt-3\">\n\t\t\t\t<b class=\"fc-darkgrey\">1. Verificar el estado de los vidrios (ventanas laterales, portalón trasero) y parabrisas del vehículo:</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Que éstos no tengan trizaduras o quebraduras que puedan obstaculizar la visual del conductor, ni piquetes con aristas cortantes. Ningún vidrio pude contar con publicidad, pues dificulta la visual desde y hacia el interior del vehículo.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">2. Verificar estado de los cinturones de seguridad.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Que presenten un óptimo funcionamiento, especialmente su anclaje o hebilla de sujeción y fijación.</p>\n\t\t\t\t<b class=\"fc-darkgrey\">3. Verificar estado de focos y faroles de señalización, y luces de éstos:</b>\n\t\t\t\t<br />\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Focos y Faroles de Señalización: Verificar que las micas no presenten quebraduras o tampoco tengan objetos sobrepuestos.</li>\n\t\t\t\t\t<li>Luces: Verificar el encendido de las luces altas y bajas, de señalizadores izquierdo y derecho, así como luces de retroceso y tercera luz de freno. Y de acuerdo a la reglamentación vigente.</li>\n\t\t\t\t</ul>\n\t\t\t\t<b class=\"fc-darkgrey\">4. Verificar estado de Neumáticos y Llantas:</b>\n\t\t\t\t<br />\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Verificar que los neumáticos no presenten deformaciones ni cortes con telas a la vista, en ninguna de sus caras.</li>\n\t\t\t\t\t<li>Que las ruedas cuenten con todos los pernos de sujeción.</li>\n\t\t\t\t\t<li>Que los neumáticos no se encuentren redibujados.</li>\n\t\t\t\t\t<li>Las llantas no deben presentar fisuras, soldaduras ni deformaciones.</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<b class=\"fc-darkgrey\">5. Verificar puertas del Vehículo.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Verificar la correcta apertura y cierre de las puertas, desde adentro y fuera del vehículo.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">6. Verificar la existencia y estado de las Placas.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Verificar la correcta y fácil visualización de la matrícula del vehículo. Como así también el estado de la misma.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">7. Verificar estado de los Espejos Retrovisores.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Verificar correcto estado y que no presenten quebraduras o tampoco tengan objetos sobrepuestos. Como así también contar con los exigidos por la reglamentación vigente.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">8. Verificar documentación del vehículo.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Al momento de presentarse en la Estación se deben verificar que los datos de la documentación a continuación coincidan con los del vehículo:</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Matrícula del vehículo.</li>\n\t\t\t\t\t<li>Confirmación de cita.</li>\n\t\t\t\t\t<li>Comprobante de pago de VR.</li>\n\t\t\t\t</ul>\n\n\t\t\t\t<p>No se puede efectuar la inspección si el vehículo carece del permiso de circulación del vehículo emitido por el M.T.O.P. Si es reinspección, el cliente debe presentar el CAT anterior. Si la inspección anterior fue con resultado Condicional, y no presenta el CAT, debe presentar una denuncia policial por la falta del mismo. Si el resultado es Rechazado y no presenta el CAT, hacer una impresión de detalle de CAT. En caso de requerir factura, deberá presentar el RUT de la empresa o persona a nombre de quién necesite la emisión de la misma.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">9. Verificar estado del Limpiaparabrisas.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Verificar el correcto funcionamiento de los limpiaparabrisas.</p>\n\n\t\t\t\t<b class=\"fc-darkgrey\">10. Verifique el extintor y botiquín de primeros auxilios.</b>\n\t\t\t\t<br />\n\t\t\t\t<p>Verificar que el extintor cuente con la vigencia de uso estipulada por el fabricante. El botiquín debe contar con los elementos reglamentados y en vigencia.</p>\n\t\t\t</div> -->\n\t\t\t<!-- <div class=\"col-xs-12 col-md-4 col-sm-4 col-lg-4\">\n\t\t\t\t<div class=\"col-11 mx-auto fc-white rounded p-3\" style=\"min-height: 8rem\">\n\t\t\t\t\t<img src=\"assets/img/consejos-practicos.png\" style=\"width: 100%\" />\n\t\t\t\t</div>\n\t\t\t</div> -->\n\t\t</div>\n\n\t\t<h4 class=\"fc-orange pt-5\">Recomendacines para vehículos particulares y de uso intensivo:</h4>\n\t\t<div class=\"row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around mt-5\">\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/reparacion-01.png\" class=\"\" alt=\"Verificación responsable\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Verificación responsable</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">Afina tu vehículo.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/busqueda.png\" class=\"\" alt=\"Verificación extemporánea\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Verificación extemporánea</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">Revisa que tu vehículo <b>no tenga fugas de aceite o anticongelante.</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/techo-01.png\" class=\"\" alt=\"Reimpresión por robo o extravío\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Reimpresión por robo o extravío</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">Revisa que <b>el escape y catalizador</b> se encuentren en buenas condiciones.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col\">\n\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t<img src=\"assets/img/limpieza-01.png\" class=\"\" alt=\"Reimpresión por robo o extravío\" width=\"100\" height=\"100\" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t<!-- <h5 class=\"card-title\">Reimpresión por robo o extravío</h5> -->\n\n\t\t\t\t\t\t<p class=\"card-text\">Revisa que en tus llantas se encuentren <b>en buen estado y con la presión correcta.</b></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<a routerLink=\"/#\"> </a>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/recomendaciones/recomendaciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecomendacionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecomendacionesComponent = /** @class */ (function () {
    function RecomendacionesComponent() {
    }
    RecomendacionesComponent.prototype.ngOnInit = function () {
    };
    RecomendacionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recomendaciones',
            template: __webpack_require__("./src/app/componentes/links/recomendaciones/recomendaciones.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/recomendaciones/recomendaciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecomendacionesComponent);
    return RecomendacionesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"preloader\">\n\t<img src=\"assets/img/preloader.gif\" />\n</div>\n<div class=\"bg-orange fc-white text-center\">\n\t<h3>¡Atención!</h3>\n\t<h5 class=\"fs-125\">Por favor, verifique que la información a continuación sea correcta:</h5>\n</div>\n<div class=\"bg-orange-transp fc-white text-center mx-auto p-5\" style=\"width: fit-content; max-width: 90%\">\n\t<div class=\"row text-left\">\n\t\t<div class=\"col-12\">\n\t\t\t<div class=\"col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start\">\n\t\t\t\t<strong>Datos Cita</strong>\n\t\t\t\t<ul style=\"padding-inline-start: 1.5rem\">\n\t\t\t\t\t<li><b>Fecha y Hora: </b> {{ this.datosReserva.turno.fecha }} - {{ this.datosReserva.turno.hora }}</li>\n\t\t\t\t\t<li><b>Centro: </b>{{ this.datosReserva.turno.planta.nombre }}</li>\n\t\t\t\t\t<li><b>Placa del vehículo: </b>{{ this.datosReserva.vehiculo.placa }}</li>\n\t\t\t\t\t<li><b>Tipo de vehículo: </b>{{ this.datosReserva.vehiculo.tipo_vehiculo.descripcion }}</li>\n\t\t\t\t\t<li><b>Cliente: </b> {{ this.datosReserva.cliente.nombre }}, {{ this.datosReserva.cliente.apellido }} ({{ this.datosReserva.cliente.tipo_documento.descripcion }}: {{ this.datosReserva.cliente.numero_documento }})</li>\n\t\t\t\t\t<li><b>Dirección: </b> {{ this.datosReserva.cliente.domicilio }} - {{ this.datosReserva.cliente.ciudad }} - {{ this.datosReserva.cliente.canton.descripcion | uppercase }}</li>\n\t\t\t\t\t<li><b>Teléfono: </b> {{ this.datosReserva.cliente.telefono }}</li>\n\t\t\t\t\t<li><b>Mail: </b> {{ this.datosReserva.cliente.email }}</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-6 col-sm-12 col-lg-6 col-xl-6 d-flex flex-column justify-content-start\">\n\t\t\t\t<div class=\"col-12 col-sm-12 text-left\"><strong class=\"fs-125\">Total a pagar:</strong></div>\n\t\t\t\t<div class=\"col-12 col-sm-12 text-left\">Verificación Vehicular : {{ this.datosReserva.tarifa.monto | currency }}</div>\n\t\t\t\t<div class=\"col-12 col-sm-12 text-left\">Adhesivo VR: {{ this.datosReserva.tarifa.oblea | currency }}</div>\n\t\t\t\t<div class=\"col-12 col-sm-12 text-left\">\n\t\t\t\t\t<strong class=\"fs-125\">Total: {{ this.datosReserva.tarifa.montoTotal | currency }}</strong>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row text-left\">\n\t\t<div class=\"col-12\">\n\t\t\t<p><strong>¿Cómo conoces del Centro de Verificación de Applus?</strong> (Marcar la opción correcta)</p>\n\t\t</div>\n\t\t<div class=\"col-12 row\">\n\t\t\t<div class=\"col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-flex flex-column justify-content-start\">\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"7\" label=\"Búsqueda en Google\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"6\" label=\"Facebook / Instagram\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"1\" label=\"Por Proximidad\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-flex flex-column\">\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"3\" label=\"Por Publicidad en la calle\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"2\" label=\"Por Recomendación (Referidos)\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"8\" label=\"Pre-revisión Gratis\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t</div>\n\t\t\t<div class=\"col-12 col-md-4 col-sm-4 col-lg-4 col-xl-4 d-flex flex-column\">\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"9\" label=\"Publicidad en buses\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"10\" label=\"Radios\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t\t<p-radioButton name=\"como_nos_conocio\" value=\"11\" label=\"Ejecutivo comercial\" [(ngModel)]=\"this.datosReserva.como_nos_conocio\"></p-radioButton>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"d-flex flex-column justify-content-center align-items-center mt-3\">\n\t<div><re-captcha (resolved)=\"this.captchaResolved($event)\" [siteKey]=\"this.googleKey\"></re-captcha></div>\n</div>\n<div class=\"d-flex flex-column justify-content-center align-items-center mt-3\">\n\t<button class=\"btn btn-principal btn-orange-hover\" style=\"width: fit-content\" (click)=\"this.confirmar()\">CONFIRMAR CITA</button>\n\t<div class=\"pointer mt-3\" style=\"width: fit-content\" (click)=\"this.pasoAtras.emit(true)\">Volver atrás</div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmarTurnoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_captcha_service__ = __webpack_require__("./src/app/servicios/captcha.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ConfirmarTurnoComponent = /** @class */ (function () {
    function ConfirmarTurnoComponent(req, captchaService) {
        this.req = req;
        this.captchaService = captchaService;
        this.preloader = false;
        this.googleKey = null;
        this.error_a_enviar = new Array(); /*
        public montoRTV = 0;
        public montoOblea = 0;
        public montoTotal = 0;*/
        this.confirmado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.googleKey = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].googleSiteKey;
    }
    ConfirmarTurnoComponent.prototype.ngOnInit = function () {
        this.obtenerTarifa();
    };
    ConfirmarTurnoComponent.prototype.obtenerTarifa = function () {
        var _this = this;
        this.datosReserva.tarifa = new __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["c" /* Tarifa */]();
        var params = {
            tipo_vehiculo: this.datosReserva.vehiculo.tipo_vehiculo.codigo,
            patente: this.datosReserva.vehiculo.placa
        };
        this.preloader = true;
        this.req.get("reservas.get_tarifa.php", params).subscribe(function (exito) {
            _this.datosReserva.tarifa = exito;
            _this.preloader = false;
        }, function (error) {
            _this.preloader = false;
            _this.error_a_enviar = [];
            _this.error_a_enviar.push({ severity: "error", summary: "Error al generar tarifa", detail: "Tuvimos un error al generar la tarifa, por favor vuelva a intentarlo luego." });
            _this.errores.emit(_this.error_a_enviar);
            _this.pasoAtras.emit();
        });
    };
    ConfirmarTurnoComponent.prototype.captchaResolved = function (resolved) {
        this.captchaService.setCaptchaToken(resolved);
    };
    ConfirmarTurnoComponent.prototype.confirmar = function () {
        this.error_a_enviar = [];
        if (this.datosReserva.como_nos_conocio == null) {
            this.error_a_enviar.push({ severity: "info", summary: "", detail: "Por favor, indique la forma en la que conoció nuestro Centro de Verificación." });
            this.errores.emit(this.error_a_enviar);
            return;
        }
        this.confirmado.emit(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["b" /* Reserva */])
    ], ConfirmarTurnoComponent.prototype, "datosReserva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ConfirmarTurnoComponent.prototype, "confirmado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ConfirmarTurnoComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ConfirmarTurnoComponent.prototype, "errores", void 0);
    ConfirmarTurnoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-confirmar-turno',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/confirmar-turno/confirmar-turno.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_3__servicios_captcha_service__["a" /* CaptchaService */]])
    ], ConfirmarTurnoComponent);
    return ConfirmarTurnoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"preloader\">\n    <img src=\"assets/img/preloader.gif\">\n</div>\n<h3 class=\"fc-white text-center\">Datos del titular</h3>\n<div class=\"form-group row\">\n    <label for=\"nombre\" class=\"col-sm-3 col-form-label font-weight-bold\">Tipo de identificación</label>\n    <div class=\"col-sm-3\">\n        <select class=\"form-control p-1 rounded-0\" name=\"tipo_documento\" [(ngModel)]=\"this.cliente.tipo_documento.codigo\" (change)=\"this.seleccionarTipoDocumento()\">\n          <option *ngFor=\"let tipo of this.tipos_documento\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n      </select>\n    </div>\n    <label for=\"cedula\" class=\"col-sm-2 col-form-label font-weight-bold\">Nro. de Cédula</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" autocomplete=\"on\" name=\"cedula\" placeholder=\"\" [(ngModel)]=\"this.cliente.numero_documento\" (change)=\"this.cliente.numero_documento = this.cliente.numero_documento.toString().split(' ').join('').toUpperCase()\">\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"nombre\" class=\"col-sm-3 col-form-label font-weight-bold\">Nombre / Razón social</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" autocomplete='given-name' class=\"form-control-plaintext p-1 bg-white\" name=\"nombre\" placeholder=\"\" [(ngModel)]=\"this.cliente.nombre\" (change)=\"this.cliente.nombre = this.cliente.nombre.trim().toUpperCase().replace('/#|$|%|\\'/gi','')\"\n            maxlength=\"20\">\n    </div>\n    <label for=\"apellido\" class=\"col-sm-2 col-form-label font-weight-bold\">Apellido</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" autocomplete='family-name' class=\"form-control-plaintext p-1 bg-white\" name=\"apellido\" placeholder=\"\" [(ngModel)]=\"this.cliente.apellido\" (change)=\"this.cliente.apellido = this.cliente.apellido.trim().toUpperCase().replace('/#|$|%|\\'/gi','')\"\n            maxlength=\"19\">\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"telefono\" class=\"col-sm-3 col-form-label font-weight-bold\">Telefono</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" autocomplete='tel-national' class=\"form-control-plaintext p-1 bg-white\" name=\"telefono\" placeholder=\"\" [(ngModel)]=\"this.cliente.telefono\" (change)=\"this.cliente.telefono = this.cliente.telefono.split(' ').join('').replace('/#|$|%|\\'/gi','')\"\n            maxlength=\"15\">\n    </div>\n    <label for=\"email\" class=\"col-sm-2 col-form-label font-weight-bold\">Email</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" autocomplete='email' class=\"form-control-plaintext p-1 bg-white\" name=\"email\" placeholder=\"\" [(ngModel)]=\"this.cliente.email\" (change)=\"this.cliente.email = this.cliente.email.trim()\" maxlength=\"40\">\n\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"direccion\" class=\"col-sm-3 col-form-label font-weight-bold\">Dirección</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" autocomplete='address-line1' class=\"form-control-plaintext p-1 bg-white\" name=\"direccion\" placeholder=\"\" [(ngModel)]=\"this.cliente.domicilio\" (change)=\"this.cliente.domicilio = this.cliente.domicilio.trim().toUpperCase().replace('/#|$|%|\\'/gi','')\"\n            maxlength=\"40\">\n    </div>\n    <label for=\"ciudad\" class=\"col-sm-2 col-form-label font-weight-bold\">Ciudad</label>\n    <div class=\"col-sm-3\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" name=\"ciudad\" placeholder=\"\" [(ngModel)]=\"this.cliente.ciudad\" (change)=\"this.cliente.ciudad = this.cliente.ciudad.trim().toUpperCase().replace('/#|$|%|\\'/gi','')\" maxlength=\"20\">\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"canton\" class=\"col-sm-3 col-form-label font-weight-bold\">Cantón</label>\n    <div class=\"col-sm-3\">\n        <!-- <input type=\"text\" autocomplete=\"address-level1\" class=\"form-control-plaintext p-1 bg-white\" name=\"canton\" placeholder=\"\" [(ngModel)]=\"this.cliente.canton\" maxlength=\"50\"> -->\n        <p-dropdown class=\"cantones\" [autoWidth]=\"false\" [options]=\"this.cantones_select\" [(ngModel)]=\"this.cliente.canton\" [filter]=\"true\"></p-dropdown>\n\n    </div>\n</div>\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n    <div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.pasoAtras.emit(this.cliente)\"></div>\n    <div class=\"triangulo_der pointer border-color-orange\" (click)=\"this.seleccionarCliente()\"></div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosClienteComponent = /** @class */ (function () {
    function DatosClienteComponent(validaciones, http) {
        var _this = this;
        this.validaciones = validaciones;
        this.http = http;
        this.mensaje_error = new Array();
        this.preloader = false;
        this.tipos_documento = [
            { codigo: "C", descripcion: "CÉDULA" },
            { codigo: "R", descripcion: "RUC" },
            { codigo: "E", descripcion: "EXT" }
        ];
        this.cantones = [
            { codigo: "1", descripcion: "Quevedo" },
            { codigo: "2", descripcion: "Babahoyo" },
            { codigo: "3", descripcion: "Buena Fe" },
        ];
        this.cantones_select = [{ label: "Seleccione un cantón", value: null }];
        this.clienteSeleccionado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.preloader = true;
        this.http.get("plantas.listado_de_cantones.php").subscribe(function (cantones) {
            _this.cantones = cantones;
            _this.cantones.forEach(function (element) {
                _this.cantones_select.push({
                    label: element.descripcion,
                    value: element
                });
            });
            _this.preloader = false;
        }, function (error) {
            console.log(error);
            alert("Error al obtener cantones");
            _this.preloader = false;
        });
    }
    DatosClienteComponent.prototype.ngOnInit = function () {
    };
    DatosClienteComponent.prototype.corregirCaracteresEspeciales = function (dato) {
        var caracteres_permitidos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚáéíóú";
        return dato.trim().toUpperCase();
    };
    DatosClienteComponent.prototype.seleccionarTipoDocumento = function () {
        var _this = this;
        this.tipos_documento.forEach(function (tipo) {
            if (tipo.codigo == _this.cliente.tipo_documento.codigo) {
                _this.cliente.tipo_documento.descripcion = tipo.descripcion;
            }
        }, this);
    };
    DatosClienteComponent.prototype.seleccionarCliente = function () {
        // while(this.cliente.numero_documento.length < 13){
        //   this.cliente.numero_documento = "0"+this.cliente.numero_documento;
        // }
        if (this.cliente.tipo_documento.codigo == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Tipo de documento', detail: 'Debe seleccionar un tipo de documento' });
        }
        if (this.cliente.tipo_documento.codigo == 'C') {
            //Valido la cédula
            if (this.cliente.numero_documento == null) {
                this.mensaje_error.push({ severity: 'error', summary: 'Error en Cédula', detail: 'Debe ingresar su número de cédula' });
            }
            else if (!this.validaciones.validarCedulaEcuatoriana(this.cliente.numero_documento.toString())) {
                this.mensaje_error.push({ severity: 'error', summary: 'Error en Cédula', detail: 'La cédula ingresada debe ser válida' });
            }
        }
        else if (this.cliente.tipo_documento.codigo == 'R') {
            //Valido el ruc
            if (this.cliente.numero_documento == null) {
                this.mensaje_error.push({ severity: 'error', summary: 'Error en RUC', detail: 'Debe ingresar un número de RUC' });
            }
            else if (!this.validaciones.validarRUCEcuatoriana(this.cliente.numero_documento.toString())) {
                this.mensaje_error.push({ severity: 'error', summary: 'Error en RUC', detail: 'El RUC ingresado debe ser válido' });
            }
        }
        else if (this.cliente.tipo_documento.codigo == 'E') {
            //Verifico que se haya ingresado un documento extranjero
            if (this.cliente.numero_documento == null || this.cliente.numero_documento == '') {
                this.mensaje_error.push({ severity: 'error', summary: 'Error identificacion', detail: 'Debe ingresar un número de identificación' });
            }
            else if (this.cliente.numero_documento.length > 20) {
                this.mensaje_error.push({ severity: 'error', summary: 'Error identificacion', detail: 'El número de identificación no puede superar los 20 dígitos' });
            }
        }
        if (this.cliente.nombre == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Nombre', detail: 'Debe ingresar su nombre<br>' });
        }
        if (this.cliente.apellido == null || this.cliente.apellido == '') {
            this.cliente.apellido == '.';
        }
        if (this.cliente.telefono == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Teléfono', detail: 'Debe ingresar su teléfono' });
        }
        if (!this.validaciones.validarMail(this.cliente.email)) {
            this.mensaje_error.push({ severity: 'error', summary: 'Email', detail: 'Debe ingresar un email válido' });
        }
        if (this.cliente.domicilio == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Dirección', detail: 'Debe ingresar su domicilio' });
        }
        if (this.cliente.ciudad == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Ciudad', detail: 'Debe ingresar su ciudad<br>Hola' });
        }
        if (this.cliente.canton.codigo == null) {
            this.mensaje_error.push({ severity: 'error', summary: 'Cantón', detail: 'Debe ingresar su cantón' });
        }
        if (this.mensaje_error.length > 0) {
            this.errores.emit(this.mensaje_error);
            this.mensaje_error = [];
        }
        else {
            this.clienteSeleccionado.emit(this.cliente);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["a" /* Cliente */])
    ], DatosClienteComponent.prototype, "cliente", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosClienteComponent.prototype, "clienteSeleccionado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosClienteComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosClienteComponent.prototype, "errores", void 0);
    DatosClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datos-cliente',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-cliente/datos-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__["a" /* ValidacionesService */], __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__["a" /* RequestService */]])
    ], DatosClienteComponent);
    return DatosClienteComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"preloader\">\n    <img src=\"assets/img/preloader.gif\">\n</div>\n<h3 class=\"fc-white text-center\">Datos del vehiculo</h3>\n<div class=\"form-group row mt-3\">\n    <label for=\"placa\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">PLACA DEL VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" name=\"placa\" placeholder=\"AAA1234\" [(ngModel)]=\"this.vehiculo.placa\" (change)=\"this.vehiculo.placa = this.vehiculo.placa.split(' ').join('').toUpperCase()\">\n    </div>\n</div>\n<div class=\"form-group row mt-3\">\n    <label for=\"vin\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">CHASIS DEL VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" name=\"vin\" placeholder=\"\" [(ngModel)]=\"this.vehiculo.vin\" (change)=\"this.vehiculo.vin = this.vehiculo.vin.split(' ').join('').toUpperCase()\">\n    </div>\n</div>\n<div class=\"form-group row mt-3\">\n    <label for=\"anio\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">AÑO DEL VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <select class=\"form-control p-1 rounded-0\" name=\"anio\" [(ngModel)]=\"this.vehiculo.anio\" (change)=\"this.seleccionarModeloVehiculo()\">\n            <option *ngFor=\"let anio of this.anios\" [value]=\"anio\">{{ anio }}</option>\n          </select>\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"marca\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">MARCA DEL VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" name=\"marca\" placeholder=\"\" [(ngModel)]=\"this.vehiculo.marca.descripcion\" (change)=\"this.vehiculo.marca.descripcion = this.vehiculo.marca.descripcion.trim().toUpperCase()\" maxlength=\"40\">\n        <!-- <select class=\"form-control p-1 rounded-0\" name=\"marca\" [(ngModel)]=\"this.vehiculo.marca.codigo\" (change)=\"this.seleccionarMarcaVehiculo()\">\n          <option *ngFor=\"let tipo of this.marcas\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n        </select> -->\n    </div>\n</div>\n<div class=\"form-group row\">\n    <label for=\"modelo\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">MODELO DEL VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <input type=\"text\" class=\"form-control-plaintext p-1 bg-white\" name=\"marca\" placeholder=\"\" [(ngModel)]=\"this.vehiculo.modelo.descripcion\" (change)=\"this.vehiculo.modelo.descripcion = this.vehiculo.modelo.descripcion.trim().toUpperCase()\" maxlength=\"40\">\n        <!-- <select class=\"form-control p-1 rounded-0\" name=\"modelo\" [(ngModel)]=\"this.vehiculo.modelo.codigo\" (change)=\"this.seleccionarModeloVehiculo()\">\n          <option *ngFor=\"let tipo of this.modelos\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n        </select> -->\n    </div>\n</div>\n<!-- <div class=\"form-group row\">\n    <label for=\"tipo_vehiculo\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">TIPO DE VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <select class=\"form-control p-1 rounded-0\" name=\"tipo_vehiculo\" [(ngModel)]=\"this.vehiculo.tipo_vehiculo.codigo\" (change)=\"this.seleccionarTipoVehiculo()\">\n          <option *ngFor=\"let tipo of this.tipos_vehiculos\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n        </select>\n    </div>\n</div> -->\n<!-- TIPO ESPECIE -->\n<div class=\"form-group row\">\n    <label for=\"tipo_vehiculo\" class=\"col-sm-4 offset-sm-1 col-form-label text-left font-weight-bold\">TIPO DE VEHICULO</label>\n    <div class=\"col-sm-6\">\n        <select class=\"form-control p-1 rounded-0\" name=\"tipo_vehiculo\" [(ngModel)]=\"this.vehiculo.tipo_vehiculo.codigo\" (change)=\"this.seleccionarTipoVehiculo()\">\n                <option *ngFor=\"let tipo of this.tipos_vehiculos\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n        </select>\n    </div>\n</div>\n<!-- <div class=\"form-group row\">\n    <label for=\"tipo_combustible\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">TIPO DE DESTINO</label>\n    <div class=\"col-sm-6\">\n        <select class=\"form-control p-1 rounded-0\" name=\"tipo_destino\" [(ngModel)]=\"this.vehiculo.tipo_destino.codigo\" (change)=\"this.seleccionarTipoDestino()\">\n            <option *ngFor=\"let tipo of this.tipos_destino\" [value]=\"tipo.codigo\">{{ tipo.descripcion }}</option>\n        </select>\n    </div>\n</div> -->\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n    <div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.pasoAtras.emit(this.vehiculo)\"></div>\n    <div class=\"triangulo_der pointer border-color-orange\" (click)=\"this.vehiculoCargado()\"></div>\n</div>"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatosVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatosVehiculoComponent = /** @class */ (function () {
    function DatosVehiculoComponent(validaciones, http) {
        this.validaciones = validaciones;
        this.http = http;
        this.mensaje_error = new Array();
        this.preloader = false;
        this.tipos_vehiculos = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.tipos_especie = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.tipos_destino = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.marcas = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.modelos = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.vehiculoSeleccionado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.anios = new Array();
    }
    DatosVehiculoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.preloader = true;
        this.tipos_vehiculos = [{ codigo: '1', descripcion: "Seleccione" }];
        this.tipos_especie = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.tipos_destino = [{ codigo: '1', descripcion: "Seleccione" }];
        this.marcas = [{ codigo: '1', descripcion: "" }];
        this.modelos = [{ codigo: '1', descripcion: "" }];
        this.vehiculo.tipo_vehiculo.codigo = '1';
        this.vehiculo.tipo_especie.codigo = '-1';
        this.vehiculo.tipo_destino.codigo = '1';
        this.vehiculo.modelo.codigo = '1';
        this.vehiculo.marca.codigo = '1';
        this.preloader = true;
        //EL TIPO DE VEHICULO ES EL TIPOESPECIE!
        this.http.get("reservas.get_tipo_vehiculo.php").subscribe(function (exito) {
            exito.forEach(function (element) {
                _this.tipos_vehiculos.push(element);
            }, _this);
            _this.preloader = false;
        }, function (error) {
            console.log(error);
            _this.mensaje_error = [];
            _this.mensaje_error.push({ severity: "error", summary: "Error", detail: "Ocurrió un error. Vuelva a intentar luego." });
            _this.preloader = false;
        });
        /**Cargo el array de años para el seleccionador */
        var año = new Date();
        var año_actual = año.getFullYear();
        año = año.getFullYear() + 1;
        while (año != (año_actual - 200)) {
            this.anios.push(año);
            año = año - 1;
            if (año == 1900) {
                break;
            }
        }
    };
    DatosVehiculoComponent.prototype.seleccionarMarcaVehiculo = function () {
        var _this = this;
        this.vehiculo.modelo.codigo = '-1';
        this.modelos = [{ codigo: '-1', descripcion: "" }];
        this.preloader = true;
        this.marcas.forEach(function (tipo) {
            if (tipo.codigo == _this.vehiculo.marca.codigo) {
                _this.vehiculo.marca.descripcion = tipo.descripcion;
                var parametros = {
                    marca: tipo.codigo
                };
                _this.http.get("reservas.get_modelos.php", parametros).subscribe(function (exito) {
                    exito.forEach(function (element) {
                        _this.modelos.push(element);
                    }, _this);
                    _this.preloader = false;
                }, function (error) {
                    console.log(error);
                    _this.mensaje_error = [];
                    _this.mensaje_error.push({ severity: "error", summary: "Error", detail: "Ocurrió un error. Vuelva a intentar luego." });
                    _this.preloader = false;
                });
            }
        }, this);
    };
    DatosVehiculoComponent.prototype.seleccionarModeloVehiculo = function () {
        var _this = this;
        this.modelos.forEach(function (tipo) {
            if (tipo.codigo == _this.vehiculo.modelo.codigo) {
                _this.vehiculo.modelo.descripcion = tipo.descripcion;
            }
        }, this);
    };
    DatosVehiculoComponent.prototype.seleccionarTipoVehiculo = function () {
        var _this = this;
        this.vehiculo.tipo_especie.codigo = '1';
        this.vehiculo.tipo_destino.codigo = '1';
        this.tipos_especie = [{ codigo: '1', descripcion: "" }];
        this.tipos_destino = [{ codigo: '1', descripcion: "" }];
        this.tipos_vehiculos.forEach(function (tipo) {
            if (tipo.codigo == _this.vehiculo.tipo_vehiculo.codigo) {
                _this.vehiculo.tipo_vehiculo.descripcion = tipo.descripcion;
                /*
                let parametros = {
                  tipo_vehiculo : tipo.codigo
                }
                this.preloader = true;
                this.http.get("reservas.get_tipo_espe_vehiculo.php",parametros).subscribe(
                  exito => {
                    (exito as Tipo[]).forEach(element => {
                      this.tipos_especie.push(element);
                    },this);
                    this.preloader = false;
                  },
                  error => {
                    console.log(error);
                    this.mensaje_error = [];
                    this.mensaje_error.push({severity:"error", summary:"Error", detail:"Ocurrió un error. Vuelva a intentar luego."});
                    this.preloader = false;
                  }
                )*/
            }
        }, this);
    };
    DatosVehiculoComponent.prototype.seleccionarTipoEspecie = function () {
        var _this = this;
        this.vehiculo.tipo_destino.codigo = '-1';
        this.tipos_destino = [{ codigo: '-1', descripcion: "Seleccione" }];
        this.tipos_especie.forEach(function (tipo) {
            if (tipo.codigo == _this.vehiculo.tipo_especie.codigo) {
                _this.vehiculo.tipo_especie.descripcion = tipo.descripcion;
                var parametros = {
                    tipo_especie: tipo.codigo
                };
                /*
                this.preloader = true;
                this.http.get("reservas.get_tipo_destino_vehiculo.php",parametros).subscribe(
                  exito => {
                    (exito as Tipo[]).forEach(element => {
                      this.tipos_destino.push(element);
                    },this);
                    this.preloader = false;
                  },
                  error => {
                    console.log(error);
                    this.mensaje_error = [];
                    this.mensaje_error.push({severity:"error", summary:"Error", detail:"Ocurrió un error. Vuelva a intentar luego."});
                    this.preloader = false;
                  }
                )
                */
            }
        }, this);
    };
    DatosVehiculoComponent.prototype.seleccionarTipoDestino = function () {
        var _this = this;
        this.tipos_destino.forEach(function (tipo) {
            if (tipo.codigo == _this.vehiculo.tipo_destino.codigo) {
                _this.vehiculo.tipo_destino.descripcion = tipo.descripcion;
            }
        }, this);
    };
    DatosVehiculoComponent.prototype.vehiculoCargado = function () {
        var _this = this;
        if (this.vehiculo.placa == null || !this.validaciones.validaPatente(this.vehiculo.placa)) {
            this.mensaje_error.push({ severity: 'error', summary: 'Error en placa', detail: 'La placa debe respetar el formato de tres letras y cuatro números.' });
        }
        if (this.vehiculo.vin == null || this.vehiculo.vin == '') {
            this.mensaje_error.push({ severity: 'error', summary: 'Error en VIN', detail: 'Debe ingresarse el numero de VIN del vehìculo.' });
        }
        if (this.vehiculo.anio == null || this.vehiculo.anio == '') {
            this.mensaje_error.push({ severity: 'error', summary: 'Error en año', detail: 'Debe seleccionar el año de fabricación del vehìculo.' });
        }
        if (this.vehiculo.marca.descripcion == null || this.vehiculo.marca.descripcion == "") {
            this.mensaje_error.push({ severity: 'error', summary: 'Marca de vehículo', detail: 'Debe seleccionar una marca de vehículo' });
        }
        if (this.vehiculo.modelo.descripcion == null || this.vehiculo.modelo.descripcion == "") {
            this.mensaje_error.push({ severity: 'error', summary: 'Modelo de vehículo', detail: 'Debe seleccionar un modelo de vehículo' });
        }
        // if(this.vehiculo.tipo_vehiculo.codigo == null || parseInt(this.vehiculo.tipo_vehiculo.codigo) < 0){
        //   this.mensaje_error.push({severity:'error', summary:'Tipo de vehículo', detail:'Debe seleccionar un tipo de vehículo'});
        // }
        if (this.vehiculo.tipo_especie.codigo == null || parseInt(this.vehiculo.tipo_especie.codigo) < 0) {
            this.mensaje_error.push({ severity: 'error', summary: 'Clase de vehículo', detail: 'Debe seleccionar una clase de vehículo' });
        }
        // if(this.vehiculo.tipo_destino.codigo == null || parseInt(this.vehiculo.tipo_destino.codigo) < 0){
        //   this.mensaje_error.push({severity:'error', summary:'Tipo de destino', detail:'Debe seleccionar un tipo de destino'});
        // }
        if (this.mensaje_error.length > 0) {
            this.errores.emit(this.mensaje_error);
            this.mensaje_error = [];
        }
        else {
            //Todo validado, verifico que no tenga turno
            this.preloader = true;
            var params = { patente: this.vehiculo.placa };
            this.http.get("reservas.consultar_patente.php", params).subscribe(function (exito) {
                if (exito == true) {
                    //Tiene turno
                    _this.mensaje_error.push({ severity: 'error', summary: 'Turno vigente', detail: 'Este vehículo ya tiene un turno vigente.' });
                    _this.errores.emit(_this.mensaje_error);
                    _this.mensaje_error = [];
                }
                else {
                    _this.vehiculoSeleccionado.emit(_this.vehiculo);
                }
                _this.preloader = false;
            }, function (error) {
                _this.mensaje_error.push({ severity: 'error', summary: 'Turno vigente', detail: 'No se pudo consultar la vigencia de turnos para la placa seleccionada, por favor vuelva a intentarlo luego.' });
                _this.errores.emit(_this.mensaje_error);
                _this.mensaje_error = [];
                _this.preloader = false;
            });
        }
    };
    DatosVehiculoComponent.prototype.GetTipoVehiculo = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["e" /* Vehiculo */])
    ], DatosVehiculoComponent.prototype, "vehiculo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosVehiculoComponent.prototype, "vehiculoSeleccionado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosVehiculoComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], DatosVehiculoComponent.prototype, "errores", void 0);
    DatosVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datos-vehiculo',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/datos-vehiculo/datos-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_validaciones_service__["a" /* ValidacionesService */], __WEBPACK_IMPORTED_MODULE_3__servicios_request_service__["a" /* RequestService */]])
    ], DatosVehiculoComponent);
    return DatosVehiculoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"fc-white text-center\">Pago</h3>\n<div class=\"d-flex  flex-column justify-content-around align-items-center\">\n    <!-- <div class=\"btn-principal btn-orange-hover p-3 my-4 fs-15\" style=\"width: fit-content\" (click)=\"this.siguiente.emit(true)\">Realizar pago online</div> -->\n    <div class=\"btn-principal btn-orange-hover p-3 my-4 fs-15\" style=\"width: fit-content\" (click)=\"this.siguiente.emit(true)\">Pagar en Produbanco</div>\n</div>\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n    <div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.pasoAtras.emit(true)\"></div>\n    <!-- <div class=\"triangulo_der pointer border-color-orange\" (click)=\"this.pasoAtras.emit(true)\"></div> -->\n</div>"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeleccionarPagoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeleccionarPagoComponent = /** @class */ (function () {
    function SeleccionarPagoComponent() {
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.siguiente = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SeleccionarPagoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["b" /* Reserva */])
    ], SeleccionarPagoComponent.prototype, "datosReserva", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SeleccionarPagoComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SeleccionarPagoComponent.prototype, "siguiente", void 0);
    SeleccionarPagoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seleccionar-pago',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/seleccionar-pago/seleccionar-pago.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeleccionarPagoComponent);
    return SeleccionarPagoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"fc-white text-center\">Seleccione una ubicación</h3>\n<div *ngFor=\"let planta of this.plantas\" class=\"text-center my-4\">\n    <button class=\"btn btn-principal btn-orange-hover m-auto\" (click)=\"this.plantaSeleccionada.emit(planta)\">{{ planta.nombre }}</button>\n</div>\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n</div>"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorDePlantaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectorDePlantaComponent = /** @class */ (function () {
    function SelectorDePlantaComponent() {
        this.plantaSeleccionada = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SelectorDePlantaComponent.prototype, "plantas", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectorDePlantaComponent.prototype, "plantaSeleccionada", void 0);
    SelectorDePlantaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selector-de-planta',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-planta/selector-de-planta.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SelectorDePlantaComponent);
    return SelectorDePlantaComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"fc-white text-center\">Reserva de turno</h3>\n<div class=\"mt-5\"></div>\n<div class=\"clearfix\">\n\t<div class=\"float-md-left float-lg-left float-xl-left col-sm-6 col-md-6 col-lg-6 p-0\">\n\t\t<div class=\"form-group row\">\n\t\t\t<label for=\"tipo_combustible\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">Fecha</label>\n\t\t\t<div class=\"col-sm-6 p-0\">\n\t\t\t\t<p-calendar [showIcon]=\"true\" [disabledDates]=\"this.fechas_inaccesibles\" icon=\"icono_calendario\" [locale]=\"calendario_es\" readonlyInput=\"true\" [minDate]=\"this.fecha_min\" [maxDate]=\"this.fecha_max\" name=\"calendario\" [(ngModel)]=\"this.fecha\" dateFormat=\"dd/mm/yy\" (onSelect)=\"this.cambioDeFecha()\"></p-calendar>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"form-group row\">\n\t\t\t<label for=\"turno\" class=\"col-sm-4 offset-sm-1 col-form-label font-weight-bold\">Turno</label>\n\t\t\t<div class=\"col-sm-6 p-0\">\n\t\t\t\t<p-dropdown\n\t\t\t\t\tdropdownIcon=\"ui-clickable ui-button-icon-only fa fa-fw  icono_select\"\n\t\t\t\t\t[options]=\"[\n\t\t\t\t\t\t{ label: 'Seleccione turno', value: null },\n\t\t\t\t\t\t{ label: 'Mañana', value: 'mañana' },\n\t\t\t\t\t\t{ label: 'Tarde', value: 'tarde' }\n\t\t\t\t\t]\"\n\t\t\t\t\t[(ngModel)]=\"this.franja_horaria\"\n\t\t\t\t\tname=\"turno\"\n\t\t\t\t></p-dropdown>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6 col-md-6 col-lg-6 p-0 float-md-right\">\n\t\t<div *ngFor=\"let hora of this.horas_disponibles\" [class]=\"this.mostrarHora(hora) ? 'd-inline-block' : 'hide'\">\n\t\t\t<div *ngIf=\"this.mostrarHora(hora)\" [class]=\"this.setClaseBoton(hora)\" (click)=\"this.seleccionarHoraYFecha(hora)\">\n\t\t\t\t<b>{{ hora.hora }}</b>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"col-sm-6 p-0 text-center\" style=\"clear: left\">\n\t\t<p class=\"fs-15\">Su cita seleccionada:</p>\n\t\t<div class=\"row p-0\">\n\t\t\t<div class=\"col-md-6 p-0 mt-3\" style=\"min-width: min-content\">\n\t\t\t\t<div class=\"d-inline-flex flex-column justify-content-center text-left p-3\" style=\"background-color: rgba(255, 255, 255, 0.3); height: 10rem; width: 15rem\">\n\t\t\t\t\t<div class=\"fs-125\">Día</div>\n\t\t\t\t\t<div class=\"d-flex flex-row justify-content-center\">\n\t\t\t\t\t\t<div class=\"text-right\">\n\t\t\t\t\t\t\t<p class=\"m-0\" style=\"font-size: 5rem; line-height: 5rem\">{{ this.fecha.getDate() }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"text-left\">\n\t\t\t\t\t\t\t<p class=\"col-12 m-0\" style=\"font-size: 2rem; line-height: 2.5rem\">{{ this.calendario_es.monthNamesShort[this.fecha.getMonth()] }}.</p>\n\t\t\t\t\t\t\t<p class=\"col-12 m-0\" style=\"font-size: 2.5rem; line-height: 2.5rem\">{{ this.fecha.getFullYear() }}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-6 p-0 mt-3\" style=\"min-width: min-content\">\n\t\t\t\t<div class=\"d-inline-flex flex-column justify-content-center text-left p-3\" style=\"background-color: rgba(255, 255, 255, 0.3); height: 10rem; width: 15rem\">\n\t\t\t\t\t<div class=\"fs-125\">Hora</div>\n\t\t\t\t\t<div class=\"d-flex flex-row justify-content-center\">\n\t\t\t\t\t\t<div class=\"col-12 p-0 text-right\">\n\t\t\t\t\t\t\t<p class=\"text-left m-0\" style=\"font-size: 5rem; line-height: 5rem\" *ngIf=\"this.turnoSeleccionado.hora != null\">{{ this.turnoSeleccionado.hora }}</p>\n\t\t\t\t\t\t\t<p class=\"text-left m-0\" style=\"font-size: 5rem; line-height: 5rem\" *ngIf=\"this.turnoSeleccionado.hora == null\">--:--</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n\t<div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.pasoAtras.emit(this.turnoSeleccionado)\"></div>\n\t<div class=\"triangulo_der pointer border-color-orange\" (click)=\"this.tomarTurno()\" *ngIf=\"this.turnoSeleccionado.hora != null\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectorDeTurnoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_plantas_service__ = __webpack_require__("./src/app/servicios/plantas.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectorDeTurnoComponent = /** @class */ (function () {
    function SelectorDeTurnoComponent(plantasService) {
        this.plantasService = plantasService;
        this.mensaje_error = [];
        //Variables para el manejo  de fechas en el calendario
        this.fecha = new Date(Date.now() + 86400);
        this.fecha_min = new Date((new Date(Date.now())).toDateString());
        this.fecha_max = new Date((new Date(Date.now())).toDateString());
        this.fechas_inaccesibles = [];
        this.calendario_es = {
            firstDayOfWeek: 0,
            dayNames: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            dayNamesShort: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
            dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: 'Hoy',
            clear: 'Limpiar'
        };
        this.horas_disponibles = [];
        var pc_local = localStorage.getItem("ESLOCAL");
        if (pc_local == undefined) {
            this.fecha_min.setSeconds(86400);
            console.log("pasa");
        }
        this.fecha_max.setSeconds(59 * 86400); //Cantidad de días * milisegundos por día
        this.devolverTurno = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SelectorDeTurnoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.turnoSeleccionado.fecha != "") {
            this.fecha = new Date(parseInt(this.turnoSeleccionado.fecha.slice(6, 10)), parseInt(this.turnoSeleccionado.fecha.slice(3, 5)) - 1, parseInt(this.turnoSeleccionado.fecha.slice(0, 2)));
            if (this.turnoSeleccionado.hora != "") {
                this.franja_horaria = (parseInt(this.turnoSeleccionado.hora.split(":")[0]) >= 12) ? "tarde" : "mañana";
            }
        }
        this.plantasService.ObtenerTurnosPlanta(this.turnoSeleccionado.planta.id).subscribe(function (turnos) {
            _this.horas_disponibles = turnos;
            _this.fechasInaccesibles();
        });
    };
    SelectorDeTurnoComponent.prototype.fechasInaccesibles = function () {
        var fecha_actual = new Date((new Date(Date.now())).toDateString());
        while (fecha_actual.getTime() <= this.fecha_max.getTime()) {
            // console.log("---------------------------");
            // console.log("fecha actual: ",fecha_actual);
            var existe = false;
            for (var i = 0; i < this.horas_disponibles.length; i++) {
                //console.log(parseInt(this.horas_disponibles[i].fecha.slice(0,4)),parseInt(this.horas_disponibles[i].fecha.slice(5,7)),parseInt(this.horas_disponibles[i].fecha.slice(8,10)));
                var fecha_turno = new Date(parseInt(this.horas_disponibles[i].fecha.slice(0, 4)), parseInt(this.horas_disponibles[i].fecha.slice(5, 7)) - 1, parseInt(this.horas_disponibles[i].fecha.slice(8, 10)));
                // console.log("fecha turno: ",fecha_turno);
                if (fecha_actual.toDateString() == fecha_turno.toDateString()) {
                    existe = true;
                    break;
                }
            }
            if (!existe) {
                var fecha_agregar = new Date(fecha_actual.getTime());
                // console.log("ENTRA: ",fecha_actual,fecha_agregar)
                this.fechas_inaccesibles.push(fecha_agregar);
            }
            fecha_actual.setSeconds(1 * 86400);
        }
    };
    SelectorDeTurnoComponent.prototype.formatoFecha = function () {
        var dia = this.fecha.getDate().toString().length < 2 ? "0" + this.fecha.getDate().toString() : this.fecha.getDate().toString();
        var mes = (this.fecha.getMonth() + 1).toString().length < 2 ? "0" + (this.fecha.getMonth() + 1).toString() : (this.fecha.getMonth() + 1).toString();
        var anio = this.fecha.getFullYear();
        return dia + "/" + mes + "/" + anio;
    };
    SelectorDeTurnoComponent.prototype.cambioDeFecha = function () {
        this.franja_horaria = null;
        this.turnoSeleccionado.hora = null;
    };
    SelectorDeTurnoComponent.prototype.mostrarHora = function (hora) {
        if ((this.franja_horaria == hora.turno) && (this.fecha.toJSON().slice(0, 10) == hora.fecha.slice(0, 10))) {
            return true;
        }
        else {
            return false;
        }
    };
    SelectorDeTurnoComponent.prototype.setClaseBoton = function (hora) {
        if (hora.hora == this.turnoSeleccionado.hora) {
            return "d-inline-block btn-horas-active px-2";
        }
        else {
            return "d-inline-block btn-horas px-2 ";
        }
    };
    SelectorDeTurnoComponent.prototype.seleccionarHoraYFecha = function (hora) {
        this.turnoSeleccionado.hora = hora.hora;
        this.turnoSeleccionado.fecha = this.formatoFecha();
    };
    SelectorDeTurnoComponent.prototype.tomarTurno = function () {
        if (this.turnoSeleccionado.fecha == "") {
            this.mensaje_error.push({ severity: 'error', summary: 'Fecha erronea', detail: 'Debe seleccionar una fecha disponible' });
        }
        if (this.turnoSeleccionado.hora == "") {
            this.mensaje_error.push({ severity: 'error', summary: 'Hora erronea', detail: 'Debe seleccionar una hora disponible' });
        }
        if (this.mensaje_error.length > 0) {
            this.errores.emit(this.mensaje_error);
            this.mensaje_error = [];
        }
        else {
            this.devolverTurno.emit(this.turnoSeleccionado);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["d" /* Turno */])
    ], SelectorDeTurnoComponent.prototype, "turnoSeleccionado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectorDeTurnoComponent.prototype, "devolverTurno", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectorDeTurnoComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], SelectorDeTurnoComponent.prototype, "errores", void 0);
    SelectorDeTurnoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-selector-de-turno',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/selector-de-turno/selector-de-turno.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__servicios_plantas_service__["a" /* PlantasService */]])
    ], SelectorDeTurnoComponent);
    return SelectorDeTurnoComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"fc-white text-center\">¡Atención!</h3>\n<p>Recuerde que para realizar el tramite de su Matriculación y Verificación anual, no deben existir multas de ningún tipo; ya sea sobre el vehículo o el conductor. De lo contrario, no podrá continuar con el proceso hasta regularizar su situación.</p>\n<p>Antes de continuar, aconsejamos asegurarse de no tener ningún infracción o deuda en el botón a continuación:</p>\n<button class=\"btn btn-principal btn-orange-hover m-auto\">Verificar Situación</button>\n<p>Si Ud. ya verificó que no posee ninguna deuda o infracción a su nombre o del vehículo, acepte los \"Términos y Condiciones\" y continúe con el proceso normalmente.</p>\n\n<div class=\"form-check\">\n\t<input class=\"form-check-input pointer\" type=\"checkbox\" name=\"terminos_y_condiciones\" id=\"terminos_y_condiciones\" [(ngModel)]=\"this.terminos_y_condiciones\" />\n\t<label class=\"form-check-label pointer\" for=\"terminos_y_condiciones\"><b>Acepto los</b></label>\n\t<b><a href=\"#\" target=\"_blank\">términos y condiciones</a></b>\n</div>\n<div class=\"d-flex flex-row justify-content-center mt-3\">\n\t<div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.pasoAtras.emit(this.terminos_y_condiciones)\"></div>\n\t<div class=\"triangulo_der pointer border-color-orange\" (click)=\"this.aceptar()\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerificarDeudasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VerificarDeudasComponent = /** @class */ (function () {
    function VerificarDeudasComponent() {
        this.terminos_y_condiciones = false;
        this.mensaje_error = new Array();
        this.aceptado = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pasoAtras = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.errores = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    VerificarDeudasComponent.prototype.aceptar = function () {
        if (this.terminos_y_condiciones == false) {
            this.mensaje_error.push({ severity: "error", summary: "Términos y condiciones", detail: "Debe leer y aceptar los términos y condiciones para continuar" });
        }
        if (this.mensaje_error.length > 0) {
            this.errores.emit(this.mensaje_error);
            this.mensaje_error = [];
        }
        else {
            this.aceptado.emit(this.terminos_y_condiciones);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VerificarDeudasComponent.prototype, "aceptado", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VerificarDeudasComponent.prototype, "pasoAtras", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], VerificarDeudasComponent.prototype, "errores", void 0);
    VerificarDeudasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verificar-deudas',
            template: __webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/carga-de-datos/verificar-deudas/verificar-deudas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VerificarDeudasComponent);
    return VerificarDeudasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/reservas/reservas.component.css":
/***/ (function(module, exports) {

module.exports = ".reservas-container {\r\n    margin: auto;\r\n    padding: 2rem;\r\n}"

/***/ }),

/***/ "./src/app/componentes/links/reservas/reservas.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background-image: url('assets/img/Foto-Home-1.jpg'); background-position: center; background-size: cover\" class=\"py-5\">\n\t<div class=\"preloader\" *ngIf=\"preloader\">\n\t\t<img src=\"assets/img/preloader.gif\" />\n\t</div>\n\t<p-growl [(value)]=\"mensajes\" life=\"4000\"></p-growl>\n\t<div class=\"container\">\n\t\t<form class=\"bg-transp fc-white\">\n\t\t\t<!-- Seleccion de planta -->\n\t\t\t<app-selector-de-planta [plantas]=\"this.plantasService.plantas\" (plantaSeleccionada)=\"this.seleccionarPlanta($event)\" class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 0\"></app-selector-de-planta>\n\n\t\t\t<!-- Ingreso de datos del vehículo -->\n\t\t\t<app-datos-vehiculo [vehiculo]=\"this.reserva.datos_reserva.vehiculo\" (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" (errores)=\"this.mostrarErrores($event)\" (vehiculoSeleccionado)=\"this.seleccionarVehiculo($event)\" class=\"reservas-container\" *ngIf=\"this.nro_slide == 1\"></app-datos-vehiculo>\n\n\t\t\t<!-- Datos Cliente -->\n\t\t\t<app-datos-cliente [cliente]=\"this.reserva.datos_reserva.cliente\" (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" (errores)=\"this.mostrarErrores($event)\" (clienteSeleccionado)=\"this.seleccionarCliente($event)\" class=\"reservas-container text-left text-sm-right text-md-right text-lg-right text-xl-right\" *ngIf=\"this.nro_slide == 2\"></app-datos-cliente>\n\n\t\t\t<!-- Verificar Deudas -->\n\t\t\t<!-- <app-verificar-deudas (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" (errores)=\"this.mostrarErrores($event)\" (aceptado)=\"this.mostrarSlide(this.nro_slide + 1)\" class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 3\"></app-verificar-deudas> -->\n\n\t\t\t<!-- Fecha y Hora -->\n\t\t\t<app-selector-de-turno [turnoSeleccionado]=\"this.reserva.datos_reserva.turno\" (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" (errores)=\"this.mostrarErrores($event)\" (devolverTurno)=\"this.tomarTurno($event)\" class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 3\"></app-selector-de-turno>\n\n\t\t\t<!-- Confirmar turno -->\n\t\t\t<app-confirmar-turno [datosReserva]=\"this.reserva.datos_reserva\" (confirmado)=\"this.confirmarDatos()\" (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" (errores)=\"this.mostrarErrores($event)\" class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 4\"></app-confirmar-turno>\n\n\t\t\t<!-- Pago -->\n\t\t\t<!-- <app-seleccionar-pago [datosReserva]=\"this.reserva.datos_reserva\" (siguiente)=\"this.reservar(this.nro_slide + 1)\" (pasoAtras)=\"this.mostrarSlide(this.nro_slide - 1)\" class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 5\"></app-seleccionar-pago> -->\n\n\t\t\t<!-- Confirmación -->\n\t\t\t<section class=\"reservas-container text-center\" *ngIf=\"this.nro_slide == 5\">\n\t\t\t\t<h3 class=\"fc-white text-center\">Confirmación de Cita</h3>\n\t\t\t\t<div class=\"bg-orange fc-white text-center mx-auto p-4 mt-3\" style=\"width: fit-content\">\n\t\t\t\t\t<p class=\"fs-15\">¡Su cita fue generada con éxito!</p>\n\t\t\t\t\t<p class=\"my-3 fs-15\">Código de Cita: {{ this.codigo_reserva }}</p>\n\t\t\t\t\t<p class=\"my-3 fs-15\">Número de Cita: {{ this.numero_reserva }}</p>\n\t\t\t\t\t<p class=\"fs-15\">En breve, recibirá un correo electrónico de confirmación, con los datos de la misma.</p>\n\t\t\t\t\t<p class=\"fs-15\">¡Muchas Gracias!</p>\n\t\t\t\t\t<br />\n\t\t\t\t\t<br />\n\t\t\t\t\t<p class=\"fs-15\">Recuerde que su cita no será válida hasta que haya realizado el pago de la misma.</p>\n\t\t\t\t\t<p class=\"fs-15\">Puedes realizar el pago de tu verificación y matriculación directamente en el Centro de Verificación y Matriculación, en la ventanilla de pago disponible de la red Facilito, el mismo día que tengas turno.</p>\n\t\t\t\t\t<img src=\"assets/img/medios_de_pago/Facilito orange.JPG\" alt=\"Facilito red de servicios\" style=\"width: 15rem; max-width: 100%\" />\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex flex-row justify-content-center mt-3\">\n\t\t\t\t\t<!-- <div class=\"triangulo_izq pointer border-color-orange mr-3\" (click)=\"this.mostrarSlide(this.nro_slide - 1)\"></div> -->\n\t\t\t\t</div>\n\t\t\t</section>\n\t\t</form>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/componentes/links/reservas/reservas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__ = __webpack_require__("./src/app/servicios/plantas.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicios_reserva_service__ = __webpack_require__("./src/app/servicios/reserva.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__servicios_validaciones_service__ = __webpack_require__("./src/app/servicios/validaciones.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicios_captcha_service__ = __webpack_require__("./src/app/servicios/captcha.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservasComponent = /** @class */ (function () {
    function ReservasComponent(plantasService, reserva, validaciones, captchaService) {
        this.plantasService = plantasService;
        this.reserva = reserva;
        this.validaciones = validaciones;
        this.captchaService = captchaService;
        this.nro_slide = 0; // arranca en cero
        this.cantidad_slides = 6;
        this.mensajes = [];
        this.terminos_y_condiciones = false;
        this.preloader = false;
        this.codigo_reserva = "";
        this.numero_reserva = "";
    }
    ReservasComponent.prototype.ngOnInit = function () { };
    ReservasComponent.prototype.mostrarErrores = function (errores_array) {
        var _this = this;
        errores_array.forEach(function (error) {
            _this.mensajes.push(error);
        }, this);
    };
    ReservasComponent.prototype.mostrarSlide = function (slide) {
        //console.log(JSON.stringify(this.reserva.datos_reserva));
        if (slide <= this.cantidad_slides && slide >= 0) {
            this.nro_slide = slide;
        }
    };
    ReservasComponent.prototype.seleccionarPlanta = function (planta) {
        if (planta.id.trim() == '11') {
            this.reserva.datos_reserva.turno.planta = planta;
            this.mostrarSlide(this.nro_slide + 1);
        }
        else if (planta.id.trim() == '12') {
            window.location.href = 'https://portovial.gob.ec/sitio/index.php/servicio-en-linea/solicitud-orden-de-pago';
        }
        else if (planta.id.trim() == '13') {
            window.location.href = 'https://www.movilidadmachala.gob.ec/web/turno-online/';
        }
        else if (planta.id.trim() == '14') {
            window.location.href = 'https://servicios.axiscloud.ec/SVT/paginas/portal/svf_solicitar_servicio.jsp?ps_param_tip_serv=MAT&ps_id_empresa=07';
        }
    };
    ReservasComponent.prototype.seleccionarVehiculo = function (vehiculo) {
        this.reserva.datos_reserva.vehiculo = vehiculo;
        this.mostrarSlide(this.nro_slide + 1);
    };
    ReservasComponent.prototype.seleccionarCliente = function (cliente) {
        this.reserva.datos_reserva.cliente = cliente;
        //console.log(this.reserva)
        this.mostrarSlide(this.nro_slide + 1);
    };
    ReservasComponent.prototype.tomarTurno = function (turno) {
        this.reserva.datos_reserva.turno = turno;
        //console.log(this.reserva)    
        this.mostrarSlide(this.nro_slide + 1);
    };
    ReservasComponent.prototype.confirmarDatos = function () {
        this.reservar(this.nro_slide + 1);
        /*
        // Queda inactivo el slide de seleccion de medio de pago
        if(this.reserva.datos_reserva.tarifa.monto  == 0){
          this.reservar(this.nro_slide + 1)
        }else{
          this.mostrarSlide(this.nro_slide + 1);
        }
        */
    };
    ReservasComponent.prototype.reservar = function (dato) {
        var _this = this;
        this.preloader = true;
        this.reserva.enviarReserva(this.captchaService.getCaptchaToken()).subscribe(function (reserva) {
            _this.codigo_reserva = reserva.codigo;
            _this.numero_reserva = reserva.numero;
            _this.mostrarSlide(dato);
            _this.preloader = false;
            _this.reserva.datos_reserva = new __WEBPACK_IMPORTED_MODULE_4__interfaces_reserva__["b" /* Reserva */]();
        }, function (error) {
            var mensaje = {
                severity: "danger",
                summary: "Error al reservar",
                detail: "Por favor vuelva a intentarlo luego"
            };
            _this.preloader = false;
            _this.mensajes.push(mensaje);
            console.log(error);
        });
        //this.http.post2().subscribe(exito => {console.log("EXITO!", exito); this.preloader = false}, error => { console.log("ERROR", error); this.preloader = false } );
    };
    ReservasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reservas',
            template: __webpack_require__("./src/app/componentes/links/reservas/reservas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/reservas/reservas.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__servicios_plantas_service__["a" /* PlantasService */],
            __WEBPACK_IMPORTED_MODULE_2__servicios_reserva_service__["a" /* ReservaService */],
            __WEBPACK_IMPORTED_MODULE_3__servicios_validaciones_service__["a" /* ValidacionesService */],
            __WEBPACK_IMPORTED_MODULE_5__servicios_captcha_service__["a" /* CaptchaService */]])
    ], ReservasComponent);
    return ReservasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/links/tarifas/tarifas.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componentes/links/tarifas/tarifas.component.html":
/***/ (function(module, exports) {

module.exports = "<app-main imagenFondo=\"fondo_home.png\" [porcentajeAltura]=\"0.4\"></app-main>\n<section class=\"bg-lightgrey py-3\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"pl-2 mt-3 w-100 pt-2 pb-2\" style=\"border-left: 4px solid #f65000\">\n\t\t\t\t<p class=\"fc-orange\">Información Útil</p>\n\t\t\t\t<h5 class=\"fc-darkgrey fs-25 font-weight-normal\">Costos</h5>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"row mt-5\">\n\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 fc-lightgrey p-0 mt-3\"></div>\n\t\t</div>\n\t\t<div class=\"col-xs-12 col-md-12 col-sm-12 col-lg-12\">\n\t\t\t<!-- <p-tabView>\n\t\t\t\t<p-tabPanel header=\"Durán\">\n\t\t\t\t\t<div class=\"animated fadeIn fast\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 p-0 fc-lightgrey\">\n\t\t\t\t\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Categoría</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>2da Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>3ra Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>4ta Verificación</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tarifa of this.tarifas\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.descripcion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_inspeccion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_2inspeccion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_3inspeccion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_4inspeccion }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<p class=\"fc-darkgrey font-weight-bold ml-1 mt-2\">Si el vehículo no sale aprobado en la primera verificación, hay un plazo de treinta días para que el propietario lleve a corregir los defectos y pueda presentarse nuevamente en el centro.</p>\n\t\t\t\t\t\t\t\t<h4 class=\"fc-orange\">MEDIOS DE PAGO</h4>\n\t\t\t\t\t\t\t\t<p>Puedes realizar el pago de tu Verificación directamente en el Centro de Verificación y Matriculación, en la ventanilla de pago disponible de la red Facilito, el mismo día que tengas turno.</p>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\" style=\"display: flex; justify-content: center\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/medios_de_pago/Facilito.JPG\" alt=\"pago agil logo\" class=\"col-12 col-sm-4 col-md-4 col-lg-4\" style=\"width: 140px; height: 60px\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</p-tabPanel>\n\t\t\t\t<p-tabPanel header=\"Portoviejo\">\n\t\t\t\t\t<div class=\"animated fadeIn fast\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 p-0 fc-lightgrey\">\n\t\t\t\t\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Categoría</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>2da Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>3ra Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>4ta Verificación</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tarifa of this.tarifas\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.descripcion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_inspeccion_portoviejo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_2inspeccion_portoviejo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_3inspeccion_portoviejo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_4inspeccion_portoviejo }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<p class=\"fc-darkgrey font-weight-bold ml-1 mt-2\">Si el vehículo no sale aprobado en la primera verificación, hay un plazo de treinta días para que el propietario lleve a corregir los defectos y pueda presentarse nuevamente en el centro.</p>\n\t\t\t\t\t\t\t\t<h4 class=\"fc-orange\">MEDIOS DE PAGO</h4>\n\t\t\t\t\t\t\t\t<p>Puedes realizar el pago de tu Verificación y Matriculación directamente en el Centro de Verificación y Matriculación de Portoviejo, en cualquier ventanilla de pago disponible del Banco Pacifico, el mismo día que tengas generada la orden de pago.</p>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\" style=\"display: flex; justify-content: center\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/medios_de_pago/pacifico.jpg\" alt=\"pago agil logo\" class=\"col-12 col-sm-4 col-md-4 col-lg-4\" style=\"width: 140px; height: 60px\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</p-tabPanel>\n\t\t\t\t<p-tabPanel header=\"Machala\">\n\t\t\t\t\t<div class=\"animated fadeIn fast\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 p-0 fc-lightgrey\">\n\t\t\t\t\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Categoría</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>2da Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>3ra Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>4ta Verificación</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tarifa of this.tarifas\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.descripcion_machala }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_inspeccion_machala }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_2inspeccion_machala }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_3inspeccion_machala }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_4inspeccion_machala }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<p class=\"fc-darkgrey font-weight-bold ml-1 mt-2\">Si el vehículo no sale aprobado en la primera verificación, hay un plazo de treinta días para que el propietario lleve a corregir los defectos y pueda presentarse nuevamente en el centro.</p>\n\t\t\t\t\t\t\t\t<h4 class=\"fc-orange\">MEDIOS DE PAGO</h4>\n\t\t\t\t\t\t\t\t<p>Puedes realizar el pago de tu Verificación y Matriculación directamente en el Centro de Verificación y Matriculación de Machala, en cualquier ventanilla de pago disponible del Banco Machala, el mismo día que tengas generada la orden de pago.</p>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\" style=\"display: flex; justify-content: center\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/medios_de_pago/bancomachala.jpg\" alt=\"pago agil logo\" class=\"col-12 col-sm-4 col-md-4 col-lg-4\" style=\"width: 140px; height: 60px\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</p-tabPanel>\n\t\t\t\t<p-tabPanel header=\"Babahoyo\">\n\t\t\t\t\t<div class=\"animated fadeIn fast\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 p-0 fc-lightgrey\">\n\t\t\t\t\t\t\t\t<table class=\"table-tarifas\">\n\t\t\t\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t<th>Categoría</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>2da Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>3ra Verificación</th>\n\t\t\t\t\t\t\t\t\t\t\t<th>4ta Verificación</th>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</thead>\n\t\t\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let tarifa of this.tarifas\">\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.descripcion }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_inspeccion_babahoyo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_2inspeccion_babahoyo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_3inspeccion_babahoyo }}</td>\n\t\t\t\t\t\t\t\t\t\t\t<td>{{ tarifa.precio_4inspeccion_babahoyo }}</td>\n\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t<p class=\"fc-darkgrey font-weight-bold ml-1 mt-2\">Si el vehículo no sale aprobado en la primera verificación, hay un plazo de treinta días para que el propietario lleve a corregir los defectos y pueda presentarse nuevamente en el centro.</p>\n\t\t\t\t\t\t\t\t<h4 class=\"fc-orange\">MEDIOS DE PAGO</h4>\n\t\t\t\t\t\t\t\t<p>Puedes realizar el pago de tu Verificación directamente en la recaudadora más cercana, por medio de su banco preferencial y/o en la ventanilla de pago disponible en línea.</p>\n\t\t\t\t\t\t\t\t<div class=\"row mb-3\" style=\"display: flex; justify-content: center\">\n\t\t\t\t\t\t\t\t\t<img src=\"assets/img/medios_de_pago/servipagos.jpg\" alt=\"pago agil logo\" class=\"col-12 col-sm-4 col-md-4 col-lg-4\" style=\"width: 140px; height: 60px\" />\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</p-tabPanel>\n\t\t\t</p-tabView> -->\n\t\t\t<div class=\"row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-around\">\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t\t<img src=\"assets/img/calendario 5.png\" class=\"\" alt=\"Verificación responsable\" width=\"100\" height=\"100\" />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Verificación responsable</h5>\n\n\t\t\t\t\t\t\t<p class=\"card-text\"><b>Precio:</b> $500 MXN dentro del periodo asignado en el calendario.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t\t<img src=\"assets/img/calendario 1.png\" class=\"\" alt=\"Verificación extemporánea\" width=\"100\" height=\"100\" />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Verificación extemporánea</h5>\n\n\t\t\t\t\t\t\t<p class=\"card-text\"><b>Precio:</b> $550 MXN fuera del periodo asignado en el calendario.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col\">\n\t\t\t\t\t<div class=\"card h-100\">\n\t\t\t\t\t\t<div class=\"w-100 text-center\">\n\t\t\t\t\t\t\t<img src=\"assets/img/calendario 2.png\" class=\"\" alt=\"Reimpresión por robo o extravío\" width=\"100\" height=\"100\" />\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-body text-center\">\n\t\t\t\t\t\t\t<h5 class=\"card-title\">Reimpresión por robo o extravío</h5>\n\n\t\t\t\t\t\t\t<p class=\"card-text\"><b>Precio:</b> $100 MXN.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row mt-5 mb-5\">\n\t\t\t\t<div class=\"col-xs-12 col-md-8 col-sm-8 col-lg-8 p-0 fc-lightgrey\">\n\t\t\t\t\t<!-- <p class=\"ml-1\"><b>Verificación Responsable:</b> $500 MXN dentro del periodo asignado en el calendario. <br /><br /><b>Verificación extemporánea:</b> $550 MXN fuera del periodo asignado en el calendario. <br /><br /><b>Reimpresión por robo o extravío:</b> $100 MXN.</p> -->\n\t\t\t\t\t<p class=\"fc-darkgrey font-weight-bold ml-1 mt-4\"><em>Si el vehículo no sale aprobado en la primera verificación, hay un plazo de treinta días para que el propietario lleve a corregir los defectos y pueda presentarse nuevamente en el centro.</em></p>\n\t\t\t\t\t<h4 class=\"fc-orange pt-5\">MEDIOS DE PAGO</h4>\n\t\t\t\t\t<p>Puedes realizar el pago de tu Verificación directamente en la recaudadora más cercana, por medio de su banco preferencial y/o en la ventanilla de pago disponible en línea.</p>\n\t\t\t\t\t<!-- <div class=\"row mb-3\" style=\"display: flex; justify-content: center\">\n\t\t\t\t\t\t<img src=\"assets/img/medios_de_pago/Facilito.JPG\" alt=\"pago agil logo\" class=\"col-12 col-sm-4 col-md-4 col-lg-4\" style=\"width: 140px; height: 60px\" />\n\t\t\t\t\t</div> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/links/tarifas/tarifas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TarifasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TarifasComponent = /** @class */ (function () {
    function TarifasComponent() {
        this.tarifas = [
            {
                codigo: 1,
                descripcion: 'Livianos / Particulares',
                descripcion_machala: 'Livianos / Particulares',
                precio_inspeccion: '$ 26.58',
                precio_2inspeccion: '$ 0.00',
                precio_3inspeccion: '$ 13.29',
                precio_4inspeccion: '$ 26.58',
                precio_inspeccion_machala: '$ 38.25',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 19.13',
                precio_4inspeccion_machala: '$ 38.25',
                precio_inspeccion_portoviejo: '$ 26.58',
                precio_2inspeccion_portoviejo: '$ 0.00',
                precio_3inspeccion_portoviejo: '$ 13.29',
                precio_4inspeccion_portoviejo: '$ 26.58',
                precio_inspeccion_babahoyo: '$ 26.58',
                precio_2inspeccion_babahoyo: '$ 0.00',
                precio_3inspeccion_babahoyo: '$ 13.29',
                precio_4inspeccion_babahoyo: '$ 26.58'
            },
            {
                codigo: 2,
                descripcion: 'Taxis/Busetas/Furgonetas/Camionetas de Servicio Público',
                descripcion_machala: 'Taxis/Busetas/Furgonetas/Camionetas de Servicio Público',
                precio_inspeccion: '$ 18.19',
                precio_2inspeccion: '$ 0.00',
                precio_3inspeccion: '$ 9.10',
                precio_4inspeccion: '$ 18.19',
                precio_inspeccion_machala: '$ 29.75',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 14.88',
                precio_4inspeccion_machala: '$ 29.75',
                precio_inspeccion_portoviejo: '$ 18.19',
                precio_2inspeccion_portoviejo: '$ 0.00',
                precio_3inspeccion_portoviejo: '$ 9.10',
                precio_4inspeccion_portoviejo: '$ 18.19',
                precio_inspeccion_babahoyo: '$ 18.19',
                precio_2inspeccion_babahoyo: '$ 0.00',
                precio_3inspeccion_babahoyo: '$ 9.10',
                precio_4inspeccion_babahoyo: '$ 18.19'
            },
            {
                codigo: 3,
                descripcion: 'Pesados',
                descripcion_machala: 'Pesados',
                precio_inspeccion: '$ 41.81',
                precio_2inspeccion: '$ 0.00',
                precio_3inspeccion: '$ 20.91',
                precio_4inspeccion: '$ 41.81',
                precio_inspeccion_machala: '$ 55.25',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 27.63',
                precio_4inspeccion_machala: '$ 55.25',
                precio_inspeccion_portoviejo: '$ 41.81',
                precio_2inspeccion_portoviejo: '$ 0.00',
                precio_3inspeccion_portoviejo: '$ 20.91',
                precio_4inspeccion_portoviejo: '$ 41.81',
                precio_inspeccion_babahoyo: '$ 41.81',
                precio_2inspeccion_babahoyo: '$ 0.00',
                precio_3inspeccion_babahoyo: '$ 20.91',
                precio_4inspeccion_babahoyo: '$ 41.81'
            },
            {
                codigo: 4,
                descripcion: 'Buses',
                descripcion_machala: 'Buses',
                precio_inspeccion: '$ 35.17',
                precio_2inspeccion: '$ 0.00',
                precio_3inspeccion: '$ 17.59',
                precio_4inspeccion: '$ 35.17',
                precio_inspeccion_machala: '$ 46.75',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 23.38',
                precio_4inspeccion_machala: '$ 46.75',
                precio_inspeccion_portoviejo: '$ 35.17',
                precio_2inspeccion_portoviejo: '$ 0.00',
                precio_3inspeccion_portoviejo: '$ 17.59',
                precio_4inspeccion_portoviejo: '$ 35.17',
                precio_inspeccion_babahoyo: '$ 35.17',
                precio_2inspeccion_babahoyo: '$ 0.00',
                precio_3inspeccion_babahoyo: '$ 17.59',
                precio_4inspeccion_babahoyo: '$ 35.17'
            },
            {
                codigo: 5,
                descripcion: 'Motos',
                descripcion_machala: 'Motos',
                precio_inspeccion: '$ 15.86',
                precio_2inspeccion: '$ 0.00',
                precio_3inspeccion: '$ 7.93',
                precio_4inspeccion: '$ 15.86',
                precio_inspeccion_machala: '$ 25.50',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 12.75',
                precio_4inspeccion_machala: '$ 25.50',
                precio_inspeccion_portoviejo: '$ 15.86',
                precio_2inspeccion_portoviejo: '$ 0.00',
                precio_3inspeccion_portoviejo: '$ 7.93',
                precio_4inspeccion_portoviejo: '$ 15.86',
                precio_inspeccion_babahoyo: '$ 15.86',
                precio_2inspeccion_babahoyo: '$ 0.00',
                precio_3inspeccion_babahoyo: '$ 7.93',
                precio_4inspeccion_babahoyo: '$ 15.86'
            },
            {
                codigo: 6,
                descripcion_machala: 'Transporte de personal y Escolar',
                precio_inspeccion_machala: '$ 34.00',
                precio_2inspeccion_machala: '$ 0.00',
                precio_3inspeccion_machala: '$ 17.00',
                precio_4inspeccion_machala: '$ 34.00'
            },
        ];
    }
    TarifasComponent.prototype.ngOnInit = function () { };
    TarifasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tarifas',
            template: __webpack_require__("./src/app/componentes/links/tarifas/tarifas.component.html"),
            styles: [__webpack_require__("./src/app/componentes/links/tarifas/tarifas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TarifasComponent);
    return TarifasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/main/main.component.css":
/***/ (function(module, exports) {

module.exports = "section {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    background-size: cover;\r\n}\r\n\r\n.cuadro-reservas {\r\n    margin: auto;\r\n    background-color: rgba(0, 0, 0, 0.65);\r\n}\r\n\r\n.hoja-container {\r\n    width: 100%;\r\n}\r\n\r\n.hoja-container:first-child {\r\n    display: inline-block;\r\n    position: relative;\r\n    top: 0;\r\n    right: 0;\r\n}\r\n\r\n.carousel-main {\r\n    position: absolute;\r\n    z-index: -10;\r\n    top: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.carousel-control-prev,\r\n.carousel-control-next {\r\n    z-index: 1000;\r\n    width: 10%;\r\n}\r\n\r\n.img-item-carousel {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center\r\n}\r\n\r\n/* Estilo botón WhatsApp */\r\n\r\n.float{\r\n\tposition:fixed;\r\n\twidth:60px;\r\n\theight:60px;\r\n\tbottom:40px;\r\n\tright:40px;\r\n\tbackground-color:#25d366;\r\n\tcolor:#FFF;\r\n\tborder-radius:50px;\r\n\ttext-align:center;\r\n  font-size:30px;\r\n\t-webkit-box-shadow: 2px 2px 3px #999;\r\n\t        box-shadow: 2px 2px 3px #999;\r\n  z-index:100;\r\n}\r\n\r\n.my-float{\r\n\tmargin-top:16px;\r\n}"

/***/ }),

/***/ "./src/app/componentes/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<main [style]=\"this.estilo_fondo | styleSanitizer\" #fondo class=\"animated fadeIn\">\n\t<!-- Div together beyond standards -->\n\t<div style=\"height: 70%\">\n\t\t<div class=\"hoja-container text-right\">\n\t\t\t<div class=\"mt-4 mb-lg-4 mb-md-5 mb-xl-4 mb-sm-2\">\n\t\t\t\t<app-hoja-doblada style=\"display: inline-block\"></app-hoja-doblada>\n\t\t\t</div>\n\t\t</div>\n\t\t<!-- Div Reservas -->\n\t\t<div class=\"row p-0 m-0\">\n\t\t\t<div class=\"cuadro-reservas col-xs-12 col-md-5 col-sm-5 col-lg-5 px-3 py-4\">\n\t\t\t\t<a href=\"https://citas-verificacionresponsable.jalisco.gob.mx/#/registro\" target=\"_blank\"><button routerLink=\"#\" class=\"btn-principal btn-orange-hover fs-large py-3 px-5 m-auto\">HAZ TU CITA</button></a>\n\n\t\t\t\t<p style=\"display: block; text-align: center\" class=\"fc-white mt-2 mb-0\">Tu verificación más fácil y rápida con Applus+</p>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"carouselExampleControls\" class=\"carousel-main carousel slide\" data-ride=\"carousel\">\n\t\t<div class=\"carousel-inner\" style=\"overflow: hidden; height: 100%\">\n\t\t\t<div class=\"carousel-item active\" style=\"height: 100%\">\n\t\t\t\t<div style=\"opacity: 0.7; background-image: url('assets/img/navidad.png'); background-position-y: top\" class=\"img-item-carousel d-block w-100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item active\" style=\"height: 100%\">\n\t\t\t\t<div style=\"background-image: url('assets/img/carrusel-6.jpg'); background-position-y: top\" class=\"img-item-carousel d-block w-100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\" style=\"height: 100%\">\n\t\t\t\t<div style=\"background-image: url('assets/img/carrusel-1.jpeg'); background-position-y: top\" class=\"img-item-carousel d-block w-100\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"carousel-item\" style=\"height: 100%\">\n\t\t\t\t<div style=\"background-image: url('assets/img/carrusel-3.jpeg'); background-position-y: center\" class=\"img-item-carousel d-block w-100\"></div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"carousel-item\" style=\"height: 100%\">\n\t\t\t\t<div style=\"background-image: url('assets/img/Foto-Home-4.jpg'); background-position-y: top\" class=\"img-item-carousel d-block w-100\"></div>\n\t\t\t</div> -->\n\t\t</div>\n\t</div>\n\t<a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\">\n\t\t<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Previous</span>\n\t</a>\n\t<a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\">\n\t\t<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n\t\t<span class=\"sr-only\">Next</span>\n\t</a>\n</main>\n<a href=\"https://wa.me/523314089470?text=Hola%21%20Tengo%20una%20consulta%20sobre%20mi%20verificación%20vehicular.\" class=\"float\" target=\"_blank\">\n\t<i class=\"fa fa-whatsapp my-float\"></i>\n</a>\n<div class=\"bg-orange pb-2\"></div>\n\n<!-- <div></div> -->\n"

/***/ }),

/***/ "./src/app/componentes/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    // constructor() { }
    function MainComponent(router) {
        this.router = router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.ventana = this.Ventana();
        this.estilo_fondo = this.getStyleFondo();
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };
    MainComponent.prototype.getStyleFondo = function () {
        var estilos = "";
        var alto = Math.round((this.ventana.alto - document.querySelector('header').scrollHeight) * this.porcentajeAltura);
        estilos += "height: " + alto + "px;";
        //estilos += "background-image: url('assets/img/"+this.imagenFondo+"');";
        //estilos += "background-position: center;";
        estilos += "min-height: 320px;";
        estilos += "position:relative;";
        //estilos += "background-size: cover;";
        return estilos;
    };
    MainComponent.prototype.Ventana = function () {
        var ancho;
        var alto;
        if (!window.innerHeight) {
            ancho = (document.body.clientWidth);
            alto = (document.body.clientHeight);
        }
        else {
            ancho = (window.innerWidth);
            alto = (window.innerHeight);
        }
        return {
            ancho: ancho,
            alto: alto
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MainComponent.prototype, "imagenFondo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], MainComponent.prototype, "porcentajeAltura", void 0);
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("./src/app/componentes/main/main.component.html"),
            styles: [__webpack_require__("./src/app/componentes/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/componentes/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "/** Menu styles */\r\n\r\n.logo_container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n/* Dropdown Button */\r\n\r\n.dropbtn {\r\n    padding: 16px;\r\n    border: none;\r\n}\r\n\r\n.dropbtn:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    width: 100%;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    -webkit-box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {\r\n    background-color: #ddd\r\n}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {\r\n    color: #FC6500;\r\n}\r\n\r\n/* Estilos botones menú */\r\n\r\n@media (max-width: 992px) {\r\n    .opcion_menu {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@media (min-width: 992px) {\r\n    .opcion_menu {\r\n        width: 20%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/componentes/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"shadow\">\n\t<div class=\"container px-0\">\n\t\t<nav class=\"navbar navbar-expand-lg navbar-light row p-0\">\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-2 bg-white px-4 py-1 text-center logo_container\">\n\t\t\t\t<a href=\"#/\"><img src=\"assets/img/logoApplusAutomotive_RGB (fondo blanco) recorte.jpg\" alt=\"Logo A+\" title=\"Página Principal\" style=\"width: 100%\" /></a>\n\t\t\t</div>\n\t\t\t<button class=\"navbar-toggler col-xs-12 col-sm-6 col-md-2 col-lg-2\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\t\t\t<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\t\t\t\t<ul class=\"navbar-nav col-12 p-0\">\n\t\t\t\t\t<li class=\"nav-item opcion_menu p-0 light-border\">\n\t\t\t\t\t\t<div class=\"dropdown height100 col-12 p-0\">\n\t\t\t\t\t\t\t<button class=\"dropbtn bg-white height100 col-12 font_applus fc-darkgrey\">Applus+ México</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-content font_applus fc-darkgrey\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/applus\" class=\"font_applus fc-darkgrey\">¿Quiénes somos?</a>\n\t\t\t\t\t\t\t\t<a href=\"http://www.applusautomotive.com/es/\" target=\"_blank\" class=\"font_applus fc-darkgrey\">Applus en el mundo</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/contacto\" class=\"font_applus fc-darkgrey\">Contacto</a>\n\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/encuesta\" class=\"font_applus fc-darkgrey\">Encuesta</a> -->\n\t\t\t\t\t\t\t\t<a routerLink=\"/encuesta\" class=\"font_applus fc-darkgrey\">Encuesta de satisfacción</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item opcion_menu p-0 light-border\">\n\t\t\t\t\t\t<div class=\"dropdown height100 col-12 p-0\">\n\t\t\t\t\t\t\t<!-- <button routerLink=\"/plantas\" class=\"dropbtn bg-white height100 col-12 font_applus fc-darkgrey\">Centros RTV</button> -->\n\t\t\t\t\t\t\t<button class=\"dropbtn bg-white height100 col-12 font_applus fc-darkgrey\">Sucursales Automotive</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-content font_applus fc-darkgrey\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/plantas/colon\" class=\"font_applus fc-darkgrey\">CVR 0010 Colón</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/plantas/vallarta\" class=\"font_applus fc-darkgrey\">CVR 0007 Vallarta</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/plantas/guzman\" class=\"font_applus fc-darkgrey\">CVR 0012 Guzmán</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/plantas/el_salto\" class=\"font_applus fc-darkgrey\">CVR 0281 El Salto (próximamente)</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item opcion_menu p-0 light-border\">\n\t\t\t\t\t\t<div class=\"dropdown height100 col-12 p-0\">\n\t\t\t\t\t\t\t<button class=\"dropbtn bg-white height100 col-12 font_applus fc-darkgrey\">Información Útil</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-content\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/calendario\" class=\"font_applus fc-darkgrey\">Calendario</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/normas\" class=\"font_applus fc-darkgrey\">Normas de Control</a>\n\t\t\t\t\t\t\t\t<!-- <a routerLink=\"/conozca_mas\" class=\"font_applus fc-darkgrey\">Conozca más</a> -->\n\t\t\t\t\t\t\t\t<a routerLink=\"/tarifas\" class=\"font_applus fc-darkgrey\">Costos</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item opcion_menu p-0 light-border\">\n\t\t\t\t\t\t<div class=\"dropdown height100 col-12 p-0\">\n\t\t\t\t\t\t\t<button class=\"dropbtn bg-white height100 col-12 font_applus fc-darkgrey\">Requisitos VR</button>\n\t\t\t\t\t\t\t<div class=\"dropdown-content\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/documentacion\" class=\"font_applus fc-darkgrey\">Documentación</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/recomendaciones\" class=\"font_applus fc-darkgrey\">Recomendaciones</a>\n\t\t\t\t\t\t\t\t<a routerLink=\"/beneficios\" class=\"font_applus fc-darkgrey\">Beneficios</a>\n\t\t\t\t\t\t\t\t<!-- <a href=\"http://187.188.141.119:80/Gestion_VTV/web/#/encuesta\" target=\"_blank\" class=\"font_applus fc-darkgrey\">Gestíón</a> -->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"nav-item opcion_menu p-0\">\n\t\t\t\t\t\t<div class=\"dropdown height100 col-12 p-0\">\n\t\t\t\t\t\t\t<!-- <button routerLink=\"/gestionar_reserva\" class=\"dropbtn bg-lightgrey font_applus fc-orange height100 col-12\">Gestione su<br />reserva</button> -->\n\n\t\t\t\t\t\t\t<button routerLink=\"/encuesta\" class=\"dropbtn bg-lightgrey font_applus fc-orange height100 col-12\">Encuesta de<br />satisfacción</button>\n\t\t\t\t\t\t\t<!-- <div class=\"dropdown-content\">\n\t\t\t\t\t\t\t\t<a routerLink=\"/encuesta\" class=\"font_applus fc-darkgrey\">Encuesta de satisfacción</a>\n\t\t\t\t\t\t\t\t<a href=\"http://187.188.141.119:80/Gestion_VTV/web/#/encuesta\" target=\"_blank\" class=\"font_applus fc-darkgrey\">Gestíón</a>\n\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</nav>\n\t</div>\n</header>\n"

/***/ }),

/***/ "./src/app/componentes/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/componentes/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/componentes/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.css":
/***/ (function(module, exports) {

module.exports = ".promociones>div {\r\n    height: 17rem;\r\n}\r\n\r\n.promociones>div:first-child {\r\n    height: auto;\r\n}\r\n\r\n.promociones_col1 {\r\n    position: relative;\r\n}\r\n\r\n.promociones_col1:after {\r\n    content: \"\";\r\n    display: block;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 0;\r\n    background-image: url(\"/assets/img/promociones_1.png\");\r\n    background-position: left bottom;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    width: 100%;\r\n    height: 50%;\r\n    opacity: 0.5;\r\n    z-index: 1;\r\n}\r\n\r\n.carousel-indicators {\r\n    margin: 0;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -20px;\r\n    left: 0;\r\n    z-index: 15;\r\n    display: -ms-flexbox;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -ms-flex-pack: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    padding-left: 0;\r\n    margin: auto;\r\n    list-style: none;\r\n}\r\n\r\n.carousel-indicators li {\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 200px 200px 200px 200px;\r\n    -moz-border-radius: 200px 200px 200px 200px;\r\n    -webkit-border-radius: 200px 200px 200px 200px;\r\n}\r\n\r\n.carousel-indicators .active {\r\n    background-color: #fC6500;\r\n}\r\n\r\n.carousel-indicators>li:hover {\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-lightgrey pt-5\">\n    <div class=\"container m-auto \">\n        <div class=\"row bg-orange pr-3 promociones\">\n            <div class=\"col-xs-0 col-sm-2 col-md-2 col-lg-2 promociones_col1\">\n\n            </div>\n\n            <!-- PRIMER CARUSEL -->\n\n            <!-- <div class=\"col-xs-6 col-sm-5 col-md-5 col-lg-5 bg-white\">\n\n                <h3 class=\"fc-orange my-4\"> Noticias y Actualidad</h3>\n                <div id=\"carouselNoticiasIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselNoticiasIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselNoticiasIndicators\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselNoticiasIndicators\" data-slide-to=\"2\"></li>\n                        <li data-target=\"#carouselNoticiasIndicators\" data-slide-to=\"3\"></li>\n                    </ol>\n                    <div class=\"carousel-inner\">\n                        <div class=\"carousel-item active\">\n                            \n                            <div class=\"d-block w-100\">\n                                Resolución Mercosur 64/08 - Los vehículos de transporte internacional por carretera de carga o de pasajeros (camiones, remolques y semirremolques,...\n                                <br>\n                                <a href=\"#\" class=\"fc-orange\">Ver más...</a>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            \n                            <div class=\"d-block w-100\">\n                                Resolución Mercosur 64/08 - Los vehículos de transporte internacional por carretera de carga o de pasajeros (camiones, remolques y semirremolques,...\n                                <br>\n                                <a href=\"#\" class=\"fc-orange\">Ver más...</a>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            \n                            <div class=\"d-block w-100\">\n                                Resolución Mercosur 64/08 - Los vehículos de transporte internacional por carretera de carga o de pasajeros (camiones, remolques y semirremolques,...\n                                <br>\n                                <a href=\"#\" class=\"fc-orange\">Ver más...</a>\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            \n                            <div class=\"d-block w-100\">\n                                Resolución Mercosur 64/08 - Los vehículos de transporte internacional por carretera de carga o de pasajeros (camiones, remolques y semirremolques,...\n                                <br>\n                                <a href=\"#\" class=\"fc-orange\">Ver más...</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div> -->\n\n            <!-- SEGUNDO CARUSEL -->\n            <div class=\"col-xs-6 col-sm-5 col-md-5 col-lg-5 bg-white\">\n                <h3 class=\"fc-orange my-4\">Testimonios</h3>\n                <strong>Ellos ya confiaron en nosotros...</strong>\n                <div id=\"carouselTestimoniosIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n                    <ol class=\"carousel-indicators\">\n                        <li data-target=\"#carouselTestimoniosIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n                        <li data-target=\"#carouselTestimoniosIndicators\" data-slide-to=\"1\"></li>\n                        <li data-target=\"#carouselTestimoniosIndicators\" data-slide-to=\"2\"></li>\n                        <li data-target=\"#carouselTestimoniosIndicators\" data-slide-to=\"3\"></li>\n                    </ol>\n                    <div class=\"carousel-inner mt-3\">\n                        <div class=\"carousel-item active\">\n                            <div class=\"d-block w-100\">\n                                Con hora previa, la atención es rápida y muy esmerada. Descubrieron un desperfecto que mi mecánico había pasado por alto! Muchas gracias!\n                                <br> Oscar Torres\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"d-block w-100\">\n                                El tiempo de espera fue mínimo. La atención muy cordial y rápida.\n                                <br> Ingrid Bujan\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"d-block w-100\">\n                                Todo perfecto el lugar, el tiempo que se tarda es nada. Muy profesional.\n                                <br> Carola Wyler\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"d-block w-100\">\n                                Rápido, expeditivo y con muy buena atención por parte de todo el personal\n                                <br> Matias Ramundo\n                            </div>\n                        </div>\n                        <div class=\"carousel-item\">\n                            <div class=\"d-block w-100\">\n                                Rapidez y sobre todo cumplen con los horarios dados.\n                                <br> Adrian Tebele\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-6 col-sm-5 col-md-5 col-lg-5 bg-white\" style=\"background-image: url('assets/img/opiniones.jpg');background-position: center top; background-size: cover\">\n\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/componentes/noticias/noticias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoticiasComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NoticiasComponent = /** @class */ (function () {
    function NoticiasComponent() {
    }
    NoticiasComponent.prototype.ngOnInit = function () {
    };
    NoticiasComponent.prototype.getWindowWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };
    NoticiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-noticias',
            template: __webpack_require__("./src/app/componentes/noticias/noticias.component.html"),
            styles: [__webpack_require__("./src/app/componentes/noticias/noticias.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NoticiasComponent);
    return NoticiasComponent;
}());



/***/ }),

/***/ "./src/app/componentes/promociones/promociones.component.css":
/***/ (function(module, exports) {

module.exports = ".promociones > div {\r\n\theight: 17rem;\r\n}\r\n\r\n.promociones > div:first-child {\r\n\theight: auto;\r\n}\r\n\r\n.promociones_col1 {\r\n\tposition: relative;\r\n}\r\n\r\n.promociones_col1:after {\r\n\tcontent: \"\";\r\n\tdisplay: block;\r\n\tposition: absolute;\r\n\tbottom: 10px;\r\n\tleft: 0;\r\n\tbackground-image: url(\"/assets/img/promociones_1.png\");\r\n\tbackground-position: left bottom;\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: contain;\r\n\twidth: 100%;\r\n\theight: 50%;\r\n\topacity: 0.5;\r\n\tz-index: 1;\r\n}\r\n\r\n.promociones_col1 > div > p {\r\n\tposition: relative;\r\n\ttop: 9rem;\r\n\tleft: 50%;\r\n}\r\n\r\n.promociones_col1 > div > p:hover {\r\n\tcursor: pointer;\r\n}\r\n\r\n.promociones_col2 {\r\n\tbackground-image: url(\"/assets/img/promociones_2.jpg\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n}\r\n\r\n.promociones_col3 {\r\n\tbackground-image: url(\"/assets/img/promociones_3.png\");\r\n\tbackground-repeat: no-repeat;\r\n\tbackground-size: cover;\r\n\tbackground-position: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentes/promociones/promociones.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-lightgrey pt-5\">\n\t<div class=\"container m-auto\">\n\t\t<div class=\"row bg-orange pr-3 promociones\">\n\t\t\t<div class=\"col-xs-0 col-sm-2 col-md-2 col-lg-2 promociones_col1\">\n\t\t\t\t<div>\n\t\t\t\t\t<h4 class=\"fc-white mt-4 text-center\">Promociones</h4>\n\t\t\t\t\t<!-- <p routerLink=\"/concurso\" class=\"fc-white pointer\">Ver más</p> -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-5 col-md-5 col-lg-5 promociones_col2\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 mt-5\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-5 bg-orange fc-white py-1\" style=\"text-align: center; font-size: 1.5rem; min-width: fit-content\">NACIONAL</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-12 bg-white fc-lightgrey\">\n\t\t\t\t\t\t<p class=\"fs-125 mt-2\">\n\t\t\t\t\t\t\tPuedes ganar tu <br />\n\t\t\t\t\t\t\tVerificación totalmente <br />\n\t\t\t\t\t\t\t<strong routerLink=\"/concurso\" class=\"fc-orange fs-125 pointer\">Gratis.</strong>\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<button class=\"btn bg-grey btn-orange-hover fc-white mt-2\" routerLink=\"/beneficios\">Ver más</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-5 col-md-5 col-lg-5 promociones_col3\">\n\t\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-9 mt-3\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-5 bg-orange fc-white py-1\" style=\"text-align: center; font-size: 1.5rem\">LOCAL</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row col-12 bg-white fc-lightgrey\">\n\t\t\t\t\t\t<p class=\"fs-125 mt-2\">\n\t\t\t\t\t\t\tAprovecha nuestras <br />\n\t\t\t\t\t\t\t<strong class=\"fc-orange fs-125\">promociones exclusivas</strong><br />en tu localidad.\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<button class=\"btn bg-grey btn-orange-hover fc-white mt-2\" routerLink=\"/beneficios\">Busca promociones en tu localidad</button>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/promociones/promociones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromocionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromocionesComponent = /** @class */ (function () {
    function PromocionesComponent() {
    }
    PromocionesComponent.prototype.ngOnInit = function () {
    };
    PromocionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-promociones',
            template: __webpack_require__("./src/app/componentes/promociones/promociones.component.html"),
            styles: [__webpack_require__("./src/app/componentes/promociones/promociones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromocionesComponent);
    return PromocionesComponent;
}());



/***/ }),

/***/ "./src/app/componentes/seccion-opciones/seccion-opciones.component.css":
/***/ (function(module, exports) {

module.exports = ".imagen-card {\r\n\twidth: 100%;\r\n\theight: 15.5rem;\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover; /* Recorta la imagen sin deformarla */\r\n\t-o-object-position: center;\r\n\t   object-position: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/componentes/seccion-opciones/seccion-opciones.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\"></div>\n<section class=\"bg-lightgrey\">\n\t<div class=\"container m-auto\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0\">\n\t\t\t\t<div routerLink=\"/plantas\" class=\"card-hover\">\n\t\t\t\t\t<img src=\"assets/img/favicon.png\" />\n\t\t\t\t\t<div class=\"card border-0 border-right border-left rounded-0\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/reservaahora.jpg\" alt=\"Card image cap\" class=\"imagen-card\" />\n\t\t\t\t\t\t<div class=\"card-body bg-darkgrey fc-white\" style=\"width: 100%; height: 8rem\">\n\t\t\t\t\t\t\t<h5 class=\"card-title fc-orange\">Red VR</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Red de Centros de Verificación Vehicular.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0\">\n\t\t\t\t<div routerLink=\"/tarifas\" class=\"card-hover\">\n\t\t\t\t\t<img src=\"assets/img/favicon.png\" />\n\t\t\t\t\t<div class=\"card border-0 border-right border-left rounded-0\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/tarifa.jpeg\" alt=\"Card image cap\" class=\"imagen-card\" />\n\t\t\t\t\t\t<div class=\"card-body bg-darkgrey fc-white\" style=\"width: 100%; height: 8rem\">\n\t\t\t\t\t\t\t<h5 class=\"card-title fc-orange\">Costos</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Consulta el listado los costos.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0\">\n\t\t\t\t<div routerLink=\"/beneficios\" class=\"card-hover\">\n\t\t\t\t\t<img src=\"assets/img/favicon.png\" />\n\t\t\t\t\t<div class=\"card border-0 border-right border-left rounded-0\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/matriculate.jpg\" alt=\"Card image cap\" class=\"imagen-card\" />\n\t\t\t\t\t\t<div class=\"card-body bg-darkgrey fc-white\" style=\"width: 100%; height: 8rem\">\n\t\t\t\t\t\t\t<h5 class=\"card-title fc-orange\">Beneficios</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Consulta nuestra sección de beneficios.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3 p-0 m-0\">\n\t\t\t\t<div routerLink=\"/contacto\" class=\"card-hover\">\n\t\t\t\t\t<img src=\"assets/img/favicon.png\" />\n\t\t\t\t\t<div class=\"card border-0 border-right border-left rounded-0\">\n\t\t\t\t\t\t<img class=\"card-img-top\" src=\"assets/img/consultas.jpg\" alt=\"Card image cap\" class=\"imagen-card\" />\n\t\t\t\t\t\t<div class=\"card-body bg-darkgrey fc-white\" style=\"width: 100%; height: 8rem\">\n\t\t\t\t\t\t\t<h5 class=\"card-title fc-orange\">Consultas</h5>\n\t\t\t\t\t\t\t<p class=\"card-text\">Consultas en línea para usuarios.</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "./src/app/componentes/seccion-opciones/seccion-opciones.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeccionOpcionesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeccionOpcionesComponent = /** @class */ (function () {
    function SeccionOpcionesComponent() {
    }
    SeccionOpcionesComponent.prototype.ngOnInit = function () {
    };
    SeccionOpcionesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-seccion-opciones',
            template: __webpack_require__("./src/app/componentes/seccion-opciones/seccion-opciones.component.html"),
            styles: [__webpack_require__("./src/app/componentes/seccion-opciones/seccion-opciones.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeccionOpcionesComponent);
    return SeccionOpcionesComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/beneficios.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Beneficio; });
/* unused harmony export Comercio */
var Beneficio = /** @class */ (function () {
    function Beneficio() {
        this.comercio = new Comercio();
    }
    return Beneficio;
}());

var Comercio = /** @class */ (function () {
    function Comercio() {
    }
    return Comercio;
}());



/***/ }),

/***/ "./src/app/interfaces/mensaje.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mensaje; });
var Mensaje = /** @class */ (function () {
    function Mensaje() {
    }
    return Mensaje;
}());



/***/ }),

/***/ "./src/app/interfaces/reserva.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Reserva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cliente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Vehiculo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Turno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Tarifa; });
/* unused harmony export Tipo */
var Reserva = /** @class */ (function () {
    function Reserva() {
        this.cliente = new Cliente();
        this.vehiculo = new Vehiculo();
        this.turno = new Turno();
        this.tarifa = new Tarifa();
        this.como_nos_conocio = null;
    }
    return Reserva;
}());

var Cliente = /** @class */ (function () {
    function Cliente() {
        this.tipo_documento = new Tipo();
        this.canton = new Tipo();
    }
    return Cliente;
}());

var Vehiculo = /** @class */ (function () {
    function Vehiculo() {
        this.tipo_vehiculo = new Tipo();
        this.tipo_especie = new Tipo();
        this.tipo_destino = new Tipo();
        this.marca = new Tipo();
        this.modelo = new Tipo();
    }
    return Vehiculo;
}());

var Turno = /** @class */ (function () {
    function Turno() {
        this.fecha = "";
        this.hora = "";
    }
    return Turno;
}());

var Tarifa = /** @class */ (function () {
    function Tarifa() {
    }
    return Tarifa;
}());

var Tipo = /** @class */ (function () {
    function Tipo() {
    }
    return Tipo;
}());



/***/ }),

/***/ "./src/app/pipes/style-sanitizer.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleSanitizerPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StyleSanitizerPipe = /** @class */ (function () {
    function StyleSanitizerPipe(domSanitazer) {
        this.domSanitazer = domSanitazer;
    }
    StyleSanitizerPipe.prototype.transform = function (value, args) {
        return this.domSanitazer.bypassSecurityTrustStyle(value);
    };
    StyleSanitizerPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'styleSanitizer'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], StyleSanitizerPipe);
    return StyleSanitizerPipe;
}());



/***/ }),

/***/ "./src/app/servicios/beneficios.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeneficiosService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeneficiosService = /** @class */ (function () {
    function BeneficiosService(req) {
        this.req = req;
        this.beneficios = new Array();
    }
    BeneficiosService.prototype.ObtenerBeneficios = function () {
        var _this = this;
        this.PedirBeneficios().subscribe(function (beneficios_recibidos) {
            _this.beneficios = beneficios_recibidos;
        }, function (error) {
            console.log("Error al obtener beneficios");
        });
    };
    BeneficiosService.prototype.PedirBeneficios = function () {
        return this.req.get('beneficios.listar.php');
    };
    BeneficiosService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], BeneficiosService);
    return BeneficiosService;
}());



/***/ }),

/***/ "./src/app/servicios/captcha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaptchaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CaptchaService = /** @class */ (function () {
    function CaptchaService() {
        this.captchaToken = null;
    }
    CaptchaService.prototype.setCaptchaToken = function (token) {
        this.captchaToken = token;
    };
    CaptchaService.prototype.getCaptchaToken = function () {
        return this.captchaToken;
    };
    CaptchaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CaptchaService);
    return CaptchaService;
}());



/***/ }),

/***/ "./src/app/servicios/contacto.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactoService = /** @class */ (function () {
    function ContactoService(req) {
        this.req = req;
    }
    ContactoService.prototype.NuevoMensaje = function (mensaje) {
        var body = { mensaje: mensaje };
        console.log("acá llega a la función NuevoMensaje() en ContsactoService", body);
        return this.req.post("contacto.guardar_mensaje.php", body);
    };
    ContactoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], ContactoService);
    return ContactoService;
}());



/***/ }),

/***/ "./src/app/servicios/encuesta.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EncuestaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Encuesta; });
/* unused harmony export RespuestasPreguntas */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EncuestaService = /** @class */ (function () {
    function EncuestaService(http) {
        this.http = http;
        //   public encuesta = {
        //     cliente:{ nombre: '', patente: '', fechaITV: '' },
        //     planta: 0,
        //     secciones:[
        //       {
        //         numero: '1',
        //         titulo: "Aspectos generales",
        //         preguntas: [
        //           {
        //             id:1,
        //             numero: 'a',
        //             pregunta: '¿Cuán satisfecho está usted con el orden y la limpieza de la planta?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:2,
        //             numero: 'b',
        //             pregunta: '¿Cuán satisfecho está usted con la atención  recibida en ventanilla de recepción?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:3,
        //             numero: 'c',
        //             pregunta: '¿Cuán satisfecho está usted con nuestra atención telefónica? (accesibilidad, cortesía, etc.)',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:4,
        //             numero: 'd',
        //             pregunta: '¿Cuán satisfecho está usted con el cuidado brindado a su vehículo en la línea de verificación?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:5,
        //             numero: 'e',
        //             pregunta: '¿Cuán satisfecho está usted con la explicación brindada por el personal técnico al recibir su informe de RTV?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:6,
        //             numero: 'f',
        //             pregunta: '¿Cuán satisfecho está usted con el tiempo empleado en la Verificación Vehicular?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           },
        //           {
        //             id:7,
        //             numero: 'g',
        //             pregunta: '¿Cuán satisfecho está usted con el servicio que actualmente le brinda la Verificación Vehicular?',
        //             respuestas: [
        //               {valor: 1, descripcion: 'Insatisfecho.'},
        //               {valor: 2, descripcion: 'Algo insatisfecho.'},
        //               {valor: 3, descripcion: 'Satisfecho.'},
        //               {valor: 4, descripcion: 'Muy satisfecho.'}
        //             ]
        //           }
        //         ]
        //       }
        //     ]
        //   }
        //   constructor(private http:RequestService) { 
        //   }
        //   /**
        //    * Devuelve un observable que envía una encuesta al servidor
        //    * @param encuesta Encuesta a enviar
        //    */
        //   enviarEncuesta(encuesta:Encuesta){
        //     let data = { encuesta:encuesta };
        //     return this.http.post('encuestas.nuevaEncuesta.php', data);
        //   }
        // }
        // export class Encuesta{
        //   public nombre:string
        //   public fechaRTV:string
        //   public patente:string
        //   public planta: string
        //   public respuestas: RespuestasPreguntas[]
        //   constructor(){
        //     this.respuestas = new Array<RespuestasPreguntas>();
        //   }
        // }
        // export class RespuestasPreguntas{
        //   public idpregunta:number
        //   public idrespuesta:number
        // }
        this.encuesta = {
            cliente: { nombre: '', mail: '', patente: '', fechaITV: '' },
            planta: 0,
            secciones: [
                {
                    numero: '1',
                    titulo: "Aspectos generales",
                    preguntas: [
                        {
                            id: 1,
                            numero: 'a',
                            pregunta: '¿Al comenzar tu experiencia con nosotros fuimos amables, te dimos la bienvenida y te explicamos el proceso paso a paso?',
                            respuestas: [
                                { valor: 1, descripcion: 'Insatisfecho.' },
                                { valor: 2, descripcion: 'Algo insatisfecho.' },
                                { valor: 3, descripcion: 'Satisfecho.' },
                                { valor: 4, descripcion: 'Muy satisfecho.' }
                            ]
                        },
                        {
                            id: 2,
                            numero: 'b',
                            pregunta: '¿Cómo califica la atención brindada hacia usted por el personal de planta?',
                            respuestas: [
                                { valor: 1, descripcion: 'Insatisfecho.' },
                                { valor: 2, descripcion: 'Algo insatisfecho.' },
                                { valor: 3, descripcion: 'Satisfecho.' },
                                { valor: 4, descripcion: 'Muy satisfecho.' }
                            ]
                        },
                        {
                            id: 3,
                            numero: 'c',
                            pregunta: '¿Las instalaciones se encuentra limpias y en buen estado?',
                            respuestas: [
                                { valor: 1, descripcion: 'Insatisfecho.' },
                                { valor: 2, descripcion: 'Algo insatisfecho.' },
                                { valor: 3, descripcion: 'Satisfecho.' },
                                { valor: 4, descripcion: 'Muy satisfecho.' }
                            ]
                        },
                        {
                            id: 4,
                            numero: 'd',
                            pregunta: '¿Cómo calificarías tu experiencia general sobre nuestro servicio?',
                            respuestas: [
                                { valor: 1, descripcion: 'Insatisfecho.' },
                                { valor: 2, descripcion: 'Algo insatisfecho.' },
                                { valor: 3, descripcion: 'Satisfecho.' },
                                { valor: 4, descripcion: 'Muy satisfecho.' }
                            ]
                        },
                        {
                            id: 5,
                            numero: 'e',
                            pregunta: '¿Recomendarías este centro a familiares o amigos?.',
                            respuestas: [
                                { valor: 1, descripcion: 'Insatisfecho.' },
                                { valor: 2, descripcion: 'Algo insatisfecho.' },
                                { valor: 3, descripcion: 'Satisfecho.' },
                                { valor: 4, descripcion: 'Muy satisfecho.' }
                            ]
                        },
                    ]
                }
            ]
        };
    }
    /**
     * Devuelve un observable que envía una encuesta al servidor
     * @param encuesta Encuesta a enviar
     */
    EncuestaService.prototype.enviarEncuesta = function (encuesta) {
        var data = { encuesta: encuesta };
        // console.log("estaaaaa",data);
        return this.http.post('encuestas.nuevaEncuesta.php', data);
    };
    EncuestaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], EncuestaService);
    return EncuestaService;
}());

var Encuesta = /** @class */ (function () {
    function Encuesta() {
        this.respuestas = new Array();
    }
    return Encuesta;
}());

var RespuestasPreguntas = /** @class */ (function () {
    function RespuestasPreguntas() {
    }
    return RespuestasPreguntas;
}());



/***/ }),

/***/ "./src/app/servicios/plantas.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlantasService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlantasService = /** @class */ (function () {
    function PlantasService(req) {
        this.req = req;
        this.plantas = [];
        this.cronograma_moviles = [];
        this.turnos_disponibles = [];
        this.ObtenerListadoPlantas().subscribe();
        this.ObtenerCronogramasMoviles().subscribe();
    }
    PlantasService.prototype.getPlanta = function (id) {
        for (var _i = 0, _a = this.plantas; _i < _a.length; _i++) {
            var planta = _a[_i];
            if (planta.codigo == id) {
                return planta;
            }
        }
    };
    PlantasService.prototype.ObtenerListadoPlantas = function () {
        var _this = this;
        return this.req.get("plantas.listado_de_plantas.php").map(function (resultado) {
            // console.log(resultado)
            _this.plantas = resultado;
            return resultado;
        }, this);
    };
    PlantasService.prototype.ObtenerListadoPlantasConTurno = function () {
        var _this = this;
        return this.req.get("plantas.plantas_con_turno.php").map(function (resultado) {
            // console.log(resultado)
            _this.plantas = resultado;
            return resultado;
        }, this);
    };
    PlantasService.prototype.ObtenerCronogramasMoviles = function () {
        var _this = this;
        return this.req.get("plantas.cronograma_moviles.php").map(function (resultado) {
            _this.cronograma_moviles = resultado;
            // console.log(this.cronograma_moviles);
            return resultado;
        }, this);
    };
    PlantasService.prototype.ObtenerTurnosPlanta = function (id_planta) {
        var _this = this;
        return this.req.get("plantas.turnos_disponibles.php", { id_planta: id_planta }).map(function (resultado) {
            _this.turnos_disponibles = resultado;
            return resultado;
        }, this);
    };
    PlantasService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */]])
    ], PlantasService);
    return PlantasService;
}());



/***/ }),

/***/ "./src/app/servicios/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        //private url_base = window.location.origin + "/WEB_MEXICO/Mexico-WebAPI/" // Para prod
        //private url_base = "http://localhost:80/WEB_MEXICO/Mexico-WebAPI/" // para probar aca
        //private url_base = "http://10.52.31.10/WEB_MEXICO/Mexico-WebAPI/"
        this.url_base = "http://187.188.141.119:80/WEB_MEXICO/Mexico-WebAPI/";
        if (window.location.origin.indexOf('applusrtv') >= 0) {
            this.url_base = window.location.origin + "/Ecuador_WEB/Ecuador-WebAPI/";
            //this.url_base = window.location.origin + "/WEB_ECUADOR/Ecuador-WebAPI/" // Para la 85
            //this.url_base = window.location.origin + "/Ecuador_WEB/Ecuador-WebAPI/" // En AppServ cambiamos nombre del directorio 19/07/21
            //this.url_base ="C:/AppServ/www/Ecuador_WEB/Ecuador-WebAPI/"
            //this.url_base ="http://10.93.10.5:81/Ecuador_WEB/Ecuador-WebAPI/"
        }
    }
    RequestService.prototype.get = function (url, params, headers) {
        if (params === void 0) { params = ""; }
        if (headers === void 0) { headers = null; }
        var params_string = "?";
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                params_string = params_string + key + "=" + params[key] + "&";
            }
        }
        return this.http.get(this.url_base + url + params_string);
    };
    RequestService.prototype.post = function (url, body, headers) {
        if (headers === void 0) { headers = null; }
        return this.http.post(this.url_base + url + "/", body, this.headers());
    };
    RequestService.prototype.headers = function () {
        return { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' }), };
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/servicios/reserva.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__ = __webpack_require__("./src/app/interfaces/reserva.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_service__ = __webpack_require__("./src/app/servicios/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservaService = /** @class */ (function () {
    function ReservaService(request) {
        this.request = request;
        this.datos_reserva = new __WEBPACK_IMPORTED_MODULE_1__interfaces_reserva__["b" /* Reserva */]();
    }
    /** enviarReserva
     * Envía los datos de la reserva para generar un nuevo turno
     */
    ReservaService.prototype.enviarReserva = function (captcha) {
        var _this = this;
        return this.request.post("reservas.realizar_reserva.php", __assign({}, this.datos_reserva, { captcha: captcha })).map(function (cod_reserva) {
            _this.datos_reserva.codigo_reserva = cod_reserva;
            return cod_reserva;
        });
    };
    /** consultarTurno
     * Consulta y trae la información de un turno según el código
     * @param codigo codigo de turno
     */ //this.codigo,this.matricula,this.cliente.numero_documento
    ReservaService.prototype.consultarTurno = function (codigo, matricula, nrodocumento) {
        var dato = { codigo: codigo,
            matricula: matricula,
            nrodocumento: nrodocumento };
        return this.request.get("reservas.consulta_codigo.php", dato);
    };
    /** cancelarTurno
     * Envía el número de id de un turno para marcarlo como cancelado en la tabla
     * @param numero ID De tabla rerva
     */
    ReservaService.prototype.cancelarTurno = function (numero, fecha, hora, centro) {
        var dato = {
            numero: numero,
            fecha: fecha,
            hora: hora,
            centro: centro
        };
        return this.request.post("reservas.eliminar_reserva.php", dato);
    };
    ReservaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__request_service__["a" /* RequestService */]])
    ], ReservaService);
    return ReservaService;
}());



/***/ }),

/***/ "./src/app/servicios/validaciones.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidacionesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidacionesService = /** @class */ (function () {
    function ValidacionesService() {
    }
    ValidacionesService.prototype.validaPatente = function (patente) {
        if (patente.length == 7) {
            //Valida autos patente XXX 1111
            if (this.alfabetico(patente[0]) && this.alfabetico(patente[1]) && this.alfabetico(patente[2]) && this.numerico(patente[3]) && this.numerico(patente[4]) && this.numerico(patente[5]) && this.numerico(patente[6]))
                return true;
        }
        if (patente.length == 6) {
            //Valida autos patente XX 111 X
            if (this.alfabetico(patente[0]) && this.alfabetico(patente[1]) && this.numerico(patente[2]) && this.numerico(patente[3]) && this.numerico(patente[4]) && this.alfabetico(patente[5]))
                return true;
        }
        return false;
    };
    ValidacionesService.prototype.calcularDVCIUruguay = function (ci) {
        var a = 0;
        var i = 0;
        if (ci.length <= 6) {
            for (i = ci.length; i < 7; i++) {
                ci = '0' + ci;
            }
        }
        for (i = 0; i < 7; i++) {
            a += (parseInt("2987634"[i]) * parseInt(ci[i])) % 10;
        }
        if (a % 10 === 0) {
            return 0;
        }
        else {
            return 10 - a % 10;
        }
    };
    ValidacionesService.prototype.validarCIUruguay = function (ci) {
        ci = ci.replace(/\D/g, '');
        var dig = ci[ci.length - 1];
        ci = ci.replace(/[0-9]$/, '');
        return (dig == this.calcularDVCIUruguay(ci));
    };
    ValidacionesService.prototype.validarMail = function (mail) {
        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!emailRegex.test(mail)) {
            return false;
        }
        return true;
    };
    ValidacionesService.prototype.alfabetico = function (car) {
        var alfa = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvxyz";
        return (alfa.indexOf(car) != -1);
    };
    ValidacionesService.prototype.numerico = function (car) {
        var num = "0123456789";
        return (num.indexOf(car) != -1);
    };
    ValidacionesService.prototype.validarCedulaEcuatoriana = function (cedula) {
        //La cédula debe tener 10 dígitos
        if (cedula.length == 9) {
            var cero = '0';
            cedula = cero.concat(cedula);
        }
        if (cedula.length != 10) {
            return false;
        }
        var c_array = cedula.split('');
        //Los primeros dos digitos representan la provincia (1 - 24) y 30 para ecuatorianos viviendo en el extranjero 
        if ((parseInt(c_array[0] + c_array[1]) < 0 || parseInt(c_array[0] + c_array[1]) > 24) && ((c_array[0] + c_array[1]) != '30')) {
            return false;
        }
        //El tercer dígito es un número menor a 6
        if (parseInt(c_array[2]) > 6) {
            return false;
        }
        //Coeficientes de verificación
        var coeficientes = [2, 1, 2, 1, 2, 1, 2, 1, 2];
        //Acumulados de coeficiente * número en cédula
        var resultado = 0;
        for (var i = 0; i < 9; i++) {
            var parcial = coeficientes[i] * parseInt(c_array[i]);
            if (parcial >= 10) {
                parcial = parcial - 9;
            }
            resultado += parcial;
        }
        var decena_superior = (Math.trunc(resultado / 10) + 1) * 10;
        var dv_calculado = decena_superior - resultado;
        dv_calculado = (dv_calculado == 10) ? 0 : dv_calculado;
        if (dv_calculado == parseInt(c_array[9])) {
            return true;
        }
        return false;
    };
    ValidacionesService.prototype.validarRUCEcuatoriana2 = function (ruc) {
        //El RUC debe tener 13 dígitos
        if (ruc.length != 13) {
            return false;
        }
        var ruc_array = ruc.split('');
        if (parseInt(ruc_array[2]) < 6) {
            //PERSONA NATURAL
            return this.validarCedulaEcuatoriana(ruc.slice(0, 10));
        }
        else if (ruc_array[2] == '6') {
            //Personas Públicas o Entidades Estatales
            var dv = ruc_array[8];
            var coeficientes = [3, 2, 7, 6, 5, 4, 3, 2];
            var suma = 0;
            for (var i = 0; i < 8; i++) {
                suma += coeficientes[i] * parseInt(ruc_array[i]);
            }
            var dv_calculado = 11 - (suma % 11);
            if (dv_calculado == parseInt(dv)) {
                return true;
            }
            return false;
        }
        else if (ruc_array[2] == '9') {
            //Sociedades privadas y extranjeros no residentes (sin cédula de identidad)
            var dv = ruc_array[8];
            var coeficientes = [4, 3, 2, 7, 6, 5, 4, 3, 2];
            var suma = 0;
            for (var i = 0; i < 8; i++) {
                suma += coeficientes[i] * parseInt(ruc_array[i]);
            }
            var dv_calculado = 11 - (suma % 11);
            if (dv_calculado == parseInt(dv)) {
                return true;
            }
            return false;
        }
    };
    ValidacionesService.prototype.validarRUCEcuatoriana = function (ruc) {
        var number = ruc;
        var dto = number.length;
        var valor;
        var acu = 0;
        if (number == "") {
            return false;
        }
        else {
            for (var i = 0; i < dto; i++) {
                valor = number.substring(i, i + 1);
                if (valor == 0 || valor == 1 || valor == 2 || valor == 3 || valor == 4 || valor == 5 || valor == 6 || valor == 7 || valor == 8 || valor == 9) {
                    acu = acu + 1;
                }
            }
            if (acu == dto) {
                while (number.substring(10, 13) != '001') {
                    return false;
                }
                while (number.substring(0, 2) > '24') {
                    return false;
                }
                //alert('El RUC está escrito correctamente');
                //alert('Se procederá a analizar el respectivo RUC.');
                var porcion1 = number.substring(2, 3);
                if (porcion1 < '6') {
                    //alert('El tercer dígito es menor a 6, por lo \ntanto el usuario es una persona natural.\n');
                }
                else {
                    if (porcion1 == '6') {
                        //alert('El tercer dígito es igual a 6, por lo \ntanto el usuario es una entidad pública.\n');
                    }
                    else {
                        if (porcion1 == '9') {
                            //alert('El tercer dígito es igual a 9, por lo \ntanto el usuario es una sociedad privada.\n');
                        }
                    }
                }
            }
            else {
                //alert("ERROR: Por favor no ingrese texto");
                return false;
            }
        }
        return true;
    };
    ValidacionesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidacionesService);
    return ValidacionesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: true,
    googleSiteKey: '6LcdvqcbAAAAAC8tck-co3HJJ88P9Wnf81Z7RnIQ'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map