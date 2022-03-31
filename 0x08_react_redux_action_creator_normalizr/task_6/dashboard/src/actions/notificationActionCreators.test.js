import { NotificationTypeFilters } from './notificationActionTypes';
import {
  markAsRead,
  setNotificationFilter,
} from './notificationActionCreators';

it('markAsRead returns the right value with index 1', () => {
  expect(markAsRead(1)).toEqual({
    type: 'MARK_AS_READ',
    index: 1,
  });
});

it('setNotificationFilter returns the right value with DEFAULT filter', () => {
  expect(setNotificationFilter(NotificationTypeFilters.DEFAULT)).toEqual({
    type: 'SET_TYPE_FILTER',
    filter: 'DEFAULT',
  });
});
