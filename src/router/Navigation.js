import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,Nav,
NavItem,
NavLink,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
DropdownItem

} from 'reactstrap';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <Navbar color="teal" light expand="md">
        <NavbarBrand href={'/'}>BelajarCode</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
            <div class="container"></div>
        <NavItem>
            <NavLink to="/home" tag={RRNavLink}>
                Home
            </NavLink> <br/>
        </NavItem>
        <NavItem>
            <NavLink to="/profile" tag={RRNavLink}>
                Profile
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/about" tag={RRNavLink}>
                About
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/FormHook" tag={RRNavLink}>
                Signup
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/GetBook" tag={RRNavLink}>
                Get
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/PostBook" tag={RRNavLink}>
                Post
            </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
            </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem><a class="link" href="multiform">Multiple Input</a></DropdownItem>
                    <DropdownItem><a class="link" href="nameform">Name Form</a></DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Collapse>
    </Navbar>
    );
};
export default Navigation;