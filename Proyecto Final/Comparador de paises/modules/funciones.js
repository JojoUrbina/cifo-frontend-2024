//procesar Datos
export function procesarDataPaises(paises, tarifas) {
  const dataPaises = [...paises];
  for (const pais of dataPaises) {
    pais.tarifa = Number(
      (
        tarifas[Object.keys(pais.currencies)[0]] ||
        tarifas[Object.keys(pais.currencies)[1]]
      ).toFixed(2)
    );
    pais.importe = pais.tarifa;
    pais.actualizarImportePais = function () {
      const inputMontoValue = document.querySelector("#monto").value;

      if (inputMontoValue) {
        this.importe = Number((inputMontoValue * this.tarifa).toFixed(2));
      } else {
        this.importe = this.tarifa;
      }
    };
  }
  return dataPaises;
}

export function actualizarImportes(data) {
  for (const pais of data) {
    pais.actualizarImportePais();
  }
}
export function filtrarPaisesConTarifa(paises, tarifas) {
  const paisesConCurrencies = paises.filter((pais) => pais.currencies);
  const paisesConTarifa = paisesConCurrencies.filter(
    (pais) =>
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]]
  );
  return paisesConTarifa;
}
export function actualizarPlaceholder() {
  const seleccionarPais = document.querySelector("#seleccionarPais");
  const simboloInput = document.querySelector("#inputGroup-sizing-md");

  const monedaPlaceholder = seleccionarPais.selectedOptions[0].id;
  const simboloPlaceholder = seleccionarPais.selectedOptions[0].className;

  const textoPlaceholder = `Escribir monto en ${monedaPlaceholder}`;

  document.querySelector("input#monto").placeholder = textoPlaceholder;
  simboloInput.textContent = simboloPlaceholder;
}
