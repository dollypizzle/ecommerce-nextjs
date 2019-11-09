import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from './actionTypes';

export function addToCart(data) {
  return {
    type: ADD_TO_CART,
    data,
  };
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  };
}

export function addQuantity(id) {
  return {
    type: ADD_QUANTITY,
    id,
  };
}

export function subtractQuantity(id) {
  return {
    type: SUB_QUANTITY,
    id,
  };
}
