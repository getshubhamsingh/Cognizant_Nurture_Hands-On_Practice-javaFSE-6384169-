import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
    alert("Hello! Counter Increased ✅");
  };

  handleDecrement = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  };

  sayWelcome = () => {
    alert("Welcome to Event Handling Lab");
  };

  handleClick = () => {
    alert("I was clicked");
  };

  render() {
    return (
      <div style={{ padding: '40px', fontFamily: 'Arial' }}>
        <p>{this.state.count}</p>

        <div style={{ display: 'flex', flexDirection: 'column', width: '150px', gap: '10px' }}>
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
          <button onClick={this.sayWelcome}>Say welcome</button>
          <button onClick={this.handleClick}>Click on me</button>
        </div>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
