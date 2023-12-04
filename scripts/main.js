import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadosContainer = document.createElement("div");
document.body.appendChild(resultadosContainer);
resultadosContainer.innerHTML = "";

export function mostrarResultado(dato) {
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
