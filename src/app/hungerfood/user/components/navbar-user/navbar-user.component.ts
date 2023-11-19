import { Component } from '@angular/core';
import { User } from "../../../auth/model/user/user";
import { LogoutService } from "../../../auth/services/logout-service/logout.service";
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.css']
})
export class NavbarUserComponent {

  user: User;

  constructor(private logoutService: LogoutService, private toast: HotToastService,) {
    this.user = {} as User;
  }

  logout() {

    const storedUser = localStorage.getItem('currentUser');
    this.user = storedUser !== null ? JSON.parse(storedUser) : null;

    this.logoutService.logout(this.user.usernameU)
      .subscribe(
        response => {
          // Handle the successful response here
          console.log('Logout exitoso', response);
          this.toast.success('Logout successfully');

          // Remove token from local storage
          localStorage.removeItem('authToken');
          localStorage.removeItem('currentUser');
        },
        error => {
          // Handle the error here
          console.error('Error en el logout', error);
          this.toast.error('Logout failed. Please try again.');
        }
      );
  }
}
