import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { AuthGoogleService } from '../auth/auth-google.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements AfterViewInit {
  private authGoogleService = inject(AuthGoogleService);
  private router = inject(Router);

  profile: any;
  folderName = '';
  showProfile = false;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: ');
    setTimeout(() => {
      this.profile = this.authGoogleService.getProfile();
      console.log('this.profile: ', this.profile);
      this.showProfile = true;
    }, 2000);
  }

  logout() {
    this.authGoogleService.logout();
    this.router.navigate(['/login']);
  }

  createFolder() {
    if (this.folderName) {

    }
  }
}
