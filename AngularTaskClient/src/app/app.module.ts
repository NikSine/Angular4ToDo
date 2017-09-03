import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TaskComponent } from './task/task.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthenticationService } from './services/auth.service';
import { MessageService } from './services/message.service'
import { HttpModule } from '@angular/http';
import { LoginComponent } from './login/index';
import { routing }        from './app.routing';
import { FormsModule }   from '@angular/forms';
import { TaskService } from './services/task.service';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TaskComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    // RouterModule.forRoot(
    //   appRoutes,
    //   { enableTracing: true } // <-- debugging purposes only
    // ),
    routing,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [AuthGuard, AuthenticationService, TaskService, UserService, RegisterService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
