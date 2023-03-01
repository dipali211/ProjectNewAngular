import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-practice',
  templateUrl: './ng-for-practice.component.html',
  styleUrls: ['./ng-for-practice.component.css']
})
export class NgForPracticeComponent implements OnInit {
  items = [
    { name: 'Item 1', isAvailable: true },
    { name: 'Item 2', isAvailable: false },
    { name: 'Item 3', isAvailable: true },
    { name: 'Item 4', isAvailable: false },
    { name: 'Item 5', isAvailable: true }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
