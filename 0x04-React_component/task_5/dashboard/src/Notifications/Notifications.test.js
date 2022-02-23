import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

it('renders without crashing', () => {
  shallow(<Notifications />);
});

it('menuItem is displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.menuItem').length).toBe(1);
});

it('Notifications is not displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('div.Notifications').length).toBe(0);
});

it('menuItem is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('div.menuItem').length).toBe(1);
});

it('Notifications is displayed when displayDrawer is true', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('div.Notifications').length).toBe(1);
});

it('renders correctly without listNotifications property', () => {
  shallow(<Notifications />);
});

it('renders correctly with empty listNotifications property', () => {
  shallow(<Notifications listNotifications={[]} />);
});

it('renders when listNotifications is no empty', () => {
  const listNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    {
      id: 3,
      html: {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
      },
      type: 'urgent',
    },
  ];
  const wrapper = shallow(
    <Notifications displayDrawer listNotifications={listNotifications} />,
  );
  expect(wrapper.find('div.Notifications').length).toBe(1);
  expect(wrapper.find('div.Notifications').children().length).toBe(3);
});

it('displays No new notification for now when listNotifications is empty', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('div.Notifications').length).toBe(1);
});

it('displays the right message when markAsRead is called on an instance of the component', () => {});

it('when updating the props of the component with the same list, the component doesn’t rerender', () => {
  const listNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    {
      id: 3,
      html: {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
      },
      type: 'urgent',
    },
  ];
  const wrapper = shallow(
    <Notifications displayDrawer listNotifications={listNotifications} />,
  );
  wrapper.setProps({ listNotifications });
  expect(wrapper.find('div.Notifications').length).toBe(1);
  expect(wrapper.find('div.Notifications').children().length).toBe(3);
});

it('when updating the props of the component with a longer list, the component does rerender', () => {
  const listNotifications = [
    { id: 1, value: 'New course available', type: 'default' },
    { id: 2, value: 'New resume available', type: 'urgent' },
    {
      id: 3,
      html: {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
      },
      type: 'urgent',
    },
    { id: 4, value: 'New course available', type: 'default' },
    { id: 5, value: 'New resume available', type: 'urgent' },
    {
      id: 6,
      html: {
        __html: '<strong>Urgent requirement</strong> - complete by EOD',
      },
      type: 'urgent',
    },
  ];
  const wrapper = shallow(
    <Notifications displayDrawer listNotifications={listNotifications} />,
  );
  wrapper.setProps({ listNotifications });
  expect(wrapper.find('div.Notifications').length).toBe(1);
  expect(wrapper.find('div.Notifications').children().length).toBe(3);
});
