import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInAnimation } from '../animations/index';
import { AuthenticationService } from '../services/index';
import { MessageService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['../app.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    success = '';

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService, private messageService: MessageService) { }

    ngOnInit() {
        // reset login status
        this.displaySuccess(this.messageService.getMessage());
        this.authenticationService.logout();
    }

    displaySuccess(success:string){
      this.success = success;
      setTimeout(()=>{ this.success = '' }, 3000);
    }

    displayError(error:string){
      this.error = error;
      setTimeout(()=>{ this.error = '' }, 3000);
    }

    login() {
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate(['/']);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            }, err => this.displayError('Username or password is incorrect')
            );
    }
}
