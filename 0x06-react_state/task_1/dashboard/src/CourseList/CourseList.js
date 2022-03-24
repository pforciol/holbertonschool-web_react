import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseList = ({ listCourses }) => {
  return (
    <table id="CourseList" className={css(styles.courseList)}>
      {listCourses.length > 0 ? (
        <>
          <thead>
            <CourseListRow
              textFirstCell={'Available courses'}
              isHeader={true}
            />
            <CourseListRow
              textFirstCell={'Course name'}
              textSecondCell={'Credit'}
              isHeader={true}
              style={{ borderBottom: '2px solid lightgray', padding: '0.2vh' }}
            />
          </thead>
          <tbody>
            {listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        </>
      ) : (
        <tbody>
          <CourseListRow textFirstCell={'No course available yet'} />
        </tbody>
      )}

      <tbody></tbody>
    </table>
  );
};

const styles = StyleSheet.create({
  courseList: {
    border: '1px solid lightgray',
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: '0.5vh',
    lineHeight: '1.2em',
  },
});

CourseList.defaultProps = {
  listCourses: [],
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
