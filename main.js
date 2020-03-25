import Restaurante from './restaurante.js';
import Producto from './producto.js';
import Precio from './precio.js';
import ElementoPedido from './elemento-pedido.js';
import Pedido from './pedido.js';
import Fecha from './fecha.js';
import Tiempo from './tiempo.js';
import Cliente from './cliente.js';
import Direccion from './direccion.js';
import ClienteF from './cliente-frecuente.js';

class Main {
  constructor() {
    this.fecha = new Fecha(15, 6, 2005);
    this.fecha2 = new Fecha(24, 3, 2018);

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

    this.cliente = new Cliente('Ximena Velasco Godinez', this.direccion, 3124563256);
    this.cliente2 = new Cliente("Luna Exposito Medrano", this.direccion, 3126543789); 
    this.cliente3 = new Cliente("Marina Flores Casas", this.direccion, 31256473843);

    let ped_1 = {
      numeroPedido: 208,
      fecha: this.fecha,
      hora: this.tiempo1,
      cliente: this.cliente
    }

    let ped_2 = {
      numeroPedido: 309,
      fecha: this.fecha,
      hora: this.tiempo2,
      cliente: this.cliente2
    }

    let ped_3 = {
      numeroPedido: 342,
      fecha: this.fecha,
      hora: this.tiempo2,
      cliente: this.cliente3
    }
    
    this.pedido = new Pedido(ped_1)
    this.pedido2 = new Pedido(ped_2)
    this.pedido3 = new Pedido(ped_3)
    this.pedido.agregarElemento(this.elemento);
    this.pedido2.agregarElemento(this.elemento2);
    this.pedido3.agregarElemento(this.elemento3);
    this.pedido3.agregarElemento(this.elemento);

    let cf_1 ={
      nombre: "Clear Castillo Rivera",
      direccion: this.direccion,
      telefono: 3124539865,
      numeroCliente: 22,
      fechaRegistro: this.fecha2
    }
    this.clienteFre = new ClienteF(cf_1)

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
    console.log(this.pedido2.getNumeroElementos());
    console.log(this.pedido3.getNumeroProductos());
    console.log(this.pedido.getCostoTotal());
    this.pedido2.listarElementos();
  }
  probarRestaurante(){
    let r_1 = {
      nombre: "La Ben DeLa Crem",
      telefono: 3126754,
      direccion: "Av. Enrique Segoviano #8"
    }
    this.restaurant = new Restaurante(r_1)

    console.log(this.restaurant.registrarPedido(this.pedido));
    console.log(this.restaurant.registrarPedido(this.pedido2));
    console.log(this.restaurant.registrarPedido(this.pedido3));
    this.restaurant.listarPedido();
    console.log(this.restaurant.eliminarPedido(this.pedido2));
    this.restaurant.listarPedido();
    this.restaurant.actualizarPedido(this.pedido, this.pedido3);
    this.restaurant.listarPedido();
  }
  probarClienteF(){
    console.log(this.clienteFre.getPerfil())
  }
}

let app = new Main();
app.probarClienteF();
app.probarRestaurante();
app.probarFecha();
app.probarTiempo();
app.probarDireccion();
app.probarPrecio();
app.probarProducto();
app.probarElementoPedido();
app.probarCliente();
app.probarPedido();
