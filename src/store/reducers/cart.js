import {
  ADD_TO_CART,
  REMOVE_ITEM,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from '../actions/actionTypes';

const initState = {
  addedItems: [],
  total: 0,
};

const addCart = (state, action) => {
  let existed_item = state.addedItems.find(
    item => action.data._id === item._id
  );

  if (existed_item) {
    action.data.quantity += 1;
    return {
      ...state,
      total: state.total + action.data.price,
    };
  } else {
    action.data.quantity = 1;
    //calculating the total
    let newTotal = state.total + action.data.price;

    return {
      ...state,
      addedItems: [...state.addedItems, action.data],
      total: newTotal,
    };
  }
};

const removeCart = (state, action) => {
  let itemToRemove = state.addedItems.find(item => action.id === item._id);
  let new_items = state.addedItems.filter(item => action.id !== item._id);

  //calculating the total
  let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
  console.log(itemToRemove);
  return {
    ...state,
    addedItems: new_items,
    total: newTotal,
  };
};

const increaseQuantity = (state, action) => {
  let addedItem = state.addedItems.find(item => item._id === action.id);
  addedItem.quantity += 1;
  let newTotal = state.total + addedItem.price;
  return {
    ...state,
    total: newTotal,
  };
};

const decreaseQuantity = (state, action) => {
  let addedItem = state.addedItems.find(item => item._id === action.id);
  //if the qt == 0 then it should be removed
  if (addedItem.quantity === 1) {
    let new_items = state.addedItems.filter(item => item.id !== action.id);
    let newTotal = state.total - addedItem.price;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    };
  } else {
    addedItem.quantity -= 1;
    let newTotal = state.total - addedItem.price;
    return {
      ...state,
      total: newTotal,
    };
  }
};

const cart = (state = initState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addCart(state, action);
    case REMOVE_ITEM:
      return removeCart(state, action);
    case ADD_QUANTITY:
      return increaseQuantity(state, action);
    case SUB_QUANTITY:
      return decreaseQuantity(state, action);
    default:
      return state;
  }
};
export default cart;
