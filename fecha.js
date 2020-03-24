export default class Fecha {
    /**
     *
     * @param {number} dia
     * @param {number} mes
     * @param {number} año
     */
    constructor(dia, mes, año) {
      this._fecha = new Date(año, mes - 1, dia);
    }
  
    getAños() {
      let hoy = new Date(Date.now());
      let años = hoy.getFullYear() - this._fecha.getFullYear();
      return años;
    }
  
    getMeses() {
      return this.getAños() * 12;
    }
  
    getSemanas() {
      return this.getMeses() * 4;
    }
  
    getDias() {
      return this.getSemanas() * 7;
    }
  
    getFecha() {
      return `${this._fecha.getDate()}/${
        nombreMes[this._fecha.getMonth()]
      }/${this._fecha.getFullYear()}`;
    }
  
    getDiaFecha() {
      let dia = nombreDia[this._fecha.getDay()];
  
      return dia;
    }
  }
  
  const nombreDia = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sabado'
  ];
  
  const nombreMes = [
    'Ene',
    'Feb',
    'Mar',
    'Abr',
    'May',
    'Jun',
    'Jul',
    'Ago',
    'Sep',
    'Oct',
    'Nov',
    'Dic'
  ];