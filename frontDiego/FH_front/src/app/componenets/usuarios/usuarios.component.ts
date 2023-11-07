import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';
import { FoodHungerService } from 'src/app/services/food-hunger.service';
import { MatDialog } from '@angular/material/dialog';
import { EditarUComponent } from '../editar-u/editar-u.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{
  isEditing = false;
  displayedColumns: string[] = ['idU','actions','nombreU','apelidoU', 'idTipoDonacion', 'idRoles','donacionU','contrasena']
  dataSource = new MatTableDataSource<Usuario>()
  @Output() usuarioActualizado = new EventEmitter<Usuario>();
  constructor(private usuarioService: FoodHungerService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getUsuario();
  }
  getUsuario() {
    this.usuarioService.getUsuario().subscribe((data: Usuario[]) => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

  DeleteUsuario(id: number) {

    this.usuarioService.DeleteUsuario(id).subscribe(
      () => {

        this.getUsuario();
        this.snackBar.open('Usuario eliminado con éxito', 'Cerrar', {
          duration: 3000,
        });
      },
      (error) => {
        console.error('Error al eliminar usuario', error);
        this.snackBar.open('Error al eliminar el usuario', 'Cerrar', {
          duration: 3000,
        });
      }
    );
  }
openEditDialog(usuario: Usuario) {
  const dialogRef = this.dialog.open(EditarUComponent, {
    width: '400px',
    data: { usuario },
  });

  dialogRef.componentInstance.usuarioActualizado.subscribe((updatedUsuario: Usuario) => {

    this.getUsuario(); 
  });
}
}
