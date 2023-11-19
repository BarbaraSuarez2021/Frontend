import { Component } from '@angular/core';
import {User} from "../../../auth/model/user/user";

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {
  user: User;

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    this.user = storedUser !== null ? JSON.parse(storedUser) : null;
  }
}
