import React from 'react';

import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { type, markAsRead, id, html, value } = this.props;
    const liStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        onClick={() => markAsRead(id)}
        {...(this.props &&
          html && {
            dangerouslySetInnerHTML: html,
          })}
        className={css([liStyle, styles.item])}
        data-notification-type={type}
      >
        {!html ? value : null}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    '@media (max-width: 900px)': {
      listStyle: 'none',
      padding: '10px 8px',
      borderBottom: '1px solid black',
    },
  },

  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
  id: '',
  html: null,
  value: '',
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  markAsRead: PropTypes.func,
};

export default NotificationItem;
