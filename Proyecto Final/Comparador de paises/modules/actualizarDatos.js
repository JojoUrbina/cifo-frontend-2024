export function actualizarTarifas(dataPaisesActual, tarifas) {
    for (const pais of dataPaisesActual) {
      pais.tarifaPais = tarifas[pais.divisaPais];
    }
  }
 export function actualizarImportes(dataPaisesActual) {
    const monto = +document.querySelector("input#monto").value || 1;
    for (const pais of dataPaisesActual) {
      //se podria desarrollar la funcion para que muestre demendiendo de la cantidad ,solo 2 decimales
      pais.importePais = Number((pais.tarifaPais * monto).toFixed(3));
    }
  }