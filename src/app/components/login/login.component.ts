import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  loginform: FormGroup;

  constructor
    (
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router
    ) {
    this.loginform = this.fb.group({
      email: ['', Validators.required,],
      password: ['', Validators.required,]
    })
  }
  onsubmit() {
    const { email, password }: { email: string; password: string } = this.loginform.value;
    this.auth.login(email, password).subscribe((res) => {
      this.auth.setItem(res.body?.token ?? "")
      this.router.navigate(['/']);
    }, (error: HttpErrorResponse) => {
      console.error(error)
    })
  }
}


