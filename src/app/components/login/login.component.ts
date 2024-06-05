import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    ) {
    this.loginform = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  onsubmit() {
    const {email,password} = this.loginform.value
    this.auth.login(email,password).subscribe((res)=>{
      console.log(res)
    })
  }
}
