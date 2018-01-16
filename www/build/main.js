webpackJsonp([1],{

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrarUsuario_cadastrarUsuario__ = __webpack_require__(340);
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsControllerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__visualizar_tabela_resumo_visualizar_tabela_resumo__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visualizador_de_gr_ficos_visualizador_de_gr_ficos__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emergecia_emergencia__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastros_cadastros__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__perfil_usuario_perfil_usuario__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(9);
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
    function TabsControllerPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_0__visualizar_tabela_resumo_visualizar_tabela_resumo__["a" /* VisualizarTabelaResumoPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__visualizador_de_gr_ficos_visualizador_de_gr_ficos__["a" /* VisualizadorDeGrFicosPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__emergecia_emergencia__["a" /* EmergenciaPage */]; //Botão de emergência
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__cadastros_cadastros__["a" /* CadastrosPage */];
        this.tab6Root = __WEBPACK_IMPORTED_MODULE_6__perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */];
    }
    TabsControllerPage.prototype.showConfirm = function (bool) {
        if (true) {
            var confirm_1 = this.alertCtrl.create({
                title: 'Botão de Emergencia ',
                message: 'Você deseja ligar para a Emergencia ?(911)',
                buttons: [
                    {
                        text: 'Não',
                        handler: function () {
                            console.log('Disagree clicked');
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
            confirm_1.present();
        }
    };
    return TabsControllerPage;
}());
TabsControllerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/tabs-controller/tabs-controller.html"*/'<ion-tabs color="dark">\n  <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home" id="person"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Resumos" tabIcon="clipboard" id="person"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Graficos" tabIcon="podium" id="person"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Emergencia" tabIcon="warning" id="person" on-click="showConfirm(true)"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Cadastro" tabIcon="create" id="tabsController-tab4"></ion-tab>\n  <ion-tab [root]="tab6Root" tabTitle="Perfil" tabIcon="contact" id="tabsController-tab6"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/tabs-controller/tabs-controller.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* AlertController */]])
], TabsControllerPage);

//# sourceMappingURL=tabs-controller.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTerapiaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia2_cadastrar_terapia2__ = __webpack_require__(334);
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

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoseDiariaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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
            subTitle: 'Inicia: ' + start + '<br>Termina: ' + end,
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

/***/ 122:
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
webpackEmptyAsyncContext.id = 122;

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/event-modal/event-modal.module": [
		472,
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
webpackAsyncContext.id = 163;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizarTabelaResumoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisualizadorDeGrFicosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__(327);
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

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmergenciaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmergenciaPage = (function () {
    function EmergenciaPage(alertCtrl, navCtrl, viewCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.showConfirm();
        this.navCtrl.popToRoot();
    }
    EmergenciaPage.prototype.showConfirm = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Botão de Emergencia ',
            message: 'Você deseja ligar para a Emergencia ?(911)',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Disagree clicked');
                        _this.viewCtrl.dismiss();
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
    EmergenciaPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    return EmergenciaPage;
}());
EmergenciaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-emergencia',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/emergecia/emergencia.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >\n      Emergência\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page17">\n<img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/emergecia/emergencia.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
], EmergenciaPage);

//# sourceMappingURL=emergencia.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarTerapia2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AjudaPage = (function () {
    function AjudaPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return AjudaPage;
}());
AjudaPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ajuda',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/ajuda/ajuda.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Ajuda e informações\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page21">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:40%;max-height:40%;margin-left:auto;margin-right:auto;" />\n  <ion-card>\n    <ion-card-header>\n      Opções de Ajuda\n    </ion-card-header>\n\n    <ion-list>\n      <button ion-item>\n        <ion-icon name="cart" item-start></ion-icon>\n        Shopping\n      </button>\n\n      <button ion-item>\n        <ion-icon name="medical" item-start></ion-icon>\n        Hospital\n      </button>\n\n      <button ion-item>\n        <ion-icon name="cafe" item-start></ion-icon>\n        Cafe\n      </button>\n\n      <button ion-item>\n        <ion-icon name="paw" item-start></ion-icon>\n        Dog Park\n      </button>\n\n      <button ion-item>\n        <ion-icon name="beer" item-start></ion-icon>\n        Pub\n      </button>\n\n      <button ion-item>\n        <ion-icon name="planet" item-start></ion-icon>\n        Space\n      </button>\n\n    </ion-list>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/ajuda/ajuda.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], AjudaPage);

