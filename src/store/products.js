let initialState = {
  products: [
    {category: 'jazz', name: 'John Coltrane: A Love Supreme', description: 'Epic classic', price: '9.99', inventoryCount: 100},
    {category: 'jazz', name: 'Lionel Loueke: Karibu', description: 'Jazz guitar, featuring Wayne Shorter', price: '11.99', inventoryCount: 15},
    {category: 'pop', name: 'Ariana Grande: thank u, next', description: 'Some good tunes', price: '16.99', inventoryCount: 2000},
    {category: 'pop', name: 'Ed Sheeran: + (Deluxe Version)', description: 'Peak Ed Sheeran', price: '13.99', inventoryCount: 500},
  ]
}

export default (state = initialState) => {
  return state;
}
