import { Component, OnInit } from '@angular/core';
import {UserModel} from "./user.model";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userModel: UserModel = new UserModel();
  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log("submit clicked == " + JSON.stringify(this.userModel));
    this.userService.createUser(this.userModel).subscribe(
        resp => {
          console.log("Call Successful");


        },
        failure => {
          console.log("Call failed");
        }
    )
  }

}
