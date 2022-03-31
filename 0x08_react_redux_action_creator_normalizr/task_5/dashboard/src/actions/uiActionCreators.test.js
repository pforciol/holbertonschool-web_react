import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

it('login will return the right value called with email and password', () => {
  expect(login('email', 'password')).toEqual({
    type: 'LOGIN',
    user: { email: 'email', password: 'password' },
  });
});

it('logout will return the right value', () => {
  expect(logout()).toEqual({
    type: 'LOGOUT',
  });
});

it('displayNotificationDrawer will return the right value', () => {
  expect(displayNotificationDrawer()).toEqual({
    type: 'DISPLAY_NOTIFICATION_DRAWER',
  });
});

it('hideNotificationDrawer will return the right value', () => {
  expect(hideNotificationDrawer()).toEqual({
    type: 'HIDE_NOTIFICATION_DRAWER',
  });
});
