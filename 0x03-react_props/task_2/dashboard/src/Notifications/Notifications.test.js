import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('should contain three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem')).toHaveLength(3);
});

it('should contain a paragraph with the correct text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('NotificationItem').first().html()).toEqual(
    '<li data-notification-type="default">New course available</li>',
  );
});
