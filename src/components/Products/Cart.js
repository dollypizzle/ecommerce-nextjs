import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';

import {
  removeItem,
  addQuantity,
  subtractQuantity,
} from '../../store/actions/cartActions';
import {
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBTooltip,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBBtn,
} from 'mdbreact';

const ImgCart = styled.img`
  max-height: 150px;
  min-width: 50px;
`;

const ProductTable = styled(MDBTable)`
  td {
    vertical-align: middle;
  }
`;

const Cart = props => {
  const handleRemove = product => {
    props.removeItem(product);
  };
  //to add the quantity
  const handleAddQuantity = product => {
    props.addQuantity(product);
  };
  //to substruct from the quantity
  const handleSubtractQuantity = product => {
    props.subtractQuantity(product);
  };

  const cart = props.cart;

  const [columns] = useState([
    {
      label: '',
      field: 'img',
    },
    {
      label: <strong>Product</strong>,
      field: 'product',
    },
    {
      label: <strong>Unit Price</strong>,
      field: 'price',
    },
    {
      label: <strong>QTY</strong>,
      field: 'qty',
    },
    {
      label: <strong>Amount</strong>,
      field: 'amount',
    },
    {
      label: '',
      field: 'button',
    },
  ]);

  const rows = [];
  cart.addedItems.map(item => {
    return rows.push({
      img: <ImgCart src={item.image} alt="" className="img-fluid z-depth-0" />,

      product: [
        <h5 className="mt-3">
          <strong>{item.name}</strong>
        </h5>,
      ],
      price: `₦${item.price}`,
      qty: `${item.quantity}`,
      amount: <strong>₦{item.quantity * item.price}</strong>,
      button: (
        <>
          <MDBTooltip placement="top">
            <MDBBtn
              color="success"
              size="sm"
              onClick={() => {
                handleAddQuantity(item._id);
              }}
            >
              +
            </MDBBtn>
            <div>Increase quantity</div>
          </MDBTooltip>
          <MDBTooltip placement="top">
            <MDBBtn
              color="info"
              size="sm"
              onClick={() => {
                handleSubtractQuantity(item._id);
              }}
            >
              -
            </MDBBtn>
            <div>Decrease quantity</div>
          </MDBTooltip>
          <MDBTooltip placement="top">
            <MDBBtn
              color="danger"
              size="sm"
              onClick={() => {
                handleRemove(item._id);
              }}
            >
              X
            </MDBBtn>
            <div>Remove item</div>
          </MDBTooltip>
        </>
      ),
    });
  });

  return cart.addedItems.length > 0 ? (
    <>
      <MDBRow className="my-2 ml-3 mr-1" center>
        <MDBCard className="w-100">
          <MDBCardBody>
            <ProductTable className="product-table">
              <MDBTableHead
                className="font-weight-bold"
                color="mdb-color lighten-5"
                columns={columns}
              />
              <MDBTableBody rows={rows} />
            </ProductTable>
          </MDBCardBody>
        </MDBCard>
        <div className="mt-3 text-center">
          <div>
            <MDBBtn color="danger">
              <h4>Total: ₦{cart.total}</h4>
            </MDBBtn>
          </div>
          <MDBBtn color="success">
            <Link href={'/products'}>
              <a className="text-reset"> Buy more products</a>
            </Link>
          </MDBBtn>

          <MDBBtn color="info">
            <Link href={'/checkout'}>
              <a className="text-reset">Checkout</a>
            </Link>
          </MDBBtn>
        </div>
      </MDBRow>
    </>
  ) : (
    <>
      <h3
        className="text-center"
        style={{ marginTop: '212px', marginBottom: '211px' }}
      >
        <strong>Your cart is empty!!!</strong>
      </h3>
    </>
  );
};

const mapStateToProps = state => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItem: product => {
      dispatch(removeItem(product));
    },
    addQuantity: product => {
      dispatch(addQuantity(product));
    },
    subtractQuantity: product => {
      dispatch(subtractQuantity(product));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
