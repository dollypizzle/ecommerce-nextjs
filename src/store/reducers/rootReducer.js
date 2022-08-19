import { combineReducers } from 'redux';
import flashMessages from './flashMessages';
import auth from './auth';
import cart from './cart';

export default combineReducers({
  flashMessages,
  auth,
  cart,
});
