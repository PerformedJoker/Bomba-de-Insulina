webpackJsonp([0],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventModalPageModule", function() { return EventModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_modal__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EventModalPageModule = (function () {
    function EventModalPageModule() {
    }
    return EventModalPageModule;
}());
EventModalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__event_modal__["a" /* EventModalPage */]),
        ],
    })
], EventModalPageModule);

//# sourceMappingURL=event-modal.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventModalPage = (function () {
    function EventModalPage(navCtrl, plt, navParams, viewCtrl, alertCtrl, localNotifications) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.plt = plt;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
        this.minDate = new Date().toISOString();
        //constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController,private alertCtrl: AlertController) {
        var preselectedDate = __WEBPACK_IMPORTED_MODULE_2_moment__(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;
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
    EventModalPage.prototype.scheduleNotification = function () {
        this.localNotifications.schedule({
            id: 1,
            title: 'Attenção',
            text: 'Lembrete sobre a informação salva',
            data: { mydata: 'My hidden message this is' },
            at: new Date(new Date().getTime() + 5 * 1000) //* 1000 para ser um segundo
        });
    };
    EventModalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EventModalPage.prototype.save = function () {
        this.concluido();
        this.scheduleNotification();
        this.viewCtrl.dismiss(this.event);
    };
    EventModalPage.prototype.onEventSelected = function (event) {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment__(event.startTime).format('LLLL');
        var alert = this.alertCtrl.create({
            title: '' + event.title,
            subTitle: 'From: ' + start,
            buttons: ['OK']
        });
        alert.present();
    };
    EventModalPage.prototype.concluido = function () {
        var alert = this.alertCtrl.create({
            title: 'Dados adicionados com sucesso',
            subTitle: 'Seus dados foram salvos ',
            buttons: ['OK']
        });
        alert.present();
    };
    return EventModalPage;
}());
EventModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-event-modal',template:/*ion-inline-start:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/event-modal/event-modal.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons start>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Adicionar Dados</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-input type="text" placeholder="Title" [(ngModel)]="event.title"></ion-input>\n    </ion-item>\n\n\n\n    <ion-item>\n         <ion-label>Inicio</ion-label>\n         <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.startTime" [min]="minDate"></ion-datetime>\n       </ion-item>\n\n       <ion-item>\n         <ion-label>Final</ion-label>\n         <ion-datetime displayFormat="MM/DD/YYYY HH:mm" pickerFormat="MMM D:HH:mm" [(ngModel)]="event.endTime" [min]="minDate"></ion-datetime>\n       </ion-item>\n\n<!--\n    <ion-item>\n      <ion-label>Horario</ion-label>\n      <ion-datetime displayFormat="HH:mm" pickerFormat="HH:mm" [(ngModel)]="event.startTime" ></ion-datetime>\n    </ion-item>\n\n-->\n\n  </ion-list>\n\n  <button ion-button full icon-left (click)="save()">\n    <ion-icon name="checkmark"></ion-icon> Salvar dados\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Users/alexsandrosaraiva/Downloads/SmartGlic/src/pages/event-modal/event-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_local_notifications__["a" /* LocalNotifications */]])
], EventModalPage);

//# sourceMappingURL=event-modal.js.map

/***/ })

});
//# sourceMappingURL=0.js.map