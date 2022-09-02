import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doLogout, isLoggedIn, getCurrentUser } from '../auth'

const CustomNavbar = () => {

    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(undefined)

    useEffect(() => {

        setLogin(isLoggedIn())
        setUser(getCurrentUser())

    }, [login])


    const logout = () => {

        doLogout(() => {
            //logged out
            setLogin(false)
            navigate("/")
        })
    }

    return (
        <div>
            <Navbar color='success' dark expand="md" fixed='' className='px-4'>
                <NavbarBrand href="/" tag={ReactLink} to="/">Blog App</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/">
                                New Feed
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/about">
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={ReactLink} to="/services">
                                Services
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                More
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem tag={ReactLink} to="/contacts">Contant Us</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Instagram</DropdownItem>
                                <DropdownItem>LinkedIn</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>

                    <Nav navbar>

                        {
                            login && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/profile-info" >
                                            Profile Info
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/user/dashboard" >
                                            {user.email}
                                        </NavLink>
                                    </NavItem>

                                    <NavItem>
                                        <NavLink onClick={logout} >
                                            Logout
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                        }

                        {
                            !login && (
                                <>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/login" >
                                            Login
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={ReactLink} to="/signup" >
                                            Signup
                                        </NavLink>
                                    </NavItem>
                                </>
                            )
                        }

                    </Nav>

                </Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;