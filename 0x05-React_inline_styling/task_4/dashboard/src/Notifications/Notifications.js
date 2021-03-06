import React from 'react';
import icon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications > this.props.listNotifications;
  }

  render() {
    return (
      <React.Fragment>
        <div className={css([styles.menuItem])}>Your notifications</div>
        {this.props.displayDrawer && (
          <div className={('Notifications', css(styles.notifications))}>
            <button
              aria-label="Close"
              style={{
                float: 'right',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={() => {
                console.log('Close button has been clicked');
              }}
            >
              <img
                src={icon}
                alt="Notification close icon"
                style={{ width: '1em', height: '1em' }}
              />
            </button>
            {this.props.listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul
                  style={{ marginBottom: '0' }}
                  className={css(styles.minList)}
                >
                  {this.props.listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      id={notification.id}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

const opacity = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const bounce = {
  '0%': {
    transform: 'translateY(0)',
  },

  '50%': {
    transform: 'translateY(-5px)',
  },

  '100%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  minList: {
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },

  notifications: {
    position: 'absolute',
    right: '0',
    top: '1vh',
    margin: '1vh 2vh',
    padding: '2vh 2vw',
    border: '2px dashed #e1003c',
    width: '45vw',
    backgroundColor: '#fff8f8',

    '@media (max-width: 900px)': {
      position: 'absolute',
      width: '100vw',
      height: '100vh',
      border: 'none',
      padding: '2vh',
      margin: '0',
      backgroundColor: '#fff',
      top: '0',
      fontSize: '20px',
    },
  },

  menuItem: {
    textAlign: 'end',
    position: 'absolute',
    right: '0',
    margin: '2vh',

    ':hover': {
      cursor: 'pointer',
      animationName: [opacity, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: 3,
    },
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
