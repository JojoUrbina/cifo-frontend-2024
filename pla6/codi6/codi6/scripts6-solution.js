/* Task 1 --------------------------------------------------------------------------------------- */

/* This is a line with exactly 100 characters --------------------------------------------------- */

/**
 * The question about the DOM:
 * Your answer here...
 *  ¿Cómo definirías qué es exactamente y para qué sirve el DOM?
 * El DOM (Document Object Model) es una interfaz de programación que representa el documento HTML
 * en forma de una estructura de árbol. Es la API más usada en la web, ya que permite crear,
 * modificar y manipular los nodos en el documento HTML.
 *
 * Sirve para interactuar con cualquier nodo
 * del documento, cuya estructura es un árbol lógico. A cada rama se le pueden aplicar métodos
 * para interactuar con ellos. Además, los nodos tienen eventos y propiedades a las cuales se
 * puede acceder como objetos y aplicar los cambios en el momento.
 *
 * Esto mejora la experiencia de usuario ya que permite a los programadores crear interactividad
 * con la que pueden interactuar, con eventos de click, validacion de formularios entre otros.
 *
 */
/**
 * The question about `defer`:
 * Your answer here...
 * La línea donde enlazamos los scripts al documento HTML incorpora el atributo defer. ¿Para qué sirve?
 * ¿Qué diferencia hace ponerlo o no?
 *
 * El atributo defer es una propiedad de HTMLScriptElement que indica que el script debe cargarse
 * y ejecutarse después de que el documento HTML haya sido cargado. Esto garantiza
 * queel contenido del documento se cargue primero.
 *
 * La diferencia entre ponerlo o no es importante dependiendo de dónde se coloque el script.
 * Si el script se coloca en el head sin el atributo defer, el navegador detendrá la carga del
 * contenido HTML para cargar y ejecutar el script inmediatamente, lo que puede causar errores si
 * el script intenta interactuar con el DOM antes de que el documento esté completamente cargado.
 *
 * En cambio, si se aplica el atributo defer, el script esperará a que el documento esté completamente
 * cargado antes de ejecutarse, lo que evita errores relacionados con la interacción temprana con el DOM.
 * Aunque, los scripts también pueden colocarse al final del body para lograr que carge despues del
 * procesamiento del documento HTML, aunque por semántica es preferible ubicarlos en el head con defer.
 */

/**
 * The question about `getElementBy...` vs `getElementsBy...`:
 * Your answer here...
 *  En los métodos getElementBy... y getElementsBy... hay una s que los diferencia. ¿Qué
 * ¿implicaciones tiene esto en cuanto al valor que devuelven estos métodos?
 * getElementBy sin "s" devolvera el primer elemento que se especifique, es decir, si se espicifica
 * por className, devolvera el primer elemento que tenga la clase especificada.
 * getElementBy con "s" devolvera una coleccion de todos los elementos que compartan la
 * clase("id,etiqueta,etc"), siendo esta coleccion una HTMLcollection, que es un objeto que se
 * actualiza automaticamente si hay cambios en el dom que afecta a los elementos seleccionados.
 *
 * ¿Cuáles son los otros dos métodos que sirven casi por lo mismo?
 * querySelector y querySelectorAll.
 *
 */

/* Task 2 --------------------------------------------------------------------------------------- */

// There is no initial provided code.
/*const navRoleUsuario = document.querySelectorAll(".nav-role li")[0];
const navRoleAdministrador = document.querySelectorAll(".nav-role li")[1];
const liAdmin = document.querySelectorAll(".admin");

function aplicarDisplayAElementosAdmin(display) {
  liAdmin.forEach((li) => {
    li.style.display = display;
  });
}

navRoleUsuario.addEventListener("click", () => {
  navRoleUsuario.classList.add("role-selected");
  navRoleAdministrador.classList.remove("role-selected");
  aplicarDisplayAElementosAdmin("none");
});
navRoleAdministrador.addEventListener("click", () => {
  navRoleAdministrador.classList.add("role-selected");
  navRoleUsuario.classList.remove("role-selected");
  aplicarDisplayAElementosAdmin("");
});

/* Task 2 solution ------------------------------------------------------------------------------ */

/* Task 3 --------------------------------------------------------------------------------------- */