//# sourceMappingURL=ajuda.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__insulina_emergencial_insulina_emergencial__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__objetivo_glicemico_objetivo_glicemico__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dose_diaria_dose_diaria__ = __webpack_require__(113);
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
        selector: 'page-cadastros',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastros/cadastros.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Cadastros\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page16">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n<ion-list id="cadastros-list5">\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToCadastrarTerapia()" id="cadastros-list-item9">\n        <ion-icon name="medical" item-left></ion-icon>\n        Tratamento\n        <ion-icon name="add" item-right></ion-icon>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive"></button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item color="none" href-inappbrowser="page18" on-click="goToDoseInsulina()" id="cadastros-list-item7">\n      <ion-icon name="ios-water" item-left></ion-icon>\n      Dose de Insulina\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToInsulinaEmergencial()" id="cadastros-list-item8">\n      <ion-icon name="medkit" item-left></ion-icon>\n      Insulina Emergencia\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n    <ion-item color="none" on-click="goToObjetivoGlicemico()" id="cadastros-list-item10">\n      <ion-icon name="body" item-left></ion-icon>\n      Objetivo Glicemico\n      <ion-icon name="add" item-right></ion-icon>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/cadastros/cadastros.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], CadastrosPage);

//# sourceMappingURL=cadastros.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InsulinaEmergencialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ObjetivoGlicemicoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PerfilUsuarioPage = (function () {
    function PerfilUsuarioPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return PerfilUsuarioPage;
}());
PerfilUsuarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'perfil-usuario',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/perfil-usuario/perfil-usuario.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Perfil usuário\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page18">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:40%;max-height:40%;margin-left:auto;margin-right:auto;" />\n  <ion-list id="perfilUsuRio-list11">\n    <ion-item color="dark" id="perfilUsuRio-list-item12">\n      <ion-icon name="contact" item-left></ion-icon>\n      Dados do Usuário\n    </ion-item>\n  </ion-list>\n  <ion-list id="perfilUsuRio-list12">\n    <ion-item color="none" id="perfilUsuRio-list-item17">\n      nome\n    </ion-item>\n    <ion-item color="none" id="perfilUsuRio-list-item18">\n      email\n    </ion-item>\n    <ion-item color="none" id="perfilUsuRio-list-item19">\n      Endereço\n    </ion-item>\n    <ion-item color="none" id="perfilUsuRio-list-item20">\n      Tratamento\n    </ion-item>\n    <ion-item color="none" id="perfilUsuRio-list-item21">\n      Tipo de Insulina\n    </ion-item>\n    <ion-item color="none" id="perfilUsuRio-list-item22">\n      Objetivo Glicêmico Ideal\n    </ion-item>\n    <ion-item>\n      <!-- Sem item, codigo para acrescentar uma linha ao final do formulário-->\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/perfil-usuario/perfil-usuario.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], PerfilUsuarioPage);

