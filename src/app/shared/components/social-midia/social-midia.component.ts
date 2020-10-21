import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-midia',
  templateUrl: './social-midia.component.html',
  styleUrls: ['./social-midia.component.scss']
})
export class SocialMidiaComponent implements OnInit {

  brands = [
    'instagram',
    'linkedin-in',
    'youtube',
    'pinterest',
    'twitter',
    'facebook-f',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
