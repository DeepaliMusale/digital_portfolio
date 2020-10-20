import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<BrowserRouter basename={window.location.pathname || ''}>
    <App />
    {/* <Route exact path='/' component={index} /> */}
</BrowserRouter>, 
document.getElementById('root'));
registerServiceWorker();
