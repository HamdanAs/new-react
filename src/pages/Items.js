import React, { useEffect, useRef, useState } from "react";
import ItemsList from "../components/ItemComponents/ItemsList";
import { Container, Button } from "react-bootstrap";
import { container, midContainer } from "../styles/styles";
import AuthService from "../services/AuthService";
import { useHistory } from "react-router-dom";
import AddItem from "../components/ItemComponents/AddItem";
import { FilterItem } from "../components/ItemComponents/FilterItem";

const Items = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const history = useHistory();

  const [items, setItems] = useState([]);
  const itemsRef = useRef(items);

  itemsRef.current = items;

  useEffect(() => {
    retrieveItems();
  }, [items]);

  const retrieveItems = () => {};

  const refreshItems = () => {
    let newItem = [...itemsRef.current];

    setItems(newItem);
  };

  if (AuthService.getCurrentUser() == null) {
    history.push("/");
  }

  return (
    <Container style={midContainer}>
      <div className="shadow-lg">
        <div style={container.header} className="py-3 bg-primary">
          <FilterItem />
        </div>
        <Container className="bg-light mt-3" style={container.containerSize}>
          <ItemsList></ItemsList>
        </Container>
        <div className="bg-primary text-center">
          <Button
            variant="primary"
            onClick={handleShow}
            style={container.noneDecoration}
            className=""
          >
            Tambah Data
          </Button>
        </div>
      </div>

      <AddItem
        show={show}
        close={handleClose}
        refreshItems={refreshItems}
      ></AddItem>
    </Container>
  );
};

export default Items;
