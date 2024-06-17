import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import {
  actualizarImportes,
  actualizarTarifas,
  crearDatosPrincipales,
} from "./modules/manipularDatos.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
  actualizarPlaceholder
} from "./modules/renderizar.js";
import {
  filtrarPaisesConTarifa,
  
} from "./modules/funciones.js";
import {
  ordenarDatosPorImporte,
  ordenarDatosPorDivisa,
  ordenarDatosPorPais,
  ordenarDatosPorLenguaje
} from "./modules/funcionesOrdenar.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

let dataPaisesPorDefecto = [];
let dataPaisesActual = [];

async function iniciarApp() {
  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  const paisesConTarifa = filtrarPaisesConTarifa(paises, tarifas);

  dataPaisesPorDefecto = crearDatosPrincipales(paisesConTarifa, tarifas);
  dataPaisesActual = [...dataPaisesPorDefecto]; // aca le puedo enviar el localStorage

  renderizarTabla(dataPaisesPorDefecto);
  renderizarOpcionesSelect(dataPaisesPorDefecto);
  actualizarPlaceholder();
  ejecutarLosEventListener();
}

function ejecutarLosEventListener() {
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
    dataPaisesActual = ordenarDatosPorImporte(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });
  document.querySelector(".ordenar-divisa").addEventListener("click", () => {
    dataPaisesActual = ordenarDatosPorDivisa(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });
  document.querySelector(".ordenar-pais").addEventListener("click", () => {
    dataPaisesActual = ordenarDatosPorPais(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });

  document.querySelector(".ordenar-lenguaje").addEventListener("click", () => {
    dataPaisesActual = ordenarDatosPorLenguaje(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });
}


