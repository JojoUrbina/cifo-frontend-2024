/* 
//---------------------------------

/*let monto = 0;

console.log(tbody);*/
//------------------------------------------------
/*
let monto = 100;
const eur = 1
const eurUsd = 1.084277;
const eurArs = 937.627209;
const eurGbp = 0.851732

const usd = eurUsd
const ars = eurArs
const gbp = eurGbp


const monedaElegida = eur

let monedaElegidaEur = (eur / monedaElegida) * monto
let monedaElegidaArs = (eurArs / monedaElegida) * monto; //moneda elegida en pesos argentinos
let monedaElegidaGbp = (eurGbp / monedaElegida) * monto;
let monedaElegidaUsd = (eurUsd / monedaElegida) * monto;

console.log(`${monto} $monedaElegida equivalen a ${monedaElegidaEur} Euros`);
console.log(`${monto} $monedaElegida equivalen a ${monedaElegidaArs} pesos argentinos`);
console.log(`${monto} $monedaElegida equivalen a ${monedaElegidaGbp} Libras esterlinas`);
console.log(`${monto} $monedaElegida equivalen a ${monedaElegidaUsd} dolares`);



const USDARS = 864.75;
const USDGBP = 0.785489;
const ARSUSD = 0.001156;
*/
/*const rates = {
  EUR: 1,
  AED: 3.982002,
  AFN: 77.87299,
  ALL: 100.31444,
  AMD: 420.284531,
  ANG: 1.940853,
  AOA: 936.516446,
  ARS: 937.627209,
  AUD: 1.637133,
  AWG: 1.940853,
  AZN: 1.843765,
  BAM: 1.95583,
  BBD: 2.168551,
  BDT: 127.264785,
  BGN: 1.95583,
  BHD: 0.407688,
  BIF: 3092.683648,
  BMD: 1.084275,
  BND: 1.464054,
  BOB: 7.504614,
  BRL: 5.576187,
  BSD: 1.084275,
  BTN: 90.118271,
  BWP: 14.813772,
  BYN: 3.51014,
  BZD: 2.168551,
  CAD: 1.482883,
  CDF: 3021.290909,
  CHF: 0.991908,
  CLP: 984.016247,
  CNY: 7.859951,
  COP: 4153.721867,
  CRC: 555.23977,
  CUP: 26.022611,
  CVE: 110.265,
  CZK: 24.687133,
  DJF: 192.69852,
  DKK: 7.461136,
  DOP: 63.666458,
  DZD: 145.912175,
  EGP: 51.073964,
  ERN: 16.264132,
  ETB: 62.361303,
  FJD: 2.461233,
  FKP: 0.851731,
  FOK: 7.461136,
  GBP: 0.851732,
  GEL: 2.958633,
  GGP: 0.851731,
  GHS: 15.987301,
  GIP: 0.851731,
  GMD: 69.402488,
  GNF: 9302.553323,
  GTQ: 8.417676,
  GYD: 226.699864,
  HKD: 8.472156,
  HNL: 26.776717,
  HRK: 7.5345,
  HTG: 143.995667,
  HUF: 385.13042,
  IDR: 17388.138916,
  ILS: 3.973953,
  IMP: 0.851731,
  INR: 90.118324,
  IQD: 1420.264957,
  IRR: 45871.700666,
  ISK: 149.884527,
  JEP: 0.851731,
  JMD: 169.287105,
  JOD: 0.768751,
  JPY: 170.162236,
  KES: 143.558671,
  KGS: 95.484252,
  KHR: 4431.226667,
  KID: 1.637132,
  KMF: 491.96775,
  KRW: 1481.355241,
  KWD: 0.332711,
  KYD: 0.903563,
  KZT: 480.917421,
  LAK: 23623.081017,
  LBP: 97042.654183,
  LKR: 324.894424,
  LRD: 209.644347,
  LSL: 19.964234,
  LYD: 5.2405,
  MAD: 10.794595,
  MDL: 19.183641,
  MGA: 4777.266098,
  MKD: 61.504,
  MMK: 3178.48296,
  MNT: 3703.285993,
  MOP: 8.726315,
  MRU: 43.239917,
  MUR: 50.153713,
  MVR: 16.736993,
  MWK: 1893.859065,
  MXN: 18.115297,
  MYR: 5.109154,
  MZN: 69.210999,
  NAD: 19.964234,
  NGN: 1591.846908,
  NIO: 39.886792,
  NOK: 11.480947,
  NPR: 144.189234,
  NZD: 1.772699,
  OMR: 0.416901,
  PAB: 1.084275,
  PEN: 4.053169,
  PGK: 4.164201,
  PHP: 63.08529,
  PKR: 301.73922,
  PLN: 4.259357,
  PYG: 8109.266467,
  QAR: 3.946763,
  RON: 4.975127,
  RSD: 117.111539,
  RUB: 97.257879,
  RWF: 1452.338485,
  SAR: 4.066033,
  SBD: 9.007018,
  SCR: 15.666099,
  SDG: 484.463557,
  SEK: 11.579873,
  SGD: 1.464054,
  SHP: 0.851731,
  SLE: 24.571079,
  SLL: 24571.046895,
  SOS: 618.886406,
  SRD: 35.123864,
  SSP: 1953.074484,
  STN: 24.5,
  SYP: 13917.211158,
  SZL: 19.964234,
  THB: 39.777366,
  TJS: 11.826198,
  TMT: 3.792723,
  TND: 3.388353,
  TOP: 2.521772,
  TRY: 34.96122,
  TTD: 7.776275,
  TVD: 1.637132,
  TWD: 34.945428,
  TZS: 2822.393012,
  UAH: 43.481339,
  UGX: 4136.634947,
  USD: 1.084277,
  UYU: 41.496409,
  UZS: 13696.946302,
  VES: 39.620878,
  VND: 27651.489277,
  VUV: 129.37652,
  WST: 2.936804,
  XAF: 655.957,
  XCD: 2.927544,
  XDR: 0.8195,
  XOF: 655.957,
  XPF: 119.332,
  YER: 271.208605,
  ZAR: 19.964278,
  ZMW: 28.770689,
  ZWL: 14.6513,
};
*/
/*async function unaFuncion(params) {
const response = await fetch("https://restcountries.com/v3.1/all");
const data = await response.json();
console.log("Datos recibidos:", data);
}
unaFuncion()

const dataOrdenada = [...data].sort((a, b) => {
  if (a.name.common < b.name.common) {
    return -1;
  }
  if (a.name.common > b.name.common) {
    return 1;
  }
  return 0;
});
*/
/*
 <noscript> Tu navegador no soporta javascript </noscript>
    <template>
      <tr>
        <td class="py-2 MDL">19.16$</td>
        <td class="py-2">MDL</td>
        <td class="py-2">Moldovan leu</td>
        <td class="py-2">Moldavia</td>
        <td class="py-2">Romanian</td>
        <td class="py-2">
          <img
            src="https://flagcdn.com/w320/md.png"
            alt="The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band."
            class="bandera img-thumbnail"
          />
        </td>
        <td class="py-2">ver mas</td>
      </tr>
    </template>
*/
//const template = document.querySelector("template").content;

