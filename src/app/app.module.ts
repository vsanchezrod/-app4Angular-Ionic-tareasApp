import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

// Pages
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { CompletadosPage } from '../pages/completados/completados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';

// Componentes
import { ListasComponent } from '../components/listas.component';

// Propias de Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Servicios
import { TareasService } from '../services/tareas.services';

// Pipes
import { FiltroCompletadoPipe } from '../pipes/filtro-completado/filtro-completado';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    CompletadosPage,
    AgregarPage,
    FiltroCompletadoPipe,
    ListasComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    CompletadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TareasService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
