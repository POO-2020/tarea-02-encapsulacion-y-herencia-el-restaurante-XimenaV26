export default class Precio {
    /**
     *
     * @param {number} valor El valor del producto
     */
    constructor(valor) {
      this._valor = valor;
    }

    getValor(){
      return(`${this._valor}`)
    }
  
    getPrecio() {
      return this._valor.toLocaleString('en-US', {
        style: 'currency',
        currency: 'MXN'
      });
    }
  }