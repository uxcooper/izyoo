import React, { Component } from 'react';
import Logo from '../components/Logo/Logo';
import Navigation from '../components/Navigation/Navigation';

class App extends Component {
  render() {
    return (
      <div>
        <Logo />
        <Navigation />

        {/*
        <menu />
        <calendar />
        */}
      </div>
    );
  }
}

export default App;
