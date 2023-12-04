import { mostrarResultado } from "./main.js";

//Clase de Vehiculo
export class Vehiculo{
  #marca;
  #modelo;
  #color;
  #anoFabricacion;
  #cilindra;

  constructor(marca, modelo, color, anoFabricacion, cilindra) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anoFabricacion = anoFabricacion;
    this.cilindra = cilindra;
  }

  //Metodos de la clase

  acelerar(velocidad) {
    const mensaje =`El vehículo acelera a ${velocidad} km/h`;
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
    return this.cilindra;
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

  setCilindrada(value) {
    this.cilindra = cilindrada;
  }


  mostrarDatos() {
    const dato = `<p>La marca es:  ${this.marca} <br> El modelo es: ${
      this.modelo
    }<br>  El color es:  ${this.color} <br> El año de fabricacion es: ${
      this.AnoFabricacion
    }<br> La cilindrada es: ${this.#cilindra} <p/>`;
    
     mostrarResultado(`<p>${dato}</p>`)
  }
  

}




