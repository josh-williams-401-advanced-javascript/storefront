import categoryReducer, { changeActiveCategory } from './categories';
import productReducer from './products'

describe('category tests', () =>{
  it('should have an initial state', () => {
    const state = categoryReducer(undefined, {});
    expect(state.categories.length).toBe(2);
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
    const state = productReducer(undefined);
    expect(state.products.length).toBe(4);
    expect(state.products.filter(product => product.category === 'jazz').length).toBe(2);
    expect(state.products.filter(product => product.category === 'pop').length).toBe(2);
  })
})