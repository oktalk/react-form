import React from 'react';
import HelloWorld from './HelloWorld';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <HelloWorld name="Foo" />
      <HelloWorld name="Bar" />
      </div>
  );
};

export default App;
