import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart'
import { increaseInventory } from '../store/products'

import { IconButton, Grid } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';



const SimpleCart = props => {
  const cart = props.cart;
  const removeHandler = name => {
    props.removeFromCart(name);
    props.increaseInventory(name)
  }
  return (
    <>
    <Grid item xs={6}>
      <Grid container justify="flex-end" position="absolute">

      <List>
        {cart.map(item =>
          <ListItem key={item.name}>
            <ListItemText primary={item.name} />
            <IconButton onClick={() => removeHandler(item.name)}>
              <HighlightOffIcon />
        </IconButton>
          </ListItem>
        )}
      </List>
      </Grid>
      </Grid>
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

