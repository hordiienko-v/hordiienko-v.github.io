import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

import {fetchFromAPI} from '../scripts/script.js'


class RefreshButton extends Component {
  fetchRates = async () => {
    const rates = await fetchFromAPI();
    this.props.setRates(rates);
  };

  render () {
    return (
      <Button
        variant="dark"
        size="lg"
        value="Input"
        onClick={this.fetchRates}
        className={this.props.className}
      >
        Оновити
      </Button>
    );
  };
}

export default RefreshButton;
