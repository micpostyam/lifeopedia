import React from 'react';
import {Button, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {FaSearch, RiShutDownFill} from "react-icons/all";
import {Link} from "react-router-dom";

const Navigation = (props) => {
  const {login} = props
  return (
    <header className={"navigation shadow bg-white"}>
      <Navbar expand="lg">
        <Navbar.Brand href="/" className={"text-orange text-logo"}>LifeOpedia!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="text-uppercase font-weight-bold">
            <LinkContainer to="/" exact={true}><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer to="/design"><Nav.Link>Design</Nav.Link></LinkContainer>
            <LinkContainer to="/style"><Nav.Link>Style</Nav.Link></LinkContainer>
            <LinkContainer to="/travel"><Nav.Link>Travel</Nav.Link></LinkContainer>
            <LinkContainer to="/food"><Nav.Link>Food</Nav.Link></LinkContainer>
            <LinkContainer to="/aws"><Nav.Link>Aws</Nav.Link></LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <div className="text-uppercase font-weight-bold">
          {login ?
            <Link exact to="/" className="btn btn-primary">
              <RiShutDownFill/>
            </Link>
            :
            <Link exact to="/login" className="text-dark text-decoration-none">
              <span>LOGIN</span>
              <span className={"m-2"}> | </span>
              <span>REGISTER</span>
            </Link>
          }
          <Button variant="light" className={"btn-orange ml-2"}><FaSearch/></Button>
        </div>
      </Navbar>
    </header>
  );
};

export default Navigation;
