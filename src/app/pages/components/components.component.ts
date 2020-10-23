import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/services/modal.service';
import { PopperService } from 'src/app/core/services/popper.service';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { Brands, Scheduling } from 'src/app/shared/models/models';;

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {

  brands = Brands.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
  schedulingList = Scheduling;

  constructor(
    readonly popperService: PopperService,
    readonly modalService: ModalService,
    readonly scrollService: ScrollService
    ) {
    }


}
