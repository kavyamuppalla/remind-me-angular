import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NotificationModel, NotificationsModel} from "./notification/notification.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  public createNotification(notificationModel: NotificationModel) {
    return this.httpClient.post("http://localhost:8080/users/kavya/notifications", notificationModel);
  }

  public getNotifications(userId: string): Observable<NotificationsModel> {
    return this.httpClient.get<NotificationsModel>("http://localhost:8080/users/"+userId+"/notifications");
  }

}
