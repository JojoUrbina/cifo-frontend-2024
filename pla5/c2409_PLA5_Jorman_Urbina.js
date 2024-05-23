/** ---------------------------------------------------------------------------
 * Desenvolupament Web Frontend
 * PLA 5: Fonaments de JavaScript
 * Mòdul: 2
 * Dedicació: 5 dies (25 hores)
 * Data d'entrega: 27 de maig de 2024
 * ------------------------------------------------------------------------- */

/* Task 1 ------------------------------------------------------------------ */
const question = "What is the answer to life, universe and everything?";
let answer = 0;
answer = 42;

// Write all your variables below this line:
const cifo = "CIFO";
const pi = 3.1416;
let distance = 0;
distance = answer * 1000 + 195;
const yeap = true;
const nope = false;
let condition = cifo === question;
condition = distance >= 42000;
const pi_sign = "π";
const pi_text =
  "The number π is a mathematical constant, approximately equal to 3.1416, defined in " +
  "the ratio between a circle's circumference and its diameter, the symbol is " +
  pi_sign;
const cifo_text = `El Bruc is approximately ${distance} meters away from the ${cifo} location.`;
console.log(cifo_text);
/* Task 2 ------------------------------------------------------------------ */

const lang = "ca";
const age = 38;

// Write your first `if` block below this line:
if (age >= 30) {
  console.log("You are a boomer!");
}
// Write your second `if` block below this line:
if (age >= 36) {
  console.log("A boomer for sure");
} else if (age >= 21) {
  console.log("Quite close to be a boomer");
} else {
  console.log("Too young to be boomer");
}
// Write your `switch` block below this line:
switch (lang) {
  case "es":
    console.log("Spanish");
    break;
  case "ca":
    console.log("Catalan");
    break;
  case "fr":
    console.log("French");
    break;
  default:
    console.log("Unknown");
    break;
}
// Replace `null` in the line below with your your one-liner using a ternary operator:
console.log(lang === "ca" ? "Catalan" : "Some other language");

/* Task 3 ------------------------------------------------------------------ */

let num = 9;
let sum = 0;
let product = 1;

// Write your `for` loop below this line:
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
// Write your `while` loop below this line:
let i = 1;
while (i <= num) {
  product *= i;

  i++;
}
/* Forma modificando la variable num
while (num) {
  product *= num;
  num--;
}
*/
console.log(product);

// Write your `do...while` loop below this line:
do {
  console.log(num);
  num--;
} while (num >= 3);
/* Task 4 ------------------------------------------------------------------ */

function func1(n) {
  //Agregue el parametro n
  return n + 10;
}

function func2(n) {
  //Agregue el return
  return (n = n * n);
}

function func3(name, city) {
  //se agrego los parametros necesarios, el return y comillas invertidas para estructurar la respuesta esperada.
  return `Hello ${name} from ${city}`;
}

function func4(n) {
  //Se corrigio el retorno, cambio de retornar el parametro n a la variable m.
  n = n * 42;
  let m = n / 10;
  m = m + " is a pretty big number";
  return m;
}

function func5(city1, city2) {
  //Se agregaron los parametros para que la funcion pueda recibir city1 y city2.
  return "First we take " + city1 + " then we take " + city2;
}

function func6(n) {
  //Se corrigio el nombre de la funcion
  n = "Double of " + n + " is " + n * 2;
  return n;
}

// Do not modify anything in the console.log lines below!
// But uncomment them to check your results.

// expected 23, got error :(
console.log(func1(13));

// expected 25, got undefined :(
console.log(func2(5));

// expected 'Hello Mike from London', got undefined :(
console.log(func3("Mike", "London"));

// expected '63 is a pretty big number', got number 630 :(
console.log(func4(15));

// expected 'First we take Manhattan then we take Berlin', got error :(
console.log(func5("Manhattan", "Berlin"));

// expected 'Double of 7 is 14', got error :(
console.log(func6(7));

/* Task 5 ------------------------------------------------------------------ */

const numbers = [1, 2, 3, 4, 5];
const days = new Array(
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
);
const mixed = [
  Date.now(),
  "New York",
  6.62607004,
  [["Paris", "Rome"]],
  { a: 97, e: 101, i: 105 },
  numbers,
];
const years = [1978, 2021, 1657, 2301, 1867, 2008];

// Replace the `null`s in the code below with your one-liners:
console.log(days.length);
console.log(mixed[2]);
console.log(numbers[numbers.length - 1]);
console.log(mixed[mixed.length - 2].e);
console.log(mixed[mixed.length - 3][0][1]);

// Replace the `null`s in the code below (do not add any new line):
const tuesdayToFriday = days.slice(1, 5);
console.log(tuesdayToFriday);
const sortedDays = days.sort();
console.log(sortedDays);
const number = Number(numbers.join(""));
console.log(number);
const maxYear = years.reduce((a, b) => Math.max(a, b)); //Math.max([...years]), seria el mas corto pero se recomienda reduce para no sobre carcar de argumentos Math.max.
console.log(maxYear);

// Today is Friday
// Today is Monday
// Today is Saturday
// Today is Sunday
// Today is Thursday
// Today is Tuesday
// Today is Wednesday
// Write your `for` loop below this line:
for (let i = 0; i < days.length; i++) {
  console.log(`Today is ${days.sort()[i]}`);
}

/* Task 6 ------------------------------------------------------------------ */

