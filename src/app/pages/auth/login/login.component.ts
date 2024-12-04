import { Component, inject } from '@angular/core';
import { AuthGoogleService } from '../auth-google.service';

@Component({
    selector: 'app-login',
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

  private authService = inject(AuthGoogleService);

  signInWithGoogle() {
    this.authService.login()
  }
}
