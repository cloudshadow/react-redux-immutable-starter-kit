import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }
  render() {
    // createPortal can insert dom to any element
    return createPortal(
      this.props.children,
      this.el //any element
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;