let teams = [
  {
    team: "South Korea",
    games: {
      wins: 0,
      draws: 1,
      losses: 2,
    },
  },
  {
    team: "Denmark",
    games: {
      wins: 1,
      draws: 0,
      losses: 2,
    },
  },
  {
    team: "Iceland",
    games: {
      wins: 2,
      draws: 1,
      losses: 0,
    },
  },
  {
    team: "France",
    games: {
      wins: 1,
      draws: 2,
      losses: 0,
    },
  },
];

/* Task 3 solution ------------------------------------------------------------------------------ */
/*function calcularPuntosFutbol(victorias, empates) {
  return victorias * 3 + empates * 1;
}

const equiposOrdenadosPorPuntos = teams.sort((a, b) => {
  const puntosEquipoA = calcularPuntosFutbol(a.games.wins, a.games.draws);
  const puntosEquipoB = calcularPuntosFutbol(b.games.wins, b.games.draws);

  if (puntosEquipoA > puntosEquipoB) {
    return -1;
  } else if (puntosEquipoA < puntosEquipoB) {
    return 1;
  } else {
    return 0;
  }
});
const tbodyFutbol = document.querySelector("#classification tbody")

function agregarCelda(texto,tr,clase) {
  const td = document.createElement("td")
  td.textContent = texto
  tr.appendChild(td)
}

teams.forEach(team => {
  const tr = document.createElement("tr")
  agregarCelda(team.team,tr)
  agregarCelda(team.games.wins,tr)
  agregarCelda(team.games.draws,tr)
  agregarCelda(team.games.losses,tr)
  agregarCelda(calcularPuntosFutbol(team.games.wins,team.games.draws),tr)
  tbodyFutbol.appendChild(tr) 
});
const tr = document.querySelector("tbody tr")
tr.classList.add("classification-first")*/
/* Task 4 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 4 solution ------------------------------------------------------------------------------ */
/**
 * 1.  Cuando  se  carga  la  página  deben  verse  en  color  rojo  los  valores  negativos  de  la  tercera  columna.  Se  
corresponden  con  las  deudas  que  ya  deberían  haberse  pagado  y  nos  interesa  que  queden  remarcadas.  Utilice  
la  clase  unpaid  (ya  existente  en  la  hoja  de  estilos  externa).
2.  Cuando  se  carga  la  página,  la  fila  de  los  totales  debe  mostrar  la  suma  de  todos  los  importes  de  la  columna  en  
vez  del  0.00  €  que  aparece  por  defecto.
3.  La  opción  Remove  unpaid  no  hace  nada,  pero  al  documento  HTML  tiene  asociada  una  función  a  través  del  
atributo  onclick .  Implemente  esta  función  para  que  cuando  el  usuario  pulse  esta  opción  desaparezcan  de  
la  tabla  todas  las  filas  correspondientes  a  clientes  morosos  (los  que  ya  deberían  haber  pagado).  No  debe  
esconder  estas  filas,  debe  eliminarlas  del  todo.  Además,  el  saldo  total  deberá  actualizarse  para  reflejar  el  total  de  
las  filas  que  permanezcan.
 */
/*
const filasClientes = document.querySelectorAll("#customers tbody tr");
const celdaTotalBalance = document.querySelector("tfoot tr td.amount");
document.addEventListener("DOMContentLoaded", () => {
  actualizarCeldaTotalBalance(celdaTotalBalance, filasClientes);
  pintarClientesMorososPorIndice(filasClientes);
});

function removeUnpaid() {
  const filasClientes = document.querySelectorAll("#customers tbody tr");
  const indicesClientesMorosos = filtrarIndicesClientesMorosos(filasClientes);

  if (indicesClientesMorosos.length) {
    indicesClientesMorosos.forEach((indice) => {
      filasClientes[indice].remove();
    });
    const celdaTotalBalance = document.querySelector("tfoot tr td.amount");
    actualizarCeldaTotalBalance(
      celdaTotalBalance,
      document.querySelectorAll("#customers tbody tr")
    );
  }
}

function filtrarIndicesClientesMorosos(filasClientes) {
  const indicesClientesMorosos = [];

  for (let i = 0; i < filasClientes.length; i++) {
    const diasHastaElPago = parseFloat(
      filasClientes[i].querySelectorAll("td")[2].textContent
    );

    diasHastaElPago < 0 && indicesClientesMorosos.push(i);
  }
  return indicesClientesMorosos;
}

function pintarClientesMorososPorIndice(filasClientes) {
  const indicesClientesMorosos = filtrarIndicesClientesMorosos(filasClientes);

  indicesClientesMorosos.forEach((indiceClienteMoroso) => {
    filasClientes[indiceClienteMoroso]
      .querySelectorAll("td")[2]
      .classList.add("unpaid");
  });
}

function calcularBalance(filasClientes) {
  let totalCeldasBalance = 0;
  for (let i = 0; i < filasClientes.length; i++) {
    totalCeldasBalance += Number(
      filasClientes[i].querySelectorAll("td")[1].textContent
    );
  }
  return totalCeldasBalance;
}

function actualizarCeldaTotalBalance(celdaTotalBalance, filasClientes) {
  celdaTotalBalance.textContent = calcularBalance(filasClientes);
}

*/

