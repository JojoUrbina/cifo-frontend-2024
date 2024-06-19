/* Task 1 --------------------------------------------------------------------------------------- */

function testCdn() {
  const p = $("#cdn");
  p.text(p.text() + new Date().getFullYear());
}

/* Task 1 solution ------------------------------------------------------------------------------ */

// There is nothing to do here. For this task you only need to add something to index8.html.

/* Task 2 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 2 solution ------------------------------------------------------------------------------ */
$("#task21 li").each(function () {
  //si retorna faslse la operacion de la izquierda, ejecuta la derecha
  $(this).hasClass("killed") || $(this).addClass("killed");
});

$("#task22 li").each(function () {
  //si es verdadera la operacion a la izquierda, ejecuta la  derecha
  $(this).hasClass("killed") && $(this).removeClass("killed");
});
/* Task 3 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 3 solution ------------------------------------------------------------------------------ */
$("#task3").hover(function () {
  // Random color on hover
  const colores = ["#9009", "#0909"];
  const numeroAleatorio = Math.floor(Math.random() * colores.length);
  $(this).css("background-color", colores[numeroAleatorio]);
});

$("#task3").click(function () {
  const colores = ["#9009", "#fff"];
  const numeroAleatorio = Math.floor(Math.random() * colores.length);
  $("body").css("background-color", colores[numeroAleatorio]);
});
/* Task 4 --------------------------------------------------------------------------------------- */

// There is no initial provided code.

/* Task 4 solution ------------------------------------------------------------------------------ */
function ajaxPokemon() {
  $.ajax({ url: "https://pokeapi.co/api/v2/pokemon/charmeleon/" }).done(
    function (data) {
      $(".task4").text(JSON.stringify(data.abilities));
    }
  );
}
/* Task 5 --------------------------------------------------------------------------------------- */
$("#slider").slider({
  min: 0,
  max: 42,
  slide: function(event, ui) {
    console.log(`Valor del slider: ${ui.value}`);
  }
});
// There is no initial provided code.

/* Task 5 solution ------------------------------------------------------------------------------ */

/* DOMContentLoaded ----------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  testCdn();
  //ajaxPokemon();
});
