import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-practice',
  templateUrl: './ng-if-practice.component.html',
  styleUrls: ['./ng-if-practice.component.css']
})
export class NgIfPracticeComponent implements OnInit {
  showFirstElement = true;

  toggle() {
    this.showFirstElement = !this.showFirstElement;
  }
  showSuccessMessage = false;
  showErrorMessage = false;

  displaySuccessMessage() {
    this.showSuccessMessage = true;
    this.showErrorMessage = false;
  }

  displayErrorMessage() {
    this.showSuccessMessage = false;
    this.showErrorMessage = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
