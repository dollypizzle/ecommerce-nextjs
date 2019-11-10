// import React from 'react';
// import Link from 'next/link';
// import axios from '../../axios-orders';
// import styled from 'styled-components';
// import Router from 'next/router';
// import { MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

// const Table = props => {
//   //const [redirect, setRedirect] = useState(false);

//   const deleted = async () => {
//     const token = localStorage.getItem('jwtToken');

//     try {
//       await axios.delete('/products/' + props.obj._id, {
//         //await axios.delete(`products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       Router.push(`/products`);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // if (redirect) {
//   //   return <Redirect to={'/products'} />;
//   // }

//   return (
//     <>
//       <MDBContainer
//         className="mt-5 text-center"
//         style={{ marginTop: '98px', marginBottom: '93px' }}
//       >
//         <MDBRow>
//           <MDBCol className="md-6 pt-3">
//             <Img alt="" cascade top src={props.obj.image} waves />
//           </MDBCol>

//           <MDBCol className="md-6">
//             <div className="pt-3">
//               <h3>
//                 Name:<strong> {props.obj.name}</strong>
//               </h3>
//               <hr />

//               <h4>Brand: {props.obj.brand}</h4>
//               <hr />

//               <h5>Price: ₦{props.obj.price}</h5>
//               <hr />

//               <p>{props.obj.description}</p>
//               <hr />
//               <div className="d-flex justify-content-center">
//                 <MDBBtn color="success">
//                   <Link
//                     href={`/edit?id=${props.obj._id}`}
//                     as={`/edit/${props.obj._id}`}
//                   >
//                     <a className="text-reset">Edit</a>
//                   </Link>
//                 </MDBBtn>
//                 <MDBBtn color="danger" onClick={deleted}>
//                   Delete
//                 </MDBBtn>
//               </div>
//             </div>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </>
//   );
// };

// export default Table;

import React from 'react';
import Link from 'next/link';
import axios from '../../axios-orders';
import styled from 'styled-components';
import Router from 'next/router';

import { MDBCol, MDBBtn, MDBRow } from 'mdbreact';

const Table = props => {
  const deleted = async () => {
    const token = localStorage.getItem('jwtToken');

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
        {/* {props.userId === props.obj.owner && ( */}
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
        {/* )} */}
      </MDBCol>
    </MDBRow>
  );
};

export default Table;
