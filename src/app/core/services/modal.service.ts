import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  toggle(target) {
    document.querySelector(target).classList.toggle('show');
    document.querySelector('body').classList.toggle('modal');
  }

  show(target) {
    document.querySelector(target).classList.add('show');
    document.querySelector('body').classList.add('modal');
  }

  hide(target) {
    document.querySelector(target).classList.remove('show');
    document.querySelector('body').classList.remove('modal');
  }
}
