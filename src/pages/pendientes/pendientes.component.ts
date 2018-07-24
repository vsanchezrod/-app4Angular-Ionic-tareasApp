// Se crea un nuevo componente
import { Component } from '@angular/core';

// Se importa el servicio para poder usarlo y se pasa al contructor
import { TareasService } from '../../services/tareas.services';
import { Lista } from '../../models/lista.model';

// En IONIC NacController nos permite navegar
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../agregar/agregar.component';

@Component ({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {

    constructor(public tareasService: TareasService,
                private navCtrl: NavController) {

    }

    // Crear método
    listaSeleccionada(lista: Lista) {
        console.log(lista);
    }

    agregarLista() {
        // Se utiliza el método push para agregar una página al stack de páginas
        this.navCtrl.push(AgregarPage);
    }

}