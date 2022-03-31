import React from 'react';

import Footer from './Footer';

import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('should contain at least Copyright', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('p').text()).toContain('Copyright');
});

it('a link is not displayed when the user is not logged in', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.find('a')).toHaveLength(0);
});
