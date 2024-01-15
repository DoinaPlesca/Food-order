import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUserRole: string = '';

  constructor(private router: Router) {}

  login(username: string, password: string, role: string): void {


    // Example: For demonstration purposes
    if (username === 'admin' && password === 'admin' && role === 'admin') {
      this.isAuthenticated = true;
      this.currentUserRole = 'admin';
    } else if (username === 'user' && password === 'user' && role === 'user') {
      this.isAuthenticated = true;
      this.currentUserRole = 'user';
    } else {
      this.isAuthenticated = false;
      this.currentUserRole = '';
    }
  }


  logout(): void {
    this.isAuthenticated = false;
    this.currentUserRole = '';
    this.router.navigate(['/login']);
  }


  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }


  getCurrentUserRole(): string {
    return this.currentUserRole;
  }
}
