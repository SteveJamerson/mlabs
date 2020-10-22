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
