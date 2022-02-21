import React from 'react';
import BodySection from './BodySection';
import './BodySection.css';

class BodySectionWithMarginBottom extends React.Component {
  render() {
    return (
      <div className="bodySectionWithMargin">
        <BodySection {...this.props} />
      </div>
    );
  }
}

export default BodySectionWithMarginBottom;
