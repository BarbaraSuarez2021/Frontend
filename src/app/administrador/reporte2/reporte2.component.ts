import { Component, OnInit } from '@angular/core';
import { TotalAlimentosdonados } from 'src/app/models/reporte2';
import { MatTableDataSource } from '@angular/material/table';
import { Reporte2Service } from 'src/app/services/reporte2.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css'],
})
export class Reporte2Component implements OnInit{
  dataSource: MatTableDataSource<TotalAlimentosdonados>=new MatTableDataSource();

  displayedColumns: string[] = ['Name', 'Cantidad'];

  constructor(private uS:Reporte2Service){}

  ngOnInit(): void {
    this.uS.listTotalAlimentosDonadosPorUsuario().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
