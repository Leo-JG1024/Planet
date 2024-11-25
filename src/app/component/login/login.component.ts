import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  showPassword: boolean = false;

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      alert('Inicio de sesión exitoso');
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos';
    }
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

}
