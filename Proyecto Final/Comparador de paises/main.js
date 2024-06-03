const $inputMonto = document.querySelector("#monto");
const $seleccionarPais = document.querySelector("#seleccionarPais");
const tbody = document.querySelector("tbody");
const fragment = document.createDocumentFragment();

function addCeldaAFila(text, tr, moneda, imagen) {
  const td = document.createElement("td");
  td.textContent = text;
  td.classList.add("py-2");
  if (moneda) {
    td.classList.add(moneda);
  }
  if (imagen) {
    const img = document.createElement("img");
    td.textContent = "";
    img.src = imagen;
    img.alt = text;
    img.classList.add("bandera");
    img.classList.add("img-thumbnail");

    td.appendChild(img);
  }

  tr.appendChild(td);
}

async function actualizarMontos(monto) {
  const res = await fetch("https://open.er-api.com/v6/latest/EUR");
  const data = await res.json();
  const tarifas = data.rates;

  for (const tarifa in tarifas) {
    const $tdEuros = document.getElementsByClassName(`${tarifa}`);
    for (const elemento of $tdEuros) {
      elemento.textContent =
        parseFloat((tarifas[tarifa] * (monto || 1)).toFixed(2)) + "$";
    }
  }
}

async function cargarDatos() {
  const response = await fetch("paises.json");

  const data = await response.json();

  for (const moneda of data) {
    if (moneda.currencies) {
      //Agregar las filas
      const tr = document.createElement("tr");
      addCeldaAFila(1, tr, Object.keys(moneda.currencies)[0]);
      addCeldaAFila(Object.keys(moneda.currencies)[0], tr);
      addCeldaAFila(
        moneda.currencies[Object.keys(moneda.currencies)[0]].name,
        tr
      );
      addCeldaAFila(moneda.translations.spa.common, tr);
      addCeldaAFila(Object.values(moneda.languages)[0], tr);
      addCeldaAFila(moneda.flags.alt, tr, "", moneda.flags.png);
      addCeldaAFila("ver mas", tr, "", "");
      fragment.appendChild(tr);
    } else {
      //console.log(moneda.name.common, "No tiene currencies");
    }
  }
  tbody.appendChild(fragment);

  actualizarMontos();

  $inputMonto.addEventListener("input", (e) => {
    actualizarMontos(Number(e.target.value));
  });
}
cargarDatos();

function agregarOpcionesASelect(params) {
  const $option = document.createElement("option");
  $option.value = "USD";
  $option.textContent = "Estados Unidos";
  $seleccionarPais.appendChild($option);
}
agregarOpcionesASelect();
