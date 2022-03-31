import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
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

it('the API should return the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
  const store = mockStore({});
  fetchMock.restore();

  fetchMock.get('/login-success.json', '{}');

  return store.dispatch(loginRequest('email', 'password')).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'LOGIN',
      user: { email: 'email', password: 'password' },
    });
    expect(actions[1]).toEqual({ type: 'LOGIN_SUCCESS' });
  });
});

it('the API should return the right response, the store received two actions LOGIN and LOGING_SUCCESS', () => {
  const store = mockStore({});
  fetchMock.restore();

  fetchMock.get('/login-success.json', 500);

  return store.dispatch(loginRequest('email', 'password')).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'LOGIN',
      user: { email: 'email', password: 'password' },
    });
    expect(actions[1]).toEqual({ type: 'LOGIN_FAILURE' });
  });
});
