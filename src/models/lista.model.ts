// Modelo de la lista

// Se necesita importar este modelo porque va a usarse
import { ListaItem } from './lista-item.model';

export class Lista {
    
    // Propiedades de la clase
    id: number;
    titulo: string;
    fechaCreada: Date;
    fechaCompletada: Date;
    completada: boolean;
    items: ListaItem[];

    constructor(titulo: string) {
        this.titulo = titulo;
        this.completada = false;
        this.fechaCreada = new Date();
        this.items = [];

        // De esta manera se asegura un id único (no se pueden crear dos listas en el mismo milisegundo)
        this.id = new Date().getTime();

    }
}