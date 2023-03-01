import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormsComponent implements OnInit {
  isSubmitted: boolean = false;
  formData  = {
    email: '',
    password: '',
    course: '',
    gender: ''
  }
  showPassword = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  defaultValue = 'Angular';
  defaultGender = 'Male';
  
  courses: string[] = ['Angular', 'Javascript', 'Typescript'];
  genders = [ 
    {
      id: '1', value: 'Male'
    },
    {
      id: '2', value: 'Female'
    }
  ]
  // login(form: NgForm) {
  //   console.log(form);
  //   this.formData.email = form.value.userDetail.email;
  //   this.formData.password = form.value.userDetail.password;
  //   this.formData.course = form.value.course;
  //   this.formData.gender = form.value.gender;
  //   form.reset()
  // this. defaultValue = 'Angular';
  // this.defaultGender = 'Male';
  // // form.controls['course'].setValue('Angular');
  // // form.controls['gender'].patchValue('Male');
  //     }

  togglePassword(){

  }
  login(form: NgForm) {
    this.isSubmitted = true;
console.log(form);

 this.formData.email = form.value.email;
 this.formData.password = form.value.password;
 this.formData.course = form.value.course;
 this.formData.gender = form.value.gender;
//form.reset();

form.controls['course'].setValue('Angular');
form.controls['gender'].patchValue('Male');

// POST api/ Saveuser(formData);

  }
      
  constructor() { }

  ngOnInit() {
  }

}
