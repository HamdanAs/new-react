import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { filterItemsValue } from "../../store";

export const FilterItem = () => {
  const [filterItemsState, filterItems] = useRecoilState(filterItemsValue);

  const filter = (e) => {
    const { value } = e.target;
    filterItems(value);
  };

  const clearFilter = () => filterItems("");

  return (
    <Form className="d-flex w-50 h-50 mx-auto">
      <FormControl
        className="me-2"
        type="search"
        placeholder="Cari barang..."
        aria-label="Search"
        value={filterItemsState}
        onChange={(e) => filter(e)}
      />

      <Button variant="info" onClick={() => clearFilter()}>
        Clear Filter
      </Button>
    </Form>
  );
};
