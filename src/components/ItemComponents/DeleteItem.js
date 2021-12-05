import { Modal, Button } from "react-bootstrap";
import React from "react";
import { useRecoilState } from "recoil";
import { items } from "../../store";
import { remove } from "../../services/ItemService";
import AuthService from "../../services/AuthService";

export const DeleteItem = (props) => {
  const { show, id, handleClose } = props;
  const { token } = AuthService.getCurrentUser();

  const [itemList, setItemList] = useRecoilState(items);
  const item = itemList.length ? itemList.find((it) => it.id === id) : null;
  const index = itemList.findIndex((it) => it === item);

  const deleteItem = () => {
    remove(id, token)
      .then(() => {
        setItemList(removeItem(itemList, index));
        handleClose();
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {item ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hapus barang</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah anda yakin?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleClose()}>
              Tidak
            </Button>
            <Button variant="primary" onClick={() => deleteItem()}>
              Ya
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
