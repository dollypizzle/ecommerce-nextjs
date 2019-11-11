import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from 'mdbreact';

const Register = props => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstnameChange = event => setFirstname(event.target.value);
  const handleLastnameChange = event => setLastname(event.target.value);
  const handleEmailChange = event => setEmail(event.target.value);
  const handlePhonenumberChange = event => setPhonenumber(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    };
    try {
      await props.userRegisterRequest(data);
      Router.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  // if (redirect) {
  //   return <Redirect to={'/products'} />;
  // }

  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center mb-5 py-3 px-5">
        <MDBCol className="mt-3" sm="12" md="8" lg="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={handleSubmit}>
                <p className="h4 text-center py-2">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="First name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={firstname}
                    onChange={handleFirstnameChange}
                  />
                  <MDBInput
                    label="Last name"
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    value={lastname}
                    onChange={handleLastnameChange}
                  />
                  <MDBInput
                    label="Your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <MDBInput
                    label="Your phone-number"
                    icon="user"
                    group
                    type="number"
                    validate
                    error="wrong"
                    success="right"
                    value={phonenumber}
                    onChange={handlePhonenumberChange}
                  />
                  <MDBInput
                    label="Your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    // placeholder="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="text-center py-2 mt-2">
                  <MDBBtn className="btn btn-outline-black" type="submit">
                    Register
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

Register.propTypes = {
  userRegisterRequest: PropTypes.func.isRequired,
};

export default Register;
