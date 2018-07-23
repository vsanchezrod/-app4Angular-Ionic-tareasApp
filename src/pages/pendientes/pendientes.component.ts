// Se crea un nuevo componente
import { Component } from '@angular/core';

// Se importa el servicio para poder usarlo y se pasa al contructor
import { TareasService } from '../../services/tareas.services';

import { Lista } from '../../models'


@Component ({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})


export class PendientesPage {

    constructor(public tareasService: TareasService) {

    }

    // Crear método
    listaSeleccionada(lista: Lista) {
        console.log(lista);
    }


}