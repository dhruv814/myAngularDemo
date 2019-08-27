import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../base/services/login.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  adminUser = "dhruv";
  adminPassword = "admin";

  constructor(private formBuilder: FormBuilder, private route: Router,private loginService : LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    } else {
      if (this.f.username.value === this.adminUser && this.f.password.value === this.adminPassword) {
        this.loginService.setLogin(true);
        this.route.navigate(["/admin/dashboard"]);
      } else
        return;
    }

  }

}
