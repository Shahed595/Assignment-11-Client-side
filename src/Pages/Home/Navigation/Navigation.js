import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../images/logo/logo.jpg";
import useAuth from "../../../Login/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, LogOut } = useAuth();
  return (
    <Navbar expand="lg" collapseOnSelect bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} style={{ width: 50, borderRadius: 100 }} alt="" />
        </Navbar.Brand>

        <Nav>
          <Nav.Link
            style={{ fontSize: 20, color: "white" }}
            as={HashLink}
            to="/home#home"
            className="navigationButton"
          >
            Home
          </Nav.Link>
          (
          <Nav.Link
            style={{ fontSize: 20, color: "white" }}
            as={HashLink}
            to="/manageallorder"
            className="navigationButton"
          >
            Manage All Order
          </Nav.Link>
          ) (
          <Nav.Link
            style={{ fontSize: 20, color: "white" }}
            as={HashLink}
            to="/myorder"
            className="navigationButton"
          >
            My Orders
          </Nav.Link>
          ) (
          <Nav.Link
            style={{ fontSize: 20, color: "white" }}
            as={HashLink}
            to="newservices"
            className="navigationButton"
          >
            Add New Services
          </Nav.Link>
          {user?.email ? (
            <Button onClick={LogOut}>Logout</Button>
          ) : (
            <Nav.Link
              style={{ fontSize: 20, color: "white" }}
              as={Link}
              to="login"
              className="navigationButton"
            >
              Login
            </Nav.Link>
          )}
          <Navbar.Text className="navigationButton">
            <a href="#login">{user.displayName}</a>
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
