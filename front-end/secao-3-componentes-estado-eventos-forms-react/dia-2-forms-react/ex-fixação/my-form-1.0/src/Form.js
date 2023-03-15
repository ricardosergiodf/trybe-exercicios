import React, { Component } from 'react'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      texto: '',
    };
  }


  handleChange(event) {
    this.setState({
      texto: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        <form className="form">
          <label>
              <textarea name="texto" value={this.state.texto} onChange={this.handleChange} />
          </label>
          <input
            type="number"
            name="idade"
          />
          <input
            type="checkbox"
            name="vaiComparecer"
          />
        </form>
      </div>
    );
  }
}

export default Form;
