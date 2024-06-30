const estado = JSON.parse(localStorage.getItem("estado"));
//hasta ahora solo muestra 3 nombres y uno de ellos es el correcto
iniciarApp(estado);

function iniciarApp(estado) {
  const indiceRandom = generarIndiceRandom(estado);

  const paisActualTrivia = estado.dataPaisesActual[indiceRandom];

  actualizarSrcImagen(
    "#imagen-bandera-principal",
    paisActualTrivia.srcBanderaSvgPais
  );

  renderizarOpciones(generarOpcionesTrivia(estado, paisActualTrivia));
}
function generarOpcionesTrivia(estado, paisCorrecto) {
  //crear funcion para que no se repitan las opciones
  const opciones = [
    nombreRandomPais(estado),
    nombreRandomPais(estado),
    paisCorrecto.nombrePais,
  ];

  //mejorar esta funcion
  const opcionesAlAzar = [...opciones]
    .sort((opcion) => Math.round(Math.random() * 2) - 1)
    .sort((opcion) => Math.round(Math.random() * 2) - 1);
  //hacer algo para que no sean los mismos nombres
  return opcionesAlAzar;
}

function renderizarOpciones(opcionesAlAzar) {
  const elementosOpciones = document.querySelectorAll("span.list-group-item ");

  for (const [indice, elemento] of opcionesAlAzar.entries()) {
    elementosOpciones[indice].textContent = elemento;
  }
}
function actualizarSrcImagen(elemento, src) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  elementoSeleccionado.src = src;
}
function actualizarTextoElemento(elemento, texto) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  elementoSeleccionado.textContent = texto.toLocaleString("en-US");
}
function generarIndiceRandom(estado) {
  return Math.round(Math.random() * estado.dataPaisesActual.length);
}
function nombreRandomPais(estado) {
  return estado.dataPaisesActual[generarIndiceRandom(estado)].nombrePais;
}
