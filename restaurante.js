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
    this._productos = new Array();
    this._pedidos = new Array();
  }

  registrarPedido(pedido){
    if(this.buscarPedido(pedido) === -1){
    this._pedidos.push(pedido)
    return "Fue registrado";
    }

    return "Ya existe el pedido"

  }

  buscarPedido(pedido){
    let indice = -1; 

        this._pedidos.forEach((e, i) => {
            if(e.elementoIgual(pedido)){
                indice = i;
            }})
    return indice;
  }

  eliminarPedido(pedido){
    let indice = this.buscarPedido(pedido);
        if (indice === -1){
            return false;
        }

        this._pedidos.splice(indice, 1);
        return true;

  }

  actualizarPedido(pedido, nuevoPedido){
    let indice = this.buscarPedido(pedido); 

        if(indice === -1){
            return false;
        }

        this._pedidos.splice(indice,1, nuevoPedido);
        return true;
  }

  registrarProductos(producto) {
    this._productos.push(producto);
  }

  listarProductos() {
    this._productos.forEach(producto => {
      console.log(`${producto.getDescripcion()}`);
    });
  }

  registrarPedido(pedido) {
    this._pedidos.push(pedido);
  }

  listarPedido() {
    this._pedidos.forEach(pedido => {
      console.log(`${pedido.getDescripcion()}`);
    });
  }
}