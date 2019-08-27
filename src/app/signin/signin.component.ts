import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../base/services/login.service';
import { HttpServiceService } from '../base/services/http-service.service';
import { filter, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  users: any[];
  currentUser: any;
  adminUser = "dhruv";
  adminPassword = "admin";
  
  
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private loginService: LoginService,
    private httpService: HttpServiceService
  ){}

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
      this.httpService.getUser().pipe(
        map(data => {
          return data.filter(element => element['username'] === this.f.username.value && element['password'] === this.f.password.value)
        })
        , map(data => {
          if (data.length > 0) {
            return data[0];
          }
        })
      )
        .subscribe(res => {
          if (res) {
            this.loginService.setLogin(true);
            localStorage.setItem('isLoggedIn','true');
            localStorage.setItem('currentUser',this.f.username.value);
            this.route.navigate(["/admin/dashboard"]);
          }
          else {
            this.route.navigate(["/signin"]);
          }
        });

    }

  }

}
