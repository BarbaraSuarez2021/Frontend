import {Component, OnInit} from '@angular/core';
import {LogoutService} from "../../../auth/services/logout-service/logout.service";
import {User} from "../../../auth/model/user/user";
import {HotToastService} from "@ngneat/hot-toast";


@Component({
  selector: 'app-navbar-admin',
  templateUrl: './navbar-admin.component.html',
  styleUrls: ['./navbar-admin.component.css']
})
export class NavbarAdminComponent{

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
          this.toast.error('Admin: Logout failed. Please try again.');
        }
      );
  }
}
