export default class Direccion {
    /**
     *
     * @param {string} calle Calle del domicilio del cliente
     * @param {number} numeroExterior Número exterior de la residencia del cliente
     * @param {number} numeroInterior Número interior de la residencia del cliente
     * @param {string} colonia Colonia donde vive el cliente
     * @param {number} codigoPostal Código postal de la comunidad del cliente
     * @param {string} ciudad Ciudad donde vive el cliente
     * @param {string} municipio Municipio donde vive el cliente
     */
    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio) {
      this._calle = calle;
      this._numeroExterior = numeroExterior;
      this._numeroInterior = numeroInterior;
      this._colonia = colonia;
      this._codigoPostal = codigoPostal;
      this._ciudad = ciudad;
      this._municipio = municipio;
    }
  
    getFormatoCorto() {
      let direccion = `${this._calle} ${this._numeroExterior}`;
  
      return direccion;
    }
  
    getFormatoExtendido() {
      return ` ${this._calle} ${this._numeroExterior},${this._numeroInterior} ${this._colonia} CP.${this._codigoPostal} ${this._ciudad}, ${this._municipio}`;
    }
  }