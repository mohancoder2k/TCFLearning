import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  name = '';

  constructor(private router: Router, private auth: AuthService) {
    if (!auth.isLoggedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.name = this.auth.getUserName();  // <-- Load name here
    }
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
