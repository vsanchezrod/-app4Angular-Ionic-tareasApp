import { Component, Input } from '@angular/core';
import { TareasService } from '../services/tareas.services';
import { NavController } from 'ionic-angular';
import { AgregarPage } from '../pages/agregar/agregar.component';
import { Lista } from '../models';


@Component ({
    selector: 'app-listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent {

    // Este componente necesita recibir información de si las listas estan completas o no, puesto q es un componente comun para ambas pages
    // Se inicializa en falso y se usará esta propidad en el pipe en vez de false o true
    @Input() completada: boolean = false;

    constructor (public tareasService: TareasService,
                private navCtrl: NavController) {

    }

    // Crear método
    listaSeleccionada(lista: Lista) {
        
        this.navCtrl.push(AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }
    
    // Método para borrar una lista
    borrarLista(lista: Lista) {
        
        //Borrar la lista. 
        this.tareasService.borrarLista(lista);
    }
}