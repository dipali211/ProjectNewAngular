import { Component, OnInit } from '@angular/core';
import {  FormGroup, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@Component({
  selector: 'app-reactive-form-assignment2',
  templateUrl: './reactive-form-assignment2.component.html',
  styleUrls: ['./reactive-form-assignment2.component.css']
})
export class ReactiveFormAssignment2Component implements OnInit {
  
  userDetailsForm: FormGroup;
  matchingPasswordsGroup: FormGroup;
  countryPhoneGroup: FormGroup;

  accountDetailsForm: FormGroup;
  parentErrorStateMatcher = new MyErrorStateMatcher();


  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' },
      { type: 'minlength', message: 'Full name must be at least 5 characters long' },
      { type: 'maxlength', message: 'Full name cannot be more than 25 characters long' }
    ],
    'birthday': [
      { type: 'required', message: 'Birthday is required' }
    ],
    'gender': [
      { type: 'required', message: 'Gender is required.' }
    ],
    'phone': [
      { type: 'required', message: 'Phone number is required.' },
      { type: 'minlength', message: 'Phone number must be at least 10 characters long.' },
      { type: 'maxlength', message: 'Phone number cannot be more than 15 characters long.' },
      { type: 'pattern', message: 'Please enter a valid phone number.' }
    ]
  };


  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only letters and numbers' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'matchingPasswords': [
      { type: 'passwordMismatch', message: 'Passwords do not match' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 8 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };
  genders= ['Male', 'Female', 'Other'];
 
  phoneForm = new FormGroup({
    country: new FormControl('', Validators.required),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('')
    ])
  });
  countries = [  
      { name: 'United States', code: 'us', countryCode: '1' }, 
         { name: 'Canada', code: 'ca', countryCode: '1' }, 
            { name: 'Mexico', code: 'mx', countryCode: '52' }, 
               { name: 'India', code: 'in', countryCode: '91' }  ];

  // Define the country-wise regex patterns
  private patterns = {
    us: /^(?:(?:\+|00)1\s*\d{3}|\(\d{3}\))[\s.-]?\d{3}[\s.-]?\d{4}$/,
    ca: /^((\+?1\s*-?)?\(?\d{3}\)?\s*-?)?\d{3}\s*-?\d{4}$/,
    mx: /^(\+52)?\s*(\d{2})?\s*(\d{4})?\s*(\d{4})$/,
    in: /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/
  };

 

  constructor() {  this.phoneForm.get('country').valueChanges.subscribe(country => {
    const pattern = this.patterns[country] || '';
    this.phoneForm.get('phone').setValidators([
      Validators.required,
      Validators.pattern(pattern),
      Validators.maxLength(15)
    ]);
    this.phoneForm.get('phone').updateValueAndValidity();
  });}

  ngOnInit() {

    this.countryPhoneGroup=new FormGroup({
      
    }),

    this.userDetailsForm = new FormGroup({

      countryPhone: new FormGroup({
        country: new FormControl('', Validators.required),
        phone: new FormControl('', Validators.required)
      }),
      'fullname': new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]),
      'birthday': new FormControl('', Validators.required),
      'gender': new FormControl('', Validators.required),
      'country': new FormControl(this.countries[0], Validators.required),
      'phone': new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern(/^[0-9]+$/)]),
      'bio': new FormControl('',Validators.maxLength(256))
    });

    this.accountDetailsForm = new FormGroup({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ])),
      terms: new FormControl(false, Validators.pattern('true')),
      matchingPasswords: new FormGroup({
        password: new FormControl('', Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{3,}')
        ])),
        confirm_password: new FormControl('', Validators.required)
      }, this.passwordMatchValidator)
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirm_password = group.get('confirm_password').value;

    return password === confirm_password ? null : { 'passwordMismatch': true };
  }

  onSubmitAccountDetails() {
    console.log(this.accountDetailsForm.value);
    if (this.accountDetailsForm.valid) {
      console.log(this.accountDetailsForm.value);
    }  else {
      this.accountDetailsForm.markAllAsTouched();
      console.warn('Invalid form');
    }
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}