import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor( public userService: UsersService) { }

  ngOnInit(): void {
  }

  usersList = this.userService.getUsersLisr();

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
