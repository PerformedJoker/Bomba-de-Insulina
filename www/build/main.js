webpackJsonp([1],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrarUsuario_cadastrarUsuario__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */]);
    };
    LoginPage.prototype.goToCadastrarUsuario = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrarUsuario_cadastrarUsuario__["a" /* CadastrarUsuarioPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/login/login.html"*/'<ion-header>\n<ion-navbar hideBackButton = \'true\'>\n    <ion-title middle >\n       Smart Glic\n    </ion-title>\n</ion-navbar>\n</ion-header>\n  <ion-content padding id="page6" style="background-color:#2B6CD1;" >\n    <form id="login-form3">\n      <ion-list id="login-list2">\n        <ion-item id="login-input3">\n          <ion-label>\n            Email\n          </ion-label>\n          <ion-input type="email" placeholder=""></ion-input>\n        </ion-item>\n        <ion-item id="login-input4">\n          <ion-label>\n            Senha\n          </ion-label>\n          <ion-input type="password" placeholder=""></ion-input>\n        </ion-item>\n      </ion-list>\n      <button id="login-button3" ion-button color="stable" block on-click="goToHome()">\n        Entrar\n      </button>\n    </form>\n    <button id="login-button4" ion-button clear color="energized" block on-click="goToCadastrarUsuario()">\n      Crie uma Conta\n    </button>\n  </ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizar_tabela_resumo_visualizar_tabela_resumo__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizador_de_gr_ficos_visualizador_de_gr_ficos__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__graficos_graficos__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastros_cadastros__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsControllerPage = (function () {
    function TabsControllerPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__visualizar_tabela_resumo_visualizar_tabela_resumo__["a" /* VisualizarTabelaResumoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__visualizador_de_gr_ficos_visualizador_de_gr_ficos__["a" /* VisualizadorDeGrFicosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__graficos_graficos__["a" /* GraficosPage */]; //Botão de emergência
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__cadastros_cadastros__["a" /* CadastrosPage */];
    }
    return TabsControllerPage;
}());
TabsControllerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home" id="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Resumos" tabIcon="clipboard" id="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Graficos" tabIcon="podium" id="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Emergencia" tabIcon="warning" id="person"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Cadastro" tabIcon="create" id="tabsController-tab4"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/tabs-controller/tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTerapiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia2_cadastrar_terapia2__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CadastrarTerapiaPage = (function () {
    function CadastrarTerapiaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrarTerapiaPage.prototype.goToCadastrarTerapia2 = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia2_cadastrar_terapia2__["a" /* CadastrarTerapia2Page */]);
    };
    CadastrarTerapiaPage.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    return CadastrarTerapiaPage;
}());
CadastrarTerapiaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastrar-terapia',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrar-terapia/cadastrar-terapia.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cadastrar Terapia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n\n  <h3 id="cadastrarTerapia-heading1" style="color:#000000;">\n    Qual seu tipo de diabetes?\n  </h3>\n  <form id="cadastrarTerapia-form5">\n    <ion-item id="cadastrarTerapia-select1">\n      <ion-label>\n        Selecione\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Diabetes Tipo 1\n        </ion-option>\n        <ion-option>\n          Diabetes Tipo 2\n        </ion-option>\n        <ion-option>\n          Pré-Diabetes\n        </ion-option>\n        <ion-option>\n          Gestacional\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <h3 id="cadastrarTerapia-heading2" style="color:#000000;">\n    Qual o tipo de insulina usada\n  </h3>\n  <form id="cadastrarTerapia-form6">\n    <ion-item id="cadastrarTerapia-select2">\n      <ion-label>\n        Select\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Insumon R\n        </ion-option>\n        <ion-option>\n          Apidra\n        </ion-option>\n        <ion-option>\n          NovoRapid\n        </ion-option>\n        <ion-option>\n          Novolin R\n        </ion-option>\n        <ion-option>\n          Insulina Humana Regular\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <button id="cadastrarTerapia-button6" ion-button color="positive" block on-click="goToCadastrarTerapia2()">\n    Avançar\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrar-terapia/cadastrar-terapia.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CadastrarTerapiaPage);

