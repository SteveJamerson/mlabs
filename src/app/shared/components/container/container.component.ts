import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input() footer: boolean = true;
  @Input() agendar;

  constructor() { }

  ngOnInit(): void {
  }

}
