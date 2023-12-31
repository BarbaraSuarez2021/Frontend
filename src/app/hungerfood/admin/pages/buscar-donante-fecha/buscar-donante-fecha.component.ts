import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';

import { BuscarFecha } from '../../model/buscar-fecha/buscar-fecha';
import { FoodHungerService } from '../../services/food-hunger-service/food-hunger.service';


@Component({
  selector: 'app-buscar-donante-fecha',
  templateUrl: './buscar-donante-fecha.component.html',
  styleUrls: ['./buscar-donante-fecha.component.css']
})
export class BuscarDonanteFechaComponent implements OnInit {
  displayedColumns: string[] = ['idU', 'username', 'fechaDonacion','cantidadAlimentos', 'descripcionEspecifico'];
  dataSource = new MatTableDataSource<BuscarFecha>();
  idDonante: number = 0;
  fechaInicio: any;
  fechaFin: any;

  constructor(
    private fechaService: FoodHungerService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.buscarDonacionesPorFecha()
  }

  buscarDonacionesPorFecha() {
    console.log(this.fechaFin)
    console.log(this.fechaInicio)
    console.log(this.idDonante)
    if (this.idDonante && this.fechaInicio && this.fechaFin) {
      this.fechaService
        .buscarDonacionesPorFecha(this.idDonante, this.fechaInicio, this.fechaFin)
        .subscribe((data: BuscarFecha[]) => {
          this.dataSource = new MatTableDataSource(data);
        });
    } else {
      this.snackBar.open('Por favor, complete todos los campos', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
