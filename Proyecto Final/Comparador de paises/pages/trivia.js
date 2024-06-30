const estado = JSON.parse(localStorage.getItem("estado"));
//hasta ahora solo muestra 3 nombres y uno de ellos es el correcto
iniciarApp(estado);

function iniciarApp(estado) {
  const paisActualTrivia = seleccionarPaisAleatorio(estado);
  mostrarBanderaTrivia(paisActualTrivia);
  mostrarOpcionesTrivia(crearOpcionesTrivia(estado, paisActualTrivia));
  configurarEventosDeRespuesta();
}

function aplicarEstilosRespuesta(inputRespuesta, isRespuestaCorrecta) {
  const claseOpcion = isRespuestaCorrecta ? "opcionCorrecta" : "opcionErrada";
  inputRespuesta.classList.add(claseOpcion);
  inputRespuesta.classList.add("opcionElegida");
}
function crearOpcionesTrivia(estado, paisCorrecto) {
  //crear funcion para que no se repitan las opciones
  const opciones = [
    obtenerNombreAleatorioPais(estado),
    obtenerNombreAleatorioPais(estado),
    paisCorrecto.nombrePais,
  ];

  //mejorar esta funcion
  const opcionesAlAzar = [...opciones]
    .sort((opcion) => Math.round(Math.random() * 2) - 1)
    .sort((opcion) => Math.round(Math.random() * 2) - 1);
  //hacer algo para que no sean los mismos nombres
  return opcionesAlAzar;
}

function mostrarOpcionesTrivia(opcionesAlAzar) {
  const elementosOpciones = document.querySelectorAll("span.list-group-item ");

  for (const [indice, elemento] of opcionesAlAzar.entries()) {
    elementosOpciones[indice].textContent = elemento;
  }
}
function cambiarSrcImagen(elemento, src) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  elementoSeleccionado.src = src;
}
function cambiarTextoElemento(elemento, texto) {
  const elementoSeleccionado = document.querySelector(`${elemento}`);
  elementoSeleccionado.textContent = texto.toLocaleString("en-US");
}
function obtenerIndiceAleatorio(estado) {
  return Math.round(Math.random() * estado.dataPaisesActual.length);
}
function obtenerNombreAleatorioPais(estado) {
  return estado.dataPaisesActual[obtenerIndiceAleatorio(estado)].nombrePais;
}
function seleccionarPaisAleatorio(estado) {
  const indiceRandom = obtenerIndiceAleatorio(estado);

  const paisActualTrivia = estado.dataPaisesActual[indiceRandom];

  return paisActualTrivia;
}

function mostrarBanderaTrivia(paisActualTrivia) {
  cambiarSrcImagen(
    "#imagen-bandera-principal",
    paisActualTrivia.srcBanderaSvgPais
  );
}
function desactivarOpciones(elementosOpciones) {
  elementosOpciones.forEach((opcion) => {
    document.querySelector(`input#${opcion.htmlFor}`).disabled = true;
  });
}

function obtenerIndiceRespuestaCorrecta(paisActualTrivia) {
  const elementosSpan = [...document.querySelectorAll("span.list-group-item")];
  const indiceRespuestaCorrecta = elementosSpan.findIndex(
    (span) => span.textContent === paisActualTrivia.nombrePais
  );
  return indiceRespuestaCorrecta;
}
function configurarEventosDeRespuesta() {
  const inputsRespuestas = [
    ...document.querySelectorAll("label.list-group-item "),
  ];
  for (const [
    indiceInputRespuesta,
    inputRespuesta,
  ] of inputsRespuestas.entries()) {
    inputRespuesta.addEventListener("click", () => {
      const indiceRespuestaCorrecta =
        obtenerIndiceRespuestaCorrecta(paisActualTrivia);
      inputsRespuestas[indiceRespuestaCorrecta].classList.add("opcionCorrecta");

      const isRespuestaCorrecta =
        indiceInputRespuesta === indiceRespuestaCorrecta;

      aplicarEstilosRespuesta(inputRespuesta, isRespuestaCorrecta);
      desactivarOpciones(inputsRespuestas);
    });
  }
}
