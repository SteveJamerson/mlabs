import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';
import { FormScheduling } from '../../models/models';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements AfterViewInit, OnInit {

  @ViewChild('scroll') scroll: ElementRef<HTMLElement>;

  @Input() data: FormGroup;
  @Output() dataEvent = new EventEmitter<any>();


  mousedown;
  mousemove;
  mouseup;

  data$;
  dataLoop;

  constructor(
    public popperService: PopperService,
    public modalService: ModalService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.dataLoop = {...this.data.value, social: this.data.value.social.filter(n => n.actived)}
  }

  ngAfterViewInit(): void {

    this.data$ = this.data.valueChanges.subscribe(i => {
      this.dataLoop = {...this.data.value, social: i.social.filter(n => n.actived)}
    });

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
