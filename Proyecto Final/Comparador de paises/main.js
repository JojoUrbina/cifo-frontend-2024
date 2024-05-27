/*const templateRow = document.getElementById("template-row").content;
const tbody = document.querySelector("tbody");

function mostrarFilas(params) {
  function addCeldaAFila(text, tr) {
    const td = document.createElement("td");
    td.textContent = text; //todas las columnas equivalen a 1 fila
    td.classList.add("py-2");
    tr.appendChild(td);
  }

  for (let i = 1; i <= 10; i++) {
    const tr = document.createElement("tr");
    addCeldaAFila(`soy la culumna ${0} fila ${i}`, tr); //todo esto es una fila
    addCeldaAFila(`soy la columna ${1} fila ${i}`, tr);
    addCeldaAFila(`soy la columna ${2} fila ${i}`, tr);
    addCeldaAFila(`soy la columna ${3} fila ${i}`, tr);
    addCeldaAFila(`soy la columna ${4} fila ${i}`, tr);

    tbody.appendChild(tr);
  }
}
mostrarFilas();
*/
/*async function cargarDatos(params) {
    const res = await fetch("data.json")
    const data = await res.json();
    const divisa =[] 
    for( const moneda of data){
        if (Object.keys(moneda.currencies)[0]) {
            console.log(moneda.name.common,Object.keys(moneda.currencies)[0]);
        } else {
            console.log("no tiene currenci");
        }
        
  
}
}
cargarDatos()*/
const templateRow = document.getElementById("template-row").content;
const tbody = document.querySelector("tbody");
const inputMonto = document.querySelector("#monto");

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

  actualizarMontos();
}
cargarDatos();

async function actualizarMontos() {
  const res = await fetch("divisas.json");
  const data = await res.json();
  const tarifas = data.rates;
  for (const tarifa in tarifas) {
    const $tdEuros = document.getElementsByClassName(`${tarifa}`);
    for (const elemento of $tdEuros) {
      elemento.textContent = tarifas[tarifa].toFixed(2);
    }
  }
}
