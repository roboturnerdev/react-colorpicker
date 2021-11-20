import React, { Component } from 'react';
import BoxContainer from './components/BoxContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Color-Picker</h1>
        <BoxContainer />
      </div>
    );
  } 
}

export default App;
