import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
} from "./modules/renderizar.js";
import {
  actualizarImportes,
  procesarDataPaises,
  filtrarPaisesConTarifa,
  actualizarPlaceholder,
} from "./modules/funciones.js";

document.addEventListener("DOMContentLoaded", () => {
 cargarDatos();
});

let dataPaises = [];


document.querySelector("input#monto").addEventListener("input", (e) => {
  actualizarImportes(dataPaises);
  renderizarTabla(dataPaises);
});

document
  .querySelector("#seleccionarPais")
  .addEventListener("change", async (e) => {
    actualizarPlaceholder();

    const tarifaSeleccionada = e.target.value;
    const tarifas = await fetchTarifas(tarifaSeleccionada);

    procesarDataPaises(dataPaises, tarifas);
    actualizarImportes(dataPaises);
    renderizarTabla(dataPaises);
  });

async function cargarDatos() {
  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  const paisesConTarifa = filtrarPaisesConTarifa(paises, tarifas);
  dataPaises = procesarDataPaises(paisesConTarifa, tarifas);

  renderizarTabla(dataPaises);
  renderizarOpcionesSelect(dataPaises);
  actualizarPlaceholder();
}
