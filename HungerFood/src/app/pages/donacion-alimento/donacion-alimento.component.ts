import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAdapter } from '@angular/material/core';


import { Donacion_Alimento } from 'src/app/models/donacion_de_alimento';
import { RegistroDonacionAlimentoService } from 'src/app/services/registro-donacion-alimento.service';

@Component({
  selector: 'app-donacion-alimento',
  templateUrl: './donacion-alimento.component.html',
  styleUrls: ['./donacion-alimento.component.css']
})
export class DonacionAlimentoComponent implements OnInit {
  public myForm!: FormGroup;
  public fechaHoy: Date = new Date();
  constructor(
    private fb: FormBuilder,
    private registroDonacionAlimentos: RegistroDonacionAlimentoService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dateAdapter: DateAdapter<any>
  ) {this.dateAdapter.setLocale('es-ES');}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    const fechaHoy = new Date();

    this.myForm = this.fb.group({
      nombreAlimentos: ['', [Validators.required, this.letrasOnlyValidator]],
      descripcionEspecifica: ['', Validators.required],
      fechaEmision: [fechaHoy, Validators.required], 
      fechaVencimiento: ['', [Validators.required, this.numerosOnlyValidator]],
      tipoAlimento: ['', Validators.required]
    });
  }

  letrasOnlyValidator(control: FormControl) {
    const inputValue = control.value;
    if (/^[a-zA-Z]+$/.test(inputValue)) {
      return null;
    } else if (/\d/.test(inputValue)) {
      return { numerosIngresados: true };
    } else {
      return { letrasOnly: true };
    }
  }
  
  numerosOnlyValidator(control: FormControl) {
    const inputValue = control.value;
    if (/\d/.test(inputValue)) {
      return null;
    } else {
      return { numerosOnly: true };
    }
  }

  addTipoAlimento() {
      const fechaVencimientoValue = this.myForm.get('fechaVencimiento')!.value as Date;
      const fechaEmisionValue = this.myForm.get('fechaEmision')!.value as Date;

      const year = fechaVencimientoValue.getFullYear();
      const month = fechaVencimientoValue.getMonth() + 1; 
      const day = fechaVencimientoValue.getDate();
      const fechaVencimientoFormateada = `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
      
      const yearE = fechaEmisionValue.getFullYear();
      const monthE = fechaEmisionValue.getMonth() + 1; 
      const dayE = fechaEmisionValue.getDate();
      const fechaEmisionFormateada = `${dayE < 10 ? '0' : ''}${dayE}-${monthE < 10 ? '0' : ''}${monthE}-${yearE}`;
      
      const tipoAlimentos: Donacion_Alimento = {
        id: 0,
        nombreAlimentos: this.myForm.get('nombreAlimentos')!.value,
        descripcionEspecifica: this.myForm.get('descripcionEspecifica')!.value,
        fechaEmision: fechaEmisionFormateada as any,
        fechaVencimiento: fechaVencimientoFormateada as any, 
        tipoAlimento: this.myForm.get('tipoAlimento')!.value
    };

    this.registroDonacionAlimentos.saveDonacion_Alimento(tipoAlimentos).subscribe({
      next: (data) => {
        console.log("Registrando donación de alimento...");
        this.snackBar.open('Donación de alimento registrada correctamente', '', {
          duration: 3000
        });
        this.router.navigate(['/donar-ahora'])
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open('Error al registrar la donación de alimento', '', {
          duration: 3000
        });
      }
    });
  }
}
