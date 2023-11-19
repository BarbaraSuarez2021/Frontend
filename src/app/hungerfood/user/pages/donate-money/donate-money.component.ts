import {Component, OnInit} from '@angular/core';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { DonateMoneyService } from '../../services/donate-money-service/donate-money.service';
import { DonationMoney } from '../../model/donation-money/donation-money';


@Component({
  selector: 'app-donate-money',
  templateUrl: './donate-money.component.html',
  styleUrls: ['./donate-money.component.css']
})
export class DonateMoneyComponent implements OnInit{
  public myForm!: FormGroup
  opcionesPago: string[] = [
    "Yape", "Plin", "Tarjeta de Credito", "Tarjeta de Debito"
  ]

  constructor(
    private fb: FormBuilder,
    private donateMoneyService: DonateMoneyService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group ({
      tipo_de_metodo_de_pago: [null, Validators.required, this.letrasOnlyValidator],
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

    const donationMoney: DonationMoney = {
      idDonacion_Economica: 0,
      tipo_de_metodo_de_pago: this.myForm.get('tipo_de_metodo_de_pago')!.value,
      monto_total: this.myForm.get('monto_total')!.value
    }

    console.log(donationMoney);

    this.donateMoneyService.save(donationMoney).subscribe({
      next: (data) => {
        console.log("Registrando donación economica...");
        this.snackBar.open('Donación economica registrada correctamente', '', {
          duration: 3000
        });
        this.router.navigate(['user/gratefulness'])
      },
      error: (err) => {
        console.log(err);
        this.snackBar.open('Error al registrar la donación de alimento', '', {
          duration: 3000
        });
      },
    })

  }

}
