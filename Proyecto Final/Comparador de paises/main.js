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

    dataPaises = procesarDataPaises(dataPaises, tarifas); //aqui el problema
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
  crearDatosPrincipales(dataPaises, tarifas);
}

const btnOrdenarImporte = document.querySelector(".ordenar-importe");
btnOrdenarImporte.addEventListener("click", () => {
  const datosOrdenadosPorImporte = ordenarDatosPorImporte(dataPaises);
  renderizarTabla(datosOrdenadosPorImporte);
});

function ordenarDatosPorImporte(datos) {
  const datosOrdenados = [...datos];

  datosOrdenados.sort((a, b) => {
    if (a.importe > b.importe) {
      return 1;
    } else if (a.importe < b.importe) {
      return -1;
    } else {
      return 0;
    }
  });
  return datosOrdenados;
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
      divisaPais: Object.keys(currencies)[0] || Object.keys(currencies)[1],
      tarifaPais: Number(
        (
          tarifas[Object.keys(currencies)[0]] ||
          tarifas[Object.keys(currencies)[1]]
        ).toFixed(2)
      ),
      importePais: Number(
        (
          tarifas[Object.keys(currencies)[0]] ||
          tarifas[Object.keys(currencies)[1]]
        ).toFixed(2)
      ),
    };
  });
  console.log(datosPrincipales);
  return datosPrincipales;
}

/*
export function renderizarTabla(data) {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("template").content;
  const fragment = document.createDocumentFragment();

  tbody.innerHTML = "";
  for (const { currencies, translations, languages, flags, importe } of data) {
    const divisa = Object.keys(currencies)[1] || Object.keys(currencies)[0];
    const simbolo =
      currencies[Object.keys(currencies)[0]].symbol?.replace(/\s/g, "") || "$";
    const moneda = currencies[Object.keys(currencies)[0]].name;
    const pais = translations.spa.common;
    const lenguaje = Object.values(languages)[0];
    const srcBandera = flags.png;
    const altBandera = flags.alt;

    const filasClonadas = template.cloneNode(true);
    const celdasClonadas = filasClonadas.querySelectorAll("td");
    celdasClonadas[0].textContent = importe + " " + simbolo;
    celdasClonadas[0].classList.add(divisa);
    celdasClonadas[1].textContent = divisa;
    celdasClonadas[2].textContent = moneda;
    celdasClonadas[3].textContent = pais;
    celdasClonadas[4].textContent = lenguaje;
    celdasClonadas[5].querySelector("img").src = srcBandera;
    celdasClonadas[5].querySelector("img").alt = altBandera;
    celdasClonadas[6].textContent = "ver mas";
    fragment.appendChild(filasClonadas);
  }
  tbody.appendChild(fragment);
}
*/

//currencies, translations, languages, flags, importe
/* function procesarDataPaises(paises, tarifas) {
  const dataPaises = [...paises];
  for (const pais of dataPaises) {
    pais.tarifa = Number(
      (
        tarifas[Object.keys(pais.currencies)[0]] ||
        tarifas[Object.keys(pais.currencies)[1]]
      ).toFixed(2)
    );
    //console.log(pais.name.common, (tarifas[Object.keys(pais.currencies)[0]] ||
    //tarifas[Object.keys(pais.currencies)[1]]));
    pais.importe = pais.tarifa;
    pais.actualizarImportePais = function () {
      const inputMontoValue = document.querySelector("#monto").value
      if (inputMontoValue) {
        this.importe = Number((inputMontoValue * this.tarifa).toFixed(2));
      } else {
        this.importe = this.tarifa;
      }
    };
  }
  return dataPaises;
} */
