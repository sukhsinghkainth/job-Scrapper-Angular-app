import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/interface/interfaces';
import { AuthService } from 'src/app/services/authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  // strictly typed forms 
  loginform = this.fb.nonNullable.group({
    email: ["", Validators.required],
    password: ['', Validators.required]
  })
  constructor
    (
      private fb: FormBuilder,
      private auth: AuthService,
      private router: Router
    ) { }
  onsubmit() {
    const { email, password } = this.loginform.value as Ilogin;
    this.auth.login(email, password).subscribe({
      next: (res) => {
        // Handle successful response here
        if (res.body?.token) {
          this.auth.setItem(res.body.token);
          this.router.navigate(['/']);
        }
        else {
          alert("Invalid Credentials");
        }
      },
      error: (error: HttpErrorResponse) => {
        // Handle error here
        console.error(error);
      }
    });
  }
}


