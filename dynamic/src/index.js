import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import  { BrowserRouter } from 'react-router-dom';
//import 'bootstrap/dist/css/bootstrap.css';
import Start from './components/Start';
import Bpp from './Bpp'

ReactDOM.render(<BrowserRouter><Bpp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
