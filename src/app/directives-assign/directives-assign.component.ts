import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assign',
  templateUrl: './directives-assign.component.html',
  styleUrls: ['./directives-assign.component.css']
})
export class DirectivesAssignComponent implements OnInit {

  content = 'Identity = UI Developer';
  ContentVisible = false; //! BIdefault btn is disabled

  togglingLog = [];
  limit = 5;


  toggleContent() {
    const timestamp = new Date();
    this.togglingLog.push(timestamp);
    this.ContentVisible = !this.ContentVisible; //?Btn id enable after click
  }



  applyColor(i) {
    if (i >= this.limit) {
      return 'blue';
    } else {
      return 'white';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
