import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
const container = document.getElementById('root'); ReactDOM.render(<Hello name="Grant" />, container);
