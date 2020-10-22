import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-social-midia',
  templateUrl: './social-midia.component.html',
  styleUrls: ['./social-midia.component.scss']
})
export class SocialMidiaComponent implements OnInit {

  brands = [
      {
        "id": 6,
        "name": "Facebook",
        "icon": "facebook-f",
        "disabled": true,
        "actived": false
      },
      {
        "id": 2,
        "name": "Linkedin",
        "icon": "linkedin-in",
        "disabled": false,
        "actived": false
      },
      {
        "id": 1,
        "name": "Instagram",
        "icon": "instagram",
        "disabled": false,
        "actived": false
      },
      {
        "id": 2,
        "name": "Youtube",
        "icon": "youtube",
        "disabled": true,
        "actived": false
      },
      {
        "id": 4,
        "name": "Pinterest",
        "icon": "pinterest-p",
        "disabled": true,
        "actived": false
      },
      {
        "id": 5,
        "name": "Twitter",
        "icon": "twitter",
        "disabled": true,
        "actived": false
      }
    ].sort((a,b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0)

  constructor() { }

  ngOnInit(): void {
  }

}
