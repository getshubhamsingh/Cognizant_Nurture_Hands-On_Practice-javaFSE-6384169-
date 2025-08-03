import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inr: ''
    };
  }

  handleChange = (e) => {
    this.setState({ inr: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const inrValue = parseFloat(this.state.inr);
    const euroRate = 80; // Using same fixed rate as shown in your screenshot
    const euroAmount = inrValue * euroRate;
    alert(`Converting to Euro Amount is ${euroAmount}`);
  };

  render() {
    return (
      <div style={{ marginTop: '30px' }}>
        <h2 style={{ color: 'green', fontWeight: 'bold' }}>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>Amount: </label>
            <input
              type="number"
              value={this.state.inr}
              onChange={this.handleChange}
              required
              style={{ marginLeft: '10px' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>Currency: </label>
            <input
              type="text"
              value="Euro"
              disabled
              style={{ marginLeft: '10px' }}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default CurrencyConvertor;
