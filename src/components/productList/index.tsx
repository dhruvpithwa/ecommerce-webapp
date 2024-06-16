

import { useEffect, useState } from "react";

import { ProductFilters } from "@/components/productList/filters";
import { productSortByAttributes } from "../../utils/constants/constants";
import { ProductList } from "@/components/productList/list";
import { useAppSelector } from "@/store/hooks";

export const Products = () => {

    const { category } = useAppSelector(state => state.productState);

    const [filters, setFilters] = useState({
        category: category,
        order: productSortByAttributes[0].value,
        q: ""
    })

    useEffect(()=>{
        setFilters({
            category: category,
            order: productSortByAttributes[0].value,
            q: ""
        })
    }, [category]);

    const filterChangeHandler = async (key: string, value: unknown) => setFilters((prevState) => {
        return {
            ...prevState,
            [key]: value
        }
    });

    return (
        <>
            <ProductFilters filters={filters} filterChangeHandler={filterChangeHandler} />
            <ProductList filters={filters} />
        </>
    );
}