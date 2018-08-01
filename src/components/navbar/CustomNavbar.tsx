import * as React from 'react';
import './CustomNavbar.css';
import {Nav, Navbar, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';

class CustomNavbar extends React.Component<{}, {}> {

    public render() {
        return (
            <Navbar default={true} collapseOnSelect={true}>
                <Navbar.Header>
                    <LinkContainer to="/car">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight={true}>
                        <LinkContainer to="/car">
                            <NavItem eventKey={1} onToggle={this.onNavItemSelect}>Cars</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/train">
                            <NavItem eventKey={2} onToggle={this.onNavItemSelect}>Trains</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    private onNavItemSelect = (e: any) => {
        console.log('Got click: ', e);
    }
}


export default CustomNavbar;
