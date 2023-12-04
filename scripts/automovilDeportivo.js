import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo {
  #potenciaMotor;

  constructor(marca, modelo, color, anoFabricacion, cilindrada, potenciaMotor) {
    super(marca, modelo, color, anoFabricacion, cilindrada);
    this.#potenciaMotor = potenciaMotor;
  }

  //Metodos
  activarMotorDeportivo() {
    const mensaje = `${this.marca} ${this.modelo} ha activado el modo deportivo`;
    mostrarResultado(mensaje);
  }

  //Getters Y setters
  getpotenciaMotor() {
    return this.#potenciaMotor;
  }

  setpotenciaMotor(value) {
    this.#potenciaMotor = value;
  }
}
