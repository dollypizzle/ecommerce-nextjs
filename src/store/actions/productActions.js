import axios from '../../axios-orders';

export function createProduct(event) {
  return dispatch => {
    const token = localStorage.getItem('jwtToken');
    return axios.post('/products', event, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
