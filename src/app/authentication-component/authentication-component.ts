import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-authentication-component',
  imports: [FormsModule],
  templateUrl: './authentication-component.html',
  styleUrl: './authentication-component.css',
})
export class AuthenticationComponent {
  loginUsername = '';
  loginPassword = '';
  registerEmail = '';
  registerUsername = '';
  registerPassword = '';

  handleLogin() {

  }

  handleRegister() {

  }
}
