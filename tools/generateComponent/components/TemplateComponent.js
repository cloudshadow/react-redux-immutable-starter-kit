/* eslint-disable */
import React from 'react';
import { is } from 'immutable';
import PropTypes from 'prop-types';
import './template.scss';

export default class TemplateComponent extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
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

  render() {
    return (
      <div>
      </div>
    );
  }
}

TemplateComponent.propTypes = {
};