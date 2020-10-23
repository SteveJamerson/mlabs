import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PopperService } from 'src/app/core/services/popper.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {

  @ViewChild('scroll') scroll: ElementRef<HTMLElement>;

  mousedown$: Observable<any>;
  mousemove$: Observable<any>;
  mouseup$: Observable<any>;

  //A tabela de agendametos deve exibir somente informações do post que acabou de agendar
  schedulingList = [
    {
      "id": 1,
      "social": [
        {
          name: 'Instagram',
          icon: 'instagram'
        },
        {
          name: 'Linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 12.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '09/09/2020 às 14:45h',
      "status": {
        "name": "Agendado",
        "color": "success"
      }
    },
    {
      "id": 2,
      "social": [
        {
          name: 'Instagram',
          icon: 'instagram'
        },
      ],
      "image": "./../../../../assets/images/Rectangle 13.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado",
        "color": "positive"
      }
    },
    {
      "id": 3,
      "social": [
        {
          name: 'Linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 14.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado",
        "color": "positive"
      }
    },
    {
      "id": 4,
      "social": [
        {
          name: 'Linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 15.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado com ressalvas",
        "color": "warn"
      }
    },
    {
      "id": 4,
      "social": [
        {
          name: 'Instagram',
          icon: 'instagram'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 16.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Não aprovado",
        "color": "alert"
      }
    },
  ].filter(i => i.status.name == "Agendado");

  constructor(
    public popperService: PopperService
  ) { }

  ngOnInit(): void {
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
