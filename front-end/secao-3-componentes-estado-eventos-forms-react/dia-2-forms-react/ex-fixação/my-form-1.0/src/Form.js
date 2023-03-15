import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      texto: '',
      idade: 0,
      vaiComparecer: false,
    };
  }


  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form className="form">
          <label>
              <textarea name="texto" 
              value={this.state.texto} 
              onChange={this.handleChange} 
            />
          </label>
          <input
            type="number"
            name="idade"
            value={this.state.idade} 
            onChange={this.handleChange}
          />
          <input
            type="checkbox"
            name="vaiComparecer"
            value={this.state.vaiComparecer} 
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
