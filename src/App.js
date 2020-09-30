import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline'
import { Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';


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
        // justify="space-between"
        alignItems="center"
      >
        <AppBar color="transparent" position="relative">
          <Toolbar >
            <Header />

          </Toolbar>
        </AppBar>
      </Grid>
      <Container>



      <Grid container>
        <Categories />
        <SimpleCart />
        <Products />
      </Grid>
      </Container>
      <Footer />
    </>
  );
}

