import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  notAllowedNames=['jack','harry'];

  takenEmails: string[] = ['test@gmail.com'];

  isSubmitted: boolean = false;
  myReactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) { 
    this.createForm();
  }
  ngOnInit() {

 
  }
  createForm()
  {
    // this.myReactiveForm = new FormGroup({
    //   'userDetails': new FormGroup({
    //     'username' : new FormControl(null, [Validators.required, this.NaNames.bind(this) ]),
    //     email: new FormControl('', [
    //       Validators.required,
    //       Validators.email,
    //       this.customEmailValidator.bind(this)
    //     ])      }),
    //   'course': new FormControl('Angular'),
    //   'skills': new FormArray([
    //     new FormControl(null, Validators.required)
    //   ])
    // });
    this.myReactiveForm = this._fb.group({
      userDeatils: this._fb.group({
        username: ['', [Validators.required, this.NaNames.bind(this) ]],
        email: ['', [Validators.required, Validators.email], this.NaEmails]
      }),
      course: ['Angular'],
      skills: this._fb.array([])
     })
  }
  OnSubmit() {
    this.isSubmitted=true;
    // alert('method called');
    console.log('My ReactiveForm', this.myReactiveForm)
  }
  OnAddSkills() {
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  NaNames(control: FormControl) {
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    } else {
      return null;
    }

  }

  NaEmails(control: FormControl) : Promise<any> | Observable<any> 
  {
    const myResponse = new Promise<any> ((resolve, reject) => {
      setTimeout(() => {
        if(control.value == 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000)
    })
    return myResponse;
  }
  validateEmail(control: FormControl): {[s: string]: boolean} {
    const email = control.value;
    if (this.takenEmails.indexOf(email) !== -1) {
      return {'emailTaken': true};
    }
    return null;
  }
  customEmailValidator(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'takenemail@example.com') {
          resolve({'emailTaken': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
 
}

