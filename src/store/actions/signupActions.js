import axios from '../../axios-orders';
import setAuthorizationToken from '../../components/utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './actionTypes';
import cookie from 'js-cookie';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function userRegisterRequest(userData) {
  return dispatch => {
    return axios.post('/register', userData).then(res => {
      const token = res.data.token;
      const user = res.data.user;
      cookie.set('jwtToken', token);
      cookie.set('user', user);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}
