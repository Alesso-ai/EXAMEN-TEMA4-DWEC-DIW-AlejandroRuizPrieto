import { Vehiculo } from "./vehiculo.js";
import { mostrarResultado } from "./main.js";

export class AutomovilDeportivo extends Vehiculo {
  #potenciaMotor;

  constructor(marca, modelo, color, añoFabricacion, cilindrada,potenciaMotor) {
    super(marca, modelo, color, añoFabricacion, cilindrada, potenciaMotor);
    this.#potenciaMotor = 0;
  }

  //Metodos
  activarMotorDeportivo() {
    const mensaje = `El modo deportivo se ha activado`;
    this.#potenciaMotor = 0;
    mostrarResultado(mensaje);
  }

  //Getter y Setter
  getactivarMotorDeportivo() {
    return this.#potenciaMotor;
  }
  setactivarMotorDeportivo(activarMotorDeportivo) {
    return this.#potenciaMotor;
  }

}
