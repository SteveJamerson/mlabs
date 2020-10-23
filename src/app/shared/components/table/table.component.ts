import { Component, Input, OnInit } from '@angular/core';
import { PopperService } from 'src/app/core/services/popper.service';
import { ScrollService } from 'src/app/core/services/scroll.service';
import { Scheduling } from './../../models/models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() doc;

  //A tabela de agendametos deve exibir somente informações do post que acabou de agendar
  schedulingList = Scheduling.filter(i => i.status.name == "Agendado");

  constructor(
    readonly popperService: PopperService,
    readonly scrollService: ScrollService
  ) { }

  ngOnInit(): void {
    if(this.doc) {
      this.schedulingList = this.doc;
    }
  }

}
