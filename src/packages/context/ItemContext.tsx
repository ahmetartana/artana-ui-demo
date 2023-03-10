import { create } from "zustand";
import { IItem } from "../types";

export interface IItemState {
  itemList: IItem[];
  basketList: IItem[];
  add: (value: IItem) => void;
  addBasket: (id: number[]) => void;
  remove: (id: number[]) => void;
  get: () => IItem[];
  reset: () => void;
}

export const useItemState = create<IItemState>()((set, get) => ({
  itemList: [],
  basketList: [],
  add: (value: IItem) =>
    set((prewState) => {
      let updateItem = prewState.itemList.find(
        (m) => m.productName === value.productName
      );
      if (updateItem) {
        updateItem.productName = value.productName;
        updateItem.productAmount = value.productAmount;
        updateItem.productCount = value.productCount;
        updateItem.status = value.status;
      } else {
        const newItem = {
          id:
            Math.max(
              ...(prewState.itemList.length > 0
                ? prewState.itemList
                : [{ id: 0 }]
              ).map((m) => m.id || 0)
            ) + 1,
          ...value,
        };
        prewState.itemList = [...prewState.itemList, newItem];
      }

      return { itemList: prewState.itemList };
    }),
  addBasket: (idList: number[]) =>
    set((prewState) => {
      const allIdListInBasket = [
        ...prewState.basketList.map((m) => m.id),
        ...idList,
      ];
      const itemList: IItem[] = prewState.itemList;
      const filterList = [
        ...itemList.filter((m) => allIdListInBasket.includes(m.id || 0)),
      ];

      return { basketList: filterList };
    }),
  remove: (idList: number[]) =>
    set((prewState) => {
      const itemList: IItem[] = prewState.itemList;
      const filterList = [
        ...itemList.filter((m) => !idList.includes(m.id || 0)),
      ];

      return { itemList: filterList };
    }),
  get: () => get().itemList,
  reset: () => set(() => ({ itemList: [] })),
}));
