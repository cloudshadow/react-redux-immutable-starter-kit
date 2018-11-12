import React from 'react';
import PropTypes from 'prop-types';
import { is } from 'immutable';
import './home.scss';

export default class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getTitle();
  }

  shouldComponentUpdate(nextProps, nextState) {
    nextProps = nextProps || {}; // init object if value is null or undefined
    nextState = nextState || {}; // init object if value is null or undefined

    const thisProps = this.props || {}, thisState = this.state || {};

    if (Object.keys(thisProps).length !== Object.keys(nextProps).length || Object.keys(thisState).length !== Object.keys(nextState).length) {
      return true;
    }

    for (const key in nextProps) {
      if (thisProps[key] !== nextProps[key] || !is(thisProps[key], nextProps[key])) {
        return true;
      }
    }

    for (const key in nextState) {
      if (thisState[key] !== nextState[key] || !is(thisState[key], nextState[key])) {
        return true;
      }
    }
    return false;
  }

  renderPage() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {this.props.homeState.get('title')}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.homeState.get('title') ? this.renderPage() : ''}
      </div>
    );
  }
}

HomeComponent.propTypes = {
  getTitle: PropTypes.func.isRequired,
  homeState: PropTypes.object.isRequired,
};