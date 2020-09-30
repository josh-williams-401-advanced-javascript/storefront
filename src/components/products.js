import React from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../store/cart'
import { decreaseInventory } from '../store/products'

const Products = props => {

  const buttonHandler = product => {
    props.addToCart(product);
    props.decreaseInventory(product.name);
  }

  return (
    <>
      <h2>Products</h2>
      <ul>
        {props.products.map(product =>
          props.active === product.category &&
          product.inventoryCount > 0 &&
          <div key={product.name}>
            <li
            >
              {product.name}

            </li>
            <button onClick={() => buttonHandler(product)}>Add to Cart</button>
          </div>
        )}
      </ul>
    </>
  );

}

const mapStateToProps = store => ({
  products: store.product.products,
  active: store.category.activeCategory,
});

const mapDispatchToProps = { addToCart, decreaseInventory };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
