import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-signup',

  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  selectedRole: 'student' | 'teacher' | null = null;

  constructor(private router: Router) {}

  selectRole(role: 'student' | 'teacher') {
    this.selectedRole = role;
  }

  startNow() {
    if (this.selectedRole) {
      if (this.selectedRole === 'student') {
        this.router.navigate(['/signup/student']);
      } else if (this.selectedRole === 'teacher') {
        this.router.navigate(['/signup/teacher']);
      }
    }
  }
}
