import { FoodHungerService } from '../../services/food-hunger-service/food-hunger.service';
import { User } from '../../../auth/model/user/user';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-u',
  templateUrl: './editar-u.component.html',
  styleUrls: ['./editar-u.component.css']
})
export class EditarUComponent {

  usuarioForm: FormGroup;
  editedUsuario: User;
  @Output() usuarioActualizado = new EventEmitter<User>();
  constructor( private dialogRef: MatDialogRef<EditarUComponent>,
    @Inject(MAT_DIALOG_DATA) private data: { usuario: User },
    private usuarioService: FoodHungerService,
    private formBuilder: FormBuilder

    )  {
      this.editedUsuario = { ...data.usuario };


      this.usuarioForm = this.formBuilder.group({

        nombreU: [this.editedUsuario.nombreU, Validators.required],
        apellidoU: [this.editedUsuario.apelidoU, Validators.required],
        idU: [this.editedUsuario.idU, Validators.required],
        idTipoDonacion: [this.editedUsuario.idTipoDonacion, Validators.required],
        idRoles: [this.editedUsuario.idRoles, Validators.required],
        donacionU: [this.editedUsuario.donacionU, Validators.required],
        contrasena: [this.editedUsuario.contrasena, Validators.required],

      });
    }

  saveChanges() {
    this.editedUsuario = { ...this.editedUsuario, ...this.usuarioForm.value };

    this.usuarioService.updateUsuario(this.editedUsuario.idU, this.editedUsuario)
      .subscribe(updatedUsuario => {
        this.dialogRef.close(updatedUsuario);
        this.usuarioActualizado.emit(updatedUsuario);
      });
  }

  closeDialog() {
    this.dialogRef.close();
  }

}
