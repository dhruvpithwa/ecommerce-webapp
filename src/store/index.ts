import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import logger from 'redux-logger';

import { productSlice } from "./product/slice";
import { cartSlice } from "./cart/slice";

const combinedReducer = combineReducers({
    [productSlice.name]: productSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: any) => {
    if (action.type === HYDRATE) {

        const nextState = {
            ...state,
            ...action.payload,
            cartState: {...state.cartState } //for merging existing cart state with client side
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const makeStore = () => configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type Store = ReturnType<typeof makeStore>;

export type AppDispatch = Store['dispatch'];
export type RootState = ReturnType<Store["getState"]>;

export const wrapper = createWrapper<Store>(makeStore);