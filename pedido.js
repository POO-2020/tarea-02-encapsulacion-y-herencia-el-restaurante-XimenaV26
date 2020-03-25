import Tiempo from './tiempo.js';
import Fecha from './fecha.js';
import Cliente from './cliente.js';
import ElementoPedido from './elemento-pedido.js';
import Precio from './precio.js';
//ya no poodia hacer push otravez ;c
export default class Pedido {
  /**
   *
   * @param {Fecha} fecha La fecha del día.
   * @param {Tiempo} hora Hora del día.
   * @param {Cliente} cliente Cliente al que se le está vendiendo.
   */
  constructor({
    numeroPedido, 
    fecha, 
    hora, 
    cliente}) {
    this._fecha = fecha;
    this._hora = hora;
    this._cliente = cliente;
    this._numeroPedido = numeroPedido; 
    this._elementosPedidos = new Array();
  }

  getNumeroPedido(){
    return(`${this._numeroPedido}`)
  }

  elementoIgual(pedido){
    if(pedido.getNumeroPedido() === this._numeroPedido){
      return true; 
    }

      return false;
  }

  getDescripcion(){
    return (`${this._cliente.getNombre()}, Numero de pedido: ${this.getNumeroPedido()}`)
  }

  getResumen() {
    return `${this.getNumeroPedido()}, ${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this.getNumeroElementos()} elementos con ${this.getNumeroProductos()} productos 
    total: ${new Precio(
      this.getCostoTotal()).getPrecio()} `;
  }

  getNumeroElementos() {
    return this._elementosPedidos.length;
  }

  getNumeroProductos() {
    let totalProductos = 0;

    this._elementosPedidos.forEach(elemento => {
      totalProductos = totalProductos + elemento.getCantidad();
    });

    return totalProductos;
  }

  getCostoTotal() {
    let costoTotal = 0;

    this._elementosPedidos.forEach(elemento => {
      costoTotal =
        costoTotal + elemento.getCantidad() * elemento.getPrecioElemento()
    });

    return costoTotal;
  }

  agregarElemento(elemento) {
    this._elementosPedidos.push(elemento);
  }

  listarElementos() {
    this._elementosPedidos.forEach(elemento => {
      console.log(elemento.getDescripcion());
    });
  }
}

