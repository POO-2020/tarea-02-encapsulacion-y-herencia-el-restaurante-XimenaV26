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

  getNombreProducto(){
    return(`${this._nombre}`)
  }

  getPrecioProducto(){
    return(`${this._precio.getValor()}`)
  }

  getDescripcion() {
    let descripcion = `${this._nombre}  ${this._precio.getPrecio()}`;

    return descripcion;
  }
}