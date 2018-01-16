import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-emergencia',
  templateUrl: 'emergencia.html'
})
export class EmergenciaPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController,public viewCtrl: ViewController) {
this.showConfirm();
this.navCtrl.popToRoot();

  }
   showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Botão de Emergencia ',
      message: 'Você deseja ligar para a Emergencia ?(911)',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
            this.viewCtrl.dismiss();


          }
        },
        {
          text: 'Ligar',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

}
