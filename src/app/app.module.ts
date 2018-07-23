import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

// Componentes
import { PendientesPage } from '../pages/pendientes/pendientes.component';
import { CompletadosPage } from '../pages/completados/completados.component';
import { AgregarPage } from '../pages/agregar/agregar.component';

// Propias de Ionic
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Servicios
import { TareasService } from '../services/tareas.services';


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    CompletadosPage,
    AgregarPage
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