//# sourceMappingURL=perfil-usuario.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastrarUsuarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(110);
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

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(360);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_controller_tabs_controller__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cadastrarUsuario_cadastrarUsuario__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cadastrar_terapia2_cadastrar_terapia2__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_objetivo_glicemico_objetivo_glicemico__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_calcular_dose_calcular_dose__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_visualizador_de_gr_ficos_visualizador_de_gr_ficos__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_visualizar_tabela_resumo_visualizar_tabela_resumo__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_emergecia_emergencia__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_perfil_usuario_perfil_usuario__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_local_notification_local_notification__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_local_notifications__ = __webpack_require__(114);
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
AppModule.teste = 'teste de variavel global';
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
            __WEBPACK_IMPORTED_MODULE_15__pages_emergecia_emergencia__["a" /* EmergenciaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__["a" /* CadastrosPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__["a" /* InsulinaEmergencialPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__["a" /* DoseDiariaPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_local_notification_local_notification__["a" /* LocalNotificationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__["a" /* AjudaPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17_ionic2_calendar__["a" /* NgCalendarModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_23_ng2_charts__["ChartsModule"],
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
            __WEBPACK_IMPORTED_MODULE_15__pages_emergecia_emergencia__["a" /* EmergenciaPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_cadastros_cadastros__["a" /* CadastrosPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_dose_diaria_dose_diaria__["a" /* DoseDiariaPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_insulina_emergencial_insulina_emergencial__["a" /* InsulinaEmergencialPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_perfil_usuario_perfil_usuario__["a" /* PerfilUsuarioPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_local_notification_local_notification__["a" /* LocalNotificationPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_ajuda_ajuda__["a" /* AjudaPage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_local_notifications__["a" /* LocalNotifications */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 164,
	"./af.js": 164,
	"./ar": 165,
	"./ar-dz": 166,
	"./ar-dz.js": 166,
	"./ar-kw": 167,
	"./ar-kw.js": 167,
	"./ar-ly": 168,
	"./ar-ly.js": 168,
	"./ar-ma": 169,
	"./ar-ma.js": 169,
	"./ar-sa": 170,
	"./ar-sa.js": 170,
	"./ar-tn": 171,
	"./ar-tn.js": 171,
	"./ar.js": 165,
	"./az": 172,
	"./az.js": 172,
	"./be": 173,
	"./be.js": 173,
	"./bg": 174,
	"./bg.js": 174,
	"./bm": 175,
	"./bm.js": 175,
	"./bn": 176,
	"./bn.js": 176,
	"./bo": 177,
	"./bo.js": 177,
	"./br": 178,
	"./br.js": 178,
	"./bs": 179,
	"./bs.js": 179,
	"./ca": 180,
	"./ca.js": 180,
	"./cs": 181,
	"./cs.js": 181,
	"./cv": 182,
	"./cv.js": 182,
	"./cy": 183,
	"./cy.js": 183,
	"./da": 184,
	"./da.js": 184,
	"./de": 185,
	"./de-at": 186,
	"./de-at.js": 186,
	"./de-ch": 187,
	"./de-ch.js": 187,
	"./de.js": 185,
	"./dv": 188,
	"./dv.js": 188,
	"./el": 189,
	"./el.js": 189,
	"./en-au": 190,
	"./en-au.js": 190,
	"./en-ca": 191,
	"./en-ca.js": 191,
	"./en-gb": 192,
	"./en-gb.js": 192,
	"./en-ie": 193,
	"./en-ie.js": 193,
	"./en-nz": 194,
	"./en-nz.js": 194,
	"./eo": 195,
	"./eo.js": 195,
	"./es": 196,
	"./es-do": 197,
	"./es-do.js": 197,
	"./es-us": 198,
	"./es-us.js": 198,
	"./es.js": 196,
	"./et": 199,
	"./et.js": 199,
	"./eu": 200,
	"./eu.js": 200,
	"./fa": 201,
	"./fa.js": 201,
	"./fi": 202,
	"./fi.js": 202,
	"./fo": 203,
	"./fo.js": 203,
	"./fr": 204,
	"./fr-ca": 205,
	"./fr-ca.js": 205,
	"./fr-ch": 206,
	"./fr-ch.js": 206,
	"./fr.js": 204,
	"./fy": 207,
	"./fy.js": 207,
	"./gd": 208,
	"./gd.js": 208,
	"./gl": 209,
	"./gl.js": 209,
	"./gom-latn": 210,
	"./gom-latn.js": 210,
	"./gu": 211,
	"./gu.js": 211,
	"./he": 212,
	"./he.js": 212,
	"./hi": 213,
	"./hi.js": 213,
	"./hr": 214,
	"./hr.js": 214,
	"./hu": 215,
	"./hu.js": 215,
	"./hy-am": 216,
	"./hy-am.js": 216,
	"./id": 217,
	"./id.js": 217,
	"./is": 218,
	"./is.js": 218,
	"./it": 219,
	"./it.js": 219,
	"./ja": 220,
	"./ja.js": 220,
	"./jv": 221,
	"./jv.js": 221,
	"./ka": 222,
	"./ka.js": 222,
	"./kk": 223,
	"./kk.js": 223,
	"./km": 224,
	"./km.js": 224,
	"./kn": 225,
	"./kn.js": 225,
	"./ko": 226,
	"./ko.js": 226,
	"./ky": 227,
	"./ky.js": 227,
	"./lb": 228,
	"./lb.js": 228,
	"./lo": 229,
	"./lo.js": 229,
	"./lt": 230,
	"./lt.js": 230,
	"./lv": 231,
	"./lv.js": 231,
	"./me": 232,
	"./me.js": 232,
	"./mi": 233,
	"./mi.js": 233,
	"./mk": 234,
	"./mk.js": 234,
	"./ml": 235,
	"./ml.js": 235,
	"./mr": 236,
	"./mr.js": 236,
	"./ms": 237,
	"./ms-my": 238,
	"./ms-my.js": 238,
	"./ms.js": 237,
	"./mt": 239,
	"./mt.js": 239,
	"./my": 240,
	"./my.js": 240,
	"./nb": 241,
	"./nb.js": 241,
	"./ne": 242,
	"./ne.js": 242,
	"./nl": 243,
	"./nl-be": 244,
	"./nl-be.js": 244,
	"./nl.js": 243,
	"./nn": 245,
	"./nn.js": 245,
	"./pa-in": 246,
	"./pa-in.js": 246,
	"./pl": 247,
	"./pl.js": 247,
	"./pt": 248,
	"./pt-br": 249,
	"./pt-br.js": 249,
	"./pt.js": 248,
	"./ro": 250,
	"./ro.js": 250,
	"./ru": 251,
	"./ru.js": 251,
	"./sd": 252,
	"./sd.js": 252,
	"./se": 253,
	"./se.js": 253,
	"./si": 254,
	"./si.js": 254,
	"./sk": 255,
	"./sk.js": 255,
	"./sl": 256,
	"./sl.js": 256,
	"./sq": 257,
	"./sq.js": 257,
	"./sr": 258,
	"./sr-cyrl": 259,
	"./sr-cyrl.js": 259,
	"./sr.js": 258,
	"./ss": 260,
	"./ss.js": 260,
	"./sv": 261,
	"./sv.js": 261,
	"./sw": 262,
	"./sw.js": 262,
	"./ta": 263,
	"./ta.js": 263,
	"./te": 264,
	"./te.js": 264,
	"./tet": 265,
	"./tet.js": 265,
	"./th": 266,
	"./th.js": 266,
	"./tl-ph": 267,
	"./tl-ph.js": 267,
	"./tlh": 268,
	"./tlh.js": 268,
	"./tr": 269,
	"./tr.js": 269,
	"./tzl": 270,
	"./tzl.js": 270,
	"./tzm": 271,
	"./tzm-latn": 272,
	"./tzm-latn.js": 272,
	"./tzm.js": 271,
	"./uk": 273,
	"./uk.js": 273,
	"./ur": 274,
	"./ur.js": 274,
	"./uz": 275,
	"./uz-latn": 276,
	"./uz-latn.js": 276,
	"./uz.js": 275,
	"./vi": 277,
	"./vi.js": 277,
	"./x-pseudo": 278,
	"./x-pseudo.js": 278,
	"./yo": 279,
	"./yo.js": 279,
	"./zh-cn": 280,
	"./zh-cn.js": 280,
	"./zh-hk": 281,
	"./zh-hk.js": 281,
	"./zh-tw": 282,
	"./zh-tw.js": 282
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
webpackContext.id = 385;

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(110);
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

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalcularDosePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
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

/***/ 462:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalNotificationPage = (function () {
    function LocalNotificationPage(navCtrl, plt, localNotifications, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.localNotifications = localNotifications;
        this.plt.ready().then(function (readySource) {
            _this.localNotifications.on('click', function (notification, state) {
                var json = JSON.parse(notification.data);
                var alert = alertCtrl.create({
                    title: notification.title,
                    subTitle: json.mydata
                });
                alert.present();
            });
        });
    }
    LocalNotificationPage.notificaoAtiva = function (k, localNotifications) {
        if (k > 0)
            this.texto = 'Lembrete sobre a dose de Insulina';
        else
            this.texto = 'Lembrete sobre medição da glicemia';
        localNotifications.schedule({
            id: 1,
            title: 'Attenção',
            text: this.texto,
            data: { mydata: 'Mensagem de Confirmação' },
            at: new Date(new Date().getTime() + 5 * 1000) //* 1000 para ser um segundo
        });
    };
    LocalNotificationPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attenção',
            text: 'Lembrete sobre a informação salva',
            data: { mydata: 'My hidden message this is' },
            at: new Date(new Date().getTime() + 5 * 1000) //* 1000 para ser um segundo
        });
    };
    return LocalNotificationPage;
}());
LocalNotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'local-notification',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/local-notification/local-notification.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Visualizar Tabela Resumo\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page15">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/local-notification/local-notification.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LocalNotificationPage);

