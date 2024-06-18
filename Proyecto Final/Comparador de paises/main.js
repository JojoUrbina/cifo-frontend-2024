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
  extraerContarYOrdenarPropiedad,
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
    extraerContarYOrdenarPropiedad(dataPaisesActual, "lenguajePais")
  );
  renderizarFiltros(
    "monedas",
    extraerContarYOrdenarPropiedad(dataPaisesActual, "monedaPais")
  );

  renderizarFiltros(
    "region",
    extraerContarYOrdenarPropiedad(dataPaisesActual, "regionPais")
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

  asignarEventoDeOrdenar(".ordenar-importe", ordenarDatosPorImporte);
  asignarEventoDeOrdenar(".ordenar-divisa", ordenarDatosPorDivisa);
  asignarEventoDeOrdenar(".ordenar-pais", ordenarDatosPorPais);
  asignarEventoDeOrdenar(".ordenar-lenguaje", ordenarDatosPorLenguaje);

  configurarEventosDeFiltro("lenguajes", "lenguajePais");
  configurarEventosDeFiltro("monedas", "monedaPais");
  configurarEventosDeFiltro("region", "regionPais");
}
function configurarEventosDeFiltro(categoria, propiedadPais) {
  document.querySelectorAll(`.btn-filtro-${categoria}`).forEach((btn) => {
    btn.addEventListener("click", () => {
      const dataSetValor = btn.dataset.btnValor;
      dataPaisesFiltrados = filtrarPaisesPorCategoria(
        dataPaisesActual,
        propiedadPais,
        dataSetValor
      );
      renderizarTabla(dataPaisesFiltrados);
    });
  });
}

function asignarEventoDeOrdenar(selector, funcionOrdenar) {
  document.querySelector(selector).addEventListener("click", () => {
    if (dataPaisesFiltrados) {
      renderizarTabla(funcionOrdenar(dataPaisesFiltrados));
    } else {
      renderizarTabla(funcionOrdenar(dataPaisesActual));
    }
  });
}
