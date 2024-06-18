import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import {
  actualizarImportes,
  actualizarTarifas,
  crearDatosPrincipales,
} from "./modules/manipularDatos.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
  actualizarPlaceholder,
  renderizarFiltrosLenguajes,
  renderizarFiltros,
} from "./modules/renderizar.js";
import {
  ordenarDatosPorImporte,
  ordenarDatosPorDivisa,
  ordenarDatosPorPais,
  ordenarDatosPorLenguaje,
} from "./modules/funcionesOrdenar.js";
import {
  extraerLenguajesYOrdenarPorUso,
  filtrarPaisesConTarifa,
  filtrarPaisesPorLenguaje,
  extraerMonedasYOrdenarPorUso,
} from "./modules/funcionesFiltrar.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

let dataPaisesPorDefecto = []; //Se podria hacer un objeto global con estas 3 variables
let dataPaisesActual = [];
let dataPaisesFiltrados = null;

async function iniciarApp() {
  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  const paisesConTarifa = filtrarPaisesConTarifa(paises, tarifas);

  dataPaisesPorDefecto = crearDatosPrincipales(paisesConTarifa, tarifas);
  dataPaisesActual = [...dataPaisesPorDefecto]; // aca le puedo enviar el localStorage

  renderizarTabla(dataPaisesPorDefecto);
  renderizarOpcionesSelect(dataPaisesPorDefecto);

  renderizarFiltros(
    extraerLenguajesYOrdenarPorUso(dataPaisesActual),
    "lenguajes"
  );
  renderizarFiltros(extraerMonedasYOrdenarPorUso(dataPaisesActual), "monedas");

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
    if (dataPaisesFiltrados) {
      renderizarTabla(ordenarDatosPorImporte(dataPaisesFiltrados));
    } else {
      renderizarTabla(ordenarDatosPorImporte(dataPaisesActual));
    }
  });
  document.querySelector(".ordenar-divisa").addEventListener("click", () => {
    if (dataPaisesFiltrados) {
      renderizarTabla(ordenarDatosPorDivisa(dataPaisesFiltrados));
    } else {
      renderizarTabla(ordenarDatosPorDivisa(dataPaisesActual));
    }
  });
  document.querySelector(".ordenar-pais").addEventListener("click", () => {
    if (dataPaisesFiltrados) {
      renderizarTabla(ordenarDatosPorPais(dataPaisesFiltrados));
    } else {
      renderizarTabla(ordenarDatosPorPais(dataPaisesActual));
    }
  });

  document.querySelector(".ordenar-lenguaje").addEventListener("click", () => {
    if (dataPaisesFiltrados) {
      renderizarTabla(ordenarDatosPorLenguaje(dataPaisesFiltrados));
    } else {
      renderizarTabla(ordenarDatosPorLenguaje(dataPaisesActual));
    }
  });

  document.querySelectorAll(".btn-filtro-lenguajes").forEach((btnLenguaje) => {
    btnLenguaje.addEventListener("click", () => {
      const lenguajeSeleccionado = btnLenguaje.dataset.btnValor;
      dataPaisesFiltrados = filtrarPaisesPorLenguaje(
        dataPaisesActual,
        lenguajeSeleccionado
      );
      renderizarTabla(dataPaisesFiltrados);
    });
  });
}
