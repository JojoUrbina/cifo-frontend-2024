export function ordenarDatosPorImporte(datos) {
    const datosOrdenados = [...datos];
  
    datosOrdenados.sort((a, b) => {
      if (a.importePais > b.importePais) {
        return 1;
      } else if (a.importePais < b.importePais) {
        return -1;
      } else {
        return 0;
      }
    });
    return datosOrdenados;
  }