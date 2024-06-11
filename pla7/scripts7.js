/*
  .__                              __                 __   
  |__| _____ ______   ____________/  |______    _____/  |_ 
  |  |/     \\____ \ /  _ \_  __ \   __\__  \  /    \   __\
  |  |  Y Y  \  |_> >  <_> )  | \/|  |  / __ \|   |  \  |  
  |__|__|_|  /   __/ \____/|__|   |__| (____  /___|  /__|  
          \/|__|                           \/     \/      

   Use Live Server and Go Live to run your web application, 
   DO NOT just open index7.html file using your browser.
*/

/* DOMContentLoaded ----------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  // CREATE FUNCTIONS WITH THESE NAMES IN YOUR CODE AND THEN UNCOMMENT THESE LINES TO RUN THEM
  // ajaxWeather(); // Task 3
  // fetchPokemon(); // Task 4 - fair use policy!!!
  //fetchDataFromFile("books7.json"); // Task 5
  //fetchDataFromFile("not-found.json"); // Task 5
  //fetchCors(); // Task 6
  //Resolucion del problema CORS :
  //fetchCorsConProxy()
});

/* Task 1 --------------------------------------------------------------------------------------- */

/* This is a line with exactly 100 characters --------------------------------------------------- */

/**
 * The question about CORS:. Por qué el mecanismo CORS no nos da nunca problemas cuando utilizamos
 * la aplicación Postman o la extensión Thunder Client de Visual Studio Code pero, en cambio, sí
 * nos da cuando accedemos exactamente al mismo endpoint desde el código JavaScript de nuestra
 * aplicación web?
 *
 * Your answer here
 * Porque si accedes desde un navegador web estaras haciendo una solicitud entre dominios y el
 * mecanismo bloquea esas solicitudes a no ser que se configure para poder permitirlo habilitando
 * CORS desde todos los origenes o desde el origen que necesitamos aunque existen mas formas.
 *
 * Las solicitudes desde postman y Thunder Client no se realizan desde un navegador web lo cual  no
 * les afecta las restricciones CORS.
 */

/**
 * The question about promises:¿Qué alternativas tenemos para trabajar en nuestro código con esta
 * promesa de tal forma que logremos mostrar los resultados de los partidos al usuario?
 *
 * Your answer here...
 * Podemos utilizar el metodo then, que se encadena a la promesa y devolvera el resultado cuando este
 * lo resuelva al completarse la promesa, se podria manejar los resultados, de igual forma
 * async/await que le podriamos pasar un await a la solicitud fetch para que espere la resolucion
 * de la promesa sin interferir con los demas procesos del codigo, y de esta forma manejarla y
 * asi recibir la informacion solicitada.
 */

/**
 * The question about HTTP response status codes:
 * Your answer here...
 * 200: Solicitud exitosa
 * 201: Se ha creado un nuevo recurso correctamente
 * 204: solicitud procesada correctamente pero no devuelve contenido, pudo ser por una solicitud DELETE
 * 301: URL solicitada ha sido movida permanentemente a otra ubicacion
 * 401: No se puedre procesar por credenciales de autenticacion invalidas
 * 404: No encuentra el recurso solicitado
 * 503: Servidor no disponible en este momento, intentarlo mas tarde
 */

/* Task 2 --------------------------------------------------------------------------------------- */

const googleMaps = {
  markers: [
    {
      name: "Rixos The Palm Dubai",
      location: {
        lat: 25.1212,
        long: 55.1535,
      },
    },
    {
      name: "Shangri-La Hotel",
      location: {
        lat: 25.2084,
        long: 55.2719,
      },
    },
    {
      name: "Grand Hyatt",
      location: {
        lat: 25.2285,
        long: 55.3273,
      },
    },
  ],
};

const database = [
  {
    _id: {
      $oid: "5968dd23fc13ae04d94561",
    },
    product_name: "sildenafil citrate",
    supplier: "Wisozk Inc",
    quantity: 261,
    unit_cost: "$10.47",
  },
  {
    _id: {
      $oid: "5968dd23fc13ae04d92342",
    },
    product_name: "Mountain Juniperus ashei",
    supplier: "Keebler-Hilpert",
    quantity: 292,
    unit_cost: "$8.74",
  },
  {
    _id: {
      $oid: "5968dd23fc13ae04d92403",
    },
    product_name: "Dextromathorphan HBr",
    supplier: "Schmitt-Weissnat",
    quantity: 211,
    unit_cost: "$20.53",
  },
];

const youtube = {
  kind: "youtube#searchListResponse",
  etag: '"m2yskBQFythfE4irbTIeOgYYfBU/PaiEDiVxOyCWelLPuuwa9LKz3Gk"',
  nextPageToken: "CAUQAA",
  regionCode: "KE",
  pageInfo: { totalResults: 4249, resultsPerPage: 5 },
  items: [
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/QpOIr3QKlV5EUlzfFcVvDiJT0hw"',
      id: { kind: "youtube#channel", channelId: "UCJowOS1R0FnhipXVqEnYU1A" },
    },
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/AWutzVOt_5p1iLVifyBdfoSTf9E"',
      id: { kind: "youtube#video", videoId: "Eqa2nAAhHN0" },
    },
    {
      kind: "youtube#searchResult",
      etag: '"m2yskBQFythfE4irbTIeOgYYfBU/2dIR9BTfr7QphpBuY3hPU-h5u-4"',
      id: { kind: "youtube#video", videoId: "IirngItQuVs" },
    },
  ],
};

