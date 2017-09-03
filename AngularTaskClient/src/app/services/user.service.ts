import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService } from '../services/index';
import { User } from '../models/index';

@Injectable()
export class UserService {
    constructor(
      private http: Http,
      private authenticationService: AuthenticationService) {
    }

    getUser(): Observable<User[]> {
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/details', options)
        .map((response: Response) => response.json());
    }
}