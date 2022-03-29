import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return Object.values(notifications)
    .filter((notification) => {
      if (notification.author && notification.author.id)
        return notification.author.id === userId;
    })
    .map((notification) => notification.context);
};

export { getAllNotificationsByUser };
