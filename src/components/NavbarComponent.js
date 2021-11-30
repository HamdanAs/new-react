import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

export const NavbarComponent = () => {
 
  const checkUser = () => {
    if(!AuthService.getCurrentUser()){
      alert("Silahkan login terlebih dahulu!")      
    }
  }
  
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="w-50" as={Link} to="/">
          Aplikasi Kasir
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/items" onClick={checkUser}>
              Data Barang
            </Nav.Link>
            <NavDropdown title="Transaksi" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/penjualan" onClick={checkUser}>
                Penjualan
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/pembelian" onClick={checkUser}>
                Pembelian
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/retur" onClick={checkUser}>
                Retur
              </NavDropdown.Item>
            </NavDropdown>
            <Button variant="danger" className="ms-5" onClick={() => AuthService.logout()}>Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
