import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { addToCart } from '../store/cart';
import { decreaseInventory, getProducts } from '../store/products';
import { CircularProgress, Button, Card, CardContent, Grid, makeStyles, Typography, CardActions } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  cards: {
    margin: theme.spacing(1.15),
    minWidth: 275
  },
  cardHolder: {
    padding: theme.spacing(12)
  }

}));


const Products = props => {


  const classes = useStyles();
  const getProducts = props.getProducts;
  const loading = props.loading;

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  

  const buttonHandler = product => {
    props.addToCart(product);
    props.decreaseInventory(product);
  }



  return (
    <>

      {loading ? <CircularProgress /> :
        <Grid container justify="center" className={classes.cardHolder}>
          {props.products.map(product =>
            props.active === product.category &&
            product.inStock > 0 &&
            <Card key={product.name} className={classes.cards}>
              <CardContent>

                <Typography
                >
                  {product.name}

                </Typography>
                <Typography variant="body2">In Stock: {product.inStock}</Typography>

                </CardContent>
                <CardActions>

                <Button
                  variant="text"
                  color="primary"
                  onClick={() => buttonHandler(product)}>
                  Add to Cart
               </Button>
                </CardActions>
            </Card>
          )}
        </Grid>
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
