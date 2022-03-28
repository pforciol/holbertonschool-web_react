import React from 'react';

import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

import icon from '../assets/close-icon.png';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
      displayDrawer,
      listNotifications,
    } = this.props;

    return (
      <React.Fragment>
        <div
          id="menuItem"
          className={css([styles.menuItem])}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={('Notifications', css(styles.notifications))}>
            <button
              id="menuClose"
              aria-label="Close"
              style={{
                float: 'right',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              onClick={handleHideDrawer}
            >
              <img
                src={icon}
                alt="Notification close icon"
                style={{ width: '1em', height: '1em' }}
              />
            </button>
            {listNotifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <ul
                  style={{ marginBottom: '0' }}
                  className={css(styles.minList)}
                >
                  {listNotifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      id={notification.id}
                      markAsRead={markNotificationAsRead}
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
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
