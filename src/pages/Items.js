import React from "react";
import ItemsList from "../components/ItemComponents/ItemsList";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Items = () => {
  return (
    <Container className="mt-4">
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
      <Container className="bg-light mt-3" style={container.containerHeight}>
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
    </Container>
  );
};

const container = {
  header: {
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    color: "white",
  },

  containerHeight: {
    minHeight: "400px",
  },

  noneDecoration: {
    textDecoration: "none",
  },
};

export default Items;
