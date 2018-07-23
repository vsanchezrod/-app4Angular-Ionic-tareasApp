import { Component } from '@angular/core';

import { PendientesPage } from '../pendientes/pendientes.component';
import { CompletadosPage } from '../completados/completados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientesPage; // El tab1Root apuntaba a HomePage. Ahora apuntará a mi componente creado
  tab2Root = CompletadosPage; // Antes AboutPage y ahora CompleadosPage

  constructor() {

  }
}
