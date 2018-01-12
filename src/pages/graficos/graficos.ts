import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-graficos',
  templateUrl: 'graficos.html'
})
export class GraficosPage {

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
this.showConfirm();
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
            //this.navCtrl.(HomePage);
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



}
