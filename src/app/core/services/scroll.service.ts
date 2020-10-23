import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  scrolling: boolean = false;
  scrollingX: number = 0;

  constructor() { }

  mousemove(e, target:HTMLDivElement){
    let offsetx = this.scrollingX - e.screenX;
    target.scrollBy({ left: offsetx });
    console.log('scrolling');

  }

  mousedown(e){
    //NÃO DEIXA ARRASTAR A IMAGEM
    document.querySelectorAll('img').forEach(i => i.ondragstart = () => false);

    this.scrollingX = e.screenX;
    this.scrolling = true;
  }

  mouseup(e){
    this.scrolling = false;
    this.scrollingX = 0;
  }
}
