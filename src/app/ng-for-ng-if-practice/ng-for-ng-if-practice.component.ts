import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-ng-if-practice',
  templateUrl: './ng-for-ng-if-practice.component.html',
  styleUrls: ['./ng-for-ng-if-practice.component.css']
})
export class NgForNgIfPracticeComponent implements OnInit {
  todos = [
    { text: 'Angular Assignment using *ngFor', isComplete: true },
    { text: 'Angular Assignment using *ngIn', isComplete: false }
  ];
  newTodoText = '';

  addTodo() {
    this.todos.push({ text: this.newTodoText, isComplete: false });
    this.newTodoText = '';
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
  }

  toggleTodo(index: number){
    this.todos[index].isComplete = !this.todos[index].isComplete;
    }
  constructor() { }

  ngOnInit() {
  }

}
