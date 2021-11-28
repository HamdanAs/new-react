import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavbarComponent = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="w-50" as={Link} to="/">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
