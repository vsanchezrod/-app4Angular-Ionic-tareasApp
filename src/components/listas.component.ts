import { Component, Input } from '@angular/core';
import { TareasService } from '../services/tareas.services';
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
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
                private navCtrl: NavController,
                private alertCtrl: AlertController) {

    }

    // Crear método para seleccionar lista
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

    // Método para editar el nombre de la lista
    editarLista (lista: Lista, slidingItem: ItemSliding) {
        
        // Método que cierra el Sliding
        slidingItem.close();

        // Se crea una alerta con el objeto alertCtrl y el método create y se manda en el método un objeto de configuración
        const alerta = this.alertCtrl.create({
            title: 'Editar nombre',
            message: 'Editar el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                // Este botón tendrá un manejador que hará una validación
                handler: data => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    
                    lista.titulo = data.titulo;
                    this.tareasService.guadarStorage();
                }
            }]
        });

        // Para presentar la alerta
        alerta.present();
    }
}