/* Task 2 solution ------------------------------------------------------------------------------ */
// 1) La latitud del sitio llamado Grand Hyatt.
console.log(
  googleMaps.markers.find((sitio) => sitio.name === "Grand Hyatt").location.lat
);

/*googleMaps.markers.forEach((sitio) => {
  sitio.name === "Grand Hyatt" && console.log(sitio.location.lat);
});*/

// 2) El nombre del sitio que tiene el valor más alto de longitud.
console.log(
  googleMaps.markers.reduce((a, b) => {
    return Math.max(a, b.location.long);
  }, 0)
);
// 3) El nombre del proveedor del producto con un identificador que incluye la cadena 9234 .
console.log(
  database.find((producto) => producto._id.$oid.includes(9234)).supplier
);
// 4) El identificador de todos los productos que tengan más de 250 unidades en stock.
//database.filter(producto => producto.quantity > 250).forEach(producto => console.log(producto._id.$oid))
console.log(
  database
    .filter((producto) => producto.quantity > 250)
    .map((producto) => producto._id.$oid)
);
//5) El texto Hay un total de 4249 resultados y se muestran 5 por página (recuperando ambos valores desde la constante correspondiente y empleando template literales).

const { totalResults, resultsPerPage } = youtube.pageInfo;
console.log(
  `Hay un total de ${totalResults} resultados y se muestran ${resultsPerPage} por pagina`
);
// 6)El valor del identificador videoId del primer elemento de tipo video (es decir, no channel ).
console.log(youtube.items.find((item) => item.id.videoId).id.videoId);

/* Task 3 --------------------------------------------------------------------------------------- */

// Use these constants to build your final endpoint.
// You will need four parameters (timezone is already provided, you need to add the other three).

const apiUrl = "https://api.open-meteo.com/v1/forecast?timezone=Europe/Madrid";
const latitude = 41.60594;
const longitude = 1.039171;

/* Task 3 solution ------------------------------------------------------------------------------ */

function ajaxWeather() {
  const url = `${apiUrl}&latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_min`;
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", url);

  xhttp.onload = function () {
    const dataJson = JSON.parse(this.responseText);
    console.log(dataJson.elevation);

    console.log(dataJson.daily.temperature_2m_min.slice(0, 4));
  };
  xhttp.send();
}

/* Task 4 --------------------------------------------------------------------------------------- */
const pokeapiEndpoint = "https://pokeapi.co/api/v2/pokemon?offset=500&limit=50";

/* Task 4 solution ------------------------------------------------------------------------------ */

function fetchPokemon() {
  function mostrarPokemon(data) {
    //Funcion creada para practicar y mejorar la lectura de codigo y que sea lo mas clara posible.
    //si es innecesario por favor un feedback que siempre suma.
    const pokemonesConP = data.results
      .filter((pokemon) => pokemon.name.includes("p"))
      .map((pokemon) => pokemon.name);
    console.log(pokemonesConP);
  }

  fetch(pokeapiEndpoint)
    .then((res) => res.json())
    .then((data) => mostrarPokemon(data));
}

/* Task 5 --------------------------------------------------------------------------------------- */
// There is no initial provided code.

/* Task 5 solution ------------------------------------------------------------------------------ */

async function fetchDataFromFile(api) {
  try {
    const respuesta = await fetch(api);

    if (!respuesta.ok) {
      throw new Error(`HTTP error! status: ${respuesta.status}`);
    }

    const data = await respuesta.json();

    const totalPrecioLibrosAlDoble = Number(
      data
        .reduce((a, b) => {
          return (a += b.price * 2);
        }, 0)
        .toFixed(2)
    );

    console.log(totalPrecioLibrosAlDoble);
  } catch (error) {
    console.error("Error fetching the data:", error);
  }
}
/* Task 6 --------------------------------------------------------------------------------------- */
async function fetchCors() {
  const respuesta = await fetch("https://www.freeforexapi.com/api/live");
  const data = await respuesta.json();
  console.log(data);
}

async function fetchCorsConProxy() {
  //una de las formas de solucionar problemas de cors es utilizando un servicio de proxy intermedio
  //que en este caso es cors-anywhere
  const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://www.freeforexapi.com/api/live";

  const respuesta = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, {
    method: "GET",
    headers: {
      "X-Requested-With": "Demo",
    },
  });

  const data = await respuesta.json();
  console.log(data);
}
// enlace para el permiso demo cors-anywhere: https://cors-anywhere.herokuapp.com/corsdemo
// There is no initial provided code.

/* Task 6 solution ------------------------------------------------------------------------------ */
