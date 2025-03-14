import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  form:FormGroup;

  constructor(private fb:FormBuilder, 
               private authService: AuthService, 
               private router: Router) {

      this.form = this.fb.group({
          email: ['',Validators.required],
          password: ['',Validators.required]
      });
  }

  login() {
      const val = this.form.value;
      if (val.email && val.password) {
        try {
          // await this.authService.login(val.email, val.password);
          // this.authService.testGetRequest();
          this.authService.login(val.email, val.password);
          console.log("User is logged in");
          // Navigate to the homepage after login
          this.router.navigateByUrl('/');
        } catch (error) {
          console.error("Login failed:", error);
          // Handle the error (e.g., show an error message)
        }
      }
  }
}
