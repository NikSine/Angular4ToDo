import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService } from '../services/index';
import { Task } from '../models/index';

@Injectable()
export class TaskService {
    constructor(
      private http: Http,
      private authenticationService: AuthenticationService) {
    }

    getTasks(): Observable<Task[]> {
      let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
      let options = new RequestOptions({ headers: headers });
      return this.http.get('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/task', options)
        .map((response: Response) => response.json());
    }

    createTask(text:string){
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/task', JSON.stringify({text:text}), options)
        .map((response: Response) => {
          let serverResponse = response.json();
          if(serverResponse){
              return serverResponse;
          } else {
              return false;
          }
        });
    }

    doneTask(id:number){
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/task/done', JSON.stringify({id:id}), options)
        .map((response: Response) => {
          let serverResponse = response.json();
          if(serverResponse){
            return serverResponse;
          } else {
            return false;
          }
        });
    }

    removeTask(id:number){
      let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
      let options = new RequestOptions({ headers: headers });
      return this.http.post('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/task/remove', JSON.stringify({id:id}), options);
                // .map((response: Response) => {
                //     let serverResponse = response.json();
                //     if(serverResponse){
                //         return serverResponse;
                //     } else {
                //         return false;
                //     }
                // });
      }

      updateTask(id:number, text:string){
        let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.authenticationService.token['success']['token'] });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://127.0.0.1/Angular4ToDo/LaravelTaskApi/api/task/update', JSON.stringify({id:id, text:text}), options);
                    // .map((response: Response) => {
                    //     let serverResponse = response.json();
                    //     if(serverResponse){
                    //         return serverResponse;
                    //     } else {
                    //         return false;
                    //     }
                    // });
      }
}
