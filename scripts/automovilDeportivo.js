import { Vehiculo } from "./vehiculo.js";

export class AutomovilDeportivo extends Vehiculo {
  #potenciaMotor;

  constructor(marca, modelo, color, añoFabricacion, cilindrada,potenciaMotor) {
    super(marca, modelo, color, añoFabricacion, cilindrada, potenciaMotor);
    this.#potenciaMotor = 0;
  }

  //Metodos
  activarMotorDeportivo() {
    this.#potenciaMotor = 0;
    return `El modo deportivo se ha activado`;
  }

  //Getter y Setter
  getactivarMotorDeportivo() {
    return this.#potenciaMotor;
  }
  setactivarMotorDeportivo(activarMotorDeportivo) {
    return this.#potenciaMotor;
  }




}
