import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})

export class HomeComponent{
  constructor(private router: Router) {}
}
