export function renderizarOpcionesSelect(data) {
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

  const paisesConTarifaOrdenados = ordenarPaisesPorOrdenAlfabetico(data);

  for (const { currencies, translations } of paisesConTarifaOrdenados) {
    const divisa = Object.keys(currencies)[1] || Object.keys(currencies)[0];
    const pais = translations.spa.common;
    const opcion = document.createElement("option");
    const moneda = currencies[Object.keys(currencies)[0]].name;
    const simboloDivisa =
      currencies[Object.keys(currencies)[0]].symbol?.replace(/\s/g, "") || "$";
    opcion.value = divisa;
    opcion.textContent = ` ${pais} - ${moneda} - ${simboloDivisa} - ${divisa}`;
    opcion.classList.add(simboloDivisa);

    opcion.setAttribute("aria-label", moneda);
    seleccionarPais.appendChild(opcion);
  }
}
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
