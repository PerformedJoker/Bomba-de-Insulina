import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';
import { TabsControllerPage} from '../tabs-controller/tabs-controller';
import { CadastrarTerapiaPage} from '../cadastrar-terapia/cadastrar-terapia';
import { AjudaPage} from '../ajuda/ajuda';
import { DoseDiariaPage } from '../dose-diaria/dose-diaria';
import { EventModalPage } from '../event-modal/event-modal';
import {LocalNotificationPage} from '../local-notification/local-notification';
import { LocalNotifications } from '@ionic-native/local-notifications';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public tabs = TabsControllerPage;

  constructor(public navCtrl: NavController,private modalCtrl: ModalController) {

  }
  goToCadastrarTerapia(){
    this.navCtrl.push(CadastrarTerapiaPage);
  }

  goToAjuda(params ){
    if (!params) params = {};
    this.navCtrl.push(AjudaPage);
  }

  goToAddDose(){

  let modal = this.modalCtrl.create('EventModalPage');
    modal.present();
  }

  goToDoseInsulina(params){
    if (!params) params = {};
    this.navCtrl.push(DoseDiariaPage);
  }

  goToCadastrarUsuario(params){
    if (!params) params = {};
  //  this.navCtrl.push(CadastrarUsuarioPage);
  }

}
