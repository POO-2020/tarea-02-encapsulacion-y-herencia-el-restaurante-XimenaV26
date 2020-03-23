import Restaurante from './resturante.js';
import Producto from './producto.js';
import Precio from './precio.js';
import ElementoPedido from './elemento-pedido.js';
import Pedido from './pedido.js';
import Fecha from './fecha.js';
import Tiempo from './tiempo.js';
import Cliente from './cliente.js';
import Direccion from './direccion.js';

class Main {
  constructor() {
    this.fecha = new Fecha(15, 6, 2005);

    this.tiempo1 = new Tiempo({ hora: 10, minuto: 25, periodo: 'am' });
    this.tiempo2 = new Tiempo({ hora: 10, minuto: 25, periodo: 'pm' });

    this.direccion = new Direccion(
      'Av. Universidad',
      333,
      0,
      'Las Víboras',
      28040,
      'Colima',
      'Colima'
    );

    this.precio = new Precio(2500.5);

    this.producto = new Producto('Pizza Hawaiana', this.precio);
    this.elemento = new ElementoPedido(2, this.producto);
    this.elemento2 = new ElementoPedido(1, this.producto);
    this.elemento3 = new ElementoPedido(3, this.producto);

    this.cliente = new Cliente('Juan Pérez Díaz', this.direccion, 3124563256);

    /**this.pedido = new Pedido(this.fecha, this.tiempo1, this.cliente);
    this.pedido.agregarElemento(this.elemento);
    this.pedido.agregarElemento(this.elemento2);
    this.pedido.agregarElemento(this.elemento3);**/
    let ped_1 = {
      numeroPedido: 208,
      fecha: this.fecha,
      hora: this.tiempo1,
      cliente: this.cliente
    }
    this.pedido = new Pedido(ped_1)
  }

  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDiaFecha());
  }

  probarTiempo() {
    console.log(this.tiempo1.getFormato12());
    console.log(this.tiempo2.getFormato12());
    console.log(this.tiempo1.getFormato24());
    console.log(this.tiempo2.getFormato24());
  }

  probarDireccion() {
    console.log(this.direccion.getFormatoCorto());
    console.log(this.direccion.getFormatoExtendido());
  }

  probarPrecio() {
    console.log(this.precio.getPrecio());
  }

  probarProducto() {
    console.log(this.producto.getDescripcion());
  }

  probarCliente() {
    console.log(this.cliente.getPerfil());
  }

  probarElementoPedido() {
    console.log(this.elemento.getDescripcion());
  }

  probarPedido() {
    console.log(this.pedido.getResumen());
    console.log(this.pedido.getNumeroElementos());
    console.log(this.pedido.getNumeroProductos());
    console.log(this.pedido.getCostoTotal());
    this.pedido.listarElementos();
  }
}

let app = new Main();

app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarCliente();
app.probarPedido();
