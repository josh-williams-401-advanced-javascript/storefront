import axios from 'axios';
import { loading } from './loading';
const url = `${process.env.REACT_APP_API}/categories/`;

export default (state = {categories: []}, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_ACTIVE':
      return {
        ...state,
        activeCategory: payload
      }
    case 'GET_CATEGORIES':
      return {
        categories: payload,
        activeCategory:'' /*payload[0].name*/
      };
    default:
      return state;
  }
}

export const getCategories = () => {


  return async dispatch => {

    dispatch(loading(true));
    let response = await axios({ url, method: 'GET' });
    // console.log(response.data.results)
    dispatch(loading(false));

    dispatch({
      type: 'GET_CATEGORIES',
      payload: response.data.results
        .filter(product => product.name !== 'admin')
    })

  }

}

export const changeActiveCategory = name => ({
  type: 'CHANGE_ACTIVE',
  payload: name,
})
