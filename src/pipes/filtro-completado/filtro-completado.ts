import { Pipe, PipeTransform } from '@angular/core';

import { Lista } from '../../models'

@Pipe({
  name: 'filtroCompletado',
  pure: false
})
export class FiltroCompletadoPipe implements PipeTransform {
 
  // Va a recibir todas las listas que se encuentre en el servicio y si la lista está completada o no
  transform(listas: Lista[], completada: boolean) {
  
    // Se usa el filtro para obtener un array de las listas completadas
    return listas = listas.filter( lista => {
      return lista.completada === completada;
    })
  }
}
