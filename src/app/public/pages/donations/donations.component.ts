import { Component } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  image: string;
}
@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.css']
})
export class DonationsComponent {
  tiles: Tile[] = [
    {text: 'Realizar donaciones de alimentos', cols: 1, rows: 2, color: '#A9CEC2', image: 'assets/handshake.png'},
    {text: 'Enviar donación económica', cols: 1, rows: 2, color: '#A9CEC2', image: 'assets/heart.png'},
    {text: 'Alianzas', cols: 1, rows: 2, color: '#A9CEC2', image: 'assets/food-donation.png'},
  ];
}
