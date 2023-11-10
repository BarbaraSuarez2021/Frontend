import { HttpClient } from '@angular/common/http';
import { Reporte1Service } from './../../../services/reporte1.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CanXtipoAlimento } from 'src/app/models/reporte1';

@Component({
  selector: 'app-reporte1-administrador',
  templateUrl: './reporte1-administrador.component.html',
  styleUrls: ['./reporte1-administrador.component.css'],
})
export class Reporte1AdministradorComponent implements OnInit {
  AlimCounts: CanXtipoAlimento[] = [];
  dataSource: MatTableDataSource<CanXtipoAlimento> = new MatTableDataSource();

  displayedColumns: string[] = ['Tipo', 'Cantidad'];

  constructor(private bs: Reporte1Service) {}

  ngOnInit(): void {
    this.bs.cantAlimentosXtipo().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }

  cantAlimentosXtipo(): void {
    this.bs.cantAlimentosXtipo().subscribe((data: CanXtipoAlimento[]) => {
      this.AlimCounts = data;
    });
  }
}
