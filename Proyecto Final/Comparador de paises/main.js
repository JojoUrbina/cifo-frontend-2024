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
} from "./modules/funcionesFiltrar.js";

document.addEventListener("DOMContentLoaded", () => {
  iniciarApp();
});

let dataPaisesPorDefecto = [];
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
  renderizarFiltrosLenguajes(extraerLenguajesYOrdenarPorUso(dataPaisesActual));
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

  document.querySelectorAll(".btn-filtro-lenguaje").forEach((btnLenguaje) => {
    btnLenguaje.addEventListener("click", () => {
      const lenguajeSeleccionado = btnLenguaje.dataset.btnLenguaje;
      dataPaisesFiltrados = filtrarPaisesPorLenguaje(
        dataPaisesActual,
        lenguajeSeleccionado
      );
      renderizarTabla(dataPaisesFiltrados);
    });
  });
}

function renderizarFiltrosLenguajes(lenguajes) {
  const template = document.querySelector("#template-filtros-ul").content;
  const fragment = document.createDocumentFragment();
  const divFiltroLenguajes = document.querySelector("#filtro-lenguajes");

  for (const [lenguaje, cantidad] of lenguajes.slice(0, 6)) {
    //Se podria utilizar el valor de cantidad para añadir informacion extra
    const elementoUlClonado = template.cloneNode(true);
    const elementoAClonado = elementoUlClonado.querySelector("a");
    elementoAClonado.textContent = `${lenguaje}`;
    elementoAClonado.dataset.btnLenguaje = lenguaje;

    //Para aplicar un efecto tipo hover
    elementoAClonado.addEventListener("mouseover", () => {
      elementoAClonado.textContent = `${lenguaje} - Usado en ${cantidad} países`;
    });

    elementoAClonado.addEventListener("mouseout", () => {
      elementoAClonado.textContent = lenguaje;
    });
    //fin del efecto tipo hover

    fragment.appendChild(elementoUlClonado);
  }
  divFiltroLenguajes.appendChild(fragment);
}

function filtrarPaisesPorLenguaje(dataPaises, lenguaje) {
  const paisesFiltrados = dataPaises.filter((pais) => {
    return (
      pais.lenguajePais[0] === lenguaje ||
      pais.lenguajePais[1] === lenguaje ||
      pais.lenguajePais[2] === lenguaje
    );
  });
  return paisesFiltrados;
}
