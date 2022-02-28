import React from 'react';
import { shallow, mount } from 'enzyme';
import WithLogging from './WithLogging';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('console.log is called on every mount and unmount with the right component whem wrapped element is pure html', () => {
  console.log = jest.fn();

  const HOC = WithLogging(() => <p />);
  const wrapper = shallow(<HOC />);

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledTimes(2);
  expect(console.log).toHaveBeenCalledWith(
    'Component Component is going to unmount',
  );
});

it('console.log is called on every mount and unmount with the right component whem wrapped element is Login component', () => {
  console.log = jest.fn();

  const HOC = WithLogging(() => <Login />);
  const wrapper = shallow(<HOC />);

  expect(console.log).toHaveBeenCalledTimes(1);
  expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
  wrapper.unmount();
  expect(console.log).toHaveBeenCalledTimes(2);
  expect(console.log).toHaveBeenCalledWith(
    'Component Component is going to unmount',
  );
});
