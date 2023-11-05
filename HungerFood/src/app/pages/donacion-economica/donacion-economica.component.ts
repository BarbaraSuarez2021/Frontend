import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { DonacionEconomica } from 'src/app/models/donacionEconomica';
import { DonacionEconomicaService } from 'src/app/services/donacion-economica.service';
@Component({
  selector: 'app-donacion-economica',
  templateUrl: './donacion-economica.component.html',
  styleUrls: ['./donacion-economica.component.css']
})
export class DonacionEconomicaComponent {
  public myForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private donacionEconomicaService: DonacionEconomicaService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm()
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      tipo_de_metodo_de_pago: [Validators.required, this.letrasOnlyValidator],
      monto_total: ['', [Validators.required, this.numerosOnlyValidator]],
    })
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

  add() {
    const donacionEconomica: DonacionEconomica = {
      id: 0,
      tipo_de_metodo_de_pago: this.myForm.get('tipo_de_metodo_de_pago')!.value,
      monto_total: this.myForm.get('monto_total')!.value
    }
    this.donacionEconomicaService.save(donacionEconomica).subscribe({
      next: (data) => {
        setTimeout(() => {
          this.router.navigate(['/agradecimiento']);
          setTimeout(() => {
            this.router.navigate(['/donaciones']);
          }, 2000);
        }, 1000);
      },
      error: (err) => {
        console.log(err)
      },
    })
  }
}
