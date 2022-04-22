import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

class Header extends Component {
  render () {
    return (
      <Navbar expand variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Конвертер валют</Navbar.Brand>
        </Container>
      </Navbar>
    );
  };
}

export default Header;
