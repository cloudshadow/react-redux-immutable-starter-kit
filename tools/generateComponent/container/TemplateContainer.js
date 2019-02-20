/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as templateActions from '../actions/templateActions';
import TemplateComponent from '../components/Template/TemplateComponent';

export const TemplatePage = (props) => {
  return (
    <TemplateComponent />
  );
}

TemplatePage.propTypes = {
  templateActions: PropTypes.object.isRequired,
  templateState: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    templateState: state.get('templateState'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    templateActions: bindActionCreators(templateActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemplatePage);