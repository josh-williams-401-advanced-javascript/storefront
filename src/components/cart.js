import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../store/cart'
import { increaseInventory } from '../store/products'

import { IconButton, makeStyles } from '@material-ui/core'
import { List, ListItem, ListItemText } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles((theme) => ({
  list: {
    position: "fixed",
    right: theme.spacing(1),
    top:theme.spacing(7),
  }

}));

const SimpleCart = props => {
  const cart = props.cart;
  const removeHandler = item => {
    props.removeFromCart(item.name);
    props.increaseInventory(item)
  }
  const classes = useStyles();
  return (
    <>


      <List className={classes.list}>
        {cart.map(item =>
          <ListItem key={item.name}>
            <ListItemText primary={item.name} />
            <IconButton onClick={() => removeHandler(item)}>
              <HighlightOffIcon />
        </IconButton>
          </ListItem>
        )}
      </List>

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

