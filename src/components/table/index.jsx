import React, { useState } from "react";
import { useTable } from "../../utils/useTable";
import { TableFooter } from "./TableFooter";
import styles from "./Table.module.css";
import { ButtonGroup, Button } from "react-bootstrap";
import { UpdateItem } from "../ItemComponents/UpdateItem";
import { DeleteItem } from "../ItemComponents/DeleteItem";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const [userId4Actions, setUserId4Actions] = useState(0);

  // modals
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleEditClose = () => setShowEdit(false);
  const handleEditShow = () => setShowEdit(true);

  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);

  const editItem = (id) => {
    handleEditShow();
    setUserId4Actions(id);
  };

  const deleteItem = (id) => {
    handleDeleteShow();
    setUserId4Actions(id);
  };

  return (
    <div>
      <>
        <table className={styles.table}>
          <thead className={styles.tableRowHeader}>
            <tr>
              <th className={styles.tableHeader}>Nama Barang</th>
              <th className={styles.tableHeader}>Harga Beli</th>
              <th className={styles.tableHeader}>Harga Jual</th>
              <th className={styles.tableHeader}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {!slice.length ? (
              <tr className={styles.tableRowItems}>
                <td colSpan="4" className={styles.tableCell + " text-center"}>
                  No Items
                </td>
              </tr>
            ) : (
              slice.map((el, index) => (
                <tr className={styles.tableRowItems} key={index}>
                  <td className={styles.tableCell}>{el.name}</td>
                  <td className={styles.tableCell}>{el.basePrice}</td>
                  <td className={styles.tableCell}>{el.price}</td>
                  <td className={styles.tableCell}>
                    <ButtonGroup>
                      <Button
                        variant="danger"
                        onClick={() => deleteItem(el.id)}
                      >
                        Hapus
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => editItem(el.id)}
                      >
                        Detail
                      </Button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <TableFooter
          range={range}
          slice={slice}
          setPage={setPage}
          page={page}
        />
      </>

      <UpdateItem
        show={showEdit}
        id={userId4Actions}
        handleClose={handleEditClose}
      />

      <DeleteItem
        show={showDelete}
        id={userId4Actions}
        handleClose={handleDeleteClose}
      />
    </div>
  );
};

export default Table;
