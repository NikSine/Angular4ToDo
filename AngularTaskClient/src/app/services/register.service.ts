import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {
    constructor(private http: Http) {}
    register(username: string, email: string, password: string, passwordconfirm:string){
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/register', JSON.stringify({ name: username, email: email, password: password, c_password:passwordconfirm }), options)
        .map((response: Response) => {
            let serverResponse = response.json();
            console.log(serverResponse);
            if(serverResponse){
              return true;
            } else {
              return false;
            }
        });
    }
}
