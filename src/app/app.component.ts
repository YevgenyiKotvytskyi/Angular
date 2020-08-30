import { Component } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'Список пользователей';
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
  notes:Section[]  = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/20'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/20'),
    }
  ];
}
