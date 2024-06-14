export function renderizarOpcionesSelect(data) {
  function ordenarPaisesPorOrdenAlfabetico(data) {
    const paisesConTarifaOrdenados = [...data];
    paisesConTarifaOrdenados.sort((a, b) => {
      if (a.nombrePais > b.nombrePais) {
        return 1;
      } else if (a.nombrePais < b.nombrePais) {
        return -1;
      } else {
        return 0;
      }
    });
    return paisesConTarifaOrdenados;
  }

  const paisesConTarifaOrdenados = ordenarPaisesPorOrdenAlfabetico(data);

  for (const {
    nombrePais,
    monedaPais,
    simboloMonedaPais,
    divisaPais,
  } of paisesConTarifaOrdenados) {
    const opcion = document.createElement("option");

    opcion.value = divisaPais;
    opcion.textContent = ` ${nombrePais} - ${monedaPais} - ${simboloMonedaPais} - ${divisaPais}`;
    opcion.classList.add(simboloMonedaPais);

    opcion.setAttribute("aria-label", monedaPais);
    seleccionarPais.appendChild(opcion);
  }
}
export function renderizarTabla(data) {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector("template").content;
  const fragment = document.createDocumentFragment();

  tbody.innerHTML = "";
  for (const {
    nombrePais,
    lenguajePais,
    monedaPais,
    simboloMonedaPais,
    srcBanderaPais,
    altBanderaPais,
    divisaPais,
    importePais,
  } of data) {
    const filasClonadas = template.cloneNode(true);
    const celdasClonadas = filasClonadas.querySelectorAll("td");
    celdasClonadas[0].textContent = importePais + " " + simboloMonedaPais;
    celdasClonadas[0].classList.add(divisaPais);
    celdasClonadas[1].textContent = divisaPais;
    celdasClonadas[2].textContent = monedaPais;
    celdasClonadas[3].textContent = nombrePais;
    celdasClonadas[4].textContent = lenguajePais;
    celdasClonadas[5].querySelector("img").src = srcBanderaPais;
    celdasClonadas[5].querySelector("img").alt = altBanderaPais;
    celdasClonadas[6].textContent = "ver mas";
    fragment.appendChild(filasClonadas);
  }
  tbody.appendChild(fragment);
}
