import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loginError: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  login(): void {
    const { email, password } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: () => {
        this.router.navigate(['/home']);
      },
      error: (err) => {
        this.loginError = 'Invalid email or password';
        console.error('Login error:', err);
      }
    });
  }
}