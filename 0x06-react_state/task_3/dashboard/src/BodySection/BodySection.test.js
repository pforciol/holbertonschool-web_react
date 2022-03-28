import React from 'react';

import BodySection from './BodySection';

import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders correctly the children and one h2 element with corresponding text', () => {
  const wrapper = shallow(
    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>,
  );

  expect(wrapper.find('h2').text()).toEqual('test title');
  expect(wrapper.find('p').text()).toEqual('test children node');
});
