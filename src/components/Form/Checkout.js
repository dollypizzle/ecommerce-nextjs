import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Navigation from '../Navigation/Navigation';
import Footer from '../Navigation/Footer';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBInput,
  MDBCardBody,
} from 'mdbreact';

const CheckOut = props => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [address, SetAddress] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleFirstnamechange = event => setFirstname(event.target.value);
  const handleLastnamechange = event => setLastname(event.target.value);
  const handleEmailchange = event => setEmail(event.target.value);
  const handleAddresschange = event => SetAddress(event.target.value);

  const handleSubmit = async event => {
    event.preventDefault();
    setRedirect(true);
  };

  const cart = props.cart;

  const ProductTable = styled(MDBTable)`
    td {
      vertical-align: middle;
    }
  `;

  const [columns] = useState([
    {
      label: <strong>Product</strong>,
      field: 'product',
    },

    {
      label: <strong>QTY</strong>,
      field: 'qty',
    },
    {
      label: <strong>Amount</strong>,
      field: 'amount',
    },
  ]);

  const rows = [];
  cart.addedItems.map(item => {
    return rows.push({
      product: [
        <h5 className="mt-3">
          <strong>{item.name}</strong>
        </h5>,
      ],
      qty: `${item.quantity}`,
      amount: <strong>₦{item.quantity * item.price}</strong>,
    });
  });

  if (redirect) {
    return <Redirect to={'/cart/order'} />;
  }

  return cart.addedItems.length > 0 ? (
    <>
      <Navigation />
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className="mt-4">
            <h4 className="text-center mt-1">Checkout</h4>
            <form onSubmit={handleSubmit}>
              <div className="grey-text">
                <MDBInput
                  label="First Name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={firstname}
                  onChange={handleFirstnamechange}
                  required
                />
                <MDBInput
                  label="Last Name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={lastname}
                  onChange={handleLastnamechange}
                  required
                />
                <MDBInput
                  label="Email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                  value={email}
                  onChange={handleEmailchange}
                  required
                />
                <MDBInput
                  label="Shipping Address"
                  icon="tag"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  value={address}
                  onChange={handleAddresschange}
                  required
                />
              </div>
              {/* <div className="text-center py-4 mt-3">
              <MDBBtn color="success" type="submit">
                Confirm Order
              </MDBBtn>
            </div> */}
              <div>
                <MDBBtn color="success">
                  <a className="text-reset" href="/order">
                    Confirm Order
                  </a>
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
          <MDBCol md="6">
            <h4 className="text-center mt-4">Order Summary</h4>
            <MDBCardBody>
              <ProductTable className="product-table">
                <MDBTableHead
                  className="font-weight-bold"
                  color="mdb-color lighten-5"
                  columns={columns}
                />
                <MDBTableBody rows={rows} />
              </ProductTable>
              <h5 className="mt-4">
                <strong>Total:</strong> ₦{cart.total}
              </h5>
              <div className="text-center mt-3">
                <Link href={'/cart'}>
                  <a>MODIFY CART</a>
                </Link>
              </div>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </>
  ) : (
    <>
      <Navigation />
      <p className="text-center my-5">
        <strong>No products in the cart</strong>
      </p>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

export default connect(
  mapStateToProps,
  null
)(CheckOut);
