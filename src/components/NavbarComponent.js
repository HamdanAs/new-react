import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import AuthService from "../services/AuthService";

export const NavbarComponent = () => {
  const history = useHistory();

  const handleLogout = () => {
    AuthService.logout();
    history.push("/");
  };

  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="ms-auto" as={Link} to="/">
          Aplikasi Kasir
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/items">
              Data Barang
            </Nav.Link>
            <NavDropdown title="Transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/penjualan">
                Penjualan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pembelian">
                Pembelian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/retur">
                Retur
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {AuthService.getCurrentUser().checked ? (
              <NavDropdown
                title={AuthService.getCurrentUser().username}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profil
                </NavDropdown.Item>
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
