import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App.js';

import './styles/fonts.css'; // global fonts styles

ReactDOM.render(<App />, document.getElementById('app'));

module.hot.accept();
