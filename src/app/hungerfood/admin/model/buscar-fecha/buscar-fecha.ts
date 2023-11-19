export interface BuscarFecha {
  idAlimentosDonadosPorDonante: number;
  alimentosDonados: {
    idAlimentos_Donados: number;
    tipo_alimento: {
      id_TipoAlimento: number;
      nombre_TA: string;
      descripcion_general: string;
    };
    fechaVencimiento: string;
    descripcion_especifico: string;
    nombre_alimento: string;
    fechaEmision: string;
  };
  usuario: {
    idU: number;
    roles: {
      id_Roles: number;
      tipo: string;
    };
    tipoDonacion: {
      idTipoDonacion: number;
      nombreTD: string;
    };
    enabled: boolean;
    username: string;
    authorities: [
      {
        authority: string;
      }
    ];
    donacionU: string;
    apelidoU: string;
    usernameU: string;
    contrasena: string;
    nombreU: string;
    accountNonLocked: boolean;
    credentialsNonExpired: boolean;
    accountNonExpired: boolean;
    password: string;
  };
  fechaDonacion: string;
  cantidadAlimentos: number;

  fechaInicioFiltro: string;
  fechaFinFiltro: string;
}
