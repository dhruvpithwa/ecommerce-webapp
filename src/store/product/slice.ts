import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "./reducer";
import { Product } from "@/types/product";

export interface productState {
    products: Product[];
    productCategories: string[];
    category: string;
}

const initialState: productState = {
    products: [],
    productCategories: [],
    category: ''
}

export const productSlice = createSlice({
    name: "productState",
    initialState,
    reducers: reducers
});

export const productActions = productSlice.actions;