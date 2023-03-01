import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-reactive-form-assignment',
  templateUrl: './reactive-form-assignment.component.html',
  styleUrls: ['./reactive-form-assignment.component.css']
})
export class ReactiveFormAssignmentComponent implements OnInit {
  isSubmitted: boolean = false;
  myReactiveForm: FormGroup;
  constructor() { 
    this.createForm();
  }

  ngOnInit() {
  }


  createForm()
  {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'subscription': new FormControl('Advanced'),
        'email': new FormControl(null, [Validators.required, Validators.email])
      }),
      'password' : new FormControl(null,Validators.required),
      'date' : new FormControl('',[this.futureDateValidator])

      
    });
  }
  futureDateValidator(control: FormControl) {
    const selectedDate = new Date(control.value);
    const now = new Date();
    return selectedDate > now ? null : { futureDate: true };
  }

  OnSubmit() {
    this.isSubmitted=true;

    if (this.myReactiveForm.valid) {
      console.log(this.myReactiveForm.value);
    }  else {
      this.myReactiveForm.markAllAsTouched();
      console.warn('Invalid form');
    }
    
    console.log('My ReactiveForm', this.myReactiveForm)
  }
}
