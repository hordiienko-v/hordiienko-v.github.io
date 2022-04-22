import React, { Component } from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CurrencySelect from './CurrencySelect'
import Input from './Input'


class ConverterPane extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <span className="fs-5">З валюти</span>
            <InputGroup>
              <Row>
                <Col>
                  <CurrencySelect
                    onChange={this.props.selectFromCurr}
                    codes={this.props.codes}
                    selected={this.props.fromCurr}
                  />
                </Col>
              </Row>
              <Input
                onInput={this.props.setFromValue}
                value={this.props.fromValue}
              />
            </InputGroup>
          </Col>

          <Col>
            <span className="fs-5">У валюту</span>
            <InputGroup>
              <Row>
                <Col>
                  <CurrencySelect
                    onChange={this.props.selectToCurr}
                    codes={this.props.codes}
                    selected={this.props.toCurr}
                  />
                </Col>
              </Row>
              <Input value={this.props.toValue} disabled/>
            </InputGroup>
          </Col>
        </Row>

      </Container>
    );
  };
}

export default ConverterPane;
