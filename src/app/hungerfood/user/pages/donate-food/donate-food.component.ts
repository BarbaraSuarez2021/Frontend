import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DateAdapter } from '@angular/material/core';

import { RegisterDonationFoodService } from '../../services/register-donation-food-service/register-donation-food.service';
import { DonationFood } from '../../model/donation-food/donation-food';
import {TypeFoodService} from "../../services/type-food-service/type-food.service";
import {TypeFood} from "../../model/type-food/type-food";

@Component({
  selector: 'app-donate-food',
  templateUrl: './donate-food.component.html',
  styleUrls: ['./donate-food.component.css']
})
export class DonateFoodComponent implements OnInit {
  public myForm!: FormGroup;
  public fechaHoy: Date = new Date();
  public tiposDeAlimento: any[] = [];
  public tipoAlimento: TypeFood;

  constructor(
    private fb: FormBuilder,
    private registerDonationFoodService: RegisterDonationFoodService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dateAdapter: DateAdapter<any>,
    private typeFoodService: TypeFoodService
  ) {
    this.dateAdapter.setLocale('es-ES');
    this.tipoAlimento = {} as TypeFood;
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.typeFoodService.getTypesOfFood().subscribe(data => {
      this.tiposDeAlimento = data;
    });
  }

  reactiveForm() {
    const fechaHoy = new Date();

    this.myForm = this.fb.group({
      nombreAlimentos: ['', [Validators.required, this.letrasOnlyValidator]],
      descripcionEspecifica: ['', Validators.required],
      fechaEmision: [fechaHoy, Validators.required],
      fechaVencimiento: ['', [Validators.required, this.numerosOnlyValidator]],
      tipoAlimento: [null, Validators.required]
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

    // Formatea la fecha de vencimiento en el formato YYYY-MM-DD
    const fechaVencimientoFormateada = fechaVencimientoValue.toISOString().slice(0, 10);

    // Formatea la fecha de emisión en el formato YYYY-MM-DD
    const fechaEmisionFormateada = fechaEmisionValue.toISOString().slice(0, 10);

    const tipoAlimentos: DonationFood = {
      idAlimentos_Donados: 0,
      nombre_alimento: this.myForm.get('nombreAlimentos')!.value,
      descripcion_especifico: this.myForm.get('descripcionEspecifica')!.value,
      fechaEmision: fechaEmisionFormateada as any,
      fechaVencimiento: fechaVencimientoFormateada as any,
      id_TipoAlimento: this.myForm.get('tipoAlimento')!.value
    };


    console.log(tipoAlimentos);

    this.registerDonationFoodService.saveDonacion_Alimento(tipoAlimentos).subscribe({
      next: (data) => {
        console.log("Registrando donación de alimento...");
        this.snackBar.open('Donación de alimento registrada correctamente', '', {
          duration: 3000
        });
        this.router.navigate(['user/gratefulness'])
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
