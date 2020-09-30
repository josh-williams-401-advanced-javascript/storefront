import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Grid, CircularProgress } from '@material-ui/core'


import { changeActiveCategory, getCategories } from '../store/categories'


const Categories = props => {
  const { getCategories, categories, active, changeActiveCategory, loading } = props;

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (

    <Grid item xs={6}>
        <h2>Categories - Click to change Active Category</h2>

        <Grid container justify="space-evenly">

    {loading ? <CircularProgress /> :
          categories.map(category =>
            <Link
              key={category.name}
              onClick={() => changeActiveCategory(category.name)}
              color={active === category.name ? "initial" : "primary"}
            >
              {category.name.toUpperCase()}
            </Link>
          )
        }
        </Grid>

      </Grid>

  )
}

const mapStateToProps = store => ({
  categories: store.category.categories,
  active: store.category.activeCategory,
  loading: store.loadingReducer,
})

const mapDispatchToProps = { changeActiveCategory, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
