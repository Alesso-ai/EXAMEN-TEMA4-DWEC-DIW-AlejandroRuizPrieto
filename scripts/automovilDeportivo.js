import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends vehiculo {
  #potenciaMotor;

  constructor(marca, modelo, color, añoFabricacion, cilindrada) {
    super(marca, modelo, color, añoFabricacion, cilindrada);
    this.#potenciaMotor = 0;
  }

  //Metodos
  activarMotorDeportivo() {
    this.#potenciaMotor = 0;
    return `El motor deportivo se ha activado`;
  }

  //Getter y Setter
  getactivarMotorDeportivo() {
    return this.#potenciaMotor;
  }
  setactivarMotorDeportivo(activarMotorDeportivo) {
    return this.#potenciaMotor;
  }
}
