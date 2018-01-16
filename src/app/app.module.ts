import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { CadastrarUsuarioPage} from '../pages/cadastrarUsuario/cadastrarUsuario';
import { HomePage } from '../pages/home/home';
import { CadastrarTerapiaPage } from '../pages/cadastrar-terapia/cadastrar-terapia';
import { CadastrarTerapia2Page } from '../pages/cadastrar-terapia2/cadastrar-terapia2';
import { ObjetivoGlicemicoPage } from '../pages/objetivo-glicemico/objetivo-glicemico';
import { CalcularDosePage } from '../pages/calcular-dose/calcular-dose';
import { VisualizadorDeGrFicosPage } from '../pages/visualizador-de-gr-ficos/visualizador-de-gr-ficos';
import { VisualizarTabelaResumoPage } from '../pages/visualizar-tabela-resumo/visualizar-tabela-resumo';
import { CadastrosPage } from '../pages/cadastros/cadastros';
import { EmergenciaPage } from '../pages/emergecia/emergencia';
import { InsulinaEmergencialPage } from '../pages/insulina-emergencial/insulina-emergencial';
import { NgCalendarModule  } from 'ionic2-calendar';
import { DoseDiariaPage } from '../pages/dose-diaria/dose-diaria';
import { PerfilUsuarioPage } from '../pages/perfil-usuario/perfil-usuario';
import { AjudaPage } from '../pages/ajuda/ajuda';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChartsModule } from 'ng2-charts';
import { LocalNotificationPage } from '../pages/local-notification/local-notification';
import { LocalNotifications } from '@ionic-native/local-notifications';


@NgModule({
  declarations: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    CadastrarUsuarioPage,
    HomePage,
    CadastrarTerapiaPage,
    CadastrarTerapia2Page,
    ObjetivoGlicemicoPage,
    CalcularDosePage,
    VisualizadorDeGrFicosPage,
    VisualizarTabelaResumoPage,
    EmergenciaPage,
    CadastrosPage,
    InsulinaEmergencialPage,
    DoseDiariaPage,
    PerfilUsuarioPage,
    LocalNotificationPage,
    AjudaPage,
  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    ChartsModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom', backButtonText: ''}),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsControllerPage,
    LoginPage,
    CadastrarUsuarioPage,
    HomePage,
    CadastrarTerapiaPage,
    CadastrarTerapia2Page,
    ObjetivoGlicemicoPage,
    CalcularDosePage,
    VisualizadorDeGrFicosPage,
    VisualizarTabelaResumoPage,
    EmergenciaPage,
    CadastrosPage,
    DoseDiariaPage,
    InsulinaEmergencialPage,
    PerfilUsuarioPage,
    LocalNotificationPage,
    AjudaPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

static teste = 'teste de variavel global';

}
