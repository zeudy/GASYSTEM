import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import Routes from './Routes';
import NavP from './components/principal/NavP';
import {Link, NavLink} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div> <NavP/> 
       <div className="App">
        <NavLink to="/ingresos">
          <h1>
           
          </h1> 
        </NavLink>
        <Routes/> </div>

        
      </div> 
    );
  }
}

export default App;









  


      