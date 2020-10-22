import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';
import { Brands } from '../../shared/models/models';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements AfterViewInit {

  @ViewChild('scroll') scroll: ElementRef<HTMLElement>;

  formScheduling = this.fb.group({
    "social": this.fb.array(Brands.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)),
    "date_time": this.fb.group({
      "date": [''],
      "time": ['']
    }),
    "text": [''],
    "image": ['']
  })

  mousedown;
  mousemove;
  mouseup;

  socialValid: boolean = false
  formValid: boolean = false
  preview: any;

  get date_time(): FormControl {
    return this.formScheduling.get('date_time') as FormControl
  }

  constructor(
    public popperService: PopperService,
    public modalService: ModalService,
    private fb: FormBuilder
  ) {
    this.preview =  {...this.formScheduling.value, social: this.formScheduling.value.social.filter(n => n.actived)};
  }

  ngAfterViewInit(): void {
    this.formScheduling.valueChanges.subscribe(e => {
      const valid = this.formScheduling.value;
      this.formValid = valid.image != '' && valid.date_time.date != '' && valid.date_time.time != '' && this.socialValid;
      this.preview = {...e.value, social: e.social.filter(n => n.actived)};

    })

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

  socialEvent(e) {
    this.formScheduling.get('social').setValue(e);
    this.socialValid = e.filter(i => i.actived).length > 0;
  }

  outUpload(e) {
    this.formScheduling.get('image').setValue(e.target.files.item(0).name)
  }

  log(e){
    console.log(e);

  }


}
