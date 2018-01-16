import { Component } from '@angular/core';
import { NavController, AlertController, Platform } from 'ionic-angular';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
  selector: 'local-notification',
  templateUrl: 'local-notification.html'
})
export class LocalNotificationPage {
static texto :string;

static notificaoAtiva(k, localNotifications) {
if(k>0)
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
}

  constructor(public navCtrl: NavController, private plt: Platform, private localNotifications: LocalNotifications, alertCtrl: AlertController) {
    this.plt.ready().then((readySource) => {
      this.localNotifications.on('click', (notification, state) => {
        let json = JSON.parse(notification.data);
        let alert = alertCtrl.create({
          title: notification.title,
          subTitle: json.mydata
        });
        alert.present();
      })
    });
  }

scheduleNotification() {
  this.localNotifications.schedule({
    id: 1,
    title: 'Attenção',
    text: 'Lembrete sobre a informação salva',
    data: { mydata: 'My hidden message this is' },
    at: new Date(new Date().getTime() + 5 * 1000) //* 1000 para ser um segundo
  });
}


}
