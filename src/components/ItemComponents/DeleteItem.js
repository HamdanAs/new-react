import { Modal, Button } from "react-bootstrap";
import React from "react";
import { useRecoilState } from "recoil";
import { items } from "../../store";

export const DeleteItem = (props) => {
  const { show, id, handleClose } = props;

  const [itemList, setItemList] = useRecoilState(items);
  const item = itemList.length ? itemList.find((it) => it.id === id) : null;
  const index = itemList.findIndex((it) => it === item);

  const deleteItem = () => {
    setItemList(removeItem(itemList, index));
    handleClose();
  };

  return (
    <>
      {item ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete the Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => deleteItem()}>
              Yes, Do it.
            </Button>
          </Modal.Footer>
        </Modal>
      ) : (
        ""
      )}
    </>
  );
};

function removeItem(items, i) {
  return [...items.slice(0, i), ...items.slice(i + 1)];
}
