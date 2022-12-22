import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../Assets/logo.png";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Link to="/">
            <Image
              className="me-2 d-flex"
              src={logo}
              alt=""
              style={{ height: "50px" }}
            ></Image>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="text-decoration-none text-light mx-5">
              <Button variant="outline-secondary nav-menu-width">Home</Button>
            </Link>
            <Link to="/blog" className="text-decoration-none text-light">
              <Button className="nav-menu-width" variant="outline-secondary">
                Blog
              </Button>
            </Link>
          </Nav>

          <Nav className="align-items-center">
            {user?.uid ? (
              <div className="nav-menu">
                <Link className="text-style-none" to="/myReview">
                  <Button
                    className="d-block d-lg-inline nav-menu-width"
                    variant="outline-secondary"
                  >
                    My Reviews
                  </Button>
                </Link>
                <Link className="text-style-none" to="/addService">
                  <Button
                    className="d-block d-lg-inline text-style-none"
                    variant="outline-secondary"
                  >
                    Add Service
                  </Button>
                </Link>
                <Link className="text-style-none" to="/login">
                  <Button
                    className="d-block d-lg-inline nav-menu-width"
                    onClick={handleLogOut}
                    variant="outline-secondary"
                  >
                    Log Out
                  </Button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Button
                    className="nav-menu-width"
                    variant="outline-secondary"
                  >
                    Log In
                  </Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
