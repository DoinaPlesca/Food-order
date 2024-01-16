import { Injectable } from "@angular/core";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class TokenService {
  private readonly storage: Storage = window.sessionStorage;
  private jwtHelper: JwtHelperService = new JwtHelperService();

  setToken(token: string) {
    this.storage.setItem("token", token);
  }

  getToken() {
    return this.storage.getItem("token");
  }

  clearToken() {
    this.storage.removeItem("token");
  }

  getDecodedToken() {
    const token = this.getToken();
    if (token) {
      try {
        return this.jwtHelper.decodeToken(token);
      } catch (error) {
        console.error('Error decoding token:', error);
        return null;
      }
    }
    return null;
  }
}
