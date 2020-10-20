import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
<browserRouter basename={window.location.pathname || ''}>
    {/* <App /> */}
    <Route exact path='/' component={index} />
</browserRouter>, 
document.getElementById('root'));
registerServiceWorker();
