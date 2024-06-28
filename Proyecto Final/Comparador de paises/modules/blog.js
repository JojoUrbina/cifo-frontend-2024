//import { iniciarApp } from "../main.js";
const estado = JSON.parse(localStorage.getItem("estado"));
//se aplico propiedad de blogPais , para filtrarlo y mostrar esa informacion en el blog
function renderizarBlog(estado) {
  const paisSeleccionado = estado.dataPaisesActual[100];
  //seccion heroe
  console.log(paisSeleccionado);
  actualizarTextoElemento(
    "#heroe-nombre-principal",
    paisSeleccionado.nombrePais
  );
  actualizarTextoElemento(
    "#heroe-nombre-nativo",
    paisSeleccionado.nombreNativoPais
  );
  actualizarTextoElemento(
    "#heroe-nombre-oficial",
    paisSeleccionado.nombreOficialPais
  );
  actualizarTextoElemento("#heroe-nombre-cca2", paisSeleccionado.cca2Pais);

  actualizarSrcAltImagen(
    "#imagen-bandera-principal",
    paisSeleccionado.srcBanderaSvgPais,
    paisSeleccionado.altBanderaPais
  );
  actualizarSrcAltImagen(
    "#imagen-bandera-escudo",
    paisSeleccionado.srcEscudoPais,
    paisSeleccionado.altBanderaPais
  );
  //fin de seccion Heroe
}

renderizarBlog(estado);

function actualizarTextoElemento(elemento, texto) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  elementoSeleccionado.textContent = texto;
}

function actualizarSrcAltImagen(elemento, src, alt) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  if (src) {
    elementoSeleccionado.src = src;
    elementoSeleccionado.alt = alt || "sin informacion para mostrar";
  } else {
    elementoSeleccionado.src = "...";
    elementoSeleccionado.alt = "sin escudo";
  }
}

/* const prueba = $cca2;
prueba.textContent = estado.dataPaisesActual[0].nombrePais; */
