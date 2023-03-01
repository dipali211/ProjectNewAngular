import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-user-data',
  templateUrl: './ng-if-user-data.component.html',
  styleUrls: ['./ng-if-user-data.component.css']
})
export class NgIfUserDataComponent implements OnInit {
  users = [
    { name: 'Sanket ', email: 'sanket.anguler@gmail.com' },
    { name: 'Ritesh', email: 'ritesh.anguler@gmail.com' },
    { name: 'Maruti', email: 'maruti.anguler@gmail.com' }

  ];
  showUserList = true;

  addUser() {
    this.users.push({ name: 'New User', email: 'new.user@gmail.com' });
    this.showUserList = true;
  }

  removeUser(index: number) {
    this.users.splice(index, 1);
    this.showUserList = this.users.length > 0;
  }

  removeAllUsers() {
    this.users = [];
    this.showUserList = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
