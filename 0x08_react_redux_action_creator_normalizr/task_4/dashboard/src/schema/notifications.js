import { normalize, schema } from 'normalizr';

import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const _notifications = normalizedNotifications.entities.notifications;
  const _messages = normalizedNotifications.entities.messages;

  const userNotifications = [];

  for (const id in _notifications) {
    if (_notifications[id].author === userId) {
      userNotifications.push(_messages[_notifications[id].context]);
    }
  }

  return userNotifications;
};

const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  },
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

const normalizedNotifications = normalize(notifications.default, [
  notification,
]);

export { getAllNotificationsByUser, normalizedNotifications };
