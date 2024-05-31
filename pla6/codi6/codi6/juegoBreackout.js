// This is how many pixels the bar has to move each time.
const delta = 20;
// Same initial value as left: 200px in CSS.
let left = 200;
document.body.addEventListener("keydown", (e) => {
  moverBarra(e);
});

function moverBarra(e) {
  const anchoDeContenedor =
    document.querySelector(".ball-container").clientWidth;
  const barra = document.querySelector(".bar");
  const anchoBarra = 80;
  const direccion = e.code;
  if (direccion === "ArrowLeft") {
    left = Math.max(0, left - delta);
  } else if (direccion === "ArrowRight") {
    left = Math.min(anchoDeContenedor - anchoBarra, left + delta);
  }
  barra.style.left = `${left}px`;
}

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
const bola = document.querySelectorAll("div")[1];
const anchoBola = 25;
let direccionEjeVertical = "abajo";
let direccionEjeHorizontal = "derecha";

function moverPelota() {
  if (direccionEjeVertical === "abajo") {
    topCoord += topDelta;

    if (
      topCoord === fieldHeight - anchoBola - 20 &&
      leftCoord - left >= -40 &&
      leftCoord - left <= 80
    ) {
      direccionEjeVertical = "arriba";
    }

    if (topCoord === fieldHeight - anchoBola) {
      direccionEjeVertical = "arriba";
      console.log("perdiste");
    }
  } else if (direccionEjeVertical === "arriba") {
    topCoord -= topDelta;
    if (topCoord === 0) {
      direccionEjeVertical = "abajo";
    }
  }

  if (direccionEjeHorizontal === "derecha") {
    leftCoord = Math.min(fieldWidth - anchoBola, leftCoord + leftDelta);
    if (leftCoord === fieldWidth - anchoBola) {
      direccionEjeHorizontal = "izquierda";
    }
  } else if (direccionEjeHorizontal === "izquierda") {
    leftCoord = Math.max(0, leftCoord - leftDelta);
    if (leftCoord === 0) {
      direccionEjeHorizontal = "derecha";
    }
  }

  bola.style.left = `${leftCoord}px`;
  bola.style.top = `${topCoord}px`;
}
setInterval(moverPelota, 50);
