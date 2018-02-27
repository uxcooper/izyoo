import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';
import MenuList from '../components/MenuList/MenuList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="navButton">
          <Logo />
          <Navigation />
        </div>
        <MenuList />
        
        {/*
        <calendar />
        */}
      </div>
    );
  }
}

export default App;
