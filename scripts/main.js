import { Vehiculo } from "./vehiculo.js";
import { AutomovilDeportivo } from "./automovilDeportivo.js";

const resultadosContainer = document.createElement("div");
document.body.appendChild(resultadosContainer);
resultadosContainer.innerHTML = "";




const vehiculo1 = new Vehiculo("BMW", "CLK", "Rojo", 1992, '2400')

const deportivo1 = new AutomovilDeportivo('Ferrari','Spider', 'amarillo',2020,'4000','500');
