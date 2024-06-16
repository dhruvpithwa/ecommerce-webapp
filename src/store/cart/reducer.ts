
import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
    addItems(state: any,  action: PayloadAction<string>){
        state.cart = [...state.cart, action.payload];
    }
}