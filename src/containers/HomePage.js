import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../actions/homeActions';
import HomeComponent from '../components/Home/HomeComponent';

const HomePage = (props) => {
  return (
    <HomeComponent
      getTitle={props.homeActions.getTitle}
      homeState={props.homeState}
    />
  );
};

HomePage.propTypes = {
  homeActions: PropTypes.object.isRequired,
  homeState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    // homeState: state.homeState,
    homeState: state.get('homeState'),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);