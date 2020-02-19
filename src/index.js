import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();

// import Profile from './router/profile';
// import About from './router/about';
// import Notfound from './router/notfound';
// import Multiform from './router/multiform';
// import Nameform from './router/nameform';
// import Form form './Validation/Form';
// import FormErrors from './Validation/FormErrors';