import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { items } from "../../store";

export const UpdateItem = (props) => {
  const { show, id, handleClose } = props;

  const [itemList, setItemList] = useRecoilState(items);
  const item = itemList.length ? itemList.find((it) => it.id === id) : null;
  const index = itemList.findIndex((it) => it === item);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [basePrice, setBasePrice] = useState(0);
  const [description, setDescription] = useState("");

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

  const updateItem = () => {
    const newList = replaceItem(itemList, index, {
      ...item,
      name: name,
      price: price,
      basePrice: basePrice,
      description: description,
    });

    setItemList(newList);
    handleClose();
  };
  return (
    <>
      {item ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit the Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product Name"
                  defaultValue={item.name}
                  onChange={(e) => onChangeName(e)}
                />
              </Form.Group>

              <Form.Group controlId="Price">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product Price"
                  defaultValue={item.price}
                  onChange={(e) => onChangePrice(e)}
                />
              </Form.Group>

              <Form.Group controlId="basePrice">
                <Form.Label>basePrice</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter the Product basePrice"
                  defaultValue={item.basePrice}
                  onChange={(e) => onChangeBasePrice(e)}
                />
              </Form.Group>

              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the Product description"
                  defaultValue={item.description}
                  onChange={(e) => onChangeDescription(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => updateItem()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

function replaceItem(items, i, newVal) {
  return [...items.slice(0, i), newVal, ...items.slice(i + 1)];
}
