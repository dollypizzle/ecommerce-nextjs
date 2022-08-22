import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from '../../axios-orders';
import Body from './Body';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from 'mdbreact';

const Products = props => {
  const [product, setProduct] = useState(null);

  const { isAuthenticated } = props.auth;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('products');
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const tabRow = () => {
    return (
      product &&
      product.map(function(object, i) {
        return <Body obj={object} key={i} />;
      })
    );
  };

  const userLinks = (
    <p className="lead">
      <MDBBtn outline color="black" style={{ marginTop: '50px' }}>
        <MDBIcon icon="clone" className="mr-2"></MDBIcon>{' '}
        <Link href="/add" as="/products/add" style={{ color: 'black' }}>
          <a className="text-reset">Add New Product</a>
        </Link>
      </MDBBtn>
    </p>
  );

  const guestLinks = <div></div>;

  // if (redirect) {
  //   return <Redirect to={'/login'} />;
  // }

  return (
    <>
      <MDBContainer className="mt-3 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <h2 className="h1 display-3">Dolmart Phone Hub</h2>
              <hr className="my-2" />
              {isAuthenticated ? userLinks : guestLinks}
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>

        <MDBRow>{tabRow()}</MDBRow>
      </MDBContainer>
    </>
  );
};

Products.propTypes = {
  auth: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  null
)(Products);
