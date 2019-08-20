export class NotificationModel {
    public message: string;
    public notificationType: string;
    public notificationTime: Date;
    public notificationTarget: string;

}

export class NotificationsModel {
    public userId: string;
    public notificationJsons: NotificationModel[];
}
