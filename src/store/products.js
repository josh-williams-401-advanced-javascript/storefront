let initialState = {
  products: [
    { category: 'jazz', name: 'John Coltrane: A Love Supreme', description: 'Epic classic', price: '9.99', inventoryCount: 100 },
    { category: 'jazz', name: 'Miles Davis: Kind of Blue', description: 'Seminal Miles Davis album', price: '11.99', inventoryCount: 1 },
    { category: 'pop', name: 'Ariana Grande: thank u, next', description: 'Some good tunes', price: '16.99', inventoryCount: 2000 },
    { category: 'pop', name: 'Ed Sheeran: + (Deluxe Version)', description: 'Peak Ed Sheeran', price: '13.99', inventoryCount: 500 },
    { category: 'classic_rock', name: 'Pink Floyd: Dark Side of the Moon', description: 'Good stuff', price: '8.99', inventoryCount: 68 }
  ]
}

export default (state = initialState, action) => {

  const { type, payload } = action;
  switch (type) {
    case 'DECREASEINVENTORY':
      return {
        ...state, products: state.products.map(product => {
          if (product.name === payload) {
            product.inventoryCount--;
          }
          return product;
        })
      }
    case 'INCREASEINVENTORY':
      return {
        ...state, products: state.products.map(product => {
          if (product.name === payload) {
            product.inventoryCount++;
          }
          return product;
        })
      }
    default:
      return state;
  }
}
export const decreaseInventory = name => {
  return {
    type: 'DECREASEINVENTORY',
    payload: name,
  }
}

export const increaseInventory = name => {
  return {
    type: 'INCREASEINVENTORY',
    payload: name,
  }
}

