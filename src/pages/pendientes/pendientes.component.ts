// Se crea un nuevo componente
import { Component } from '@angular/core';

// Se importa el servicio para poder usarlo y se pasa al contructor
import { TareasService } from '../../services/tareas.services';
import { AgregarPage } from '../agregar/agregar.component';

// En IONIC NacController nos permite navegar a otra página
// En IONIC AlertController permite crear alertas o pop-ups
import { NavController, AlertController } from 'ionic-angular';

@Component ({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})

export class PendientesPage {

    constructor(public tareasService: TareasService,
                private navCtrl: NavController,
                private alertCtrl: AlertController) {

    }
        
    agregarLista() {
        
        // Se crea una alerta con el objeto alertCtrl y el método create y se manda en el método un objeto de configuración
        const alerta = this.alertCtrl.create({
            title: 'Nueva lista',
            message: 'Nombre de la nueva lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre de la lista'
            }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                // Este botón tendrá un manejador que hará una validación
                handler: data => {
                    if (data.titulo.length === 0) {
                        return;
                    }
                    
                    // Se utiliza el método push para cambiar a la otra página, y se le pasa entre {} el objeto q se le quiere mandar
                    this.navCtrl.push(AgregarPage, {
                        titulo: data.titulo
                    });
                    
                    }
                }
            ]
        });

        // Para presentar la alerta
        alerta.present();

    }
  

}