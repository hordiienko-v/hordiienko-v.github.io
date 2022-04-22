import React, {Component} from 'react'


class CurrencySelect extends Component {
  handleChange = (e) => {
    const value = e.target.value;
    this.props.onChange(value);
  };

  render () {
    const {selected} = this.props;
    const options = this.props.codes.map((curr) => {
      return <option key={curr} value={curr}>{curr}</option>;
    });

    return (
      <select
        onChange={this.handleChange}
        className="form-select"
        value={this.props.selected}
      >
        {options}
      </select>
    );
  };
};

export default CurrencySelect;
