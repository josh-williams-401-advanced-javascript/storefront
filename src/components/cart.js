import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart'
import { increaseInventory } from '../store/products'


const SimpleCart = props => {
  const cart = props.cart;
  const removeHandler = name => {
    props.removeFromCart(name);
    props.increaseInventory(name)
  }
  return (
    <>
  <h2>Cart ({cart.length})</h2>
  <ul>
    {cart.map(item => 
    <div key={item.name}>
      <li key={item.name}>{item.name}
      </li>
      <button onClick={() => removeHandler(item.name)}>
        Remove From Cart
        </button>
    </div>
      )}
  </ul>
  </>
  )
}


const mapStateToProps = store => {
  return {
    cart: store.cart.items,
  }
}

const mapDispatchToProps = { removeFromCart, increaseInventory };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

