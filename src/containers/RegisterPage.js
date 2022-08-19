import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Register from '../components/Form/Register';
import { userRegisterRequest } from '../store/actions/signupActions';
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Navigation/Footer';

const RegisterPage = props => {
  const { userRegisterRequest } = props;
  return (
    <div>
      <Navigation />
      <Register userRegisterRequest={userRegisterRequest} />
      <Footer />
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
