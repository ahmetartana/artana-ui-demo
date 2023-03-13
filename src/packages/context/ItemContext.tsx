import { create } from "zustand";
import { IItem } from "../types";

export interface IItemState {
  itemList: IItem[];
  basketList: IItem[];
  add: (value: IItem) => void;
  addBasket: (id: number[]) => void;
  removeBasket: (id: number[]) => void;
  remove: (id: number[]) => void;
  get: () => IItem[];
  reset: () => void;
}

export const useItemState = create<IItemState>()((set, get) => ({
  itemList: [],
  basketList: [],
  add: (value: IItem) =>
    set((prewState) => {
      let updateItem = prewState.itemList.find((m) => m.title === value.title);
      if (updateItem) {
        updateItem.title = value.title;
        updateItem.amount = value.amount;
        updateItem.count = value.count;
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
  removeBasket: (idList: number[]) =>
    set((prewState) => {
      const basketList: IItem[] = prewState.basketList;
      const filterList = [
        ...basketList.filter((m) => !idList.includes(m.id || 0)),
      ];

      return { basketList: filterList };
    }),
  remove: (idList: number[]) =>
    set((prewState) => {
      prewState.removeBasket(idList);
      const itemList: IItem[] = prewState.itemList;
      const filterList = [
        ...itemList.filter((m) => !idList.includes(m.id || 0)),
      ];

      return { itemList: filterList };
    }),
  get: () => get().itemList,
  reset: () => set(() => ({ itemList: [], basketList: [] })),
}));
