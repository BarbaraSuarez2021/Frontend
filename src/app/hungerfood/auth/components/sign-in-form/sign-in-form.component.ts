import { User } from './../../model/user/user';
import { LoginService } from './../../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { UserService } from '../../services/user-service/user.service';


@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z0-9]*$/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  });

  user: User = new User(0, 0, 0, '', '', '', '', '',);

  constructor(
    private router: Router,
    private toast: HotToastService,
    private loginService: LoginService,
    private userService: UserService
  ) { }

  ngOnInit(): void { }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get userByUsername()  {
    const username = this.username?.value;
    if (username) {
      return this.userService.getByUsername(username);
    }
    return null; // O manejar de otra forma si no tienes un valor de username
  }

  submit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;

      if (username && password) {
        // Llamar a la función login del servicio
        this.loginService.login(username, password).subscribe(
          (authResponse) => {
            // Manejar la respuesta del servidor de autenticación
            if (this.userByUsername) {
              this.userByUsername.subscribe((user) => {
                this.user = user;
                console.log(this.user);
                this.toast.success('Login successfully');

                if (this.user.idRoles == 1) {
                  this.router.navigate(['/admin/home']);
                } else if (this.user.idRoles == 2) {
                  this.router.navigate(['/user/home']);
                }
              });
            }
          },
          (error) => {
            // Manejar errores de autenticación, por ejemplo, mostrar un mensaje de error
            this.toast.error('Authentication failed. Please check your credentials.');
            console.error(error);
          }
        );
      }
    }
  }



}

