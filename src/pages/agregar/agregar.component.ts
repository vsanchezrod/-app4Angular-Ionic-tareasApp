import { Component } from "@angular/core";
import { TareasService } from '../../services/tareas.services';
//import { Lista } from '../../models/lista.model';

@Component ({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})


export class AgregarPage {

    constructor (public tareasService: TareasService) {

    }

}