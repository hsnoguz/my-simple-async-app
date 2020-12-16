import React, { Component } from 'react';

import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home  from './pages/Home'
import Products from './pages/Products'
import FunctionHook from './pages/FunctionHook'
import './App.css'
// App.js
export class App extends Component {
 
  render() {
    return (
      <div>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/products' component={Products}></Route>
            <Route path='/functionhook' component={FunctionHook}></Route>
          </Switch>
        </Router>
    </div>
    )
  }
}

