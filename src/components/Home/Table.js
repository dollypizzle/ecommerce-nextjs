import React from 'react';
// import { MDBCol } from 'mdbreact';
import styled from 'styled-components';
import './Table.css';

const Img = styled.div`
  max-width: 220px;
  max-height: 220px;
  min-width: 220px;
  min-height: 220px;
  border-radius: 5%;
  -webkit-box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
  -moz-box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
  box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
`;
const Imgg = styled.div`
  max-width: 220px;
  max-height: 220px;
  min-width: 220px;
  min-height: 220px;
  border-radius: 5%;
  -webkit-box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
  -moz-box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
  box-shadow: 0px 3px 17px 0px rgba(3, 23, 24, 1);
  background-color: cyan;
  text-color: white;
`;

const TableImg = props => {
  return (
    <>
      <div id="f1_container">
        <div id="f1_card" className="shadow">
          <Img className="front face">
            <img className="img-fluid" alt="" src={props.obj.image} />
          </Img>
          <Imgg className="back face center">
            <h3>Name: {props.obj.name}</h3>
            <h3>Price: ₦{props.obj.price}</h3>
          </Imgg>
        </div>
      </div>
    </>
  );
};

export default TableImg;
