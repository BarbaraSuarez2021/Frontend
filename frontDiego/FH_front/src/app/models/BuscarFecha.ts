export interface BuscarFecha {
    idAlimentosDonadosPorDonante: number;
    alimentosDonados: {
      idAlimentos_Donados: number;
      descripcion_especifico: string;
    
    };
    usuario: {
      idU: number;
      username: string;
    
    };
    fechaDonacion: string; 
    cantidadAlimentos: number;
    
    fechaInicioFiltro: string; 
    fechaFinFiltro: string; 
  }
  