import React, { useState, useEffect } from 'react';
import axios from '../../axios-orders';
import Router from 'next/router';
import cookie from 'js-cookie';

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBInput,
  MDBIcon,
} from 'mdbreact';

const Edit = ({ id }) => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = event => setName(event.target.value);
  const handleBrandChange = event => setBrand(event.target.value);
  const handlePriceChange = event => setPrice(event.target.value);
  const handleImageChange = event => setImage(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`products/${id}`);
        setName(response.data.name);
        setBrand(response.data.brand);
        setPrice(response.data.price);
        setImage(response.data.image);
        setDescription(response.data.description);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async event => {
    event.preventDefault();
    const obj = {
      name: name,
      brand: brand,
      price: price,
      image: image,
      description: description,
    };
    const token = cookie.get('jwtToken');
    await axios.patch(`/products/${id}`, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Router.push('/products');
    Router.replace(`/product/${id}`);
  };

  return (
    <>
      <MDBContainer className="px-5">
        <MDBRow className="d-flex justify-content-center">
          <MDBCol className="card mt-5" xl="6">
            <form onSubmit={handleSubmit}>
              <p className="h5 text-center mt-4 mb-4">Edit Product</p>
              <div className="grey-text">
                <MDBInput
                  label="Name"
                  value={name}
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleNameChange}
                />
                <MDBInput
                  label="Brand"
                  value={brand}
                  icon="clone"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleBrandChange}
                />
                <MDBInput
                  label="Price"
                  value={price}
                  icon="coins"
                  group
                  type="number"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handlePriceChange}
                />
                <MDBInput
                  label="image"
                  value={image}
                  icon="image"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleImageChange}
                />
                <MDBInput
                  label="description"
                  value={description}
                  icon="info"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  onChange={handleDescriptionChange}
                />
              </div>
              <div className="text-center">
                <MDBBtn className="btn btn-outline-black  my-4" type="submit">
                  Submit
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Edit;
