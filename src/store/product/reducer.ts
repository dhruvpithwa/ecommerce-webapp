import { Product } from "@/types/product";
import { PayloadAction } from "@reduxjs/toolkit";

export const reducers = {
    setProducts(state: any, action: PayloadAction<Product[]>){
        state.products = action.payload;
    },
    setProductCategories(state: any, action: PayloadAction<string[]>){
        state.productCategories = action.payload;
    },
    setCategory(state: any, action: PayloadAction<string>){
        state.category = action.payload;
    }
}