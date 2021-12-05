import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { items } from "../../store";
import { v4 as uuid4 } from "uuid";
import { create } from "../../services/ItemService";
import AuthService from "../../services/AuthService";

const AddItem = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [description, setDescription] = useState("");
  const setItems = useSetRecoilState(items);
  const { token } = AuthService.getCurrentUser();

  const { show, close } = props;

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const onChangeBasePrice = (e) => {
    setBasePrice(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const addItem = () => {
    let newItem = {
      id: 0,
      name: name,
      description: description,
      basePrice: basePrice,
      price: price,
    };

    create(newItem, token)
      .then(() => {
        setItems((oldList) => [...oldList, newItem]);
        resetForm();
        close();
      })
      .catch((e) => console.log(e));
  };

  const resetForm = () => {
    setName("");
    setPrice(0);
    setBasePrice(0);
    setDescription("");
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah barang</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              placeholder="Enter the Product Name"
              onChange={(e) => onChangeName(e)}
            />
          </Form.Group>

          <Form.Group controlId="basePrice">
            <Form.Label>Base Price:</Form.Label>
            <Form.Control
              type="number"
              value={basePrice}
              placeholder="Enter the Product base price"
              onChange={(e) => onChangeBasePrice(e)}
            />
          </Form.Group>

          <Form.Group controlId="price">
            <Form.Label>Price:</Form.Label>
            <Form.Control
              type="number"
              value={price}
              placeholder="Enter the Product price"
              onChange={(e) => onChangePrice(e)}
            />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              value={description}
              placeholder="Enter the Product Description"
              onChange={(e) => onChangeDescription(e)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => addItem()}>
          Add
        </Button>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItem;
