import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  schedulingList = [
    {
      "id": 1,
      "midias": [
        {
          brand: 'instagram',
          icon: 'instagram'
        },
        {
          brand: 'linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 12.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '09/09/2020 às 14:45h',
      "status": {
        "name": "Agendado",
        "color": "success"
      }
    },
    {
      "id": 2,
      "midias": [
        {
          brand: 'instagram',
          icon: 'instagram'
        },
      ],
      "image": "./../../../../assets/images/Rectangle 13.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado",
        "color": "positive"
      }
    },
    {
      "id": 3,
      "midias": [
        {
          brand: 'linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 14.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado",
        "color": "positive"
      }
    },
    {
      "id": 4,
      "midias": [
        {
          brand: 'linkedin',
          icon: 'linkedin-in'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 15.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Postado com ressalvas",
        "color": "warn"
      }
    },
    {
      "id": 4,
      "midias": [
        {
          brand: 'instagram',
          icon: 'instagram'
        }
      ],
      "image": "./../../../../assets/images/Rectangle 16.png",
      "texto": "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      "data": '08/09/2020 às 10:30h',
      "status": {
        "name": "Não aprovado",
        "color": "alert"
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
