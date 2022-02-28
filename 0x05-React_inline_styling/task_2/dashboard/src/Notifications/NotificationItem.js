import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const type = this.props.type;
    const liStyle = type === 'urgent' ? styles.urgent : styles.default;

    return (
      <li
        onClick={() => this.props.markAsRead(this.props.id)}
        {...(this.props &&
          this.props.html && {
            dangerouslySetInnerHTML: this.props.html,
          })}
        className={css(liStyle)}
        data-notification-type={type}
      >
        {!this.props.html ? this.props.value : null}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },

  urgent: {
    color: 'red',
  },
});

NotificationItem.defaultProps = {
  type: 'default',
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