//# sourceMappingURL=cadastrar-terapia.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		469,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarTabelaResumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VisualizarTabelaResumoPage = (function () {
    function VisualizarTabelaResumoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return VisualizarTabelaResumoPage;
}());
VisualizarTabelaResumoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-visualizar-tabela-resumo',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/visualizar-tabela-resumo/visualizar-tabela-resumo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Visualizar Tabela Resumo\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n<ion-list id="visualizarTabelaResumo-list8">\n    <ion-item-divider color="light" id="visualizarTabelaResumo-list-item-divider1">\n      Listagem das Ultimas Medições\n    </ion-item-divider>\n  </ion-list>\n  <ion-list id="visualizarTabelaResumo-list9">\n    <ion-item color="none" id="visualizarTabelaResumo-list-item26">\n      <ion-icon name="partly-sunny" item-left></ion-icon>\n      Hoje - 10/01/2017\n    </ion-item>\n    <ion-item color="none" id="visualizarTabelaResumo-list-item23">\n      Glicemia [14:00] : [156]\n    </ion-item>\n    <ion-item color="none" id="visualizarTabelaResumo-list-item24">\n      Glicemia [12:40] : [100]\n    </ion-item>\n    <ion-item color="none" id="visualizarTabelaResumo-list-item25">\n      Glicemia [10:40] : [106]\n    </ion-item>\n    <ion-item color="none" id="visualizarTabelaResumo-list-item27">\n      Glicemia [08:40] : [126]\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/visualizar-tabela-resumo/visualizar-tabela-resumo.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], VisualizarTabelaResumoPage);

//# sourceMappingURL=visualizar-tabela-resumo.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizadorDeGrFicosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisualizadorDeGrFicosPage = (function () {
    function VisualizadorDeGrFicosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.technologies = {
            "technologies": [
                {
                    'technology': '12:10 - 20/11',
                    'time': 180,
                    'color': 'rgba(206, 61, 95, 0.5)',
                    'hover': 'rgba(199, 108, 129, 0.5)'
                },
                {
                    'technology': '10:20 - 22/11',
                    'time': 140,
                    'color': 'rgba(83, 131, 185, 0.5)',
                    'hover': 'rgba(122, 160, 202, 0.5)'
                },
                {
                    'technology': '18:40 - 22/11',
                    'time': 156,
                    'color': 'rgba(83, 131, 185, 0.5)',
                    'hover': 'rgba(122, 160, 202, 0.5)'
                },
                {
                    'technology': '19:50 - 21/11',
                    'time': 300,
                    'color': 'rgba(83, 131, 185, 0.5)',
                    'hover': 'rgba(122, 160, 202, 0.5)'
                },
                {
                    'technology': '16:45 - 21:11 ',
                    'time': 158,
                    'color': 'rgba(83, 131, 185, 0.5)',
                    'hover': 'rgba(122, 160, 202, 0.5)'
                },
            ]
        };
        this.chartLabels = [];
        this.chartValues = [];
        this.chartColours = [];
        this.chartHoverColours = [];
    }
    VisualizadorDeGrFicosPage.prototype.ionViewDidLoad = function () {
        this.defineChartData();
        this.createLineChart();
    };
    /**
    *
    * Parse the JSON data, push specific keys into selected arrays for use with
    * each chart
    *
    */
    VisualizadorDeGrFicosPage.prototype.defineChartData = function () {
        var k;
        for (k in this.technologies.technologies) {
            var tech = this.technologies.technologies[k];
            this.chartLabels.push(tech.technology);
            this.chartValues.push(tech.time);
            this.chartColours.push(tech.color);
            this.chartHoverColours.push(tech.hover);
        }
    };
    /**
    *
    * Configure the Line chart, define configuration options
    *
    */
    VisualizadorDeGrFicosPage.prototype.createLineChart = function () {
        this.lineChartEl = new __WEBPACK_IMPORTED_MODULE_2_chart_js__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: this.chartLabels,
                datasets: [{
                        label: 'Nivel de Glicemia',
                        data: this.chartValues,
                        duration: 2000,
                        easing: 'easeInQuart',
                        backgroundColor: this.chartColours,
                        hoverBackgroundColor: this.chartHoverColours,
                        fill: true //(TRUE/FAlse) para ver ou não colorido
                    }] //abaixo da linha do grafico
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: true,
                    boxWidth: 100,
                    fontSize: 13,
                    padding: 0
                },
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 50,
                                max: 500
                            }
                        }],
                    xAxes: [{
                            ticks: {
                                autoSkip: false
                            }
                        }]
                }
            }
        });
    };
    return VisualizadorDeGrFicosPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lineChart'),
    __metadata("design:type", Object)
], VisualizadorDeGrFicosPage.prototype, "lineChart", void 0);
VisualizadorDeGrFicosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-visualizador-de-gr-ficos',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/visualizador-de-gr-ficos/visualizador-de-gr-ficos.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n    Grafico de Glicemia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n\n   <section class="chart-wrapper">\n      <canvas #lineChart></canvas>\n   </section>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/visualizador-de-gr-ficos/visualizador-de-gr-ficos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], VisualizadorDeGrFicosPage);

