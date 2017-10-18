import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
 
 intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let auth_value = sessionStorage.getItem("Authorization");
        if(auth_value!=null){
            req = req.clone({headers:req.headers.append('Authorization',auth_value)});
        }
        return next.handle(req);
    }
}