/* Task 5 --------------------------------------------------------------------------------------- */
/*
let rating = 0;

const estrellas = document.querySelectorAll(".star-gray");

function pintarEstrellaPink(estrella) {
  estrella.classList.replace("star-gray", "star-pink");
}
function pintarEstrellagray(estrella) {
  estrella.classList.replace("star-pink", "star-gray");
}

for (const [indice, estrella] of estrellas.entries()) {
  estrella.addEventListener("click", () => {
    for (let i = 0; i < estrellas.length; i++) {
      if (i <= indice) {
        pintarEstrellaPink(estrellas[i]);
        rating = indice + 1;
      } else {
        pintarEstrellagray(estrellas[i]);
      }
    }
  });
}
*/
/* Task 5 solution ------------------------------------------------------------------------------ */

/* Task 6 --------------------------------------------------------------------------------------- */

/* Task 6 solution 
// This is how many pixels the bar has to move each time.
const delta = 20;
// Same initial value as left: 200px in CSS.
let left = 200;
document.body.addEventListener("keydown", (e) => {
  moverBarra(e);
});

function moverBarra(e) {
  const anchoDeContenedor =
    document.querySelector(".bar-container").clientWidth;
  const barra = document.querySelector(".bar");
  const anchoBarra = 80;
  const direccion = e.code;
  if (direccion === "ArrowLeft") {
    left = Math.max(0, left - delta);
    console.log(left);
  } else if (direccion === "ArrowRight") {
    left = Math.min(anchoDeContenedor - anchoBarra, left + delta);
  }
  barra.style.left = `${left}px`;
}


------------------------------------------------------------------------------ */

/* Task 7 --------------------------------------------------------------------------------------- */

// These indicate how many pixels the ball has to move each time on each axis.
let topDelta = (leftDelta = 5);
// These are the coordinates for ball position.
let topCoord = (leftCoord = 0);
// This is the width of the playground area.
const fieldWidth = document.querySelector(".ball-container").clientWidth;
// This is the height of the playground area.
const fieldHeight = document.querySelector(".ball-container").clientHeight;

/* Task 7 solution ------------------------------------------------------------------------------ */
const bola = document.querySelectorAll("div")[9];
const anchoBola = 25;
let direccionEjeVertical = "abajo";
let direccionEjeHorizontal = "derecha";

function moverPelota() {
  if (direccionEjeVertical === "abajo") {
    topCoord += topDelta;
    if (topCoord === fieldHeight - anchoBola) {
      direccionEjeVertical = "arriba";
      console.log("Pelota rebota en pared de abajo");
    }
  } else if (direccionEjeVertical === "arriba") {
    topCoord -= topDelta;
    if (topCoord === 0) {
      direccionEjeVertical = "abajo";
      console.log("Pelota rebota en pared de arriba");
    }
  }

  if (direccionEjeHorizontal === "derecha") {
    leftCoord = Math.min(fieldWidth - anchoBola, leftCoord + leftDelta);
    if (leftCoord === fieldWidth - anchoBola) {
      direccionEjeHorizontal = "izquierda";
      console.log("Pelota rebota en pared derecha");
    }
  } else if (direccionEjeHorizontal === "izquierda") {
    leftCoord = Math.max(0, leftCoord - leftDelta);
    if (leftCoord === 0) {
      direccionEjeHorizontal = "derecha";
      console.log("Pelota rebota en pared izquierda");
    }
  }

  bola.style.left = `${leftCoord}px`;
  bola.style.top = `${topCoord}px`;
}
//setInterval(moverPelota, 50);
