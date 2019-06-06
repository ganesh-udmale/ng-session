import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  email = 'eve.holt@reqres.in';
  password = 'cityslicka';


  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router, private route: ActivatedRoute) {
    if (this.loginService.checkCurrentUser()) {
      this.router.navigate(['/userlist']);
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['eve.holt@reqres.in', Validators.required],
      password: ['cityslicka', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loginService.login(this.f.email.value, this.f.password.value)
      .subscribe(
            data => {
              this.router.navigate(['/userlist']);
            },
            error => {
              console.log('error');
        });


  }

}
