import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class NavigationBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">Baby Fight Club</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/babies/duel" className="nav-link">Baby Duel!</Link>
                <Link to="/babies/all" className="nav-link">Baby Fighters!</Link>
                {
                    this.props.currentUser !== {} ? <Link to="/babies/new" className="nav-link">New Baby!</Link> : null
                }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar;