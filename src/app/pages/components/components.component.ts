import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';
import { Brands, Scheduling } from 'src/app/shared/models/models';;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements AfterViewInit {

  @ViewChild('scrollDoc') scroll: ElementRef<HTMLElement>;

  brands = Brands.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  schedulingList = Scheduling;

  mousedown$: Observable<any>;
  mousemove$: Observable<any>;
  mouseup$: Observable<any>;

  constructor(
    public popperService: PopperService,
    public modalService: ModalService,
    ) { }

  ngAfterViewInit(): void {

    //NÃO DEIXA ARRASTAR A IMAGEM
    document.querySelectorAll('img').forEach(i => i.ondragstart = () => false);
    //SCROLL EM SLIDE DESKTOP
    this.mousedown$ = fromEvent(this.scroll.nativeElement, 'mousedown') //EVENTO DE PRESSIONAR
    this.mouseup$ = fromEvent(document, 'mouseup') //EVENTO DE SOLTAR
    this.mousemove$ = fromEvent(document, 'mousemove').pipe(takeUntil(this.mouseup$))  //EVENTO DE MOVER
    this.mousedown$.subscribe(
      (down: MouseEvent) => {
        let x = down.screenX;
        this.mousemove$
          .subscribe((move: MouseEvent) => {
            let offsetx = x - move.screenX;
            console.log(offsetx);
            this.scroll.nativeElement.scrollBy({ left: offsetx })
          })
      }
    )
  }

}
