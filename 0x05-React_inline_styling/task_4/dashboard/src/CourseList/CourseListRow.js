import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={css(styles.default)}>
      {isHeader ? (
        textSecondCell == null ? (
          <th colSpan={2} className={css(styles.header)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.header)}>{textFirstCell}</th>
            <th className={css(styles.header)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#deb5b545',
    borderBottom: '2px solid lightgray',
    padding: '0.2vh',
  },

  default: {
    backgroundColor: '#f5f5f5ab',
  },
});

CourseListRow.desfaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