const laptop = {
  brand: "Apple",
  model: "MacBook Pro",
  os: "macOS Sonoma",
  year: 2022,
  memory: "16 GB",
  processor: "3 GHz Dual-Core Intel Core i7",
  apps: ["Visual Studio Code", "Xcode", "Dropbox", "Magnet"],
  owner: {
    name: "Albert",
    phone: "678901234",
  },
};

// Replace the `null`s in the code below with your one-liners:
console.log(laptop.os);
console.log(laptop.year + 10);
console.log(laptop.apps[laptop.apps.length - 1]);
console.log(laptop.owner.phone);

// Write your code to change some properties below this line:
laptop.memory = "32 GB";
laptop.apps.push("Spotify");
laptop.apps.push("Docker");
laptop.apps.shift();
laptop.owner.name = "Jorman";

// brand property has value Apple
// model property has value MacBook Pro
// os property has value macOS Sonoma
// year property has value 2022
// memory property has value 32 GB
// processor property has value 3 GHz Dual-Core Intel Core i7
// apps property is an array with 5 elements
// owner property is an object with 2 fields
// Write your `for` loop below this line:

for (const key in laptop) {
  if (Array.isArray(laptop[key])) {
    console.log(
      `${key} property is an array with ${laptop[key].length} elements`
    );
  } else if (typeof laptop[key] === "object") {
    console.log(
      `${key} property is an object with ${
        Object.keys(laptop[key]).length
      } fields`
    );
  } else {
    console.log(`${key} property has an value ${laptop[key]}`);
  }
}

/*Diferencia entre for in y for of

La diferencia radica en como recorre los elementos de un objeto o lista y que es lo que devuelve.
for of itera sobre  los valores de la estructura de datos directamente y devuelve el valor de cada elemento ademas de mantener el orden de iteracion. (tambien con otros tipos de iterables como strings. etc)

for of itera sobre propiedades enumerables de un objeto de volviendo cada keys(clave) , se utiliza frecuentemente en objetos, es util para inspeccionar todas las propiedades de un objeto.

Se debe usar for in para objetos ya que permite iterar sobre las keys de toda la estructura de datos y for of para los arrays ya que itera sobre los elementos directamente, de forma ordenada y mas predecible.

/* Task 7 
Contesten las siguientes preguntas en el archivo pla5.js. Usen un comentario multilínea  y creen pequeños ejemplos que muestren el funcionamiento de cada función.

¿Qué función u operador podemos usar para ver si una variable contiene un número?
- typeof() o !isNaN()

const variable = 1
typeof(variable) === "number" 
!isNaN(variable)//true ya que isNaN evalua true si no es un numero, al negarlo con !, retorna true en caso de ser un numero

¿Qué función –y con qué sintaxis concreta– podemos usar para cambiar todas las veces que una secuencia de caracteres aparece en una cadena de texto? Por ejemplo, para pasar de abracadabra a ibricidibri.
-replaceAll(comparador,remplazo)

.replaceAll("a", "i")
Tambien se puede usar expresiones regulares 
.replaceAll(/a/g,"i")

¿Qué función usamos para obtener el componente mes (month, un número) de una fecha? ¿Hay algo relevante a tener en cuenta con el valor que obtenemos?
Tener en cuenta de usar new Date y no Date() ya que el primero devuelve un objeto y el ultimo retorna un string al que no se puede acceder al mes con getMonth().

const fecha = new Date();
fecha.getMonth() + 1;

Al obtener la fecha es importante tener cuenta el indexado ya que enero seria 0, febrero 1,etc,
lo que quiere decir que si estamos en marzo, la funcion retornara 2, para obtener los meses del 1 al 12 colocar el +1.

¿Qué función podemos usar para convertir una cadena de texto a minúsculas?
-
"cadena de texto".toLowerCase()

¿Qué función podemos usar para obtener la representación ISO de una fecha?
new Date().toISOString())

-representa la fecha dada en el formato ISO 8601

¿Qué función podemos usar para convertir un array de números en otro array también de números pero donde cada número sea el cuadrado del número original? Por ejemplo, pasar del array [1, 2, 3, 4] al array [1, 4, 9, 16].
-La funcion map(), que recorre cada elemento y devuelve un array con la misma cantidad y los pasa por una funcion que devuelve los valores resultantes.
const numeros = [1, 2, 3, 4]
const cuadrados = numeros.map((numero) => numero * numero)

¿Qué función podemos usar para filtrar todos los elementos de un array, de tal manera que obtengamos otro array solo con los elementos que cumplan una determinada condición? Por ejemplo, pasar del array [null, 'Lucas', undefined, 42, {}, 13, new Date(), [], 0] al array [42, 13, 0], donde el criterio elegido en este caso ha sido quedarnos solo con los elementos que son números.
-la funcion filter(), que recibe una funcion de la cual espera valores booleanos comparando cada elemento del array, la cual retornara un nuevo array de elementos cuya evaluacion sea true.

const array = [null, 'Lucas', undefined, 42, {}, 13, new Date(), [], 0]
const arrayDeNumerosFiltrados = array.filter((elemento) => typeof(elemento) === "number")

En esta tarea no pueden programar ninguna función propia ni escribir más de una línea de código por cada pregunta. Recuerden que lo que se pide es que usen funciones propias de JavaScript que ya existen.

------------------------------------------------------------------ */
