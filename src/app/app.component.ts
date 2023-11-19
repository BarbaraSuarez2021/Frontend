import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {LocalStorageService} from "./public/services/local-storage-service/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{

  constructor(private localStorageService: LocalStorageService) {
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event: any) {
    localStorage.clear();
  }

  ngOnDestroy(){
    this.localStorageService.clearLocalStorage();
  }

}
