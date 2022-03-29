import { normalize, schema } from 'normalizr';

import * as notifications from '../../../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  return notifications.default
    .filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
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
