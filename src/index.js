import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';

import store from './store/';



// import * as serviceWorker from './serviceWorker';

function Main() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
const root = document.getElementById('root');

ReactDOM.render(<Main />, root)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();