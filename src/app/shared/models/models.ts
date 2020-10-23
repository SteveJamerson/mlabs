export interface Brands {
  id: number;
  name: string;
  icon: string;
  disabled: boolean;
  actived: boolean;
}

export interface DateTime {
  date: string;
  time: string;
}

export interface FormScheduling {
  "social": Brands[];
  "date_time": DateTime;
  "text": string,
  "image": string
}


export const Brands = [
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
]

export const Scheduling = [
  {
    "id": 1,
    "social": [
      {
        name: 'Instagram',
        icon: 'instagram'
      },
      {
        name: 'Linkedin',
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
    "social": [
      {
        name: 'Instagram',
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
    "social": [
      {
        name: 'Linkedin',
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
    "social": [
      {
        name: 'Linkedin',
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
    "social": [
      {
        name: 'Instagram',
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
