import { selectCourse, unselectCourse } from './courseActionCreators';

it('selectCourse will return the right value called with index 1', () => {
  expect(selectCourse(1)).toEqual({
    type: 'SELECT_COURSE',
    index: 1,
  });
});

it('unselectCourse will return the right value called with index 1', () => {
  expect(unselectCourse(1)).toEqual({
    type: 'UNSELECT_COURSE',
    index: 1,
  });
});
