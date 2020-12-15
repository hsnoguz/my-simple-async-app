import React, { Component } from 'react';

import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import Home  from './pages/Home'
import Products from './pages/Products'
import Reports from './pages/Reports'
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
            <Route path='/reports' component={Reports}></Route>
          </Switch>
        </Router>
    </div>
    )
  }
}

