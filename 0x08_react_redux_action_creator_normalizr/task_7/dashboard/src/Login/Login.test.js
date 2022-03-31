import React from 'react';

import Login from './Login';

import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  shallow(<Login />);
});

it('should render 3 input and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input')).toHaveLength(3);
  expect(wrapper.find('label')).toHaveLength(2);
});

it('submit button must be disabled by default', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.find('input').at(2).prop('disabled')).toBe(true);
});

it('submit button must be enabled when email and password changes', () => {
  const wrapper = shallow(<Login />);
  wrapper
    .find('input')
    .at(0)
    .simulate('change', { target: { value: 'test' } });
  wrapper
    .find('input')
    .at(1)
    .simulate('change', { target: { value: 'test' } });
});
