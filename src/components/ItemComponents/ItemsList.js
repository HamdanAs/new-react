import React, { useState, useEffect, useMemo, useRef } from "react";
import { getAll, remove, removeAll } from "../../services/ItemService";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useTable, usePagination } from "react-table";
import { ButtonGroup, Table, Button } from "react-bootstrap";

const ItemsList = (props) => {
  const [items, setItems] = useState([]);
  const itemsRef = useRef(items);
  const history = useHistory();

  itemsRef.current = items;

  useEffect(() => {
    retrieveItems();
  }, []);

  const retrieveItems = () => {
    getAll()
      .then((response) => {
        setItems(response.data.result);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveItems();
  };

  const openItem = (rowIndex) => {
    const id = itemsRef.current[rowIndex].id;

    history.push("/items/" + id);
  };

  const deleteItem = (rowIndex) => {
    const id = itemsRef.current[rowIndex].result[rowIndex].id;

    remove(id)
      .then((response) => {
        history.push("/items");

        let newItems = [...itemsRef.current];
        newItems.splice(rowIndex, 1);

        setItems(newItems);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = useMemo(
    () => [
      {
        Header: "Nama Barang",
        accessor: "name",
      },
      {
        Header: "Harga Beli",
        accessor: "base_price",
      },
      {
        Header: "Harga Jual",
        accessor: "price",
      },
      {
        Header: "Aksi",
        accessor: "actions",
        Cell: (props) => {
          const rowIdx = props.row.id;
          return (
            <ButtonGroup aria-label="Basic example">
              <Button variant="primary" onClick={() => openItem(rowIdx)}>
                Detail
              </Button>
              <Button variant="danger" onClick={() => deleteItem(rowIdx)}>
                Hapus
              </Button>
            </ButtonGroup>
          );
        },
      },
    ],
    []
  );

  const tableInstance = useTable({ columns, data: items, usePagination });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <Table striped bordered hover size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ItemsList;
