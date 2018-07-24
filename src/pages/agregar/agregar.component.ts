import { Component } from "@angular/core";
import { TareasService } from '../../services/tareas.services';
import { Lista, ListaItem } from '../../models';

// En IONIC NavParams se utiliza para recuperar la información que se le envía. En este caso desde la página de pendientes.
import { NavParams } from "ionic-angular";

@Component ({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})


export class AgregarPage {

    lista: Lista;
    nombreItem: string = '';

    constructor (public tareasService: TareasService,
                 private navParams: NavParams) {

        // Para ver que información que llega
        // Se podría poner this.navParams y tendríamos el objeto entero o se puede utilizar el método get y pasarle la propiedad que se quiere obtener
        const titulo = this.navParams.get('titulo');

        // El constructor de la lista solo necesitaba el título
        this.lista = new Lista (titulo);

        // Cuando se crea una lista debemos agregarla utilizando el servicio
        this.tareasService.agregarLista(this.lista);
    }

    agregarItem() {
        // Validación de que no este vacío
        if (this.nombreItem.length === 0) {
            return;
        }
        
        // El modelo ListaItem, solo necesita una descripción en su constructor que será lo que introduzca en el input
        const nuevoItem = new ListaItem(this.nombreItem);
    
        // Se añade el nuevoItem a la lista
        this.lista.items.push(nuevoItem);

        // Se borra el valor del input para que el usuario pueda introducir más items
        this.nombreItem = '';
    }

    actualizarEstado(item: ListaItem) {
        // Cuando se haga click se cambiará el estado de completado o no en función del valor actual
        item.completado = !item.completado;
    }

    borrarTarea(i: number) {
        //Borrar el item de la lista. Método splice recibe el elemento para empezar a borrar, y cuantos elementos a borrar
        this.lista.items.splice(i,1);
    }
}