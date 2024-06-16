import { productSortBy } from "../../utils/constants/constants";
import { AppDispatch } from "..";
import { productActions } from "./slice";
import { Product } from "@/types/product";
import { logError } from "@/utils/logger";

const filterProducts = (products: Product[], query: string): Product[] => {
    const lowerCaseQuery = query.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(lowerCaseQuery) ||
        product.description.toLowerCase().includes(lowerCaseQuery)
    );
}

const sortProducts = (products: Product[], order: 'asc' | 'desc' = 'asc'): Product[] => {
    return products.sort((a, b) => {
        if (order === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });
}

export const fetchProducts = ({ category = "", order = productSortBy.NORMAL, q = "" }: { category?: string, order?: string, q?: string }) => {
    return async (dispatch: AppDispatch) => {
        try {
            const productRes = await fetch(`https://fakestoreapi.com/products/${category ? `category/${category}` : ''}`);
            let productArr: Product[] = await productRes.json();

            if (q !== "") {
                productArr = filterProducts(productArr, q);
            }
            if (order !== productSortBy.NORMAL) {
                productArr = sortProducts(productArr, order === productSortBy.LOWTOHIGH ? 'asc' : 'desc');
            }

            dispatch(productActions.setProducts(productArr));
            dispatch(productActions.setCategory(category));
            return productArr;
        }
        catch (error) {
            logError({ functionName: 'fetchProducts', error: error });
        }
    }
}

export const fetchProductCategories = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const productCategoryRes = await fetch('https://fakestoreapi.com/products/categories');
            const productCategoryArr: string[] = await productCategoryRes.json();
            dispatch(productActions.setProductCategories(productCategoryArr));
            return productCategoryArr;
        }
        catch (error) {
            logError({ functionName: 'fetchProductCategories', error: error });
        }
    }
}

export const searchProducts = (search: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const productRes = await fetch(`https://fakestoreapi.com/products/`);
            let productArr: Product[] = await productRes.json() ?? [];

            if (search !== "") {
                productArr = filterProducts(productArr, search);
            }
            return productArr.map((product: Product) => { return { label: product.title } });
        }
        catch (error) {
            logError({ functionName: 'searchProducts', error: error });
        }
    }
}