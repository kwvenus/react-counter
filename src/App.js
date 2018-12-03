import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleClick = () => {
    alert("now you know how to handle onclick event")
    this.setState({number: 1})
  }
  state = {number: 0}
  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>
            Hello world!
          </button>
          <span>
            number: {this.state.number}
          </span>
      </div>
    );
  }
}

export default App;
