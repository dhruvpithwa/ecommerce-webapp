
import { logError } from "@/utils/logger";
import { AppDispatch } from "..";
import { cartActions } from "./slice";


export const addItemsToCart = (productKey: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(cartActions.addItems(productKey));
        }
        catch (error) {
            logError({ functionName: 'addItemsToCart', error: error });
        }
    }
}

