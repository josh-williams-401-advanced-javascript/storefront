import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid, CircularProgress, Button, Typography, ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

import { changeActiveCategory, getCategories } from '../store/categories'

const useStyles = makeStyles((theme) => ({
  categories: {
    marginTop: theme.spacing(3),
  },
  mainCat: {
    minHeight: theme.spacing(25),
  }

}));

const Categories = props => {
  let { getCategories, categories, active, changeActiveCategory, loading } = props;

  const classes = useStyles();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <>
      <Grid container justify="flex-start">
        <Typography
          className={classes.categories}
          variant="h5">Browse Our Categories
        </Typography>
      </Grid>

      {loading ? <CircularProgress data-testid="spinner" /> :
        <ButtonGroup variant="text" color="primary">

          {categories.map((category, i) =>

            <Button
              key={category._id}
              onClick={() => changeActiveCategory(category.name)}
            >
              {category.name.toUpperCase()}
            </Button>

          )
          }
        </ButtonGroup>
      }
      <Grid
        className={classes.mainCat}
        container justify="center" alignItems="center" direction="column">
        {loading ? <CircularProgress /> :
          <Typography variant="h2">
            {!!active && active.toUpperCase()}
          </Typography>}
        <Typography variant="h6">
          {(categories && active) && categories.filter(cat => cat.name === active)[0].description}
        </Typography>
      </Grid>
    </>


  )
}

const mapStateToProps = store => ({
  categories: store.category.categories,
  active: store.category.activeCategory,
  loading: store.loadingReducer,
})

const mapDispatchToProps = { changeActiveCategory, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
