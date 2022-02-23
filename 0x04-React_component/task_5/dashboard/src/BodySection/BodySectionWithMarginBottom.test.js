import React from 'react';
import { shallow } from 'enzyme';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

it('renders correctly the BodySection component and contains the right props', () => {
  const wrapper = shallow(
    <BodySectionWithMarginBottom title="test title">
      <p>test children node</p>
    </BodySectionWithMarginBottom>,
  );

  const div = wrapper.find('div.bodySectionWithMargin');
  expect(div.length).toEqual(1);
});
