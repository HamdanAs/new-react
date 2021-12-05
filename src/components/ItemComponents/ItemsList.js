import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { filterItems } from "../../store";
import Table from "../table";
import { getAll } from "../../services/ItemService";
import AuthService from "../../services/AuthService";

const ItemsList = (props) => {
  const [itemsState, setItemsState] = useRecoilState(filterItems);
  const { token } = AuthService.getCurrentUser();

  useEffect(() => {
    getAll(token).then((response) => {
      setItemsState(response.data.result);
    });
  });

  return <Table data={itemsState} rowsPerPage={5}></Table>;
};

export default ItemsList;
