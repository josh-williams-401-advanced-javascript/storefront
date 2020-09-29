
let initialState = {
  categories: [
    { name: 'jazz', displayName: 'Jazz', description: 'Everything from Louis Armstrong to Thundercat' },
    { name: 'pop', displayName: 'Pop', description: 'Billboard charting hits!' }
  ],
  activeCategory: 'jazz',
}

export default (state = initialState, action) => {

  let { type, payload } = action;

  switch (type) {
    case 'CHANGEACTIVE':
      return {
        categories: state.categories,
        activeCategory: payload
      }
    default:
      return state;
  }
}

export const changeActiveCategory = name => {
  return {
    type: 'CHANGEACTIVE',
    payload: name,
  }
}
