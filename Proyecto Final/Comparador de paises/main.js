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
    function ordenarDatosPorImporte(dataPaises) {
      const dataPaisesOrdenadosPorImporte = [...dataPaises];
      if (dataPaises[0].ordenDatos === "importe-menor-mayor") {
        dataPaisesOrdenadosPorImporte.sort((a, b) => b.importePais - a.importePais);
        dataPaisesOrdenadosPorImporte.forEach(
          (pais) => (pais.ordenDatos = "importe-mayor-menor")
        );
      } else {
        dataPaisesOrdenadosPorImporte.sort((a, b) => a.importePais - b.importePais);
        dataPaisesOrdenadosPorImporte.forEach(
          (pais) => (pais.ordenDatos = "importe-menor-mayor")
        );
      }
      return dataPaisesOrdenadosPorImporte;
    }
    dataPaisesActual = ordenarDatosPorImporte(dataPaisesActual);
    renderizarTabla(dataPaisesActual);
  });
}
