import Pedido from './pedido.js';
import Producto from './producto.js';
import Direccion from './direccion.js';

export default class Restaurante {
  /**
   * @param {string} nombre Nombre del Restaurante
   * @param {number} telefono Telefono
   * @param {Direccion} dirección Direccion
   */
  constructor({
    nombre, 
    telefono, 
    dirección}) {
    this._nombre = nombre;
    this._telefono = telefono;
    this._dirección = dirección;
    this.productos = new Array();
    this.pedidos = new Array();
  }

  registrarProductos(producto) {
    this.productos.push(producto);
  }

  listarProductos() {
    this.productos.forEach(producto => {
      console.log(`${producto.getDescripcion()}`);
    });
  }

  registrarPedido(pedido) {
    this.pedidos.push(pedido);
  }

  setPedido(pedido){
    if(pedido != this.pedidos){
      this.pedidos = pedido; 
      return true; 
    }else {
        return false;
    }
  }

  listarPedido() {
    this.pedidos.forEach(pedido => {
      console.log(`${pedido.getDescripcion()}`);
    });
  }
}