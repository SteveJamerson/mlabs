import { Injectable, Input } from '@angular/core';
import { Placement, createPopper } from '@popperjs/core';

@Injectable({
  providedIn: 'root'
})
export class PopperService {

  create(target, tooltip, placement?: 'bottom') {
    console.log('create');
    createPopper(
      target,
      tooltip, {
        placement
      });
  }

  toggle(target, tooltip, placement?) {
    document.querySelector(tooltip).classList.toggle('show');
    const tg = document.querySelector(target) as HTMLElement;
    const tp = document.querySelector(tooltip) as HTMLElement;
    this.create(tg, tp, placement);
  }

  show(target, tooltip, placement?) {
    document.querySelector(tooltip).classList.add('show');
    this.create(target, tooltip, placement);
  }

  hide(tooltip, target?, placement?) {
    document.querySelector(tooltip).classList.remove('show');
  }
}
