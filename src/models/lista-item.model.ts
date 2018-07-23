// Modelo de item de lista

export class ListaItem {
    
    // Propiedades de la clase
    descripcion: string;
    completado: boolean;

    constructor(descripcion: string) {
        this.descripcion = descripcion;
        this.completado = false;
    }
}