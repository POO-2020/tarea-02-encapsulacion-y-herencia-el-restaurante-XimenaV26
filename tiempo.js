export default class Tiempo {
    /**
     *
     * @param {number} hora
     * @param {number} minuto
     * @param {string} periodo
     */
    constructor(hora, minuto, periodo) {
      this._hora = hora;
      this._minuto = minuto;
      this._periodo = periodo.toUpperCase();
    }
  
    getFormato12() {
      return `${this._hora}:${this._minuto} ${this._periodo}`;
    }
  
    getFormato24() {
      if (this._periodo === 'AM') {
        return `${this._hora}:${this._minuto}`;
      } else {
        return `${this._hora + 12}:${this._minuto}`;
      }
    }
  }