import { Injectable } from "@angular/core";
import { Lista } from '../models';


@Injectable()

export class TareasService {

    // Propiedades
    listas: Lista[] = [];
    
    constructor() {

        // Cuando se inicialice el servicio se carga el local storage
        this.cargarStorage();
        
        console.log('Servicio listo para usarse!');

    }

    // Método para agregar lista
    agregarLista(lista: Lista) {
        
        // Agrego una lista al array de listas
        this.listas.push(lista);

        // Cuando se crea una lista se guarda en el local storage
        this.guadarStorage();
    }

    // Persistencia utilizando Local Storage

    // Método para guardar datos
    guadarStorage() {
        
        localStorage.setItem('data', JSON.stringify(this.listas));
    }

    // Método para cargar a storage
    cargarStorage() {
        
        // Verificar que existen los datos en el local storage
        if (localStorage.getItem('data')){
            // Si existe, le asignamos a lista el valor del local storage. Se usa JSON.parse para que lo convierta a objeto de JS
            this.listas = JSON.parse(localStorage.getItem('data'));
        }
        else {
            this.listas = [];
        }

    }

    // Método para borrar lista
    borrarLista(lista: Lista) {
        
        // Mediante un filtrado del array de listas, se guardan en this.listas todas las listas menos la del ID que se le esté pasando
        this.listas = this.listas.filter(listaData => {
            return listaData.id !== lista.id;
        })
        
        this.guadarStorage();
    }
}