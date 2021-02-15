import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Courses from './pages/Courses';
import WebDesign from './pages/WebDesign';
import WebDesign1 from './pages/WebDesign1';
import WebDesign2 from './pages/WebDesign2';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Courses" component={Courses} />
      <Route exact path="/WebDesign" component={WebDesign} />
      <Route exact path="/WebDesign1" component={WebDesign1} />
      <Route exact path="/WebDesign2" component={WebDesign2} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
