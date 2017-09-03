import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from '../models/index';
import { UserService } from '../services/index';
import { fadeInAnimation } from '../animations/index';

@Component({
    moduleId: module.id,
    templateUrl: 'user.component.html',
    styleUrls: ['../app.component.css'],
    animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})

export class UserComponent implements OnInit {
    user: User[] = [];
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.userService.getUser()
            .subscribe(user => {
                Object.keys(user).forEach( key => {
                  this.user.push(user[key]);
                });
            });
    }
}
