import React from 'react';

import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';

import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';

import '../utils/reset.css';

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

const listNotifications = [
  { id: 1, value: 'New course available', type: 'default' },
  { id: 2, value: 'New resume available', type: 'urgent' },
  { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: this.logOut,
      listNotifications: listNotifications,
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  handleKeyDown = (e) => {
    if (e.key === 'h' && e.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({ user: {} });
  };

  markNotificationAsRead = (id) => {
    const notifications = this.state.listNotifications.filter(
      (item) => item.id !== id,
    );
    this.setState({ listNotifications: notifications });
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { displayDrawer, user, logOut, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user: user, logOut: logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className="App">
          <Header />
          <div className={('App-body', css(styles.AppBody))}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title="News from the school">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                pharetra commodo sem sit amet rutrum. Nam tempus elit non
                sagittis varius. Etiam sed turpis scelerisque, commodo risus
                rhoncus, convallis dolor. Vestibulum nec nisi ipsum. Interdum et
                malesuada fames ac ante ipsum primis in faucibus. Nunc nunc leo,
                bibendum eget pulvinar vitae, luctus id enim. Quisque iaculis
                dapibus pellentesque. Cras maximus vulputate est eu tempus.
                Praesent facilisis lacus eget lectus dignissim, condimentum
                ultricies urna sagittis. Maecenas cursus mauris sed risus
                commodo semper. Morbi sed pellentesque justo. In risus lorem,
                viverra pellentesque ante id, rhoncus rhoncus felis. Fusce porta
                iaculis justo, finibus malesuada augue consequat vitae. Fusce
                dignissim orci dignissim lobortis suscipit. Class aptent taciti
                sociosqu ad litora torquent per conubia nostra, per inceptos
                himenaeos. <br />
                <br />
                Nullam molestie bibendum mi. Nullam gravida urna nulla. Cras
                feugiat ligula augue, nec luctus nunc tincidunt et. Phasellus
                venenatis velit eu massa sollicitudin mattis. Nunc pretium mi ut
                eros vehicula tincidunt. Nunc libero leo, tincidunt sed porta
                sed, auctor eu leo. Mauris egestas risus non elit egestas, sit
                amet laoreet nisi dictum. Morbi aliquet, orci eu sollicitudin
                venenatis, risus nibh tristique tellus, sed pharetra lorem elit
                vel magna. Cras egestas eros in nibh congue ornare. Sed vel
                semper metus. Vestibulum efficitur augue erat. Sed placerat at
                enim ut blandit. Vestibulum at dolor cursus, ultrices leo eu,
                pulvinar nibh. In scelerisque et odio nec sollicitudin. <br />
                <br />
                Integer fringilla sapien id viverra ullamcorper. Pellentesque
                quis urna convallis, varius orci nec, auctor sem. Duis
                pellentesque metus vel fermentum pulvinar. Integer mollis nisl
                sit amet mi tempus commodo. Proin nec rhoncus metus, vitae
                convallis odio. Nulla quis nisl porta lectus vulputate
                ullamcorper a vel nibh. Vivamus luctus nulla ut est elementum,
                ut facilisis ligula porta. Donec nec enim auctor, sodales nibh
                vitae, tincidunt nulla.
              </p>
            </BodySection>
          </div>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  AppBody: {
    minHeight: '75vh',
    padding: '50px',
  },
});

export default App;
