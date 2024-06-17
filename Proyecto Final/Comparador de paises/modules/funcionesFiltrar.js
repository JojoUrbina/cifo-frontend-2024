  export function filtrarLenguajesMasUsados(dataPaises) {
    //filtrar los lenguajes
    const lenguajes = dataPaises.map((pais) => pais.lenguajePais);
    //Se usa reduce para crear un objeto que tenga como llave un pais y como valor la cantidad de veces que se repite el pais en los datos.(se crea objeto {lenguaje:cantidad,lenguaje:cantidad,}.
    const conteoDeLenguajesObjeto = lenguajes.reduce((acc, lenguaje) => {
      acc[lenguaje] = (acc[lenguaje] || 0) + 1;
      return acc;
    }, {});
    //se convierte en array para iterarlo
    const conteoDeLenguajesArray = Object.entries(conteoDeLenguajesObjeto);
    //se ordena por cantidad que esta en la pisicion [1] y se toman los 6 elementos con mayor valor
    const lenguajesMasUsados = conteoDeLenguajesArray
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);//se limita la cantidad de lenguajes a mostrar

    return lenguajesMasUsados;
  }