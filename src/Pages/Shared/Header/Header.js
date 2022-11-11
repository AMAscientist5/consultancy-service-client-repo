import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import logo from "../../../Assets/logo.png";
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
              Home
            </Link>
            <Link to="/blog" className="text-decoration-none text-light">
              Blog
            </Link>
          </Nav>

          <Nav>
            {user?.uid ? (
              <div>
                <Link to="/myReview">
                  <Button variant="outline-secondary">My Reviews</Button>
                </Link>
                <Link to="/addService">
                  <Button variant="outline-secondary">Add Service</Button>
                </Link>
                <Link to="/login">
                  <Button onClick={handleLogOut} variant="outline-secondary">
                    Log Out
                  </Button>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <Button variant="outline-secondary">Log In</Button>
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
