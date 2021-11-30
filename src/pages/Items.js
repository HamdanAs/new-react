import React from "react";
import ItemsList from "../components/ItemComponents/ItemsList";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { container, midContainer } from "../styles/styles";
import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";

const Items = () => {
  const history = useHistory()
  
  if(!AuthService.getCurrentUser()){
          history.push("/")
  }

  return (
    <Container style={midContainer}>
      <div className="shadow-lg">
        <div style={container.header} className="py-3 bg-primary">
          <Form className="d-flex w-50 mx-auto">
            <FormControl
              className="me-2"
              type="search"
              placeholder="Cari barang..."
              aria-label="Search"
            />
          </Form>
        </div>
        <Container className="bg-light mt-3" style={container.containerSize}>
          <ItemsList></ItemsList>
        </Container>
        <div className="bg-primary">
          <Button variant="primary">
            <Link
              to="/items/add"
              style={container.noneDecoration}
              className="text-light decoration-none"
            >
              Tambah Data
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Items;
