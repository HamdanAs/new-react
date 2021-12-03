import React, { useState } from "react";
import ItemsList from "../components/ItemComponents/ItemsList";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { container, midContainer } from "../styles/styles";
import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";
import AddItem from "../components/ItemComponents/AddItem";

const Items = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  if (AuthService.getCurrentUser() == null) {
    history.push("/");
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
          <Button
            variant="primary"
            onClick={handleShow}
            style={container.noneDecoration}
          >
            Tambah Data
          </Button>
        </div>
      </div>

      <AddItem show={show} handleClose={handleClose}></AddItem>
    </Container>
  );
};

export default Items;
