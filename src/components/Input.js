import React, {Component} from 'react'

import FormControl from 'react-bootstrap/FormControl'


class Input extends Component {
  handleInput = (e) => {
    const {value} = e.target;
    this.props.onInput(value);
  };

  render () {
    return (
      <input
        className="form-control"
        type="number"
        onInput={this.handleInput}
        value={this.props.value}
        disabled={this.props.disabled==true}
      />
    );
  };
};

export default Input;
