import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginModel} from "./login/login.model";
import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import {UserModel} from "./user/user.model";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public createLogin(loginModel: LoginModel): Observable<any> {
    return this.httpClient.post<UserModel>("http://localhost:8080/users/kavya/login", loginModel)
        .pipe(
            map(user => {
              console.log("User ---- " + user);
              if (user) {
                localStorage.setItem('currentUser', user.userId);
              }

              return user;
            })
        );
  }
}
