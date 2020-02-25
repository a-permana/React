import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Container, Row, Col } from "reactstrap";
import './index';
import Home from './router/home';
import Profile from './router/profile';
import Multiform from './router/multiform';
import Nameform from './router/nameform';
import About from './router/about';
import Main from './layouts/main';
import FormHook from './Validation/FormHook';
import GetBook from './hook/GetBook';
import PostBook from './hook/PostBook';
import PutBook from './hook/PutBook';
// import Notfound from './router/notfound';

const App = props => {
  return (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/multiform" component={Multiform} />
          <Route path="/nameform" component={Nameform} />
          <Route path="/FormHook" component={FormHook} />
          <Route path="/GetBook" component={GetBook} />
          <Route path="/PostBook" component={PostBook} />
          <Route path="/PutBook/:id" component={PutBook} />
          {/* <Route component={Notfound} /> */}
        </Switch>
      </Main>
    </Switch>
  </Router>
  );
};
export default App;