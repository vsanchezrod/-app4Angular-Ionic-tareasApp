import { Component } from "@angular/core";
import { TareasService } from '../../services/tareas.services';

@Component ({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})


export class AgregarPage {

    constructor (public tareasService: TareasService) {

    }

}