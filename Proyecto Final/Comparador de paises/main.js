const $inputMonto = document.querySelector("#monto");
const $seleccionarPais = document.querySelector("#seleccionarPais");
const tbody = document.querySelector("tbody");
const fragment = document.createDocumentFragment();

document.addEventListener("DOMContentLoaded", () => {
  cargarDatos();
});

$inputMonto.addEventListener("input", (e) => {
  actualizarMontos(Number(e.target.value));
});

async function actualizarMontos(monto) {
  const res = await fetch("divisas.json");
  const data = await res.json();
  const tarifas = data.rates;

  for (const tarifa in tarifas) {
    const celdasMonto = document.getElementsByClassName(`${tarifa}`);
    for (const celda of celdasMonto) {
      celda.textContent =
        parseFloat((tarifas[tarifa] * (monto || 1)).toFixed(2)) + "$";
    }
  }
}

function renderizarPaises(data) {
  for (const { currencies, translations, languages, flags, name } of data) {
    if (currencies) {
      const divisa = Object.keys(currencies)[0];
      const moneda = currencies[Object.keys(currencies)[0]].name;
      const pais = translations.spa.common;
      const lenguaje = Object.values(languages)[0];
      const srcBandera = flags.png;
      const altBandera = flags.alt;

      const filasClonadas = template.cloneNode(true);
      const celdasClonadas = filasClonadas.querySelectorAll("td");

      celdasClonadas[0].classList.add(divisa);
      celdasClonadas[1].textContent = divisa;
      celdasClonadas[2].textContent = moneda;
      celdasClonadas[3].textContent = pais;
      celdasClonadas[4].textContent = lenguaje;
      celdasClonadas[5].querySelector("img").src = srcBandera;
      celdasClonadas[5].querySelector("img").alt = altBandera;
      celdasClonadas[6].textContent = "ver mas";
      fragment.appendChild(filasClonadas);
    } else {
      //console.log(name.common, "No tiene currencies"); //Paises sin moneda
    }
  }
  tbody.appendChild(fragment);
}

async function cargarDatos() {
  const response = await fetch("paises.json");
  const data = await response.json();
  renderizarPaises(data);
  agregarDatosASelect(data);
  actualizarMontos();
}

function agregarDatosASelect(data) {
  data.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return 1;
    } else if (a.name.common < b.name.common) {
      return -1;
    } else {
      return 0;
    }
  });

  for (const { currencies, translations } of data)
    if (currencies) {
      const divisa = Object.keys(currencies)[0];
      const pais = translations.spa.common;
      const option = document.createElement("option");
      option.value = divisa;
      option.textContent = pais;
      $seleccionarPais.appendChild(option);
    }
}
