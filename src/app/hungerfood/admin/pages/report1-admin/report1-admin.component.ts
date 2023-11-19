
import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { MatTableDataSource } from '@angular/material/table';

import { CanXtipoAlimento } from 'src/app/hungerfood/admin/model/report1/report1';

import { Reporte1Service } from '../../services/reporte1-service/reporte1.service';

@Component({
  selector: 'app-report1-admin',
  templateUrl: './report1-admin.component.html',
  styleUrls: ['./report1-admin.component.css']
})
export class Report1AdminComponent implements OnInit{
  AlimCounts: CanXtipoAlimento[] = [];
  dataSource: MatTableDataSource<CanXtipoAlimento> = new MatTableDataSource();

  displayedColumns: string[] = ['Tipo', 'Cantidad'];

  constructor(private http:HttpClient, private bs: Reporte1Service){}

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
