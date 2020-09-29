import React from 'react';

import { connect } from 'react-redux';

const Products = props => {
  return (
    <>
    <h2>Products</h2>
    <ul>
      {props.products.map(product => 
      props.active === product.category && 
        <li key={product.name}
        >
        {product.name}
        </li>
        )}
    </ul>
    </>
  );

}

const mapStateToProps = store => ({
  products: store.product.products,
  active: store.category.activeCategory,
});

export default connect(mapStateToProps)(Products);
