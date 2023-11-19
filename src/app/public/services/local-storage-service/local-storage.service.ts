import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() {
    window.addEventListener('beforeunload', this.handleBeforeUnload.bind(this));
  }

  private handleBeforeUnload() {
    localStorage.clear();
  }

  clearLocalStorage() {
    localStorage.clear();
  }
}
