import axios from 'axios';
import { loading } from './loading';

const url = `${process.env.REACT_APP_API}/products/`

export default (state = { products:[] }, action) => {

  const { type, payload } = action;
  switch (type) {
    case 'GET_PRODUCTS':
      return { products: payload };
    case 'DECREASE_INVENTORY':
      return {
        ...state, products: state.products.map(product => {
          if (product._id === payload._id) {
            return payload;
          }
          return product;
        })
      }
    case 'INCREASE_INVENTORY':
      return {
        ...state, products: state.products.map(product => {
          if (product._id === payload._id) {
            return payload;
          }
          return product;
        })
      }
    default:
      return state;
  }
}
export const decreaseInventory = product => {
  return async dispatch => {

    product.inStock--;
    await axios({
      method: 'PUT',
      url: `${url}${product._id}`,
      data: product,
    });

    dispatch({
      type: 'DECREASE_INVENTORY',
      payload: product,
    });
  }
}

export const increaseInventory = product => {
  return async dispatch => {

    product.inStock++;
    await axios({
      method: 'PUT',
      url: `${url}${product._id}`,
      data: product,
    });

    dispatch({
      type: 'INCREASE_INVENTORY',
      payload: product,
    });
  }
}
export const getProducts = () => {
  return async dispatch => {
    dispatch(loading(true));
    let response = await axios({ method: 'GET', url });
    dispatch(loading(false));
    dispatch({ type: 'GET_PRODUCTS', payload: response.data.results })
  }
}
