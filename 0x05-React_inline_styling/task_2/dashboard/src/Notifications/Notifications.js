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
        <div className={('menuItem', css(styles.menuItem))}>
          Your notifications
        </div>
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
                <ul style={{ marginBottom: '0' }}>
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

const styles = StyleSheet.create({
  notifications: {
    position: 'absolute',
    right: '0',
    top: '4vh',
    margin: '1vh 2vh',
    padding: '2vh 2vw',
    border: '2px dashed #e1003c',
    width: '45vw',
  },

  menuItem: {
    textAlign: 'end',
    position: 'absolute',
    right: '0',
    margin: '2vh',
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
