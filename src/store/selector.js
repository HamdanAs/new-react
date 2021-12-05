import { selector } from "recoil";
import { filterItemsValue, items } from "./atom";

export const filterItems = selector({
  key: "filterItems",
  get: ({ get }) => {
    const itemsState = get(items);
    const filterItemsValueState = get(filterItemsValue);

    if (filterItemsValueState.length) {
      return itemsState.filter(
        (item) => item.name.includes(filterItemsValueState.trim()) && item
      );
    }

    return items;
  },

  set: ({ set }, newValue) => set(items, newValue),
});
