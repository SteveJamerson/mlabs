import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';
import { Brands } from '../../shared/models/models';

@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements AfterViewInit {

  formScheduling = this.fb.group({
    "social": this.fb.array(Brands.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)),
    "date_time": this.fb.group({
      "date": [''],
      "time": ['']
    }),
    "text": [''],
    "image": ['']
  })

  socialValid: boolean = false
  formValid: boolean = false

  get date_time(): FormControl {
    return this.formScheduling.get('date_time') as FormControl
  }

  constructor(
    public popperService: PopperService,
    public modalService: ModalService,
    private fb: FormBuilder
  ) { }

  ngAfterViewInit(): void {
    this.formScheduling.valueChanges.subscribe(e => {
      const valid = this.formScheduling.value;
      console.log(valid);

      this.formValid = valid.image != '' && valid.date_time.date != '' && valid.date_time.time != '' && this.socialValid
    })
  }

  socialEvent(e) {
    this.formScheduling.get('social').setValue(e);
    this.socialValid = e.filter(i => i.actived).length > 0;
  }

  outUpload(e) {
    this.formScheduling.get('image').setValue(e)
  }

  log(e){
    console.log(e);

  }


}
