import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  shallow(<App />);
});

it('should contain the Notifications component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Notifications')).toHaveLength(1);
});

it('should contain the Header component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header')).toHaveLength(1);
});

it('should contain the Login component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Login')).toHaveLength(1);
});

it('should contain the Footer component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Footer')).toHaveLength(1);
});

it('CourseList is not displayed', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('CourseList')).toHaveLength(0);
});

it('isLoggedIn is true, Login is not included, but CourseList yes', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ user: { isLoggedIn: true } });
  expect(wrapper.find('Login')).toHaveLength(0);
  expect(wrapper.find('CourseList')).toHaveLength(1);
});

it('default state for displayDrawer is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('displayDrawer')).toBe(false);
});

it('after calling handlerDisplayDrawer, displayDrawer state is true', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().handleDisplayDrawer();
  expect(wrapper.state('displayDrawer')).toBe(true);
});

it('after calling handlerHideDrawer, displayDrawer state is false', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ displayDrawer: true });
  wrapper.instance().handleHideDrawer();
  expect(wrapper.state('displayDrawer')).toBe(false);
});

it('logIn function updates the state', () => {
  const wrapper = shallow(<App />);
  wrapper.instance().logIn('toto', 'titi');
  expect(wrapper.state('user')).toEqual({
    email: 'toto',
    password: 'titi',
    isLoggedIn: true,
  });
});

it('logOut function updates the state', () => {
  const wrapper = shallow(<App />);
  wrapper.setState({ user: { isLoggedIn: true } });
  wrapper.instance().logOut();
  expect(wrapper.state('user')).toEqual({});
});
