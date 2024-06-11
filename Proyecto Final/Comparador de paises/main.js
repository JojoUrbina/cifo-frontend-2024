const inputMonto = document.querySelector("#monto");
const seleccionarPais = document.querySelector("#seleccionarPais");
const tbody = document.querySelector("tbody");
const template = document.querySelector("template").content;
const fragment = document.createDocumentFragment();
const simboloInput = document.querySelector("#inputGroup-sizing-md");
document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
});

let paisesConTarifa = [];

inputMonto.addEventListener("input", (e) => {
  //montoActual = Number(e.target.value);

  actualizarMontos();
});
function actualizarMontos() {
  const importeEnInput = Number(document.querySelector("#monto").value);
  const divisasSeleccionada =
    document.querySelector("#seleccionarPais").selectedOptions[0].value;
  const celdasImporte = [...document.querySelectorAll(".celda-importe")];

  for (const pais of paisesConTarifa) {
    pais.actualizarImportePais(importeEnInput || 1);

    /*    const divisa = Object.keys(currencies)[1] || Object.keys(currencies)[0];
  
    //console.log(tarifa,divisa);
    //importe.textContent = importe.textContent * (importeEnInput || 1)
      //const simbolo = celda.classList[1];
      const monto = Math.min(tarifas[tarifa] * (montoInput || 1)).toFixed(2);
      celda.textContent = `${monto}  ${simbolo}`; */
  }
  renderizarTabla(paisesConTarifa);
  //console.log(paisesConTarifa[0].importe);
}

seleccionarPais.addEventListener("change", (e) => {
  const moneda = seleccionarPais.selectedOptions[0].id;
  tarifaActual = e.target.value;
  simboloInput.textContent = seleccionarPais.selectedOptions[0].className;
  inputMonto.placeholder = `Escribir monto en ${moneda}`;

  //actualizarMontos(tarifaActual, montoActual);
});

async function cargarDatos() {
  inputMonto.placeholder = `Escribir monto en Euro`;
  simboloInput.textContent = "€";

  const paises = await fetchPaises();
  const tarifas = await fetchTarifas();
  paisesConTarifa = procesarData(paises, tarifas);

  renderizarTabla(paisesConTarifa);
  renderizarOpcionesSelect(paisesConTarifa);
  //actualizarMontos(tarifaActual);
}

function renderizarTabla(data) {
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

function renderizarOpcionesSelect(data) {
  const paisesConTarifaOrdenados = ordenarPaisesPorOrdenAlfabetico(data);

  for (const { currencies, translations } of paisesConTarifaOrdenados) {
    const divisa = Object.keys(currencies)[1] || Object.keys(currencies)[0];
    const pais = translations.spa.common;
    const opcion = document.createElement("option");
    const moneda = currencies[Object.keys(currencies)[0]].name;
    const simboloDivisa =
      currencies[Object.keys(currencies)[0]].symbol?.replace(/\s/g, "") || "$";
    opcion.value = divisa;
    opcion.textContent = pais;
    opcion.classList.add(simboloDivisa);
    opcion.setAttribute("id", moneda);
    seleccionarPais.appendChild(opcion);
  }
}
function filtrarSimbolo(currencies) {
  if (currencies[Object.keys(currencies)[0]].symbol) {
    return currencies[Object.keys(currencies)[0]].symbol.replace(/\s/g, "");
  } else {
    return "$";
  }
}
function ordenarPaisesPorOrdenAlfabetico(data) {
  const paisesConTarifaOrdenados = [...data];
  paisesConTarifaOrdenados.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return 1;
    } else if (a.name.common < b.name.common) {
      return -1;
    } else {
      return 0;
    }
  });
  return paisesConTarifaOrdenados;
}
function procesarData(paises, tarifas) {
  const paisesConCurrencies = paises.filter((pais) => pais.currencies);
  const paisesConTarifa = paisesConCurrencies.filter(
    (pais) =>
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]]
  );

  for (const pais of paisesConTarifa) {
    pais.tarifa = Number(
      (
        tarifas[Object.keys(pais.currencies)[0]] ||
        tarifas[Object.keys(pais.currencies)[1]]
      ).toFixed(2)
    );
    pais.importe = pais.tarifa;
    pais.actualizarImportePais = function (monto) {
      this.importe = Number(this.tarifa * monto).toFixed(2)
    };
  }

  return paisesConTarifa;
}
async function fetchPaises() {
  const response = await fetch("paises.json");
  const data = await response.json();
  return data;
}
async function fetchTarifas() {
  const res = await fetch(`divisas.json`);
  const data = await res.json();
  const tarifas = data.rates;
  return tarifas;
}
