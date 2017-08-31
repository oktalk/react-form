import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import MainLayout from './layouts/main-layout';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MainLayout />, document.getElementById('root'));
registerServiceWorker();
