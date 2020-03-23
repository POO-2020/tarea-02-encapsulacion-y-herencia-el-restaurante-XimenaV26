import Precio from './precio.js';

export default class Producto {
  /**
   *
   * @param {string} nombre Nombre del producto
   * @param {Precio} precio PRECIO del producto
   */
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  getDescripcion() {
    let descripcion = `${this._nombre}  ${this._precio.getPrecio()}`;

    return descripcion;
  }
}