import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import { MDBContainer } from 'mdbreact';
import Table from './Table';
import cookie from 'js-cookie';

const Show = ({ id }) => {
  const [product, setProduct] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authUser = cookie.get('user');
    if (authUser) {
      setUser(JSON.parse(authUser));
    }
    const fetchData = async () => {
      try {
        const response = await axios.get(`products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const tabRow = () => {
    return (
      product && (
        <Table obj={product} userId={user && user._id} key={product._id} />
      )
    );
  };

  return (
    <>
      <MDBContainer className="mt-5 text-center">{tabRow()}</MDBContainer>
    </>
  );
};

export default Show;
