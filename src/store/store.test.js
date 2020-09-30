import categoryReducer, { changeActiveCategory } from './categories';
import productReducer from './products';
import cartReducer, { addToCart } from './cart';

describe('category tests', () =>{
  it('should have an initial state', () => {
    const state = categoryReducer(undefined, {});
    expect(state.categories.length).toBe(3);
    expect(state.categories[0].name).toBe('jazz');
    expect(state.categories[1].name).toBe('pop');
    expect(state.activeCategory).toBe('jazz');
  });
  it('should change active state', () => {
    const state = categoryReducer(undefined, changeActiveCategory('pop'));
    expect(state.activeCategory).toBe('pop');
  })
})

describe('product tests', () => {
  it('has the correct initial state', () => {
    const state = productReducer(undefined, {});
    expect(state.products.length).toBe(5);
    expect(state.products.filter(product => product.category === 'jazz').length).toBe(2);
    expect(state.products.filter(product => product.category === 'pop').length).toBe(2);
    expect(state.products.filter(product => product.category === 'classic_rock').length).toBe(1);
  })
})
describe('cart tests', () => {
  it('has the correct initial state', () => {
    const state = cartReducer(undefined, {});
    expect(state.items.length).toBe(0);
  });
  it('can add an item to the cart', () => {
    const state = cartReducer(undefined, addToCart('mittens'));
    expect(state.items.length).toBe(1);
  })
});