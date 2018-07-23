import { Injectable } from "@angular/core";
import { Lista } from '../models';


@Injectable()

export class TareasService {

    // Propiedades
    listas: Lista[] = [];

    constructor() {
        console.log('Servicio listo para usarse!');

        // Se crea una lista
        const lista1 = new Lista('Aprender Angular');
        const lista2 = new Lista('Hacer proyecto FP en Angular');

        // Incluimos las lista en la propiedad
        this.listas.push(lista1, lista2);

        console.log(this.listas);
    }


}