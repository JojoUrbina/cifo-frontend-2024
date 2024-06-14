import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import { actualizarImportes,actualizarTarifas } from "./modules/actualizarDatos.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
} from "./modules/renderizar.js";
import {
  filtrarPaisesConTarifa,
  actualizarPlaceholder,
} from "./modules/funciones.js";
import { ordenarDatosPorImporte } from "./modules/funcionesOrdenar.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

let dataPaisesPorDefecto = [];
let dataPaisesActual = []; //luego aca colocarle el localstorage

document.querySelector("input#monto").addEventListener("input", (e) => {
  actualizarImportes(dataPaisesActual);
  renderizarTabla(dataPaisesActual);
});

document
  .querySelector("#seleccionarPais")
  .addEventListener("change", async (e) => {
    actualizarPlaceholder();

    const tarifaSeleccionada = e.target.value;
    const tarifas = await fetchTarifas(tarifaSeleccionada);

    actualizarTarifas(dataPaisesActual, tarifas);
    actualizarImportes(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });

document.querySelector(".ordenar-importe").addEventListener("click", () => {
  const datosOrdenadosPorImporte = ordenarDatosPorImporte(dataPaisesActual);
  renderizarTabla(datosOrdenadosPorImporte);
});
async function iniciarApp() {
  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  const paisesConTarifa = filtrarPaisesConTarifa(paises, tarifas);

  dataPaisesPorDefecto = crearDatosPrincipales(paisesConTarifa, tarifas);
  dataPaisesActual = [...dataPaisesPorDefecto];

  renderizarTabla(dataPaisesPorDefecto);
  renderizarOpcionesSelect(dataPaisesPorDefecto);
  actualizarPlaceholder();
}

function crearDatosPrincipales(datos, tarifas) {
  const datosProcesados = [...datos];
  const datosPrincipales = datosProcesados.map((pais) => {
    const { currencies, translations, languages, flags } = pais;
    return {
      nombrePais: translations.spa.common,
      lenguajePais: Object.values(languages)[0],
      monedaPais: currencies[Object.keys(currencies)[0]].name,
      simboloMonedaPais:
        currencies[Object.keys(currencies)[0]].symbol?.replace(/\s/g, "") ||
        "$",
      srcBanderaPais: flags.png,
      altBanderaPais: flags.alt,
      divisaPais: Object.keys(currencies)[1] || Object.keys(currencies)[0],
      tarifaPais: Number(
        tarifas[Object.keys(currencies)[1]] ||
          tarifas[Object.keys(currencies)[0]]
      ),
      importePais: Number(
        (
          tarifas[Object.keys(currencies)[1]] ||
          tarifas[Object.keys(currencies)[0]]
        ).toFixed(3)
      ),
    };
  });
  return datosPrincipales;
}

