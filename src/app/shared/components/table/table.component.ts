import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopperService } from 'src/app/core/services/popper.service';
import { Scheduling } from './../../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input() doc;

  @ViewChild('scroll') scroll: ElementRef<HTMLElement>;

  mousedown$: Observable<any>;
  mousemove$: Observable<any>;
  mouseup$: Observable<any>;

  //A tabela de agendametos deve exibir somente informações do post que acabou de agendar
  schedulingList = Scheduling.filter(i => i.status.name == "Agendado");

  constructor(
    public popperService: PopperService
  ) { }

  ngOnInit(): void {
    console.log(this.doc);

    if(this.doc) {
      this.schedulingList = this.doc;
    }
  }

  ngAfterViewInit(): void{
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
