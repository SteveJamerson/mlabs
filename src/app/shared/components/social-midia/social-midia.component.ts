import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Brands } from '../../models/models';

@Component({
  selector: 'app-social-midia',
  templateUrl: './social-midia.component.html',
  styleUrls: ['./social-midia.component.scss']
})
export class SocialMidiaComponent {

  @Input() brands: Brands[];
  @Output() social = new EventEmitter<Brands[]>();

  constructor() { }

  check(i){
    this.brands[i].actived = !this.brands[i].actived;
    this.social.emit(this.brands);
  }

}
