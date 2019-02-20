import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './home.scss';

// React.memo instead of PureComponent
const HomeComponent = React.memo((props) => {
  useEffect(() => {
    props.getTitle();
  },[]);

  if(props.homeState.get('title')){
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12">
            {props.homeState.get('title')}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>Loading...</div>
  );
  
});

HomeComponent.propTypes = {
  getTitle: PropTypes.func.isRequired,
  homeState: PropTypes.object.isRequired,
};

export default HomeComponent;