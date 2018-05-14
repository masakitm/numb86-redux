// @flow
import React from 'react';

type Props = {
  counter: number,
  incCounter(): void,
  decCounter(): void,
  mulCounter(): void,
  divCounter(): void
}

// App
const App = (props: Props) => (
  <div>
    <p>原罪の数値: { props.counter }</p>
    <button onClick={() => { props.incCounter(1); }}>加算</button>
    <button onClick={() => { props.decCounter(1); }}>減算</button>
    <button onClick={() => { props.mulCounter(10); }}>乗算</button>
    <button onClick={() => { props.divCounter(10); }}>除算</button>
  </div>
);

export default App;
