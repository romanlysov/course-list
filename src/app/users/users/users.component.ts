import { Component, OnInit } from '@angular/core';
import { UserItem } from '../user-item.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public userEntities: UserItem[] = [
    {
      id: '11',
      firstName: 'Ivan',
      lastName: 'Ivanov',
    },
    {
      id: '12',
      firstName: 'Petr',
      lastName: 'Petrov',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
