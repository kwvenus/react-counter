import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Number from './Number.js';
import Line from './Line.js';

class App extends Component {

  handleClick = () => {
    //alert("now you know how to handle onclick event")
    this.setState(
        {
          number: (this.state.number + this.props.onClick),
          numberArray: new Array(this.state.number).fill()
        }
      )

  }
  state = {
    number: this.props.defaultNum,
    numberArray: new Array
  }
  render() {
    return (
      <div className="App">
          <button onClick={this.handleClick}>
            Hello world!
          </button>
          <span>
            <Number/> {this.state.number}
          </span>
          {this.state.numberArray.map(() => (<Line/>))}
      </div>
    );
  }
}

export default App;
