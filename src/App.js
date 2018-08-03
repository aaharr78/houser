import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Header from './component/Header/Header';
import {Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div >
       <Link to='/'>Dashboard</Link>
          <Link to='/Wizard'>Wizard</Link>
          <Route component={Dashboard} exact path= '/'/>
            <Route component={Wizard} path='/Wizard'/>
        <Header />
      </div>
    );
  }
}

export default App;
