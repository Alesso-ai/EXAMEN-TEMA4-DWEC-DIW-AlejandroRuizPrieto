import { mostrarResultado } from "./main.js";

//Clase de Vehiculo
export class Vehiculo {
  #marca;
  #modelo;
  #color;
  #anoFabricacion;
  #cilindrada;

  constructor(marca, modelo, color, anoFabricacion, cilindrada) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anoFabricacion = anoFabricacion;
    this.cilindrada = cilindrada;
  }

  //Metodos de la clase

  acelerar(velocidad) {
    const mensaje = `El vehículo acelera a ${velocidad} km/h`;
    mostrarResultado(mensaje);
  }
  arrancar() {
    const mensaje = `El vehículo ha arrancado`;
    mostrarResultado(mensaje);
  }

  frenar() {
    const mensaje = `El vehículo ha frenado`;
    mostrarResultado(mensaje);
  }

  mostrarResultado() {
    resultados.innerHTML += `<p>${this.mostrarDatos()}</p>`;
  }

  mostrarDatos() {
    const dato = `<p>La marca es:  ${this.marca} <br> El modelo es: ${this.modelo}<br>  El color es:  ${this.color} <br> El año de fabricacion es: ${this.anoFabricacion}<br> La cilindrada es: ${this.cilindrada} <p/>`;

    mostrarResultado(`<p>${dato}</p>`);
  }

  //Getters y Setters
  getMarca() {
    return this.marca;
  }

  getModelo() {
    return this.modelo;
  }

  getColor() {
    return this.color;
  }

  getanoFabricacion() {
    return this.anoFabricacion;
  }
  getcilindrada() {
    return this.cilindrada;
  }

  setMarca(value) {
    this.marca = value;
  }

  setModelo(value) {
    this.modelo = value;
  }

  setColor(value) {
    this.color = value;
  }

  setAnoFabricacion(value) {
    this.AnoFabricacion = anoFabricacion;
  }

  setcilindrada(value) {
    this.cilindrada = cilindrada;
  }
}
