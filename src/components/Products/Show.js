import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import { MDBContainer } from 'mdbreact';
import Table from './Table';
import { useRouter } from 'next/router';

const Show = props => {
  const [product, setProduct] = useState(null);
  //const [user, setUser] = useState('');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    // const authUser = JSON.parse(localStorage.getItem('user'));
    // setUser(authUser);
    const fetchData = async () => {
      try {
        const response = await axios.get(`products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [props]);

  const tabRow = () => {
    return (
      product && (
        <Table
          obj={product}
          //userId={user && user._id}
          key={product._id}
        />
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
