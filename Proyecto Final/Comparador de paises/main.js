import { fetchPaises, fetchTarifas } from "./modules/fetch.js";
import {
  actualizarImportes,
  actualizarTarifas,
  crearDatosPrincipales,
} from "./modules/manipularDatos.js";
import {
  renderizarOpcionesSelect,
  renderizarTabla,
} from "./modules/renderizar.js";
import {
  filtrarPaisesConTarifa,
  actualizarPlaceholder,
} from "./modules/funciones.js";
//import { ordenarDatosPorImporte } from "./modules/funcionesOrdenar.js";

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
}
document.querySelector(".ordenar-divisa").addEventListener("click", () => {
  dataPaisesActual = ordenarDatosPorDivisa(dataPaisesActual);
  renderizarTabla(dataPaisesActual);
});

function ordenarDatosPorDivisa(dataPaises) {
  const datosOrdenados = [...dataPaises];
  const esOrdenadoDivisaAZ = dataPaises[0].ordenDatos === "divisa-a-z";
  if (esOrdenadoDivisaAZ) {
    datosOrdenados.sort((a, b) => {
      if (a.divisaPais > b.divisaPais) {
        return -1;
      } else if (a.divisaPais < b.divisaPais) {
        return 1;
      } else {
        return 0;
      }
    });
    datosOrdenados.forEach((pais) => (pais.ordenDatos = "divisa-z-a"));
  } else {
    datosOrdenados.sort((a, b) => {
      if (a.divisaPais > b.divisaPais) {
        return 1;
      } else if (a.divisaPais < b.divisaPais) {
        return -1;
      } else {
        return 0;
      }
    });
    datosOrdenados.forEach((pais) => (pais.ordenDatos = "divisa-a-z"));
  }

  return datosOrdenados;
}

function ordenarDatosPorImporte(dataPaises) {
  const datosOrdenados = [...dataPaises];
  const esOrdenadoImporteMenorMayor =
    dataPaises[0].ordenDatos === "importe-menor-mayor";
  if (esOrdenadoImporteMenorMayor) {
    datosOrdenados.sort((a, b) => b.importePais - a.importePais);
    datosOrdenados.forEach((pais) => (pais.ordenDatos = "importe-mayor-menor"));
  } else {
    datosOrdenados.sort((a, b) => a.importePais - b.importePais);
    datosOrdenados.forEach((pais) => (pais.ordenDatos = "importe-menor-mayor"));
  }
  return datosOrdenados;
}