//# sourceMappingURL=visualizador-de-gr-ficos.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GraficosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GraficosPage = (function () {
    function GraficosPage(alertCtrl, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.showConfirm();
    }
    GraficosPage.prototype.showConfirm = function () {
        var confirm = this.alertCtrl.create({
            title: 'Botão de Emergencia ',
            message: 'Você deseja ligar para a Emergencia ?(911)',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Disagree clicked');
                        //this.navCtrl.(HomePage);
                    }
                },
                {
                    text: 'Ligar',
                    handler: function () {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    };
    return GraficosPage;
}());
GraficosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-graficos',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/graficos/graficos.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >\n      Emergência\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page17">\n<img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/graficos/graficos.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], GraficosPage);

//# sourceMappingURL=graficos.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTerapia2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastrarTerapia2Page = (function () {
    function CadastrarTerapia2Page(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrarTerapia2Page.prototype.goToHome = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return CadastrarTerapia2Page;
}());
CadastrarTerapia2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastrar-terapia2',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrar-terapia2/cadastrar-terapia2.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Cadastrar Terapia\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n<h3 id="cadastrarTerapia2-heading3" style="color:#000000;">\n    Horário usual de aplicação\n  </h3>\n  <form id="cadastrarTerapia2-form9">\n    <ion-item id="cadastrarTerapia2-select3">\n      <ion-label>\n        Selecione\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          manhã 05:00 - 11:59\n        </ion-option>\n        <ion-option>\n          tarde 12:00 - 17:59\n        </ion-option>\n        <ion-option>\n          noite 18:00 - 04:59\n        </ion-option>\n      </ion-select>\n    </ion-item>\n  </form>\n  <h3 id="cadastrarTerapia2-heading4" style="color:#000000;">\n    Faz mais de uma aplicação\n  </h3>\n  <form id="cadastrarTerapia2-form11">\n    <ion-item id="cadastrarTerapia2-toggle1">\n      <ion-label>\n        Sim\n      </ion-label>\n      <ion-toggle color="positive" checked="false"></ion-toggle>\n    </ion-item>\n    <button id="cadastrarTerapia2-button7" ion-button color="positive" block on-click="goToHome()">\n      finalizar\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrar-terapia2/cadastrar-terapia2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CadastrarTerapia2Page);

//# sourceMappingURL=cadastrar-terapia2.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insulina_emergencial_insulina_emergencial__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objetivo_glicemico_objetivo_glicemico__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dose_diaria_dose_diaria__ = __webpack_require__(336);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastrosPage = (function () {
    function CadastrosPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrosPage.prototype.goToCadastrarTerapia = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia_cadastrar_terapia__["a" /* CadastrarTerapiaPage */]);
    };
    CadastrosPage.prototype.goToDoseInsulina = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dose_diaria_dose_diaria__["a" /* DoseDiariaPage */]);
    };
    CadastrosPage.prototype.goToInsulinaEmergencial = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__insulina_emergencial_insulina_emergencial__["a" /* InsulinaEmergencialPage */]);
    };
    CadastrosPage.prototype.goToObjetivoGlicemico = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__objetivo_glicemico_objetivo_glicemico__["a" /* ObjetivoGlicemicoPage */]);
    };
    return CadastrosPage;
}());
CadastrosPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastros',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastros/cadastros.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cadastros\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page16">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n<ion-list id="cadastros-list5">\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToCadastrarTerapia()" id="cadastros-list-item9">\n        <ion-icon name="medical" item-left></ion-icon>\n        Tratamento\n        <ion-icon name="add" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item color="none" href-inappbrowser="page18" on-click="goToDoseInsulina()" id="cadastros-list-item7">\n      <ion-icon name="pulse" item-left></ion-icon>\n      Dose de Insulina\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToInsulinaEmergencial()" id="cadastros-list-item8">\n      <ion-icon name="medkit" item-left></ion-icon>\n      Insulina Emergencia\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToObjetivoGlicemico()" id="cadastros-list-item10">\n      <ion-icon name="body" item-left></ion-icon>\n      Objetivo Glicemico\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastros/cadastros.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CadastrosPage);

