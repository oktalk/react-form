import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './layouts/main-layout';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainLayout />, div);
});
