import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorService } from '../services/errorService';
import { TokenService } from '../services/TokenService';

@Injectable()
export class ErrorHttpInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService,
              private readonly tokenService: TokenService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();

    if (token && this.sameOrigin(req)) {
      req = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${token}`)
      });
    }

    return next.handle(req).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse) {
          this.handleHttpError(error);
        }
        return throwError(error);
      })
    );
  }

  private sameOrigin(req: HttpRequest<any>) {
    const isRelative = !req.url.startsWith("http://") || !req.url.startsWith("https://");
    return req.url.startsWith(location.origin) || isRelative;
  }

  private handleHttpError(error: HttpErrorResponse) {

    console.error('HTTP error:', error);
    this.errorService.handleHttpError(error);
  }
}