//# sourceMappingURL=cadastros.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsulinaEmergencialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InsulinaEmergencialPage = (function () {
    function InsulinaEmergencialPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return InsulinaEmergencialPage;
}());
InsulinaEmergencialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-insulina-emergencial',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/insulina-emergencial/insulina-emergencial.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Insulina Emergencial\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page19">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/insulina-emergencial/insulina-emergencial.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], InsulinaEmergencialPage);

//# sourceMappingURL=insulina-emergencial.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjetivoGlicemicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ObjetivoGlicemicoPage = (function () {
    function ObjetivoGlicemicoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ObjetivoGlicemicoPage;
}());
ObjetivoGlicemicoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-objetivo-glicemico',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/objetivo-glicemico/objetivo-glicemico.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons start>\n      <button ion-button></button>\n    </ion-buttons>\n    <ion-title>\n      Objetivo Glicemico\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page12">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n<div id="objetivoGlicemico-markdown2" class="show-list-numbers-and-dots"></div>\n  <div class="spacer" style="width:300px;height:12px;" id="objetivoGlicemico-spacer1"></div>\n  <div id="objetivoGlicemico-markdown3" class="show-list-numbers-and-dots">\n    <p style="color:#000000;">\n      O objetivo Glicêmico serve como um parâmetro de quantidade ideal de glicemia definida pelo médico com uma quantidade máxima e minima tidos como aceitaveis.\n    </p>\n  </div>\n  <form id="objetivoGlicemico-form13">\n    <ion-item id="objetivoGlicemico-range3">\n      <ion-range min="0" max="100" step="1" color="positive" pin="true" value="50">\n        <ion-label range-left>\n          Glicemia Ideal\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="objetivoGlicemico-range4">\n      <ion-range min="0" max="100" step="1" color="positive" pin="true"value="50">\n        <ion-label range-left>\n          Glicemia Max\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <ion-item id="objetivoGlicemico-range5">\n      <ion-range min="0" max="100" step="1" color="positive"  pin="true"value="50">\n        <ion-label range-left>\n          Glicemia Min\n        </ion-label>\n      </ion-range>\n    </ion-item>\n    <button id="objetivoGlicemico-button8" ion-button color="positive" block on-click="goToHome()">\n      Salvar Objetivo\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/objetivo-glicemico/objetivo-glicemico.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ObjetivoGlicemicoPage);

//# sourceMappingURL=objetivo-glicemico.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoseDiariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DoseDiariaPage = (function () {
    function DoseDiariaPage(navCtrl, modalCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.eventSource = [];
        this.selectedDay = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date()
        };
    }
    DoseDiariaPage.prototype.addEvent = function () {
        var _this = this;
        var modal = this.modalCtrl.create('EventModalPage', { selectedDay: this.selectedDay });
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                var eventData = data;
                eventData.startTime = new Date(data.startTime);
                eventData.endTime = new Date(data.endTime);
                var events_1 = _this.eventSource;
                events_1.push(eventData);
                _this.eventSource = [];
                setTimeout(function () {
                    _this.eventSource = events_1;
                });
            }
        });
    };
    DoseDiariaPage.prototype.onViewTitleChanged = function (title) {
        this.viewTitle = title;
    };
    DoseDiariaPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var end = __WEBPACK_IMPORTED_MODULE_2_moment__(event.endTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start + '<br>To: ' + end,
            buttons: ['OK']
        });
        alert.present();
    };
    DoseDiariaPage.prototype.onTimeSelected = function (ev) {
        this.selectedDay = ev.selectedTime;
    };
    return DoseDiariaPage;
}());
DoseDiariaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-dose-diaria',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/dose-diaria/dose-diaria.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{ viewTitle }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addEvent()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n<calendar [eventSource]="eventSource"\n        [calendarMode]="calendar.mode"\n        [currentDate]="calendar.currentDate"\n        (onEventSelected)="onEventSelected($event)"\n        (onTitleChanged)="onViewTitleChanged($event)"\n        (onTimeSelected)="onTimeSelected($event)"\n        step="30"\n        class="calendar">\n      </calendar>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/dose-diaria/dose-diaria.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], DoseDiariaPage);

