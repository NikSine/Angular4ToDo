import { Component, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/index'
import { Http, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../animations/index';
import { RegisterService } from '../services/index';
import { MessageService } from '../services/index';

@Component({
  selector: 'app-root',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})

export class RegisterComponent{
  model: any = {};
  loading = false;
  error = '';
  constructor(private router: Router, private registerService: RegisterService,
     private messageService: MessageService ) { }
  register() {
      this.registerService.register(this.model.username, this.model.email,
        this.model.password, this.model.passwordconfirm)
          .subscribe(result => {
              if (result === true) {
                  this.messageService.sendMessage('You are registered');
                  this.router.navigate(['/']);
              } else {
                  this.error = 'Error';
              }
          });
        }
}
