import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastrarTerapiaPage } from '../cadastrar-terapia/cadastrar-terapia';
import { CadastrarTerapia2Page } from '../cadastrar-terapia2/cadastrar-terapia2';
import { InsulinaEmergencialPage } from '../insulina-emergencial/insulina-emergencial';
import { ObjetivoGlicemicoPage } from '../objetivo-glicemico/objetivo-glicemico';
import { DoseDiariaPage } from '../dose-diaria/dose-diaria';

@Component({
  selector: 'page-cadastros',
  templateUrl: 'cadastros.html'
})
export class CadastrosPage {

  constructor(public navCtrl: NavController) {
  }
  goToCadastrarTerapia(params){
    if (!params) params = {};
    this.navCtrl.push(CadastrarTerapiaPage);
  }goToDoseInsulina(params){
    if (!params) params = {};
    this.navCtrl.push(DoseDiariaPage);
  }goToInsulinaEmergencial(params){
    if (!params) params = {};
    this.navCtrl.push(InsulinaEmergencialPage);
  }goToObjetivoGlicemico(params){
    if (!params) params = {};
    this.navCtrl.push(ObjetivoGlicemicoPage);
  }
}
