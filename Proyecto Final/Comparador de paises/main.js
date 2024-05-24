const templateRow = document.getElementById("template-row").content;
const tbody = document.querySelector("tbody");

function addCeldaAFila(text, tr) {
  const td = document.createElement("td");
  td.textContent = text; //todas las columnas equivalen a 1 fila
  td.classList.add("py-2");
  tr.appendChild(td);
}

function mostrarFilas(params) {
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

function miFunction(params) {
  for (let i = 0; i < 5; i++) {
    const newRow = templateRow.cloneNode(true);
    const cells = newRow.getElementsByTagName("td");
    cells[0].textContent = i; //fila 1
    cells[1].textContent = i; //fila 2
    cells[2].textContent = i;
    cells[3].textContent = i;
    cells[4].textContent = i;
    newRow.removeAttribute("id");
    tbody.appendChild(newRow);
  }
}