/*async function cargarDatos() {
  const respuesta = await fetch("paises.json");
  const data = await respuesta.json();
  for (const { currencies, translations, languages, flags } of data) {
    if (currencies) {
      const divisa = Object.keys(currencies)[0];
      const moneda = currencies[Object.keys(currencies)[0]].name;
      const pais = translations.spa.common;
      const lenguaje = Object.values(languages)[0];
      const srcBandera = flags.png;
      const altBandera = flags.alt;

      const filaClonada = template.cloneNode(true);
      const celdasClonadas = filaClonada.querySelectorAll("td");

      celdasClonadas[0].textContent = 1;
      celdasClonadas[0].classList.add(divisa)
      celdasClonadas[1].textContent = divisa;
      celdasClonadas[2].textContent = moneda;
      celdasClonadas[3].textContent = pais;
      celdasClonadas[4].textContent = lenguaje
      celdasClonadas[5].querySelector("img").src = srcBandera
      celdasClonadas[5].querySelector("img").alt = altBandera
      celdasClonadas[6].textContent = "ver mas";
      fragment.appendChild(filaClonada)
    }
  }
  console.log(template);
}
cargarDatos();*/
/*function agregarOpcionesASelect(divisa,valor) {
    const $option = document.createElement("option");
    $option.value = divisa;
    $option.textContent = pais;
    $seleccionarPais.appendChild($option);
}
agregarOpcionesASelect();*/
/*
const objeto = [{ precio: 20 }, { otroPrecio: 200 }];
objeto.actualizarPrecio = function (monto) {
  this.precio = monto;
};
objeto.actualizarPrecio(30);
console.log(objeto.precio);

const moldova = {
  name: {
    common: "Moldova",
    official: "Republic of Moldova",
    nativeName: {
      ron: {
        official: "Republica Moldova",
        common: "Moldova",
      },
    },
  },
  tld: [".md"],
  cca2: "MD",
  ccn3: "498",
  cca3: "MDA",
  cioc: "MDA",
  independent: true,
  status: "officially-assigned",
  unMember: true,
  currencies: {
    MDL: {
      name: "Moldovan leu",
      symbol: "L",
    },
  },
  idd: {
    root: "+3",
    suffixes: ["73"],
  },
  capital: ["Chișinău"],
  altSpellings: [
    "MD",
    "Moldova, Republic of",
    "Republic of Moldova",
    "Republica Moldova",
  ],
  region: "Europe",
  subregion: "Eastern Europe",
  languages: {
    ron: "Romanian",
  },
  translations: {
    ara: {
      official: "جمهورية مولدوڤا",
      common: "مولدوڤا",
    },
    bre: {
      official: "Republik Moldova",
      common: "Moldova",
    },
    ces: {
      official: "Moldavská republika",
      common: "Moldavsko",
    },
    cym: {
      official: "Republic of Moldova",
      common: "Moldova",
    },
    deu: {
      official: "Republik Moldau",
      common: "Moldawien",
    },
    est: {
      official: "Moldova Vabariik",
      common: "Moldova",
    },
    fin: {
      official: "Moldovan tasavalta",
      common: "Moldova",
    },
    fra: {
      official: "République de Moldavie",
      common: "Moldavie",
    },
    hrv: {
      official: "Moldavija",
      common: "Moldova",
    },
    hun: {
      official: "Moldovai Köztársaság",
      common: "Moldova",
    },
    ita: {
      official: "Repubblica di Moldova",
      common: "Moldavia",
    },
    jpn: {
      official: "モルドバ共和国",
      common: "モルドバ共和国",
    },
    kor: {
      official: "몰도바 공화국",
      common: "몰도바",
    },
    nld: {
      official: "Republiek Moldavië",
      common: "Moldavië",
    },
    per: {
      official: "جمهوری مولداوی",
      common: "مولداوی",
    },
    pol: {
      official: "Republika Mołdawii",
      common: "Mołdawia",
    },
    por: {
      official: "República da Moldávia",
      common: "Moldávia",
    },
    rus: {
      official: "Молдова",
      common: "Молдавия",
    },
    slk: {
      official: "Moldavská republika",
      common: "Moldavsko",
    },
    spa: {
      official: "República de Moldova",
      common: "Moldavia",
    },
    srp: {
      official: "Република Молдавија",
      common: "Молдавија",
    },
    swe: {
      official: "Republiken Moldavien",
      common: "Moldavien",
    },
    tur: {
      official: "Moldova Cumhuriyeti",
      common: "Moldova",
    },
    urd: {
      official: "جمہوریہ مالدووا",
      common: "مالدووا",
    },
    zho: {
      official: "摩尔多瓦共和国",
      common: "摩尔多瓦",
    },
  },
  latlng: [47.0, 29.0],
  landlocked: true,
  borders: ["ROU", "UKR"],
  area: 33846.0,
  demonyms: {
    eng: {
      f: "Moldovan",
      m: "Moldovan",
    },
    fra: {
      f: "Moldave",
      m: "Moldave",
    },
  },
  flag: "🇲🇩",
  maps: {
    googleMaps: "https://goo.gl/maps/JjmyUuULujnDeFPf7",
    openStreetMaps: "https://www.openstreetmap.org/relation/58974",
  },
  population: 2617820,
  gini: {
    2018: 25.7,
  },
  fifa: "MDA",
  car: {
    signs: ["MD"],
    side: "right",
  },
  timezones: ["UTC+02:00"],
  continents: ["Europe"],
  flags: {
    png: "https://flagcdn.com/w320/md.png",
    svg: "https://flagcdn.com/md.svg",
    alt: "The flag of Moldova is composed of three equal vertical bands of blue, yellow and red, with the national coat of arms centered in the yellow band.",
  },
  coatOfArms: {
    png: "https://mainfacts.com/media/images/coats_of_arms/md.png",
    svg: "https://mainfacts.com/media/images/coats_of_arms/md.svg",
  },
  startOfWeek: "monday",
  capitalInfo: {
    latlng: [47.01, 28.9],
  },
  postalCode: {
    format: "MD-####",
    regex: "^(?:MD)*(\\d{4})$",
  },
};

moldova.tarifa = 20;
moldova.actualizarTarifa = function (tarifa) {
  this.tarifa = tarifa;
};

 for (const divisa in divisas) {
  //console.log(divisas[divisa]);
  //console.log(divisa);
  //console.log(moldova);

  if (divisa === Object.keys(moldova.currencies)[0]) {
    //seria para el inicio, actualiza todas las tarifas al minimo en euros
    //las demas operaciones que sean (eur / monedaElegida) * monto
    moldova.actualizarTarifa(divisas[divisa]);
  }
} */
//console.log(Object.keys(moldova.currencies)[0]);
//console.log(moldova);

/* async function cargarPaisesConMoneda() {
  const response = await fetch("paises.json");
  const data = await response.json();
  procesarData(data,rates);
}
cargarPaisesConMoneda();

function procesarData(paises,tarifas) {
  const paisesConCurrencies = paises.filter((pais) => pais.currencies);
  const paisesConTarifa = paisesConCurrencies.filter(
    (pais) =>
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]]
  );

  for (const pais of paisesConTarifa) {
    pais.tarifa =
      tarifas[Object.keys(pais.currencies)[0]] ||
      tarifas[Object.keys(pais.currencies)[1]];
  }
  return paisesConTarifa;
}
 */


