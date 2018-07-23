import { Component } from '@angular/core';
import { Lista } from '../../models';
import { TareasService } from '../../services/tareas.services';

@Component ({
    selector: 'page-completados',
    templateUrl: 'completados.component.html'
})

export class CompletadosPage {

    listas: Lista[];

    constructor (public tareasService: TareasService) {

    }

    listaSeleccionada(lista: Lista){
        console.log(lista);
    }
}