import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpServiceService } from '../base/services/http-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  passwordRegex = /(?=^.{8,50}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/;
  constructor(private formBuilder: FormBuilder,private httpService: HttpServiceService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required]]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    console.log('jasdfj;ksdfj;');
    
    this.submitted = true;
    console.log('Invalid: ', this.registerForm.invalid);
    console.log('Valid: ', this.registerForm.valid);
    console.log(this.registerForm.controls);
    
    // stop here if form is invalid
    if (!this.registerForm.valid) {
      return;
    } else {
      console.log(this.registerForm.value);
      this.httpService.addUser(this.registerForm.value);
    }

  }

   passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if(control.value=='')
        return;
      if(this.passwordRegex.test(control.value)){
        return {'passwordError':false};
      }else{
        return {'passwordError': true};
      }
    };
  }
}
