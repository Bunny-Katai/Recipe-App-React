import { useContext } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import logo from './Logo.png';
import * as ReactBootStrap from 'react-bootstrap';


export default function Header ({ location }) {

    return (
        <div className="NavBar">
        <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
            <ReactBootStrap.Navbar.Brand href="/home"> <img className="Logo" src= { logo } alt="logo" width='180'/></ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">   
                <ReactBootStrap.Nav className="mr-auto">
                </ReactBootStrap.Nav>
                <ReactBootStrap.Nav>
                    <ReactBootStrap.Nav.Link href="/home">Home</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/recipes">Recipes</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="/favorite">Favorites</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse> 
        </ReactBootStrap.Navbar>
        </div>
    );
}

