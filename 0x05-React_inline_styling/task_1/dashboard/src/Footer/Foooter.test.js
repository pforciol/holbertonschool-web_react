import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
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
