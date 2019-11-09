import React from 'react';
import { Link } from 'react-router-dom';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCardImage } from 'mdbreact';

const CheckOut = props => {
  return (
    <MDBContainer>
      <MDBRow className="d-flex justify-content-center px-2">
        <MDBCol className="card mt-3" sm="12" md="8" lg="6">
          <MDBCardImage
            top
            alt="Payment recieved"
            src="https://i.stack.imgur.com/YbIni.png"
            waves
          />
          <hr />
          <h3 className="text-center">
            Your payment has been recieved and your order is on its way!!!
          </h3>
          <MDBBtn color="success mb-3">
            <Link to={'/products'} className="text-reset">
              Continue shopping
            </Link>
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CheckOut;
