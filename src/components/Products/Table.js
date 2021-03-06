import React from 'react';
import Link from 'next/link';
import axios from '../../axios-orders';
import styled from 'styled-components';
import Router, { useRouter } from 'next/router';
import cookie from 'js-cookie';

import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';

const Table = props => {
  const router = useRouter();
  const { id } = router.query;

  const deleted = async () => {
    const token = cookie.get('jwtToken');

    try {
      await axios.delete('/products/' + props.obj._id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      Router.push(`/products`);
    } catch (err) {
      console.log(err);
    }
  };

  const Img = styled.img`
    max-height: 270px;
    min-width: 270px;
    border-radius: 3%;
    -webkit-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88);
    -moz-box-shadow: 0px 3px 38px -8px rgba(3, 23, 247, 0.88);
    box-shadow: 0px 3px 38px -8px rgba(3, 23, 24, 0.88);
  `;

  return (
    <MDBRow>
      <MDBCol className="" md="6">
        <h3>
          <strong>{props.obj.name}</strong>
        </h3>
        <p>
          <strong>Brand:</strong> {props.obj.brand}
        </p>
        <div>
          <Img alt="" src={props.obj.image} className="img-fluid w-75" />
        </div>
      </MDBCol>
      <MDBCol className="" md="6" style={{ marginTop: '150px' }}>
        <p className="text-center">
          <strong>Description: </strong>
          {props.obj.description}
        </p>
        <p className="pt-3">
          <strong>Price:</strong> ₦ {props.obj.price}
        </p>
        {props.userId === props.obj.owner && (
          <div>
            <MDBBtn color="success">
              <Link
                href={`/edit?id=${props.obj._id}`}
                as={`/edit/${props.obj._id}`}
              >
                <a className="text-reset">Edit</a>
              </Link>
            </MDBBtn>
            <MDBBtn onClick={deleted} color="danger">
              Delete
            </MDBBtn>
          </div>
        )}
      </MDBCol>
    </MDBRow>
  );
};

export default Table;
