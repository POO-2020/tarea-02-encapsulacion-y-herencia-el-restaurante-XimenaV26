import Direccion from "./direccion.js"
export default class Cliente {
    /**
     *
     * @param {string} nombre Nombre completo del cliente
     * @param {Direccion} direccion La dirección del cliente
     * @param {number} telefono Número de teléfonodel cliente
     */
    constructor(nombre, direccion, telefono) {
      this._direccion = direccion;
      this._nombre = nombre;
      this._telefono = telefono;
    }
  
    getPerfil() {
      let perfil = `${this._nombre}, ${
        this._telefono
      }, ${this._direccion.getFormatoCorto()}`;
  
      return perfil;
    }
  }