import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  login: Login = new Login();
  constructor(private service: AuthService, private router: Router,
    private http: HttpClient, private toastr: ToastrService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      uname: ['', [Validators.required]],
      pass: ['', [Validators.required]],
    })
  }
  get formControl() {
    return this.loginForm.controls;
  }
  logins() {
    console.log(this.loginForm.value);
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      this.toastr.warning("invalid username & password");
    }
    else {
      this.router.navigateByUrl('/assets');
    }
  }

}
