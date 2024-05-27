const templateRow = document.getElementById("template-row").content;
const tbody = document.querySelector("tbody");
const inputMonto = document.querySelector("#monto");
document.addEventListener("DOMContentLoaded", (e) => actualizarMontos());

function addCeldaAFila(text, tr, moneda) {
  const td = document.createElement("td");
  td.textContent = text; //todas las columnas equivalen a 1 fila
  td.classList.add("py-2");
  if (moneda) {
    td.classList.add(moneda);
  }
  tr.appendChild(td);
}
async function cargarDatos() {
  const res = await fetch("paises.json");
  const data = await res.json();
  const dataOrdenada = [...data].sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });

  const divisa = [];

  for (const moneda of dataOrdenada) {
    if (moneda.currencies) {
      const tr = document.createElement("tr");
      addCeldaAFila(1, tr, Object.keys(moneda.currencies)[0]);
      addCeldaAFila(Object.keys(moneda.currencies)[0], tr);
      addCeldaAFila(moneda.name.common, tr);
      addCeldaAFila(Object.values(moneda.languages)[0], tr);
      addCeldaAFila("bandera", tr);
      tbody.appendChild(tr);
      divisa.push(moneda);
    } else {
      //console.log(moneda.name.common, "No tiene currencies");
    }
  }
  inputMonto.addEventListener("input", (event) => {
    let monto = Number(inputMonto.value);
    actualizarMontos(monto);
  });
}
cargarDatos();

async function actualizarMontos(monto) {
  const res = await fetch("divisas.json");
  const data = await res.json();
  const tarifas = data.rates;
  for (const tarifa in tarifas) {
    const $tdEuros = document.getElementsByClassName(`${tarifa}`);
    for (const elemento of $tdEuros) {
      elemento.textContent = parseFloat(
        (tarifas[tarifa] * (monto || 1)).toFixed(2)
      );
    }
  }
}
