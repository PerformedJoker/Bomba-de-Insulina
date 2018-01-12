import { VisualizarTabelaResumoPage } from '../visualizar-tabela-resumo/visualizar-tabela-resumo';
import { VisualizadorDeGrFicosPage } from '../visualizador-de-gr-ficos/visualizador-de-gr-ficos';
import { ConfiguraEsDoAplicativoPage } from '../configura-es-do-aplicativo/configura-es-do-aplicativo';
import { GraficosPage } from '../graficos/graficos';
import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { CadastrosPage } from '../cadastros/cadastros';


@Component({
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root = HomePage;
  tab2Root = VisualizarTabelaResumoPage;
  tab3Root = VisualizadorDeGrFicosPage;
  tab4Root = GraficosPage;  //Botão de emergência
  tab5Root = CadastrosPage;

    constructor() {
    }
  }
