import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppContainer from './containers/AppContainer';

// reducers
import rootReducers from './reducers';

// store
const store = createStore(rootReducers);

// subscribe
store.subscribe(() => {
  console.log('state has changed');
  console.log(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#root'),
);
