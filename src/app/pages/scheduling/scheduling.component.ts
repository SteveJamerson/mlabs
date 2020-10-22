import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements AfterViewInit {

  @ViewChild('scroll') scroll: ElementRef<HTMLElement>;

  schedules = [
    {
      "id": 1,
      "social_network_key": [2, 3],
      "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "text": "Texto do post",
      "publication_date": "2020-09-10T15:59:23.922Z",
      "status_key": 1
    },
    {
      "id": 2,
      "social_network_key": [2],
      "media": "https://images.unsplash.com/photo-1600025282051-ec0c6bf3137a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "text": "Texto do post",
      "publication_date": "2020-09-08T15:59:23.922Z",
      "status_key": 3
    }
  ];

  mousedown;
  mousemove;
  mouseup;

  constructor(
    public popperService: PopperService,
    public modalService: ModalService
  ) { }

  ngAfterViewInit(): void {
    document.querySelectorAll('img').forEach(i => i.ondragstart = () => false);

    this.mousedown = fromEvent(this.scroll.nativeElement, 'mousedown')
    this.mouseup = fromEvent(document, 'mouseup')
    this.mousemove = fromEvent(document, 'mousemove').pipe(takeUntil(this.mouseup))

    this.mousedown.subscribe(
      (down: MouseEvent) => {
        let x = down.screenX;
        this.mousemove
          .subscribe((move: MouseEvent) => {
            let offsetx = x - move.screenX;
            console.log(offsetx);
            this.scroll.nativeElement.scrollBy({ left: offsetx })
          })
      }
    )
  }

}
