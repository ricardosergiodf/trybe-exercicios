// src/App.js
import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    };

    this.handleButtonOne = this.handleButtonOne.bind(this);
    this.handleButtonTwo = this.handleButtonTwo.bind(this);
    this.handleButtonThree = this.handleButtonThree.bind(this);
  }

  handleButtonOne() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1,
    }));
  }

  handleButtonTwo() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1,
    }));
  }

  handleButtonThree() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1,
    }));
  }

  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { numeroDeCliques1, numeroDeCliques2, numeroDeCliques3 } = this.state;

    return (
      <div>
        <button onClick={this.handleButtonOne} style={{ backgroundColor: this.getButtonColor(numeroDeCliques1) }}>
          {`Cliques botão 1: ${numeroDeCliques1}`}
        </button>
        <button
          onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques2) }}>
          {`Cliques botão 2: ${numeroDeCliques2}`}
        </button>
        <button
          onClick={this.handleButtonThree}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}>
          {`Cliques botão 3: ${numeroDeCliques3}`}
        </button>
      </div>
    );
  }
}

export default App;