import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  const Authenticate = props => {
    useLayoutEffect(() => {
      if (!props.isAuthenticated) {
        props.history.push('/login');
      }
    }, [props]);

    return <ComposedComponent {...props} />;
  };

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authenticate);
}
