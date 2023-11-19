import {Component, OnInit} from '@angular/core';
import {User} from "../../../auth/model/user/user";

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent{

  user: User;

  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    this.user = storedUser !== null ? JSON.parse(storedUser) : null;
  }

}

