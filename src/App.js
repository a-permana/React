import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Container, Row, Col } from "reactstrap";
import './index';
// import Home from './auth/adminpage';
import Profile from './router/profile';
import Multiform from './router/multiform';
import Nameform from './router/nameform';
import About from './router/about';
import Main from './layouts/main';
import GetBook from './hook/GetBook';
import PostBook from './hook/PostBook';
import PutBook from './hook/PutBook';
import Login from './auth/login';
import Register from './auth/register';
import Home from './router/adminpage';
import GetBookUser from './hook/GetBookUser';
import OrderList from './hook/OrderList';
import User from './auth/userpage';
// import Logout from './auth/logout';
// import Notfound from './router/notfound';

const App = props => {
  return (
  <Router>
    <Switch>
      <Main>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/adminpage" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/multiform" component={Multiform} />
          <Route path="/nameform" component={Nameform} />
          <Route path="/GetBook" component={GetBook} />
          <Route path="/PostBook" component={PostBook} />
          <Route path="/PutBook/:id" component={PutBook} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/GetBookUser" component={GetBookUser} />
          <Route path="/OrderList" component={OrderList} />
          <Route path="/userpage" component={User} />
        </Switch>
      </Main>
    </Switch>
  </Router>
  );
};
export default App;