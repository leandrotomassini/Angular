import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'login-component',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);


  public myForm: FormGroup = this.fb.group({
    email: ['leandro@google.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });


  login() {

    const { email, password } = this.myForm.value;

    this.authService.login(email, password)
      .subscribe(success => {
        console.log(success)
      })
  }
}
