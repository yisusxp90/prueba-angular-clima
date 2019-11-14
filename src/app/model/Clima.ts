export class Clima {
  ciudad: string;
  pais: string;

  constructor(param: { pais: string; ciudad: string }) {
    this.pais = param.pais;
    this.ciudad = param.ciudad;
  }

}
