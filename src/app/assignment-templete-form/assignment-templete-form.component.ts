import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AbstractControl, ValidationErrors } from '@angular/forms';

function ageValidator(control: AbstractControl): ValidationErrors | null {
  const age = control.value;
  if (age && (age < 17 || age > 20)) {
    return { ageRange: true };
  }
  return null;
}


@Component({
  selector: 'app-assignment-templete-form',
  templateUrl: './assignment-templete-form.component.html',
  styleUrls: ['./assignment-templete-form.component.css']
})
export class AssignmentTempleteFormComponent implements OnInit {
  isSubmitted: boolean = false;
  minAge = 17;
maxAge = 20;

  formData  = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',

    course: '',
    gender: '',
    password: '',
    confirmPassword: ''
  }
  showPassword = false;
  showPassword2=false;
  toggleShowPassword2(){
    this.showPassword2 = !this.showPassword2;

  }
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  defaultValue = 'Mumbai';
  defaultGender = 'Male';
  
  courses: string[] = ['Mumbai', 'Kolkata', 'Delhi'];
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

form.controls['course'].setValue('Mumbai');
form.controls['gender'].patchValue('Male');

// POST api/ Saveuser(formData);

  }
  
  constructor() { }

  ngOnInit() {
  }
  



}
