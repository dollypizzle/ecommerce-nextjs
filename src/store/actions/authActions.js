import axios from '../../axios-orders';
import setAuthorizationToken from '../../components/utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from './actionTypes';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('user');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return dispatch => {
    return axios.post('/login', data).then(res => {
      const token = res.data.token;
      const user = res.data.token;
      localStorage.setItem('jwtToken', token);
      localStorage.setItem('user', user);
      setAuthorizationToken(token);
      dispatch(setCurrentUser(jwtDecode(token)));
    });
  };
}
