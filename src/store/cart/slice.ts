import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducer";

export interface cartState {
    cart: string[];
}

const initialState: cartState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "cartState",
    initialState,
    reducers: reducers
});

export const cartActions = cartSlice.actions;