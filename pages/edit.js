import Edit from '../src/components/Products/Edit';

// const editProduct = () => {
//   return <Edit />;
// };

const editProduct = ({ id }) => {
  return <Edit id={id} />;
};

editProduct.getInitialProps = async ({ query }) => {
  return { id: query.id };
};

export default editProduct;
