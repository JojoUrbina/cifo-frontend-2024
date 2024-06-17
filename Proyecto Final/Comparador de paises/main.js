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

  renderizarFiltrosLenguajes(extraerLenguajesYOrdenarPorUso(dataPaisesActual));

  /*   function filtrarPaisesPorLenguaje(dataPaises, lenguaje) {
    const paisesFiltradosPorLenguaje = dataPaises.filter(
      (pais) => pais.lenguajePais === lenguaje
    );
  }

  const btnsFiltrosLenguaje = document.querySelector(`btn-filtro-${lenguaje}`);
  btnsFiltrosLenguaje.addEventListener("click", (e) => {});
  console.log(paisesFiltradosPorLenguaje);

  crearEventosAFiltros(params); */
  // console.log(btnsFiltrosLenguaje);

  //filtrarPaisesPorLenguaje(dataPaisesPorDefecto, "English");
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

function renderizarFiltrosLenguajes(lenguajes) {
  const template = document.querySelector("#template-filtros-ul").content;
  const fragment = document.createDocumentFragment();
  const divFiltroLenguajes = document.querySelector("#filtro-lenguajes");

  for (const [lenguaje, cantidad] of lenguajes) {
    //Se podria utilizar el valor de cantidad para añadir informacion extra
    const ulClonados = template.cloneNode(true);
    const aClonados = ulClonados.querySelector("a");
    aClonados.textContent = `${lenguaje}`;

    //Para aplicar un efecto tipo hover
    aClonados.addEventListener("mouseover", () => {
      aClonados.textContent = `${lenguaje} - Usado en ${cantidad} países`;
    });

    aClonados.addEventListener("mouseout", () => {
      aClonados.textContent = lenguaje;
    });
    //fin del efecto tipo hover

    aClonados.addEventListener("click", () => {
      //le puedo colicar como argumento los paisespor defecto, asi no usara los datos ya filtrados y sobre filtrara
      const paisesFiltrados = filtrarPaisesPorLenguaje(
        dataPaisesPorDefecto,
        lenguaje
      );
      renderizarTabla(paisesFiltrados);
    });

    fragment.appendChild(ulClonados);
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
