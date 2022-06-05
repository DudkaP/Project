import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWE4NTdjZDg3ZjE5YjcyNGFlNmI2YzNiZGQ3NDlkNyIsInN1YiI6IjYyOTM0M2QzM2ZmMmRmMThjOThhM2NjOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ImdWysM3SSs15OvQ_jhrEVEiqIUANjUDsnQMmWRL7PQ'

  constructor() {
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this._token}`
      }
    })
    return next.handle(request)
  }

}
