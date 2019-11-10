import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../store/actions/authActions';
import Router from 'next/router';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBIcon,
} from 'mdbreact';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const [redirect, setRedirect] = useState(false);

  const handleEmailChange = event => setEmail(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      email,
      password,
    };
    try {
      await props.login(data);
      Router.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  // if (redirect) {
  //   return <Redirect to={'/products'} />;
  // }

  return (
    <>
      <MDBContainer
        className="px-10"
        style={{ marginTop: '58px', marginBottom: '55px' }}
      >
        <MDBRow className="d-flex justify-content-center">
          <MDBCol className="card mt-3" sm="12" md="8" lg="6">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mt-4 mb-4">Login</p>
              <div className="grey-text">
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleEmailChange}
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn className="btn btn-outline-black  my-4" type="submit">
                  Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(
  null,
  { login }
)(Login);
