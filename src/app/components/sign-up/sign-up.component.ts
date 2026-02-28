import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  get passwordsMismatch(): boolean {
    return this.password !== this.confirmPassword && this.confirmPassword.length > 0;
  }

  onSubmit(form: NgForm) {
    if (form.invalid || this.passwordsMismatch) return;

    alert('Account Created Successfully 🎉');
    form.reset();
  }
}
