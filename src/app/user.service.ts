import { Injectable } from '@angular/core';
import {UserModel} from "./user/user.model";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  //calling API

  public createUser(userModel: UserModel): Observable<any> {
    return this.httpClient.post("http://localhost:8080/users",userModel);
  }
}
