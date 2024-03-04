import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { TokenService } from "./TokenService";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private currentUserRole: string = '';

  constructor(private router: Router,
              ) {}

  checkUserRole(token: string): void {
    try {
      const tokenService = new TokenService();
      const decodedToken = tokenService.getDecodedToken();
      const role = decodedToken.role;
      console.log('Decoded Token:', decodedToken);

      if (role === 'Admin' || role === 'User') {
        this.isAuthenticated = true;
        this.currentUserRole = role;
      } else {
        this.isAuthenticated = false;
        this.currentUserRole = '';
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      this.isAuthenticated = false;
      this.currentUserRole = '';
    }
  }
  logout(): void {
    this.isAuthenticated = false;
    this.currentUserRole = '';
    this.router.navigate(['']);
  }


  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }


  getCurrentUserRole(): string {
    return this.currentUserRole;
  }
}
