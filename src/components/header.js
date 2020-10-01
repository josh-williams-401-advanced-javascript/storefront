import React from 'react';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <Grid container
    justify="space-between"
    alignItems="center"
    >

      <Typography variant="h4">Virtual Store</Typography>

        <Typography variant="h6">Cart ({props.cart.length})</Typography>

    </Grid>
  );
}

const mapStateToProps = store => {
  return {
    cart: store.cart.items,
  }
}

export default connect(mapStateToProps)(Header)