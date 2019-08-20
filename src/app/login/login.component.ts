import { Component, OnInit } from '@angular/core';
import {LoginModel} from "./login.model";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel: LoginModel = new LoginModel();
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("clicked == " + this.loginModel.userId + " === " + this.loginModel.password);
    this.loginService.createLogin(this.loginModel).subscribe(
        resp => {
          console.log("Call Successful");
          this.router.navigate(['/notifications']);
        },
        failure => {
          console.log("Call Failed");
        }
    )
  }

}
