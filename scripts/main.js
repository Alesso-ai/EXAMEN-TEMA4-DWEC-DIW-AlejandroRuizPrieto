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

mostrarResultado("----VEHICULO----");

vehiculo1.mostrarDatos();
vehiculo1.arrancar();
vehiculo1.acelerar(140);
vehiculo1.frenar();


//Objetos
  const vehiculoObject = {
  marca : vehiculo1.marca,
  modelo: vehiculo1.modelo,
  color: vehiculo1.color,
  anoFabricacion: vehiculo1.anoFabricacion,
  cilindrada: vehiculo1.cilindrada,
};


localStorage.setItem("vehiculo1", JSON.stringify(vehiculoObject));
console.log(localStorage.getItem("vehiculo1"));


const deportivo1 = new AutomovilDeportivo(
  "Ferrari",
  "Spider",
  "Amarillo",
  2020,
  "4000",
  "500"
);

mostrarResultado("----DEPORTIVO----");

deportivo1.mostrarDatos();
deportivo1.arrancar();
deportivo1.acelerar(200);
deportivo1.frenar();
deportivo1.activarMotorDeportivo();

const deportivoObject = {
  marca: deportivo1.marca,
  modelo: deportivo1.modelo,
  color: deportivo1.color,
  anoFabricacion: deportivo1.anoFabricacion,
  cilindrada: deportivo1.cilindrada,
  potenciaMotor: deportivo1.potenciaMotor,
};



//Alamcenar en localStorage

localStorage.setItem("deportivo1", JSON.stringify(deportivoObject));
console.log(localStorage.getItem("deportivo1"));




//localStorage.removeItem("marca");
//localStorage.removeItem("modelo");
//localStorage.clear();



