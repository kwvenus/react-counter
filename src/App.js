import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number.js';

class App extends Component {

  handleClick = () => {
    //alert("now you know how to handle onclick event")
    this.setState(
        {
          number: (this.state.number + this.props.onClick)
        }
      )
  }
  state = {number: this.props.defaultNum}
  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>
            Hello world!
          </button>
          <span>
            <Number/> {this.state.number}
          </span>
      </div>
    );
  }
}

export default App;
