import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RefreshButton from './RefreshButton'

class TitleWithRefresh extends Component {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <p className="fs-3 fw-bold">Оберіть дві валюти для конвертації</p>
            <p className="fs-6">За потреби оновіть курс за допомогою кнопки "Оновити"</p>
          </Col>
          <Col className="col-auto position-relative">
            <RefreshButton
              setRates={this.props.setRates}
              className="position-absolute end-0 top-50 translate-middle-y"
            >
              Оновити
            </RefreshButton>
          </Col>
        </Row>
      </Container>
    );
  };
}

export default TitleWithRefresh;
