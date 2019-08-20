import { Component, OnInit } from '@angular/core';
import {NotificationModel, NotificationsModel} from "./notification.model";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationModel: NotificationModel = new NotificationModel();
  notificationModels: NotificationModel[];
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
      this.notificationService.getNotifications(localStorage.getItem("currentUser")).subscribe(
          notificationsJson => {
              console.log("Get Notifications successful");
              this.notificationModels = notificationsJson.notificationJsons;
          },
          failure => {
              console.log("Get Notifications failed");
          }
      );
  }
  onSubmit() {
    this.notificationService.createNotification(this.notificationModel).subscribe(
        resp => {
          console.log("Call Successful");


        },
        failure => {
          console.log("Call failed");
        }
    )
  }
}
