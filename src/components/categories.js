import React from 'react';
import { connect } from 'react-redux';

import { changeActiveCategory } from '../store/categories'

const Categories = props => {
  return (
    <>
      <h2>Categories - Click to change Active Category</h2>
      <ul>
        {props.categories.map(category =>
          <li
            key={category.name}
            onClick={() => props.changeActiveCategory(category.name)}
          >
            {props.active === category.name && '*'}
            {category.displayName}
          </li>
        )}
      </ul>
    </>
  )
}

const mapStateToProps = store => ({
  categories: store.category.categories,
  active: store.category.activeCategory,
})

const mapDispatchToProps = { changeActiveCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);