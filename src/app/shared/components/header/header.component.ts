import { AfterContentInit, Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {

  isMobile: boolean = false;

  constructor() { }

  ngAfterContentInit(): void {
    const isHandset$ = fromEvent(window, 'resize')
    isHandset$.subscribe(
      (e: any) => this.isMobile = (e.target.screen.width >= 600)
    )

  }

}
