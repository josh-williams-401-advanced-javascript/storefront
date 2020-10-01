import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../store/cart';
import { decreaseInventory, getProducts } from '../store/products';
import { CircularProgress } from '@material-ui/core';

const Products = props => {

  const getProducts = props.getProducts;
  const loading = props.loading;

  useEffect(() => {
    getProducts();
  },[getProducts]);
  console.log(props.products)

  const buttonHandler = product => {
    props.addToCart(product);
    props.decreaseInventory(product);
  }

  return (
    <>
      <h2>Products</h2>
      {loading ? <CircularProgress /> :
      <ul>
        {props.products.map(product =>
          props.active === product.category &&
          product.inStock > 0 &&
          <div key={product.name}>
            <li
            >
              {product.name}

            </li>
            <span>  In Stock:  {product.inStock}  </span>
            <button onClick={() => buttonHandler(product)}>Add to Cart</button>
          </div>
        )}
      </ul>
      }
    </>
  );

}

const mapStateToProps = store => ({
  products: store.product.products,
  active: store.category.activeCategory,
  loading: store.loadingReducer
});

const mapDispatchToProps = { addToCart, decreaseInventory, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
