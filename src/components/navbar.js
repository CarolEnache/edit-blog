import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';

var UniqeIdMixin = require('unique-id-mixin');

class NavBarMenu extends Component{

    render(){
        return(
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Link Right</NavItem>
                        <NavItem eventKey={2} href="#">Link Right</NavItem>
                        <NavItem eventKey={3} href="#">Link Right</NavItem>
                        <NavItem eventKey={4} href="#">Link Right</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>       
             )
    }
}

export default NavBarMenu;