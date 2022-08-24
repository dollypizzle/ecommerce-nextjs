import axios from '../../axios-orders';
import cookie from 'js-cookie';

export function createProduct(event) {
  return dispatch => {
    const token = cookie.get('jwtToken');
    return axios.post('/products', event, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}
