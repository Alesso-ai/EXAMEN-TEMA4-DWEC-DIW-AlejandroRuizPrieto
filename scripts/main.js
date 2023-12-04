//Alejandro Ruiz Prieto
//GitHub:

import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadosContainer = document.createElement("div");
document.body.appendChild(resultadosContainer);

resultadosContainer.innerHTML = "";

export function mostrarResultado(dato) {
  //document.body.appendChild(resultadosContainer);
  resultadosContainer.innerHTML += `<p>${dato}</p>`;
}

const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, "2400");

const deportivo1 = new AutomovilDeportivo(
  "Ferrari",
  "Spider",
  "amarillo",
  2020,
  "4000",
  "500"
);

vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();

deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(200);
deportivo1.frenar();
deportivo1.activarMotorDeportivo(1);

  const object = {
  marca: vehiculo1.marca,
  modelo: vehiculo1.modelo,
  color: vehiculo1.color,
  añoFabricacion: vehiculo1.añoFabricacion,
  cilindrada: vehiculo1.cilindrada,
};

const object2 = {
  marca: deportivo1.marca,
  modelo: deportivo1.modelo,
  color: deportivo1.color,
  añoFabricacion: deportivo1.añoFabricacion,
  cilindrada: deportivo1.cilindrada,
  potenciaMotor: deportivo1.potenciaMotor,
};



localStorage.setItem("vehiculo1", JSON.stringify(object));
console.log(localStorage.getItem("vehiculo1"));
localStorage.setItem("deportivo1", JSON.stringify(object2));
console.log(localStorage.getItem("deportivo1"));
