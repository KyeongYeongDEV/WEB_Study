// Navigation.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Navigation() {
  return (
    <Navbar bg="primary" expand="lg">
      <LinkContainer to="/">
        <Navbar.Brand  className="navbar-brand text-white">My App</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/login">
            <Nav.Link className="navbar-brand text-white">로그인</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link className="navbar-brand text-white">회원가입</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
