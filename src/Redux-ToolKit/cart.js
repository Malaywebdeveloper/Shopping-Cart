import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { storage: [] },
  reducers: {
    addData: (state, action) => {
      state.storage = [...state.storage, { ...action.payload, qty: 1 }];
    },
    removeData: (state, action) => {
      state.storage = state.storage.filter((val) => val.id !== action.payload);
    },
    increseItem: (state, action) => {
      state.storage = state.storage.filter((item) => {
        return item.id === action.payload ? (item.qty += 1) : item;
      });
    },
    decreseItem: (state, action) => {
      state.storage = state.storage.filter((item) => {
        return item.id === action.payload ? (item.qty -= 1) : item;
      });
    },
  },
});

export const { addData, removeData, increseItem, decreseItem } =
  cartSlice.actions;
