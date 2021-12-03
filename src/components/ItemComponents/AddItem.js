import React, { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { create } from "../../services/ItemService";

const AddItem = (props) => {
  let show = props.show

  const initialItemState = {
    id: null,
    name: "",
    basePrice: 0,
    price: 0,
  };
  const [item, setItem] = useState(initialItemState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setItem({ ...item, [name]: value });
  };

  const saveItem = (e) => {
    e.preventDefault();

    let data = {
      name: item.name,
      base_price: item.basePrice,
      price: item.price,
      description: "description",
    };

    create(data)
      .then((response) => {
        setItem({
          id: response.data.id,
          name: response.data.name,
          basePrice: response.data.base_price,
          price: response.data.price,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newItem = () => {
    setItem(initialItemState);
    setSubmitted(false);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah data barang</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={saveItem}>
          <Form.Group className="mb-3" controlId="">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={item.name}
              onChange={handleInputChange}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Harga Beli</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={item.basePrice}
              onChange={handleInputChange}
              name="basePrice"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="">
            <Form.Label>Harga Jual</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              value={item.price}
              onChange={handleInputChange}
              name="price"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Simpan Data
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddItem;
