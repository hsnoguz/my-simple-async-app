import React, { Component } from 'react';

import { connect } from 'react-redux';
import {BrowserRouter as Router,Switch, Route } from 'react-router-dom';

import { setSlider } from './actions/settingActions';


import Navbar from './components/Navbar'
import Home  from './pages/Home'
import Products from './pages/Products'
import FunctionHook from './pages/FunctionHook'

import './App.css'
// App.js
export class App extends Component {

  constructor(props){
    super(props);
 
    this.state = {
      sliderStatu: true
    }
  }

   incrementCount(state, props) {

    this.setState(state => ({...state,sliderStatu:!state.sliderStatu}));
  }


  changeSidebar = ()=>{ 
      this.setState(state => ({...state,sliderStatu:!state.sliderStatu}),()=>{
        this.updateSideBar(this.state.sliderStatu);
      });
  
  }

  componentDidMount() {
   
  }

  updateSideBar = sliderStatu => this.props.setSlider(sliderStatu);

  render() {
    return (
      <div>
        <Router>
          <Navbar parentsideBar={this.state.sliderStatu} changeSidebar={this.changeSidebar}></Navbar>
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


const mapStateToProps = (state, ownProps) => ({ slider: state.setting});
const mapDispatchToProps = {setSlider };
const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;

