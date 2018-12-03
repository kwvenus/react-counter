import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    alert("now you know how to handle onclick event") 
  }

  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>
            Hello world!
          </button>
          <span>
            number: 0
          </span>
      </div>
    );
  }
}

export default App;
