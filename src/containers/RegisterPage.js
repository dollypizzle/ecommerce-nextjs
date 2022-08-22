import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Register from '../components/Form/Register';
import { userRegisterRequest } from '../store/actions/signupActions';

const RegisterPage = props => {
  const { userRegisterRequest } = props;
  return (
    <div>
      <Register userRegisterRequest={userRegisterRequest} />
    </div>
  );
};

RegisterPage.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
};

export default connect(
  null,
  { userRegisterRequest }
)(RegisterPage);
