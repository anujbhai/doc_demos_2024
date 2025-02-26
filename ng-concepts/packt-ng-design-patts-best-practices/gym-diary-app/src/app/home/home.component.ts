import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthService } from '../login/auth.service';
import { LoadingOverlayComponent } from '../loading-overlay/loading-overlay.component';
import { LoadService } from '../loading-overlay/load.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    LoadingOverlayComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private authService = inject(AuthService);
  loadService = inject(LoadService);
  private router = inject(Router);

  logout() {
    this.authService.logout();
    this.router.navigate(['./login']);
  }
}