//# sourceMappingURL=local-notification.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastrar_terapia_cadastrar_terapia__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ajuda_ajuda__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dose_diaria_dose_diaria__ = __webpack_require__(113);
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
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.tabs = __WEBPACK_IMPORTED_MODULE_2__tabs_controller_tabs_controller__["a" /* TabsControllerPage */];
    }
    HomePage.prototype.goToCadastrarTerapia = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastrar_terapia_cadastrar_terapia__["a" /* CadastrarTerapiaPage */]);
    };
    HomePage.prototype.goToAjuda = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__ajuda_ajuda__["a" /* AjudaPage */]);
    };
    HomePage.prototype.goToAddDose = function () {
        var modal = this.modalCtrl.create('EventModalPage');
        modal.present();
    };
    HomePage.prototype.goToDoseInsulina = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__dose_diaria_dose_diaria__["a" /* DoseDiariaPage */]);
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/home/home.html"*/'<!-- <ion-header>\n  <ion-navbar hideBackButton = \'true\'>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Início\n    </ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content class="list-avatar-page" padding id="page8" style="background-color:#FFFFFF;">\n  <img src="assets/img/C3EQhYtxSN6fsmJC7T5a_smart_Glicemia.jpg" style="display:block;max-width:45%;max-height:40%;margin-left:auto;margin-right:auto;border-color:orange;" />\n\n\n<!-- Mini -->\n\n\n\n<ion-fab right top >\n  <button ion-fab ><ion-icon name= "md-add"> </ion-icon></button>\n  <ion-fab-list side="down">\n    <button ion-fab color="positive" on-click="goToAddDose()"><img src="assets/img/water-icon.png"></button>\n    <button ion-fab color="positive"><img src="assets/img/syringe-icon.png"></button>\n    <button ion-fab color="calm"><ion-icon name="md-help" (click)="goToAjuda()" ></ion-icon></button>\n    </ion-fab-list>\n</ion-fab>\n\n<!-- Parte do codigo para colocar o Fabbutton dos 4 lados\n\n<ion-fab bottom  center >\n   <button ion-fab>Share</button>\n   <ion-fab-list side="top">\n     <button ion-fab>cima</button>\n\n   </ion-fab-list>\n   <ion-fab-list side="left">\n     <button ion-fab>esquerda</button>\n   </ion-fab-list>\n   <ion-fab-list side="bottom">\n     <button ion-fab>baixo</button>\n   </ion-fab-list>\n   <ion-fab-list side="right">\n     <button ion-fab>direita</button>\n   </ion-fab-list>\n </ion-fab>\n\n-->\n  <ion-list id="Hoje">\n    <ion-list-header no-lines>\n        Hoje\n    </ion-list-header >\n    <ion-item>\n      <ion-avatar   item-start>\n          <img src="assets/img/water-icon.png">\n      </ion-avatar>\n      <h2>Glicemia</h2>\n      <p>156(mg/dL)</p>\n      <ion-note item-end>18:40</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/syringe-icon.png">\n      </ion-avatar>\n      <h2>Insulinização <i>Basal</i></h2>\n      <p>0,3 U </p>\n      <ion-note item-end>12:10</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/warning-icon.png">\n      </ion-avatar>\n      <h2>Hipoglicemia</h2>\n      <p>140(mg/dL)</p>\n      <ion-note item-end>10:20</ion-note>\n    </ion-item>\n  </ion-list>\n\n  <ion-list id="20/11/2017">\n    <ion-list-header no-lines>\n      20/11/201\n    </ion-list-header >\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/syringe-icon.png">\n      </ion-avatar>\n      <h2>Insulinização <i> Bolus</i></h2>\n      <p>0,4 U</p>\n      <ion-note item-end>18:40</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/water-icon.png">\n      </ion-avatar>\n      <h2>Glicemia</h2>\n      <p>180(mg/dL)</p>\n      <ion-note item-end>12:10</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n          <img src="assets/img/dinner-icon.png">\n      </ion-avatar>\n      <h2>Refeição (Café da Manha)</h2>\n      <p>140(mg/dL)</p>\n      <ion-note item-end>10:20</ion-note>\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[341]);
//# sourceMappingURL=main.js.map