//# sourceMappingURL=dose-diaria.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CadastrarUsuarioPage = (function () {
    function CadastrarUsuarioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CadastrarUsuarioPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return CadastrarUsuarioPage;
}());
CadastrarUsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-cadastrarUsuario',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrarUsuario/cadastrarUsuario.html"*/'<ion-header >\n  <ion-navbar >\n    <ion-title>\n      Cadastrar Usuário\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n  \n  <form id="cadastrarUsuario-form4">\n    <ion-list id="cadastrarUsuario-list3">\n      <ion-item id="cadastrarUsuario-input5">\n        <ion-label>\n          Name\n        </ion-label>\n        <ion-input type="text" placeholder="" name="Nome"></ion-input>\n      </ion-item>\n      <ion-item id="cadastrarUsuario-input6">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastrarUsuario-input7">\n        <ion-label>\n          Senha\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="cadastrarUsuario-input8">\n        <ion-label>\n          Confirmar Senha\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n  </form>\n  <button id="cadastrarUsuario-button5" ion-button color="positive" on-click="goToLogin()">\n    Cadastrar\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastrarUsuario/cadastrarUsuario.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CadastrarUsuarioPage);

//# sourceMappingURL=cadastrarUsuario.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(357);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastrarUsuario_cadastrarUsuario__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastrar_terapia2_cadastrar_terapia2__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_objetivo_glicemico_objetivo_glicemico__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calcular_dose_calcular_dose__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_visualizador_de_gr_ficos_visualizador_de_gr_ficos__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visualizar_tabela_resumo_visualizar_tabela_resumo__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_graficos_graficos__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_ng2_charts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cadastrarUsuario_cadastrarUsuario__["a" /* CadastrarUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_terapia_cadastrar_terapia__["a" /* CadastrarTerapiaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cadastrar_terapia2_cadastrar_terapia2__["a" /* CadastrarTerapia2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_objetivo_glicemico_objetivo_glicemico__["a" /* ObjetivoGlicemicoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_calcular_dose_calcular_dose__["a" /* CalcularDosePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_visualizador_de_gr_ficos_visualizador_de_gr_ficos__["a" /* VisualizadorDeGrFicosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_visualizar_tabela_resumo_visualizar_tabela_resumo__["a" /* VisualizarTabelaResumoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_graficos_graficos__["a" /* GraficosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__["a" /* CadastrosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_graficos_graficos__["a" /* GraficosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__["a" /* InsulinaEmergencialPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__["a" /* DoseDiariaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_21_ng2_charts__["ChartsModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsPlacement: 'bottom', backButtonText: '' }, {
                links: [
                    { loadChildren: '../pages/event-modal/event-modal.module#EventModalPageModule', name: 'EventModalPage', segment: 'event-modal', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__["a" /* TabsControllerPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_cadastrarUsuario_cadastrarUsuario__["a" /* CadastrarUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_terapia_cadastrar_terapia__["a" /* CadastrarTerapiaPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_cadastrar_terapia2_cadastrar_terapia2__["a" /* CadastrarTerapia2Page */],
            __WEBPACK_IMPORTED_MODULE_10__pages_objetivo_glicemico_objetivo_glicemico__["a" /* ObjetivoGlicemicoPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_calcular_dose_calcular_dose__["a" /* CalcularDosePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_visualizador_de_gr_ficos_visualizador_de_gr_ficos__["a" /* VisualizadorDeGrFicosPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_visualizar_tabela_resumo_visualizar_tabela_resumo__["a" /* VisualizarTabelaResumoPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_graficos_graficos__["a" /* GraficosPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__["a" /* CadastrosPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_graficos_graficos__["a" /* GraficosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__["a" /* DoseDiariaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__["a" /* InsulinaEmergencialPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 161,
	"./af.js": 161,
	"./ar": 162,
	"./ar-dz": 163,
	"./ar-dz.js": 163,
	"./ar-kw": 164,
	"./ar-kw.js": 164,
	"./ar-ly": 165,
	"./ar-ly.js": 165,
	"./ar-ma": 166,
	"./ar-ma.js": 166,
	"./ar-sa": 167,
	"./ar-sa.js": 167,
	"./ar-tn": 168,
	"./ar-tn.js": 168,
	"./ar.js": 162,
	"./az": 169,
	"./az.js": 169,
	"./be": 170,
	"./be.js": 170,
	"./bg": 171,
	"./bg.js": 171,
	"./bm": 172,
	"./bm.js": 172,
	"./bn": 173,
	"./bn.js": 173,
	"./bo": 174,
	"./bo.js": 174,
	"./br": 175,
	"./br.js": 175,
	"./bs": 176,
	"./bs.js": 176,
	"./ca": 177,
	"./ca.js": 177,
	"./cs": 178,
	"./cs.js": 178,
	"./cv": 179,
	"./cv.js": 179,
	"./cy": 180,
	"./cy.js": 180,
	"./da": 181,
	"./da.js": 181,
	"./de": 182,
	"./de-at": 183,
	"./de-at.js": 183,
	"./de-ch": 184,
	"./de-ch.js": 184,
	"./de.js": 182,
	"./dv": 185,
	"./dv.js": 185,
	"./el": 186,
	"./el.js": 186,
	"./en-au": 187,
	"./en-au.js": 187,
	"./en-ca": 188,
	"./en-ca.js": 188,
	"./en-gb": 189,
	"./en-gb.js": 189,
	"./en-ie": 190,
	"./en-ie.js": 190,
	"./en-nz": 191,
	"./en-nz.js": 191,
	"./eo": 192,
	"./eo.js": 192,
	"./es": 193,
	"./es-do": 194,
	"./es-do.js": 194,
	"./es-us": 195,
	"./es-us.js": 195,
	"./es.js": 193,
	"./et": 196,
	"./et.js": 196,
	"./eu": 197,
	"./eu.js": 197,
	"./fa": 198,
	"./fa.js": 198,
	"./fi": 199,
	"./fi.js": 199,
	"./fo": 200,
	"./fo.js": 200,
	"./fr": 201,
	"./fr-ca": 202,
	"./fr-ca.js": 202,
	"./fr-ch": 203,
	"./fr-ch.js": 203,
	"./fr.js": 201,
	"./fy": 204,
	"./fy.js": 204,
	"./gd": 205,
	"./gd.js": 205,
	"./gl": 206,
	"./gl.js": 206,
	"./gom-latn": 207,
	"./gom-latn.js": 207,
	"./gu": 208,
	"./gu.js": 208,
	"./he": 209,
	"./he.js": 209,
	"./hi": 210,
	"./hi.js": 210,
	"./hr": 211,
	"./hr.js": 211,
	"./hu": 212,
	"./hu.js": 212,
	"./hy-am": 213,
	"./hy-am.js": 213,
	"./id": 214,
	"./id.js": 214,
	"./is": 215,
	"./is.js": 215,
	"./it": 216,
	"./it.js": 216,
	"./ja": 217,
	"./ja.js": 217,
	"./jv": 218,
	"./jv.js": 218,
	"./ka": 219,
	"./ka.js": 219,
	"./kk": 220,
	"./kk.js": 220,
	"./km": 221,
	"./km.js": 221,
	"./kn": 222,
	"./kn.js": 222,
	"./ko": 223,
	"./ko.js": 223,
	"./ky": 224,
	"./ky.js": 224,
	"./lb": 225,
	"./lb.js": 225,
	"./lo": 226,
	"./lo.js": 226,
	"./lt": 227,
	"./lt.js": 227,
	"./lv": 228,
	"./lv.js": 228,
	"./me": 229,
	"./me.js": 229,
	"./mi": 230,
	"./mi.js": 230,
	"./mk": 231,
	"./mk.js": 231,
	"./ml": 232,
	"./ml.js": 232,
	"./mr": 233,
	"./mr.js": 233,
	"./ms": 234,
	"./ms-my": 235,
	"./ms-my.js": 235,
	"./ms.js": 234,
	"./mt": 236,
	"./mt.js": 236,
	"./my": 237,
	"./my.js": 237,
	"./nb": 238,
	"./nb.js": 238,
	"./ne": 239,
	"./ne.js": 239,
	"./nl": 240,
	"./nl-be": 241,
	"./nl-be.js": 241,
	"./nl.js": 240,
	"./nn": 242,
	"./nn.js": 242,
	"./pa-in": 243,
	"./pa-in.js": 243,
	"./pl": 244,
	"./pl.js": 244,
	"./pt": 245,
	"./pt-br": 246,
	"./pt-br.js": 246,
	"./pt.js": 245,
	"./ro": 247,
	"./ro.js": 247,
	"./ru": 248,
	"./ru.js": 248,
	"./sd": 249,
	"./sd.js": 249,
	"./se": 250,
	"./se.js": 250,
	"./si": 251,
	"./si.js": 251,
	"./sk": 252,
	"./sk.js": 252,
	"./sl": 253,
	"./sl.js": 253,
	"./sq": 254,
	"./sq.js": 254,
	"./sr": 255,
	"./sr-cyrl": 256,
	"./sr-cyrl.js": 256,
	"./sr.js": 255,
	"./ss": 257,
	"./ss.js": 257,
	"./sv": 258,
	"./sv.js": 258,
	"./sw": 259,
	"./sw.js": 259,
	"./ta": 260,
	"./ta.js": 260,
	"./te": 261,
	"./te.js": 261,
	"./tet": 262,
	"./tet.js": 262,
	"./th": 263,
	"./th.js": 263,
	"./tl-ph": 264,
	"./tl-ph.js": 264,
	"./tlh": 265,
	"./tlh.js": 265,
	"./tr": 266,
	"./tr.js": 266,
	"./tzl": 267,
	"./tzl.js": 267,
	"./tzm": 268,
	"./tzm-latn": 269,
	"./tzm-latn.js": 269,
	"./tzm.js": 268,
	"./uk": 270,
	"./uk.js": 270,
	"./ur": 271,
	"./ur.js": 271,
	"./uz": 272,
	"./uz-latn": 273,
	"./uz-latn.js": 273,
	"./uz.js": 272,
	"./vi": 274,
	"./vi.js": 274,
	"./x-pseudo": 275,
	"./x-pseudo.js": 275,
	"./yo": 276,
	"./yo.js": 276,
	"./zh-cn": 277,
	"./zh-cn.js": 277,
	"./zh-hk": 278,
	"./zh-hk.js": 278,
	"./zh-tw": 279,
	"./zh-tw.js": 279
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 382;

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "navCtrl", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcularDosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalcularDosePage = (function () {
    function CalcularDosePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return CalcularDosePage;
}());
CalcularDosePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-calcular-dose',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/calcular-dose/calcular-dose.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Calcular Dose\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page13">\n    <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;" />\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/calcular-dose/calcular-dose.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CalcularDosePage);

//# sourceMappingURL=calcular-dose.js.map

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabs = __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
    }
    HomePage.prototype.goToCadastrarTerapia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_terapia_cadastrar_terapia__["a" /* CadastrarTerapiaPage */]);
    };
    HomePage.prototype.goToCadastrarUsuario = function (params) {
        if (!params)
            params = {};
        //  this.navCtrl.push(CadastrarUsuarioPage);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar hideBackButton = \'true\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Início\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-avatar-page" padding id="page8" style="background-color:#FFFFFF;">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n\n  <ion-list id="Hoje">\n    <ion-list-header no-lines>\n        Hoje\n    </ion-list-header >\n    <ion-item>\n      <ion-avatar   item-start>\n          <img src="assets/img/water-icon.png">\n      </ion-avatar>\n      <h2>Glicemia</h2>\n      <p>156(mg/dL)</p>\n      <ion-note item-end>18:40</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/syringe-icon.png">\n      </ion-avatar>\n      <h2>Insulinização <i>Basal</i></h2>\n      <p>0,3 U </p>\n      <ion-note item-end>12:10</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/warning-icon.png">\n      </ion-avatar>\n      <h2>Hipoglicemia</h2>\n      <p>140(mg/dL)</p>\n      <ion-note item-end>10:20</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list id="20/11/2017">\n    <ion-list-header no-lines>\n      20/11/201\n    </ion-list-header >\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/syringe-icon.png">\n      </ion-avatar>\n      <h2>Insulinização <i> Bolus</i></h2>\n      <p>0,4 U</p>\n      <ion-note item-end>18:40</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/water-icon.png">\n      </ion-avatar>\n      <h2>Glicemia</h2>\n      <p>180(mg/dL)</p>\n      <ion-note item-end>12:10</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/dinner-icon.png">\n      </ion-avatar>\n      <h2>Refeição (Café da Manha)</h2>\n      <p>140(mg/dL)</p>\n      <ion-note item-end>10:20</ion-note>\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[338]);
//# sourceMappingURL=main.js.map