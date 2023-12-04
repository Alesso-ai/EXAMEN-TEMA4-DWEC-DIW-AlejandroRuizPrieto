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
    return `El vehículo acelera a ${velocidad} km/h`;
  }
  arrancar() {
    return `El vehículo ha arrancado`;
  }

  frenar() {
    return `El vehículo ha frenado`;
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

  getAnoFabricacion() {
    return this.anoFabricacion;
  }
  getCilindrada() {
    return this.cilindra;
  }

  setMarca(marca) {
    this.marca = marca;
  }

  setModelo(modelo) {
    this.modelo = modelo;
  }

  setColor(color) {
    this.color = color;
  }

  setAnoFabricacion(AnoFabricacion) {
    this.AnoFabricacion = AnoFabricacion;
  }

  setCilindrada(cilindra) {
    this.cilindra = cilindra;
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




