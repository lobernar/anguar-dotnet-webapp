import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthenticationComponent } from './authentication-component/authentication-component';

@Component({
  selector: 'app-root',
  imports: [AuthenticationComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-dotnet-app');
}
