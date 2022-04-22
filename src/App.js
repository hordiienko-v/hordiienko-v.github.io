import React, { Component } from 'react'
import Stack from 'react-bootstrap/Stack'

import Header from './components/Header'
import TitleWithRefresh from './components/TitleWithRefresh'
import ConverterPane from './components/ConverterPane'

import {fetchFromAPI, getRate} from './scripts/script.js'


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      rates: [],
      codes: [],
      fromCurr: "UAH",
      toCurr: "UAH",
      fromValue: "",
    };
  };

  setRates = (data) => {
    const codes = ["UAH", ...data.map((i) => {return i.code})];

    this.setState({
      'rates': data,
      'codes': codes,
      'fromCurr': codes[0],
      'toCurr': codes[0],
    });
  };

  async componentDidMount () {
    const data = await fetchFromAPI();
    this.setRates(data);
  };

  selectFromCurr = (curr) => {
    this.setState({
      'fromCurr': curr,
    });
  };

  selectToCurr = (curr) => {
    this.setState({
      'toCurr': curr,
    });
  };

  setFromValue = (value) => {
    this.setState({
      'fromValue': value,
    });
  };

  render () {
    const toValue = this.state.fromValue * getRate(
      this.state.rates, this.state.fromCurr, this.state.toCurr
    );

    return (
      <Stack gap="5">
        <Header />
        <TitleWithRefresh
          setRates={this.setRates}
        />
        <ConverterPane
          codes={this.state.codes}
          fromValue={this.state.fromValue}
          toValue={toValue}
          selectToCurr={this.selectToCurr}
          selectedTo={this.state.toCurr}
          selectFromCurr={this.selectFromCurr}
          selectedFrom={this.state.fromCurr}
          setFromValue={this.setFromValue}
        />
      </Stack>
    );
  };
}

export default App;
