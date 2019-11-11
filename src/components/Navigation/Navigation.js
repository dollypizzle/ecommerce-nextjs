import React, { useState } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cookie from 'js-cookie';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
} from 'mdbreact';

const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    cookie.remove('jwtToken');
    cookie.remove('user');
    Router.push('/');
  };

  const user = cookie.get('user');

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const userLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/products">
          <a className="nav-link">Products</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/cart">
          <a className="nav-link">Cart</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="">
          <a onClick={logout} className="nav-link">
            Logout
          </a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  const guestLinks = (
    <MDBNavbarNav right>
      <MDBNavItem>
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/products">
          <a className="nav-link">Products</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/cart">
          <a className="nav-link">Cart</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/login">
          <a className="nav-link">Login</a>
        </Link>
      </MDBNavItem>
      <MDBNavItem>
        <Link href="/register">
          <a className="nav-link">Sign Up</a>
        </Link>
      </MDBNavItem>
    </MDBNavbarNav>
  );

  return (
    <MDBNavbar color="black" dark expand="md">
      <MDBNavbarBrand>
        <Link href="/">
          <strong className="white-text">Dolmart</strong>
        </Link>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav right>{user ? userLinks : guestLinks}</MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps
  // { logout }
)(Navigation);
