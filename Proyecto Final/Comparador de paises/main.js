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
  renderizarFiltros,
} from "./modules/funcionesRenderizar.js";
import {
  ordenarDatosPorImporte,
  ordenarDatosPorDivisa,
  ordenarDatosPorPais,
  ordenarDatosPorLenguaje,
} from "./modules/funcionesOrdenar.js";
import {
  filtrarPaisesConTarifa,
  contarYOrdenarPropiedad,
  filtrarPaisesPorCategoria,
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
    "lenguajes",
    contarYOrdenarPropiedad(dataPaisesActual, "lenguaje")
  );
  renderizarFiltros(
    "monedas",
    contarYOrdenarPropiedad(dataPaisesActual, "moneda")
  );

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
      const categoria = "lenguaje";
      dataPaisesFiltrados = filtrarPaisesPorCategoria(
        dataPaisesActual,
        categoria,
        lenguajeSeleccionado
      );
      renderizarTabla(dataPaisesFiltrados);
    });
  });

  document.querySelectorAll(".btn-filtro-monedas").forEach((btnMoneda) => {
    btnMoneda.addEventListener("click", () => {
      const monedaSeleccionado = btnMoneda.dataset.btnValor;
      const categoria = "moneda";
      dataPaisesFiltrados = filtrarPaisesPorCategoria(
        dataPaisesActual,
        categoria,
        monedaSeleccionado
      );
      renderizarTabla(dataPaisesFiltrados);
    });
  });
}
