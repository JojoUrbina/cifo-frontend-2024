export function ordenarDatosPorImporte(datos) {
    const datosOrdenados = [...datos];
  
    datosOrdenados.sort((a, b) => {
      if (a.importe > b.importe) {
        return 1;
      } else if (a.importe < b.importe) {
        return -1;
      } else {
        return 0;
      }
    });
    return datosOrdenados;
  }