import { atom } from "recoil";

export const items = atom({
  key: "items",
  default: [],
});

export const filterItemsValue = atom({
  key: "filterItemsValue",
  default: "",
});
