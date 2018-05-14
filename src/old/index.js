// @flow
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

type Props = {
  counter: number,
  incCounter(number): void,
  decCounter(number): void,
  mulCounter(number): void,
  divCounter(number): void
}

// ActionCreator
export const incActionCreator = (num: number = 1) => ({
  type: 'INC_COUNTER',
  num,
});
export const decActionCreator = (num: number = 1) => ({
  type: 'DEC_COUNTER',
  num,
});
export const mulActionCreator = (num: number = 1) => ({
  type: 'MUL_COUNTER',
  num,
});
export const divActionCreator = (num: number = 1) => ({
  type: 'DIV_COUNTER',
  num,
});

// Reducer
const math = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INC_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter + action.num,
      });
    case 'DEC_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter - action.num,
      });
    case 'MUL_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter * action.num,
      });
    case 'DIV_COUNTER':
      return Object.assign({}, state, {
        counter: state.counter / action.num,
      });
    default:
      return state;
  }
};

// store
const myStore = createStore(math);
myStore.subscribe(() => {
  console.log('stateが変更されました');
  console.log(myStore.getState());
});

const App = (props: Props) => (
  <div>
    <p>原罪の数値: { props.counter }</p>
    <button onClick={() => { props.incCounter(1); }}>加算</button>
    <button onClick={() => { props.decCounter(1); }}>減算</button>
    <button onClick={() => { props.mulCounter(10); }}>乗算</button>
    <button onClick={() => { props.divCounter(10); }}>除算</button>
  </div>
);

const mapStateToProps = state => ({ counter: state.counter });
const mapDispatchToProps = dispatch => ({
  incCounter(value) {
    dispatch(incActionCreator(value));
  },
  decCounter(value) {
    dispatch(decActionCreator(value));
  },
  mulCounter(value) {
    dispatch(mulActionCreator(value));
  },
  divCounter(value) {
    dispatch(divActionCreator(value));
  },
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

ReactDOM.render(
  <Provider store={myStore}>
    <ConnectedApp />
  </Provider>,
  document.querySelector('#root'),
);
