import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
} from "./modules/renderizar.js";

const inputMonto = document.querySelector("input#monto");
const seleccionarPais = document.querySelector("#seleccionarPais");

const simboloInput = document.querySelector("#inputGroup-sizing-md");
document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
});

let dataPaises = [];

inputMonto.addEventListener("input", (e) => {
  actualizarImportes();
  renderizarTabla(dataPaises);
});

function actualizarImportes() {
  for (const pais of dataPaises) {
    pais.actualizarImportePais();
  }
}

seleccionarPais.addEventListener("change", async (e) => {
  const moneda = seleccionarPais.selectedOptions[0].id;
  simboloInput.textContent = seleccionarPais.selectedOptions[0].className;
  inputMonto.placeholder = `Escribir monto en ${moneda}`;

  const tarifaSeleccionada = e.target.value;
  const tarifas = await fetchTarifas(tarifaSeleccionada);

  procesarDataPaises(dataPaises, tarifas);
  actualizarImportes();
  renderizarTabla(dataPaises);
});

async function cargarDatos() {
  inputMonto.placeholder = `Escribir monto en Euro`;
  simboloInput.textContent = "€";

  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  const paisesConTarifa = filtrarPaisesConTarifa(paises, tarifas);
  dataPaises = procesarDataPaises(paisesConTarifa, tarifas);

  renderizarTabla(dataPaises);
  renderizarOpcionesSelect(dataPaises);
}
function procesarDataPaises(paises, tarifas) {
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
function filtrarPaisesConTarifa(paises, tarifas) {
  const paisesConCurrencies = paises.filter((pais) => pais.currencies);
  const paisesConTarifa = paisesConCurrencies.filter(
    (pais) =>
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]]
  );
  return paisesConTarifa;
}
