import { TotalAlimentosdonados } from './../../model/report2/report2';
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';

import { Reporte2Service } from '../../services/reporte2-service/reporte2.service';

@Component({
  selector: 'app-report2-admin',
  templateUrl: './report2-admin.component.html',
  styleUrls: ['./report2-admin.component.css']
})
export class Report2AdminComponent implements OnInit{
  bookCounts: TotalAlimentosdonados[] = [];
  dataSource: MatTableDataSource<TotalAlimentosdonados>=new MatTableDataSource();

  displayedColumns: string[] = ['Name', 'Cantidad'];

  constructor(private http:HttpClient, private uS:Reporte2Service){}

  ngOnInit(): void {
    this.uS.listTotalAlimentosDonadosPorUsuario().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
}
