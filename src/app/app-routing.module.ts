import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserModel} from "./user/user.model";
import {UserComponent} from "./user/user.component";
import {LoginComponent} from "./login/login.component";
import {NotificationComponent} from "./notification/notification.component";
import {AuthGuard} from "./auth.guard";


const routes: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'notifications', component: NotificationComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

