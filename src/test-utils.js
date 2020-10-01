// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';

// Import/combine your own reducer/s
import cart from './store/cart.js';
import category from './store/categories.js';
import loadingReducer from './store/loading.js';
import product from './store/products.js';

let reducers = combineReducers({ cart, category, loadingReducer, product });

function render(
  ui,
  {
    store = createStore(reducers, applyMiddleware(thunk)),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }