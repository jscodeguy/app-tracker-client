import React from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Dropdown } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: 'white',
    textDecoration: 'none'
}
const dropStyle = {
    color: 'grey',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
	<Dropdown className="d-inline mx-2">
		<Dropdown.Toggle variant='info' id="dropdown-autoclose-true">
		Applications
		</Dropdown.Toggle>
		<Dropdown.Menu>
			<Dropdown.Item>
				<Link to='createApplication' style={dropStyle}>
					Create an application
				</Link>
			</Dropdown.Item>
			<Dropdown.Item>
				<Link to='application' style={dropStyle}>
					Your applications
				</Link>
			</Dropdown.Item>
		</Dropdown.Menu>
  	</Dropdown>
		<Nav.Item>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='createApplication' style={linkStyle}>
				Create an application
			</Link>
		</Nav.Item>
		<Nav.Item>
			<Link to='application' style={linkStyle}>
				See your applications
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar bg='info' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
                App-Tracker
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
