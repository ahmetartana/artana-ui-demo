import { create } from "zustand";
import { IItem } from "../types";

export interface IItemState {
  itemList: IItem[];
  basketList: IItem[];
  add: (value: IItem) => void;
  addBasket: (id: number) => void;
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
        updateItem.price = value.price;
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
  addBasket: (id: number) =>
    set((prewState) => {
      let tempBasketList = [...prewState.basketList];
      let itemInBasket = prewState.basketList.find((m) => m.id === id);
      let itemInList = prewState.itemList.find((m) => m.id === id);
      if (itemInList) {
        itemInList.count -= 1;
        if (itemInBasket) {
          itemInBasket.count += 1;
          itemInBasket.amount = (
            parseFloat(itemInBasket.amount || "0") +
            parseFloat(itemInList.price || "0")
          ).toString();
        } else {
          const newBasketItem = { ...itemInList };
          newBasketItem.count = 1;
          newBasketItem.amount = parseFloat(
            newBasketItem.price || "0"
          ).toString();
          tempBasketList = [...tempBasketList, newBasketItem];
        }
      }
      return { basketList: tempBasketList };
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
