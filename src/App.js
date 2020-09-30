import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import{ Grid } from '@material-ui/core';


import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import Footer from './components/footer';
import SimpleCart from './components/cart'

export default props => {
  return (
    <>
      <CssBaseline />

          <Grid container
            justify="space-bewteen"
            alignItems="center"
            >
            <AppBar color="transparent" position="relative">
            <Toolbar container justify="space-bewteen">
          <Header />

        </Toolbar>
      </AppBar>
          <SimpleCart />
          </Grid>
      <Container>




      <Categories />
      <Products />
      </Container>
        <Footer />
    </>
  );
}

