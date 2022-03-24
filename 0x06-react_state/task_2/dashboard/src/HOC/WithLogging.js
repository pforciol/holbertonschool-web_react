import React from 'react';

const WithLogging = (Child) => {
  const name = Child.displayName || Child.name || 'Component';

  class WithLogging extends React.Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <Child {...this.props} />;
    }
  }

  WithLogging.displayName = `WithLogging(${name})`;
  return WithLogging;
};

export default WithLogging;
