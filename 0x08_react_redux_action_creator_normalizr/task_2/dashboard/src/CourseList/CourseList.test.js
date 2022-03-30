import React from 'react';

import CourseList from './CourseList';

import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

it('renders without crashing', () => {
  shallow(<CourseList listCourses={[]} />);
});

it('renders without crashing', () => {
  shallow(<CourseList />);
});
