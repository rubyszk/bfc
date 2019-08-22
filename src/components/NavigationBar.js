import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>Baby Fight Club</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/babies/all'>Baby Fighters!</Nav.Link>
            <Nav.Link href='/babies/duel'>Baby Duel!</Nav.Link>
            <Nav.Link href='/babies/new'>New Baby!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavigationBar;
