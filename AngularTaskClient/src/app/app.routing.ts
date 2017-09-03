import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index'
import { HomeComponent } from './home/index';
import { TaskComponent } from './task/index';
import { UserComponent } from './user/index';
import { AuthGuard } from './services/index';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '',
      component: HomeComponent,
      canActivate: [AuthGuard],
      children:[
        { path: 'userinfo', component: UserComponent },
        { path: 'task', component: TaskComponent}
    ] },
    { path: 'register', component: RegisterComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
