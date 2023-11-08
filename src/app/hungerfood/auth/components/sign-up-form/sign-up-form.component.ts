import { User } from './../../model/user/user';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

import { UserService } from '../../services/user-service/user.service';

import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDontMatch: true,
      };
    }

    return null;
  };
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})

export class SignUpFormComponent implements OnInit {

  rol: number = 0;
  typeDonation: number = 0;

  users : User[] = [];

  @Input() user: User;

  signUpForm = new FormGroup(
    {
      nombreU: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]),
      apelidoU: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z ]*$/)]),
      usernameU: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      donacionU: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)]),
      idTipoDonacion: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9]*$/)]),
      idRoles: new FormControl('', [Validators.required, Validators.minLength(1), Validators.pattern(/^[0-9]*$/)]),
    },
    { validators: passwordsMatchValidator() }
  );

  constructor(
    private toast: HotToastService,
    private router: Router,
    private elementRef: ElementRef,
    private userService: UserService
  ) {
    this.user = {} as User;
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  private getAllStudents() {
    this.userService.getAll().subscribe((response: any) => {
      this.users = response;
    });
  }

  get nombreU() {
    return this.signUpForm.get('name');
  }

  get apelidoU() {
    return this.signUpForm.get('lastname');
  }

  get usernameU() {
    return this.signUpForm.get('username');
  }

  get donacionU() {
    return this.signUpForm.get('donation');
  }

  get contrasena() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  get idTipoDonacion() {
    return this.signUpForm.get('idTipo');
  }

  get idRoles() {
    return this.signUpForm.get('idRoles');
  }



  submit() {
    if (this.signUpForm.valid) {
      this.user.idRoles = parseInt(this.signUpForm.value.idRoles!);
      this.user.idTipoDonacion = parseInt(this.signUpForm.value.idTipoDonacion!);

      console.log(this.user);
      console.log(this.signUpForm.value);

      this.userService.create(this.user).subscribe(
        (response) => {
          this.toast.success('User registered successfully');
          this.router.navigate(['/']);  // Redirige a la página de inicio u otra página necesaria
        },
        (error) => {
          this.toast.error('Error occurred while registering the user. Please try again.');
          console.error(error);
        }
      );
    }
  }




  cancel() {
    this.router.navigate(['/']);
  }


}

