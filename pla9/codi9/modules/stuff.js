//Jorman Urbina

export default class Laptop {
  constructor(marca, software, almacenamiento) {
    this.marca = marca;

    this.software = software;

    this.almacenamiento = almacenamiento;
  }
  actualizarMemoria(almacenamientoNuevo) {
    this.almacenamiento = almacenamientoNuevo;
  }
}

export function venezuelaAlMundial(si, sii) {
  console.log(`venezuela ira al mundia? ${si}, porque? porque ${sii}`);
}
