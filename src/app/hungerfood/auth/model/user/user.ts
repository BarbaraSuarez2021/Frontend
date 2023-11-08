export class User {
  idU
  idTipoDonacion: number;
  idRoles: number;
  apelidoU: string;
  donacionU: string;
  usernameU: string;
  contrasena: string;
  nombreU: string;

  constructor(idU: number,idTipoDonacion: number, idRoles: number, apelidoU: string, donacionU: string, usernameU: string, contrasena: string, nombreU: string) {
    this.idU = idU;
    this.idTipoDonacion = idTipoDonacion;
    this.idRoles = idRoles;
    this.apelidoU = apelidoU;
    this.donacionU = donacionU;
    this.usernameU = usernameU;
    this.contrasena = contrasena;
    this.nombreU = nombreU;
  }

}
