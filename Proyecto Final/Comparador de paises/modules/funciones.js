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

  const monedaPlaceholder = seleccionarPais.selectedOptions[0].ariaLabel;
  const simboloPlaceholder = seleccionarPais.selectedOptions[0].className;

  const textoPlaceholder = `Escribir monto en ${monedaPlaceholder}`;

  document.querySelector("input#monto").placeholder = textoPlaceholder;
  simboloInput.textContent = simboloPlaceholder;
}
