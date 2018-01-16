import { VisualizarTabelaResumoPage } from '../visualizar-tabela-resumo/visualizar-tabela-resumo';
import { VisualizadorDeGrFicosPage } from '../visualizador-de-gr-ficos/visualizador-de-gr-ficos';
import { EmergenciaPage } from '../emergecia/emergencia';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CadastrosPage } from '../cadastros/cadastros';
import { PerfilUsuarioPage } from '../perfil-usuario/perfil-usuario';
import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root = HomePage;
  tab2Root = VisualizarTabelaResumoPage;
  tab3Root = VisualizadorDeGrFicosPage;
  tab4Root = EmergenciaPage;  //Botão de emergência
  tab5Root = CadastrosPage;
  tab6Root = PerfilUsuarioPage;

    constructor(public alertCtrl: AlertController) {
    }
    showConfirm(bool: any) {

      if(true){
     let confirm = this.alertCtrl.create({
       title: 'Botão de Emergencia ',
       message: 'Você deseja ligar para a Emergencia ?(911)',
       buttons: [
         {
           text: 'Não',
           handler: () => {
             console.log('Disagree clicked');
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
}
