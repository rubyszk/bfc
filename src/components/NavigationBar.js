import React from 'react';
<<<<<<< HEAD
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
=======
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavigationBar extends React.Component {render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav.Link href="#"><Link to="/" className="navbar-brand" data-toggle="collapse" data-target="#navbar" ui-sref="home">Baby Fight Club</Link></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#"><Link to="/babies/duel" className="nav-link">Baby Duel!</Link></Nav.Link>
                <Nav.Link href="#"><Link to="/babies/all" className="nav-link">Baby Fighters!</Link></Nav.Link>
                {
                    this.props.currentUser !== null ? <Nav.Link href="#"><Link to="/babies/new" className="nav-link">New Baby!</Link></Nav.Link> : null
                }
                </Nav>
                {
                    this.props.currentUser !== null ?
                    (<Nav>
                        <Nav.Link href="#"><Link to="#" className="nav-link">Settings</Link></Nav.Link>
                        <Nav.Link href="#"><Link to="#" className="nav-link" onClick={() => this.props.logoutUser(this.props.currentUser)}>Log Out</Link></Nav.Link>
                      </Nav>) : 
                      (
                          <Nav>
                            <Nav.Link href="#"><Link to="/log-in" className="nav-link">Login</Link></Nav.Link>
                          </Nav>
                      )
                }
            </Navbar.Collapse>
            </Navbar>
        )
    }
>>>>>>> 2d8e85d3f38f4e41ff0b25949c73c29d06b702fa
}

export default NavigationBar;
