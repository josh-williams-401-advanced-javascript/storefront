import React from 'react';
import Categories from './components/categories';
import Products from './components/products';
import Header from './components/header';
import Footer from './components/footer';
import SimpleCart from './components/cart'

export default props => {
  return (
    <>
      <Header />
      <SimpleCart />
      <Categories />
      <Products />
      <Footer />
    </>
  );
}

