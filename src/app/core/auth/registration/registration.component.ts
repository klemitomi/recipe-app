import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Form, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from '../services/authentication.service';
import type { UserCredential } from 'firebase/auth';

@Component({
  selector: 'app-registration',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {

  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService) {
    this.registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
}

  async onSubmit() {
  if (this.registerForm.valid) {
    try {
      const { email, password } = this.registerForm.value;
      const UserCredential: UserCredential = await this.authenticationService.signup(email, password);
      console.log('User registered successfully:', UserCredential);
    } catch (error) {
    console.error('Error during registration:', error);
  }
}
  }
}
