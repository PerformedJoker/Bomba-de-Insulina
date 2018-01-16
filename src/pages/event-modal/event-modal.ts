import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController ,AlertController, Platform } from 'ionic-angular';
import * as moment from 'moment';
import { LocalNotifications } from '@ionic-native/local-notifications';
import {LocalNotificationPage} from '../local-notification/local-notification';

@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})
export class EventModalPage {


  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString(), allDay: false };
     minDate = new Date().toISOString();

    constructor(public navCtrl: NavController, private plt: Platform,private navParams: NavParams, public viewCtrl: ViewController,private alertCtrl: AlertController,private localNotifications: LocalNotifications) {
    //constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController,private alertCtrl: AlertController) {
        let preselectedDate = moment(this.navParams.get('selectedDay')).format();
        this.event.startTime = preselectedDate;
        this.event.endTime = preselectedDate;

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


    cancel() {
      this.viewCtrl.dismiss();
    }

    save() {
      this.concluido();
      this.scheduleNotification();
      this.viewCtrl.dismiss(this.event);

    }
    onEventSelected(event) {
      let start = moment(event.startTime).format('LLLL');
      let alert = this.alertCtrl.create({
        title: '' + event.title,
        subTitle: 'From: ' + start,
        buttons: ['OK']
      })
      alert.present();
    }

    concluido() {
      let alert = this.alertCtrl.create({
        title: 'Dados adicionados com sucesso',
        subTitle: 'Seus dados foram salvos ',
        buttons: ['OK']
      })
      alert.present();
    }




  }
