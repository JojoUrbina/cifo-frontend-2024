export function filtrarPaisesConTarifa(paises, tarifas) {
  const paisesConCurrencies = paises.filter((pais) => pais.currencies);
  const paisesConTarifa = paisesConCurrencies.filter(
    (pais) =>
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]]
  );
  return paisesConTarifa;
}

//Funciones Para extraer y luego renderizar
export function extraerLenguajesYOrdenarPorUso(dataPaises) {
  //filtrar los lenguajes
  const lenguajes = dataPaises.map((pais) => pais.lenguajePais);
  //Se usa reduce para crear un objeto que tenga como llave un pais y como valor la cantidad de veces que se repite el pais en los datos.(se crea objeto {lenguaje:cantidad,lenguaje:cantidad,}, como hay paises con varios lenguajes se vuelve a iterar
  const conteoDeLenguajesObjeto = lenguajes.reduce(
    (acc, lenguajesPorPais) => {
      if (lenguajesPorPais.length > 1) {
        lenguajesPorPais.forEach((lenguaje) => {
          acc[lenguaje] = (acc[lenguaje] || 0) + 1;
        });
      } else {
        acc[lenguajesPorPais] = (acc[lenguajesPorPais] || 0) + 1;
      }
      return acc;
    },
    {}
  );

  //se convierte en array para iterarlo
  const conteoDeLenguajesArray = Object.entries(conteoDeLenguajesObjeto);

  //se ordena por cantidad que esta en la posicion [1]
  const lenguajesOrdenadosMasAMenosUsados = conteoDeLenguajesArray.sort(
    (a, b) => b[1] - a[1]
  ); 
  return lenguajesOrdenadosMasAMenosUsados;
}