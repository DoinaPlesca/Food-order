import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./AuthService";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRole = next.data['expectedRole'];
    const currentUserRole = this.authService.getCurrentUserRole();

    //console.log('AuthGuard - Expected Role:', expectedRole);
    //console.log('AuthGuard - Current User Role:', currentUserRole);

    if (this.authService.isAuthenticatedUser() && (currentUserRole === expectedRole || currentUserRole === '')) {
      console.log('AuthGuard - Access granted');
      return true;
    } else {
      console.log('AuthGuard - Access denied');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
