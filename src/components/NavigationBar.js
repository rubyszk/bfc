import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class NavigationBar extends React.Component {render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav.Link href="#"><Link to="/" className="navbar-brand" data-toggle="collapse" data-target="#navbar" ui-sref="home">Rumble</Link></Nav.Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#"><Link to="/babies/all" className="nav-link">View Fighters</Link></Nav.Link>
                <Nav.Link href="#"><Link to="/babies/duel" className="nav-link">Duel</Link></Nav.Link>
                {
                    this.props.currentUser !== null ? <Nav.Link href="#"><Link to="/babies/new" className="nav-link">Add A Fighter</Link></Nav.Link> : null
                }
                </Nav>
                {
                    this.props.currentUser !== null ?
                    (<Nav>
                        <Nav.Link href='#'><Link to='/user' className='nav-link'>Your Babies</Link></Nav.Link>
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
}

export default NavigationBar;
