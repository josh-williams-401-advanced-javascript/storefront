import React from 'react';
import { connect } from 'react-redux';
import { Link, Grid } from '@material-ui/core'

import { changeActiveCategory } from '../store/categories'


const Categories = props => {
  return (
    <>

      <h2>Categories - Click to change Active Category</h2>
      <Grid container justify="space-evenly" xs={6}>
        {props.categories.map(category =>
          <Link
            key={category.name}
            onClick={() => props.changeActiveCategory(category.name)}
            color={props.active === category.name ? "initial" : "primary"}
            >
            {category.displayName}
          </Link>
        )}
      </Grid>
    </>
  )
}

const mapStateToProps = store => ({
  categories: store.category.categories,
  active: store.category.activeCategory,
})

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
